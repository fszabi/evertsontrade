export default function FooterLink({ href, icon, aria }) {
  return (
    <li className="text-xl hover:opacity-50 hover:scale-105 transition-all duration-300">
      <a target="_blank" aria-label={aria} href={href}>
        {icon}
      </a>
    </li>
  );
}
