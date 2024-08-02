import React from "react";
import tripImag from "@assets/images/greece.png";
import Image from "next/image";
import Leaf from "@assets/icons/leaf";
import MapOutline from "@assets/icons/map-outline";
import SendPlain from "@assets/icons/send-plain";
import Building from "@assets/icons/building";
import Heart from "@assets/icons/heart";
import trip from "@assets/images/trip-inprogress.png";
import progress from "@assets/images/progress.png";

const TripCard = () => {
  return (
    <div className="trip-card relative inline-block mx-auto lg:ml-0 lg:mr-auto ">
      <div className="rounded-3xl bg-black-50 p-5 sm:p-6 inline-block relative lg:w-4/5 text-left">
        <div className="aspect-video w-full">
          <Image
            src={tripImag}
            alt="card"
            className="w-full object-cover object-center h-full rounded-2xl"
          />
        </div>

        <h4 className="text-base lg:text-xl poppins-medium mt-9">
          Trip To Greece
        </h4>
        <div className="divide-x divide-x-white mt-4">
          <span className="poppins-medium pr-3">14-29 June</span>
          <span className="poppins-medium pl-3">by Robbin joseph</span>
        </div>
        <div className="space-x-4 mt-7 flex items-center ">
          <button className="bg-white p-3 rounded-full flex items-center justify-center">
            <Leaf />
          </button>
          <button className="bg-white p-3 rounded-full flex items-center justify-center">
            <MapOutline />
          </button>
          <button className="bg-white p-3 rounded-full flex items-center justify-center text-purple-100">
            <SendPlain />
          </button>
        </div>
        <div className="flex items-center justify-between mt-10">
          <div className="flex items-center justify-between space-x-5">
            <Building />
            <span className="popins-medium tetx-sm lg:text-xl text-purple-100">
              Atlas Van Lines
            </span>
          </div>
          <button>
            <Heart />
          </button>
        </div>
      </div>
      <div className="shadow-sm p-3 xl:p-6 bg-black-50 shadow-black-100 rounded-3xl flex items-start space-x-4 absolute -bottom-10 -right-3 md:bottom-16 z-10 md:-right-7 2xl:-right-24">
        <Image src={trip} alt="trip card" />
        <div>
          <span className="text-purple-100 poppins-medium text-base lg:text-lg">
            In Progress
          </span>
          <h5 className="poppins-medium text-base lg:text-xl mb-4">
            In Transit
          </h5>
          <div>
            <span className="text-blues-100 poppins-medium text-sm lg:text-lg mr-1">
              40%
            </span>
            <span className="mb-3 inline-block">completed</span>
            <Image src={progress} alt="trip progress" className="lg:w-full" />
          </div>
        </div>
      </div>
    </div>
  );
  a;
};

export default TripCard;
