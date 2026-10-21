import { H2, P, Em, Table } from '../../paper';

export default function ShortestForms() {
  return (
    <>
      <H2 id="shortest-forms" n="2">The shortest forms</H2>
      <P>
        If a joke is a fold, it is worth asking how tight a fold can be and still land. The <Em>pun</Em> is
        the tightest fold that uses words: one word carrying two meanings at once. There may be something
        shorter still, the <Em>smile</Em>, which needs no words at all.
      </P>
      <P>
        That gives a possible order, from the most folded to the least, and it is the order of the next three
        sections.
      </P>
      <Table
        head={['Form', 'What carries it', 'What unfolds']}
        rows={[
          ['The smile', 'No words: a face', 'The gap between how serious something looks and how small it is'],
          ['The pun', 'One word', 'Two meanings in the same place'],
          ['The joke', 'A setup and a punchline', 'A frame everyone took as settled, opened to show what it hid'],
        ]}
        caption="Three forms of the same move, from the tightest fold to the longest."
      />
    </>
  );
}
