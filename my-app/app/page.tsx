import Benefits from "@/components/benefits";
import Brand from "@/components/brand";
import HeroSection from "@/components/heroSection";
import NewCeramics from "@/components/newCeramics";
import PopularProduct from "@/components/popularProduct";
import Touch from "@/components/touch";
import Image from "next/image";

export default function Home() {
  return (
   <div>
      <HeroSection />
      <Brand />
      <NewCeramics />
      <PopularProduct />
      <Benefits />
      <Touch />
   </div>
  );
}
