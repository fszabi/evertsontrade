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
              <h1 className="text-center uppercase font-sans-2 italic font-bold text-3xl">
                Magyarország legnagyobb skin cashout oldala
              </h1>
            </header>
            <div className="grid place-items-center">
              <a
                className="hover:opacity-70 duration-300"
                target="_blank"
                href="https://discord.com/invite/2Yf3zP7CMQ"
              >
                <img
                  className="max-h-40"
                  src="assets/webp/discord.webp"
                  alt="discord"
                />
              </a>
            </div>

            <p className="text-xl text-center">
              Folyamatos nyereményjátékok Discordon szerverünkön
            </p>
          </Container>
        </Section>
        <Section>
          <Container>
            <img
              className="rounded-lg"
              src="assets/webp/cs2_banner.webp"
              alt="cs2 banner"
            />
          </Container>
        </Section>
        <StepList />
      </main>
    </>
  );
}
