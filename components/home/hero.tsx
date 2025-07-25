"use client";
import Link from "next/link";
import { Button } from "../ui/button";
import { IoMdArrowDown } from "react-icons/io";
import { motion } from "motion/react";

export default function Hero() {
  return (
    <section
      className="flex w-full  relative bg-cover bg-center bg-no-repeat items-end justify-start px-6 sm:px-6 md:px-6 lg:px-20 xl:px-10 2xl:px-20  py-40 xl:py-46 "
      style={{
        backgroundImage: "url('/home/62635.jpg')",
      }}
    >
      {/* Enhanced Gradient Overlay with vignette */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-black/40 to-black/0 z-0" />
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{ boxShadow: "inset 0 0 120px 20px rgba(52, 78, 65, 0.25)" }}
      />
      <div className="relative z-10 flex flex-col items-center sm:items-start justify-center sm:justify-center w-full h-full  pb-10 sm:pb-16 md:pb-20">
        <h1 className="font-cormorant text-4xl md:text-6xl font-medium text-[#f2f2f2] text-center sm:text-left drop-shadow-lg mb-2">
          Avenue de Fleurs
        </h1>

        <span
          className="block w-16 h-1 bg-[#a3b18a] rounded-full mb-4 mx-auto sm:mx-0"
          aria-hidden="true"
        />
        <p className="font-rosarivo text-lg md:text-xl text-white text-center sm:text-left max-w-lg mb-8 drop-shadow">
          Beautiful bouquets and unique decor to make every moment
          unforgettable.
        </p>
        <div className="flex  flex-col sm:flex-row gap-4 items-center sm:items-center justify-center sm:justify-start">
          <Button
            className="bg-[#a3b18a] uppercase cursor-pointer text-[#f2f2f2] hover:bg-[#a3b18a]/90 font-cormorant text-lg px-8 py-3 rounded-xs shadow-lg transition-transform duration-200 transform focus:outline-none focus:ring-2 focus:ring-[#a3b18a] focus:ring-offset-2"
            size="lg"
          >
            Shop now
          </Button>
          <Link
            href="#gallery"
            className="relative group font-rosarivo text-base md:text-lg text-[#f2f2f2]  transition-colors duration-200"
            aria-label="View Gallery"
          >
            View Gallery
            <span
              className="absolute left-0 right-0 -bottom-1 h-[1px] rounded bg-white transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10">
        <motion.p
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
          className="text-white text-2xl"
        >
          <IoMdArrowDown />
        </motion.p>
      </div>
    </section>
  );
}
