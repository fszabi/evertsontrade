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
          <h1 className="uppercase italic font-bold text-3xl max-sm:text-2xl text-center">
            Kereskedők
          </h1>
          <div className="grid sm:grid-cols-[repeat(auto-fit,_minmax(22rem,_1fr))] gap-10">
            <Trader
              href="https://steamcommunity.com/id/evertson01/"
              src="assets/webp/steam_evertson.webp"
              src_phone="assets/webp_phone/steam_evertson_phone.webp"
              src_fallback="assets/png/steam_evertson.png"
              alt="steam evertson"
              aria="Evertson steam profil megnyitása"
            />

            <Trader
              href="https://steamcommunity.com/id/martintradebuy"
              src="assets/webp/steam_martin.webp"
              src_phone="assets/webp_phone/steam_martin_phone.webp"
              src_fallback="assets/png/steam_martin.png"
              alt="steam martin"
              aria="Martin steam profil megnyitása"
            />

            <Trader
              href="https://steamcommunity.com/profiles/76561198036274835"
              src="assets/webp/steam_szabi.webp"
              src_phone="assets/webp_phone/steam_szabi_phone.webp"
              src_fallback="assets/png/steam_szabi.png"
              alt="steam szabi"
              aria="Szabi steam profil megnyitása"
            />

            <Trader
              href="https://steamcommunity.com/id/nikepowerman"
              src="assets/webp/steam_nikepowerman.webp"
              src_phone="assets/webp_phone/steam_nikepowerman_phone.webp"
              src_fallback="assets/png/steam_nikepowerman.png"
              alt="steam nikepowerman"
              aria="Nikepowerman steam profil megnyitása"
            />

            <Trader
              href="https://steamcommunity.com/id/DeMoN76511"
              src="assets/webp/steam_gerix.webp"
              src_phone="assets/webp_phone/steam_gerix_phone.webp"
              src_fallback="assets/png/steam_gerix.png"
              alt="steam gerix"
              aria="Gerix steam profil megnyitása"
            />

            <Trader
              href="https://steamcommunity.com/profiles/76561199375299816"
              src="assets/webp/steam_edgepapi.webp"
              src_phone="assets/webp_phone/steam_edgepapi_phone.webp"
              src_fallback="assets/png/steam_edgepapi.png"
              alt="steam edgepapi"
              aria="Edgepapi steam profil megnyitása"
            />
          </div>
        </Container>
      </Section>
    </main>
  );
}
