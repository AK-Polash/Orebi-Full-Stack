import React from "react";

const Dropdown = ({ children, className, dropRef }) => {
  return (
    <div className={className} ref={dropRef}>
      {children}
    </div>
  );
};

export default Dropdown;
