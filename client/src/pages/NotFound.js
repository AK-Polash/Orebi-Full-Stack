import React from "react";
import { NavLink } from "react-router-dom";
import Container from "../components/layout/Container";

const NotFound = () => {
  return (
    <div>
      <Container>
        <h4 className="font-dm text-[200px] font-bold text-primary">404</h4>
        <p className="max-w-[644px] font-dm text-base font-normal text-primary">
          The page you were looking for couldn't be found. The page could be
          removed or you misspelled the word while searching for it. Maybe try a
          search?
        </p>
        <NavLink
          to="/"
          className="mt-14 inline-block border-2 border-transparent bg-primary px-11 py-4 font-dm text-sm font-bold text-white transition-all duration-100 ease-linear hover:border-2 hover:border-primary hover:bg-pure hover:text-primary"
        >
          Back to Home
        </NavLink>
      </Container>
    </div>
  );
};

export default NotFound;
