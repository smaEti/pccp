"use client";
import Link from "next/link";
export default function MenuLink({ head, href, content }) {
  // console.log(content)
  return (
    <>
      <div className="group/head">
        <Link
          href={href == "none" ? "" : href}
          className="p-1 px-2 rounded-lg  text-white hover:text-orange-500 h-7 group-hover/head:text-orange-500"
        >
          {head}
        </Link>
        {content == "none" ? (
          ""
        ) : (
          <div className="invisible opacity-0  hover:opacity-100 group-hover/head:opacity-100 bg-white hover:transition delay-100 duration-500 ease-in-out top-[30px] w-48 absolute z-10 hover:block group-hover/head:visible">
            {content?.map((item, index) => (
              <>
                <Link
                  key={index}
                  className="block hover:text-white  hover:bg-orange-500 p-2 group-hover/child:visible group/child"
                  href={item.href == "none" ? "" : item.href}
                >
                  {item.head}{" "}
                  {item.subLinks == "none" ? (
                    ""
                  ) : (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="0.625em"
                        viewBox="0 0 320 512"
                        className="inline"
                      >
                        <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z" />
                      </svg>
                      <div
                        key={index}
                        className="opacity-0 invisible  group-hover/child:opacity-100 group-hover/child:visible hover:visible w-48 bg-white absolute z-20 right-48 top-0 flex flex-col"
                      >
                        <Link
                          className="block text-black hover:text-white  hover:bg-orange-500 p-2 group-hover/child:visible"
                          href={"/xd"}
                        >
                          doroste
                        </Link>
                        <Link
                          className="block text-black hover:text-white  hover:bg-orange-500 p-2 group-hover/child:visible"
                          href={"/xd"}
                        >
                          doroste
                        </Link>
                        <Link
                          className="block text-black hover:text-white  hover:bg-orange-500 p-2 group-hover/child:visible"
                          href={"/xd"}
                        >
                          doroste
                        </Link>
                      </div>
                    </>
                  )}
                </Link>
              </>
            ))}
          </div>
        )}
      </div>
    </>
  );
}
