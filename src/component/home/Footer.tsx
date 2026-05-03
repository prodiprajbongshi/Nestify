

import Image from "next/image";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 ">
      <div className=" md:container">
        {/* Newsletter Section */}
        <div className=" mx-auto px-4 sm:px-6 lg:px-8 my-12">
          <div className=" rounded-md p-8 shadow-[0_0_25px_rgba(0,0,0,0.12)]">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
              <div className="text-center lg:text-left">
                <h2 className="text-xl md:text-2xl font-bold text-dark  mb-2">
                  KNOW IT ALL FIRST!
                </h2>
                <p className="text-gray-600 text-sm md:text-xl">
                  Never Miss Anything From Store By Signing Up To Our
                  Newsletter.
                </p>
              </div>
              <div >
               <form method="post" className=" flex flex-col md:flex-row gap-4 ">
                 <input
                  type="email"
                  required
                  placeholder="Enter Email Address"
                  className="px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary flex-1 lg:w-80"
                />
                <button className="px-8 py-3 bg-primary hover:bg-primary text-gray-800 font-medium rounded-md transition-colors duration-200 cursor-pointer">
                  SUBSCRIBE
                </button>
               </form>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <div className="flex items-center mb-4">
                <Link href="/">
                  <Image
                    src="/brandIcon.png"
                    alt="Brand Logo"
                    width={180}
                    height={75}
                    className=" cursor-pointer"
                  />
                </Link>
              </div>
              <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                Discover the latest trends and enjoy seamless shopping with our
                exclusive collections.
              </p>
              <div className="flex space-x-4">
                <button className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <FaFacebookF className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <FaTwitter className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <FaInstagram className="w-4 h-4 text-gray-600" />
                </button>
                <button className="w-8 h-8 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <FaPinterestP className="w-4 h-4 text-gray-600" />
                </button>
              </div>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                CATEGORIES
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Baby Essentials
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Bag Emporium
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Books
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Christmas
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Classic Furnishings
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Crystal Clarity Optics
                  </a>
                </li>
              </ul>
            </div>

            {/* Useful Links */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                USEFUL LINKS
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Offers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Search
                  </a>
                </li>
              </ul>
            </div>

            {/* Help Center */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                HELP CENTER
              </h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    My Account
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    My Orders
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Wishlist
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    FAQ's
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>

            {/* Store Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                STORE INFORMATION
              </h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <FaMapMarkerAlt className="w-4 h-4 text-gray-500 mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-600">
                    <p>Nestify Store, Banani</p>
                    <p>Dhaka-1216</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <FaPhone className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Call Us: +008 01785-427890
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <FaEnvelope className="w-4 h-4 text-gray-500 flex-shrink-0" />
                  <span className="text-sm text-gray-600">
                    Email Us: support@nextify.Com
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer Bottom  */}
        <div className="text-center pt-10 pb-5">
          <p className="text-gray-600 hover:text-gray-900 text-sm transition-colors duration-200">
            Copyright &copy; 2025 Dev Prodip . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
