import Hero from "@/components/Hero";
import Rooms from "@/components/Rooms";

import Access from "@/components/Access";
import BasicInfo from "@/components/BasicInfo";
import Recommended from "@/components/Recommended";

export default function Home() {
  return (
    <>
      <Hero />
      <Recommended />
      <Rooms />

      <Access />
      <BasicInfo />
    </>
  );
}
