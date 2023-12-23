export default function TradeGuideListItem({ body, padding, href }) {
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
          <a className="text-blue-400 underline" target="_blank" href={href}>
            https://chrome.google.com/webstore/detail/csgo-trader-steam-trading/kaibcgikagnkfgjnibflebpldakfhfih
          </a>
        </p>
      ) : (
        <p>{body}</p>
      )}
    </li>
  );
}
