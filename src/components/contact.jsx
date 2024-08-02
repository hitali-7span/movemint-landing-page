import React from "react";
import Image from "next/image";
import circle1 from "@assets/images/rectangle-1.png";
import circle2 from "@assets/images/rectangle-2.png";
import Email from "@assets/icons/email";
import Telegram from "@assets/icons/telegram";

const Contact = () => {
  return (
    <section className="bg-gradient-to-t relative from-black-100 form-30% via-black to-black-100 pt-12 pb-10 md:pb-24 lg:py-20 ">
      <div className="container ">
        {/* <div className=" relative "> */}
        <div className="relative z-20 p-4 mx-auto rounded-3xl md:rounded-tl-[56px] xl:rounded-tl-[171px] contact-wrap">
          <Image
            src={circle1}
            alt="circle"
            className="absolute bottom-0 opacity-15 hidden md:block"
          />
          <Image
            src={circle2}
            alt="circle"
            className="absolute right-0 opacity-15 hidden md:block"
          />
          <Telegram className="h-16 w-16 xl:h-24 xl:w-24 flex items-center justify-center absolute z-10 right-0 -top-4 xl:-right-5 xl:-top-8" />

          <div className="pt-16 sm:pb-10 xl:py-28 max-w-[1142px] mx-auto">
            <h2 className="text-2xl xl:leading-[71px] md:text-4xl font-semibold text-center mx-auto max-w-xl md:max-w-6xl relative z-10 poppins-semibold">
              Subscribe to get information, latest news and other interesting
              offers about Movemint.
            </h2>
            <form className="mt-10 lg:mt-24 flex flex-col lg:flex-row gap-8 relative z-20 sm:max-w-[70%] mx-auto">
              <div className="relative flex items-center w-full">
                <input
                  type="email"
                  placeholder="Your email"
                  className="py-4 xl:py-8 pl-14 pr-4 xl:pr-8 text-lg xl:pl-20 flex-none rounded-xl w-full text-slate-400 outline-none z-50"
                />
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 xl:pl-10">
                  <Email className="w-full z-50" />
                </div>
              </div>
              <button className="py-4 px-8 xl:py-7 xl:px-12 text-xl xl:text-3xl gradient-button  rounded-xl">
                Subscribe
              </button>
            </form>
          </div>
        </div>
        {/* </div> */}
      </div>
    </section>
  );
};

export default Contact;
