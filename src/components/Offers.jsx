import Offer from "./Offer";

export default function Offers() {
  return (
    <div className="list-none grid sm:grid-cols-[repeat(auto-fit,_minmax(22rem,_1fr))] gap-10">
      <Offer
        src="assets/webp/tradeoffer.webp"
        src_phone="assets/webp_phone/tradeoffer_phone.webp"
        src_fallback="assets/png/tradeoffer.png"
        alt="tradeoffer one"
      />

      <Offer
        src="assets/webp/tradeoffer_2.webp"
        src_phone="assets/webp_phone/tradeoffer_2_phone.webp"
        src_fallback="assets/png/tradeoffer_2.png"
        alt="tradeoffer two"
      />

      <Offer
        src="assets/webp/tradeoffer_3.webp"
        src_phone="assets/webp_phone/tradeoffer_3_phone.webp"
        src_fallback="assets/png/tradeoffer_3.png"
        alt="tradeoffer three"
      />

      <Offer
        src="assets/webp/trade.webp"
        src_phone="assets/webp_phone/trade_phone.webp"
        src_fallback="assets/png/trade.png"
        alt="trade one"
      />

      <Offer
        src="assets/webp/trade_2.webp"
        src_phone="assets/webp_phone/trade_2_phone.webp"
        src_fallback="assets/png/trade_2.png"
        alt="trade two"
      />

      <Offer
        src="assets/webp/trade_3.webp"
        src_phone="assets/webp_phone/trade_3_phone.webp"
        src_fallback="assets/png/trade_3.png"
        alt="trade three"
      />
    </div>
  );
}
