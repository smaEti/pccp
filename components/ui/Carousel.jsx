"use client";
import Carousel, { PagingDots } from "nuka-carousel";
import { useEffect, useState } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import "@/app/globals.css";
import { Button } from "@/components/ui/button";
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
			<div className="w-screen h-screen sm:h-[90vh] md:h-[85vh] lg:h-[80vh] bg-[url('../public/oilslide1.jpg')] bg-no-repeat bg-cover">
				<div className="flex flex-col justify-center items-center lg:items-end gap-10 flex-wrap w-full h-full bg-blue-600 bg-opacity-60 lg:pr-[25vw] lg:pt-48">
					<h1 className=" text-white text-3xl min-[450px]:text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
						شرکت پلیمر آریا ساسول
					</h1>
					<h3 className=" text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
						پیشرو بودن رویا نیست، باور ماست
					</h3>
					<Button className=" bg-red-600 hover:text-orange-500 rounded-full w-40 h-16 text-2xl lg:w-56 lg:text-4xl">
						بیشتر بدانید
					</Button>
				</div>
			</div>
			<div className="w-screen h-screen sm:h-[90vh] md:h-[85vh] lg:h-[80vh] bg-[url('../public/oilslide2.jpg')] bg-no-repeat bg-cover">
				<div className="flex flex-col justify-center items-center lg:items-end gap-10 flex-wrap w-full h-full bg-blue-600 bg-opacity-60 lg:pr-[25vw] lg:pt-48">
					<h1 className=" text-white text-3xl min-[450px]:text-5xl  sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
						شرکت پلیمر آریا ساسول
					</h1>
					<h3 className=" text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
						پیشرو بودن رویا نیست، باور ماست
					</h3>
					<Button className=" bg-red-600 hover:text-orange-500 rounded-full w-40 h-16 text-2xl lg:w-56 lg:text-4xl">
						بیشتر بدانید
					</Button>
				</div>
			</div>
			<div className="w-screen h-screen sm:h-[90vh] md:h-[85vh] lg:h-[80vh] bg-[url('../public/oilslide3.jpg')] bg-no-repeat bg-cover">
				<div className="flex flex-col justify-center items-center lg:items-end gap-10 flex-wrap w-full h-full bg-blue-600 bg-opacity-60 lg:pr-[25vw] lg:pt-48">
					<h1 className=" text-white text-3xl min-[450px]:text-5xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
						شرکت پلیمر آریا ساسول
					</h1>
					<h3 className=" text-white text-lg min-[450px]:text-xl sm:text-2xl md:text-3xl xl:text-4xl">
						پیشرو بودن رویا نیست، باور ماست
					</h3>
					<Button className=" bg-red-600 hover:text-orange-500 rounded-full w-40 h-16 text-2xl lg:w-56 lg:text-4xl">
						بیشتر بدانید
					</Button>
				</div>
			</div>
		</Carousel>
	);
}
