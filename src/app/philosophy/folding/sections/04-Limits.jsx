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

      <H3 n="4.1">Where the floors live</H3>
      <P>
        Both floors are stated in terms of space, time and energy. They are limits <em>within</em>
        spacetime. Whether they are limits of reality depends on whether spacetime is fundamental, and
        that is no longer a settled assumption.
      </P>
      <P>
        Donald Hoffman's interface theory of perception argues that evolution tuned our senses to fitness
        payoffs rather than to the structure of the world. On this view, spacetime is a species-specific
        interface, a desktop, and physical objects are icons on it<Cite k={['hoffman2015', 'hoffman2019']} />.
        The view is contested, but it is a serious argument, and from the other direction a growing line of
        work in physics treats spacetime as emergent rather than fundamental.
      </P>
      <Claim label="Claim 2: the floors belong to the projection">
        If spacetime is an interface, then the Planck length and the Bekenstein bound are real limits of
        the <Em>rendering</Em>, the three-dimensional projection we live in, and not of the structure being
        rendered. Nothing can be folded below them <em>inside the interface</em>. That says nothing about
        the structure itself.
      </Claim>
      <P>
        So the frontier, as far as we can act on it, is folding with <Em>retrievable structure
        preserved</Em>. The seed and the path-compressed tree do this. The black hole does not. The next
        section asks what the thing being folded is, if it is not physical.
      </P>
    </>
  );
}
