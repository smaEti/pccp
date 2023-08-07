import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "./ui/button";
import Image from "next/image";
import oil from "@/public/oil.jpg";
import hc from "@/public/hydrocarbon.jpg";
export default function Products() {
  return (
    <>
      <div className="lg:min-w-[80vw] mx-auto p-4 lg:mt-32 mt-20 bg-slate-100/75">
        {/* header start */}
        <div class="inline-flex items-center justify-center w-full lg:mb-12 pt-20">
          <hr class="w-96 h-[3px] my-8 bg-gray-200 border-0 dark:bg-gray-800 text-2xl" />
          <span class="absolute  px-3 font-semibold text-4xl text-blue-700  -translate-x-1/2 bg-slate-100/75 left-1/2 dark:text-white dark:bg-gray-900">
            محصولات
          </span>
        </div>
        {/* header end */}
        <div className=" py-8 flex  flex-wrap justify-center gap-10 lg:gap-20 mb-24">
          <div className="md:w-1/5 rounded-2xl border-2 hover:border-orange-600 border-transparent hover:shadow-xl hover:shadow-gray-500 transition delay-100 duration-500 ease-in-out p-2 flex flex-col justify-start text-center gap-5 ">
            <div>
              <Image
                src={oil}
                alt="oil"
                placeholder="blur"
                className="rounded-xl aspect-video w-full h-full"
              />
            </div>
            <div className="pb-4  h-full flex flex-col justify-start items-center gap-3 px-2">
              <h1 className="text-3xl text-orange-600">روغن</h1>
              <p className="text-xl py-6 leading-loose text-gray-500">
                روغن موتور مایعی است که وظیفه دارد اصطکاک و سایش بین قطعات موتور
                خودروی شما را از بین ببرد
              </p>
              <Link
                href="#"
                className="rounded-xl text-white text-center px-6 bg-orange-600 text-xl py-4 hover:bg-orange-500 hover:shadow-xl hover:shadow-gray-500 transition delay-100 duration-500 ease-in-out"
              >
                ادامه مطلب
              </Link>
            </div>
          </div>
          <div className="md:w-1/5 rounded-2xl border-2 hover:border-blue-700 border-transparent hover:shadow-xl hover:shadow-gray-500 transition delay-100 duration-500 ease-in-out p-2 flex flex-col justify-start text-center gap-5 ">
            <div>
              <Image
                src={hc}
                alt="hydrocarbon"
                placeholder="blur"
                className="rounded-xl aspect-video w-full h-full"
              />
            </div>
            <div className="pb-4  h-full flex flex-col justify-start items-center gap-3 px-2">
              <h1 className="text-3xl text-blue-700">هیدروکربن</h1>
              <p className="text-xl  py-6 leading-loose text-gray-500">
                هیدروکربن‌ها برای تولید الیاف‌ها، حلال‌ها، لاستیک‌ها،
                پلاستیک‌ها، و مواد شیمیایی صنعتی استفاده می‌شوند
              </p>
              <Link
                href="#"
                className="rounded-xl text-white text-center px-6 bg-blue-600 text-xl py-4 hover:bg-blue-500 hover:shadow-xl hover:shadow-gray-500 transition delay-100 duration-500 ease-in-out"
              >
                ادامه مطلب
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
{
  /* <div className="container min-w-[80vw]" dir="rtl">
				<div className="mt-24">
					<div className="flex flex-col items-start gap-10">
						<h2 className="text-5xl text-orange-600 border-b-4 border-spacing-2 border-orange-600 font-serif">
							محصولات
						</h2>
						<p className="text-3xl text-right leading-relaxed font-sans text-indigo-900">
							شرکت پتروپالایش کاسپین شیمی پاسارگاد به بهره مندی از امکانات روز و
							پیشرفته دنیا، سالانه 1,100,100 تن در واحد الفین، 375,000 تن پلی
							اتیلن سبک و 375,000 تن پلی اتیلن متوسط و سنگین در واحد های خود
							تولید می نماید
						</p>
					</div>
				</div>
			</div>
			<div className="container min-w-[50vw]">
				<div className="flex mt-48 justify-center flex-wrap-reverse gap-12 bg-no-repeat bg-cover rounded-xl shadow-2xl p-10">
					<div className="flex flex-col justify-between items-center text-center w-[48%] max-[1400px]:w-[100%]">
						<h1 className="text-5xl md:text-6xl text-orange-500">روغن</h1>
						<p className="text-3xl py-10 leading-loose">
							{" "}
							روغن موتور مایعی است که وظیفه دارد اصطکاک و سایش بین قطعات موتور
							خودروی شما را از بین ببرد
						</p>
						<Link href="#" className="py-2">
							<Button
								variant="destructive"
								className="bg-orange-500 text-3xl p-10 hover:bg-orange-400"
							>
								ادامه مطلب
							</Button>
						</Link>
					</div>
					<div className="max-[1400px]:w-[100%] w-[48%]">
						<img src="oil.jpg" alt="" className="rounded-xl h-full w-full" />
					</div>
				</div>
				<div className="flex mt-32 justify-center flex-wrap gap-12 bg-no-repeat bg-cover rounded-xl shadow-2xl p-10">
					<div className="max-[1400px]:w-[100%] w-[48%]">
						<img
							src="hydrocarbon.jpg"
							alt=""
							className="rounded-xl h-full w-full"
						/>
					</div>
					<div className="flex flex-col justify-between items-center text-center w-[48%] max-[1400px]:w-[100%]">
						<h1 className="text-5xl md:text-6xl text-indigo-700">هیدروکربن</h1>
						<p className="text-3xl py-10 leading-loose">
							{" "}
							هیدروکربن‌ها برای تولید الیاف‌ها، حلال‌ها، لاستیک‌ها، پلاستیک‌ها،
							و مواد شیمیایی صنعتی استفاده می‌شوند
						</p>
						<Link href="#" className="py-2">
							<Button
								variant="destructive"
								className="bg-indigo-700 text-3xl p-10 hover:bg-indigo-500"
							>
								ادامه مطلب
							</Button>
						</Link>
					</div>
				</div>
			</div> */
}
