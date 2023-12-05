import ExampleListItem from "./ExampleListItem";

export default function ExampleList() {
  return (
    <ul className="space-y-12 max-md:space-y-20">
      <ExampleListItem
        src_one="assets/webp/ak47.webp"
        src_one_fallback="assets/png/ak47.png"
        src_two="assets/webp/ak47_2.webp"
        src_two_fallback="assets/png/ak47_2.png"
        alt="ak47"
        alt_2="ak47 2"
      />

      <ExampleListItem
        src_one="assets/webp/butterfly.webp"
        src_one_fallback="assets/png/butterfly.png"
        src_two="assets/webp/butterfly_2.webp"
        src_two_fallback="assets/png/butterfly_2.png"
        alt="butterfly"
        alt_2="butterfly 2"
      />

      <ExampleListItem
        src_one="assets/webp/flip.webp"
        src_one_fallback="assets/png/flip.png"
        src_two="assets/webp/flip_2.webp"
        src_two_fallback="assets/png/flip_2.png"
        alt="flip"
        alt_2="flip 2"
      />
    </ul>
  );
}
