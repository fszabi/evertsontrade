import FadeItem from "./FadeItem";

const fadeBodies = {
  firstFadeBody: `Rengeteg késből és fegyverből létezik Fade változat. Minél magasabb egy tárgy Fade %-a annál értékesebb.`,
  secondFadeBody: `A 80% Fade teljesen átlagos, 90% körül már pár euró túlfizetést megérhet viszont 
  98-99% nál már jelentős akár 10-20% túlfizetéssel is lehet számolni egy adott Fade tárgynál.`,
};

export default function Fade() {
  return (
    <ul className="divide-y">
      <FadeItem body={fadeBodies.firstFadeBody} padding="pb-8" />

      <FadeItem body={fadeBodies.secondFadeBody} padding="py-8" />
    </ul>
  );
}
