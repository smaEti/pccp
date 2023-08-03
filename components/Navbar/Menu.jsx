"use client";
import NavSheet from "./NavSheet";
import MenuLink from "./MenuLink";
import { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
import Icon from "./Icon";
import Link from "next/link";
export default function NavMenu() {
  const [isShown, setIsShown] = useState(false);
  const [data, setData] = useState();
  useEffect(() => {
    console.log(data);
  }, [isShown]);
  const NavContent = [
    { head: "صفحه اصلی", href: "/", subLinks: "none" },
    {
      head: "درباره ما",
      href: "none",
      subLinks: [
        { head: "درباره شرکت گوه", href: "lol" },
        { head: "ریدم تو شرکت", href: "doroste" },
      ],
    },
    {
      head: "محصولات و فناوری",
      href: "none",
      subLinks: [
        { head: "خیار", href: "lol" },
        { head: "موز", href: "doroste" },
      ],
    },
    {
      head: "خلق ارزش",
      href: "none",
      subLinks: [
        { head: "ارزشی ندارد", href: "lol" },
        { head: "doroste", href: "doroste" },
      ],
    },
    {
      head: "تامین کنندگان و مشتریان",
      href: "none",
      subLinks: [{ head: "ممد سوپلایر", href: "lol" }],
    },
    { head: "ارتباط با ما", href: "/about-us", subLinks: "none" },
  ];
  const mountedStyle = { animation: "inAnimation 200ms ease-in" };
  const unmountedStyle = {
    animation: "outAnimation 200ms ease-out",
    animationFillMode: "forwards"
  };
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
              hoverFunc={setIsShown}
              setData={setData}
            />
          ))}
        </div>

        <div className="text-white flex items-center gap-3">
          <Icon href={"/en"} children={"EN"} />
          <Icon href={"/search"} children={<BiSearch />} />
        </div>
        {/* {isShown && ( */}
          <div
            className=" bg-white top-[38px] w-full p-8 absolute z-10 rounded-lg" style={isShown ? mountedStyle : unmountedStyle}
            onMouseEnter={() => {
              setIsShown(true);
            }}
            onMouseLeave={() => {
              setIsShown(false);
            }}
          >
            <div>
              {data?.map((content, index) => (
                <div>
                  <Link key={index} href={content.href}>
                    {content.head}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        {/* )} */}
      </div>

      <NavSheet />
    </>
  );
}
