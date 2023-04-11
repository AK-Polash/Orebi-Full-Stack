import React from "react";
import Container from "./Container";
import Flex from "./Flex";
import { RiNumber2 } from "react-icons/ri";
import { FaCaravan } from "react-icons/fa";
import { RxReload } from "react-icons/rx";

const AdditionalInfo = () => {
  return (
    <div className="mt-[-6px] border-t-[1px] border-b-[1px] border-solid border-smoke lg:border-t-2 lg:border-b-2">
      <Container>
        <Flex className="flex items-center justify-between gap-x-3 lg:py-4 2xl:py-7">
          <Flex className="flex flex-col items-center justify-between gap-y-1 text-center lg:flex-row lg:gap-x-4 ">
            <RiNumber2 className="text-xs lg:text-2xl" />
            <p className="font-dm text-[10px] font-normal text-valin lg:text-base">
              Two years warranty
            </p>
          </Flex>
          <Flex className="flex flex-col items-center justify-between gap-y-1 text-center lg:flex-row lg:gap-x-4 ">
            <FaCaravan className="text-xs lg:text-2xl" />
            <p className="font-dm text-[10px] font-normal text-valin lg:text-base">
              Free shipping
            </p>
          </Flex>
          <Flex className="flex flex-col items-center justify-between gap-y-1 text-center lg:flex-row lg:gap-x-4 ">
            <RxReload className="text-xs lg:text-2xl" />
            <p className="font-dm text-[10px] font-normal text-valin lg:text-base">
              Return policy in 30 days
            </p>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default AdditionalInfo;
