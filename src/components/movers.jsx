import React from "react";
import TravelMoverCard from "./travel-mover-card";

const Movers = () => {
  return (
    <section className="bg-gradient-to-t from-black-100 form-30% via-black to-black-100 pb-12 lg:py-20 section-movers relative">
      <div className="container">
        <p className="text-white blovk text-center">MOST POPULAR</p>
        <h2 className="gradient-text poppins-bold text-3xl md:text-4xl xl:text-6xl block text-center mt-4 mb-14">
          Recommended Movers
        </h2>
        <TravelMoverCard />
      </div>
    </section>
  );
};

export default Movers;
