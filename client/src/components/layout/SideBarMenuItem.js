import React, { useState } from "react";
import SideBarMenuItemList from "./SideBarMenuItemList";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";

const SideBarMenuItem = ({
  dropDown,
  headingTitle,
  headingClassName,
  data,
}) => {
  let [show, setShow] = useState(true);

  return (
    <div className="mb-4 2xl:mb-10">
      {dropDown ? (
        <div
          onClick={() => setShow(!show)}
          className="flex cursor-pointer items-center justify-between"
        >
          <h3 className={headingClassName}> {headingTitle} </h3>

          {/* The Code bellow (line:23-27) was occuring a bug while on small screen menu icon click */}
          {/* {show ? (
            <GoTriangleUp className="text-sm" />
          ) : (
            <GoTriangleDown className="text-sm" />
          )} */}
          <div className="flex items-center justify-between">
            <GoTriangleUp
              className={`text-sm ${
                show ? "visible order-last" : "invisible order-first"
              }`}
            />

            <GoTriangleDown
              className={`text-sm ${
                show ? "invisible order-first" : "visible order-last"
              }`}
            />
          </div>
        </div>
      ) : (
        <h3 className={headingClassName}> {headingTitle} </h3>
      )}

      {show && (
        <>
          {data.map((item, index) => (
            <div key={index} className="kire">
              {item.subCategory ? (
                <SideBarMenuItemList
                  subdrop={"true"}
                  listTitle={item.name}
                  color={item.colorCode}
                >
                  {item.subCategory.map((subItem, subIndex) => (
                    <h3
                      key={subIndex}
                      className="border-b-[1px] border-smoke py-2 font-dm text-base font-normal text-secondary lg:py-3 2xl:py-5"
                    >
                      {subItem.colorCode && (
                        <span
                          className="mr-2 inline-block h-[11px] w-[11px] rounded-[50%]"
                          style={{ background: subItem.colorCode }}
                        ></span>
                      )}

                      {subItem.name}
                    </h3>
                  ))}
                </SideBarMenuItemList>
              ) : (
                <h2
                  subdrop={"false"}
                  className="border-b-[1px] border-smoke py-2 font-dm text-base font-normal text-secondary lg:py-3 2xl:py-5"
                >
                  {item.colorCode && (
                    <span
                      className="mr-2 inline-block h-[11px] w-[11px] rounded-[50%]"
                      style={{ background: item.colorCode }}
                    ></span>
                  )}

                  {item.name}
                </h2>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default SideBarMenuItem;
