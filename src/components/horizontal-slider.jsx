"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { Pagination } from "swiper/modules";
import "swiper/css/pagination";

import Review from "./vertical-slider";
const HorizontalSlider = () => {
  return (
    <section className="py-12 md:py-20 bg-gradient-to-t from-black-100 form-30% via-black to-black-100">
      <div className="container">
        <div
          className="horizontal lg:flex flex-wrap items-start"
          style={{ position: "relative" }}
        >
          <Swiper
            pagination={{ clickable: true }}
            modules={[Pagination]}
            slidesPerView={1}
            className="mySwiper pb-5 xl:pb-10 lg:mb-20  w-full lg:w-[48%] inline-block text-center lg:text-left"
          >
            <SwiperSlide className="mb-10">
              <p className="text-xl md:text-2xl font-semibold">Testimonials</p>
              <h2 className="mx-auto 2xl:ml-0 text-3xl poppins-bold md:text-4xl lg:text-4xl 2xl:text-[66px]  font-semibold md:font-bold md:max-w-2xl bg-gradient-to-r from-blues-100 to-blues-200 text-transparent bg-clip-text pt-1 md:pt-3 xl:leading-snug">
                Why our customers love movemint.
              </h2>
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <div>
                <p className="font-semibold mx-auto 2xl:ml-0">Testimonials</p>
                <h2 className="mx-auto 2xl:ml-0 text-3xl poppins-bold md:text-4xl lg:text-4xl 2xl:text-[66px]  font-semibold md:font-bold md:max-w-2xl bg-gradient-to-r from-blues-100 to-blues-200 text-transparent bg-clip-text pt-1 md:pt-3 xl:leading-snug">
                  Why our customers love movemint.
                </h2>
              </div>
            </SwiperSlide>
            <SwiperSlide className="mb-10">
              <div>
                <p className=" font-semibold mx-auto 2xl:ml-0">Testimonials</p>
                <h2 className="mx-auto 2xl:ml-0 text-3xl poppins-bold md:text-4xl lg:text-4xl 2xl:text-[66px]  font-semibold md:font-bold md:max-w-2xl bg-gradient-to-r from-blues-100 to-blues-200 text-transparent bg-clip-text pt-1 md:pt-3 xl:leading-snug">
                  Why our customers love movemint.
                </h2>
              </div>
            </SwiperSlide>
          </Swiper>
          <Review />
        </div>
      </div>
    </section>
  );
};

export default HorizontalSlider;
