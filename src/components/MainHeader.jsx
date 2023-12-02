import { Link } from "react-router-dom";
import Container from "./Container";
import NavItem from "./NavItem";

export default function MainHeader() {
  return (
    <header className="bg-neutral-900 py-3">
      <Container customStyles="flex justify-between items-center">
        <img
          className="rounded-xl w-16"
          src="assets/logo.webp"
          alt="evertsontrade logo"
        />

        <nav>
          <ul className="flex gap-10">
            <NavItem>
              <Link to="/">Kezdőlap</Link>
            </NavItem>

            <NavItem>
              <Link to="/kereskedok">Kereskedők</Link>
            </NavItem>

            <NavItem>
              <Link to="/szolgaltatasok">Szolgáltatások</Link>
            </NavItem>

            <NavItem>
              <Link to="/leiras">Leírás</Link>
            </NavItem>

            <NavItem>
              <Link to="/kapcsolatfelvetel">Kapcsolatfelvétel</Link>
            </NavItem>
          </ul>
        </nav>
        {/* <button className="text-lg">
          <i class="fa-solid fa-bars"></i>
        </button> */}
      </Container>
    </header>
  );
}
