"use client";
import React from "react";
import Person1 from "../../../assets/images/person-1.png";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // Import navigation CSS
import { Pagination, Navigation } from "swiper/modules";
import "../globals.css";
const review = () => {
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
      <div style={{ position: "relative" }}>
        <Swiper
          direction={"vertical"}
          navigation={true}
          slidesPerView={1}
          spaceBetween={100}
          modules={[Navigation]}
          className="mySwiper h-96 md:h-96  md:px-10 md:pt-10  overflow-hidden"
        >
          {slider.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="relative  h-auto bg-white border border-gray-400 px-5 py-5 md:px-11 md:py-9 rounded-xl mt-12 md:mt-0">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="absolute  h-16 w-16 md:h-20 md:w-20 -left-5 -top-8 md:-left-7 md:-top-9 z-50"
                />
                <div className="flex flex-col h-full">
                  <h6 className="text-lg md:text-xl font-medium md:max-w-lg text-black-50 pt-3 md:pt-9 md:pr-11">
                    {item.title}
                  </h6>
                  <span className="text-xl md:text-2xl font-medium pt-3 md:pt-11 text-gray-600">
                    {item.name}
                  </span>
                  <span className="text-xl md:text-lg font-medium pt-1 md:pt-2 text-gray-600">
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

export default review;
