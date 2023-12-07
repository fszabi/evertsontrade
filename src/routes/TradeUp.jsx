import Container from "../components/Container";
import Section from "../components/Section";
import TradeUpList from "../components/TradeUpList";
import ExampleList from "../components/ExampleList";
import Offers from "../components/Offers";
import Investors from "../components/Investors";
import { useEffect } from "react";

export default function TradeUp() {
  useEffect(() => {
    document.title = "Trade-Up - evertsontrade.com";
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <h1 className="uppercase font-sans-2 italic font-bold text-3xl text-center">
            Trade-Up
          </h1>
          <picture>
            <source
              media="(min-width: 500px)"
              srcSet="assets/webp/evertson_trade.webp"
            />
            <source srcSet="assets/webp_phone/evertson_trade_phone.webp" />
            <img
              className="rounded-lg"
              src="assets/png/evertson_trade.png"
              alt="evertson trade"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 font-bold text-2xl text-center">
            Trade-Up Lényege
          </h2>
          <p className="text-center">
            A trade up lényege röviden az, hogy egy adott skinből egy
            értékesebbet csinálok folyamatos kereskedéssel. A kereskedést
            2022-ben kezdtem el 2000 dollárral és kb egy év alatt 8000-10000
            dollárt értem el. Jelenleg lehetőséget biztosítok arra, hogy
            másoknak a skinjeivel kereskedem és ezáltal jelentős hasznot
            realizálok neki.
          </p>
          <picture>
            <source
              media="(min-width: 500px)"
              srcSet="assets/webp/pricempire.webp"
            />
            <source srcSet="assets/webp_phone/pricempire_phone.webp" />
            <img
              className="rounded-lg"
              src="assets/png/pricempire.png"
              alt="pricempire"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 font-bold text-2xl text-center">
            Mutatok pár példát hogyan lehet ezekből a skinekből profitálni
          </h2>
          <ExampleList />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 font-bold text-2xl text-center">
            Néhány trade offer
          </h2>
          <Offers />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 font-bold text-2xl text-center">
            Tudnivalók
          </h2>
          <TradeUpList />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 font-bold text-2xl text-center">
            Eddigi eredmények
          </h2>
          <picture>
            <source srcSet="assets/webp/trade_stats.webp" />
            <img
              className="mx-auto"
              src="assets/png/trade_stats.png"
              alt="trade stats"
            />
          </picture>
          <picture>
            <source
              media="(min-width: 500px)"
              srcSet="assets/webp/excel.webp"
            />
            <source srcSet="assets/webp_phone/excel_phone.webp" />
            <img src="assets/png/excel.png" alt="excel" />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 font-bold text-2xl text-center">
            Befektetők
          </h2>
          <Investors />
        </Container>
      </Section>
    </main>
  );
}
