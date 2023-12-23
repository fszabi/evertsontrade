import SkinRentingWorthItem from "./SkinRentingWorthItem";

const skinRentingWorths = {
  firstRentingWorth: `Leginkább azoknak ajánlom ezt akik folyamatosan cserélgetik a skinjeiket vagy tudják előre, hogy x idő múlva szükségük lesz az adott összegre.`,
  secondRentingWorth: `Tulajdonképpen olyan mintha megvennéd de biztositékot kapsz arra, hogy visszaveszem tőled azon az áron amit te kifizettél nekem.`,
  thirdRentingWorth: `Ha a skin értéke 105.000 FTot ér de időközben le esik az ára 95.000 FT-ra te ugyanúgy 105.000 FT-ot fogsz visszakapni viszont ha a skin 
  értéke felmegy 120.000 FT-ra és te úgy döntesz, hogy nem adod vissza az is teljesen rendben van.`,
};

export default function SkinRentingWorth() {
  return (
    <ul className="divide-y">
      <SkinRentingWorthItem
        body={skinRentingWorths.firstRentingWorth}
        padding="pb-8"
      />

      <SkinRentingWorthItem
        body={skinRentingWorths.secondRentingWorth}
        padding="py-8"
      />

      <SkinRentingWorthItem
        body={skinRentingWorths.thirdRentingWorth}
        padding="py-8"
      />
    </ul>
  );
}
