import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const Accordion = ({ accordionValues, className }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className={className}>
      {accordionValues.map(({ heading, content }, index) => (
        <div className="w-full bg-pure shadow-md lg:w-[450px]" key={index}>
          <div
            className={
              activeIndex === index
                ? "flex cursor-pointer items-center justify-between py-6 px-5"
                : "flex cursor-pointer items-center justify-between border-b border-smoke py-6 px-5"
            }
            onClick={() => setActiveIndex(index === activeIndex ? null : index)}
          >
            <h4 className="font-dm text-base font-bold text-primary">
              {heading}
            </h4>
            {activeIndex === index ? <FiMinus /> : <FiPlus />}
          </div>

          {activeIndex === index && (
            <ul className="w-full bg-pure px-5 pb-6">
              <li className="font-dm text-base font-normal text-secondary">
                {content.address}
              </li>
              <li className="font-dm text-base font-normal text-secondary">
                {content.phone}
              </li>
              <li className="font-dm text-base font-normal text-secondary">
                {content.email}
              </li>
              <li className="font-dm text-base font-normal text-secondary">
                {content.time}
              </li>
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
