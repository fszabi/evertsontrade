import StepListItem from "./StepListItem";
import { Fragment } from "react";
import Section from "./Section";
import Container from "./Container";

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
    <Section>
      <Container customStyles="space-y-12">
        <h2 className="text-center uppercase font-sans-2 font-bold text-2xl max-sm:text-xl">
          Hogyan kereskedj velünk?
        </h2>
        <picture>
          <source srcset="assets/webp/cs2_agent.webp" />
          <img
            className="mx-auto max-sm:w-64 max-sm:h-64 object-cover"
            src="assets/png/cs2_agent.png"
            alt="cs2 agent"
          />
        </picture>

        <ul className="space-y-12">
          <StepListItem
            title="Első lépés"
            body={stepBodies.firstStep}
            icon={
              <Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-9 h-9"
                >
                  <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                  <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                </svg>
              </Fragment>
            }
          />

          <StepListItem
            title="Második lépés"
            body={stepBodies.secondStep}
            icon={
              <Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-9 h-9"
                >
                  <path
                    fill-rule="evenodd"
                    d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Fragment>
            }
          />

          <StepListItem
            title="Harmadik lépés"
            body={stepBodies.thirdStep}
            icon={
              <Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-9 h-9"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.5 5.25a3 3 0 013-3h3a3 3 0 013 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0112 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 017.5 5.455V5.25zm7.5 0v.09a49.488 49.488 0 00-6 0v-.09a1.5 1.5 0 011.5-1.5h3a1.5 1.5 0 011.5 1.5zm-3 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clip-rule="evenodd"
                  />
                  <path d="M3 18.4v-2.796a4.3 4.3 0 00.713.31A26.226 26.226 0 0012 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 01-6.477-.427C4.047 21.128 3 19.852 3 18.4z" />
                </svg>
              </Fragment>
            }
          />

          <StepListItem
            title="Negyedik lépés"
            body={stepBodies.fourthStep}
            icon={
              <Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-9 h-9"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.502 6h7.128A3.375 3.375 0 0118 9.375v9.375a3 3 0 003-3V6.108c0-1.505-1.125-2.811-2.664-2.94a48.972 48.972 0 00-.673-.05A3 3 0 0015 1.5h-1.5a3 3 0 00-2.663 1.618c-.225.015-.45.032-.673.05C8.662 3.295 7.554 4.542 7.502 6zM13.5 3A1.5 1.5 0 0012 4.5h4.5A1.5 1.5 0 0015 3h-1.5z"
                    clip-rule="evenodd"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M3 9.375C3 8.339 3.84 7.5 4.875 7.5h9.75c1.036 0 1.875.84 1.875 1.875v11.25c0 1.035-.84 1.875-1.875 1.875h-9.75A1.875 1.875 0 013 20.625V9.375zm9.586 4.594a.75.75 0 00-1.172-.938l-2.476 3.096-.908-.907a.75.75 0 00-1.06 1.06l1.5 1.5a.75.75 0 001.116-.062l3-3.75z"
                    clip-rule="evenodd"
                  />
                </svg>
              </Fragment>
            }
          />

          <StepListItem
            title="Ötödik lépés"
            body={stepBodies.fifthStep}
            icon={
              <Fragment>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="w-9 h-9"
                >
                  <path d="M4.5 6.375a4.125 4.125 0 118.25 0 4.125 4.125 0 01-8.25 0zM14.25 8.625a3.375 3.375 0 116.75 0 3.375 3.375 0 01-6.75 0zM1.5 19.125a7.125 7.125 0 0114.25 0v.003l-.001.119a.75.75 0 01-.363.63 13.067 13.067 0 01-6.761 1.873c-2.472 0-4.786-.684-6.76-1.873a.75.75 0 01-.364-.63l-.001-.122zM17.25 19.128l-.001.144a2.25 2.25 0 01-.233.96 10.088 10.088 0 005.06-1.01.75.75 0 00.42-.643 4.875 4.875 0 00-6.957-4.611 8.586 8.586 0 011.71 5.157v.003z" />
                </svg>
              </Fragment>
            }
          />
        </ul>
      </Container>
    </Section>
  );
}
