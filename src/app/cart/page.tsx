"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  FaTrashAlt,
  FaArrowLeft,
  FaShoppingBag,
  FaLock,
  FaTruck,
  FaUndo,
} from "react-icons/fa";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, updateQuantity, clearCart, totalPrice, totalItems } =
    useCart();

  const shipping = totalPrice > 500 ? 0 : totalPrice > 0 ? 9.99 : 0;
  const tax = +(totalPrice * 0.08).toFixed(2);
  const grandTotal = +(totalPrice + shipping + tax).toFixed(2);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-[70vh] flex flex-col items-center justify-center px-4">
        <div className="text-center max-w-md">
          {/* Empty Cart Illustration */}
          <div className="w-32 h-32 bg-gradient-to-br from-[#f5f3f1] to-[#e9e3de] rounded-full flex items-center justify-center mx-auto mb-6 shadow-inner">
            <FaShoppingBag className="w-14 h-14 text-primary opacity-60" />
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-3">
            Your cart is empty
          </h1>
          <p className="text-gray-500 mb-8">
            Looks like you haven't added anything yet. Start exploring our
            collection!
          </p>
          <Link
            href="/product"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/30"
          >
            <FaArrowLeft />
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container my-10 md:my-16">
      {/* Header */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
          <p className="text-gray-500 mt-1">
            {totalItems} {totalItems === 1 ? "item" : "items"} in your cart
          </p>
        </div>
        <Link
          href="/product"
          className="hidden md:flex items-center gap-2 text-sm text-gray-600 hover:text-primary transition font-medium"
        >
          <FaArrowLeft />
          Continue Shopping
        </Link>
      </div>

      <div className="lg:flex gap-8">
        {/* Cart Items */}
        <div className="flex-1">
          {/* Trust Bar */}
          <div className="flex flex-wrap gap-4 mb-6 p-4 bg-green-50 border border-green-100 rounded-2xl text-sm text-green-700">
            <div className="flex items-center gap-2">
              <FaTruck /> Free shipping on orders over $500
            </div>
            <div className="flex items-center gap-2">
              <FaUndo /> 30-day free returns
            </div>
            <div className="flex items-center gap-2">
              <FaLock /> Secure checkout
            </div>
          </div>

          {/* Items List */}
          <div className="space-y-4">
            {cartItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white border border-gray-100 rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col sm:flex-row gap-4"
              >
                {/* Product Image */}
                <Link
                  href={`/product/${item.id}`}
                  className="w-full sm:w-28 h-28 bg-gradient-to-b from-[#f5f3f1] to-[#e9e3de] rounded-xl flex items-center justify-center overflow-hidden flex-shrink-0"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    width={120}
                    height={120}
                    className="object-contain h-full transition-transform duration-300 group-hover:scale-105"
                  />
                </Link>

                {/* Details */}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between gap-2">
                    <div>
                      <span className="text-xs font-medium text-primary uppercase tracking-wider">
                        {item.category}
                      </span>
                      <Link href={`/product/${item.id}`}>
                        <h3 className="text-base font-semibold text-gray-900 mt-0.5 hover:text-primary transition line-clamp-2">
                          {item.name}
                        </h3>
                      </Link>
                    </div>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-gray-300 hover:text-red-500 transition-colors flex-shrink-0 p-1 cursor-pointer"
                      aria-label="Remove item"
                    >
                      <FaTrashAlt className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    {/* Quantity Controls */}
                    <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="w-9 h-9 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition text-lg font-bold cursor-pointer"
                      >
                        −
                      </button>
                      <span className="w-10 text-center font-semibold text-gray-800 text-sm">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="w-9 h-9 flex items-center justify-center text-gray-700 hover:bg-gray-100 transition text-lg font-bold cursor-pointer"
                      >
                        +
                      </button>
                    </div>

                    {/* Price */}
                    <div className="text-right">
                      <p className="text-lg font-bold text-gray-900">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                      {item.quantity > 1 && (
                        <p className="text-xs text-gray-400">
                          ${item.price} each
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Clear Cart */}
          <button
            onClick={clearCart}
            className="mt-6 text-sm text-gray-400 hover:text-red-500 transition-colors flex items-center gap-2 cursor-pointer"
          >
            <FaTrashAlt /> Clear entire cart
          </button>
        </div>

        {/* Order Summary */}
        <div className="lg:w-96 mt-8 lg:mt-0">
          <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-6 sticky top-28">
            <h2 className="text-xl font-bold text-gray-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>
                  Subtotal ({totalItems} {totalItems === 1 ? "item" : "items"})
                </span>
                <span className="font-medium text-gray-800">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <div className="flex justify-between text-gray-600">
                <span>Shipping</span>
                <span
                  className={`font-medium ${shipping === 0 ? "text-green-600" : "text-gray-800"}`}
                >
                  {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                </span>
              </div>

              {shipping > 0 && (
                <p className="text-xs text-gray-400 -mt-2">
                  Add ${(500 - totalPrice).toFixed(2)} more for free shipping
                </p>
              )}

              <div className="flex justify-between text-gray-600">
                <span>Tax (8%)</span>
                <span className="font-medium text-gray-800">${tax}</span>
              </div>

              <div className="border-t border-gray-100 pt-4 flex justify-between">
                <span className="text-base font-bold text-gray-900">Total</span>
                <span className="text-xl font-bold text-primary">
                  ${grandTotal}
                </span>
              </div>
            </div>

            {/* Coupon Input */}
            <div className="mt-6">
              <label className="text-xs font-medium text-gray-600 block mb-2">
                Coupon Code
              </label>
              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter code..."
                  className="flex-1 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <button className="px-4 py-2 bg-gray-900 text-white text-sm rounded-lg hover:bg-gray-700 transition cursor-pointer">
                  Apply
                </button>
              </div>
            </div>

            {/* Checkout Button */}
            <button className="mt-6 w-full bg-primary text-white py-4 rounded-xl font-bold text-base hover:opacity-90 transition-all duration-300 hover:-translate-y-0.5 shadow-lg shadow-primary/30 cursor-pointer flex items-center justify-center gap-2">
              <FaLock className="w-4 h-4" />
              Proceed to Checkout
            </button>

            <p className="text-center text-xs text-gray-400 mt-4">
              Secured by SSL · 256-bit encryption
            </p>

            {/* Payment Icons */}
            <div className="flex justify-center gap-3 mt-4">
              {["VISA", "MC", "AMEX", "PayPal"].map((brand) => (
                <span
                  key={brand}
                  className="text-[10px] font-bold bg-gray-100 text-gray-500 px-2 py-1 rounded border border-gray-200"
                >
                  {brand}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
