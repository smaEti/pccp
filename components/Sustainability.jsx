import { MdHealthAndSafety } from "react-icons/md";
import { AiFillSafetyCertificate } from "react-icons/ai";
import { FaCanadianMapleLeaf } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
export default function Sustainability() {
	return (
		<div className="container mt-24 min-w-[80vw] flex flex-wrap justify-center items-center mb-96">
			<div className="min-w-[100%] min-[1400px]:basis-0 lg:min-w-[25%] lg:max-w-[50%] min-[1920px]:min-w-[25%] min-[1920px]:max-w-[25%] flex flex-col gap-4 justify-center p-10 hover:shadow-borderLike rounded-2xl min-h-[15vh] transition ease-in-out duration-300">
				<div className="flex gap-2  text-blue-700">
					<MdHealthAndSafety className="mt-1 text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl" />
					<h1 className="font-serif text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl">
						سلامتی محیط
					</h1>
				</div>
				<p className="text-md sm:text-xl md:text-2xl px-3 text-gray-700 max-w-[80%]">
					حفظ محیط زیست، اولویت کاسپین شیمی پاسارگاد
				</p>
			</div>
			<div className="min-w-[100%] min-[1400px]:basis-0 lg:min-w-[25%] lg:max-w-[50%] min-[1920px]:min-w-[25%] min-[1920px]:max-w-[25%] flex flex-col gap-4 justify-center p-10 hover:shadow-borderLike rounded-2xl min-h-[15vh] transition ease-in-out duration-300">
				<div className="flex gap-2  text-blue-700">
					<AiFillSafetyCertificate className="mt-1 text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl" />
					<h1 className="font-serif text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl">
						ایمنی فرآیند
					</h1>
				</div>
				<p className="text-md sm:text-xl md:text-2xl px-3 text-gray-700 max-w-[80%]">
					استقرار سیستم مدیریت ایمنی فرآیند با رویکرد جامع
				</p>
			</div>
			<div className="min-w-[100%] min-[1400px]:basis-0 lg:min-w-[25%] lg:max-w-[50%] min-[1920px]:min-w-[25%] min-[1920px]:max-w-[25%] flex flex-col gap-4 justify-center p-10 hover:shadow-borderLike rounded-2xl min-h-[15vh] transition ease-in-out duration-300">
				<div className="flex gap-2  text-blue-700">
					<FaCanadianMapleLeaf className="mt-1 text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl" />
					<h1 className="font-serif text-xl sm:text-2xl md:text-3xl min-[1920px]:text-4xl">
						نوآوری
					</h1>
				</div>
				<p className="text-md sm:text-xl md:text-2xl px-3 text-gray-700 max-w-[80%]">
					آغاز به کار مرکز نوآوری کاسپین شیمی پاسارگاد
				</p>
			</div>
			<div className="min-w-[100%] min-[1400px]:basis-0 lg:min-w-[25%] lg:max-w-[50%] min-[1920px]:min-w-[25%] min-[1920px]:max-w-[25%] flex flex-col gap-4 justify-center p-10 hover:shadow-borderLike rounded-2xl min-h-[15vh] transition ease-in-out duration-300">
				<div className="flex gap-2  text-blue-700">
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
