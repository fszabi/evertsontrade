export default function StickerListItem({ body, padding, href }) {
  return (
    <li className={`flex max-sm:flex-col gap-5`.concat(` ${padding}`)}>
      <div>
        <picture>
          <source media="(min-width: 650px)" srcSet="assets/webp/crown.webp" />
          <source srcSet="assets/webp/crown.webp" />
          <img
            className="max-w-[3rem]"
            src="assets/png/crown.png"
            alt="crown"
          />
        </picture>
      </div>
      {href ? (
        <p>
          {body}
          <a
            className="text-blue-400 underline break-all"
            target="_blank"
            href={href}
          >
            {href}
          </a>
        </p>
      ) : (
        <p>{body}</p>
      )}
    </li>
  );
}
