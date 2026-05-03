 

import React from "react";
import HeroArea from "@/component/home/HeroArea";
import TopProduct from "@/component/home/TopProduct";
import SpecialProducts from "@/component/home/SpecialProducts";
import ShowCase from "@/component/home/ShowCase";
import Clients from "@/component/home/Clients";
import Review from "@/component/home/Review";
import Blog from "@/component/home/Blog";

const Home = () => {
  return (
    <div>
      <HeroArea />
      <TopProduct />
      <SpecialProducts />
      <ShowCase />
      <Blog />
      <Clients />
      <Review /> 
    </div>
  );
};

export default Home;
