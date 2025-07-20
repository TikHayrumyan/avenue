"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "motion/react";
import { Card, Carousel } from "../ui/card-carousel";

const ServicesData = [
  {
    id: 1,
    title: "Wedding Decorations",
    url: "#",
    src: "/services/wedding.jpeg",
  },
  {
    id: 2,
    title: "Christening Decorations",
    url: "#",
    src: "/services/christening.jpeg",
  },
  {
    id: 3,
    title: "Engagement Decorations",
    url: "#",
    src: "/services/engagement.jpeg",
  },
  {
    id: 4,
    title: "Birthday Decorations",
    url: "#",
    src: "/services/birthday.jpg",
  },
  {
    id: 5,
    title: "Corporate Event Decorations",
    url: "#",
    src: "/services/corporate.jpeg",
  },
];

export default function ServicesDropdown() {
  // Prepare cards for the Card/Carousel
  const cards = ServicesData.map((item) => (
    <Card
      key={item.src}
      card={{
        src: item.src,
        title: item.title,
        category: "Services",
      }}
    />
  ));

  return (
    <div>
      {/* Section Title for Mobile */}
      <h3 className="hidden lg:flex font-medium tracking-wide  lg:text-xl xl:text-3xl mb-4 text-[#344e41] font-playfair justify-start">
        Our Services
      </h3>
      {/* Mobile: Card Carousel (same as highlights) */}
      <div className="block lg:hidden relative">
        <Carousel items={cards} />
      </div>
      <div className="hidden lg:flex justify-between w-full  xl:h-86 gap-4 ">
        {ServicesData.map((item) => {
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
                <span className="absolute bottom-2 left-2 text-[#f2f2f2] font-medium  lg:text-lg xl:text-2xl font-playfair z-10">
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
