import React from "react";
import Header from "./Header";
import Navbar from "./Navbar";

const AttastHeader = ({ hasScrolled }) => {
  return (
    <div
      className={
        hasScrolled
          ? "sticky top-0 left-0 z-50 w-full shadow-lg transition-all duration-150 ease-linear"
          : "sticky top-0 left-0 z-50 w-full shadow-none transition-all duration-150 ease-linear"
      }
    >
      <Navbar />
      <Header />
    </div>
  );
};

export default AttastHeader;
