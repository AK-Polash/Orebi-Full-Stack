import React from "react";
import { Link } from "react-router-dom";
import Container from "../components/layout/Container";
import Bredcrumb from "../components/layout/Bredcrumb";
import Flex from "../components/layout/Flex";
import Image from "../components/layout/Image";
import AboutInfo from "../components/layout/AboutInfo";

const About = () => {
  return (
    <div className="w-full">
      <Container>
        <Bredcrumb />

        <Flex className="flex items-center gap-x-10">
          <div className="w-2/4">
            <Link to="#">
              <Image
                source="./assets/about_img_1.png"
                className="w-full"
                alt="about_img_1"
              />
            </Link>
          </div>
          <div className="w-2/4">
            <Link to="#">
              <Image
                source="./assets/about_img_2.png"
                className="w-full"
                alt="about_img_2"
              />
            </Link>
          </div>
        </Flex>

        <h4 className="my-14 font-dm text-2xl font-normal text-primary md:text-3xl lg:mt-32 lg:mb-[118px] lg:text-4xl">
          Orebi is one of the world's leading ecommerce brands and is
          internationally recognized for celebrating the essence of classic
          Worldwide cool looking style.
        </h4>

        <Flex className="flex flex-col items-start gap-y-8 gap-x-10 md:flex-row">
          <AboutInfo
            className="w-full md:w-2/6"
            title="Our Vision"
            content="Dream big & stay focus is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
          />
          <AboutInfo
            className="w-full md:w-2/6"
            title="Our Story"
            content="Some of our Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic."
          />
          <AboutInfo
            className="w-full md:w-2/6"
            title="Our Brand"
            content="Our brand is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley."
          />
        </Flex>
      </Container>
    </div>
  );
};

export default About;
