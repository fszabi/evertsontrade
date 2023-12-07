export default function ExampleListItem({
  src_one,
  src_one_fallback,
  src_two,
  src_two_fallback,
  alt,
  alt_2,
}) {
  return (
    <li className="flex max-md:flex-col justify-center items-center gap-14">
      <picture>
        <source srcSet={src_one} />
        <img src={src_one_fallback} alt={alt} />
      </picture>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-14 h-14 max-md:hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
        />
      </svg>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="currentColor"
        className="w-14 h-14 max-md:block hidden"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.75 17.25L12 21m0 0l-3.75-3.75M12 21V3"
        />
      </svg>

      <picture>
        <source srcSet={src_two} />
        <img src={src_two_fallback} alt={alt_2} />
      </picture>
    </li>
  );
}
