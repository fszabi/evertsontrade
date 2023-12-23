import Container from "../components/Container";
import Section from "../components/Section";
import TradeGuideList from "../components/TradeGuideList";
import { useEffect } from "react";

export default function TradeGuide() {
  useEffect(() => {
    document.title = "Trade-Alapok - evertsontrade.com";
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <h1 className="uppercase italic font-bold text-3xl max-sm:text-2xl text-center">
            Trade Alapok
          </h1>
          <picture>
            <source
              srcSet="assets/webp/trading.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/trading_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/trading.png"
              alt="trading"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <TradeGuideList />
        </Container>
      </Section>
    </main>
  );
}
