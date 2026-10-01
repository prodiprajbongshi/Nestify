"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaShoppingCart, FaCheck } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const brands = [
  "Aero Edge", "Trail Blaze", "Velocity Vibe", "BeachBliss Surfboards",
  "EcoWave Surfboards", "SunsetGlide Surfboards", "Pixel Playground",
  "Gamer's Haven", "Console Kingdom", "MotorWorks Supply", "DriveLine Depot",
  "AutoTech Solutions", "AeroSole", "Flex Stride", "Zen Footwear",
  "Holiday Haven", "Jolly Junction", "Santa's Emporium", "Aurora Farms",
  "High Haven", "Pure Botanics", "Book Boudoir", "Novel Nectar",
  "Page Paradise", "Enchanted Blooms",
];

const ProductsPage = () => {
  const { addToCart } = useCart();
  const [addedIds, setAddedIds] = useState<number[]>([]);

  const handleAddToCart = (
    e: React.MouseEvent,
    item: (typeof products)[0]
  ) => {
    e.preventDefault(); // prevent Link navigation
    addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      category: item.category,
    });
    setAddedIds((prev) => [...prev, item.id]);
    setTimeout(() => {
      setAddedIds((prev) => prev.filter((id) => id !== item.id));
    }, 1500);
  };

  return (
    <div>
      <div className="container my-8 md:my-16">
        <div className="lg:flex justify-center space-x-8">
          {/* Side Menu */}
          <div className="w-full lg:w-1/4">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-5 lg:h-[70vh] overflow-y-auto">
              {/* Header */}
              <h2 className="text-lg font-semibold mb-4">Filters</h2>

              {/* Brand Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-600 mb-3">
                  Brand
                </h3>
                <div className="space-y-2 max-h-[180px] overflow-y-auto pr-1">
                  {brands.map((brand, index) => (
                    <label
                      key={index}
                      className="flex items-center gap-2 p-2 rounded-lg cursor-pointer hover:bg-gray-100 transition"
                    >
                      <input
                        type="checkbox"
                        className="accent-primary w-4 h-4"
                      />
                      <span className="text-sm text-gray-700">{brand}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Color Filter */}
              <div className="mb-6">
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Color
                </h3>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select color</option>
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

              {/* Price Filter */}
              <div>
                <h3 className="text-sm font-medium text-gray-600 mb-2">
                  Price
                </h3>
                <select className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary">
                  <option>Select price range</option>
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

          {/* Product Cards */}
          <div className="w-full lg:w-3/4 mt-6 lg:mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((item) => {
                const isAdded = addedIds.includes(item.id);
                return (
                  <Link key={item.id} href={`product/${item.id}`}>
                    <div className="group rounded-2xl bg-gradient-to-b from-[#f5f3f1] to-[#e9e3de] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
                      {/* Image Section */}
                      <div className="relative bg-gray-100 h-[240px] flex items-center justify-center overflow-hidden">
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={300}
                          height={300}
                          className="object-contain h-full transition-transform duration-500 group-hover:scale-110"
                        />

                        {/* Floating Cart Button */}
                        <div className="absolute top-3 right-3 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                          <button
                            onClick={(e) => handleAddToCart(e, item)}
                            className={`w-10 h-10 backdrop-blur-md shadow-md border border-gray-200 rounded-full flex items-center justify-center hover:scale-110 transition-all ${
                              isAdded
                                ? "bg-green-500 border-green-500"
                                : "bg-white/80"
                            }`}
                          >
                            {isAdded ? (
                              <FaCheck className="text-white" />
                            ) : (
                              <FaShoppingCart className="text-gray-700 cursor-pointer" />
                            )}
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
                          <button
                            onClick={(e) => handleAddToCart(e, item)}
                            className={`text-sm cursor-pointer px-3 py-1.5 rounded-lg transition-all ${
                              isAdded
                                ? "bg-green-600 text-white"
                                : "bg-black/65 text-white hover:bg-gray-800"
                            }`}
                          >
                            {isAdded ? "✓ Added!" : "Add to Cart"}
                          </button>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
