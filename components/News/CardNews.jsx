const CardNews = () => {
  return (
    <div className="w-64 h-96 bg-white rounded-lg shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 flex flex-col justify-between">
      <img
        src='/share-bazi.png'
        alt='lmao'
        className="w-full h-1/2 object-cover rounded-t-xl"
      />
      <div className="p-4 flex flex-col justify-between h-1/2">
        <div className="text-right">
          <h3 className="text-lg font-semibold">موضوع</h3>
          <p className="text-sm text-gray-500 mt-2">امروز در کاسپین شیمی اتفاقات جالبی افتاد.</p>
        </div>
        <div>
          <span className="text-xs float-right text-gray-400 mt-3">1394/2/5</span>
          <button
            class="rounded-lg bg-blue-500 py-2 float-left px-6 text-xs font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
            data-ripple-light="true"
          >
            مشاهده
          </button>
        </div>
      </div>

    </div>
  );
};

export default CardNews;
