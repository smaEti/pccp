import Link from "next/link";

const NewsCard = ({ data }) => {
  return (
    <div className="max-[320px]:h-[12rem] h-[18rem] xl:w-[22rem] lg:w-[19rem] lg:h-[20rem] md:w-[14rem] md:h-[23rem] max-[768px]:w-[17rem] bg-white rounded-b-lg rounded-t-lg min-[320px]:rounded-t-3xl min-[320px]:rounded-b-3xl shadow-lg hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col duration-300">
      <img
        src={data.imageUrl}
        alt={data.id}
        className="w-full object-fill h-1/2 rounded-t-lg min-[320px]:rounded-t-3xl"
      />
      <div className="p-3 pt-1 max-[768px]:pt-0 flex flex-col justify-between h-1/2 rounded-b-lg min-[320px]:roudned-b-3xl">
        <div>
          <h3 className="text-md max-[320px]:text-xs font-black pt-2">{data.title}</h3>
          <p className="text-sm max-[320px]:text-[0.60rem] text-gray-500 pt-1 truncate">{data.content}</p>
        </div>
        <div>
          <span className="text-xs max-[320px]:text-[0.60rem] float-right text-gray-400 mt-2">{data.date}</span>
          <Link href={data.url}>
            <button
              className="rounded-3xl bg-blue-500 py-[0.25rem] float-left px-6 text-sm font-bold text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="true"
            >
              مشاهده
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
