import Container from "../components/Container";
import Section from "../components/Section";

export default function TradeGuide() {
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
                href="https://cs.money/market/buy/?utm_source=mediabuy&utm_medium=zoltan&utm_campaign=referral&utm_content=link"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/csmoney.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/csmoney.png"
                    alt="csmoney"
                  />
                </picture>
                <p>Adj el, vásárolj, vagy tradelj skineket a cs.moneyen.</p>
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
                  <source srcSet="assets/webp/tradeit.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/tradeit.png"
                    alt="tradeit"
                  />
                </picture>
                <p>
                  Ha szeretnél megbizható trade oldalon kereskedni használd a
                  tradeitggt.
                </p>
              </a>
            </div>
            <div className="mx-auto">
              <a
                className="block space-y-5"
                href="https://csfloat.com/ref/evertson"
                target="_blank"
              >
                <picture className="w-fit mx-auto">
                  <source srcSet="assets/webp/csfloat.webp" />
                  <img
                    className="rounded-lg"
                    src="assets/png/csfloat.png"
                    alt="csfloat"
                  />
                </picture>
                <p>Vásárolj vagy adj el skineket a CSFloat-on.</p>
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
