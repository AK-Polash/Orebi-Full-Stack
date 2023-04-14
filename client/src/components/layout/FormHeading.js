import React from "react";

const FormHeading = ({ heading }) => {
  return (
    <h2 className="mb-4 font-dm text-xl font-bold text-primary lg:text-2xl xl:mb-10 xl:text-4xl">
      {heading}
    </h2>
  );
};

export default FormHeading;
