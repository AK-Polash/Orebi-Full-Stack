import React, { useState, useEffect, useRef } from "react";
import Container from "../components/layout/Container";
import Bredcrumb from "../components/layout/Bredcrumb";
import Flex from "../components/layout/Flex";
import Pagination from "../components/layout/Pagination";
import { TfiLayoutGrid2Alt } from "react-icons/tfi";
import { FaList } from "react-icons/fa";
import Select from "../components/layout/Select";
import SelectOption from "../components/layout/SelectOption";
import Label from "../components/layout/Label";
import SideBarMenu from "../components/layout/SideBarMenu";
import { IoFilterSharp } from "react-icons/io5";

const Shop = () => {
  let showOptions = [
    { optionValue: 12, optionText: 12 },
    { optionValue: 24, optionText: 24 },
    { optionValue: 48, optionText: 48 },
  ];

  let [productShow, setProductShow] = useState(12);

  let sortOptions = [
    { optionValue: "featured", optionText: "Featured" },
    { optionValue: "newArrival", optionText: "New Arrival" },
    { optionValue: "bestSeller", optionText: "Best Seller" },
    { optionValue: "specialOffer", optionText: "Special Offer" },
  ];

  let [show, setShow] = useState(false);
  let filterRef = useRef();
  let sideBarMenuRef = useRef();

  let handleToggle = () => {
    setShow(!show);
  };

  useEffect(() => {
    const handlePageClick = (e) => {
      if (filterRef.current.contains(e.target)) {
        setShow(true);
      } else if (sideBarMenuRef.current.contains(e.target)) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    const handleScreenWidthAction = () => {
      if (window.innerWidth >= 640) {
        setShow(true);
        document.body.removeEventListener("click", handlePageClick);
      } else {
        setShow(false);
        document.body.addEventListener("click", handlePageClick);
      }
    };

    handleScreenWidthAction();
    window.addEventListener("resize", handleScreenWidthAction);
  }, []);

  return (
    <div className="w-full">
      <Container>
        <Bredcrumb />

        <Flex className="relative flex gap-x-3 md:gap-x-5 xl:gap-x-10">
          <div
            ref={sideBarMenuRef}
            className="fixed top-0 left-0 z-50 w-[70%] bg-flat sm:static sm:z-auto sm:w-[25%] sm:bg-transparent md:w-[20%]"
          >
            {show && (
              <SideBarMenu
                toggle={handleToggle}
                className="relative h-screen w-full overflow-y-scroll px-4 pt-9 shadow-3xl sm:h-auto sm:overflow-y-auto sm:p-0 sm:shadow-none"
              />
            )}
          </div>

          <div className="relative w-full md:w-[80%]">
            <Flex className="flex flex-wrap items-center justify-between gap-y-2 pb-8 lg:gap-y-0 lg:pb-10 xl:pb-[60px]">
              <Flex className="flex items-center gap-x-1.5 lg:gap-x-5">
                <div className="group hidden h-7 w-7 cursor-pointer items-center justify-center border-2 border-solid border-smoke bg-transparent transition-all duration-100 ease-linear hover:border-transparent hover:bg-primary sm:flex lg:h-9 lg:w-9">
                  <TfiLayoutGrid2Alt className="text-xs text-primary group-hover:text-pure lg:text-base" />
                </div>
                <div className="group hidden h-7 w-7 cursor-pointer items-center justify-center border-2 border-solid border-smoke bg-transparent transition-all duration-100 ease-linear hover:border-transparent hover:bg-primary sm:flex lg:h-9 lg:w-9">
                  <FaList className="text-xs text-primary group-hover:text-pure lg:text-base" />
                </div>
                <div
                  ref={filterRef}
                  onClick={handleToggle}
                  className="group flex h-7 w-7 cursor-pointer items-center justify-center border-2 border-solid border-smoke bg-transparent transition-all duration-100 ease-linear hover:border-transparent hover:bg-primary sm:hidden lg:h-9 lg:w-9"
                >
                  <IoFilterSharp className="text-sm text-primary group-hover:text-pure" />
                </div>
              </Flex>
              <Flex className="flex flex-wrap items-center justify-between gap-y-2 gap-x-1.5 lg:gap-x-10 lg:gap-y-0">
                <Flex className="flex items-center justify-between gap-x-1 lg:gap-x-4">
                  <Label
                    htmlFor="category"
                    className="hidden font-dm text-sm font-normal text-secondary md:block lg:text-base"
                    labelText="Sort by:"
                  />
                  <Select
                    // onChange={}
                    id="category"
                    className="block cursor-pointer border-2 border-smoke bg-transparent py-[2px] px-2 font-dm text-sm font-normal text-secondary focus:border-blue-300 lg:py-[5px] lg:px-5 lg:text-base"
                  >
                    {sortOptions.map((option, index) => (
                      <SelectOption
                        key={index}
                        optionValue={option.optionValue}
                        className="bg-[#999] text-pure"
                        optionText={option.optionText}
                      />
                    ))}
                  </Select>
                </Flex>

                <Flex className="flex items-center justify-between gap-x-1 lg:gap-x-4">
                  <Label
                    htmlFor="show"
                    className="hidden font-dm text-sm font-normal text-secondary md:block lg:text-base"
                    labelText="Show:"
                  />
                  <Select
                    onChange={(e) => setProductShow(+e.target.value)}
                    id="show"
                    className="block cursor-pointer border-2 border-smoke bg-transparent py-[2px] px-2 font-dm text-sm font-normal text-secondary focus:border-blue-300 lg:py-[5px] lg:px-5 lg:text-base"
                  >
                    {showOptions.map((option, index) => (
                      <SelectOption
                        key={index}
                        optionValue={option.optionValue}
                        className="bg-[#999] text-pure"
                        optionText={option.optionText}
                      />
                    ))}
                  </Select>
                </Flex>
              </Flex>
            </Flex>

            <Pagination itemsPerPage={productShow} />
          </div>
        </Flex>
      </Container>
    </div>
  );
};

export default Shop;
