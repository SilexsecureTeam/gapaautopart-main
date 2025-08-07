import React from "react";
import Notification from "../Components/Notification";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import Find from "../Components/Find";
import ProductSection from "../Components/ProductSection";
import { TopProduct } from "../Data/ProductData";
import Interested from "../Components/Interested";

const Home = () => {
  return (
    <div>
      <Notification />
      <Header />
      <Hero />
      <Find />
      <ProductSection title="Our Top Products" products={TopProduct} />
      <Interested />
      <Brands animationDuration={10} />
      <Footer />
    </div>
  );
};

export default Home;
