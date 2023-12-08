import Investor from "./Investor";

export default function Investors() {
  return (
    <div className="list-none grid sm:grid-cols-[repeat(auto-fit,_minmax(22rem,_1fr))] gap-10">
      <Investor
        src="assets/webp/investor_1.webp"
        src_phone="assets/webp_phone/investor_1_phone.webp"
        src_fallback="assets/png/investor_1.png"
        alt="tradeup member one"
      />

      <Investor
        src="assets/webp/investor_2.webp"
        src_phone="assets/webp_phone/investor_2_phone.webp"
        src_fallback="assets/png/investor_2.png"
        alt="tradeup member two"
      />

      <Investor
        src="assets/webp/investor_3.webp"
        src_phone="assets/webp_phone/investor_3_phone.webp"
        src_fallback="assets/png/investor_3.png"
        alt="tradeup member three"
      />

      <Investor
        src="assets/webp/investor_4.webp"
        src_phone="assets/webp_phone/investor_4_phone.webp"
        src_fallback="assets/png/investor_4.png"
        alt="tradeup member four"
      />

      <Investor
        src="assets/webp/investor_5.webp"
        src_phone="assets/webp_phone/investor_5_phone.webp"
        src_fallback="assets/png/investor_5.png"
        alt="tradeup member five"
      />

      <Investor
        src="assets/webp/investor_6.webp"
        src_phone="assets/webp_phone/investor_6_phone.webp"
        src_fallback="assets/png/investor_6.png"
        alt="tradeup member six"
      />

      <Investor
        src="assets/webp/investor_7.webp"
        src_phone="assets/webp_phone/investor_7_phone.webp"
        src_fallback="assets/png/investor_7.png"
        alt="tradeup member seven"
      />

      <Investor
        src="assets/webp/investor_8.webp"
        src_phone="assets/webp_phone/investor_8_phone.webp"
        src_fallback="assets/png/investor_8.png"
        alt="tradeup member eight"
      />

      <Investor
        src="assets/webp/investor_9.webp"
        src_phone="assets/webp_phone/investor_9_phone.webp"
        src_fallback="assets/png/investor_9.png"
        alt="tradeup member nine"
      />

      <Investor
        src="assets/webp/investor_10.webp"
        src_phone="assets/webp_phone/investor_10_phone.webp"
        src_fallback="assets/png/investor_10.png"
        alt="tradeup member ten"
      />
    </div>
  );
}
