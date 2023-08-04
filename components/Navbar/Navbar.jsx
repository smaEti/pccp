import SeparatorClient from "./Seperator-client";
import NavMenu from "./Menu";
import IconsAndLogo from "./IconsAndLogo";
export default function Navbar() {
  return (
    <nav className="w-full  xl:px-72 md:px-10 md:mt-2 mt-1 md:block  absolute top-0 right-0 left-0 z-50">
      <IconsAndLogo />
      <SeparatorClient />
      <NavMenu />
    </nav>
  );
}
