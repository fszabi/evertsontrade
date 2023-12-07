export default function Trader({
  href,
  src,
  src_phone,
  src_fallback,
  alt,
  aria,
}) {
  return (
    <a
      target="_blank"
      href={href}
      aria-label={aria}
      className="relative grid place-items-center group"
    >
      <picture>
        <source media="(min-width: 500px)" srcSet={src} />
        <source srcSet={src_phone} />
        <img
          className="min-h-[20rem] object-cover rounded-lg group-hover:opacity-50 transition-opacity duration-300"
          src={src_fallback}
          alt={alt}
        />
      </picture>
      <i className="fa-brands fa-steam text-xl opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 absolute transition-all duration-300"></i>
    </a>
  );
}
