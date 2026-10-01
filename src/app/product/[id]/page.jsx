"use client";

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart, FaBolt, FaStar, FaRegStar, FaArrowLeft } from "react-icons/fa";
import { useCart } from "@/context/CartContext";
import { products } from "@/data/products";

const Page = ({ params }) => {
  const { id } = params;
  const { addToCart, cartItems } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="container max-w-6xl mx-auto py-24 text-center">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Product not found</h1>
        <p className="text-gray-500 mb-8">The product you are looking for does not exist.</p>
        <Link
          href="/product"
          className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-medium hover:opacity-90 transition"
        >
          <FaArrowLeft /> Back to Products
        </Link>
      </div>
    );
  }

  const cartItem = cartItems.find((i) => i.id === product.id);
  const alreadyInCart = !!cartItem;

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        category: product.category,
      });
    }
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div className="container max-w-6xl mx-auto py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-500 mb-8">
        <Link href="/" className="hover:text-primary transition">Home</Link>
        <span>/</span>
        <Link href="/product" className="hover:text-primary transition">Products</Link>
        <span>/</span>
        <span className="text-gray-800 font-medium">{product.name}</span>
      </nav>

      <div className="grid md:grid-cols-2 gap-10 bg-white rounded-2xl shadow-md overflow-hidden">
        {/* Product Image */}
        <div className="relative bg-gradient-to-b from-[#f5f3f1] to-[#e9e3de] flex items-center justify-center p-10 min-h-[420px]">
          <span className="absolute top-4 left-4 bg-black text-white text-xs px-3 py-1 rounded-full z-10">
            {product.category}
          </span>
          <Image
            src={product.image}
            alt={product.name}
            width={400}
            height={400}
            className="object-contain max-h-[360px] transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Product Info */}
        <div className="p-8 flex flex-col justify-center">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-2">
            {product.category}
          </p>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>

          {/* Rating */}
          <div className="flex items-center gap-1 mb-4">
            {[...Array(5)].map((_, i) =>
              i < 4 ? (
                <FaStar key={i} className="text-yellow-400 w-4 h-4" />
              ) : (
                <FaRegStar key={i} className="text-yellow-400 w-4 h-4" />
              )
            )}
            <span className="text-sm text-gray-500 ml-2">(4.0 · 128 reviews)</span>
          </div>

          <p className="text-4xl font-bold text-primary mb-2">${product.price}</p>
          <p className="text-sm text-green-600 font-medium mb-6">✓ In Stock — Free shipping over $500</p>

          <p className="text-gray-600 leading-relaxed mb-8">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex items-center gap-4 mb-8">
            <span className="text-sm font-medium text-gray-700">Qty:</span>
            <div className="flex items-center border border-gray-300 rounded-xl overflow-hidden">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition text-lg font-bold cursor-pointer"
              >
                −
              </button>
              <span className="w-10 text-center font-semibold text-gray-800">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition text-lg font-bold cursor-pointer"
              >
                +
              </button>
            </div>
            {alreadyInCart && (
              <span className="text-xs text-gray-400">
                ({cartItem.quantity} already in cart)
              </span>
            )}
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap">
            <button
              onClick={handleAddToCart}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 cursor-pointer ${
                added
                  ? "bg-green-600 text-white scale-95"
                  : "bg-primary text-white hover:opacity-90"
              }`}
            >
              <FaShoppingCart />
              {added ? "✓ Added to Cart!" : "Add to Cart"}
            </button>

            <Link
              href="/cart"
              className="flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm border border-gray-300 text-gray-700 hover:border-primary hover:text-primary transition"
            >
              <FaBolt />
              View Cart
            </Link>
          </div>
        </div>
      </div>

      {/* Product Details Section */}
      <div className="mt-12 bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Product Details</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ul className="space-y-3">
            {[
              "High quality premium material",
              "1 year manufacturer warranty",
              "Fast & reliable delivery",
              "30-day hassle-free return policy",
              "Eco-friendly packaging",
            ].map((detail, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="w-5 h-5 rounded-full bg-primary/20 text-primary flex items-center justify-center text-xs font-bold flex-shrink-0">
                  ✓
                </span>
                {detail}
              </li>
            ))}
          </ul>
          <div className="bg-[#f9f7f5] rounded-xl p-6">
            <h3 className="font-semibold text-gray-800 mb-3">Specifications</h3>
            <table className="w-full text-sm text-gray-600">
              <tbody className="divide-y divide-gray-200">
                <tr><td className="py-2 font-medium">Category</td><td>{product.category}</td></tr>
                <tr><td className="py-2 font-medium">Product ID</td><td>#{product.id.toString().padStart(4, "0")}</td></tr>
                <tr><td className="py-2 font-medium">Price</td><td>${product.price}</td></tr>
                <tr><td className="py-2 font-medium">Availability</td><td className="text-green-600">In Stock</td></tr>
                <tr><td className="py-2 font-medium">Shipping</td><td>Free over $500</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
