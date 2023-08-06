'use client'
import Carousel, { PagingDots } from "nuka-carousel";;
import CardNews from './CardNews';

const News = () => {
  return (
    // <div className="max-w-screen-xl mx-auto grid grid-cols-1 min-[595px]:grid-cols-2 lg:grid-cols-4 gap-4 justify-items-center">
    <div className=" max-w-[70vw] mx-auto" dir="ltr">
      <Carousel slidesToShow={4} cellAlign="left" disableEdgeSwiping='true' withoutControls='true' className="px-3 py-5 shadow-inner" >
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
