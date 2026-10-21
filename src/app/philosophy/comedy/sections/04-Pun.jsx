import { H2, H3, P, Em, A, Pullout, Note } from '../../paper';

export default function Pun() {
  return (
    <>
      <H2 id="pun" n="4">The pun: a self-reading address</H2>
      <P>
        Much of what I write is about addresses: the fold as an <A href="/philosophy/folding#address">address</A> into
        a space of possibilities, alternative addresses, and the search for the right one, when in fact the
        address was in hand all along. Then I found a pun that does exactly this.
      </P>

      <H3 n="4.1">The address that says what it is</H3>
      <P>
        The usual way to find someone online is a <em>.com</em> address. With the newer top-level domains, I
        asked myself what my own website would be, and the answer was the address of this site:
      </P>
      <Pullout>
        <Em>marin.kokona.website</Em>, which reads out as a sentence: <em>Marin Kokona, website.</em> The
        address says what it is. It is a self-reading address.
      </Pullout>
      <P>
        And I read my own address: I read my own website. A website address is better than a home address in
        one way that matters here. Anyone can visit it and read it.
      </P>

      <H3 n="4.2">Found, not prepared</H3>
      <P>
        To be honest about it: I did not build this pun. I became aware of it after I had already lived in
        it. That difference matters. <Em>A built pun feels clever; a found pun feels true.</Em> The built
        one shows the skill of the person folding. The found one shows that the fold was already there,
        waiting to be read.
      </P>

      <Note label="Why the address has outside readers">
        A self-reading loop is safe only when it is not sealed. A thermostat reads its own temperature and
        corrects itself, but it still needs batteries from outside to keep running. A website that only its
        owner reads is a sealed loop. Outside readers are the batteries.
      </Note>
    </>
  );
}
