export default function TradeUpListItem({ body }) {
  return (
    <li className="flex max-sm:flex-col gap-5 py-8">
      <div>
        <picture>
          <source srcset="assets/webp/crown.webp" />
          <img
            className="max-w-[3rem]"
            src="assets/png/crown.png"
            alt="crown"
          />
        </picture>
      </div>
      <p>{body}</p>
    </li>
  );
}
