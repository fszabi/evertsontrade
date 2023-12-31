import DreamHack2014Item from "./DreamHack2014Item";

const dreamHack2014Bodies = {
  firstDreamHackBody: `Az egyik legnagyobb áremelkedést a CS2 megjelenésével a DreamHack 2014 Holos matricák érték el illetve a DreamHack 2014 Legends (Holo/Foil) kapszula.`,
  secondDreamHackBody: `Nagyon szép 4x-es craftokat lehet késziteni ezekből a matricákból. Idővel biztosan sokkal értékesebbek lesznek mivel nem csak régi de szépek is.`,
  thirdDreamHackBody: `Érdemes lehet az esetleges hype időszakokat kihasználni mivel legutóbb 2-3x növekedést értek el. A gyűjtők és a játékosok is kedvelik a DreamHack 14-es craftokat ezért egyszerű velük kereskedni.`,
};

export default function DreamHack2014() {
  return (
    <ul className="divide-y">
      <DreamHack2014Item
        body={dreamHack2014Bodies.firstDreamHackBody}
        padding="pb-8"
      />

      <DreamHack2014Item
        body={dreamHack2014Bodies.secondDreamHackBody}
        padding="py-8"
      />

      <DreamHack2014Item
        body={dreamHack2014Bodies.thirdDreamHackBody}
        padding="py-8"
      />
    </ul>
  );
}
