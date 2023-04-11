import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Dropdown from "./Dropdown";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Search from "./Search";
import Image from "./Image";
import { RiBarChartHorizontalLine } from "react-icons/ri";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import { RxTriangleDown } from "react-icons/rx";
import { ImCross } from "react-icons/im";

const Header = () => {
  let [categoryDropdownShow, setCategoryDropdownShow] = useState(false);
  let [userDropdownShow, setUserDropdownShow] = useState(false);
  let [cartDropdownShow, setCartDropdownShow] = useState(false);
  let categoryRef = useRef();
  let userRef = useRef();
  let cartRef = useRef();

  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (categoryRef.current.contains(e.target)) {
        setCategoryDropdownShow(true);
      } else {
        setCategoryDropdownShow(false);
      }

      if (userRef.current.contains(e.target)) {
        setUserDropdownShow(true);
      } else {
        setUserDropdownShow(false);
      }

      if (cartRef.current.contains(e.target)) {
        setCartDropdownShow(true);
      } else {
        setCartDropdownShow(false);
      }
    });
  }, []);

  return (
    <>
      <div className="w-full bg-flat py-0 lg:py-1 2xl:py-1.5">
        <Container>
          <Flex className="flex items-center justify-between gap-x-[10px]">
            <Dropdown className="relative" dropRef={categoryRef}>
              <div className="flex cursor-pointer items-center justify-between gap-x-2">
                <RiBarChartHorizontalLine />
                <span className="hidden font-dm text-sm font-normal text-primary lg:inline-block">
                  Shop by Category
                </span>
              </div>

              {categoryDropdownShow && (
                <List className="absolute top-9 z-20 w-[263px] bg-primary">
                  <ListItem
                    className="border-b-[1px] border-rare font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                    item="Accesories"
                    href="#"
                    linkStyle="px-5 py-3.5 block"
                  />
                  <ListItem
                    className="border-b-[1px] border-rare font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                    item="Furniture"
                    href="#"
                    linkStyle="px-5 py-3.5 block"
                  />
                  <ListItem
                    className="border-b-[1px] border-rare font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                    item="Electronics"
                    href="#"
                    linkStyle="px-5 py-3.5 block"
                  />
                  <ListItem
                    className="border-b-[1px] border-rare font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                    item="Clothes"
                    href="#"
                    linkStyle="px-5 py-3.5 block"
                  />
                  <ListItem
                    className="border-b-[1px] border-rare font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                    item="Bags"
                    href="#"
                    linkStyle="px-5 py-3.5 block"
                  />
                  <ListItem
                    className="border-b-[1px] border-rare font-dm text-sm font-normal text-fade transition-all duration-150 ease-linear hover:pl-7 hover:font-bold hover:text-pure"
                    item="Home appliances"
                    href="#"
                    linkStyle="px-5 py-3.5 block"
                  />
                </List>
              )}
            </Dropdown>

            <div className="relative w-[601px]">
              <Search
                className="w-full py-2 px-3 font-dm text-sm font-normal text-secondary outline-none placeholder:text-dope lg:py-[12px] lg:px-[21px]"
                placeholder="Search Product"
              />

              <FaSearch className="absolute top-[50%] right-[21px] -translate-y-2/4" />
            </div>

            <Flex className="flex items-center justify-between gap-x-2 lg:gap-x-4 2xl:gap-x-10">
              <Dropdown className="relative" dropRef={userRef}>
                <div className="flex cursor-pointer items-center justify-between gap-x-0 lg:gap-x-1">
                  <FaUserAlt className="w-[13px]" />
                  <RxTriangleDown />
                </div>

                {userDropdownShow && (
                  <List className="absolute top-9 right-0 z-10 w-[200px] bg-pure">
                    <ListItem
                      className="cursor-pointer border-x-[1px] border-t border-b border-smoke text-center font-dm text-sm font-normal text-primary transition-all duration-150 ease-linear hover:border-transparent hover:bg-caret hover:font-bold hover:text-pure"
                      item="My Account"
                      href="#"
                      linkStyle="py-[14px] px-[58px] block"
                    />
                    <ListItem
                      className="cursor-pointer border-x-[1px] border-b border-smoke text-center font-dm text-sm font-normal text-primary transition-all duration-150 ease-linear hover:border-transparent hover:bg-caret hover:font-bold hover:text-pure"
                      item="Log Out"
                      href="#"
                      linkStyle="py-[14px] px-[58px] block"
                    />
                  </List>
                )}
              </Dropdown>

              <Dropdown className="relative" dropRef={cartRef}>
                <FaShoppingCart className="w-[17px] cursor-pointer" />

                {cartDropdownShow && (
                  <div className="absolute top-9 right-0 z-10 w-[360px] border border-solid border-smoke">
                    <Flex className="flex items-center justify-between bg-flat p-5">
                      <Flex className="flex items-center gap-x-5">
                        <Image
                          className="h-20 w-20"
                          source="./assets/cart_image.png"
                          alt="cartImg"
                        />
                        <div className=" font-dm text-sm font-bold ">
                          <p className="pb-3"> Black Smart Watch </p>
                          <p> $44.00 </p>
                        </div>
                      </Flex>
                      <ImCross className="h-3 w-3 cursor-pointer" />
                    </Flex>

                    <div className="bg-pure pt-[14px] pb-5 pr-5 pl-5">
                      <div className="pb-3 font-dm text-base">
                        <span className="font-normal text-secondary">
                          Subtotal:
                        </span>
                        <span className="pl-1 font-bold text-primary">
                          $44.00
                        </span>
                      </div>
                      <Flex className="flex items-center justify-between gap-x-5">
                        <Link
                          to="#"
                          className="border-[1.5px] border-caret bg-pure px-10 py-[14px] font-dm text-sm font-bold text-primary"
                        >
                          View Cart
                        </Link>
                        <Link
                          to="#"
                          className="border-[1.5px] border-transparent bg-primary px-10 py-[14px] font-dm text-sm font-bold text-pure"
                        >
                          Checkout
                        </Link>
                      </Flex>
                    </div>
                  </div>
                )}
              </Dropdown>
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Header;
