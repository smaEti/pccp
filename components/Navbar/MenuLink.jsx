import Link from "next/link";

export default function MenuLink({ head, href ,content}) {

  return (
    <div className="group">

      <Link
        href={href == 'none' ? '' : href}
        className="p-1 px-2 rounded-2xl bg-white bg-opacity-0 hover:bg-opacity-70 text-white hover:text-orange-600"
        >
        {head}
      </Link>
      {
        content == 'none' ? '' :
        <div className="hidden bg-white top-[135px] absolute z-10 rounded-lg group-hover:block hover:block hover:transition ease-in-out delay-150">
          {content.map((subLinks, index) => (
            <div className="p-4">
            <Link href={subLinks.href} key={index} >{subLinks.head}</Link>
            </div>
          ))}
        </div>
      }
          </div>
  );
}
