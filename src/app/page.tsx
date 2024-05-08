"use client";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import First from "./components/first";
import Header from "./components/header";
import Features from "./components/features";
import About from "./components/about";
import Events from "./components/events";
import WorkShops from "./components/workshops";
import FAQ from "./components/faq";
import Contact from "./components/contact";
import Footer from "./components/footer";
import { Link } from "react-scroll";
import { TiArrowUpThick } from "react-icons/ti";
import { ScaleLoader } from "react-spinners";

export default function Page() {
  const [showArrow, setShowArrow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.innerWidth > 420) {
        if (window.scrollY > 600) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      } else {
        if (window.scrollY > 400) {
          setShowArrow(true);
        } else {
          setShowArrow(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="bg-[#0c0c0c] text-main relative">
        <Header />
        <div className="grid lg:gap-28 gap-6 lg:p-12 lg:px-20 p-4">
          <First />
          <Features />
          <About />
          <Events />
          <WorkShops />
          <FAQ />
          <Contact />
          <AnimatePresence>
            {showArrow && (
              <motion.div
                key="arrow"
                initial={{ x: 50 }}
                animate={{ x: 0 }}
                exit={{ x: 60 }}
                transition={{ duration: 0.2 }}
                className="fixed bottom-12 lg:bottom-32 right-4 lg:right-6 bg-secondary shadow-lg rounded-full text-white"
              >
                <Link
                  to="header"
                  className="cursor-pointer lg:w-10 w-8 h-8 lg:h-10 flex items-center justify-center"
                  duration="300"
                  smooth
                >
                  <TiArrowUpThick />
                </Link>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
        <Footer />
      </div>
    </>
  );
}
