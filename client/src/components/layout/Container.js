import React from "react";

const Container = ({ children }) => {
  return (
    <div className="mx-auto max-w-container px-3 py-2.5 lg:px-3.5 lg:py-0">
      {children}
    </div>
  );
};

export default Container;
