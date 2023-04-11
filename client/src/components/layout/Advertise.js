import React from "react";
import { Link } from "react-router-dom";
import Container from "./Container";
import Flex from "./Flex";
import Image from "./Image";

const Advertise = () => {
  return (
    <>
      <div className="mt-3 md:mt-7 lg:mt-12 xl:mt-20 2xl:mt-[140px]">
        <Container>
          <Flex className="flex w-full items-center justify-center gap-x-2 lg:gap-x-3 xl:gap-x-6 2xl:gap-x-10">
            <div className="max-w-2/4 h-full">
              <Link to="#">
                <Image
                  className="block w-full md:w-[320px] lg:w-[400px] xl:w-[500px] 2xl:w-full"
                  source="./assets/Ad_1.png"
                  alt="advertise img one"
                />
              </Link>
            </div>
            <Flex className="max-w-2/4 flex h-full flex-col justify-between gap-y-2 lg:gap-y-3 xl:gap-y-6 2xl:gap-y-10">
              <Link to="#">
                <Image
                  className="block w-full md:w-[320px] lg:w-[400px] xl:w-[500px] 2xl:w-full"
                  source="./assets/Ad_2.png"
                  alt="advertise img two"
                />
              </Link>
              <Link to="#">
                <Image
                  className="block w-full md:w-[320px] lg:w-[400px] xl:w-[500px] 2xl:w-full"
                  source="./assets/Ad_3.png"
                  alt="advertise img three"
                />
              </Link>
            </Flex>
          </Flex>
        </Container>
      </div>
    </>
  );
};

export default Advertise;
