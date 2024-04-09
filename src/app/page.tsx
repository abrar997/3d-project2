"use client";
import First from "./components/first";
import Header from "./components/header";
import Features from "./components/features";
// import About from "./components/about";

export default function Page() {
  return (
    <div className="bg-[#0c0c0c]  relative">
      <Header />
      <div className="grid lg:gap-16 gap-4 text-main lg:p-12 p-4">
        <First />
        <Features />
        {/* <About /> */}
      </div>
    </div>
  );
}
