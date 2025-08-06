import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ title, products }) => {
  return (
    <div className="max-w-[1240px] mx-auto py-6 px-4 ">
      <h2 className="text-3xl text-center font-semibold mb-4">{title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductSection;
