import { useRef, useEffect, useState } from "react";

export default function ScrollArrow() {
  const [isScrollButtonVisible, setIsScrollButtonVisible] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
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
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Firefox, Chrome, Opera
  }

  return (
    <>
      <div className="absolute top-0" ref={ref} id="scroll-watcher"></div>
      <button
        onClick={scrollTop}
        className={`fixed bottom-4 right-4 flex 
    justify-center items-center text-2xl text-blue-400
    hover:opacity-60 transition-all duration-300
    `.concat(
          isScrollButtonVisible
            ? " visible opacity-100"
            : " invisible opacity-0"
        )}
      >
        <i className="fa-solid fa-circle-arrow-up"></i>
        <span className="sr-only"> Görgetés az oldal tetejére</span>
      </button>
    </>
  );
}
