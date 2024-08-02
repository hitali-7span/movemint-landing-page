"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@assets/images/logo.png";
import React, { useEffect, useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollHeader = () => {
    var header = document.getElementById("header");
    if (window.scrollY > 50) {
      // Adjust this value as needed
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  }

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    }
  }, [])

  return (
    <header
      id="header"
      className="fixed mx-auto bg-transparent top-0 left-0 right-0 bottom-auto z-50"
    >
      <div className="container">
        <div className="m-0 py-5 md:pt-16 md:flex md:items-center header-nav">
          <Link
            href="#"
            className="pr-5 lg:pr-28 2xl:pr-36 block flex-none w-52 lg:w-auto"
          >
            <Image src={logo} alt="movemint" />
          </Link>

          <div className="md:hidden relative x-40">
            <button
              onClick={toggleMenu}
              className="block text-gray-800 focus:outline-none fixed top-7 left-auto right-7 z-20"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#fff"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>

          <div
            className={`${menuOpen
              ? "block h-screen bg-gradient-to-b from-black-50 to-black-100 mt-0 top-16 w-full absolute p-4 inset-0 bg-black"
              : "hidden mt-4"
              } md:flex md:items-center space-y-5 md:space-y-0 md:justify-between md:space-x-6 xl:space-x-28  md:mt-0 w-full`}
          >
            <nav
              className={`capitalize tetx-sm lg:text-base space-y-4 font-medium md:flex md:items-center md:space-y-0 xl:text-xl xl:space-x-20${menuOpen ? "space-x-0" : " space-x-10"
                } `}
            >
              <Link href="#" className="block">
                Home
              </Link>
              <Link href="#" className="block">
                About
              </Link>
              <Link href="#" className="block">
                Contact us
              </Link>
            </nav>
            <div className="space-y-4  md:space-y-0 md:space-x-3 lg:space-x-9 2xl:space-x-12 md:flex md:items-center">
              <button className="block border bg-transparent rounded-md border-white py-2.5 px-5 md:px-4 text-sm lg:text-base xl:px-8 xl:text-xl">
                Sign Up
              </button>

              <button className="block border transition-colors hover:transition-colors hover:bg-transparent text-sm lg:text-base xl:text-xl rounded-md border-blues-100 gradient-button  py-2.5 px-7 xl:px-9 ">
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
