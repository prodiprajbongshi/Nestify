import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaShoppingCart } from "react-icons/fa";

const page = () => {
  const brands = [
    "Aero Edge",
    "Trail Blaze",
    "Velocity Vibe",
    "BeachBliss Surfboards",
    "EcoWave Surfboards",
    "SunsetGlide Surfboards",
    "Pixel Playground",
    "Gamer's Haven",
    "Console Kingdom",
    "MotorWorks Supply",
    "DriveLine Depot",
    "AutoTech Solutions",
    "AeroSole",
    "Flex Stride",
    "Zen Footwear",
    "Holiday Haven",
    "Jolly Junction",
    "Santa's Emporium",
    "Aurora Farms",
    "High Haven",
    "Pure Botanics",
    "Book Boudoir",
    "Novel Nectar",
    "Page Paradise",
    "Enchanted Blooms",
  ];

  const products = [
    {
      id: 1,
      name: "Aero Edge Running Shoes",
      description: "Lightweight, durable running shoes for daily workouts.",
      price: 120,
      category: "Footwear",
      image: "/products/furniture_01.png",
    },
    {
      id: 2,
      name: "Velocity Vibe Mountain Bike",
      description: "High-performance mountain bike for off-road enthusiasts.",
      price: 850,
      category: "Outdoor",
      image: "/products/furniture_02.png",
    },
    {
      id: 3,
      name: "Pixel Playground Gaming Laptop",
      description:
        "Ultra-fast gaming laptop with high-refresh screen and RTX GPU.",
      price: 1600,
      category: "Electronics",
      image: "/products/furniture_03.png",
    },
    {
      id: 4,
      name: "BeachBliss Surfboard",
      description: "Perfect surfboard for both beginners and pros alike.",
      price: 450,
      category: "Sports",
      image: "/products/furniture_04.png",
    },
    {
      id: 5,
      name: "Enchanted Mist Perfume",
      description: "Long-lasting floral fragrance with soft undertones.",
      price: 75,
      category: "Beauty",
      image: "/products/furniture_05.png",
    },
    {
      id: 6,
      name: "Gadget Galaxy Smartwatch",
      description: "Fitness tracking, calls, and notifications on your wrist.",
      price: 199,
      category: "Electronics",
      image: "/products/furniture_06.png",
    },
    {
      id: 7,
      name: "Home Town Sofa Set",
      description: "Modern, comfortable 3-piece living room sofa set.",
      price: 950,
      category: "Furniture",
      image: "/products/furniture_07.png",
    },
    {
      id: 8,
      name: "ProActive Nutrition Whey Protein",
      description: "High-quality protein powder for muscle recovery.",
      price: 60,
      category: "Health",
      image: "/products/furniture_08.png",
    },
    {
      id: 9,
      name: "Watch Maven Chronograph",
      description: "Stylish chronograph wristwatch with leather strap.",
      price: 310,
      category: "Accessories",
      image: "/products/furniture_09.png",
    },
  ];

  return (
    <div>
      <div className="container my-8 md:my-16">
        <div className="lg:flex justify-center space-x-8">
          {/* side MENU  */}
          <div className="w-full lg:w-1/4 bg-neutral/50 p-2.5 md:py-10 md:px-4 lg:h-[60vh]">
            {/* brand option  */}
            <div className="">
              <div className="border-b-1 border-gray-300">
                <h1 className="text-xl pb-1">Filters</h1>
              </div>
              {/* brands name option  */}
              <div className="py-4  ">
                <h1 className="text-xl pb-1">Brand</h1>
                <div className="border border-gray-300 h-[180px] overflow-y-scroll">
                  {brands.map((brand, index) => (
                    <div
                      key={index}
                      className="p-2 hover:bg-primary transition-all duration-300 cursor-pointer"
                    >
                      <input type="checkbox" className="me-2" />
                      {brand}
                    </div>
                  ))}
                </div>
              </div>
              {/* Colour option  */}
              <div className="py-2">
                <h1 className="text-xl pb-1">Colors</h1>
                <select
                  className="w-full outline-1 py-1 outline-gray-300"
                  name="colors"
                  id=""
                >
                  <option>Burgundy</option>
                  <option>Brown</option>
                  <option>White</option>
                  <option>Grey</option>
                  <option>Pink</option>
                  <option>Purple</option>
                  <option>Blue</option>
                  <option>Green</option>
                  <option>Beige</option>
                  <option>Black</option>
                </select>
              </div>
              {/* Price option  */}
              <div className="py-2">
                <h1 className="text-xl pb-1">Prices</h1>
                <select
                  className="w-full outline-1 py-1 outline-gray-300"
                  name="prices"
                  id=""
                >
                  <option>Below $100</option>
                  <option>$100 - $200</option>
                  <option>$200 - $400</option>
                  <option>$400 - $600</option>
                  <option>$600 - $800</option>
                  <option>$800 - $1000</option>
                  <option>Above $1000</option>
                </select>
              </div>
            </div>
          </div>
          {/* product cards  */}

          <div className="w-full lg:w-3/4 mt-6 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item) => (
                <Link key={item.id} href="#">
                  <div className="group rounded-2xl bg-gradient-to-b from-[#f5f3f1] to-[#e9e3de] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                    {/* Image Section */}
                    <div className="relative bg-gray-100 h-[240px] flex items-center justify-center overflow-hidden">
                      <Image
                        src={item.image}
                        alt="Product Image"
                        width={300}
                        height={300}
                        className="object-contain h-full transition-transform duration-500 group-hover:scale-110"
                      />

                      {/* Floating Cart Button */}
                      <div className="absolute top-3 right-3 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                        <button className="w-10 h-10 bg-white/80 backdrop-blur-md shadow-md border border-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition">
                          <FaShoppingCart className="text-gray-700" />
                        </button>
                      </div>

                      {/* Category Badge */}
                      <span className="absolute left-3 top-3 bg-black text-white text-xs px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="p-5 space-y-3">
                      <h2 className="text-sm text-gray-500 uppercase tracking-wide">
                        {item.category}
                      </h2>

                      <h3 className="text-base font-semibold text-gray-800 line-clamp-2 group-hover:text-black transition">
                        {item.name}
                      </h3>

                      <p className="text-sm text-gray-500 line-clamp-2">
                        {item.description}
                      </p>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-lg font-bold text-primary">
                          ${item.price}
                        </span>

                        <button className="text-sm px-3 py-1.5 bg-black/65 text-white rounded-lg hover:bg-gray-800 transition">
                          Purchase
                        </button>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
