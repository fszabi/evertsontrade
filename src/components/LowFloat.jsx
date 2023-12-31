import LowFloatItem from "./LowFloatItem";

const lowFloatBodies = {
  firstLowFloatBody: `Egy adott skin 0.00-tól már low Float-os skinnek számit amiért szintén magasabb túlfizetést lehet elkérni.`,
  secondLowFloatBody: `Pár eurótól egészen több ezer euróig is el lehet kérni a Float-ra hivatkozva egy kis pluszt. `,
  thirdLowFloatBody: `Viszont egy skin hiába a világon a 376. legalacsonyabb Floattal rendelkezik ettől még pár eurón kívül nem ér sokkal több túlfizetést.`,
};

export default function LowFloat() {
  return (
    <ul className="divide-y">
      <LowFloatItem body={lowFloatBodies.firstLowFloatBody} padding="pb-8" />

      <LowFloatItem body={lowFloatBodies.secondLowFloatBody} padding="py-8" />

      <LowFloatItem body={lowFloatBodies.thirdLowFloatBody} padding="py-8" />
    </ul>
  );
}
