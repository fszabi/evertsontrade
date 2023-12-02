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
          <Form />
        </Container>
      </Section>
    </main>
  );
}
