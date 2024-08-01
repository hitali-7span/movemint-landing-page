import React from "react";
import MapMarker from "@assets/icons/map-marker";
import CheckFill from "@assets/icons/check-fill";
import { CameraFill } from "@assets/icons/camera-fill";
import tripCard from "@assets/images/trip-card.png";
import Image from "next/image";

const Booking = () => {
  return (
    <section className="bg-gradient-to-t from-blues-600 form-30% via-blues-500/20 to-blues-600 relative">
      <div className="container py-12 lg:py-28 xl:py-40">
        <div className="space-y-4 lg:w-1/2">
          <h4 className="hidden lg:block poppins-semibold text-base lg:text-2xl uppercase">
            MOVING MADE SIMPLE
          </h4>
          <div>
            <h2 className="2xl:leading-[99.76px] poppins-bold gradient-text text-3xl md:text-4xl lg:w-5/6 xl:text-6xl xl:w-11/12 xl:mb-3">
              Book your next Move in 3 easy steps
            </h2>
          </div>
          <div className="space-y-5 lg:space-y-11 xl:space-y-16">
            <div className="flex items-center space-x-4 xl:space-x-6 lg:w-3/4">
              <MapMarker className="w-9 xl:w-16 flex-none" />
              <div>
                <h5 className="poppins-bold text-base lg:text-xl">
                  Choose Destination
                </h5>
                <p className="poppins-regular text-sm lg:text-lg">
                  Pick from a popular destination or enter your own destination
                  for your next move.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 xl:space-x-6 lg:w-3/4">
              <CameraFill className="w-9 xl:w-16 flex-none" />
              <div>
                <h5 className="poppins-bold text-base lg:text-xl">
                  Submit Your Move
                </h5>
                <p className="poppins-regular text-sm lg:text-lg">
                  Scan your home and submit your project to receive bids.
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 xl:space-x-6 lg:w-3/4">
              <CheckFill className="w-9 xl:w-16 flex-none" />
              <div>
                <h5 className="poppins-bold text-base lg:text-xl">
                  Choose Your Mover
                </h5>
                <p className="poppins-regular text-sm lg:text-lg">
                  Review real time bids from trusted movers and choose the one
                  that you like best.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Image
        alt="trip card"
        src={tripCard}
        className=" lg:w-1/2 inline-block lg:ml-auto lg:mr-0 mx-auto right-0 top-0 left-auto z-10 h-full lg:m-0 lg:absolute"
      />
    </section>
  );
};

export default Booking;
