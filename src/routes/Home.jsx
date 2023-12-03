import Container from "../components/Container";
import ScrollArrow from "../components/ScrollArrow";
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
          <Container customStyles="text-center space-y-10">
            <header>
              <h1 className="uppercase font-sans-2 italic font-bold text-3xl">
                Magyarország legnagyobb skin cashout oldala
              </h1>
            </header>
            <div className="grid grid-cols-2 place-items-center">
              <img className="max-h-64" src="assets/box.png" alt="gift" />
              <img
                className="max-h-40"
                src="assets/discord.png"
                alt="discord"
              />
            </div>

            <p className="text-xl">
              Folyamatos nyereményjátékok Discordon szerverünkön
            </p>
          </Container>
        </Section>
        <Section>
          <Container>
            <img
              className="rounded-lg"
              src="assets/cs2_banner.webp"
              alt="cs2 banner"
            />
          </Container>
        </Section>
      </main>
    </>
  );
}
