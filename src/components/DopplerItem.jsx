export default function DopplerItem({ body, padding }) {
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
      <p>{body}</p>
    </li>
  );
}
