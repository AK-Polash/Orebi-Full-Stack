import React from "react";
import { FaAngleRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Bredcrumb = () => {
  let path = window.location.pathname.split("/")[1];

  return (
    <div className="py-3 md:py-7 lg:py-9 xl:py-14 2xl:py-24">
      <h2 className="pb-2 font-dm text-xl font-bold text-primary md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl">
        {path.charAt(0).toUpperCase() + path.slice(1)}
      </h2>

      <p className="flex items-center gap-x-1 font-dm text-xs font-normal text-secondary">
        <Link to="/"> Home </Link>
        <FaAngleRight className="!text-[10px] font-normal" />
        {path}
      </p>
    </div>
  );
};

export default Bredcrumb;
