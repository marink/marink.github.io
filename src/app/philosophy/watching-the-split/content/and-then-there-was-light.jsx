import { P, Em, H3, Pullout, Note, List } from '../../paper';

function Verse({ cite, children }) {
  return (
    <P>
      <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#cbd5e1' }}>{children}</span>
      <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.35)' }}> — {cite}</span>
    </P>
  );
}

export default function AndThenThereWasLight() {
  return (
    <>
      <H3>Two openings</H3>
      <Verse cite="Genesis 1:1–3">
        In the beginning God created the heaven and the earth. And the earth was without form, and void; and
        darkness was upon the face of the deep. … And God said, Let there be light: and there was light.
      </Verse>
      <Verse cite="John 1:1">
        In the beginning was the Word, and the Word was with God, and the Word was God.
      </Verse>
      <P>
        I do not decorate Genesis. I read the fold that is already in it. Light arrives, and at once it is
        divided:
      </P>
      <Verse cite="Genesis 1:4–5">
        And God saw the light, that it was good: and God divided the light from the darkness. And God called the
        light Day, and the darkness he called Night.
      </Verse>
      <Pullout>
        The first fold is the first split: zero to one. Light divided from darkness, and each side named. That is
        the duality, given for free on the first page.
      </Pullout>

      <H3>A change of mood</H3>
      <P>
        One grammatical shift carries the whole theory. Not <Em>“Let there be light”</Em>, a command issued from
        outside, but <Em>“and then there was light”</Em>: light simply arriving, the next thing that unfolds, with
        no commander standing over it. From the imperative to the indicative. Not instruction from outside, but
        unfolding from within, and the difference between “let there be” and “and then there was” is where the
        keystone lives: awareness, not instruction.
      </P>

      <H3>The stations ahead</H3>
      <P>
        The refrain will return at each stage of this line of thought:
      </P>
      <List ordered>
        <li><em>And then there was light</em>: the first fold, the first division.</li>
        <li><em>And then there were questions</em>: your own doubt, seated inside the cadence.</li>
        <li><em>And then there was biology, and science</em>: the questions unfolding into the library.</li>
        <li><em>And then there was AI</em>: the rung this is written from.</li>
      </List>
      <Note label="A rule I hold myself to">
        A refrain is powerful and seductive: a cadence can carry a reader past a gap on rhythm alone, so that a
        claim feels proven because it sounds like scripture. So the refrain marks the stations, and it proves
        nothing. Each station has to be earned by the prose between the refrains. If the chant alone convinces
        you, that is hypnosis; if it only marks ground the argument has already won, it is composition.
      </Note>
    </>
  );
}
