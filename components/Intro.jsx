export default function Intro() {
	return (
	  <div className="w-full h-screen flex items-center mt-72 lg:mt-32">
	  {/* container div */}
	  <div className=" bg-gradient-to-t from-indigo-600/90 from-10%  to-rose-600/90 to-100% w-full relative flex justify-center shadow-sm shadow-gray-500">
		{/* wrapper */}
		<div className="lg:flex justify-center xl:gap-5 lg:gap-1 py-28 px-12 lg:px-0">
		  <div className="xl:w-[600px] lg:w-[500px] mb-8">
			<h1 className="text-white text-3xl font-semibold">درباره ما</h1>
			<p className="text-xl">
			  ما در شرکت پترو پالایش کاسپین شیمی پاسارگاد با استفاده از بهترین
			  تجهیزات و رعایت جدید ترین موارد ایمنی بهترین خدمات را به مشتریان
			  خود ارائه میدهیم.
			</p>
			<p className="text-xl">
			  ما در شرکت پترو پالایش کاسپین شیمی پاسارگاد با استفاده از بهترین
			  تجهیزات و رعایت جدید ترین موارد ایمنی بهترین خدمات را به مشتریان
			  خود ارائه میدهیم.
			</p>
		  </div>
		  <div className="xl:w-[600px] lg:w-[500px]">
			<div className="xl:w-[600px] lg:w-[500px] sm:h-96 h-72 lg:absolute bg-orange-200 lg:top-[-170px] rounded-3xl z-[2] shadow-lg shadow-slate-700">
			  {/* fake data start */}
			  <div className="flex justify-center items-center w-full h-full">
				<h1>CLIP</h1>
			  </div>
			  {/* fake data end  */}
			</div>
		  </div>
		</div>
		<div className="absolute lg:w-1/2 sm:w-5/6 w-full h-40 z-10 bottom-[-90px] p-7 rounded-3xl shadow-lg shadow-gray-500 bg-white">
		  {/* fake data start */}
		  <div className="w-full h-full flex justify-center items-center">
			DATA
		  </div>
		  {/* fake data end */}
		</div>
	  </div>
	</div>
	);
  }