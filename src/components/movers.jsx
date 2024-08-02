import React from "react";
import TravelMoverCard from "./travel-mover-card";

const Movers = () => {
  return (
    <section className="bg-gradient-to-t from-black-100 form-30% via-black to-black-100 pb-12 lg:py-20 section-movers relative">
      <div className="container mover-wrap">
        <p className="text-white blovk text-center">MOST POPULAR</p>
        <div className="lg:flex items-center justify-center mt-4 mb-14">
          <h2 className="gradient-text poppins-bold text-3xl md:text-4xl xl:text-6xl block text-center w-full">
            Recommended Movers
          </h2>
          <span className="text-blues-600 capitalize ml-auto mr-0 flex-none text-base xl:text-2xl font-bold quicksand-font hidden lg:inline-block">
            See all
          </span>
        </div>

        <TravelMoverCard />
        <span className="text-blues-600 capitalize ml-auto mr-0 flex-none text-base font-bold quicksand-font block text-center mt-6 lg:hidden">
          See all
        </span>
      </div>
    </section>
  );
};

export default Movers;
