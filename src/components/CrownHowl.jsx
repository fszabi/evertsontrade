import CrownHowlItem from "./CrownHowlItem";

const crownHowlBodies = {
  firstCrownHowlBody: `A fenti matricák közül a legmagasabb túlfizetést a Crown (Foil) ér ami lehet 70 eurótól több 100 eurós túlfizetés is poziciótól függően, 
  amennyiben 4 db van egy adott skinen úgy a 1-2 db matrica árát számolják fel pluszban.`,
  secondCrownHowlBody: `Jelenleg 3,411 db olyan skin van amin 4x Crown (Foil) és 36,568 olyan skin amin legalább 1 db található. A többi matricás skinekből pedig még kevesebb található.`,
  thirdCrownHowlBody: `Ritka és nehéz tovább adni, kifejezetten gyűjtőknek való.
  Kereskedni ezek közül a Crown (Foil) craftokkal és a Flammable (Foil)-al a legegyszerűbb viszont hetek/hónapok alatt kerülnek eladásra.`,
};

export default function CrownHowl() {
  return (
    <ul className="divide-y">
      <CrownHowlItem body={crownHowlBodies.firstCrownHowlBody} padding="pb-8" />

      <CrownHowlItem
        body={crownHowlBodies.secondCrownHowlBody}
        padding="py-8"
      />

      <CrownHowlItem body={crownHowlBodies.thirdCrownHowlBody} padding="py-8" />
    </ul>
  );
}
