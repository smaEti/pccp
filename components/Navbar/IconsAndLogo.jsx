import logo from "@/public/logo.png";
import logoText from "@/public/logo-text.png";
import { FaLinkedinIn, FaTelegramPlane } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import Icon from "@/components/Navbar/Icon";
import Image from "next/image";
import Link from "next/link";
export default function IconsAndLogo() {
  const icons = [[<FaLinkedinIn />,'/'], [<FaTelegramPlane />,'/'], [<BsInstagram />,'/']];

  return (
    <div className="md:flex justify-between items-center">
      <Link href={'/'}>
        <ul className="flex items-center justify-center">
          <Image
          priority={true}
            src={logo}
            width={35}
            height={35}
            alt="شرکت پترو پالایش کاسپین شیمی پاسارگاد"
          />
          <Image
          priority={true}
            src={logoText}
            width={140}
            height={60}
            className="pt-3"
            alt="شرکت پترو پالایش کاسپین شیمی پاسارگاد"
          />
        </ul>
      </Link>
      <ul className="hidden md:flex items-center justify-center gap-3 text-white">
        {icons.map((icon, index) => (
          <Icon key={index} children={icon[0]} href={icon[1]}/>
        ))}
      </ul>
    </div>
  );
}
