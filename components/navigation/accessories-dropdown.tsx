"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";

const AccessoriesData = [
  {
    id: 1,
    title: "Wedding Bouquets",
    url: "#",
    src: "/accessories/peonies.jpeg",
  },
  {
    id: 2,
    title: "Candles",
    url: "#",
    src: "/accessories/candles.jpeg",
  },
  {
    id: 3,
    title: "Christening Decorations",
    url: "#",
    src: "/accessories/20116.jpg",
  },
  {
    id: 4,
    title: "Ceremonial Trays",
    url: "#",
    src: "/accessories/9634.jpg",
  },
  {
    id: 5,
    title: "Vases",
    url: "#",
    src: "/accessories/7804.jpg",
  },
];

export default function AccessoriesDropdown() {
  return (
    <div>
      <h3 className="font-medium tracking-wide text-3xl mb-4 text-gray-900 font-playfair">
        Accessories
      </h3>
      <div className="flex justify-between w-full h-76 gap-4">
        {AccessoriesData.map((item) => {
          return (
            <motion.div
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.5,
                  delay: 0.2 * item.id,
                  ease: "easeOut",
                },
              }}
              key={"card" + item.id}
            >
              <Link href={item.url} className="relative group">
                <Image
                  src={item.src}
                  width={500}
                  height={500}
                  alt={item.title}
                  className="object-cover w-auto h-full aspect-square"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
                <span className="absolute bottom-2 left-2 text-[#f2f2f2] font-medium text-2xl font-playfair z-10">
                  {item.title}
                  <span className="block absolute left-0 -bottom-1 h-[2px] w-full bg-[#f2f2f2] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100"></span>
                </span>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
