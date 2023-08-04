"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Portal } from "@radix-ui/react-portal";
export default function Sustainability() {
	return (
		<div className="mt-32 bg-[url('../public/sustainability.jpg')] w-full bg-no-repeat bg-cover">
			<div className="bg-gradient-to-r from-blue-600/75 to-green-600/25">
				<div className="pt-20 text-white flex flex-col items-center gap-20 text-center">
					<h1 className="text-7xl font-serif font-bold">پایداری</h1>
				</div>
				<Tabs
					defaultValue="health"
					className="text-center pb-20"
				>
					<div className="pt-40">
						<div className="w-2/3 mx-auto">
							<TabsContent
								value="health"
								className="text-6xl text-white mb-60 leading-loose font-serif"
							>
								شرکت پتروپالایش کاسپین شیمی پاسارگاد بارها موفق به کسب جایزه
								صنعت سبز شده است
							</TabsContent>
						</div>
						<div className="w-2/3 mx-auto">
							<TabsContent
								value="safety"
								className="text-6xl text-white mb-60 leading-loose font-serif"
							>
								کاسپین شیمی پاسارگاد با توجه به نقش مهم و حیاتی ایمنی فرآیند،
								نسبت به استقرار سیستم مدیریت ایمنی فرآیند اقدام نموده است
							</TabsContent>
						</div>
						<div className="w-2/3 mx-auto">
							<TabsContent
								value="innovation"
								className="text-6xl text-white mb-60 leading-loose font-serif"
							>
								مرکز نوآوری و دانش بنیان کاسپین شیمی پاسارگاد به‌ عنوان یک واحد
								مستقل، فعالیت خود را شروع نموده است
							</TabsContent>
						</div>
						<div className="w-2/3 mx-auto">
							<TabsContent
								value="responsibility"
								className="text-6xl text-white mb-60 leading-loose font-serif"
							>
								بنابراین شرکت پلیمر آریاساسول علاوه بر ایفای تعهدات و الزامات
								قانونی محیط زیستی ، حمایت از آهوی جبیر در پارک ملی نایبند را از
								سال های گذشته شروع کرده است
							</TabsContent>
						</div>
					</div>
					<div className="flex gap-40 flex-wrap justify-center">
						<TabsList className="px-20 py-28 w-72 gap-20 bg-transparent border-2 border-white rounded-2xl shadow-2xl shadow-black">
							<TabsTrigger value="health" className="text-4xl py-2 text-white">
								سلامتی محیط زیست
							</TabsTrigger>
						</TabsList>
						<TabsList className="px-20 py-28 w-72 gap-20 shadow-2xl shadow-black bg-transparent border-2 border-white rounded-2xl">
							<TabsTrigger value="safety" className="text-4xl py-2 text-white">
								ایمنی فرآیند
							</TabsTrigger>
						</TabsList>
						<TabsList className="px-20 py-28 w-72 gap-20 shadow-2xl shadow-black bg-transparent border-2 border-white rounded-2xl">
							<TabsTrigger
								value="innovation"
								className="text-4xl py-2 text-white"
							>
								نوآوری
							</TabsTrigger>
						</TabsList>
						<TabsList className="px-20 py-28 w-72 gap-20 shadow-2xl shadow-black bg-transparent border-2 border-white rounded-2xl">
							<TabsTrigger
								value="responsibility"
								className="text-4xl py-2 text-white"
							>
								مسئولیت اجتماعی
							</TabsTrigger>
						</TabsList>
					</div>
				</Tabs>
			</div>
		</div>
	);
}
