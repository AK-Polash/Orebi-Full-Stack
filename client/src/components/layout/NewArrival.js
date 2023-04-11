import React, { useState } from "react";
import {
  HiOutlineArrowNarrowLeft,
  HiOutlineArrowNarrowRight,
} from "react-icons/hi";
import Container from "./Container";
import Heading from "./Heading";
import Product from "./Product";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const NewArrival = () => {
  function SampleNextArrow(props) {
    const { className, style, onClick, width, height } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: width,
          height: height,
          borderRadius: "50%",
          background: "#c7c7c7",
          cursor: "pointer",
          position: "absolute",
          top: "50%",
          right: "0",
          transform: "translateY(-50%)",
          zIndex: "5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <HiOutlineArrowNarrowRight className="text-2xl font-bold text-pure" />
      </div>
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick, width, height } = props;
    return (
      <div
        className={className}
        style={{
          ...style,
          width: width,
          height: height,
          borderRadius: "50%",
          background: "#c7c7c7",
          cursor: "pointer",
          position: "absolute",
          top: "50%",
          left: "0",
          transform: "translateY(-50%)",
          zIndex: "5",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={onClick}
      >
        <HiOutlineArrowNarrowLeft className="text-2xl font-bold text-pure" />
      </div>
    );
  }

  let [arrivalActiveDot, setArrivalActiveDot] = useState(0);

  const settings = {
    arrows: true,
    dots: false,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow width="67px" height="67px" />,
    prevArrow: <SamplePrevArrow width="67px" height="67px" />,
    responsive: [
      {
        breakpoint: 1281,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          speed: 500,
          nextArrow: <SampleNextArrow width="50px" height="50px" />,
          prevArrow: <SamplePrevArrow width="50px" height="50px" />,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
          autoplay: true,
          speed: 500,
          nextArrow: <SampleNextArrow width="40px" height="40px" />,
          prevArrow: <SamplePrevArrow width="40px" height="40px" />,
        },
      },
      {
        breakpoint: 769,
        settings: {
          arrows: false,
          dots: true,
          beforeChange: (prev, next) => {
            setArrivalActiveDot(next);
          },
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          autoplay: true,
          speed: 500,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  display: "flex",
                  justifyContent: "center",
                  columnGap: "6px",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === arrivalActiveDot
                  ? {
                      width: "33px",
                      height: "10px",
                      background: "#222",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "all linear 0.17s",
                    }
                  : {
                      width: "10px",
                      height: "10px",
                      background: "#999",
                      borderRadius: "50%",
                      cursor: "pointer",
                      transition: "all linear 0.17s",
                    }
              }
            ></div>
          ),
        },
      },
      {
        breakpoint: 600,
        settings: {
          arrows: false,
          dots: true,
          beforeChange: (prev, next) => {
            setArrivalActiveDot(next);
          },
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          autoplay: true,
          speed: 500,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  display: "flex",
                  justifyContent: "center",
                  columnGap: "6px",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === arrivalActiveDot
                  ? {
                      width: "33px",
                      height: "10px",
                      background: "#222",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "all linear 0.17s",
                    }
                  : {
                      width: "10px",
                      height: "10px",
                      background: "#999",
                      borderRadius: "50%",
                      cursor: "pointer",
                      transition: "all linear 0.17s",
                    }
              }
            ></div>
          ),
        },
      },
      {
        breakpoint: 401,
        settings: {
          arrows: false,
          dots: true,
          beforeChange: (prev, next) => {
            setArrivalActiveDot(next);
          },
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          speed: 500,
          appendDots: (dots) => (
            <div
              style={{
                backgroundColor: "transparent",
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
              }}
            >
              <ul
                style={{
                  margin: "0px",
                  display: "flex",
                  justifyContent: "center",
                  columnGap: "6px",
                }}
              >
                {dots}
              </ul>
            </div>
          ),
          customPaging: (i) => (
            <div
              style={
                i === arrivalActiveDot
                  ? {
                      width: "33px",
                      height: "10px",
                      background: "#222",
                      borderRadius: "10px",
                      cursor: "pointer",
                      transition: "all linear 0.17s",
                    }
                  : {
                      width: "10px",
                      height: "10px",
                      background: "#999",
                      borderRadius: "50%",
                      cursor: "pointer",
                      transition: "all linear 0.17s",
                    }
              }
            ></div>
          ),
        },
      },
    ],
  };

  return (
    <div className="w-full md:pt-6 xl:pt-14 2xl:pt-32">
      <Container>
        <Heading
          className="pb-2 font-dm text-xl font-bold capitalize text-primary md:pb-6 md:text-2xl xl:pb-9 xl:text-[39px] 2xl:pb-12"
          title="new arrival"
        />

        <Slider
          {...settings}
          className="realtive w-full overflow-hidden pb-3 md:pb-4 lg:pb-0"
        >
          <Product
            className="mx-auto px-3 sm:max-xl:mb-5 sm:max-md:max-w-[200px] md:px-5 md:max-xl:max-w-[230px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n1.png"
            alt="new_arrival_1"
            badgeShow={true}
            badgeTitle="New"
            productTitle="Basic Table Watch"
            productPrice="$44.00"
            productColor="Black"
          />

          <Product
            className="mx-auto px-3 sm:max-xl:mb-5 sm:max-md:max-w-[200px] md:px-5 md:max-xl:max-w-[230px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n2.png"
            alt="new_arrival_2"
            badgeShow={false}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$89.00"
            productColor="Green"
          />

          <Product
            className="mx-auto px-3 sm:max-xl:mb-5 sm:max-md:max-w-[200px] md:px-5 md:max-xl:max-w-[230px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n3.png"
            alt="new_arrival_3"
            badgeShow={true}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$54.00"
            productColor="Blue"
          />

          <Product
            className="mx-auto px-3 sm:max-xl:mb-5 sm:max-md:max-w-[200px] md:px-5 md:max-xl:max-w-[230px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n4.png"
            alt="new_arrival_4"
            badgeShow={false}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$85.00"
            productColor="Purple"
          />

          <Product
            className="mx-auto px-3 sm:max-xl:mb-5 sm:max-md:max-w-[200px] md:px-5 md:max-xl:max-w-[230px] 2xl:max-w-[370px]"
            imgClass="w-full"
            src="assets/n3.png"
            alt="new_arrival_3"
            badgeShow={false}
            badgeTitle="New"
            productTitle="Basic Crew Neck Tee"
            productPrice="$54.00"
            productColor="Blue"
          />
        </Slider>
      </Container>
    </div>
  );
};

export default NewArrival;
