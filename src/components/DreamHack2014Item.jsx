export default function DreamHack2014Item({ body, padding }) {
  return (
    <li className={`flex max-sm:flex-col gap-5`.concat(` ${padding}`)}>
      <div>
        <picture>
          <source srcSet="assets/webp/virtus.webp" />
          <img
            className="max-w-[3rem]"
            src="assets/png/virtus.png"
            alt="virtus"
          />
        </picture>
      </div>
      <p>{body}</p>
    </li>
  );
}
