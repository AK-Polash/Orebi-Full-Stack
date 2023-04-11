import React from "react";

const SelectOption = ({ className, optionValue, optionText }) => {
  return (
    <option value={optionValue} className={className}>
      {optionText}
    </option>
  );
};

export default SelectOption;
