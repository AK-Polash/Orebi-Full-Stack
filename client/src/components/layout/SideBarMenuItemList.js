import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";

const SideBarMenuItemList = ({ subdrop, listTitle, color, children }) => {
  let [show, setShow] = useState(false);

  return (
    <>
      {subdrop && (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between border-b-[1px] border-smoke py-2 font-dm text-xs font-normal text-secondary lg:py-3 lg:text-sm xl:text-base 2xl:py-5"
        >
          <h2 className="font-dm text-base font-normal text-secondary">
            {color && (
              <span
                className="mr-2 inline-block h-[11px] w-[11px] rounded-[50%]"
                style={{ background: color }}
              ></span>
            )}

            {listTitle}
          </h2>

          {/* The Code bellow (line:26-30) was occuring a bug while on small screen menu icon click */}
          {/* {show ? (
            <FiMinus className="text-base" />
          ) : (
            <FiPlus className="text-base" />
          )} */}
          <div className="flex items-center justify-between">
            <FiMinus
              className={`text-base ${
                show ? "visible order-last" : "invisible order-first"
              }`}
            />

            <FiPlus
              className={`text-base ${
                show ? "invisible order-first" : "visible order-last"
              }`}
            />
          </div>
        </div>
      )}

      {show && <div className="md:pl-3"> {children} </div>}
    </>
  );
};

export default SideBarMenuItemList;
