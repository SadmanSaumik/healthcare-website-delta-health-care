import React from "react";
import Services from "../Services/Services";
import Banner from "./Banner/Banner";
import Count from "./Count/Count";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <Services></Services>
      <WhyChooseUs></WhyChooseUs>
      <Count></Count>
    </div>
  );
};

export default Home;
