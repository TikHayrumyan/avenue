"use client";

import React from "react";
import { Card, Carousel } from "../ui/card-carousel";

export function FlowersCarousel() {
  const cards = data.map((card) => <Card key={card.src} card={card} />);

  return (
    <div className="w-auto h-auto py-0">
      <Carousel items={cards} />
    </div>
  );
}

const data = [
  {
    category: "Collections",

    title: "Tulips brighten spring gardens.",
    src: "/highlights/1.jpg",
  },
  {
    category: "Collections",
    title: "Peonies glow in summer light",
    src: "/highlights/2.jpg",
  },
  {
    category: "Collections",
    title: "White roses whisper elegance.",
    src: "/highlights/5.jpg",
  },

  {
    category: "Collections",
    title: "Tulips add charm to spring.",
    src: "/highlights/6.jpg",
  },
  {
    category: "Collections",
    title: "Orchids add a touch of luxury.",
    src: "/highlights/4.jpg",
  },
  {
    category: "Collections",
    title: "A bouquet full of feeling.",
    src: "/highlights/7.jpg",
  },
];
