import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
export default function NavSheetLink({ head, href, content }) {
  let data = [];
  if (content != "none") {
    content.map((item) => {
      if (item.subLinks != "none") {
        Object.keys(item.subLinks).map((key) => {
          data = [item.subLinks[key], ...data];
        });
      }
    });
  }
  // console.log(data);
  return (
    <>
      {content == "none" ? (
        <Link href={href} className=" hover:text-orange-600">
          {head}
        </Link>
      ) : (
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{head}</AccordionTrigger>
            <AccordionContent className="text-md">
              <div className="flex flex-col gap-1">
                {content.map((item, index) =>
                  item.subLinks == "none" ? (
                    <Link
                      key={index}
                      href={item.href}
                      className="hover:text-orange-600"
                    >
                      {item.head}
                    </Link>
                  ) : (
                    <div key={index}>
                      <Link
                        href={item.href == "none" ? "" : item.href}
                        className="hover:text-orange-600"
                      >
                        {item.head}
                      </Link>
                      {index == 0 ? (
                        <div className="flex flex-col pr-10">
                          <Link href="lol" className="hover:text-orange-600">فروش داخلی</Link>
                          <Link href="lol" className="hover:text-orange-600">فروش صادراتی</Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {index == 2 ? (
                        <div className="flex flex-col pr-10">
                          <Link href="lol" className="hover:text-orange-600">فرم پیش ثبت نام</Link>
                          <Link href="lol" className="hover:text-orange-600">نحوه ورود به فهرست منابع</Link>
                          <Link href="lol" className="hover:text-orange-600">
                            فرم ارزیابی رضایت تامین کنندگان
                          </Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {index == 1 ? (
                        <div className="flex flex-col pr-10">
                          <Link href="lol" className="hover:text-orange-600">فرم شکایت</Link>
                          <Link href="lol" className="hover:text-orange-600">فرم رضایت</Link>
                          <Link href="lol" className="hover:text-orange-600">فرم ارائه پیشنهادات</Link>
                        </div>
                      ) : (
                        ""
                      )}
                      {/* ["فرم شکایت", "doroste"],
            ["فرم رضایت", "doroste"],
            ["فرم ارائه پیشنهادات", "doroste"], */}
                    </div>
                  )
                )}
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      )}
    </>
  );
}
//           <Accordion type="single" collapsible>
//   <AccordionItem value="item-1">
//     <AccordionTrigger>{item.head}</AccordionTrigger>
//     <AccordionContent className="text-md">
//       <div className="flex flex-col gap-1">

//       </div>
//     </AccordionContent>
//   </AccordionItem>
// </Accordion>
