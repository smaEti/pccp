import CarouselComponent from "@/components/ui/Carousel";
import About from "@/components/About";
import Products from "@/components/Products";
import Sustainability from "@/components/Sustainability";
import News from "@/components/News/News";
export default async function Home() {
  return (
    <>
        <CarouselComponent />
      <News />
      <Products />
      <About />
      <Sustainability />
    </>
  );
}
