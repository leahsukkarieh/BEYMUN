import ScrollUp from "@/components/Common/ScrollUp";
import DatesVenue from "@/components/DatesVenue";
import HomeContent from "@/components/HomeContent";
import Theme from "@/components/Theme";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "BEYMUN",
  description: "This is the Home Page",
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <HomeContent />
      <DatesVenue />
      <Theme />  
    </>
  );
}
