import Container from "../components/Container";
import Section from "../components/Section";
import TradeGuideList from "../components/TradeGuideList";
import StickerList from "../components/StickerList";
import Gems from "../components/Gems";
import { useEffect } from "react";

export default function TradeGuide() {
  useEffect(() => {
    document.title = "Trade-Oldalak - evertsontrade.com";
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <h1 className="uppercase italic font-bold text-3xl max-sm:text-2xl text-center">
            Trade-Oldalak
          </h1>
          <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(15rem,_1fr))] gap-x-8 gap-y-16">
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://skinswap.com/r/evertson01"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/skinswap_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/skinswap_logo.png"
                    alt="skinswap"
                  />
                </picture>
                <p>Megbízható trade oldal</p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://waxpeer.com/r/evertson"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/waxpeer_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/waxpeer_logo.png"
                    alt="waxpeer"
                  />
                </picture>
                <p>Vásárolj vagy adj el skineket Waxpeer-en.</p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://gamerpay.gg/partner/evertson01"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/gamerpay_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/gamerpay_logo.png"
                    alt="gamerpay"
                  />
                </picture>
                <p>GamerPay 5 euró kezdőbónusz.</p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://buff.163.com/invite/U1106635008?code=3HKP6"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/buff163_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/buff163_logo.png"
                    alt="buff163"
                  />
                </picture>
                <p>Legnagyobb oldal eladáshoz és vásárláshoz.</p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://csgotraders.net/ref/TIHE2DI"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/csgotraders_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/csgotraders_logo.png"
                    alt="csgotraders"
                  />
                </picture>
                <p>
                  Hasonló oldal mint a régi csgolounge, ha érdekel a tradelés
                  próbáld ki.
                </p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://rapidskins.com/a/evertson01"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/rapidskins_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/rapidskins_logo.png"
                    alt="rapidskins"
                  />
                </picture>
                <p>
                  Ha szeretnél megbizható trade bot oldalon kereskedni cs2 vagy
                  rust skinekkel esetleg cryptoért skineket vásárolni nézz rá a
                  rapidskinsre.
                </p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://skinflow.gg/?referral=evertson"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/skinflow_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/skinflow_logo.png"
                    alt="skinflow"
                  />
                </picture>
                <p>
                  Ha szeretnél megbizható trade bot oldalon kereskedni vagy
                  cryptoért skineket vásárolni nézz rá a skinflowra.
                </p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://tradeit.gg/?aff=evertson01"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/tradeit_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/jpg/tradeit_logo.jpg"
                    alt="tradeit"
                  />
                </picture>
                <p>Ha megbizható trade bot oldalon cserélnél.</p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://shadowpay.com/?utm_campaign=ybovAaEWac6HoGr"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/shadowpay_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/shadowpay_logo.png"
                    alt="shadowpay"
                  />
                </picture>
                <p>Vásárolj vagy adj el skineket Shadowpay-en.</p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://buff.market/r/U1093218891"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/buff_market_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/jpg/buff_market_logo.jpg"
                    alt="buff market"
                  />
                </picture>
                <p>Buff market ingyen random skin.</p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://500.casino/r/REF8983OEYBG08SZ"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/500_logo.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/500_logo.png"
                    alt="500"
                  />
                </picture>
                <p>
                  Az egyik legjobb casino, ahol CS skineket is eladhatsz és
                  vásárolhatsz
                </p>
              </a>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
