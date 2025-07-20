"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Globe, ChevronDown } from "lucide-react" // Importing Lucide React icons

const languages = [
  { code: "EN", label: "English" },
  { code: "HY", label: "Հայերեն" },
  { code: "RU", label: "Русский" },
]

export default function LanguageDropdown() {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]) // Default to English

  const handleSelectLanguage = (lang: { code: string; label: string }) => {
    setSelectedLanguage(lang)
    setIsOpen(false) // Close dropdown after selection
  }

  return (
    <div
      className="relative h-full flex items-center"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {/* Dropdown Trigger Button */}
      <button
        className="relative flex  font-cormorant  items-center gap-2 px-4 py-2 border-0 shadow-none text-lg font-bold text-[#344e41] hover:text-[#a3b18a] focus:outline-none focus:ring-2 focus:ring-[#a3b18a] transition-colors duration-300 cursor-pointer uppercase group"
        aria-haspopup="true"
        aria-expanded={isOpen}
        onClick={() => setIsOpen(!isOpen)} // Allows click to toggle on smaller screens/touch
      >
        <Globe className="w-4 h-4" /> {/* Lucide Globe icon */}
        <span>{selectedLanguage.code}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`} />{" "}
        {/* Lucide ChevronDown icon */}
        {/* <span
          className={`absolute left-0 right-0 -bottom-1 h-[1px] rounded bg-[#344e41] transition-transform duration-300 origin-left
            ${isOpen ? "scale-x-100" : "scale-x-0"}
            group-hover:scale-x-100
          `}
          aria-hidden="true"
        /> */}
      </button>

      {/* Dropdown Content */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full mt-2 right-0 bg-white shadow-lg rounded-md py-2 z-50 min-w-[120px]"
            style={{ pointerEvents: isOpen ? "auto" : "none" }} // Ensures pointer events are only active when open
          >
            <ul className="flex flex-col">
              {languages.map((lang) => (
                <li key={lang.code}>
                  <button
                    onClick={() => handleSelectLanguage(lang)}
                    className={`relative w-full text-left px-4 py-2 text-black hover:bg-gray-100 hover:text-[#a3b18a] transition-colors duration-200 font-semibold cursor-pointer font-cormorant uppercase group`}
                  >
                    {lang.label}
                    <span
                      className={`absolute left-0 right-0 -bottom-1 h-[1px] rounded bg-[#344e41] transition-transform duration-300 origin-left scale-x-0 group-hover:scale-x-100`}
                      aria-hidden="true"
                    />
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
