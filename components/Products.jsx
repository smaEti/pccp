import Link from "next/link";
export default function Products() {
	return (
		<>
			<div className="container mt-24">
				<div className="flex flex-col items-end gap-10">
					<h2 className="text-5xl text-orange-600 border-b-4 border-spacing-2 border-orange-600 font-serif">
						محصولات
					</h2>
					<p className="text-3xl text-right leading-relaxed font-sans text-indigo-900">
						شرکت پتروپالایش کاسپین شیمی پاسارگاد به بهره مندی از امکانات روز و
						پیشرفته دنیا، سالانه 1,100,100 تن در واحد الفین، 375,000 تن پلی
						اتیلن سبک و 375,000 تن پلی اتیلن متوسط و سنگین در واحد های خود تولید
						می نماید
					</p>
				</div>
			</div>
			<div className="mt-32 flex flex-col gap-20">
				<div className="flex flex-col items-center gap-32 lg:flex-row lg:justify-center">
					<div className="flex flex-col items-center gap-10">
						<Link href="#" className="text-center">
							<div className="w-80 h-80">
								<img
									src="polyethylene.png"
									alt=""
									className="rounded-xl hover:border-4 hover:border-gray-700 w-full h-full"
								/>
							</div>
							<div>
								<h1 className="text-4xl text-orange-700 border-b-2 border-spacing-y-8 border-orange-700 font-serif hover:border-blue-500 hover:text-indigo-900 py-5">
									پلی اتیلن سبک
								</h1>
							</div>
						</Link>
					</div>
					<div className="flex flex-col items-center gap-10">
						<Link href="#" className="text-center">
							<div className="w-80 h-80">
								<img
									src="polyethylene3.jpg"
									alt=""
									className="rounded-xl hover:border-4 hover:border-gray-700 w-full h-full"
								/>
							</div>
							<div>
								<h1 className="text-4xl text-orange-700 border-b-2 border-spacing-y-8 border-orange-700 font-serif hover:border-blue-500 hover:text-indigo-900 py-5">
									پلی اتیلن متوسط
								</h1>
							</div>
						</Link>
					</div>
				</div>
				<div className="flex flex-col items-center gap-32 lg:flex-row lg:justify-center">
					<div className="flex flex-col items-center gap-10">
						<Link href="#" className="text-center">
							<div className="w-80 h-80">
								<img
									src="polyethylene4.webp"
									alt=""
									className="rounded-xl hover:border-4 hover:border-gray-700 w-full h-full"
								/>
							</div>
							<div>
								<h1 className="text-4xl text-orange-700 border-b-2 border-spacing-y-8 border-orange-700 font-serif hover:border-blue-500 hover:text-indigo-900 py-5">
									پلی اتیلن سنگین
								</h1>
							</div>
						</Link>
					</div>
					<div className="flex flex-col items-center gap-10">
						<Link href="#" className="text-center">
							<div className="w-80 h-80">
								<img
									src="polyethylene2.png"
									alt=""
									className="rounded-xl hover:border-4 hover:border-gray-700 w-full h-full"
								/>
							</div>
							<div>
								<h1 className="text-4xl text-orange-700 border-b-2 border-spacing-y-8 border-orange-700 font-serif hover:border-blue-500 hover:text-indigo-900 py-5">
									الفین
								</h1>
							</div>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
}
