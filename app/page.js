import Image from "next/image";
import CarouselComponent from "@/components/ui/Carousel";
import Intro from "@/components/Intro";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
export default function Home() {
	return (
		<div className="h-[5000px]">
			<CarouselComponent />
			<Intro/>
			<Products/>
			<Sustainability/>
		</div>
	);
}
