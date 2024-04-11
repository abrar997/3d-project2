"use client";
import First from "./components/first";
import Header from "./components/header";
import Features from "./components/features";
import About from "./components/about";
import Events from "./components/events";
import WorkShops from "./components/workshops";
import FAQ from "./components/faq";
import Contact from "./components/contact";

export default function Page() {
  return (
    <div className="bg-[#0c0c0c]">
      <Header />
      <div className="grid lg:gap-28 gap-12 text-main lg:p-12 lg:px-20 p-4">
        <First />
        <Features />
        <About />
        <Events />
        <WorkShops />
        <FAQ />
        <Contact />
      </div>
    </div>
  );
}
