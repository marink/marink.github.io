// Fails the build when JSX would silently join two words across a line break.
// JSX drops whitespace that contains a newline next to a tag, so
//   …but <em>rules</em>
//   (distances…
// renders as "rules(distances". Add {' '} at the end of the first line instead.

import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = new URL('../app/philosophy', import.meta.url).pathname;
const INLINE = '(em|Em|strong|A|a|Pop|sup|span)';
const closesLine = new RegExp(`</${INLINE}>\\s*$`);
const opensLine = new RegExp(`^\\s*<${INLINE}\\b[^>]*>(.)`);

function* files(dir) {
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) yield* files(p);
    else if (/\.(jsx|js)$/.test(name)) yield p;
  }
}

const problems = [];
for (const file of files(ROOT)) {
  const lines = readFileSync(file, 'utf8').split('\n');
  for (let i = 0; i < lines.length - 1; i++) {
    const a = lines[i].trimEnd(), b = lines[i + 1].trim();
    if (closesLine.test(a) && /^[\p{L}\p{N}(“"‘'—]/u.test(b))
      problems.push(`${file}:${i + 1}  …${a.slice(-40)} ⏎ ${b.slice(0, 30)}`);
    const m = lines[i + 1].match(opensLine);
    if (m && m[2] !== ' ' && /[\p{L}\p{N},.;:)”"’—]$/u.test(a.trim()) && !/[>{(]$/.test(a.trim()))
      problems.push(`${file}:${i + 1}  …${a.trim().slice(-40)} ⏎ ${b.slice(0, 30)}`);
  }
}

if (problems.length) {
  console.error(`Words would be joined across a line break (add {' '}):\n${problems.join('\n')}`);
  process.exit(1);
}
console.log('jsx spacing: ok');
