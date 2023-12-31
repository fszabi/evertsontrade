import DopplerItem from "./DopplerItem";

const dopplerBodies = {
  firstDopplerBody: `A Dopplerekből négy változat lehetséges Phase1-4-ig. 
  Szintén Minimal Wear és StatTrak™-os Dopplereket nem érdemes vásárolni mivel ugyan az a helyzet mint a Marble Fadeknél.`,
  secondDopplerBody: `Két nagy csoportra lehet osztani: Gamma Dopplerre és sima Dopplerre. 
  A Gamma Doppleren belül lehetséges az Emerald ami körülbelül 10x annyit ér mint egy sima Gamma 
  Doppler Phase1-4. Különböző Phasek között is más más árral kell számolni, a legértékesebb a Phase2 majd 4,3,1.`,
  thirdDopplerBody: `Dopplerből lehetséges Ruby,Shapphire és Black Pearl. A legritkább a Black Pearl viszont kb 
  felét éri a Ruby és Shapphirenak. Csak és kizárólag késekből illetve Glock-18 ból léteznek Dopplerek, abbol is Gamma 
  Doppler Phase1-4 illetve Emerald.`,
  fourthDopplerBody: `Jelenleg a Dopplerek kinézete a CS2 miatt folyamatosan változik ami miatt az árak is erősen ingadoznak, jelenleg leginkább lefelé.`,
};

export default function Doppler() {
  return (
    <ul className="divide-y">
      <DopplerItem body={dopplerBodies.firstDopplerBody} padding="pb-8" />

      <DopplerItem body={dopplerBodies.secondDopplerBody} padding="py-8" />

      <DopplerItem body={dopplerBodies.thirdDopplerBody} padding="py-8" />

      <DopplerItem body={dopplerBodies.fourthDopplerBody} padding="py-8" />
    </ul>
  );
}
