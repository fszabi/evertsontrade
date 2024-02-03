import Container from "../components/Container";
import Section from "../components/Section";
import usePageSEO from "../hooks/usePageSEO/seo.js";

export default function Home() {
  usePageSEO({
    title: "Siker - evertsontrade.com",
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
    ogTitle: "Siker - evertsontrade.com",
    ogDescription:
      "Magyarország legnagyobb skin cashout oldala. Folyamatos nyereményjátékok discordon. Kerüld el a scammerekkel való kereskedést, és üzletelj megbízható kereskedőinkkel!",
    ogImage: "https://evertsontrade.com/assets/og_img.jpg",
    ogImageType: "image/jpg",
    ogUrl: "https://evertsontrade.com/siker",
  });

  return (
    <>
      <main>
        <Section>
          <Container>
            <header>
              <h1 className="text-center uppercase italic font-bold text-3xl">
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
