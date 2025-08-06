import React from "react";
import brand1 from "../assets/brand1.png";
import brand2 from "../assets/brand2.png";
import brand3 from "../assets/brand3.png";
import brand4 from "../assets/brand4.png";
import brand5 from "../assets/brand5.png";
import brand6 from "../assets/brand6.png";
import brand7 from "../assets/brand7.png";
import brand8 from "../assets/brand8.png";
import brand9 from "../assets/brand9.png";
import brand10 from "../assets/brand10.png";
import brand11 from "../assets/brand11.png";
import brand12 from "../assets/brand12.png";
import brand13 from "../assets/brand13.png";
import brand14 from "../assets/brand14.png";
import brand from "../assets/brand.png";
import google from "../assets/google.png";
import ios from "../assets/ios.png";

const brands = [
  { id: 1, src: brand1, alt: "Nike Logo" },
  { id: 2, src: brand2, alt: "Adidas Logo" },
  { id: 3, src: brand3, alt: "Puma Logo" },
  { id: 4, src: brand4, alt: "Reebok Logo" },
  { id: 5, src: brand5, alt: "Under Armour Logo" },
  { id: 6, src: brand6, alt: "New Balance Logo" },
  { id: 7, src: brand7, alt: "Asics Logo" },
  { id: 8, src: brand8, alt: "Saucony Logo" },
  { id: 9, src: brand9, alt: "Hoka One One Logo" },
  { id: 10, src: brand10, alt: "Brooks Logo" },
  { id: 11, src: brand11, alt: "Mizuno Logo" },
  { id: 12, src: brand12, alt: "On Running Logo" },
  { id: 13, src: brand13, alt: "Altra Logo" },
  { id: 14, src: brand14, alt: "Vasque Logo" },
  { id: 15, src: brand, alt: "Generic Brand Logo" },
];

const Brands = ({ animationDuration = 10 }) => {
  // Duplicate the brands array for seamless looping
  const duplicatedBrands = [...brands, ...brands];

  return (
    <div className="w-full bg-white py-8">
      <div className="mx-auto max-w-[1200px] px-4 md:px-8">
        {/* Title */}
        <h2 className="text-3xl font-semibold text-center text-black mb-6">
          Top Brands
        </h2>

        {/* Slider Container */}
        <div className="overflow-hidden">
          <div
            className="flex"
            style={{
              animation: `slide ${animationDuration}s linear infinite`,
            }}
          >
            {duplicatedBrands.map((brand, index) => (
              <div
                key={`${brand.id}-${index}`}
                className="flex-shrink-0 w-40 h-20 mx-4"
              >
                <img
                  src={brand.src}
                  alt={brand.alt}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center flex-wrap items-center space-x-8">
          <img
            src={google}
            alt="Google Logo"
            className="w-40 h-20 cursor-pointer"
          />
          <img src={ios} alt="iOS Logo" className="w-40 h-20 cursor-pointer" />
        </div>
      </div>

      {/* CSS for Infinite Sliding Animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </div>
  );
};

export default Brands;
