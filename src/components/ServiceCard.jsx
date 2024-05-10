export default function ServiceCard({ title, body, href, hrefText, video }) {
  return (
    <div className="bg-neutral-800 p-7 rounded-xl shadow-2xl space-y-5">
      <h3 className="text-blue-400 uppercase text-xl max-sm:text-lg">
        {title}
      </h3>
      <p className="leading-relaxed max-sm:text-sm">{body}</p>

      <div className="space-y-10">
        {href && (
          <p className="leading-relaxed max-sm:text-sm">
            {hrefText}
            <a
              className="text-blue-400 underline break-all block"
              target="_blank"
              href={href}
            >
              {href}
            </a>
          </p>
        )}
        {video && (
          <iframe
            className="mx-auto rounded-lg w-full h-[50vh]"
            src={video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        )}
      </div>
    </div>
  );
}
