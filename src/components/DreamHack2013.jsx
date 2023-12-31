import DreamHack2013Item from "./DreamHack2013Item";

const dreamHack2013Bodies = {
  firstDreamHackBody: `Az első Major 2013ban volt és azóta léteznek Souvenir Pack-ok amik különböző matricás skineket rejtenek.`,
  secondDreamHackBody: `Az egyik legdrágább Souvenir skinek a 2013 as papir és holos matricával ellátottak, nem csak azért drágák mert ezek a legrégebbiek de a matricák kifejezetten szépek.`,
  thirdDreamHackBody: `Különbőző méretben és különbőző módon elforgatva találhatóak meg az adott skinen ezek a matricák. Az áruk pár 100 euró is lehet, leginkább gyűjtők szokták vásárolni.`,
};

export default function DreamHack2013() {
  return (
    <ul className="divide-y">
      <DreamHack2013Item
        body={dreamHack2013Bodies.firstDreamHackBody}
        padding="pb-8"
      />

      <DreamHack2013Item
        body={dreamHack2013Bodies.secondDreamHackBody}
        padding="py-8"
      />

      <DreamHack2013Item
        body={dreamHack2013Bodies.thirdDreamHackBody}
        padding="py-8"
      />
    </ul>
  );
}
