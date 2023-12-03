import { Link } from "react-router-dom";
import Container from "./Container";
import NavItem from "./NavItem";
import { useState, useEffect } from "react";

export default function MainHeader() {
  const [isNavOpen, setIsNavOpen] = useState(false);

  function onNavStateChange() {
    !isNavOpen ? setIsNavOpen(true) : setIsNavOpen(false);
  }

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 800 && isNavOpen) {
        setIsNavOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isNavOpen]);

  return (
    <header className="bg-neutral-900 py-3 sticky top-0 left-0 right-0 z-50">
      <Container customStyles="flex gap-14 justify-between items-center">
        <img
          className="z-50 rounded-xl w-16"
          src="assets/logo.webp"
          alt="evertsontrade logo"
        />

        <nav>
          <ul
            className={`flex flex-wrap gap-x-10 gap-y-3
          z-40 max-md:gap-y-8 max-md:flex-col max-md:bg-neutral-900 
          max-md: max-md:fixed
          max-md:top-0 max-md:right-0 
          max-md:left-0 max-md:py-40 max-md:px-8 transition-all duration-500`.concat(
              isNavOpen
                ? " max-md:translate-y-0 max-md:visible max-md:opacity-100"
                : " max-md:-translate-y-full max-md:invisible max-md:opacity-0"
            )}
          >
            <NavItem NavStateChange={onNavStateChange}>
              <Link to="/">Kezdőlap</Link>
            </NavItem>

            <NavItem NavStateChange={onNavStateChange}>
              <Link to="/kereskedok">Kereskedők</Link>
            </NavItem>

            <NavItem NavStateChange={onNavStateChange}>
              <Link to="/szolgaltatasok">Szolgáltatások</Link>
            </NavItem>

            <NavItem NavStateChange={onNavStateChange}>
              <Link to="/trade-up">Trade-Up</Link>
            </NavItem>

            <NavItem NavStateChange={onNavStateChange}>
              <Link to="/leiras">Leírás</Link>
            </NavItem>

            <NavItem NavStateChange={onNavStateChange}>
              <Link to="/kapcsolatfelvetel">Kapcsolatfelvétel</Link>
            </NavItem>
          </ul>
        </nav>
        <button
          onClick={onNavStateChange}
          className="grid [grid-template-areas:'stack'] 
          md:hidden text-lg z-50"
        >
          <i
            className={`fa-solid fa-bars [grid-area:stack] transition-all duration-500`.concat(
              isNavOpen
                ? " max-md:invisible max-md:opacity-0"
                : " max-md:visible max-md:opacity-100"
            )}
          ></i>
          <i
            className={`fa-solid fa-x [grid-area:stack] transition-all duration-500`.concat(
              isNavOpen
                ? " max-md:visible max-md:opacity-100"
                : " max-md:invisible max-md:opacity-0"
            )}
          ></i>
        </button>
      </Container>
    </header>
  );
}
