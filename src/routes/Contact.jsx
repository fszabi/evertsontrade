import Container from "../components/Container";
import Section from "../components/Section";
import Form from "../components/Form";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    document.title = "Kapcsolatfelvétel - evertsontrade.com";
  }, []);

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
