import React from "react";

const Search = ({ className, placeholder }) => {
  return (
    <>
      <input className={className} type="search" placeholder={placeholder} />
    </>
  );
};

export default Search;
