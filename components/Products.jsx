import Link from "next/link";
import { BsArrowLeft } from "react-icons/bs";
import { Button } from "./ui/button";
export default function Products() {
	return (
		<>
			<div className="container min-w-[80vw]">
				<div className="mt-24">
					<div className="flex flex-col items-end gap-10">
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
						<h1 className="text-6xl text-orange-500">روغن</h1>
						<p className="text-3xl py-10 leading-loose">
							{" "}
							روغن موتور مایعی است که وظیفه دارد اصطکاک و سایش بین قطعات موتور
							خودروی شما را از بین ببرد
						</p>
						<Link href="#" className="py-2">
							<Button
								variant="destructive"
								className="bg-orange-500 text-3xl p-8 hover:bg-orange-400"
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
						<h1 className="text-6xl text-indigo-700">هیدروکربن</h1>
						<p className="text-3xl py-10 leading-loose">
							{" "}
							هیدروکربن‌ها برای تولید الیاف‌ها، حلال‌ها، لاستیک‌ها، پلاستیک‌ها،
							و مواد شیمیایی صنعتی استفاده می‌شوند
						</p>
						<Link href="#" className="py-2">
							<Button
								variant="destructive"
								className="bg-indigo-700 text-3xl p-8 hover:bg-indigo-500"
							>
								ادامه مطلب
							</Button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
