'use client'

import Image from "next/image";
import brandIcon from "./brandIcon.png";
import React, { useEffect, useRef, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { FiHeart, FiUser, FiLogOut, FiLogIn } from "react-icons/fi";
import { IoCartOutline } from "react-icons/io5";
import { RiMenu2Line } from "react-icons/ri";
import { IoIosCloseCircleOutline } from "react-icons/io";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { useAuth } from "@/context/AuthContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showUserMenu, setShowUserMenu] = useState(false);
  const { totalItems } = useCart();
  const { user, isLoggedIn, logout } = useAuth();
  const userMenuRef = useRef<HTMLDivElement>(null);

  // Scroll logic for hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Close user menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (userMenuRef.current && !userMenuRef.current.contains(e.target as Node)) {
        setShowUserMenu(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const getInitials = (name: string) =>
    name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);

  return (
    <nav className={`sticky top-0 z-50 transform transition-transform duration-300 ease-in-out ${showNavbar ? "translate-y-0" : "-translate-y-full"}`}>
      <div className={`shadow-md md:py-4 bg-white`}>
        <div className="container relative">
          <div className="flex items-center justify-between md:mx-6">
            <div className="md:block">
              <Link href="/">
                <Image
                  src={brandIcon}
                  className="w-[100px] md:w-[180px] h-[45px] md:h-[75px]"
                  alt="Brand Icon"
                  priority
                />
              </Link>
            </div>

            <div className="flex items-center justify-center space-x-3 md:space-x-5">
              <div className="hidden md:block">
                <div className="flex items-center justify-center md:space-x-5">
                  <IoSearchSharp
                    size={25}
                    className="text-[#6a6a6a] font-bold cursor-pointer hover:text-primary transition-colors"
                  />
                  <FiHeart
                    size={25}
                    className="text-[#6a6a6a] font-bold cursor-pointer hover:text-primary transition-colors"
                  />
                </div>
              </div>

              {/* Cart */}
              <Link href="/cart" className="relative">
                <IoCartOutline
                  size={25}
                  className="text-[#6a6a6a] font-bold cursor-pointer hover:text-primary transition-colors"
                />
                {totalItems > 0 && (
                  <span className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold w-4 h-4 flex items-center justify-center rounded-full">
                    {totalItems > 99 ? "99+" : totalItems}
                  </span>
                )}
              </Link>

              {/* User Icon / Dropdown */}
              <div className="relative" ref={userMenuRef}>
                <button
                  id="navbar-user-btn"
                  onClick={() => setShowUserMenu((prev) => !prev)}
                  className="flex items-center justify-center cursor-pointer focus:outline-none"
                  aria-label="User menu"
                >
                  {isLoggedIn && user ? (
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center text-white text-xs font-bold transition-transform hover:scale-105"
                      style={{ background: "linear-gradient(135deg, #d4b196, #c49a7a)" }}
                    >
                      {getInitials(user.name)}
                    </div>
                  ) : (
                    <FiUser
                      size={25}
                      className="text-[#6a6a6a] font-bold cursor-pointer hover:text-primary transition-colors"
                    />
                  )}
                </button>

                {/* Dropdown Menu */}
                {showUserMenu && (
                  <div className="absolute right-0 mt-3 w-56 bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden animate-fade-in z-50">
                    {isLoggedIn && user ? (
                      <>
                        {/* User info */}
                        <div className="px-4 py-4 border-b border-gray-100">
                          <div className="flex items-center gap-3">
                            <div
                              className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold flex-shrink-0"
                              style={{ background: "linear-gradient(135deg, #d4b196, #c49a7a)" }}
                            >
                              {getInitials(user.name)}
                            </div>
                            <div className="min-w-0">
                              <p className="text-sm font-semibold text-dark truncate">{user.name}</p>
                              <p className="text-xs text-gray-400 truncate">{user.email}</p>
                            </div>
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="p-2">
                          <button
                            id="navbar-logout-btn"
                            onClick={() => { logout(); setShowUserMenu(false); }}
                            className="w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-red-500 hover:bg-red-50 transition-colors cursor-pointer"
                          >
                            <FiLogOut size={16} />
                            <span>Logout</span>
                          </button>
                        </div>
                      </>
                    ) : (
                      <div className="p-2 space-y-1">
                        <Link
                          href="/login"
                          id="navbar-login-link"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-dark hover:bg-neutral transition-colors"
                        >
                          <FiLogIn size={16} className="text-primary" />
                          <span>Login</span>
                        </Link>
                        <Link
                          href="/signup"
                          id="navbar-signup-link"
                          onClick={() => setShowUserMenu(false)}
                          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm text-white font-medium transition-colors"
                          style={{ background: "linear-gradient(135deg, #d4b196, #c49a7a)" }}
                        >
                          <FiUser size={16} />
                          <span>Create Account</span>
                        </Link>
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>

            {/* Hamburger Button */}
            <div
              className="md:hidden cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
            >
              <RiMenu2Line size={25} className="text-dark" />
            </div>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <ul className="flex items-center justify-center space-x-8 pt-4 border-t border-gray-200">
              {[
                { name: "Home", href: "/" },
                { name: "Product", href: "/product" },
                { name: "Blogs", href: "/blog" },
                { name: "About", href: "/about" },
                { name: "Contact", href: "/contact" },
              ].map((item, index) => (
                <li key={index} className="relative group overflow-hidden">
                  <Link href={item.href} className="inline-block text-dark">
                    {item.name}
                  </Link>
                  <span className="absolute bottom-0 left-0 h-[2px] w-0 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </li>
              ))}
            </ul>
          </div>

          {/* Mobile Menu Overlay */}
          {isOpen && (
            <div
              className="fixed inset-0 z-40 h-screen bg-neutral bg-opacity-50 md:hidden"
              onClick={() => setIsOpen(false)}
            ></div>
          )}

          {/* Mobile Menu Panel */}
          <div
            className={`fixed inset-y-0 left-0 z-50 h-screen w-3/4 max-w-sm transform bg-white p-6 shadow-lg transition-transform duration-300 ease-in-out md:hidden ${
              isOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            {/* Close Button */}
            <div className="mb-6 flex justify-end">
              <IoIosCloseCircleOutline
                size={30}
                className="cursor-pointer text-gray-600"
                onClick={() => setIsOpen(false)}
              />
            </div>

            {/* Mobile User info */}
            {isLoggedIn && user ? (
              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                  style={{ background: "linear-gradient(135deg, #d4b196, #c49a7a)" }}
                >
                  {getInitials(user.name)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-dark">{user.name}</p>
                  <p className="text-xs text-gray-400">{user.email}</p>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 mb-6 pb-4 border-b border-gray-100">
                <Link href="/login" onClick={() => setIsOpen(false)} className="text-center py-2 rounded-xl border border-primary text-primary text-sm font-medium hover:bg-neutral transition-colors">
                  Login
                </Link>
                <Link href="/signup" onClick={() => setIsOpen(false)} className="text-center py-2 rounded-xl text-white text-sm font-medium" style={{ background: "linear-gradient(135deg, #d4b196, #c49a7a)" }}>
                  Sign Up
                </Link>
              </div>
            )}

            {/* Menu Links */}
            <ul className="space-y-4">
              {[
                { name: "Home", href: "/" },
                { name: "Product", href: "/product" },
                { name: "About", href: "/about" },
                { name: "Blogs", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((item) => (
                <li key={item.name} onClick={() => setIsOpen(false)}>
                  <Link
                    href={item.href}
                    className="block text-lg font-medium text-gray-800 hover:text-primary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Mobile Logout */}
            {isLoggedIn && (
              <div className="mt-8 pt-4 border-t border-gray-100">
                <button
                  onClick={() => { logout(); setIsOpen(false); }}
                  className="w-full flex items-center gap-2 text-red-500 text-sm hover:text-red-600"
                >
                  <FiLogOut size={16} />
                  <span>Logout</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;