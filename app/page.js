
import CarouselComponent from "@/components/ui/Carousel";
import About from "@/components/About";
import Intro from "@/components/Intro"
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";

export default function Home() {
	return (
		<div>
			<CarouselComponent />
			{/* <Intro /> */}
			<Products />
			<About />
			<Sustainability />
		</div>
	);
}
