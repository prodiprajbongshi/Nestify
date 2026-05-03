import React from "react";
import { ImTruck } from "react-icons/im";
import { BsFillClockFill } from "react-icons/bs";
import { IoMegaphone } from "react-icons/io5";
const page = () => {
  return (
    <div className="container  py-10 px-4">
      <div className="text-center">
        <h2 className="text-extraDark text-xl md:text-4xl font-bold my-2 relative before:w-16 before:h-1.5 before:bg-primary before:absolute before:left-[50%] before:translate-x-[-50%] before:top-8 md:before:top-12">
          About Nestify Furniture
        </h2>
      </div>
      <div className="mt-8 md:mt-10 lg:mt-16">
        <p className="my-6  text-md text-justify">
          At<strong className="text-primary"> Nestify </strong>
          User Furniture, we understand that furniture is not just a necessity —
          it’s an essential part of how you express yourself, how you build your
          lifestyle, and how you create the warmth and comfort of a true home.
          Since our founding, we have been passionate about offering
          high-quality, thoughtfully designed furniture that blends timeless
          craftsmanship with modern aesthetics. Whether you are looking to
          furnish a cozy apartment, a stylish office, or an elegant family home,
          we are committed to providing furniture solutions that suit your
          needs, reflect your personality, and enhance your daily living
          experience.
        </p>
        <p className="my-6  text-md text-justify">
          Our diverse range of products includes everything from luxurious
          sofas, elegant dining sets, and ergonomic office furniture to
          functional storage solutions and chic bedroom collections. Every item
          we offer is carefully selected and crafted with a focus on durability,
          comfort, and sophisticated design. We use quality materials and
          collaborate with skilled artisans to ensure that our furniture not
          only looks beautiful but also stands the test of time.
        </p>
        <p className="my-6  text-md text-justify">
          At the heart of User Furniture is our belief that great furniture can
          transform any space — turning houses into homes and workspaces into
          places of inspiration and productivity. We are proud to serve a wide
          range of customers across Bangladesh with exceptional service, fast
          delivery, and affordable prices. Our goal is simple: to make it easy
          and enjoyable for our customers to create the living spaces they’ve
          always dreamed of.
        </p>
        <p className="my-6  text-md text-justify">
          Whether you’re decorating your first home, redesigning a modern
          workspace, or simply looking for that perfect statement piece, User
          Furniture is here to help you make every space uniquely yours.
        </p>
      </div>

      <section className=" md:py-10 lg:px-10 mt-4 md:mt-22">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex items-center justify-center space-x-6 cursor-pointer hover:transform hover:scale-125 duration-150 bg-neutral w-full md:w-[75%] px-4 md:px-8 py-8 md:py-10 rounded-md">
            <ImTruck className="h-12 w-12 text-primary" />
            <div className="">
            <h2 className="text-xl">Free Shipping</h2> 
            <p className="text-sm">Free Shipping</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-6 cursor-pointer hover:transform hover:scale-125 duration-150 bg-neutral w-full md:w-[75%] px-4 md:px-8 py-8 md:py-10 rounded-md">
            <BsFillClockFill className="h-12 w-12 text-primary" />
            <div className="">
            <h2 className="text-xl">24 X 7 Service</h2> 
            <p className="text-sm">Online Service For New Customer</p>
            </div>
          </div>
          <div className="flex items-center justify-center space-x-6 cursor-pointer hover:transform hover:scale-125 duration-150 bg-neutral w-full md:w-[75%] px-4 md:px-8 py-8 md:py-10 rounded-md">
            <IoMegaphone className="h-12 w-12 text-primary rotate-320" />
            <div className="">
            <h2 className="text-xl">Festival Offer</h2> 
            <p className="text-sm">New Online Special Festival Offer</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
