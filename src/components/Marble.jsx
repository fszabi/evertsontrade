import MarbleItem from "./MarbleItem";

const marbleBodies = {
  firstMarbleBody: `Egyes Marble Fade késekből található Fire and Ice változat ami egészen 1-10 ig lehetséges. Ezek természetesen drágábbak mint a sima Marbe Fade kések.`,
  secondMarbleBody: `Viszont nem minden Marble Fadeből található Fire and Ice változat. Talon, Karambit, Gut és Flip-ből lehetséges csak.`,
  thirdMarbleBody: `A Minimal Wear és a StatTrak™-os  verziókat semmiféleképpen nem ajánlom megvásárlásra. Nagyon nehéz eladni mivel ezekből a 
  késekből csak Factory New és Minimal Wear-t dobhat a láda. A StatTrak™-os kések a pengén eléggé csúnyán néznek ki, Minimal Weart pedig kevesebb esély 
  nyitni ezért drágább mint a Factory New.`,
};

export default function Marble() {
  return (
    <ul className="divide-y">
      <MarbleItem body={marbleBodies.firstMarbleBody} padding="pb-8" />

      <MarbleItem body={marbleBodies.secondMarbleBody} padding="py-8" />

      <MarbleItem body={marbleBodies.thirdMarbleBody} padding="py-8" />
    </ul>
  );
}
