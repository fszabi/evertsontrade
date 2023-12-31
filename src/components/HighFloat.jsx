import HighFloatItem from "./HighFloatItem";

const highFloatBodies = {
  firstHighFloatBody: `Nagyon sok skin sokkal szebb kopottabb verzióban és sokkal magasabb túlfizetést is érhet.`,
  secondHighFloatBody: `Vannak ritka skinek mint például az AWP - Asiimov ami 0.95 Float-tól számít Blackiimov-nak.`,
};

export default function HighFloat() {
  return (
    <ul className="divide-y">
      <HighFloatItem body={highFloatBodies.firstHighFloatBody} padding="pb-8" />

      <HighFloatItem
        body={highFloatBodies.secondHighFloatBody}
        padding="py-8"
      />
    </ul>
  );
}
