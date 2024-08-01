import Image from "next/image";
import React from "react";
import card1 from "@assets/images/card-1.png";
import card2 from "@assets/images/card-2.png";
import card3 from "@assets/images/card-3.png";
import Link from "next/link";
import Star from "@assets/icons/star";
import SendPlain from "@assets/icons/send-plain";
const TravelMoverCard = () => {
  return (
    <div className="grid gap-5 md:grid-cols-3 xl:gap-14 relative movers w-11/12 mx-auto md:ml-0 md:mr-auto">
      <div className="rounded-2xl">
        <div className="relative z-20">
          <div className="bg-white/40 inline-flex items-center px-1 rounded-md absolute top-3 left-3">
            <Star />
            <span>4.5</span>
          </div>
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={card1}
              alt="card"
              className="rounded-t-xl object-cover object-top absolute inset-0 top-0 w-full h-full"
            />
          </div>
        </div>
        <div className="p-4 xl:py-8 xl:px-7 bg-white z-10 text-black-100 relative rounded-b-3xl">
          <h5 className="poppins-medium text-md lg:text-lg xl:text-2xl">
            Atlas Van Lines
          </h5>
          <Link href="#" className="flex items-center space-x-3">
            <SendPlain className="text-black-100" />
            <span className="poppins-medium text-sm lg:text-lg text-purple-200">
              Los Angeles, CA
            </span>
          </Link>
        </div>
      </div>
      <div className="rounded-2xl">
        <div className="relative z-20">
          <div className="bg-white/40 inline-flex items-center px-1 rounded-md absolute top-3 left-3">
            <Star />
            <span>4.5</span>
          </div>
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={card2}
              alt="card"
              className="rounded-t-xl object-cover object-top absolute inset-0 top-0 w-full h-full"
            />
          </div>
        </div>

        <div className="p-4 xl:py-8 xl:px-7 bg-white z-10 text-black-100 relative rounded-b-3xl">
          <h5 className="poppins-medium text-md lg:text-lg xl:text-2xl">
            International Van Lines
          </h5>
          <Link href="#" className="flex items-center space-x-3">
            <SendPlain className="text-black-100" />
            <span className="poppins-medium text-sm lg:text-lg text-purple-200">
              Irvine, CA
            </span>
          </Link>
        </div>
      </div>
      <div className="rounded-2xl">
        <div className="relative z-20">
          <div className="bg-white/40 inline-flex items-center px-1 rounded-md absolute top-3 left-3">
            <Star />
            <span>4.5</span>
          </div>
          <div className="aspect-square relative overflow-hidden">
            <Image
              src={card3}
              alt="card"
              className="rounded-t-xl object-cover object-top absolute inset-0 top-0 w-full h-full"
            />
          </div>
        </div>

        <div className="p-4 xl:py-8 xl:px-7 bg-white z-10 text-black-100 relative rounded-b-3xl">
          <h5 className="poppins-medium text-md lg:text-lg xl:text-2xl">
            JK Van Lines
          </h5>
          <Link href="#" className="flex items-center space-x-3">
            <SendPlain className="text-black-100" />
            <span className="poppins-medium text-sm lg:text-lg text-purple-200">
              Los Angeles, CA
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TravelMoverCard;
