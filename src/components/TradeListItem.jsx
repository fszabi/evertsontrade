export default function TradeListItem({ body }) {
  return (
    <li className="flex gap-5 py-8">
      <div>
        <img
          className="max-w-[3rem]"
          src="assets/exclamation_mark.png"
          alt="exclamation mark"
        />
      </div>
      <p>{body}</p>
    </li>
  );
}
