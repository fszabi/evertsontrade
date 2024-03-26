export default function ServiceCard({ title, body, href }) {
  return (
    <div className="bg-neutral-900 p-7 rounded-xl shadow-2xl space-y-5">
      <h3 className="text-blue-400 uppercase text-xl max-sm:text-lg">
        {title}
      </h3>
      <p className="leading-relaxed max-sm:text-sm">{body}</p>
      {href && (
        <div className="space-y-10">
          <p className="leading-relaxed max-sm:text-sm">
            A tanfolyam az alábbi linken érhető el:
            <a
              className="text-blue-400 underline break-all block"
              target="_blank"
              href={href}
            >
              {href}
            </a>
          </p>
          <iframe
            className="mx-auto rounded-lg w-full h-[50vh]"
            src="https://www.youtube.com/embed/SR4p4JyFRVQ?si=iaJeGORjzuySgzLM"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      )}
    </div>
  );
}
