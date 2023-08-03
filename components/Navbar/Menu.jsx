"use client";
import NavSheet from "./NavSheet";
import MenuLink from "./MenuLink";
export default function NavMenu() {
  const NavContent = [
    { head: "صفحه اصلی", href: "/", subLinks: "none" },
    {
      head: "درباره ما",
      href: "none",
      subLinks: [
        { head: "lol", href: "lol" },
        { head: "doroste", href: "doroste" },
      ],
    },
    {
      head: "محصولات و فناوری",
      href: "none",
      subLinks: [
        { head: "lol", href: "lol" },
        { head: "doroste", href: "doroste" },
      ],
    },
    {
      head: "خلق ارزش",
      href: "none",
      subLinks: [
        { head: "lol", href: "lol" },
        { head: "doroste", href: "doroste" },
      ],
    },
    {
      head: "تامین کنندگان و مشتریان",
      href: "none",
      subLinks: [{ head: "lol", href: "lol" }],
    },
    { head: "ارتباط با ما", href: "/about-us", subLinks: "none" },
  ];
  return (
    <div className="flex items-center lg:flex-none">
      <NavSheet />
      <div className="lg:flex items-center gap-5 hidden">
        {
            NavContent.map((content, index) => (
              <MenuLink key={index} head={content.head} href={content.href} content={content.subLinks}/>)
            )
          }
      </div>
    </div>
  );
}
