import React from "react";

const Badge = ({ title }) => {
  return (
    <span className="absolute top-3 left-3 bg-primary py-1 px-4 font-dm text-[12px] font-bold text-pure xl:top-5 xl:left-5 xl:py-2 xl:px-[30px] xl:text-sm">
      {title}
    </span>
  );
};

export default Badge;
