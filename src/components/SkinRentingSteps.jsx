import SkinRentingStepsItem from "./SkinRentingStepsItem";

const skinRentingSteps = {
  firstRentingStep: `Nagyon fontos hogy a skinnek a teljes árát letétbe kell helyezni nálam mivel ez a biztositék arra, hogy nem fogsz lelépni az adott skinnel.`,
  secondRentingStep: `Ezt az összeget minden esetben vissza fogod kapni amint a skint vissza adtad nekem. Az árazás az aktuális piaci ár szerint történik mindig.`,
};

export default function SkinRentingSteps() {
  return (
    <ul className="divide-y">
      <SkinRentingStepsItem
        body={skinRentingSteps.firstRentingStep}
        padding="pb-8"
      />

      <SkinRentingStepsItem
        body={skinRentingSteps.secondRentingStep}
        padding="py-8"
      />
    </ul>
  );
}
