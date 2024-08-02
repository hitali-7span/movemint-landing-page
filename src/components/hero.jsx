import React from "react";
import FlightLand from "@assets/icons/flight-land";
import Flight from "@assets/icons/Flight";
import Calander from "@assets/icons/calander";
import Switch from "@assets/icons/switch";

const Hero = () => {
  return (
    <section className=" relative bg-image">
      <div className="container">
        <div className="relative max-w-[1238px] pt-32 md:pt-64 pb-28 lg:pb-48 xl:pb-64 z-20 mx-auto">
          <h1 className="text-3xl md:text-5xl xl:text-7xl font-bold">
            Moving People and Making The World A Smaller Place.
          </h1>
          <p className="text-sm md:text-2xl mt-4 font-medium mb-5">
            Let’s get to your next home.
          </p>

          <form className="bg-black-50 p-3 rounded-3xl space-y-2 hero-bg">
            <div className="relative block bg-transparent w-full border-purple-300 rounded-xl border p-2">
              <span className="text-purple-100 text-xs md:text-sm  font-medium">
                From
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">
                  <Flight />
                </span>
                <input
                  type="text"
                  className=" w-full bg-black-50 placeholder:text-white outline-0 ring-0 text-sm md:text-base font-semibold"
                  placeholder="Los Angeles, Califoria"
                />
              </div>
              <button className="absolute -bottom-6 z-10 right-2 left-auto">
                <Switch />
              </button>
            </div>

            <div className="relative block bg-transparent w-full border-purple-300 rounded-xl border p-2">
              <span className="text-purple-100 text-xs md:text-sm  font-medium">
                To
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">
                  <FlightLand />
                </span>
                <input
                  type="text"
                  className=" w-full bg-black-50 placeholder:text-white outline-0 ring-0 text-sm md:text-base font-semibold"
                  placeholder="Tokyo , Japan"
                />
              </div>
            </div>
            <div className="relative block bg-transparent w-full border-purple-300 rounded-xl border p-2">
              <span className="text-purple-100 text-xs md:text-sm  font-medium">
                Date
              </span>
              <div className="flex items-center space-x-2">
                <span className="text-white font-medium">
                  <Calander />
                </span>
                <input
                  type="text"
                  className=" w-full bg-black-50 placeholder:text-white outline-0 ring-0 text-sm md:text-base font-semibold"
                  placeholder="February 22 2024"
                />
              </div>
            </div>
            <button className="block shadow-lg shadow-blue-300/25 w-full font-bold transition-colors hover:transition-colors hover:bg-transparent rounded-full border-blue-500 py-2 px-11 gradient-button ">
              Lets' Go
            </button>
          </form>
          <p className="text-sm md:text-xl font-semibold mt-3">
            Join us at Movemint and experience the ease of moving with a touch
            of minty freshness. Because when we move together, we make the world
            a smaller, more accessible place.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
