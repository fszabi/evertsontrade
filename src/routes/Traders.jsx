import React, { useEffect } from "react";
import Section from "../components/Section";
import Container from "../components/Container";
import Trader from "../components/Trader";

export default function Traders() {
  useEffect(() => {
    document.title = "Kereskedők - evertsontrade.com";
  }, []);

  return (
    <main>
      <Section>
        <Container customStyles="space-y-10">
          <h1 className="uppercase font-sans-2 italic font-bold text-3xl text-center">
            Kereskedők
          </h1>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(30rem,_1fr))] gap-10">
            <Trader
              href="https://steamcommunity.com/id/evertson01/"
              src="assets/steam_evertson.png"
              alt="steam evertson"
            />

            <Trader
              href="https://steamcommunity.com/id/martintradebuy"
              src="assets/steam_martin.png"
              alt="steam martin"
            />

            <Trader
              href="https://steamcommunity.com/profiles/76561198036274835"
              src="assets/steam_szabi.png"
              alt="steam szabi"
            />

            <Trader
              href="https://steamcommunity.com/id/nikepowerman"
              src="assets/steam_nikepowerman.png"
              alt="steam nikepowerman"
            />

            <Trader
              href="https://steamcommunity.com/id/DeMoN76511"
              src="assets/steam_gerix.png"
              alt="steam gerix"
            />

            <Trader
              href="https://steamcommunity.com/profiles/76561199375299816"
              src="assets/steam_edgepapi.png"
              alt="steam edgepapi"
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
