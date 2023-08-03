import Link from "next/link";

export default function MenuLink({ head, href, content, hoverFunc, setData }) {
  return (
    <div
      className="group"
      onMouseEnter={() => {
        if (content != "none") {
          hoverFunc(true);
          setData(content);
        }else{
          hoverFunc(false);
        }
      }}
      // onMouseLeave={() => hoverFunc(false)}
    >
      <Link
        href={href == "none" ? "" : href}
        className="p-1 px-2 rounded-lg bg-white bg-opacity-0 hover:bg-opacity-30 text-white hover:text-orange-500"
      >
        {head}
      </Link>
   
    </div>
  );
}
