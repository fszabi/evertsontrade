export default function ServiceCard({ title, body, href }) {
  return (
    <div className="bg-neutral-900 p-7 rounded-xl shadow-2xl space-y-5">
      <h3 className="text-blue-400 uppercase text-xl max-sm:text-lg">
        {title}
      </h3>
      <p className="leading-relaxed max-sm:text-sm">{body}</p>
      {href && (
        <a
          className="text-blue-400 underline break-all block"
          target="_blank"
          href={href}
        >
          {href}
        </a>
      )}
    </div>
  );
}
