import Link from "next/link"

export default function Icon({children,href}){
    return(
    <Link href={href}>
    <div className="flex justify-center items-center w-8 h-8 rounded-full bg-white bg-opacity-10 text-lg hover:text-orange-600  hover:scale-110">
        {children}
    </div>
    </Link>
    )
}