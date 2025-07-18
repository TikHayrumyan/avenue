"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import FlowerDropdown from "./flower-dropdown";
import AccessoriesDropdown from "./accessories-dropdown";

export default function Navigation() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const handleMouseEnter = (dropdown: string | null) =>
    setOpenDropdown(dropdown);
  const handleMouseLeave = () => setOpenDropdown(null);

  const mainLinks = [
    {
      name: "Flowers",
      href: "/flowers",
      hasDropdown: true,
      dropdownType: "flowers",
    },
    {
      name: "Accessories",
      href: "/accessories",
      hasDropdown: true,
      dropdownType: "accessories",
    },
    { name: "DIY", href: "/do-it-yourself" },
    { name: "Our Story", href: "/our-story" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <nav className="hidden md:flex items-center h-full ">
      <ul className="flex space-x-8 h-full">
        {mainLinks.map((link) => (
          <li
            key={link.name}
            className="relative  flex items-center h-full"
            onMouseEnter={
              link.hasDropdown
                ? () => handleMouseEnter(link.dropdownType)
                : undefined
            }
            onMouseLeave={link.hasDropdown ? handleMouseLeave : undefined}
          >
            <Link
              href={link.href}
              className={`relative font-cormorant text-lg font-bold text-[#344e41] hover:text-[#a3b18a]  uppercase  group px-1`}
            >
              {link.name}

              <span
                className={`absolute left-0 right-0 -bottom-1 h-[1px] rounded bg-[#344e41] transition-transform duration-300 origin-left
                    ${
                      openDropdown === link.dropdownType
                        ? "scale-x-100"
                        : "scale-x-0"
                    }
                    group-hover:scale-x-100
                  `}
                aria-hidden="true"
              />
            </Link>
            {link.hasDropdown && (
              <AnimatePresence>
                {openDropdown === link.dropdownType && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="fixed left-0 right-0 top-16 md:top-18 lg:top-20 2xl:top-20 bg-white shadow-lg py-8 z-40"
                    style={{ pointerEvents: openDropdown ? "auto" : "none" }}
                  >
                    <div className=" mx-auto px-6 sm:px-6 md:px-6 lg:px-20 xl:px-10 2xl:px-20">
                      {link.dropdownType === "flowers" && <FlowerDropdown />}
                      {link.dropdownType === "accessories" && (
                        <AccessoriesDropdown />
                      )}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
