import React, { useEffect, useState } from "react";
import { IoIosArrowUp } from "react-icons/io";

function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);
  return (
    <div className=" fixed bottom-4 right-3 z-[99] ">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-dark-blue  text-white shadow-lg btn-circle btn hover:bg-dark-blue/80 "
        >
          <IoIosArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default BackToTopButton;
