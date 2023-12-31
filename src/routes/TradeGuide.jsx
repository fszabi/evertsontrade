import Container from "../components/Container";
import Section from "../components/Section";
import TradeGuideList from "../components/TradeGuideList";
import StickerList from "../components/StickerList";
import Gems from "../components/Gems";
import DreamHack2013 from "../components/DreamHack2013";
import DreamHack2014 from "../components/DreamHack2014";
import Marble from "../components/Marble";
import Doppler from "../components/Doppler";
import Fade from "../components/Fade";
import CrowlHowl from "../components/CrownHowl";
import Katowice2015 from "../components/Katowice2015";
import Float from "../components/Float";
import LowFloat from "../components/LowFloat";
import HighFloat from "../components/HighFloat";
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
              <source srcSet="assets/webp_phone/gamerpay_phone.webp" />
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
              srcSet="assets/webp/katowice_2014_stickers.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/katowice_2014_stickers_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/katowice_2014_stickers.png"
              alt="katowice 2014"
            />
          </picture>
          <picture>
            <source
              srcSet="assets/webp/sticker_position.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/sticker_position_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/sticker_position.png"
              alt="sticker position"
            />
          </picture>
          <StickerList />
          <picture>
            <source
              srcSet="assets/webp/katowice_2014_holos.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/katowice_2014_holos_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/katowice_2014_holos.png"
              alt="katowice 2014 holos"
            />
          </picture>
          <picture>
            <source
              srcSet="assets/webp/katowice_2014_papers.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/katowice_2014_papers_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/katowice_2014_papers.png"
              alt="katowice 2014 papers"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            DreamHack 2013 Souvenir Skinek
          </h2>
          <iframe
            className="mx-auto rounded-lg w-full h-[50vh]"
            src="https://www.youtube.com/embed/tlWVclZ79cI"
            title="Fastrox DreamHack 2013"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
          <DreamHack2013 />
          <picture>
            <source
              srcSet="assets/webp/dreamhack2013.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/dreamhack2013_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/dreamhack2013.png"
              alt="dreamhack 2013"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            DreamHack 2014 Matricák
          </h2>
          <DreamHack2014 />
          <picture>
            <source
              srcSet="assets/webp/dreamhack2014.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/dreamhack2014_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/dreamhack2014.png"
              alt="dreamhack_2014"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Katowice 2015 Matricák
          </h2>
          <picture>
            <source
              srcSet="assets/webp/katowice_2015_capsules.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/katowice_2015_capsules_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/katowice_2015_capsules.png"
              alt="katowice 2015"
            />
          </picture>
          <Katowice2015 />
          <picture>
            <source srcSet="assets/webp/catfishek.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/catfishek.png"
              alt="catfishek"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Crown, Howl, King, Winged Defuser, Flammable
          </h2>
          <picture>
            <source
              srcSet="assets/webp/crown_hotrod.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/crown_hotrod_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/crown_hotrod.png"
              alt="crown hotrod"
            />
          </picture>
          <CrowlHowl />
          <picture>
            <source srcSet="assets/webp/krom.webp" media="(min-width: 500px)" />
            <source srcSet="assets/webp_phone/krom_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/krom.png"
              alt="krom"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Hol találhatsz matricás skineket?
          </h2>
          <p className="text-lg max-sm:text-base text-center">
            A leggyakrabban trade oldalakon viszont van egy weboldal aminek a
            segitségével akár steamen is találhatsz craftokat.
            <a
              className="block text-blue-400 underline break-all"
              href="https://www.csgostickersearch.com/"
              target="_blank"
            >
              https://www.csgostickersearch.com/
            </a>
          </p>
          <picture>
            <source
              srcSet="assets/webp/katowice_2015_stickers.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/katowice_2015_stickers_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/katowice_2015_stickers.png"
              alt="katowice stickers"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Blue és Gold Gem-ek
          </h2>
          <iframe
            className="mx-auto rounded-lg w-full h-[50vh]"
            src="https://www.youtube.com/embed/ezsPv0n0gEM"
            title="Fastrox Case Hardened"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
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
              <source srcSet="assets/webp_phone/blue_gem_phone.webp" />
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
              <source srcSet="assets/webp_phone/gold_gem_phone.webp" />
              <img
                className="rounded-lg w-full"
                src="assets/png/gold_gem.png"
                alt="gold gem"
              />
            </picture>
          </a>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Marble Fade, Fade és Dopplerek
          </h2>

          <Marble />
          <picture>
            <source
              srcSet="assets/webp/marble.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/marble_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/marble.png"
              alt="marble"
            />
          </picture>
          <Doppler />
          <picture>
            <source
              srcSet="assets/webp/doppler.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/doppler_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/doppler.png"
              alt="doppler"
            />
          </picture>
          <picture>
            <source srcSet="assets/webp/fade.webp" media="(min-width: 500px)" />
            <source srcSet="assets/webp_phone/fade_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/fade.png"
              alt="fade"
            />
          </picture>
          <Fade />
          <picture>
            <source
              srcSet="assets/webp/fade2.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/fade2_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/fade.png"
              alt="fade2"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <div className="container space-y-24">
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Float
          </h2>
          <Float />
          <iframe
            className="mx-auto rounded-lg w-full h-[50vh]"
            src="https://www.youtube.com/embed/1MAqDPqkSaI"
            title="Fastrox Battle Scarred"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Alacsony Float
          </h2>
          <picture>
            <source
              srcSet="assets/webp/lowfloat.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/lowfloat_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/lowfloat.png"
              alt="low float"
            />
          </picture>
          <LowFloat />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Magas Float
          </h2>
          <picture>
            <source
              srcSet="assets/webp/highfloat.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/highfloat_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/highfloat.png"
              alt="high float"
            />
          </picture>
          <HighFloat />
          <picture>
            <source
              srcSet="assets/webp/blackiimov.webp"
              media="(min-width: 500px)"
            />
            <source srcSet="assets/webp_phone/blackiimov_phone.webp" />
            <img
              className="rounded-lg w-full"
              src="assets/png/blackiimov.png"
              alt="blackiimov"
            />
          </picture>
        </Container>
      </Section>
    </main>
  );
}
