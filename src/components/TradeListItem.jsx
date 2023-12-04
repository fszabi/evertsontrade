export default function TradeListItem({ body, padding }) {
  return (
    <li className={`flex max-sm:flex-col gap-5`.concat(` ${padding}`)}>
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
