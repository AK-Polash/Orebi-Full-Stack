import React, { useState } from "react";
import Image from "./Image";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  let [dotActive, setDotActive] = useState(0);

  const settings = {
    dots: true,
    beforeChange: (prev, next) => {
      setDotActive(next);
    },
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
    infinite: true,
    cssEase: "linear",
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div>
        <ul
          style={{
            position: "absolute",
            top: "50%",
            left: "5%",
            transform: "translateY(-50%)",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={
          i === dotActive
            ? {
                width: "22px",
                color: "#262626",
                padding: "12.5px 0",
                borderRight: "2px solid #262626",
                fontFamily: "DM Sans",
                fontSize: "10px",
                cursor: "pointer",
              }
            : {
                width: "22px",
                color: "transparent",
                padding: "12.5px 0",
                borderRight: "2px solid #fff",
                fontFamily: "DM Sans",
                fontSize: "10px",
                cursor: "pointer",
              }
        }
      >
        0{i + 1}
      </div>
    ),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          dots: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          appendDots: (dots) => (
            <div>
              <ul
                style={{
                  position: "absolute",
                  top: "50%",
                  left: "5%",
                  transform: "translateY(-50%)",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === dotActive
                  ? {
                      width: "22px",
                      color: "#262626",
                      borderRight: "2px solid #262626",
                      fontFamily: "DM Sans",
                      fontSize: "10px",
                      cursor: "pointer",
                    }
                  : {
                      width: "22px",
                      color: "transparent",
                      borderRight: "2px solid #fff",
                      fontFamily: "DM Sans",
                      fontSize: "10px",
                      cursor: "pointer",
                    }
              }
            >
              0{i + 1}
            </div>
          ),
        },
      },
    ],
  };

  return (
    <>
      <Slider {...settings}>
        <Link to="#">
          <div className="w-full">
            <Image
              className="block w-full"
              source="assets/banner_one.png"
              alt="banner one"
            />
          </div>
        </Link>
        <Link to="#">
          <div className="w-full">
            <Image
              className="block w-full"
              source="assets/banner_one.png"
              alt="banner two"
            />
          </div>
        </Link>
        <Link to="#">
          <div className="w-full">
            <Image
              className="block w-full"
              source="assets/banner_one.png"
              alt="banner three"
            />
          </div>
        </Link>
      </Slider>
    </>
  );
};

export default Banner;
