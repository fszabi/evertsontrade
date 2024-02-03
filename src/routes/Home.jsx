import Container from "../components/Container";
import StepList from "../components/StepList";
import Section from "../components/Section";
import { useTranslation } from "react-i18next";
import usePageSEO from "../hooks/usePageSEO/seo.js";

export default function Home() {
  const { t } = useTranslation();

  usePageSEO({
    title: "Kezdőlap - evertsontrade.com",
    description:
      "Magyarország legnagyobb skin cashout oldala. Folyamatos nyereményjátékok discordon. Kerüld el a scammerekkel való kereskedést, és üzletelj megbízható kereskedőinkkel!",
    keywords: [
      "evertson",
      "cs2 kereskedés",
      "cs2 trade",
      "csgo kereskedés",
      "csgo trade",
      "magyar skin cashout oldal",
      "nyereményjáték",
      "ingyen skinek",
      "megbízható kereskedők",
      "steam kereskedés",
    ],
    ogTitle: "Kezdőlap - evertsontrade.com",
    ogDescription:
      "Magyarország legnagyobb skin cashout oldala. Folyamatos nyereményjátékok discordon. Kerüld el a scammerekkel való kereskedést, és üzletelj megbízható kereskedőinkkel!",
    ogImage: "https://evertsontrade.com/assets/og_img.jpg",
    ogImageType: "image/jpg",
    ogUrl: "https://evertsontrade.com/",
  });

  return (
    <>
      <main>
        <Section>
          <Container>
            <header>
              <h1 className="text-center uppercase italic font-bold text-3xl max-sm:text-2xl">
                {t("home.intro.title")}
              </h1>
            </header>
            <picture>
              <source
                media="(min-width: 500px)"
                srcSet="assets/webp/giveaway.webp"
              />
              <source srcSet="assets/webp_phone/giveaway_phone.webp" />
              <img
                className="rounded-lg mx-auto w-full object-cover max-sm:max-w-[25rem]"
                src="assets/png/giveaway.png"
                alt="giveaway"
              />
            </picture>
            <div className="grid place-items-center">
              <a
                className="hover:opacity-70 duration-300"
                target="_blank"
                href="https://discord.com/invite/2Yf3zP7CMQ"
                aria-label="discord szerver link"
              >
                <picture>
                  <source srcSet="assets/webp/discord.webp" />
                  <img
                    className="h-32 w-32 max-sm:w-24 max-sm:h-24 object-cover"
                    src="assets/png/discord.png"
                    alt="discord"
                  />
                </picture>
              </a>
            </div>

            <p className="text-xl max-sm:text-lg text-center">
              {t("home.intro.subtitle")}
            </p>
          </Container>
        </Section>
        <Section>
          <Container>
            <picture>
              <source
                media="(min-width: 500px)"
                srcSet="assets/webp/cs2_banner.webp"
              />
              <source srcSet="assets/webp_phone/cs2_banner_phone.webp" />
              <img
                className="rounded-lg mx-auto w-full object-cover max-sm:max-w-[25rem]"
                src="assets/jpg/cs2_banner.jpg"
                alt="cs2 banner"
              />
            </picture>
          </Container>
        </Section>
        <StepList />
      </main>
    </>
  );
}
