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
      <div className="container ">
        <div className="grid grid-cols-1 gap-y-6 gap-x-4 2xl:gap-10 md:grid-cols-4 xl:grid-cols-5 xl:gap-5 relative z-10">
          <div className="md:col-span-5 xl:col-span-1">
            <Image src={logo} className="w-60" alt="logo" />
            <p className="text-lg font-medium pt-5 xl:pt-12 max-w-72">
              Making the world a smaller place. One move at a time.
            </p>
          </div>

          <div>
            <ul className="text-xl xl:text-2xl font-normal xl:font-medium text-white flex flex-col gap-1 xl:gap-3.5">
              <li className="text-blues-100 text-2xl font-medium xl:text-3xl xl:font-bold pb-5 2xl:pb-11">
                Company
              </li>
              <li className="hover:text-yellow">
                <Link href="#">About</Link>
              </li>
              <li className="hover:text-yellow">
                <Link href="#">Careers</Link>
              </li>
              <li className="hover:text-yellow">
                <Link href="#">Mobile</Link>
              </li>
            </ul>
          </div>

          <div>
            <ul className="text-xl xl:text-2xl font-normal xl:font-medium text-white flex flex-col gap-1 xl:gap-3.5">
              <li className="text-blues-100 text-2xl font-medium xl:text-3xl xl:font-bold pb-5 xl:pb-11">
                Contact
              </li>
              <li className="hover:text-yellow">
                <Link href="#">Help/FAQ</Link>
              </li>
              <li className="hover:text-yellow">
                <Link href="#">Press</Link>
              </li>
              <li className="hover:text-yellow">
                <Link href="#">Affilates</Link>
              </li>
            </ul>
          </div>

          <div className="">
            <ul className="text-xl xl:text-2xl font-normal xl:font-medium text-white flex flex-col gap-1 xl:gap-3.5">
              <li className="text-blues-100 text-2xl font-medium xl:text-3xl xl:font-bold pb-5 xl:pb-11">
                More
              </li>
              <li className="hover:text-yellow">
                <Link href="#">Terms</Link>
              </li>
              <li className="hover:text-yellow">
                <Link href="#">Privacy Policy</Link>
              </li>
              <li className="hover:text-yellow">
                <Link href="#">Refund Policy</Link>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-9">
            <div className="flex gap-3 2xl:gap-8 ">
              <Link
                href="#"
                className="bg-white inline-flex rounded-full h-9 w-9 xl:h-14 xl:w-14 items-center justify-center"
              >
                <Facebook />
              </Link>
              <Link
                href="#"
                className="bg-white inline-flex rounded-full h-9 w-9 xl:h-14 xl:w-14 items-center justify-center"
              >
                <Instagram />
              </Link>
              <Link
                href="#"
                className="bg-white inline-flex rounded-full h-9 w-9 xl:h-14 xl:w-14 items-center justify-center"
              >
                <Twitter />
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
        <p className="text-lg font-medium md:text-center pt-10 xl:pt-28 text-left ">
          All rights reserved, Movemint App Inc
        </p>
      </div>
    </footer>
  );
}

export default Footer;
