export default function FooterItem({ text, icon }) {
  return (
    <li className="bg-neutral-900 rounded-lg py-3 px-5 flex gap-2 justify-center items-center">
      {icon}
      <span className="leading-none">{text}</span>
    </li>
  );
}
