import { useRef, useEffect, useState } from "react";

export default function ScrollArrow() {
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry);

        if (!entry.isIntersecting) {
          setIsScrollButtonVisible(true);
        } else {
          setIsScrollButtonVisible(false);
        }
      },
      {
        rootMargin: "500px 0px 0px 0px",
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
  }, [ref]);

  function scrollTop() {
    window.scrollTo(0, 0);
  }

  return (
    <>
      <div className="absolute top-0" ref={ref} id="scroll-watcher"></div>
      <button
        onClick={scrollTop}
        className={`fixed bottom-4 right-4 flex 
    justify-center items-center text-blue-400
    hover:opacity-60 transition-all duration-300
    `.concat(
          isScrollButtonVisible
            ? " visible opacity-100"
            : " invisible opacity-0"
        )}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          class="w-12 h-12"
        >
          <path
            fill-rule="evenodd"
            d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z"
            clip-rule="evenodd"
          />
        </svg>
        <span className="sr-only"> Görgetés az oldal tetejére</span>
      </button>
    </>
  );
}
