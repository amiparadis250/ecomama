import Blogs from "@/components/hubs";
import Hero from "@/components/hero-section";
import WhyChooseUs from "@/components/why-choose-us";


export default function Home() {
  return (
    <div className="font-[family-name:var(--font-geist-sans)]">
      <Hero />
      <WhyChooseUs />
      <Blogs />
     
    </div>
  );
}
