import Container from "../components/Container";
import Section from "../components/Section";
import Form from "../components/Form";
import usePageSEO from "../hooks/usePageSEO/seo.js";

export default function Contact() {
  usePageSEO({
    title: "Kapcsolatfelvétel - evertsontrade.com",
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
    ogTitle: "Kapcsolatfelvétel - evertsontrade.com",
    ogDescription:
      "Magyarország legnagyobb skin cashout oldala. Folyamatos nyereményjátékok discordon. Kerüld el a scammerekkel való kereskedést, és üzletelj megbízható kereskedőinkkel!",
    ogImage: "https://evertsontrade.com/assets/og_img.jpg",
    ogImageType: "image/jpg",
    ogUrl: "https://evertsontrade.com/kapcsolatfelvetel",
  });

  return (
    <main>
      <Section>
        <Container>
          <h1 className="uppercase italic font-bold text-3xl max-sm:text-2xl text-center">
            Kapcsolatfelvétel
          </h1>
          <Form />
        </Container>
      </Section>
    </main>
  );
}
