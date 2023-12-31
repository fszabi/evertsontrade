export default function FadeItem({ body, padding }) {
  return (
    <li className={`flex max-sm:flex-col gap-5`.concat(` ${padding}`)}>
      <div>
        <picture>
          <source srcSet="assets/webp/glock18.webp" />
          <img
            className="max-w-[3rem]"
            src="assets/png/glock18.png"
            alt="glock 18"
          />
        </picture>
      </div>
      <p>{body}</p>
    </li>
  );
}
