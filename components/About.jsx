export default function About() {
  return (
    <div className="w-full min-h-[60vh] bg-[url('../public/oilslide1.jpg')] bg-no-repeat bg-cover bg-fixed">
      <div className="bg-gradient-to-b from-orange-600/75 lg:from-10% from-5%  py-12 lg:py-8 min-h-[60vh] to-white/75 to-100% w-full h-full shadow-sm shadow-gray-500 flex flex-wrap justify-center items-center gap-3">
        <div className="lg:w-1/3 w-10/12">
          <div className=" mb-8 flex flex-col gap-8">
            <h1 className="text-white text-3xl font-semibold">درباره ما</h1>
            <p className="text-xl text-white">
              ما در شرکت پترو پالایش کاسپین شیمی پاسارگاد با استفاده از بهترین
              تجهیزات و رعایت جدید ترین موارد ایمنی بهترین خدمات را به مشتریان
              خود ارائه میدهیم.
            </p>
            <p className="text-xl text-white">
              ما در شرکت پترو پالایش کاسپین شیمی پاسارگاد با استفاده از بهترین
              تجهیزات و رعایت جدید ترین موارد ایمنی بهترین خدمات را به مشتریان
              خود ارائه میدهیم.
            </p>
          </div>
        </div>
        <div className="lg:w-1/3 w-10/12">
          <div className="lg:h-96 h-72 bg-purple-300 rounded-xl flex justify-center items-center shadow-borderLike">xd</div>
        </div>
      </div>
    </div>
  );
}
