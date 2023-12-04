import Container from "../components/Container";
import Section from "../components/Section";
import React, { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    document.title = "Siker - evertsontrade.com";
  }, []);

  return (
    <>
      <main>
        <Section>
          <Container>
            <header>
              <h1 className="text-center uppercase font-sans-2 italic font-bold text-3xl">
                Siker!
              </h1>
            </header>

            <p className="text-xl text-center">
              Az üzenetedet megkaptam, és amint tudom felveszem veled a
              kapcsolatot!
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
      </main>
    </>
  );
}
