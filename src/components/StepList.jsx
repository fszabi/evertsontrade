import StepListItem from "./StepListItem";
import { Fragment } from "react";

const stepBodies = {
  firstStep: `Menj a kapcsolatfelvétel oldalra, 
  majd töltsd ki helyesen a mintát és küldd el.`,
  secondStep: `Felvesszük veled a kapcsolatot a megadott 
  elérhetőségeid egyikén.`,
  thirdStep: `Kapsz egy árajánlatot, illetve megmondjuk, 
  hogy melyik traderrel kell 
  felvenned a kapcsolatot.`,
  fourthStep: `Amennyiben elfogadtad az ajánlatunkat el kell 
  küldened a megadott tradernek a skinjeidet és megjegyzésbe 
  oda kell írnod a teljes nevedet és a számlaszámodat, vagy 
  ahhoz az egyéb fizetési opcióhoz tartozó adataidat, 
  amit választottál. 
  Amint az adott trader észreveszi 
  az offered el fogja fogadni és 
  átutalja neked a megbeszélt összeget.`,
  fifthStep: `Ha elégedett vagy velünk, 
  akkor kérlek ajánlj a barátaidnak.`,
};

export default function StepList() {
  return (
    <ul className="space-y-10">
      <StepListItem
        title="Első lépés"
        body={stepBodies.firstStep}
        icon={
          <Fragment>
            <i class="fa-solid fa-envelope"></i>
          </Fragment>
        }
      />

      <StepListItem
        title="Második lépés"
        body={stepBodies.secondStep}
        icon={
          <Fragment>
            <i class="fa-solid fa-people-arrows"></i>
          </Fragment>
        }
      />

      <StepListItem
        title="Harmadik lépés"
        body={stepBodies.thirdStep}
        icon={
          <Fragment>
            <i class="fa-solid fa-briefcase"></i>
          </Fragment>
        }
      />

      <StepListItem
        title="Negyedik lépés"
        body={stepBodies.fourthStep}
        icon={
          <Fragment>
            <i class="fa-regular fa-handshake"></i>
          </Fragment>
        }
      />

      <StepListItem
        title="Ötödik lépés"
        body={stepBodies.fifthStep}
        icon={
          <Fragment>
            <i class="fa-solid fa-user-group"></i>
          </Fragment>
        }
      />
    </ul>
  );
}
