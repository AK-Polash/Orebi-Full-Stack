import React, { useState, useEffect } from "react";
import { Events, scrollSpy } from "react-scroll";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import AttastHeader from "./AttastHeader";
import ScrollTopButton from "./ScrollTopButton";

const RootLayout = () => {
  const [hasScrolled, setHasScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const isScrolled = scrollTop >= 120;
      setHasScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);
    Events.scrollEvent.register("scroll", handleScroll);
    scrollSpy.update();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      Events.scrollEvent.remove("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AttastHeader hasScrolled={hasScrolled} />
      <Outlet />
      <Footer />
      <ScrollTopButton hasScrolled={hasScrolled} />
    </>
  );
};

export default RootLayout;
