
import CarouselComponent from "@/components/ui/Carousel";
import Intro from "@/components/Intro";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import News from "@/components/News/News";

export default function Home() {
	return (
		<div>
			<CarouselComponent />
			<Intro />
			<Products />
			<News />
			<Sustainability />
		</div>
	);
}
