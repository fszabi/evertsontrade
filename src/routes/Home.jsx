import Container from "../components/Container";
import StepList from "../components/StepList";
import Section from "../components/Section";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Kezdőlap - evertsontrade.com";
  }, []);

  return (
    <>
      <main>
        <Section>
          <Container>
            <header>
              <h1 className="text-center uppercase font-sans-2 italic font-bold text-3xl max-sm:text-2xl">
                Magyarország legnagyobb skin cashout oldala
              </h1>
            </header>
            <div className="grid place-items-center">
              <a
                className="hover:opacity-70 duration-300"
                target="_blank"
                href="https://discord.com/invite/2Yf3zP7CMQ"
                aria-label="discord szerver link"
              >
                <picture>
                  <source srcset="assets/webp/discord.webp" />
                  <img
                    className="h-32 w-32 max-sm:w-24 max-sm:h-24 object-cover"
                    src="assets/png/discord.png"
                    alt="discord"
                  />
                </picture>
              </a>
            </div>

            <p className="text-xl max-sm:text-lg text-center">
              Folyamatos nyereményjátékok Discordon szerverünkön
            </p>
          </Container>
        </Section>
        <Section>
          <Container>
            <picture>
              <source
                media="(min-width: 500px)"
                srcset="assets/webp/cs2_banner.webp"
              />
              <source srcset="assets/webp_phone/cs2_banner_phone.webp" />
              <img
                className="rounded-lg mx-auto"
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
