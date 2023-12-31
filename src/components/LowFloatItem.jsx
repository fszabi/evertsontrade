export default function LowFloatItem({ body, padding }) {
  return (
    <li className={`flex max-sm:flex-col gap-5`.concat(` ${padding}`)}>
      <div>
        <picture>
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
