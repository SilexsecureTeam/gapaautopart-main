import React from "react";
import Notification from "../Components/Notification";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import Brands from "../Components/Brands";
import Footer from "../Components/Footer";
import Find from "../Components/Find";
import ProductSection from "../Components/ProductSection";
import { TopProduct, InterestedProduct } from "../Data/ProductData";

const Home = () => {
  return (
    <div>
      <Notification />
      <Header />
      <Hero />
      <Find />
      <ProductSection title="Our Top Products" products={TopProduct} />
      <ProductSection
        title="Products You Would Be Interested In"
        products={InterestedProduct}
      />
      <Brands animationDuration={10} />
      <Footer />
    </div>
  );
};

export default Home;
