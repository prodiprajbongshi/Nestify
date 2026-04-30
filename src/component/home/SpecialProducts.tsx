import React from "react";
import ProductCard from "./ProductCard";

const SpecialProducts = () => {
  const images = [
    {
      id: 1,
      img: "/home/furniture_one_6.png",
      price: 25,
      offerPrice : 20,
      title : "Glamour Gaze",
    },
    {
      id: 2,
      img: "/home/furniture_one_7.png",
      price: 35,
      offerPrice : 30,
      title : "LuxeLiving",
    },
    {
      id: 3,
      img: "/home/furniture_one_8.png",
      price: 45,
      offerPrice : 40,
      title : "Eldora TV Console",
    },
 
  ];

  return (
    <div className="py-10 lg:py-16 md:my-16">
      <div className="container mx-auto px-4">  
        <div className="text-center">
          <h3 className="text-primary text-md md:text-xl opacity-70">
            Exclusive Products
          </h3>
          <h2 className="text-extraDark text-xl md:text-4xl font-bold my-2 relative before:w-16 before:h-1.5 before:bg-primary before:absolute before:left-[50%] before:translate-x-[-50%] before:top-8 md:before:top-12">
            SPECIAL PRODUCTS
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-12 md:mt-16">
          {images.map((item) => (
            <ProductCard key={item.id} {...item}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SpecialProducts;
