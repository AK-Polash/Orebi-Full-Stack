import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import Image from "./Image";
import { Link } from "react-router-dom";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-36 bg-[#F5F5F3] py-14">
      <Container>
        <Flex className="flex flex-wrap">
          <div className="w-[26%] md:w-[13%] lg:w-[10%]">
            <h4 className="font-dm text-sm font-bold md:text-base lg:mb-4">
              MENU
            </h4>
            <List className="w-full">
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Home"
                href="/"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Shop"
                href="/shop"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="About"
                href="/about"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Contacts"
                href="/contacts"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Journal"
                href="#"
                linkStyle="inline-block"
              />
            </List>
          </div>
          <div className="w-[32%] md:w-[17%] lg:w-[10%]">
            <h4 className="font-dm text-sm font-bold md:text-base lg:mb-4">
              SHOP
            </h4>
            <List className="w-full">
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Category 1"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Category 2"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Category 3"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Category 4"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Category 5"
                href="#"
                linkStyle="inline-block"
              />
            </List>
          </div>
          <div className="w-[42%] md:w-[23%] lg:w-[15%]">
            <h4 className="font-dm text-sm font-bold md:text-base lg:mb-4">
              HELP
            </h4>
            <List className="w-full">
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Privacy Policy"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Terms & Conditions"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Special E-shop"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Shipping"
                href="#"
                linkStyle="inline-block"
              />
              <ListItem
                className="mt-[6px] font-dm text-[13px] font-normal text-valin md:text-sm"
                item="Secure Payments"
                href="#"
                linkStyle="inline-block"
              />
            </List>
          </div>
          <div className="flex w-full py-4 md:w-[37%] md:py-0 lg:w-[30%] lg:justify-center">
            <div>
              <h4 className="font-dm text-sm font-bold md:text-base lg:pb-4">
                <span className="block">(052) 611-5711</span>
                <span>company@domain.com</span>
              </h4>
              <p className="mt-[6px] font-dm text-[12px] font-normal text-valin md:text-sm">
                575 Crescent Ave. Quakertown, PA 18951
              </p>
            </div>
          </div>
          <div className="w-full md:w-[10%] lg:w-[35%] lg:py-0">
            <Image
              className="block w-[60px] md:w-[100px]"
              source="assets/logo__footer.png"
              alt="footer logo"
            />
          </div>
        </Flex>
        <footer className=" flex flex-wrap items-center justify-between pt-[50px]">
          <Flex className="flex w-[92px] justify-between">
            <Link to="#">
              <FaFacebookF />
            </Link>
            <Link to="#">
              <FaLinkedinIn />
            </Link>
            <Link to="#">
              <FaInstagram />
            </Link>
          </Flex>
          <span className="pt-[10px] font-dm text-[12px] font-normal text-valin md:pt-0 md:text-sm">
            2020 Orebi Minimal eCommerce Figma Template by Adveits
          </span>
        </footer>
      </Container>
    </div>
  );
};

export default Footer;
