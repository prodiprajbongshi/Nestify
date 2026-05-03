import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
} from "react-icons/fa";
import { IoIosContact } from "react-icons/io";
import { IoHome } from "react-icons/io5";
import { MdEmail } from "react-icons/md";
import { MdOutlineSupportAgent } from "react-icons/md";


const ContackForm = () => {

  return (
    <div>
      <div className="container py-10 md:py-16">
        <div className=" md:flex items-center space-x-6 ">
          {/* contact text  */}
          <div className="w-full md:w-4/6  ">
            <div className="">
              <h1 className="text-xl md:text-3xl lg:text-4xl font-semibold text-gray-800">
                Get In Touch
              </h1>
              <p className="text-md text-justify py-2 md:py-6 w-full   lg:w-[85%] ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Accusamus illo dolores voluptas autem veniam corporis explicabo
                enim commodi excepturi eius! Ipsum eligendi perferendis
                officiis, provident adipisci earum deleniti expedita eaque.
              </p>
              <div className=""></div>
            </div>
            <div className="mb-4">
              <div className="flex space-x-4">
                <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <FaFacebookF className="w-4 h-4 text-gray-600 cursor-pointer" />
                </button>
                <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <FaTwitter className="w-4 h-4 text-gray-600 cursor-pointer" />
                </button>
                <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <FaInstagram className="w-4 h-4 text-gray-600 cursor-pointer" />
                </button>
                <button className="w-12 h-12 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center transition-colors duration-200">
                  <FaPinterestP className="w-4 h-4 text-gray-600 cursor-pointer" />
                </button>
              </div>
            </div>
          </div>
          {/* contact form  */}
          <div className=" w-full md:w-6/6 bg-neutral p-4 lg:py-12 lg:px-10 rounded-md">
            <form >
              <div className="mb-2 ">
                <label className=" text-md text-gray-500 font-bold " htmlFor="">
                  Full Name
                </label>
                <br />
                <input
                  required
                  className="w-full bg-white  py-2.5 my-3 px-3.5 focus:outline-1.5 outline-primary"
                  placeholder="Enter Full Name"
                  type="text"
                  name="userName"
                  id="userName"
                />
                
              </div>
              <div className="md:flex items-center justify-center space-x-6 mb-2 ">
                <div className="w-full md:w-1/2">
                  <label
                    className="text-md text-gray-500 font-bold "
                    htmlFor=""
                  >
                    Email Address
                  </label>
                  <br />
                  <input
                    className="w-full bg-white py-2.5 my-1.5 px-3.5 focus:outline-1.5 outline-primary"
                    placeholder="Enter Your Email"
                    type="email"
                    name="userEmail"
                    id="userEmail"
                     required
                  />
                </div>
                <div className="w-full md:w-1/2">
                  <label
                    className=" text-md text-gray-500 font-bold  "
                    htmlFor=""
                  >
                    Phone Number
                  </label>
                  <br />
                  <input
                    className="w-full bg-white py-2.5 my-1.5 px-3.5 focus:outline-1.5 outline-primary"
                    placeholder="Enter Your Phone"
                    type="text"
                    name="userPhone"
                    id="userPhone"
                     required
                  />
                </div>
              </div>
              <div className="mb-2 ">
                <label
                  className="text-md text-gray-500 font-bold "
                  htmlFor="Subject"
                >
                  Subject
                </label>
                <br />
                <input
                  className="w-full bg-white py-2.5 my-3 px-3.5 focus:outline-1.5 outline-primary"
                  placeholder="Enter Subject"
                  type="text"
                  name="subject"
                  id="subject"
                   required
                />
              </div>
              <div className="">
                <label className=" text-md text-gray-500 font-bold " htmlFor="">
                  Message
                </label>{" "}
                <br />
                <textarea
                  className="w-full bg-white py-2.5 my-3 px-3.5 focus:outline-1.5 outline-primary min-h-[150px] resize-y "
                  placeholder="Type Your Message"
                  name="userMassage"
                  id="userMassage"
                   required
                ></textarea>
              </div>
              <input
                className="bg-primary px-4 py-3 rounded-md text-white font-bold cursor-pointer focus:outline-4 outline-white"
                type="submit"
                value="Send Your Message"
              />
            </form>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 py-5 lg:py-18 ">
          <div className="flex items-center bg-neutral px-8 py-4 rounded-sm">
            <div className="text-primary">
              <IoIosContact className="h-12 w-12" />
            </div>
            <div className="ms-4">
              <h2 className="text-xl">Contact Us</h2>
              <p className="py-2 text-sm hover:underline transition-all duration-300 ">
                +008 01785-427890
              </p>
            </div>
          </div>
          <div className="md:flex items-center bg-neutral px-8 py-4 rounded-sm">
            <div className="text-primary">
              <IoHome className="h-12 w-12" />
            </div>
            <div className="ms-4">
              <h2 className="text-xl">Address</h2>
              <p className="py-2 text-sm hover:underline transition-all duration-300">
                ABC Complex,Near xyz, Dhaka-1216
              </p>
            </div>
          </div>
          <div className="md:flex items-center bg-neutral px-8 py-4 rounded-sm">
            <div className="text-primary">
              <MdEmail className="h-12 w-12" />
            </div>
            <div className="ms-4">
              <h2 className="text-xl">Email</h2>
              <p className="py-2 text-sm hover:underline transition-all duration-300">
                contact@nestify.com
              </p>
            </div>
          </div>
          <div className="md:flex items-center bg-neutral px-8 py-4 rounded-sm">
            <div className="text-primary ">
              <MdOutlineSupportAgent className="h-12 w-12" />
            </div>
            <div className="ms-4">
              <h2 className="text-xl">Support</h2>
              <p className="py-2 text-sm hover:underline transition-all duration-300">
                support@nestify.com
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <iframe
            className="w-full lg:h-[50vh]"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d151062.49356249106!2d90.33728828921316!3d23.78097572796852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b8b087026b81%3A0x8fa563bbdd5904c2!2sDhaka!5e1!3m2!1sen!2sbd!4v1752088255455!5m2!1sen!2sbd"
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContackForm;
