import Image from "next/image";
import React from "react";

const Page = ({ params }) => {
  const { id } = params;

  return (
    <div className="container max-w-6xl mx-auto py-12">
      <div className="grid md:grid-cols-2 gap-10">
        
        {/* Product Image */}
        <div className="relative w-full h-[400px]">
          <Image
            src={`/products/furniture_03.png`}
            alt="Product Image"
            fill
            className="object-cover rounded-xl"
          />
        </div>

        {/* Product Info */}
        <div>
          <h1 className="text-3xl font-bold mb-4">
            Product #{id}
          </h1>

          <p className="text-gray-500 mb-2">
            Category: Electronics
          </p>

          <p className="text-2xl text-primary font-semibold mb-4">
            $199.99
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            This is a placeholder product description. It explains the key
            features, benefits, and usage of the product. You can replace this
            with real data from your backend or API.
          </p>

          {/* Buttons */}
          <div className="flex gap-4">
            <button className="bg-primary text-white px-6 py-2 rounded-lg  cursor-pointer">
              Add to Cart
            </button>
            <button className="border px-6 py-2 rounded-lg cursor-pointer ">
              Buy Now
            </button>
          </div>
        </div>
      </div>

      {/* Extra Section */}
      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">
          Product Details
        </h2>

        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>High quality material</li>
          <li>1 year warranty</li>
          <li>Fast delivery available</li>
          <li>30-day return policy</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;