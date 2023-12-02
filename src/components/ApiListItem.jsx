export default function ScammerListItem({ icon, body }) {
  return (
    <li className="flex gap-5">
      <div>{icon}</div>
      <p>{body}</p>
    </li>
  );
}
