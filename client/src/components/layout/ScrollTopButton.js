import React from "react";
import { animateScroll } from "react-scroll";
import { FaChevronUp } from "react-icons/fa";

const ScrollTopButton = ({ hasScrolled }) => {
  return (
    <button
      title="top"
      className={
        hasScrolled
          ? "fixed bottom-5 right-3 z-40 flex h-9 w-9 items-center justify-center rounded-full border-2 border-transparent bg-primary text-pure opacity-100 shadow-lg transition-all duration-150 ease-linear hover:border hover:border-primary hover:bg-pure hover:text-primary md:right-6 lg:bottom-10 lg:right-10 lg:h-12 lg:w-12"
          : "fixed bottom-0 right-3 z-40 flex h-9 w-9 items-center justify-center rounded-full border-2 border-transparent bg-primary text-pure opacity-0 shadow-lg transition-all duration-150 ease-linear hover:border hover:border-primary hover:bg-pure hover:text-primary md:right-6 lg:bottom-0 lg:right-10 lg:h-12 lg:w-12"
      }
      onClick={() => animateScroll.scrollToTop()}
    >
      <FaChevronUp className="text-xl" />
    </button>
  );
};

export default ScrollTopButton;
