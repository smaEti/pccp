
import SeparatorClient from "./Seperator-client";
import NavMenu from "./Menu";
import IconsAndLogo from "./IconsAndLogo";
export default function Navbar() {
  return (
    <nav className="xl:container xl:px-32 lg:px-10 lg:mt-2 mt-1 lg:block">
      <IconsAndLogo />
      <SeparatorClient />
      <NavMenu />
    </nav>
  );
}
