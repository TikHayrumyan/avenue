"use client";
import Link from "next/link";
import { FlowersCarousel } from "./flowers-carousel";
import { useState } from "react";

const collections = [
  { name: "All Bouquets", href: "#" },
  { name: "Summer Flowers", href: "#" },
  { name: "Best Sellers", href: "#" },
  { name: "Roses", href: "#" },
  { name: "Peonies", href: "#" },
  { name: "Signature Bouquets", href: "#" },
  { name: "Centerpieces", href: "#" },
  { name: "Orchids", href: "#" },
  { name: "Small Attentions", href: "#" },
  { name: "Big Moments", href: "#" },
  { name: "Single Variety", href: "#" },
  { name: "Plants", href: "#" },
];

const occasions = [
  { name: "Birthday", href: "#" },
  { name: "Anniversary", href: "#" },
  { name: "Congratulations", href: "#" },
  { name: "Thank You", href: "#" },
  { name: "New Baby", href: "#" },
  { name: "Get Well", href: "#" },
  { name: "Sympathy", href: "#" },
  { name: "Weddings", href: "#" },
  { name: "All Occasions", href: "#" },
];

const colors = [
  { name: "Red", href: "#" },
  { name: "Pink", href: "#" },
  { name: "White", href: "#" },
  { name: "Purple", href: "#" },
  { name: "Orange", href: "#" },
];

const mobileSections = [
  {
    key: "collection",
    title: "Collection",
    items: collections,
  },
  {
    key: "occasion",
    title: "Occasion",
    items: occasions,
  },
  {
    key: "color",
    title: "Color",
    items: colors,
  },
];

export default function FlowerDropdown() {
  const [openSection, setOpenSection] = useState<string | null>(null);

  return (
    <div>
      {/* Mobile: Accordions */}
      <div className="block lg:hidden">
        {mobileSections.map((section) => (
          <div key={section.key} className="mb-2">
            <button
              className="w-full flex justify-between items-center py-2 px-2 font-cormorant text-base font-bold text-[#344e41] hover:text-[#a07676] uppercase focus:outline-none bg-[#f2f2f2]"
              onClick={() =>
                setOpenSection(openSection === section.key ? null : section.key)
              }
              aria-expanded={openSection === section.key}
              aria-controls={`flower-mobile-${section.key}`}
            >
              {section.title}
              <span>{openSection === section.key ? "-" : "+"}</span>
            </button>
            {openSection === section.key && (
              <ul
                id={`flower-mobile-${section.key}`}
                className="pl-4 py-2 space-y-2 bg-white"
              >
                {section.items.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="font-rosarivo text-sm text-muted-foreground hover:text-[#a07676]"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
        {/* Highlights always visible at the end */}
        <div className="mt-4">
          <h3 className="font-medium tracking-wide text-base mb-2 text-gray-900 font-playfair">
            Highlights
          </h3>
          <FlowersCarousel />
        </div>
      </div>

      {/* Desktop: Original grid layout */}
      <div className="hidden lg:grid grid-cols-7 gap-8">
        {/* Left side: 3 columns (approx 70%) */}
        <div className="col-span-3 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
          <div>
            <h3 className="font-medium tracking-wide lg:text-lg xl:text-xl mb-4 text-gray-900 font-playfair">
              Collection
            </h3>
            <ul className="space-y-2">
              {collections.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-rosarivo lg:text-xs xl:text-sm text-muted-foreground hover:text-[#a07676]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium tracking-wide lg:text-lg xl:text-xl mb-4 text-gray-900 font-playfair">
              Occasion
            </h3>
            <ul className="space-y-2">
              {occasions.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-rosarivo lg:text-xs xl:text-sm text-muted-foreground hover:text-[#a07676]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="font-medium tracking-wide lg:text-lg xl:text-xl mb-4 text-gray-900 font-playfair">
              Color
            </h3>
            <ul className="space-y-2">
              {colors.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="font-rosarivo lg:text-xs xl:text-sm text-muted-foreground hover:text-[#a07676]"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right side: Promotional images (approx 30%) */}
        <div className="col-span-4 grid grid-cols-1 gap-4">
          <h3 className="font-medium tracking-wide lg:text-lg xl:text-xl mb-4 text-gray-900 font-playfair">
            Highlights
          </h3>
          <FlowersCarousel />
        </div>
      </div>
    </div>
  );
}
