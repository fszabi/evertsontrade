import Container from "../components/Container";
import Section from "../components/Section";
import TradeUpList from "../components/TradeUpList";
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
          <img
            className="rounded-lg"
            src="assets/png/evertson_trade.png"
            alt="evertson trade"
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 italic font-bold text-2xl text-center">
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
          <img
            className="rounded-lg"
            src="assets/png/pricempire.png"
            alt="pricempire"
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 italic font-bold text-2xl text-center">
            Mutatok pár példát hogyan lehet ezekből a skinekből profitálni
          </h2>
          <div className="flex max-md:flex-col justify-center items-center gap-14">
            <img src="assets/png/ak47.png" alt="ak47" />
            <i class="fa-solid fa-arrow-right-long text-4xl max-md:hidden"></i>
            <i class="fa-solid fa-arrow-down-long text-4xl max-md:block hidden"></i>
            <img src="assets/png/ak47_2.png" alt="ak47 2" />
          </div>
          <div className="flex max-md:flex-col justify-center items-center gap-14">
            <img src="assets/webp/butterfly.webp" alt="butterfly" />
            <i class="fa-solid fa-arrow-right-long text-4xl max-md:hidden"></i>
            <i class="fa-solid fa-arrow-down-long text-4xl max-md:block hidden"></i>
            <img src="assets/png/butterfly_2.png" alt="butterfly 2" />
          </div>
          <div className="flex max-md:flex-col justify-center items-center gap-14">
            <img src="assets/webp/flip.webp" alt="flip" />
            <i class="fa-solid fa-arrow-right-long text-4xl max-md:hidden"></i>
            <i class="fa-solid fa-arrow-down-long text-4xl max-md:block hidden"></i>
            <img src="assets/png/flip_2.png" alt="flip 2" />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 italic font-bold text-2xl text-center">
            Néhány trade offer
          </h2>
          <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(22rem,_1fr))] gap-10">
            <img
              className="rounded-lg"
              src="assets/png/tradeoffer.png"
              alt="tradeoffer one"
            />
            <img
              className="rounded-lg"
              src="assets/png/tradeoffer_2.png"
              alt="tradeoffer two"
            />
            <img
              className="rounded-lg"
              src="assets/webp/tradeoffer_3.webp"
              alt="tradeoffer three"
            />
            <img
              className="rounded-lg"
              src="assets/webp/trade.webp"
              alt="trade one"
            />
            <img
              className="rounded-lg"
              src="assets/webp/trade_2.webp"
              alt="trade two"
            />
            <img
              className="rounded-lg"
              src="assets/png/trade_3.png"
              alt="trade two"
            />
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 italic font-bold text-2xl text-center">
            Tudnivalók
          </h2>
          <TradeUpList />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 italic font-bold text-2xl text-center">
            Eddigi eredmények
          </h2>
          <img
            className="rounded-lg mx-auto"
            src="assets/png/trade_stats.png"
            alt="trade stats"
          />
          <img className="rounded-lg" src="assets/png/excel.png" alt="excel" />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="uppercase font-sans-2 italic font-bold text-2xl text-center">
            Befektetők
          </h2>
          <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(22rem,_1fr))] gap-10">
            <img
              className="rounded-lg"
              src="assets/webp/tradeup_member_10.webp"
              alt="tradeup member ten"
            />
            <img
              className="rounded-lg"
              src="assets/webp/tradeup_member_11.webp"
              alt="tradeup member eleven"
            />
            <img
              className="rounded-lg"
              src="assets/png/tradeup_member.png"
              alt="tradeup member one"
            />
            <img
              className="rounded-lg"
              src="assets/webp/tradeup_member_2.webp"
              alt="tradeup member two"
            />
            <img
              className="rounded-lg"
              src="assets/png/tradeup_member_3.png"
              alt="tradeup member three"
            />
            <img
              className="rounded-lg"
              src="assets/png/tradeup_member_4.png"
              alt="tradeup member four"
            />
            <img
              className="rounded-lg"
              src="assets/webp/tradeup_member_5.webp"
              alt="tradeup member five"
            />
            <img
              className="rounded-lg"
              src="assets/png/tradeup_member_6.png"
              alt="tradeup member six"
            />
            <img
              className="rounded-lg"
              src="assets/png/tradeup_member_7.png"
              alt="tradeup member seven"
            />
            <img
              className="rounded-lg"
              src="assets/webp/tradeup_member_12.webp"
              alt="tradeup member twelve"
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
