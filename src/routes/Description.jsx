import Container from "../components/Container";
import Section from "../components/Section";
import { useEffect } from "react";
import StepList from "../components/StepList";
import ScammerList from "../components/ScammerList";
import TradeList from "../components/TradeList";
import ApiList from "../components/ApiList";

export default function Description() {
  useEffect(() => {
    document.title = "Leírás - evertsontrade.com";
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <div>
            <h1 className="text-center uppercase font-sans-2 font-bold italic text-3xl">
              Hogyan kereskedj velünk?
            </h1>
            <img
              className="mx-auto"
              src="assets/cs2_agent.png"
              alt="cs2 agent"
            />
          </div>
          <div className="space-y-40">
            <StepList />
            <img src="assets/scam.jpg" alt="scam" />
            <div className="space-y-12">
              <h2 className="text-center uppercase font-sans-2 font-bold text-2xl">
                Hogyan ismerj fel egy magyar scammert?
              </h2>
              <ScammerList />
            </div>
            <div className="space-y-12">
              <h2 className="text-center uppercase font-sans-2 font-bold text-2xl">
                A tradeléssel kapcsolatos alapok
              </h2>
              <TradeList />
            </div>
            <div className="text-center space-y-12">
              <h2 className="uppercase font-sans-2 font-bold text-2xl">
                Mi az az API scam és hogyan kerülheted el?
              </h2>
              <p>
                Rengeteg nagyobb inventory-val rendelkező embert is ért már
                hasonló balszerencsés eset, de mindenekelőtt fontos tisztázni
                azt, hogy ez a fajta átverés nem válogat. Legyen 10 vagy akár
                10.000 euró értékű fiókod, ugyanúgy áldozatául eshetsz a
                scammereknek, ezért is fontos, hogy tisztában legyetek magával
                az átveréssel.
              </p>
            </div>
            <div className="space-y-12">
              <h2 className="text-center uppercase font-sans-2 font-bold text-2xl">
                API scam oldalakról általános tudnivalók
              </h2>
              <ApiList />
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
