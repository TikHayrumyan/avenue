"use client";

import React, { useState } from "react";
import { Carousel } from "../ui/card-carousel";
import { Button } from "../ui/button";
import Image from "next/image";
import { TbShoppingBag, TbShoppingBagCheck } from "react-icons/tb";
import Link from "next/link";
export default function BestSellers() {
  const [cartItems, setCartItems] = useState<Set<string>>(new Set());

  const handleAddToCart = (productId: string) => {
    setCartItems((prev) => {
      const newCart = new Set(prev);
      if (newCart.has(productId)) {
        newCart.delete(productId);
      } else {
        newCart.add(productId);
      }
      return newCart;
    });
  };

  const bestsellerCards = bestsellerData.map((product) => (
    <BestsellerCard
      key={product.id}
      product={product}
      isInCart={cartItems.has(product.id)}
      onAddToCart={() => handleAddToCart(product.id)}
    />
  ));

  return (
    <section className="px-6 sm:px-6 md:px-6 lg:px-20 xl:px-10 2xl:px-20 py-8">
      <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-12">
        <div className="lg:w-1/3 mb-8 lg:mb-0 flex flex-col justify-between h-full">
          <h2 className="font-cormorant text-4xl font-semibold tracking-wide  text-gray-900 mb-4">
            OUR BESTSELLERS
          </h2>
          <div>
            <p className="text-gray-600 mb-6  font-medium text-xl font-cormorant tracking-wide max-w-md">
              Our selection of best selling bouquets by Avenue de Fleurs. Send a
              beautiful bouquet today.
            </p>
            <Button
              className="bg-[#a07676] uppercase cursor-pointer text-[#f2f2f2] hover:bg-[#ab8181] font-cormorant text-lg px-8 py-3 rounded-xs shadow-lg transition-transform duration-200 transform focus:outline-none focus:ring-2 focus:ring-[#a07676] focus:ring-offset-2"
              size="lg"
              asChild
            >
              <Link href={"#"}>Shop Bestsellers</Link>
            </Button>
          </div>
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

const BestsellerCard = ({
  product,
  isInCart,
  onAddToCart,
}: {
  product: BestsellerProduct;
  isInCart: boolean;
  onAddToCart: () => void;
}) => {
  return (
    <div className="relative flex flex-col bg-white  overflow-hidden  transition-shadow duration-200 w-sm">
      {/* Product Image */}
      <div className="relative aspect-[3/4] bg-neutral-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-contain"
        />

        {/* Heart Icon */}
        <button
          className="absolute top-3 cursor-pointer right-3 w-10 h-10 bg-white/80 hover:bg-white rounded-full flex items-center justify-center transition-colors duration-200"
          onClick={onAddToCart}
        >
          {isInCart ? (
            <TbShoppingBagCheck className="w-6 h-6 text-gray-600" />
          ) : (
            <TbShoppingBag className="w-6 h-6 text-gray-600" />
          )}
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
    price: "From $150.00",
    isBestseller: true,
  },
  {
    id: "helios",
    name: "Helios",
    image: "/best-beseller/2.png",
    price: "$100.00",
    isBestseller: true,
  },
  {
    id: "felice",
    name: "Felice",
    image: "/best-beseller/3.png",
    price: "$86.00",
    isBestseller: true,
  },
  {
    id: "serena",
    name: "Serena",
    image: "/best-beseller/4.png",
    price: "From $120.00",
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
