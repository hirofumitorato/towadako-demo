import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Features from "@/components/Features";
import CircleNav from "@/components/CircleNav";
import Rooms from "@/components/Rooms";
import SurroundingMap from "@/components/SurroundingMap";
import Gallery from "@/components/Gallery";
import Access from "@/components/Access";
import BasicInfo from "@/components/BasicInfo";

export default function Home() {
  return (
    <>
      <Hero />
      <Concept />
      <Features />
      <CircleNav />
      <Rooms />
      <SurroundingMap />
      <Gallery />
      <Access />
      <BasicInfo />
    </>
  );
}
