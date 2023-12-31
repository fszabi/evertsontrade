export default function Katowice2015Item({ body, padding }) {
  return (
    <li className={`flex max-sm:flex-col gap-5`.concat(` ${padding}`)}>
      <div>
        <picture>
          <source srcSet="assets/webp/2015_vox.webp" />
          <img
            className="max-w-[3rem]"
            src="assets/png/2015_vox.png"
            alt="2015 vox"
          />
        </picture>
      </div>
      <p>{body}</p>
    </li>
  );
}
