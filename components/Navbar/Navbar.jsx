
import SeparatorClient from "./Seperator-client";
import NavMenu from "./Menu";
import IconsAndLogo from "./IconsAndLogo";
export default function Navbar() {
  return (
    <nav className=" xl:container xl:px-32 md:px-10 md:mt-2 mt-1 md:block  absolute top-0 right-0 left-0">
      <IconsAndLogo />
      <SeparatorClient />
      <NavMenu />
    </nav>
  );
}
