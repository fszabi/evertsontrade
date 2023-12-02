export default function NavItem({ children }) {
  return (
    <li className="hover:text-blue-400 hover:scale-105 transition-all duration-300">
      {children}
    </li>
  );
}
