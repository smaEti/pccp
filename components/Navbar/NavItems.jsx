import Link from "next/link";

export default function NavItems() {
    return (
        <nav className="navbar">
            <ul >
                <li>
                    <Link href="">صفحه اصلی</Link>
                </li>
                <li>
                    <Link href="">درباره شرکت</Link>
                    <ul>
                        <li>
                            <Link href="">شرکت در یک نگاه</Link>
                        </li>
                        <li>
                            <Link href="">تاریخچه شرکت</Link>
                        </li>
                        <li>
                            <Link href="">تاریخچه مدیریت</Link>
                        </li>
                        <li>
                            <Link href="">منابع انسانی</Link>
                        </li>
                        <li>
                            <Link href="">گواهینامه ها</Link>
                        </li>
                        <li>
                            <Link href="">چشم انداز</Link>
                        </li>
                        <li>
                            <Link href="">ماموریت و ارزش ها</Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="">محصولات و فناوری</Link>
                    <ul>
                        <li>
                            <Link href="">محصولات</Link>
                            <ul>
                                <li>
                                    <Link href="">بخش روغن</Link>
                                </li>
                                <li>
                                    <Link href="">بخش هیدروکربن</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="">فناوری</Link>
                            <ul>
                                <li>
                                    <Link href="">فناوری اطلاعات</Link>
                                </li>
                                <li>
                                    <Link href="">کنترل کیفیت</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="">پایداری</Link>
                    <ul>
                        <li>
                            <Link href="">زنجیره ارزش</Link>
                            <ul>
                                <li>
                                    <Link href="">مهندسی ارزش</Link>
                                </li>
                                <li>
                                    <Link href="">خلق ارزش برای مشتریان</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="">بهداشت و محیط زیست</Link>
                            <ul>
                                <li>
                                    <Link href="">بهداشت شغلی</Link>
                                </li>
                                <li>
                                    <Link href="">سیمای محیط زیست</Link>
                                </li>
                                <li>
                                    <Link href="">مسئولیت اجتماعی</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="">ایمنی</Link>
                            <ul>
                                <li>
                                    <Link href="">ایمنی فردی</Link>
                                </li>
                                <li>
                                    <Link href="">ایمنی رفتاری</Link>
                                </li>
                                <li>
                                    <Link href="">ایمنی فرایندی</Link>
                                </li>
                                <li>
                                    <Link href="">آموزش HSE</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="">آتش نشانی و مدیریت بحران</Link>
                            <ul>
                                <li>
                                    <Link href="">مدیریت شرایط اضطراری</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="">تامین کنندگان و مشتریان</Link>
                    <ul>
                        <li>
                            <Link href="">راهنمای خرید محصولات</Link>
                            <ul>
                                <li>
                                    <Link href="">فروش داخلی</Link>
                                </li>
                                <li>
                                    <Link href="">فروش صادراتی</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="">خدمات مشتریان</Link>
                            <ul>
                                <li>
                                    <Link href="">فرم شکایت</Link>
                                </li>
                                <li>
                                    <Link href="">فرم رضایت</Link>
                                </li>
                                <li>
                                    <Link href="">فرم نظرسنجی از مشتریان</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="">تامین کنندگان</Link>
                            <ul>
                                <li>
                                    <Link href="">فرم پیش ثبت نام</Link>
                                </li>
                                <li>
                                    <Link href="">نحوه ورود به فهرست منابع</Link>
                                </li>
                                <li>
                                    <Link href="">فرم ارزیابی رضایت تامین کنندگان</Link>
                                </li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link href="">ارتباط با ما</Link>
                </li>
            </ul>
        </nav>
    )
}