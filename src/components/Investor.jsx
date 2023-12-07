export default function Investor({ src, src_phone, src_fallback, alt }) {
  return (
    <picture>
      <source srcSet={src} media="(min-width: 500px)" />
      <source srcSet={src_phone} />
      <img className="rounded-lg w-full" src={src_fallback} alt={alt} />
    </picture>
  );
}
