"use client";
import NavSheet from "./NavSheet";
import MenuLink from "./MenuLink";
import { BiSearch } from "react-icons/bi";
import Icon from "./Icon";
import Link from "next/link";
export default function NavMenu() {
  return (
    <>
      <header className=" invisible md:visible">
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
        <div className="text-white flex items-center gap-3">
          <Icon href={"/en"} children={"EN"} />
          <Icon href={"/search"} children={<BiSearch />} />
        </div>
      </header>
      <NavSheet/>
    </>
  );
}
