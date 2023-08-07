"use client";
import Carousel, { PagingDots } from "nuka-carousel";
import { useEffect, useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import slide1 from "@/public/oilslide1.jpg";
import slide2 from "@/public/oilslide2.jpg";
import slide3 from "@/public/oilslide3.jpg";
import slide4 from "@/public/oilslide4.jpg";

export default function CarouselComponent() {
  return (
    <div dir="ltr">
      <Carousel
        renderCenterLeftControls={({ previousSlide }) => (
          <button onClick={previousSlide} className="text-7xl text-white">
            <div className="rounded-full shadow-none hidden shadow-gray-700 ml-4 sm:shadow-none md:shadow-none lg:shadow-2xl md:inline-block">
              <MdNavigateBefore className="w-10 sm:w-14 md:w-18 lg:w-[4.5rem]" />
            </div>
          </button>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <button onClick={nextSlide} className="text-7xl text-white">
            <div className="rounded-full shadow-none hidden shadow-gray-700 mr-4 sm:shadow-none md:shadow-none lg:shadow-2xl md:inline-block">
              <MdNavigateNext className="w-10 sm:w-14 md:w-18 lg:w-[4.5rem]" />
            </div>
          </button>
        )}
        autoplay={true}
        autoplayInterval={2000}
        wrapAround={true}
        className="relative"
      >
        <div className="relative min-h-[700px] h-screen w-screen ">
          <div className=" h-full w-full left-0 top-0 z-0">
            <Image
              src={slide1}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              className="bg-no-repeat"
            />
          </div>
          <div className="flex flex-col justify-center items-center  gap-10 w-full h-full bg-gradient-to-r from-red-500/75 to-indigo-600/75 absolute top-0">
            <h1 className="text-white min-[275px]:text-xl  text-2xl min-[450px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              پتروپالایش کاسپین شیمی پاسارگاد
            </h1>
            <h3 className="text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              پیشرو بودن رویا نیست، باور ماست
            </h3>
          </div>
        </div>
        <div className="relative min-h-[700px] h-screen w-screen ">
          <div className=" h-full w-full left-0 top-0 z-0">
            <Image
              src={slide2}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              className="bg-no-repeat"
            />
          </div>
          <div className="flex flex-col justify-center items-center  gap-10 w-full h-full bg-gradient-to-r from-indigo-600/75 to-red-500/75 absolute top-0">
            <h1 className="text-white min-[275px]:text-xl  text-2xl min-[450px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              پتروپالایش کاسپین شیمی پاسارگاد
            </h1>
            <h3 className="text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              پیشرو بودن رویا نیست، باور ماست
            </h3>
          </div>
        </div>
        <div className="relative min-h-[700px] h-screen w-screen ">
          <div className=" h-full w-full left-0 top-0 z-0">
            <Image
              src={slide3}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              className="bg-no-repeat"
            />
          </div>
          <div className="flex flex-col justify-center items-center  gap-10 w-full h-full bg-gradient-to-r from-red-500/75 to-indigo-600/75 absolute top-0">
            <h1 className="text-white min-[275px]:text-xl  text-2xl min-[450px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              پتروپالایش کاسپین شیمی پاسارگاد
            </h1>
            <h3 className="text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              پیشرو بودن رویا نیست، باور ماست
            </h3>
          </div>
        </div>
        <div className="relative min-h-[700px] h-screen w-screen ">
          <div className=" h-full w-full left-0 top-0 z-0">
            <Image
              src={slide4}
              placeholder="blur"
              layout="fill"
              objectFit="cover"
              sizes="100vw"
              className="bg-no-repeat"
            />
          </div>
          <div className="flex flex-col justify-center items-center  gap-10 w-full h-full bg-gradient-to-r  from-indigo-600/75 to-red-500/75 absolute top-0">
            <h1 className="text-white min-[275px]:text-xl  text-2xl min-[450px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              پتروپالایش کاسپین شیمی پاسارگاد
            </h1>
            <h3 className="text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              پیشرو بودن رویا نیست، باور ماست
            </h3>
          </div>
        </div>
        {/* 


        <div className="min-h-[700px] h-screen w-screen bg-[url('../public/oilslide1.jpg')] bg-no-repeat bg-cover ">
          <div className="flex flex-col justify-center items-center  gap-10 w-full h-full bg-gradient-to-r from-red-500/75 to-indigo-600/75">
            <h1 className="text-white min-[275px]:text-xl  text-2xl min-[450px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              پتروپالایش کاسپین شیمی پاسارگاد
            </h1>
            <h3 className="text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              پیشرو بودن رویا نیست، باور ماست
            </h3>
          </div>
        </div> */}

        {/* <div className="min-h-[700px] w-screen h-screen bg-[url('../public/oilslide2.jpg')] bg-no-repeat bg-cover">
          <div className="flex flex-col justify-center items-center gap-10 w-full h-full bg-gradient-to-r from-indigo-600/75 to-red-500/75 ">
            <h1 className=" text-white min-[275px]:text-xl  text-2xl min-[450px]:text-4xl  sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              پتروپالایش کاسپین شیمی پاسارگاد
            </h1>
            <h3 className=" text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              پیشرو بودن رویا نیست، باور ماست
            </h3>
          </div>
        </div>
        <div className="min-h-[700px] w-screen h-screen bg-[url('../public/oilslide3.jpg')] bg-no-repeat bg-cover">
          <div className="flex flex-col justify-center items-center  gap-10 w-full h-full bg-gradient-to-r from-red-500/75 to-indigo-600/75 ">
            <h1 className=" text-white min-[275px]:text-xl text-2xl min-[450px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              پتروپالایش کاسپین شیمی پاسارگاد
            </h1>
            <h3 className=" text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              پیشرو بودن رویا نیست، باور ماست
            </h3>
          </div>
        </div>
        <div className="min-h-[700px] h-screen w-screen bg-[url('../public/oilslide4.jpg')] bg-no-repeat bg-cover">
          <div className="flex flex-col justify-center items-center  gap-10 w-full h-full bg-gradient-to-r  from-indigo-600/75 to-red-500/75 ">
            <h1 className="text-white min-[275px]:text-xl text-2xl min-[450px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              پتروپالایش کاسپین شیمی پاسارگاد
            </h1>
            <h3 className="text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
              پیشرو بودن رویا نیست، باور ماست
            </h3>
          </div>
        </div> */}
      </Carousel>
    </div>
  );
}
