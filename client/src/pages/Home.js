import React from "react";
import Banner from "../components/layout/Banner";
import AdditionalInfo from "../components/layout/AdditionalInfo";
import Advertise from "../components/layout/Advertise";
import NewArrival from "../components/layout/NewArrival";
import BestSeller from "../components/layout/BestSeller";
import MiddleAdvertise from "../components/layout/MiddleAdvertise";
import OfferProducts from "../components/layout/OfferProducts";

const Home = () => {
  return (
    <>
      <Banner />
      <AdditionalInfo />
      <Advertise />
      <NewArrival />
      <BestSeller />
      <MiddleAdvertise />
      <OfferProducts />
    </>
  );
};

export default Home;
