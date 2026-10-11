import { P, A, Pullout } from '../../paper';
import { DISCUSS } from '../pages';

export default function HowThisIsPublished() {
  return (
    <>
      <P>
        This writing appears on my own website, not in a peer-reviewed journal, and the choice is deliberate. I want
        to be exact about the reason, because it can be misread, and the misreading matters.
      </P>
      <P>
        It would be easy to assume I am avoiding criticism. I am not. I am inviting more of it than review would
        allow. The
        discussion is open, beside the text: post your sharpest objection <A href={DISCUSS}>there</A>, and it stays
        in public, under your name, for anyone to read and answer. Nothing here is hidden behind a gate, a
        paywall, or three anonymous referees. The exposure is greater, not smaller.
      </P>
      <P>
        What I decline is not the scrutiny. It is the verdict. Peer review does two things at once: it filters for
        error, and it crowns a winner. I welcome the first and refuse the second, because the crowning is what this
        writing is about. The argument bundles science and religion, and every religion, not only the two I happen to cite, up to the
        level of thought, where they are not rivals but parallel readings of the same unfolding. To submit that to a
        process built on adjudication, right against wrong, accepted against rejected, would be to re-impose the
        very duality this writing exists to dissolve. The form would contradict the content.
      </P>
      <P>
        So I should name the weakest wall myself, since a reader is right to look for it. “He skips review to escape
        being told he is wrong” is the fair suspicion, and I will not pretend it away. Here is how you can tell it is
        not that: an evasion reduces exposure, and this increases it. I am also telling you where this writing is
        unfinished. It walks to the edge of the hard problem and does not claim to have crossed it, and I do not yet
        know whether the spiral belongs to life itself or only to our telling of it. Those are the seams. I am
        pointing at them, not papering over them.
      </P>
              <Pullout>
          And perhaps that is the quiet thesis of the whole, stated early: ask why it is called the hard problem.
          The hardness may not sit in consciousness at all. It may sit in the frame — in posing the thing as a
          problem to be won, which manufactures the very tension that makes it feel unwinnable. Set the adversarial
          frame down, and see what is left.
        </Pullout>
      
    </>
  );
}
