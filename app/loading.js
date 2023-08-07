import Image from "next/image";
import logo from "@/public/logo.png";

export default function Loading() {
    return (
        <div className="h-screen w-screen flex justify-center items-center animate-bounce gap-5 ltr">
            <h1 className="text-orange-600 text-2xl font-semibold">Loading</h1>
            <Image
          priority={true}
            src={logo}
            width={35}
            height={35}
            alt="شرکت پترو پالایش کاسپین شیمی پاسارگاد"
          />
        </div>
    )
}