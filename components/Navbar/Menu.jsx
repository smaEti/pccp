"use client";
import NavSheet from "./NavSheet";
import MenuLink from "./MenuLink";
import { BiSearch } from "react-icons/bi";
import Icon from "./Icon";
export default function NavMenu() {
  const NavContent = [
    { head: "صفحه اصلی", href: "/", subLinks: "none", subLinks: "none" },
    {
      head: "درباره ما",
      href: "none",
      subLinks: [
        { head: "شرکت در یک نگاه", href: "lol", subLinks: "none" },
        { head: "تاریخچه شرکت", href: "doroste", subLinks: "none" },
        { head: "تاریخجه مدیریت", href: "doroste", subLinks: "none" },
        { head: "منابع انسانی", href: "doroste", subLinks: "none" },
        { head: "گواهینامه ها", href: "doroste", subLinks: "none" },
        { head: "چشم انداز", href: "doroste", subLinks: "none" },
        { head: "ماموریت و ارزش ها", href: "doroste", subLinks: "none" },
      ],
    },
    {
      head: "فناوری",
      href: "none",
      subLinks: [
        { head: "فناوری اطلاعات", href: "lol", subLinks: "none" },
        { head: "کنترل کیفیت", href: "doroste", subLinks: "none" },
      ],
    },
    {
      head: "محصولات",
      href: "none",
      subLinks: [
        { head: "بخش روغن", href: "lol", subLinks: "none" },
        { head: "بخش هیدروکربن ها", href: "lol", subLinks: "none" },
      ],
    },
    {
      head: "خلق ارزش",
      href: "none",
      subLinks: [
        { head: "بهداشت شغلی", href: "lol", subLinks: "none" },
        { head: "سلامتی محیط زیست", href: "doroste", subLinks: "none" },
        { head: "ایمنی فردی", href: "doroste", subLinks: "none" },
        { head: "HSE", href: "doroste", subLinks: "none" },
        { head: "ایمنی فرآیندی", href: "doroste", subLinks: "none" },
        { head: "ایمنی رفتار", href: "doroste", subLinks: "none" },
        { head: "آموزش HSE", href: "doroste", subLinks: "none" },
        { head: "مسئولیت اجتماعی", href: "doroste", subLinks: "none" },
        {
          head: "آتش نشانی و مدیریت بحران (مدیریت شرایط اضطراری)",
          href: "doroste",
          subLinks: "none",
        },
      ],
    },
    {
      head: "تامین کنندگان و مشتریان",
      href: "none",
      subLinks: [
        {
          head: "راهنمای خرید محصولات",
          href: "none",
          subLinks: [
            ["فروش داخلی", "lol"],
            ["فروش صادراتی", "doroste"],
          ],
        },
        {
          head: "خدمات مشتریان",
          href: "none",
          subLinks: [
            ["فرم شکایت", "doroste"],
            ["فرم رضایت", "doroste"],
            ["فرم ارائه پیشنهادات", "doroste"],
          ],
        },
        {
          head: "تامین کنندگان",
          href: "none",
          subLinks: [
            ["فرم پیش ثبت نام", "doroste"],
            ["نحوه ورود به فهرست منابع", "doroste"],
            ["فرم ارزیابی رضایت تامین کنندگان", "doroste"],
          ],
        },
      ],
    },
    { head: "ارتباط با ما", href: "/about-us", subLinks: "none" },
  ];

  return (
    <>
      <div className="lg:flex relative max-w-full items-center justify-between lg:flex-none hidden ">
        <div className="lg:flex items-center gap-2">
          {NavContent.map((content, index) => (
            <MenuLink
              key={index}
              head={content.head}
              href={content.href}
              content={content.subLinks}
            />
          ))}
        </div>

        <div className="text-white flex items-center gap-3">
          <Icon href={"/en"} children={"EN"} />
          <Icon href={"/search"} children={<BiSearch />} />
        </div>
      </div>

      <NavSheet content={NavContent} />
    </>
  );
}
