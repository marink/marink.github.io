import { P, Em, A, H3, Pullout, Claim, Note } from '../../paper';
import { href } from '../pages';

function Verse({ cite, children }) {
  return (
    <P>
      <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#cbd5e1' }}>{children}</span>
      <span style={{ fontSize: 12.5, color: 'rgba(255,255,255,0.35)' }}> — {cite}</span>
    </P>
  );
}

export default function UnfoldYourScepticism() {
  return (
    <>
      <H3>Why the Bible</H3>
      <P>
        The Bible is the most-preserved fold in human history: folded content passed down a lossy channel, its
        source receding with every hand-off. I go to it precisely because it is the most-read, most-copied
        address there is, which makes it the cleanest place to watch folding happen at scale.
      </P>
      <P>
        It is not special in kind. The Quran, too, holds packed statements, open to interpretation because they
        were folded. So does any teaching carried down a lossy channel: a method dictated from a teacher's notes long
        after its author has been forgotten, its source receding with each hand-off. The Bible is simply the
        most-preserved specimen of a structure every teaching shares.
      </P>
      <P>
        If your first reaction is “why read this, it is myth”, good. I am not asking you to believe it. I am asking
        you to read it as a fold, a structure. That keeps your scepticism awake, which is the opposite of the
        “just believe” you may have been burned by.
      </P>

      <H3>From dust</H3>
      <Verse cite="Genesis 2:7">
        And the LORD God formed man of the dust of the ground, and breathed into his nostrils the breath of life;
        and man became a living soul.
      </Verse>
      <Verse cite="Genesis 3:19">… for dust thou art, and unto dust shalt thou return.</Verse>
      <P>
        You are right to balk. Now look how much is folded in here. <Em>Dust</Em> is the formless, the
        undifferentiated, the almost-nothing: the empty atom, the smear before the pattern. <Em>Life</Em> is
        structure breathed into the dust: the address read into the formless, rules organising almost-nothing into
        a living pattern. <Em>To dust you shall return</Em> is the fold closing, the pattern released back into
        formlessness. Birth and death as the opening and closing of a fold, in a handful of words.
      </P>
      <Note label="See it unfold — three minutes">
        Watch <A href="https://www.youtube.com/watch?v=8Are9dDbW24"><em>Cosmic Eye</em></A>, the astrophysicist Danail
        Obreschkow's zoom from a human face out to the cosmic web, and back in to the smallest particles. The only
        transition it is missing is the last one: the particles, zoomed further, turning into a smear, then into a
        mathematical equation, and then back out to the galaxy. Watch it to get a feel for the Thought, folded,
        unfolding into galaxies, planets, humans … particles, and back to the thought, reality as mathematics, and
        then back out again, in a loop.
      </Note>
      <P>
        It reads as myth precisely because it is so compressed. A fold that dense cannot be unpacked by a casual
        reading, so it bounces off as a quaint story. The feeling of myth is not evidence of falsehood. It is
        evidence of something highly folded, as a one-line theorem looks trivial before its proof is unfolded.
      </P>

      <H3>Run it backwards</H3>
      <P>
        Tell someone in ancient times that you will hold a flat square of glass that talks back to you like a
        person, shows any place on earth and answers any question. They would file it as myth: the same eye-roll,
        in the opposite direction. The glass square is the ancient listener's “man from dust”, a true thing so
        densely folded that, delivered flat to a mind without the unfolding context, it can only land as magic.
      </P>
      <P>
        And the ancient listener would be wrong, which you know, because you are holding the glass square. So the
        principle has to be granted: the feeling of myth can hide a true fold.
      </P>
      <Claim label="The knife, kept" color="#fbbf24">
        The reversal shows that something which sounds like myth <em>can</em> be a true fold. It does not show that
        “dust” <em>is</em> one. A thousand other ancient myths were simply wrong. So it earns “do not dismiss it for
        sounding absurd; read on”. It does not earn “therefore it is true”.
      </Claim>

      <H3>Compression, not failure</H3>
      <P>
        If the Bible had tried to fully unfold the circle of life, person to dust and dust to person, it would have
        needed a library of biology, and nobody would have read it. “From dust you came, to dust you return” is not
        a failure to explain. It is the only form that gets read at all: a fold light enough to carry down three
        thousand years of lossy channel and still land. The feeling of myth is the cost of the compression; the
        compression is why it survived where the library would not have.
      </P>
      <Pullout>
        And it does a fair job of getting readers interested in learning about life. The fold earns its keep by
        delivering appetite, not the biology. Unread truth is a closed fold; a read myth is a living one.
      </Pullout>

      <H3>Unfold your scepticism</H3>
      <P>
        The information lost in the compression does not vanish. From the reader's side, it shows up <em>as</em>{' '}
        scepticism. The gaps in the fold and the doubt in the reader are the same thing seen from two sides. The
        doubt is accurate: something really is missing. It is only pointed in the wrong direction, reading
        “something is missing” as “this is false” when it may mean “this is folded”.
      </P>
      <P>
        So I do not ask you to drop your doubt. I ask you to unfold it. “This is false” is itself a tight fold,
        packed down from the more accurate “something is missing that I cannot see”. Open it, and the energy that
        was closing the page becomes the energy that reads it.
      </P>
      <Claim label="Unfolding a doubt is not removing it" color="#fbbf24">
        Sometimes a fold has a real gap, not a hidden treasure. Unfolding your scepticism must leave room to land on
        a genuine hole. Otherwise it would mean “doubt me until you agree”, which is hypnosis. The honest version:
        unfold the doubt until it points precisely at what is actually missing, instead of vaguely rejecting the
        whole. Sometimes that vindicates the text; sometimes it convicts it. Both are the method working.
      </Claim>
      <P>
        Not every line will unfold into this frame, and I will not force the ones that do not. Forcing a reading to
        fit is exactly what this writing warns against. → <A href={href('real-enemy')}>The real enemy</A>
      </P>
    </>
  );
}
