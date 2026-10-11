"use client";

import { WikiFrame } from './wiki';
import { CONTENT } from './content';

export default function WikiRoute({ slug }) {
  const Content = CONTENT[slug];
  return (
    <WikiFrame slug={slug}>
      <Content />
    </WikiFrame>
  );
}
