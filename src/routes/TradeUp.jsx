import Container from "../components/Container";
import Section from "../components/Section";
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
        </Container>
      </Section>
    </main>
  );
}
