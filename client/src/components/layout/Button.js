import React from "react";

const Button = ({ btnText, type, onClick }) => {
  return (
    <>
      {type ? (
        <button
          className="h-[50px] w-[200px] border-2 border-transparent bg-primary font-dm text-sm font-bold text-white transition-all duration-100 ease-linear hover:border-2 hover:border-primary hover:bg-pure hover:text-primary"
          type={type}
          onClick={onClick}
        >
          {btnText}
        </button>
      ) : (
        <button
          className="h-[50px] w-[200px] border-2 border-transparent bg-primary font-dm text-sm font-bold text-white transition-all duration-100 ease-linear hover:border-2 hover:border-primary hover:bg-pure hover:text-primary"
          onClick={onClick}
        >
          {btnText}
        </button>
      )}
    </>
  );
};

export default Button;
