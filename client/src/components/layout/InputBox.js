import React from "react";

const InputBox = (props) => {
  return (
    <div>
      <label
        htmlFor={props.for}
        className="cursor-pointer font-dm text-base font-bold text-primary"
      >
        {props.title}
      </label>

      {props.type ? (
        <props.as
          className="w-full resize-none border-b border-smoke pt-2.5 pb-4 text-sm font-normal text-secondary outline-none placeholder:font-dm"
          type={props.type}
          placeholder={props.placeholder}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />
      ) : (
        <props.as
          className="w-full resize-none border-b border-smoke pt-2.5 pb-4 text-sm font-normal text-secondary outline-none placeholder:font-dm"
          placeholder={props.placeholder}
          id={props.id}
          name={props.name}
          onChange={props.onChange}
          value={props.value}
        />
      )}
    </div>
  );
};

export default InputBox;
