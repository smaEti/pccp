
export default function Intro() {
  return (
    <section className="lg:max-w-[80vw] mx-auto flex flex-col justify-center items-center mt-32 mb-36">
      <div class="inline-flex items-center justify-center w-full lg:mb-12">
        <hr class="xl:w-[50vw] w-[80vw] h-[3px] mt-10 mb-16 xl:my-8 bg-gray-200 border-0 dark:bg-gray-800 text-2xl" />
        <span class="absolute text-center px-3 font-semibold text-4xl text-blue-700  -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
          شعار شرکت پتروپالایش کاسپین شیمی پاسارگاد
        </span>
      </div>
      <div className="max-w-[60vw] min-h-[50vh] flex shadow-custom mt-14">
        <div className="lg:w-1/2"><img src="/oilslide2.jpg" className="h-full" alt="pccp" /></div>
        <div className="lg:w-1/2">matn</div>
      </div>
    </section>
  );
}
