import AboutSectionOne from "@/components/About/AboutSectionOne";
//import AboutSectionTwo from "@/components/About/AboutSectionTwo";
//import Blog from "@/components/Blog";
//import Brands from "@/components/Brands";
import ScrollUp from "@/components/Common/ScrollUp";
//import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
//import Pricing from "@/components/Pricing";
//import Testimonials from "@/components/Testimonials";
//import Video from "@/components/Video";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Snowsy | Delivering high-impact software solutions for a better tomorrow.",
  description: "Snowsy is a Sydney-based software startup dedicated to crafting innovative and impactful digital solutions that drive progress and make a positive difference in the world. It focuses on delivering high-quality software for the underserved market and communities.",
  keywords: [
    "Snowsy",
    "software development",
    "digital solutions",
    "Sydney software startup",
    "innovative software",
    "high-impact software",
    "technology solutions",
    "software for underserved communities",
    "custom software development",
    "software services",
    "landing page",
    "web development",
    "mobile app development",
    "software consulting",
    "tech startup Sydney",
    "idea to MVP",
    "software innovation",
    "business software solutions",
    "software for social good",
  ],
};

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <AboutSectionOne />
      <Features />

      {/*
      <Video />
      <Brands />
      <AboutSectionTwo />
      <Testimonials />
      <Pricing />
      <Blog />
      <Contact />
      */}
    </>
  );
}
