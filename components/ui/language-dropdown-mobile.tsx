"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Globe, ChevronDown } from "lucide-react"; // Importing Lucide React icons

const languages = [
  { code: "EN", label: "English" },
  { code: "HY", label: "Հայերեն" },
  { code: "RU", label: "Русский" },
];

export default function LanguageDropdownMobile() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]); // Default to English

  const handleSelectLanguage = (lang: { code: string; label: string }) => {
    setSelectedLanguage(lang);
    setIsOpen(false); // Close dropdown after selection
  };

  return (
    <div className="w-full md:w-auto">
      {/* Mobile: Inline Accordion */}
      <div className="block md:hidden w-full">
        <button
          className="flex w-full font-cormorant items-center gap-2 px-4 py-3 border-0 shadow-none text-base font-bold text-[#344e41] hover:text-[#a3b18a] focus:outline-none focus:ring-2 focus:ring-[#a3b18a] transition-colors duration-300 cursor-pointer uppercase group justify-between bg-white rounded-md"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="flex items-center gap-2">
            <Globe className="w-5 h-5" />
            {selectedLanguage.code}
          </span>
          <ChevronDown
            className={`w-5 h-5 transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="overflow-hidden bg-white rounded-b-md shadow-md border-t border-gray-100 mt-1"
            >
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => handleSelectLanguage(lang)}
                    className={`w-full text-left px-6 py-3 text-base font-cormorant uppercase font-semibold transition-colors duration-200 cursor-pointer flex items-center gap-2
                      ${
                        selectedLanguage.code === lang.code
                          ? "bg-[#a3b18a]/20 text-[#344e41]"
                          : "hover:bg-gray-100 hover:text-[#a3b18a] text-[#344e41]"
                      }`}
                  >
                    {lang.label}
                    {selectedLanguage.code === lang.code && (
                      <span className="ml-auto text-xs font-bold">✓</span>
                    )}
                  </button>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </div>
      {/* Desktop: Dropdown Overlay */}
      <div className="hidden md:flex relative h-full items-center">
        <button
          className="relative flex font-cormorant items-center gap-2 px-4 py-2 border-0 shadow-none lg:text-sm xl:text-lg font-bold text-[#344e41] hover:text-[#a3b18a] focus:outline-none focus:ring-2 focus:ring-[#a3b18a] transition-colors duration-300 cursor-pointer uppercase group"
          aria-haspopup="true"
          aria-expanded={isOpen}
          onClick={() => setIsOpen(!isOpen)}
        >
          <Globe className="w-4 h-4" />
          <span>{selectedLanguage.code}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md py-2 z-50 min-w-[120px]"
              style={{ pointerEvents: isOpen ? "auto" : "none" }}
            >
              <ul className="flex flex-col">
                {languages.map((lang) => (
                  <li key={lang.code}>
                    <button
                      onClick={() => handleSelectLanguage(lang)}
                      className={`relative w-full text-left px-4 py-2 text-black lg:text-sm hover:bg-gray-100 hover:text-[#a3b18a] transition-colors duration-200 font-semibold cursor-pointer font-cormorant uppercase group
                        ${
                          selectedLanguage.code === lang.code
                            ? "bg-[#a3b18a]/20 text-[#344e41]"
                            : ""
                        }`}
                    >
                      {lang.label}
                      {selectedLanguage.code === lang.code && (
                        <span className="ml-2 text-xs font-bold">✓</span>
                      )}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
