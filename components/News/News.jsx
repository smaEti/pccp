import NewsCard from './NewsCard';
import Image from 'next/image';
import oil from "@/public/oil.jpg";
import Link from 'next/link';

const fetchedItems = [
  {
    id: 1,
    imageUrl: '/oilslide1.jpg',
    title: 'موضوع',
    content: 'امروز در کاسپین شیمی اتفاقات جالبی افتا امروز در کاسپین شیمی اتفاقات جالبی افتاامروز در کاسپین شیمی اتفاقات جالبی افتا امروز در کاسپین شیمی اتفاقات جالبی افتاد.',
    date: '1396/6/2',
    url: '#'
  },
  {
    id: 2,
    imageUrl: '/oilslide2.jpg',
    title: 'سلام',
    content: 'امروز در کاسپین شیمی اتفاقات جالبی افتاد.',
    date: '1456/13/6',
    url: '#'
  },
  {
    id: 3,
    imageUrl: '/oilslide4.jpg',
    title: 'علی',
    content: 'امروز در کاسپین شیمی اتفاقات جالبی افتاد.',
    date: '5272/6/2',
    url: '#'
  },
  {
    id: 4,
    imageUrl: '/oilslide3.jpg',
    title: 'حسن',
    content: 'امروز در کاسپین شیمی اتفاقات جالبی افتاد.',
    date: '1396/51/2',
    url: '#'
  },
  {
    id: 5,
    imageUrl: '/shahre-bazi.png',
    title: 'اکبر',
    content: 'امروز در کاسپین شیمی اتفاقات جالبی افتاد.',
    date: '1396/6/15',
    url: '#'
  },
  {
    id: 6,
    imageUrl: '/shahre-bazi.png',
    title: 'وات د هل',
    content: 'امروز در کاسپین شیمی اتفاقات جالبی افتاد.',
    date: '1171/6/2',
    url: '#'
  },
  {
    id: 7,
    imageUrl: '/logo.png',
    title: 'کشته شد!',
    content: 'امروز در کاسپین شیمی اتفاقات جالبی افتاد.',
    date: '1396/6/2',
    url: '#'
  },
]

const News = () => {
  const showCards = [];
  for (let i = 0; i < 3; i++)
    showCards.push(fetchedItems[i])
  return (<>
    {/* // <div className="max-w-screen-xl mx-auto mt-6 px-10 grid grid-cols-1 min-[595px]:grid-cols-2 min-[1080px]:grid-cols-4 gap-11 justify-items-center">
    //   {fetchedItems.map((item) => (<CardNews data={item} />))}
    // </div>
    // <div className='mx-auto mt-4 px-4 xl:max-w-screen-xl flex flex-row justify-center gap-4 max-[850px]:flex-col'>
    //   <div className='flex flex-row justify-center gap-4 max-[430px]:flex-col max-[430px]:mx-auto'>
    //     <CardNews data={fetchedItems[0]} />
    //     <CardNews data={fetchedItems[1]} />
    //   </div>s
    //   <div className='flex flex-row justify-center gap-4 max-[430px]:flex-col max-[430px]:mx-auto'>
    //     <CardNews data={fetchedItems[2]} />
    //     <CardNews data={fetchedItems[3]} />
    //   </div>
    // </div> */}
    {/* header start */}
    <div class="inline-flex items-center justify-center w-full lg:mb-12 pt-20">
      <hr class="w-96 h-[3px] my-8 bg-gray-200 border-0 dark:bg-gray-800 text-2xl" />
      <span class="absolute  px-3 font-semibold text-4xl text-blue-700  -translate-x-1/2 bg-white left-1/2 dark:text-white dark:bg-gray-900">
        اخبار
      </span>
    </div>
    {/* header end */}
    <div className='flex flex-wrap md:flex-row gap-7 px-4 items-center justify-center max-w-screen-xl mx-auto mt-6'>
      {showCards.map((item) => (<div><NewsCard data={item} /></div>))}
    </div>
    {/* <div className=" py-8 flex  flex-wrap justify-center gap-10 lg:gap-20 mb-24">
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
    </div> */}

  </>
  );
};

export default News;
