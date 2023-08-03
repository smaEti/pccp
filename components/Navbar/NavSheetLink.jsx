import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion";
import Link from "next/link"
export default function NavSheetLink({ head, href ,content}) {
    return (
        <>
        {
            content == 'none' ? 
            <Link
            href={href}
            className=" hover:text-orange-600"
            >
            {head}
          </Link> : <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>{head}</AccordionTrigger>
            <AccordionContent className="text-lg">
              XD
            </AccordionContent>
          </AccordionItem>
        </Accordion>

}
</>
        )
}