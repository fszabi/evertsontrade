export default function TradeUpListItem({ body }) {
  return (
    <li className="flex max-sm:flex-col gap-5 py-8">
      <div>
        <img
          className="max-w-[3rem]"
          src="assets/crown.png"
          alt="exclamation mark"
        />
      </div>
      <p>{body}</p>
    </li>
  );
}
