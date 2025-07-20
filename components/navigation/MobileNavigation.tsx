"use client";

import { useState } from "react";
import Link from "next/link";
import { mainLinks, dropdownComponents } from "./nav";
import LanguageDropdown from "../ui/language-dropdown";
import { Menu, X } from "lucide-react";

export default function MobileNavigation() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);

  const handleAccordion = (dropdownType: string) => {
    setOpenAccordion(openAccordion === dropdownType ? null : dropdownType);
  };

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="md:hidden flex items-center justify-center p-2 focus:outline-none"
        aria-label="Open menu"
        onClick={() => setMenuOpen(true)}
      >
        <Menu className="w-7 h-7" />
      </button>

      {/* Overlay Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-50 bg-white flex flex-col p-6 overflow-y-auto">
          <div className="flex items-center justify-between mb-6">
            <span className="font-cormorant text-2xl font-bold text-[#344e41]">
              Menu
            </span>
            <button
              className="p-2 focus:outline-none"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <X className="w-7 h-7" />
            </button>
          </div>
          <nav className="flex-1">
            <ul className="flex flex-col gap-2">
              {mainLinks.map((link) => (
                <li key={link.name}>
                  {link.hasDropdown ? (
                    <div>
                      <button
                        className="w-full flex justify-between items-center py-3 px-2 font-cormorant text-lg font-bold text-[#344e41] hover:text-[#a3b18a] uppercase focus:outline-none"
                        onClick={() => handleAccordion(link.dropdownType)}
                        aria-expanded={openAccordion === link.dropdownType}
                        aria-controls={`mobile-accordion-${link.dropdownType}`}
                      >
                        {link.name}
                        <span>
                          {openAccordion === link.dropdownType ? "-" : "+"}
                        </span>
                      </button>
                      {openAccordion === link.dropdownType && (
                        <div
                          id={`mobile-accordion-${link.dropdownType}`}
                          className="pl-4 pb-2"
                        >
                          {(() => {
                            const Dropdown =
                              dropdownComponents[
                                link.dropdownType as keyof typeof dropdownComponents
                              ];
                            return Dropdown ? <Dropdown /> : null;
                          })()}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={link.href}
                      className="block py-3 px-2 font-cormorant text-lg font-bold text-[#344e41] hover:text-[#a3b18a] uppercase"
                      onClick={() => setMenuOpen(false)}
                    >
                      {link.name}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </nav>
          <div className="mt-8 border-t pt-4 flex flex-col gap-4">
            <LanguageDropdown />
            <Link
              href="/sign-in"
              className="block font-cormorant text-lg font-bold text-[#344e41] hover:text-[#a3b18a] uppercase"
              onClick={() => setMenuOpen(false)}
            >
              Sign In
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
