import React from "react";
import Container from "./Container";
import Image from "./Image";
import { Link } from "react-router-dom";

const MiddleAdvertise = () => {
  return (
    <div className="py-5 lg:py-8 xl:py-24 2xl:py-32">
      <Container>
        <Link to="#">
          <Image
            className="block w-full"
            source="./assets/middleAd.png"
            alt="middle advertise img"
          />
        </Link>
      </Container>
    </div>
  );
};

export default MiddleAdvertise;
