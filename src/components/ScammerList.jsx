import ScammerListItem from "./ScammerListItem";

const scammerBodies = {
  firstScamTip: `Elsősorban a facebook profil, nézd meg valós személy-e,keress rá más platformon, 
  győződj meg arról, hogy akivel te beszélsz az nem egy kamuprofil.`,
  secondScamTip: `Kérd el a steam profilját és nézd meg mennyire felépitett az,mennyi cseréje van, hány éve 
  létezik az a steam profil, mennyi barátja van és mekkora az inventoryjának az értéke. 
  Általában 4 5 ezer eurótól már megbizhatóak a személyek.`,
  thirdScamTip: `Láttam olyat, hogy valaki a bankszámláját mutogatta, személyi igazolványt küld, lakcimet stb, 
  ez mind szép és jó de lehet hogy full kamu. Viszont egy valós profil is ugyanúgy átverhet, vannak 
  olyan személyek akiknek teljesen mindegy a becsületük. Erre csak azt tudom mondani ne egy Lakatos Brendonnal akarj kereskedni.`,
  fourthScamTip: `Paypalos utalást minden esetben kerüld, a paypal amúgy is drága és visszahúzható a pénz. Akinek csak paypalja van 
  és máshogy nem tud fizetni azt hanyagolni kell mivel sosem lehet kideriteni, hogy kié az adott paypal fiók.`,
  fifthScamTip: `Gyakori szokás a csalóknál, hogy meglehetősen drágán vennék meg a dolgaid vagy nagyon olcsón akár fél árban adnának el neked, 
  ne dőlj be az ilyeneknek. Ami túl szép, hogy igaz legyen az nem igaz.`,
  sixthScamTip: `Kereskedj megbizható kereskedőkkel, nemhiába vannak erre a megfelelő személyek akik évekig épitgetik az inventoryjukat és 
  skineket halmoznak fel. Lehet hogy buksz 5-10%ot/trade de ha bescammelnek mindened elbukod.`,
  seventhScamTip: `Amennyiben mindenféleképpen más személlyel akarsz kereskedni használj egy közvetitőt 
  (middlemant), természetesen egy olyan személyt kérj meg aki megbizható.`,
  eighthScamTip: `Bárkinek bármilyen kérdése van fordúljon hozzám bizalommal. 
  Remélem tudtam segiteni és ezáltal sokan el fogják kerülni azt, hogy bescammeljék őket.`,
};

export default function ScammerList() {
  return (
    <ul className="divide-y">
      <ScammerListItem body={scammerBodies.firstScamTip} padding="pb-8" />

      <ScammerListItem body={scammerBodies.secondScamTip} padding="py-8" />

      <ScammerListItem body={scammerBodies.thirdScamTip} padding="py-8" />

      <ScammerListItem body={scammerBodies.fourthScamTip} padding="py-8" />

      <ScammerListItem body={scammerBodies.fifthScamTip} padding="py-8" />

      <ScammerListItem body={scammerBodies.sixthScamTip} padding="py-8" />

      <ScammerListItem body={scammerBodies.seventhScamTip} padding="py-8" />

      <ScammerListItem body={scammerBodies.eighthScamTip} padding="py-8" />
    </ul>
  );
}
