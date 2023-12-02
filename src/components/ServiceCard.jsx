export default function ServiceCard({ title, body }) {
  return (
    <div className="bg-neutral-900 p-7 rounded-xl shadow-2xl space-y-5">
      <h3 className="text-blue-400 italic uppercase text-xl">{title}</h3>
      <p className="leading-relaxed">{body}</p>
    </div>
  );
}
