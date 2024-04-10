"use client";
import First from "./components/first";
import Header from "./components/header";
import Features from "./components/features";
import About from "./components/about";
import News from "./components/news";

export default function Page() {
  return (
    <div className="bg-[#0c0c0c]">
      <Header />
      <div className="grid lg:gap-28 gap-12 text-main lg:p-12 lg:px-20 p-4">
        <First />
        <Features />
        <About />
        <News />
      </div>
    </div>
  );
}
