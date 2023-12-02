export default function FooterItem({ text, icon }) {
  return (
    <li className="bg-neutral-900 rounded-lg p-3 flex gap-2 justify-center items-center">
      {icon}
      <span>{text}</span>
    </li>
  );
}
