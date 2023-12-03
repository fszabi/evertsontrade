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
        <Container>
          <h1 className="uppercase font-sans-2 italic font-bold text-3xl text-center">
            Kereskedők
          </h1>
          <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(22rem,_1fr))] gap-10">
            <Trader
              href="https://steamcommunity.com/id/evertson01/"
              src="assets/steam_evertson.png"
              alt="steam evertson"
              aria="Evertson steam profil megnyitása"
            />

            <Trader
              href="https://steamcommunity.com/id/martintradebuy"
              src="assets/steam_martin.png"
              alt="steam martin"
              aria="Martin steam profil megnyitása"
            />

            <Trader
              href="https://steamcommunity.com/profiles/76561198036274835"
              src="assets/steam_szabi.png"
              alt="steam szabi"
              aria="Szabi steam profil megnyitása"
            />

            <Trader
              href="https://steamcommunity.com/id/nikepowerman"
              src="assets/steam_nikepowerman.png"
              alt="steam nikepowerman"
              aria="Nikepowerman steam profil megnyitása"
            />

            <Trader
              href="https://steamcommunity.com/id/DeMoN76511"
              src="assets/steam_gerix.png"
              alt="steam gerix"
              aria="Gerix steam profil megnyitása"
            />

            <Trader
              href="https://steamcommunity.com/profiles/76561199375299816"
              src="assets/steam_edgepapi.png"
              alt="steam edgepapi"
              aria="Edgepapi steam profil megnyitása"
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
