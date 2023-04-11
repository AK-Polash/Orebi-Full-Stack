import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";
import Flex from "./Flex";

const BestSeller = () => {
  return (
    <>
      <div className="w-full md:pt-6 xl:pt-14 2xl:pt-32">
        <Container>
          <Heading
            className="pb-2 font-dm text-xl font-bold capitalize text-primary md:pb-6 md:text-2xl xl:pb-9 xl:text-[39px] 2xl:pb-12"
            title="our bestseller"
          />

          <Flex className="realtive flex w-full flex-wrap items-center justify-between gap-x-10 lg:flex-nowrap">
            <Product
              className="sm:max-xl:mb-5 sm:max-md:max-w-[180px] md:max-xl:max-w-[215px] 2xl:max-w-[370px]"
              imgClass="w-full"
              src="assets/bs1.png"
              alt="best_seller_1"
              badgeShow={true}
              badgeTitle="New"
              productTitle="Basic Table Watch"
              productPrice="$44.00"
              productColor="Black"
            />

            <Product
              className="sm:max-xl:mb-5 sm:max-md:max-w-[180px] md:max-xl:max-w-[215px] 2xl:max-w-[370px]"
              imgClass="w-full"
              src="assets/bs2.png"
              alt="best_seller_2"
              badgeShow={true}
              badgeTitle="New"
              productTitle="Basic Crew Neck Tee"
              productPrice="$89.00"
              productColor="Green"
            />

            <Product
              className="sm:max-xl:mb-5 sm:max-md:max-w-[180px] md:max-xl:max-w-[215px] 2xl:max-w-[370px]"
              imgClass="w-full"
              src="assets/bs3.png"
              alt="best_seller_3"
              badgeShow={true}
              badgeTitle="New"
              productTitle="Basic Crew Neck Tee"
              productPrice="$54.00"
              productColor="Blue"
            />

            <Product
              className="sm:max-xl:mb-5 sm:max-md:max-w-[180px] md:max-xl:max-w-[215px] 2xl:max-w-[370px]"
              imgClass="w-full"
              src="assets/bs4.png"
              alt="best_seller_4"
              badgeShow={false}
              badgeTitle="New"
              productTitle="Basic Crew Neck Tee"
              productPrice="$85.00"
              productColor="Purple"
            />
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default BestSeller;
