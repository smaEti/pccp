
import Image from "next/image";
import CarouselComponent from "@/components/ui/Carousel";
import Intro from "@/components/Intro";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
export default function Home() {
	return (
		<div>
			<CarouselComponent />
			<Intro/>
			<Products/>
			<Sustainability/> 
      {/* bug dare in bi pedar behraaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaad TODO: too gooshi scroll miad  */}
		</div>
	);
}
