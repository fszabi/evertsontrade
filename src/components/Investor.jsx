export default function Investor({ src, src_phone, src_fallback, alt }) {
  return (
    <picture>
      <source srcset={src} media="(min-width: 500px)" />
      <source srcset={src_phone} />
      <img className="rounded-lg w-full" src={src_fallback} alt={alt} />
    </picture>
  );
}
