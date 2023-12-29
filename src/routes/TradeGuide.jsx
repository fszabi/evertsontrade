import Container from "../components/Container";
import Section from "../components/Section";
import TradeGuideList from "../components/TradeGuideList";
import StickerList from "../components/StickerList";
import Gems from "../components/Gems";
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
          <a
            className="block"
            target="_blank"
            href="https://gamerpay.gg/partner/evertson01"
          >
            <picture>
              <source
                srcSet="assets/webp/gamerpay.webp"
                media="(min-width: 500px)"
              />
              <source srcSet="assets/webp_phone/gamerpay.webp" />
              <img
                className="rounded-lg w-full"
                src="assets/png/gamerpay.png"
                alt="gamerpay"
              />
            </picture>
          </a>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Matricás skinek
          </h2>
          <picture>
            <source
              srcSet="assets/webp/sticker_position.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/sticker_position.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/sticker_position.png"
              alt="sticker position"
            />
          </picture>
          <StickerList />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Blue és Gold Gem-ek
          </h2>
          <Gems />
          <a
            className="block"
            href="https://tradeit.gg/?aff=evertson01"
            target="_blank"
          >
            <picture>
              <source
                srcSet="assets/webp/blue_gem.webp"
                media="(min-width: 500px)"
              />
              <source srcSet="assets/webp_phone/blue_gem.webp" />
              <img
                className="rounded-lg w-full"
                src="assets/png/blue_gem.png"
                alt="blue gem"
              />
            </picture>
          </a>
          <a
            className="block"
            href="https://cs.money/market/buy/?steamId=76561199021366803"
            target="_blank"
          >
            <picture>
              <source
                srcSet="assets/webp/gold_gem.webp"
                media="(min-width: 500px)"
              />
              <source srcSet="assets/webp_phone/gold_gem.webp" />
              <img
                className="rounded-lg w-full"
                src="assets/png/gold_gem.png"
                alt="gold gem"
              />
            </picture>
          </a>
        </Container>
      </Section>
    </main>
  );
}
