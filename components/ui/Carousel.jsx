"use client";
import Carousel, { PagingDots } from "nuka-carousel";
import { useEffect, useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "@/app/globals.css";
import { Button } from "@/components/ui/button";
import Link from "next/link";
export default function CarouselComponent() {
	return (
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
			autoplayInterval={20000}
			wrapAround={true}
			className="absolute"
		>
			<div className="min-h-[700px] h-screen w-screen xl:h-[90vh] min-[1400px]:h-[85vh] min-[1600px]:h-[80vh] bg-[url('../public/oilslide1.jpg')] bg-no-repeat bg-cover">
				<div className="flex flex-col pt-40 sm:pt-60 md:pt-[42vh] lg:pt-56 xl:justify-center items-center lg:items-end gap-10 w-full h-full bg-blue-600 bg-opacity-60 lg:pr-[25vw]">
					<h1 className="text-white text-2xl min-[450px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
						پتروشیمی کاسپین شیمی پاسارگاد
					</h1>
					<h3 className="text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
						پیشرو بودن رویا نیست، باور ماست
					</h3>
					<Link href="#">
						<Button className="bg-red-600 hover:text-orange-500 rounded-full w-40 h-16 text-2xl lg:w-56 lg:text-4xl">
							بیشتر بدانید
						</Button>
					</Link>
				</div>
			</div>
			<div className="w-screen h-screen xl:h-[90vh] min-[1400px]:h-[85vh] min-[1600px]:h-[80vh] bg-[url('../public/oilslide2.jpg')] bg-no-repeat bg-cover">
				<div className="flex flex-col pt-40 sm:pt-60 md:pt-[42vh] lg:pt-48 xl:justify-center items-center lg:items-end gap-10 w-full h-full bg-blue-600 bg-opacity-60 lg:pr-[25vw]">
					<h1 className=" text-white text-2xl min-[450px]:text-4xl  sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
						پتروشیمی کاسپین شیمی پاسارگاد
					</h1>
					<h3 className=" text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
						پیشرو بودن رویا نیست، باور ماست
					</h3>
					<Link href="#">
						<Button className=" bg-red-600 hover:text-orange-500 rounded-full w-40 h-16 text-2xl lg:w-56 lg:text-4xl">
							بیشتر بدانید
						</Button>
					</Link>
				</div>
			</div>
			<div className="w-screen h-screen xl:h-[90vh] min-[1400px]:h-[85vh] min-[1600px]:h-[80vh] bg-[url('../public/oilslide3.jpg')] bg-no-repeat bg-cover">
				<div className="flex flex-col pt-40 sm:pt-60 md:pt-[42vh] lg:pt-48 xl:justify-center items-center lg:items-end gap-10 w-full h-full bg-blue-600 bg-opacity-60 lg:pr-[25vw]">
					<h1 className=" text-white text-2xl min-[450px]:text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
						پتروشیمی کاسپین شیمی پاسارگاد
					</h1>
					<h3 className=" text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
						پیشرو بودن رویا نیست، باور ماست
					</h3>
					<Link href="#">
						<Button className=" bg-red-600 hover:text-orange-500 rounded-full w-40 h-16 text-2xl lg:w-56 lg:text-4xl">
							بیشتر بدانید
						</Button>
					</Link>
				</div>
			</div>
		</Carousel>
	);
}
