import { H2, H3, P, Em, M, Claim } from '../../paper';
import { Cite } from '../references';

export default function Limits() {
  return (
    <>
      <H2 id="limits" n="4">The claim, and its limits</H2>
      <Claim label="Claim 1">
        Folding is a fundamental operation of reality. The Sophon is less unrealistic than it sounds: we
        judge it impossible because we reason in everyday terms of space and time, but at the quantum
        scale and near a black hole those are not fixed limits.
      </Claim>
      <P>
        Gravity already folds matter far beyond intuition. Compressed within its Schwarzschild radius,
        the Sun would be about six kilometres across, and the Earth would be smaller than a marble,
        about 18 mm. Reality folds prodigiously. Two objections, both accepted, sharpen the claim.
      </P>
      <Claim label="Objection 1: crushing is not preserving" color="#fbbf24">
        A black hole folds by <em>destroying</em> accessible structure. The Sophon folds while
        <em> preserving</em> functional structure. These are opposite problems, and only the second is
        interesting here.
      </Claim>
      <Claim label="Objection 2: there are floors" color="#fbbf24">
        "Anything can be folded infinitely small" overreaches. The Planck length, about
        <M m="\;1.6 \times 10^{-35}" /> m, and the Bekenstein bound<Cite k="bekenstein" />, which caps the
        information a region can hold in proportion to its size and energy, set real floors.
      </Claim>

      <H3 n="4.1">Why the floors matter</H3>
      <P>
        These floors are real, and they are not a flaw in the idea of folding. They are the reason for it. The
        information a region can hold is finite, and the holographic bound says it scales with the area of the
        region's boundary, not its volume. If memory were infinite, nothing would need folding.
      </P>
      <Claim label="Claim 2: the limit is why folding is needed">
        Folding is folding with structure preserved, <Em>inside whatever limits exist</Em>. The limits do not argue
        against folding. They are what make it necessary.
      </Claim>
      <P>
        My thinking about reality beneath its appearance owes something to Donald Hoffman's interface theory of
        perception<Cite k={['hoffman2015', 'hoffman2019']} />. I credit it for that; no argument here rests on it.
      </P>
      <P>
        So the frontier is folding with <Em>retrievable structure
        preserved</Em>. The seed and the path-compressed tree do this. The black hole does not. The next
        section asks what the thing being folded is, if it is not physical.
      </P>
    </>
  );
}
