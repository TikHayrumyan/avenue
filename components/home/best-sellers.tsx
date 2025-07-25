"use client";

import React from "react";
import { Carousel } from "../ui/card-carousel";
import { Button } from "../ui/button";
import Image from "next/image";
import { TbShoppingBag } from "react-icons/tb";
export default function BestSellers() {
  const bestsellerCards = bestsellerData.map((product) => (
    <BestsellerCard key={product.id} product={product} />
  ));

  return (
    <section className="container mx-auto px-4 py-16">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
        <div className="lg:w-1/3 mb-8 lg:mb-0">
          <h2 className="text-3xl font-light text-gray-900 mb-4">
            OUR BESTSELLERS
          </h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Our selection of best selling bouquets by Ode à la Rose. Send a
            beautiful bouquet today.
          </p>
          <Button
            className="bg-[#a3b18a] uppercase cursor-pointer text-[#f2f2f2] hover:bg-[#a3b18a]/90 font-cormorant text-lg px-8 py-3 rounded-xs shadow-lg transition-transform duration-200 transform focus:outline-none focus:ring-2 focus:ring-[#a3b18a] focus:ring-offset-2"
            size="lg"
          >
            Shop Bestsellers
          </Button>
        </div>

        <div className="lg:w-2/3">
          <div className="w-auto h-auto py-0">
            <Carousel items={bestsellerCards} />
          </div>
        </div>
      </div>
    </section>
  );
}

interface BestsellerProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  isBestseller: boolean;
}

const BestsellerCard = ({ product }: { product: BestsellerProduct }) => {
  return (
    <div className="relative flex flex-col bg-white  overflow-hidden  transition-shadow duration-200 w-sm">
      {/* Product Image */}
      <div className="relative aspect-[3/4] bg-gray-50">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />

        {/* Heart Icon */}
        <button className="absolute top-3 right-3 w-8 h-8 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200">
          <TbShoppingBag className="w-4 h-4 text-gray-600" />
        </button>
      </div>

      {/* Product Info */}
      <div className="p-4 pt-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">{product.name}</span>
        </div>
        <span className="text-lg font-medium text-gray-900">
          {product.price}
        </span>
      </div>
    </div>
  );
};

const bestsellerData: BestsellerProduct[] = [
  {
    id: "alma",
    name: "Alma",
    image: "/best-beseller/1.png",
    price: "$150.00",
    isBestseller: true,
  },
  {
    id: "helios",
    name: "Helios",
    image: "/best-beseller/2.png",
    price: "from $100.00",
    isBestseller: true,
  },
  {
    id: "felice",
    name: "Felice",
    image: "/best-beseller/3.png",
    price: "from $86.00",
    isBestseller: true,
  },
  {
    id: "serena",
    name: "Serena",
    image: "/best-beseller/4.png",
    price: "$120.00",
    isBestseller: true,
  },
  {
    id: "aurora",
    name: "Aurora",
    image: "/best-beseller/5.png",
    price: "from $95.00",
    isBestseller: true,
  },
  {
    id: "luna",
    name: "Luna",
    image: "/best-beseller/1.png",
    price: "$110.00",
    isBestseller: true,
  },
];
