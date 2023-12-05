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
        <source srcset={src_one} />
        <img src={src_one_fallback} alt={alt} />
      </picture>

      <i class="fa-solid fa-arrow-right-long text-4xl max-md:hidden"></i>
      <i class="fa-solid fa-arrow-down-long text-4xl max-md:block hidden"></i>

      <picture>
        <source srcset={src_two} />
        <img src={src_two_fallback} alt={alt_2} />
      </picture>
    </li>
  );
}
