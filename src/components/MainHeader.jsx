import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

{
  /* <div className="space-x-20">
  {Object.keys(lngs).map((lng) => (
    <button
      key={lng}
      className={i18n.resolvedLanguage === lng ? "text-blue-400" : ""}
      type="submit"
      onClick={() => i18n.changeLanguage(lng)}
    >
      {lngs[lng].nativeName}
    </button>
  ))}
</div>; */
}

// const lngs = {
//   hu: { nativeName: "Hungarian" },
// };

export default function MainHeader() {
  const { t, i18n } = useTranslation();

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
      <div className="container flex gap-14 justify-between items-center">
        <picture className="z-50">
          <source srcSet="assets/webp/logo.webp" />
          <img
            className="rounded-xl z-50 w-16 h-16"
            src="assets/jpg/logo.jpg"
            alt="evertsontrade logo"
          />
        </picture>

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
          className="grid place-items-center [grid-template-areas:'stack'] 
          md:hidden text-lg z-50"
        >
          <span className="sr-only">Navigációs menü</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-9 h-9 [grid-area:stack] transition-all duration-500`.concat(
              isNavOpen
                ? " max-md:invisible max-md:opacity-0"
                : " max-md:visible max-md:opacity-100"
            )}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className={`w-9 h-9 [grid-area:stack] transition-all duration-500`.concat(
              isNavOpen
                ? " max-md:visible max-md:opacity-100"
                : " max-md:invisible max-md:opacity-0"
            )}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </header>
  );
}
