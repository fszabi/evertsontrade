export default function ScammerListItem({ icon, body }) {
  return (
    <li className="flex max-sm:flex-col gap-5">
      <div>{icon}</div>
      <p>{body}</p>
    </li>
  );
}
