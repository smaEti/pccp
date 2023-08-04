import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import logo from "../../public/logo.png";
import logoText from "@/public/logo-text.png";
import Image from "next/image";
import Icon from "@/components/Navbar/Icon";
import { GiHamburgerMenu } from "react-icons/gi";
import { DirectionProvider } from "@radix-ui/react-direction";
import NavSheetLink from "./NavSheetLink";
import Link from "next/link";
export default function NavSheet({ content }) {
  const icons = [
    [<FaLinkedinIn />, "/"],
    [<FaTelegramPlane />, "/"],
    [<BsInstagram />, "/"],
  ];

  return (
    <DirectionProvider dir="rtl">
      <Sheet>
        <SheetTrigger aria-controls="radix-:R1mcq:">
          {" "}
          <div className="md:hidden absolute top-7 right-4 text-white text-2xl">
            <GiHamburgerMenu />
          </div>
        </SheetTrigger>
        <SheetContent className=" sm:max-w-none w-full sm:w-[500px] p-0 overflow-scroll">
          <div className="w-full h-full flex-col justify-center items-center">
            <div className="bg-blue-700 h-2/6 flex justify-between items-center px-8 min-h-[200px]">
              <div className="flex flex-col items-center justify-between">
                <Image
                  src={logo}
                  width={45}
                  priority={true}
                  height={45}
                  alt="شرکت پترو پالایش کاسپین شیمی پاسارگاد"
                />
                <Image
                  src={logoText}
                  width={180}
                  height={70}
                  priority={true}
                  className="pt-3"
                  alt="شرکت پترو پالایش کاسپین شیمی پاسارگاد"
                />
              </div>
              <div className="flex flex-col items-center justify-center gap-3 text-white ">
                <Icon children={"EN"} href={"/en"} />
                {icons.map((icon, index) => (
                  <Icon key={index} children={icon[0]} href={icon[1]} />
                ))}
              </div>
            </div>
            <header>
              <nav className="navbar">
                <ul>
                  <li>
                    <Link href="">home</Link>
                  </li>
                  <li>
                    <Link href="">ali +</Link>
                    <ul>
                      <li>
                        <Link href="">posts</Link>
                      </li>
                      <li>
                        <Link href="">lol +</Link>
                        <ul>
                          <li>
                            <Link href="">html</Link>
                          </li>
                          <li>
                            <Link href="">css</Link>
                          </li>
                          <li>
                            <Link href="">js</Link>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="">behrad</Link>
                  </li>
                  <li>
                    <Link href="">amin</Link>
                  </li>

                  <li>
                    <Link href="">buddy +</Link>
                    <ul>
                      <li>
                        <Link href="">clown</Link>
                      </li>
                      <li>
                        <Link href="">deadInside</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link href="">reza -</Link>
                  </li>
                </ul>
              </nav>
            </header>
          </div>
        </SheetContent>
      </Sheet>
    </DirectionProvider>
  );
}
