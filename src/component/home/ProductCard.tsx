import {
  AiOutlineHeart,
  AiOutlineShoppingCart,
  AiOutlineSearch,
  AiOutlineStar,
} from "react-icons/ai";
import Image from "next/image";

interface ProductCardProps {
  img: string;
  price: number;
  offerPrice: number;
  title: string;
}

export default function ProductCard({
  img,
  price,
  offerPrice,
  title,
}: ProductCardProps) {
  return (
    <div className="group w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#f5f3f1] to-[#e9e3de] shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
      {/* Image Section */}
      <div className="relative bg-gray-100 p-6 flex items-center justify-center h-72 overflow-hidden">
        {/* Discount Badge */}
        <span className="absolute left-4 top-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full shadow">
          Sale
        </span>

        {/* Product Image */}
        <Image
          src={img}
          alt="Product Image"
          width={300}
          height={300}
          className="object-contain h-full transition-transform duration-500 group-hover:scale-110"
        />

        {/* Action Buttons */}
        <div className="absolute right-4 top-4 flex flex-col gap-3 opacity-0 translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
          {[AiOutlineHeart, AiOutlineShoppingCart].map(
            (Icon, i) => (
              <button
                key={i}
                className="w-9 h-9 bg-white/80 backdrop-blur-md hover:bg-white shadow-md border border-gray-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <Icon className="w-4 h-4 text-gray-600 cursor-pointer" />
              </button>
            ),
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-5 space-y-3">
        {/* Title */}
        <h3 className="text-xl font-semibold text-gray-800 line-clamp-2 group-hover:text-black transition">
          {title}
        </h3>

        {/* Rating */}
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <AiOutlineStar key={i} className="w-4 h-4 text-yellow-400" />
          ))}
          <span className="text-xs text-gray-500 ml-1">(0 reviews)</span>
        </div>

        {/* Price Section */}
        <div className="flex items-end justify-between">
          <div>
            <span className="text-lg font-bold text-gray-900">
              ${offerPrice}
            </span>
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-400 line-through">
                ${price}
              </span>
              <span className="text-xs text-green-600 font-medium">
                Save {Math.round(((price - offerPrice) / price) * 100)}%
              </span>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button className="px-4 py-2 text-sm cursor-pointer font-medium bg-black/65 text-white rounded-md hover:bg-gray-800 transition">
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}
