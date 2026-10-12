import { P, Em, A, H3, Pullout, Claim, List } from '../../paper';
import { Pop, Invite } from '../wiki';
import { href } from '../pages';

function Beat({ children }) {
  return (
    <P>
      <span style={{ fontFamily: 'Georgia, serif', fontStyle: 'italic', color: '#c4b5fd' }}>{children}</span>
    </P>
  );
}

export default function EternalLife() {
  return (
    <>
      <P>
        My whole philosophy started from the thought of eternal life. Eternal life. It sounds absurd. Keep reading:
        the next lines have to cash that cheque, and if they do not, you should stop.
      </P>
      <P>
        Not an endless state to be reached. That would be a closed circle, and it is not available. Eternal life is
        the unfolding that never closes. To continue life <em>is</em> eternal life: the refusal to close, lived now.<Invite />
        Wanting life to continue and knowing that no theory completes are one and the same wanting.
        (<Pop id="up-spiral">The up-spiral</Pop>.)
      </P>

      <H3>Go with me</H3>
      <P>
        “Go with me” is not a figure of speech here. It is the content. Going with me is living the life: the
        deliberate act of choosing life is the step you take by continuing to read. This page tries to make you
        aware of what we are doing while we do it: not describing the journey from outside, but narrating the very
        act you are performing as you read.
      </P>
      <Beat>Do you want to die?</Beat>
      <P>No. Then keep reading. Keep unfolding.</P>
      <P>
        And keep your scepticism with you. “Keep reading” must never become a lullaby. Mine travels with me in the
        back seat, awake, not driving: I like this, and I am still suspicious of it. You can put this page down at
        any moment, and you should be able to. If you could not, it would be hypnosis, not an invitation.
      </P>

      <H3>The chase is the climb</H3>
      <P>
        Picture a dog chasing its tail. It looks like a circle. It is not: the dog is climbing, gaining the
        experience of why the tail cannot be caught. Chasing the accurate description is the unravelling of life,
        and that is infinite. There is no stop in it, no pause, no arrival. The chasing is the climbing, one
        unbroken motion. And it is favourable: you unfold favourably while chasing the tail. Awareness is gladness
        in the endless chase, not vigilance against failure.
      </P>
      <Beat>Do you want to die?</Beat>
      <P>No. Then the chase goes on, and so does the reading.</P>

      <H3>The journey, not the destination</H3>
      <P>
        “It's the journey, not the destination” is a worn fold, recited without being felt. Unfold it, and the
        reason appears: the journey matters because the destination is a fold that can never arrive. Gödel will
        not allow it. The cliché and the theory are the same statement at two compressions.
      </P>
      <Pullout>
        The thought of eternal life, followed far enough, spirals back to itself, higher up: to continue is the
        eternal part.
      </Pullout>
      <H3>Keep going, in every coat</H3>
      <P>
        We already carry folded versions of “keep reading”. Each domain has its own, and they are the same
        instruction in different coats:
      </P>
      <List>
        <li><Em>Stay in school</Em>, in everyday wisdom.</li>
        <li><Em>Keep reading the scripture</Em>, in religion.</li>
        <li><Em>Keep studying science</Em>, in science.</li>
        <li><Em>Live your life</Em>, the most folded of all.</li>
      </List>
      <P>
        All of them mean one thing: keep going through the part that has not paid off yet, do not quit at the
        contradiction, trust the unfolding before the payoff arrives. Told flat, they bounce, like fridge magnets.
        They land when you unfold <em>why</em> you stay. And “live your life”, unfolded, is this whole writing:
        living is the unfolding. It has the same structure as the journey and the destination.
      </P>
      <P>
        The grown-up version is scientific literature: a field full of apparent contradictions and open problems,
        where you keep working rather than freeze. That is the same shape as living through the{' '}
        <A href={`${href('ups-and-downs')}#grey-areas`}>grey areas</A>.
      </P>
      <P>
        And because each domain already says “keep going” in its own coat, the domains rhyme at that level. That is
        the invitation to unfold rather than fight (<A href={`${href('real-enemy')}#not`}>what this writing is
        not</A>).
      </P>

      <Claim label="Remember the weather" color="#fbbf24">
        Choosing life is a choice at the forks that are real. Some downs are not forks at all; they are weather, and
        you survive them by continuing, not by blaming yourself. → <A href={href('ups-and-downs')}>Ups and downs</A>
      </Claim>
    </>
  );
}
