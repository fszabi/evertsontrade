import MarbleAndDopplerItem from "./MarbleAndDopplerItem";

const marbleAndDopplerBodies = {
  firstMarbleAndDopplerBody: `Egyes Marble Fade késekből található Fire and Ice változat ami egészen 1-10 ig lehetséges. Ezek természetesen drágábbak mint a sima Marbe Fade kések.`,
  secondMarbleAndDopplerBody: `Viszont nem minden Marble Fadeből található Fire and Ice változat.. Talon, Karambit, Gut és Flip-ből lehetséges csak.`,
  thirdMarbleAndDopplerBody: `A Minimal Wear és a StatTrak™-os  verziókat semmiféleképpen nem ajánlom megvásárlásra. Nagyon nehéz eladni mivel ezekből a 
  késekből csak Factory New és Minimal Wear-t dobhat a láda. A StatTrak™-os kések a pengén eléggé csúnyán néznek ki, Minimal Weart pedig kevesebb esély 
  nyitni ezért drágább mint a Factory New.`,
  fourthMarbleAndDopplerBody: `A Dopplerekből négy változat lehetséges Phase1-4-ig. 
  Szintén Minimal Wear és StatTrak™-os Dopplereket nem érdemes vásárolni mivel ugyan az a helyzet mint a Marble Fadeknél.`,
  fifthMarbleAndDopplerBody: `Két nagy csoportra lehet osztani: Gamma Dopplerre és sima Dopplerre. 
  A Gamma Doppleren belül lehetséges az Emeráld ami körülbelül 10x annyit ér mint egy sima Gamma 
  Doppler Phase1-4. Különböző Phasek között is más más árral kell számolni, a legértékesebb a Phase2 majd 4,3,1.`,
  sixthMarbleAndDopplerBody: `Dopplerből lehetséges Ruby,Shapphire és Black Pearl. A legritkább a Black Pearl viszont kb 
  felét éri a Ruby és Shapphirenak. Csak és kizárólag késekből illetve Glock-18 ból léteznek Dopplerek, abbol is Gamma 
  Doppler Phase1-4 illetve Emerald.`,
  seventhMarbleAndDopplerBody: `Jelenleg a Dopplerek kinézete a CS2 miatt folyamatosan változik ami miatt az árak is erősen ingadoznak, jelenleg leginkább lefelé.`,
};

export default function MarbleAndDoppler() {
  return (
    <ul className="divide-y">
      <MarbleAndDopplerItem
        body={marbleAndDopplerBodies.firstMarbleAndDopplerBody}
        padding="pb-8"
      />

      <MarbleAndDopplerItem
        body={marbleAndDopplerBodies.secondMarbleAndDopplerBody}
        padding="py-8"
      />

      <MarbleAndDopplerItem
        body={marbleAndDopplerBodies.thirdMarbleAndDopplerBody}
        padding="py-8"
      />

      <MarbleAndDopplerItem
        body={marbleAndDopplerBodies.fourthMarbleAndDopplerBody}
        padding="py-8"
      />

      <MarbleAndDopplerItem
        body={marbleAndDopplerBodies.fifthMarbleAndDopplerBody}
        padding="py-8"
      />

      <MarbleAndDopplerItem
        body={marbleAndDopplerBodies.sixthMarbleAndDopplerBody}
        padding="py-8"
      />

      <MarbleAndDopplerItem
        body={marbleAndDopplerBodies.seventhMarbleAndDopplerBody}
        padding="py-8"
      />
    </ul>
  );
}
