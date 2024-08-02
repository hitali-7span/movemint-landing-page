"use client";
import React from "react";
import Person1 from "@assets/images/person-1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation CSS
import { Pagination, Navigation } from "swiper/modules";

const VerticalSlider = () => {
  const slider = [
    {
      id: 1,
      title:
        "“Movemint is amazing, and I’m very happy I got connected with them to help facilitate my move in an easy and straightforward fashion..”",
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      img: Person1,
    },
    {
      id: 2,
      title:
        "“Movemint is amazing, and I’m very happy I got connected with them to help facilitate my move in an easy and straightforward fashion..”",
      name: "Chris Thomas",
      location: "CEO of Red Button",
      img: Person1,
    },
    {
      id: 3,
      title:
        "“Movemint is amazing, and I’m very happy I got connected with them to help facilitate my move in an easy and straightforward fashion..”",
      name: "Mike Taylor",
      location: "Lahore, Pakistan",
      img: Person1,
    },
    {
      id: 4,
      title:
        "“Movemint is amazing, and I’m very happy I got connected with them to help facilitate my move in an easy and straightforward fashion..”",
      name: "Chris Thomas",
      location: "Lahore",
      img: Person1,
    },
  ];
  return (
    <>
      <div
        style={{ position: "relative" }}
        className="test-slider lg:w-1/2 2xl:px-3"
      >
        <Swiper
          direction={"vertical"}
          spaceBetween={30}
          navigation={true}
          slidesPerView={1.2}
          modules={[Navigation]}
          className="mySwiper h-96 2xl:pt-10 overflow-hidden 2xl:h-[27rem]"
        >
          {slider.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative slider-card h-auto border border-gray-400 px-7 pt-8 pb-4 rounded-xl md:p-8 2xl:px-11 2xl:pt-9 2xl:pb-4">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="absolute h-16 w-16 2xl:h-20 2xl:w-20 -left-5 -top-8 2xl:-left-7 2xl:-top-9 z-50"
                />
                <div className="flex flex-col h-full">
                  <h6 className="text-lg 2xl:text-xl font-medium 2xl:max-w-lg text-black-50 poppins-medium">
                    {item.title}
                  </h6>
                  <span className="text-base 2xl:text-2xl font-medium pt-3 md:pt-4 2xl:pt-11 text-gray-600 poppins-medium">
                    {item.name}
                  </span>
                  <span className="text-base 2xl:text-lg font-medium pt-1 md:pt-2 2xl:pt-2 text-gray-600 poppins-medium">
                    {item.location}
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default VerticalSlider;
