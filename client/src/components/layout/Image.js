import React from "react";

const Image = ({ source, className, alt, onClick }) => {
  return (
    <>
      {onClick ? (
        <img src={source} className={className} alt={alt} onClick={onClick} />
      ) : (
        <img src={source} className={className} alt={alt} />
      )}
    </>
  );
};

export default Image;
