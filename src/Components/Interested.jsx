import React from "react";
import { InterestedProduct } from "../Data/ProductData";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ArrowLeft = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow z-10 p-2 hover:bg-gray-100"
  >
    <ChevronLeft className="w-5 h-5 text-gray-700" />
  </button>
);

const ArrowRight = ({ onClick }) => (
  <button
    onClick={onClick}
    className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white border border-gray-300 rounded-full shadow z-10 p-2 hover:bg-gray-100"
  >
    <ChevronRight className="w-5 h-5 text-gray-700" />
  </button>
);

const Interested = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <ArrowRight />,
    prevArrow: <ArrowLeft />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="py-8 relative">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-800">
          Products You Would Be Interested In
        </h2>
        <div className="relative">
          <Slider {...settings}>
            {InterestedProduct.map((product) => (
              <div key={product.id} className="px-2">
                <ProductCard product={product} />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Interested;
