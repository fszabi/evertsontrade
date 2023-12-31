export default function CrownHowlItem({ body, padding }) {
  return (
    <li className={`flex max-sm:flex-col gap-5`.concat(` ${padding}`)}>
      <div>
        <picture>
          <source srcSet="assets/webp/flammable.webp" />
          <img
            className="max-w-[3rem]"
            src="assets/png/flammable.png"
            alt="flammable"
          />
        </picture>
      </div>
      <p>{body}</p>
    </li>
  );
}
