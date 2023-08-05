"use client";
import NavSheet from "./NavSheet";
import { BiSearch } from "react-icons/bi";
import Icon from "./Icon";
import NavItems from "./NavItemReverse";
export default function NavMenu() {
  return (
    <>
      <header className="invisible min-[941px]:visible">
        <NavItems/>
        <div className="text-white flex items-center gap-3">
          <Icon href={"/en"} children={"EN"} />
          <Icon href={"/search"} children={<BiSearch />} />
        </div>
      </header>
      <NavSheet />
    </>
  );
}
