import { P, Em, A, H3, Pullout } from '../../paper';
import { Pop, Creed } from '../wiki';
import { href } from '../pages';

export default function UnionOfExtremes() {
  return (
    <>
      <P>
        Extremes (hot and cold, good and bad, sad and happy, self and world) are one thing split into two.
        Folding is the operation that unionises them back into the one they came from.<Creed id="horn-a" />
      </P>
      <Pullout>
        You do not resolve an extreme by picking a side, or by solving the gap. You resolve it by watching
        the split without over-charging it, in a controllable way, so that the spiral goes up.
      </Pullout>
      <P>
        In its simplest form: “one” already presupposes a boundary; one is already the fold. The real pair is
        the step from zero to one, which is the split itself. And a hidden split is what makes a problem
        exciting rather than merely hard (<Pop id="egg-columbus">the egg of Columbus</Pop>).
      </P>
      <P>
        Both
        levels stay real: a hand is solid, and it is also rules about almost-nothing. →{' '}
        <A href={href('rules-about-nothing')}>Rules about almost-nothing</A>
      </P>

      <H3>The machinery</H3>
      <P>
        The tools are the ones from <Pop id="folding-paper">Folding</Pop>. A <Pop id="seed">seed</Pop> holds the
        whole plant. <Pop id="path-compression">Path compression</Pop> collapses a chain to a single pointer.
        The number <Pop id="e">e</Pop> names, in one letter, a process that never finishes. <Pop
        id="reader-address">The reader of the address is the address</Pop>. And reality is{' '}
        <Pop id="full">full</Pop>: it holds the one and the not. In union-find, merging two sets is called,
        simply, a <Pop id="union-find-union">union</Pop>. Even <Pop id="joke">a joke is a fold</Pop>.
      </P>

      <H3>Limits are why folding is needed</H3>
      <P>
        Folding works with structure preserved, inside whatever limits exist. Those limits are real: the
        information a region can hold scales with its surface, not its volume (<Pop id="bekenstein">Bekenstein
        and the holographic bound</Pop>). That is not a flaw in the idea. It is the reason for it. <Em>If memory
        were infinite, nothing would need folding.</Em>
      </P>
      <P>
        My thinking about what reality is beneath its appearance owes something to{' '}
        <Pop id="hoffman">Donald Hoffman's interface theory</Pop>, which I credit for that and nothing more.
      </P>

      <H3>Holding both without collapse</H3>
      <P>
        Two results make the practice precise. <Pop id="paraconsistent">Paraconsistent logic</Pop> contains a
        contradiction locally without it spreading, which is the formal cousin of homeostasis as a
        compartmentaliser. And there is <Pop id="nfl">no free lunch</Pop>: every structure buys one thing by
        giving up another, so every fold is a trade.
      </P>
    </>
  );
}
