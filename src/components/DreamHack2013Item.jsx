export default function DreamHack2013Item({ body, padding }) {
  return (
    <li className={`flex max-sm:flex-col gap-5`.concat(` ${padding}`)}>
      <div>
        <picture>
          <source srcSet="assets/webp/2013_snowman.webp" />
          <img
            className="max-w-[3rem]"
            src="assets/png/2013_snowman.png"
            alt="2013 snowman"
          />
        </picture>
      </div>
      <p>{body}</p>
    </li>
  );
}
