"use client";
import Carousel, { PagingDots } from "nuka-carousel";
import CardNews from "./CardNews";

const News = () => {
  return (
    // <div className="max-w-screen-xl mx-auto grid grid-cols-1 min-[595px]:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
    <div className=" max-w-[70vw] mx-auto mt-48 mb-60" dir="ltr">
      {/* header start */}
      <div class="inline-flex items-center justify-center w-full lg:mb-12">
        <hr class="w-96 h-[3px] my-8 bg-gray-200 border-0 dark:bg-gray-800 text-2xl" />
        <span class="absolute  px-3 font-semibold text-4xl text-blue-700  -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
اخبار و اطلاعیه ها
        </span>
      </div>
      {/* header end */}
      <Carousel
        slidesToShow={4}
        cellAlign="left"
        disableEdgeSwiping="true"
        withoutControls="true"
        className="px-3 py-5 shadow-inner"
      >
        <div dir="rtl">
          <CardNews />
        </div>
        <div dir="rtl">
          <CardNews />
        </div>
        <div dir="rtl">
          <CardNews />
        </div>
        <div dir="rtl">
          <CardNews />
        </div>
        <div dir="rtl">
          <CardNews />
        </div>
        <div dir="rtl">
          <CardNews />
        </div>
        <div dir="rtl">
          <CardNews />
        </div>
      </Carousel>
    </div>
  );
};

export default News;
