import React, { useState, useEffect, useMemo } from "react";
import heroBg1 from "../assets/banner.png";
import heroBg2 from "../assets/banner1.png";
import heroBg3 from "../assets/banner2.png";

const Hero = () => {
  const images = useMemo(() => [heroBg1, heroBg2, heroBg3], []);
  const [currentImage, setCurrentImage] = useState(0);
  const [direction, setDirection] = useState(1);
  const totalImages = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => {
        if (prev === totalImages - 1 && direction === 1) {
          setDirection(-1);
          return prev - 1;
        } else if (prev === 0 && direction === -1) {
          setDirection(1);
          return prev + 1;
        } else {
          return prev + direction;
        }
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [direction, totalImages]);

  // Preload images to prevent loading issues
  useEffect(() => {
    images.forEach((image) => {
      const img = new Image();
      img.src = image;
    });
  }, [images]);

  // Duplicate images for seamless looping
  const extendedImages = [...images, ...images];

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Slider Container */}
      <div
        className="absolute inset-0 flex"
        style={{
          transform: `translateX(-${
            (currentImage * 100) / (totalImages * 2)
          }%)`,
          width: `${extendedImages.length * 100}%`,
          transition: "transform 700ms ease-in-out",
        }}
      >
        {extendedImages.map((image, index) => (
          <div
            key={index}
            className="w-full h-full bg-center bg-no-repeat bg-cover"
            style={{
              backgroundImage: `url(${image})`,
              flex: `0 0 ${100 / extendedImages.length}%`,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
