import Container from "../components/Container";
import Section from "../components/Section";
import SkinRentingList from "../components/SkinRentingList";
import SkinRentingSteps from "../components/SkinRentingSteps";
import SkinRentingWorth from "../components/SkinRentingWorth";
import SkinRentingWorthTwo from "../components/SkinRentingWorthTwo";
import usePageSEO from "../hooks/usePageSEO/seo.js";

export default function SkinRenting() {
  usePageSEO({
    title: "Skin-Bérlés - evertsontrade.com",
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
    ogTitle: "Skin-Bérlés - evertsontrade.com",
    ogDescription:
      "Magyarország legnagyobb skin cashout oldala. Folyamatos nyereményjátékok discordon. Kerüld el a scammerekkel való kereskedést, és üzletelj megbízható kereskedőinkkel!",
    ogImage: "https://evertsontrade.com/assets/og_img.jpg",
    ogImageType: "image/jpg",
    ogUrl: "https://evertsontrade.com/skin-berles",
  });

  return (
    <main>
      <Section>
        <Container>
          <h1 className="uppercase italic font-bold text-3xl max-sm:text-2xl text-center">
            Skin-Bérlés
          </h1>
          <picture className="mx-auto w-fit">
            <source
              media="(min-width: 500px)"
              srcSet="assets/webp/skin_renting.webp"
            />
            <source srcSet="assets/webp_phone/skin_renting_phone.webp" />
            <img
              className="rounded-lg mx-auto"
              src="assets/png/skin_renting.png"
              alt="skin renting"
            />
          </picture>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Skin-Bérlés lényege
          </h2>
          <SkinRentingList />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Skin-Bérlés menete
          </h2>
          <SkinRentingSteps />
          <div className="list-none grid sm:grid-cols-[repeat(auto-fit,_minmax(22rem,_1fr))] gap-10">
            <picture>
              <source srcSet="assets/webp/storage_1.webp" />
              <img
                className="rounded-lg w-full"
                src="assets/png/storage_1.png"
                alt="storage one"
              />
            </picture>
            <picture>
              <source srcSet="assets/webp/storage_2.webp" />
              <img
                className="rounded-lg w-full"
                src="assets/png/storage_2.png"
                alt="storage two"
              />
            </picture>
            <picture>
              <source srcSet="assets/webp/storage_3.webp" />
              <img
                className="rounded-lg w-full"
                src="assets/png/storage_3.png"
                alt="storage three"
              />
            </picture>
            <picture>
              <source srcSet="assets/webp/storage_4.webp" />
              <img
                className="rounded-lg w-full"
                src="assets/png/storage_4.png"
                alt="storage four"
              />
            </picture>
          </div>
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Kinek éri ez meg?
          </h2>
          <SkinRentingWorth />
        </Container>
      </Section>
      <Section>
        <Container>
          <h2 className="text-center uppercase font-bold max-sm:text-xl text-2xl">
            Miért éri ez meg?
          </h2>
          <SkinRentingWorthTwo />
        </Container>
      </Section>
    </main>
  );
}
