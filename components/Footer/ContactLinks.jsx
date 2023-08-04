import React from 'react';
import Link from 'next/link';

function ContactLinks() {
  return (
    <div className="max-w-screen-xl mx-auto mb-2 mt-3 px-4 grid min-[600px]:grid-cols-2 min-[1200px]:grid-cols-4 gap-8 max-[900px]:text-lg">
      <div>
        <h3 className="text-lg mb-2 max-[900px]:text-xl text-white">دفتر مرکزی</h3>
        <p className="text-gray-200/70">آدرس: تهران، خیابان ولی عصر، بالاتر از خیابان ظفر، نبش خیابان شهید ناصری، پلاک <span dir='ltr'>2551</span>، برج کیان، طبقه هفتم</p>
        <p className="text-gray-200/70">کدپستی: <span dir='ltr'>1968643111</span></p>
        <p className="text-gray-200/70">صندوق پستی: <span dir='ltr'>15875-8393</span></p>
        <p className="text-gray-200/70">تلفن: <span dir='ltr'>+98 21 85920000</span></p>
        <p className="text-gray-200/70">نمابر: <span dir='ltr'>+98 21 88645199</span></p>
      </div>
      <div>
        <h3 className="text-lg mb-2 max-[900px]:text-xl text-white">دفتر مرکزی</h3>
        <p className="text-gray-200/70">آدرس: تهران، خیابان ولی عصر، بالاتر از خیابان ظفر، نبش خیابان شهید ناصری، پلاک <span dir='ltr'>2551</span>، برج کیان، طبقه هفتم</p>
        <p className="text-gray-200/70">کدپستی: <span dir='ltr'>1968643111</span></p>
        <p className="text-gray-200/70">صندوق پستی: <span dir='ltr'>15875-8393</span></p>
        <p className="text-gray-200/70">تلفن: <span dir='ltr'>+98 21 85920000</span></p>
        <p className="text-gray-200/70">نمابر: <span dir='ltr'>+98 21 88645199</span></p>
      </div>
      <div>
        <h3 className="text-lg mb-2 text-white">دسترسی سریع</h3>
        <ul>
          <li><Link href="#" className="text-gray-200/70 hover:text-gray-800 transition duration-300">محصولات</Link></li>
          <li><Link href="#" className="text-gray-200/70 hover:text-gray-800 transition duration-300">راهنمای خرید</Link></li>
          <li><Link href="#" className="text-gray-200/70 hover:text-gray-800 transition duration-300">دریافت نظرات مشتریان</Link></li>
          <li><Link href="#" className="text-gray-200/70 hover:text-gray-800 transition duration-300">کارجویان</Link></li>
          <li><Link href="#" className="text-gray-200/70 hover:text-gray-800 transition duration-300">ارسال شکایت</Link></li>
        </ul>
      </div>
      <div>
        <h3 className="text-lg mb-2 text-white">دسترسی سریع</h3>
        <ul>
          <li><Link href="#" className="text-gray-200/70 hover:text-gray-800 transition duration-300">محصولات</Link></li>
          <li><Link href="#" className="text-gray-200/70 hover:text-gray-800 transition duration-300">راهنمای خرید</Link></li>
          <li><Link href="#" className="text-gray-200/70 hover:text-gray-800 transition duration-300">دریافت نظرات مشتریان</Link></li>
          <li><Link href="#" className="text-gray-200/70 hover:text-gray-800 transition duration-300">کارجویان</Link></li>
          <li><Link href="#" className="text-gray-200/70 hover:text-gray-800 transition duration-300">ارسال شکایت</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default ContactLinks;
