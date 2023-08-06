import { MdHealthAndSafety } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
export default function Sustainability() {
  return (
    <div className="container mt-16 min-w-[80vw] flex flex-wrap justify-center items-center  mb-48">
      <div class="inline-flex items-center justify-center w-full mb-32">
        <hr class="w-96 h-[3px] my-8 bg-gray-200 border-0 dark:bg-gray-800 text-2xl"  />
        <span class="absolute px-3 font-semibold text-5xl text-blue-700  -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          پایداری
        </span>
      </div>
      <div className="hover:cursor-default min-w-[100%] min-[1400px]:basis-0 lg:min-w-[25%] lg:max-w-[50%] min-[1920px]:min-w-[25%] min-[1920px]:max-w-[25%] flex flex-col gap-4 justify-center p-10 hover:shadow-borderLike rounded-2xl min-h-[15vh] transition ease-in-out duration-300 delay-150">
        <div className="flex gap-2  text-orange-600">
          <MdHealthAndSafety className="mt-1 text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl" />
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl">
            سلامتی محیط
          </h1>
        </div>
        <p className="text-md sm:text-xl md:text-2xl px-3 text-gray-700 max-w-[80%]">
          حفظ محیط زیست، اولویت کاسپین شیمی پاسارگاد
        </p>
      </div>
      <div className="hover:cursor-default min-w-[100%] min-[1400px]:basis-0 lg:min-w-[25%] lg:max-w-[50%] min-[1920px]:min-w-[25%] min-[1920px]:max-w-[25%] flex flex-col gap-4 justify-center p-10 hover:shadow-borderLike rounded-2xl min-h-[15vh] transition ease-in-out duration-300 delay-150">
        <div className="flex gap-2  text-orange-600">
          <AiFillSafetyCertificate className="mt-1 text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl" />
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl">
            ایمنی فرآیند
          </h1>
        </div>
        <p className="text-md sm:text-xl md:text-2xl px-3 text-gray-700 max-w-[80%]">
          استقرار سیستم مدیریت ایمنی فرآیند با رویکرد جامع
        </p>
      </div>
      <div className="hover:cursor-default min-w-[100%] min-[1400px]:basis-0 lg:min-w-[25%] lg:max-w-[50%] min-[1920px]:min-w-[25%] min-[1920px]:max-w-[25%] flex flex-col gap-4 justify-center p-10 hover:shadow-borderLike rounded-2xl min-h-[15vh] transition ease-in-out duration-300 delay-150">
        <div className="flex gap-2  text-orange-600">
          <FaCanadianMapleLeaf className="mt-1 text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl" />
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl">
            نوآوری
          </h1>
        </div>
        <p className="text-md sm:text-xl md:text-2xl px-3 text-gray-700 max-w-[80%]">
          آغاز به کار مرکز نوآوری کاسپین شیمی پاسارگاد
        </p>
      </div>
      <div className="hover:cursor-default min-w-[100%] min-[1400px]:basis-0 lg:min-w-[25%] lg:max-w-[50%] min-[1920px]:min-w-[25%] min-[1920px]:max-w-[25%] flex flex-col gap-4 justify-center p-10 hover:shadow-borderLike rounded-2xl min-h-[15vh] transition ease-in-out duration-300 delay-150">
        <div className="flex gap-2  text-orange-600">
          <IoMdPeople className="mt-1 text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl" />
          <h1 className="font-serif text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl">
            مسئولیت اجتماعی
          </h1>
        </div>
        <p className="text-md sm:text-xl md:text-2xl px-3 text-gray-700 max-w-[80%]">
          حمایت از محیط زیست، مصداق مسئولیت پذیری اجتماعی
        </p>
      </div>
    </div>
  );
}
