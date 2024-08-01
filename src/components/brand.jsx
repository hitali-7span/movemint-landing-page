import React from "react";
import Image from "next/image";
import Logo1 from "@assets/images/logo-1.png";
import Logo2 from "@assets/images/logo-2.png";
import Logo3 from "@assets/images/logo-3.png";
import Logo4 from "@assets/images/logo-4.png";
import Logo5 from "@assets/images/logo-5.png";

const Brand = () => {
  return (
    <section className="bg-gradient-to-t from-black-100 form-30% via-black to-black-100 pb-11">
      <div className="container">
        <div className="flex justify-evenly items-center overflow-y-auto gap-10 md:gap-0 ">
          <Image src={Logo1} alt="logo1" className="h-auto"></Image>
          <Image src={Logo2} alt="logo2" className="h-auto"></Image>
          <Image src={Logo2} alt="logo3" className=""></Image>
          <Image src={Logo4} alt="logo4" className="h-auto"></Image>
          <Image src={Logo5} alt="logo5" className="h-auto"></Image>
        </div>
      </div>
    </section>
  );
};

export default Brand;
