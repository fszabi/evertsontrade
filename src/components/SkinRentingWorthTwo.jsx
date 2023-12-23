import SkinRentingWorthTwoItem from "./SkinRentingWorthTwoItem";

const skinRentingWorthsTwo = {
  firstRentingWorthTwo: `Tegyük fel nem örökre vásárolsz skineket, hanem folyamatosan cserélgetsz ezáltal minden cserénél buksz 5-10%ot, az 3-4 csere után jelentős kiesés lehet.`,
  secondRentingWorthTwo: `Példa: Egy kés jelenlegi Buff ára 100.000 FT amit egy kereskedőtől megvásárolsz 105.000 FT-ba, időközben be esik az értéke 95.000 FT-ra viszont teljes 
  árban nem vásárolják vissza az adott kést.`,
  thirdRentingWorthTwo: `Ezt a kést 80-90%os áron tudod eladni ami 76.000-85.500 FT között lehet. Röviden 20-25%ot buktál azon, hogy megvásároltál egy szinte 
  bármilyen értékű skint és azt x ideig használhattad.`,
  fourthRentingWorthTwo: `Ugyanúgy ezt a %ot egy 3000 FT-os tárgyon vagy akár egy 300.000 FT-os tárgyon is elveszitheted. Ezek a skinek luxus cikkek és nincs 
  különösebben szükséged rájuk, nem szükségesek az alap játékhoz mint pl a prime.`,
  fifthRentingWorthTwo: `Viszont ha már skineket vásárolsz azt megteheted okosabban és olcsóbban is ez a lehetőség által.`,
};

export default function SkinRentingWorthTwo() {
  return (
    <ul className="divide-y">
      <SkinRentingWorthTwoItem
        body={skinRentingWorthsTwo.firstRentingWorthTwo}
        padding="pb-8"
      />

      <SkinRentingWorthTwoItem
        body={skinRentingWorthsTwo.secondRentingWorthTwo}
        padding="py-8"
      />

      <SkinRentingWorthTwoItem
        body={skinRentingWorthsTwo.thirdRentingWorthTwo}
        padding="py-8"
      />

      <SkinRentingWorthTwoItem
        body={skinRentingWorthsTwo.fourthRentingWorthTwo}
        padding="py-8"
      />

      <SkinRentingWorthTwoItem
        body={skinRentingWorthsTwo.fifthRentingWorthTwo}
        padding="py-8"
      />
    </ul>
  );
}
