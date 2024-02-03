import Container from "../components/Container";
import Section from "../components/Section";
import ScammerList from "../components/ScammerList";
import TradeList from "../components/TradeList";
import ApiList from "../components/ApiList";

export default function Description() {
  return (
    <main>
      <Section>
        <Container>
          <h1 className="text-center uppercase font-bold italic text-3xl max-sm:text-2xl">
            Trade és Scam alapok!
          </h1>
          <picture>
            <source media="(min-width: 500px)" srcSet="assets/webp/scam.webp" />
            <source srcSet="assets/webp_phone/scam_phone.webp" />
            <img className="rounded-lg" src="assets/jpg/scam.jpg" alt="scam" />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold text-2xl max-sm:text-xl">
            Hogyan ismerj fel egy magyar scammert?
          </h2>
          <ScammerList />
        </Container>
      </Section>

      <Section>
        <Container>
          <h2 className="uppercase font-bold text-2xl max-sm:text-xl text-center">
            Mi az az API scam és hogyan kerülheted el?
          </h2>
          <p className="text-center">
            Rengeteg nagyobb inventory-val rendelkező embert is ért már hasonló
            balszerencsés eset, de mindenekelőtt fontos tisztázni azt, hogy ez a
            fajta átverés nem válogat. Legyen 10 vagy akár 10.000 euró értékű
            fiókod, ugyanúgy áldozatául eshetsz a scammereknek, ezért is fontos,
            hogy tisztában legyetek magával az átveréssel.
          </p>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            API scam oldalakról általános tudnivalók
          </h2>
          <ApiList />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            A tradeléssel kapcsolatos alapok
          </h2>
          <TradeList />
        </Container>
      </Section>
    </main>
  );
}
