import Image from "next/image";
import hero from "@/code/components/Home/HomeHero";
import HomeHero from "@/code/components/Home/HomeHero";
import HomeInfo from "@/code/components/Home/HomeInfo";
import BestSellers from "@/code/components/Home/BestSellers/BestSellers";
import HomeReview from "@/code/components/Home/Reviews/HomeReview";
import Marquee, { MarqueeReverse } from "@/code/components/Home/Marquee";
export default function Home() {
  return (
    <div>
      <HomeHero/>
      <MarqueeReverse/>
      <BestSellers/>
      <HomeReview/>
      <HomeInfo/>
    </div>
  );
}
