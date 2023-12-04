import Container from "../components/Container";
import Section from "../components/Section";
import ServiceCard from "../components/ServiceCard";
import { useEffect } from "react";

const cardBodies = {
  middlemanBody: `Amennyiben vásárolni vagy skint szeretnél eladni más személynek de nem tudtok dűlőre jutni, hogy ki adjon 
  előre szivesen vállalom a közvetitői szerepet. A közvetités menete: Mindenféleképpen az eladó/vevő előre el kell utalja
   a pénzt nekem, majd ha hozzám került a pénz,az adott item gazdát cserél és ezek után fogom elutalni az eladónak/vevőnek
    a pénzt. A szolgáltatási minimum ára 2000 ft + esetleges utalási dijak, amennyiben 100.000 ft fölött történik a tranzakció
     ebben az esetben 2% + az esetleges utalási dijak a költség.`,

  skinBody: `Ritka skined / craftod van? Akar különleges pattern van az egyik skineden? Nem tudod mennyit érhet? 
     Keress minket bátran a kapcsolatfelvételnél és mi segitünk felbecsűlni a skined értékét.Több éves tapasztalattal 
     rendelkezünk craftok terén és akár eladhatsz is nekünk. A szolgáltatás ára 2000 ft.`,
};

export default function Services() {
  useEffect(() => {
    document.title = "Szolgáltatások - evertsontrade.com";
  }, []);

  return (
    <main>
      <Section>
        <Container>
          <h1 className="uppercase font-sans-2 italic font-bold text-3xl text-center">
            Szolgáltatások
          </h1>

          <ServiceCard
            title="Middleman szolgáltatás"
            body={cardBodies.middlemanBody}
          />

          <ServiceCard
            title="Skin értékbecslés szolgáltatás"
            body={cardBodies.skinBody}
          />
        </Container>
      </Section>
      <Section>
        <Container>
          <img
            className="rounded-lg"
            src="assets/png/services_bg.png"
            alt="services bg"
          />
        </Container>
      </Section>
    </main>
  );
}
