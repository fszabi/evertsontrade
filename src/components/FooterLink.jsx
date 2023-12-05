export default function FooterLink({ href, icon, aria }) {
  return (
    <li className="text-xl">
      <a
        className="mx-auto flex justify-center items-center rounded-full aspect-square h-[4rem] bg-neutral-900 w-fit hover:opacity-80 duration-300"
        target="_blank"
        aria-label={aria}
        href={href}
      >
        {icon}
      </a>
    </li>
  );
}
