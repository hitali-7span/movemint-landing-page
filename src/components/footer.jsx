import React from "react";
import Image from "next/image";
import logo from "@assets/images/logo.png";
import Link from "next/link";
import Facebook from "@assets/icons/facebook";
import Instagram from "@assets/icons/instagram";
import Twitter from "@assets/icons/Twitter";
import GooglePlay from "@assets/images/g-paly.png";
import AppleStore from "@assets/images/play-store.png";
function Footer() {
  return (
    <footer className="py-12 lg:py-20 relative footer bg-gradient-to-t from-black-100 form-30% via-black to-black-100">
      <div className="container">
        <div className="relative z-10 grid grid-cols-1 gap-y-6 gap-x-4 md:grid-cols-4 xl:grid-cols-4 xl:gap-5 2xl:gap-8 justify-between">
          <div className="col-span-4 lg:col-span-1">
            <Image src={logo} className="w-60" alt="logo" />
            <p className="text-lg font-medium pt-5 xl:pt-12 max-w-72 poppins-medium">
              Making the world a smaller place. One move at a time.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-3 md:col-span-3 lg:col-span-2 2xl:gap-20 3xl:gap-24">
            <div>
              <ul className="text-lg xl:text-2xl font-normal xl:font-medium text-white flex flex-col gap-1 xl:gap-3.5">
                <li className="text-blues-100 text-xl font-bolda xl:text-3xl xl:font-bold pb-5 2xl:pb-11 poppins-bold">
                  Company
                </li>
                <li className="hover:text-yellow poppins-medium">
                  <Link href="#">About</Link>
                </li>
                <li className="hover:text-yellow poppins-medium">
                  <Link href="#">Careers</Link>
                </li>
                <li className="hover:text-yellow poppins-medium">
                  <Link href="#">Mobile</Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="text-lg xl:text-2xl font-normal xl:font-medium text-white flex flex-col gap-1 xl:gap-3.5">
                <li className="text-blues-100 text-xl font-bolda xl:text-3xl xl:font-bold pb-5 2xl:pb-11 poppins-bold">
                  Contact
                </li>
                <li className="hover:text-yellow poppins-medium">
                  <Link href="#">Help/FAQ</Link>
                </li>
                <li className="hover:text-yellow poppins-medium">
                  <Link href="#">Press</Link>
                </li>
                <li className="hover:text-yellow poppins-medium">
                  <Link href="#">Affilates</Link>
                </li>
              </ul>
            </div>

            <div>
              <ul className="text-lg xl:text-2xl font-normal xl:font-medium text-white flex flex-col gap-1 xl:gap-3.5">
                <li className="text-blues-100 text-xl font-bolda xl:text-3xl xl:font-bold pb-5 2xl:pb-11 poppins-bold">
                  More
                </li>
                <li className="hover:text-yellow poppins-medium">
                  <Link href="#">Terms</Link>
                </li>
                <li className="hover:text-yellow poppins-medium">
                  <Link href="#">Privacy Policy</Link>
                </li>
                <li className="hover:text-yellow poppins-medium">
                  <Link href="#">Refund Policy</Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col gap-9 col-span-4 lg:col-span-1 ">
            <div className="flex gap-3 2xl:gap-8 ">
              <Link
                href="#"
                className="bg-white inline-flex rounded-full h-9 w-9 xl:h-14 xl:w-14 items-center justify-center"
              >
                <Facebook className="h-4 w-4 xl:h-6 xl:w-6 text-black-200" />
              </Link>
              <Link
                href="#"
                className="bg-white inline-flex rounded-full h-9 w-9 xl:h-14 xl:w-14 items-center justify-center"
              >
                <Instagram className="h-4 w-4 xl:h-6 xl:w-6 text-black-100" />
              </Link>
              <Link
                href="#"
                className="bg-white inline-flex rounded-full h-9 w-9 xl:h-14 xl:w-14 items-center justify-center"
              >
                <Twitter className="h-4 w-4 xl:h-6 xl:w-6 mt-2 xl:mt-3 ml-0.5 text-black-200" />
              </Link>
            </div>
            <p className="text-lg xl:text-2xl font-medium">Download our app</p>
            <div className="flex gap-2.5 ">
              <Link href="#" className="w-auto inline-flex">
                <Image src={GooglePlay} alt="google play" />
              </Link>
              <Link href="#" className="w-auto inline-flex">
                <Image src={AppleStore} alt="apple store" />
              </Link>
            </div>
          </div>
        </div>
        <p className="text-lg font-medium md:text-center pt-10 xl:pt-28 text-left">
          All rights reserved, Movemint App Inc
        </p>
      </div>
    </footer>
  );
}

export default Footer;
