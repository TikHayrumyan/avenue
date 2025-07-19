"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaTiktok } from "react-icons/fa";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Footer7Props {
  logo?: {
    url: string;
    src: string;
    alt: string;
    title: string;
  };
  sections?: Array<{
    title: string;
    links: Array<{ name: string; href: string }>;
  }>;
  description?: string;
  socialLinks?: Array<{
    icon: React.ReactElement;
    href: string;
    label: string;
  }>;
  copyright?: string;
  legalLinks?: Array<{
    name: string;
    href: string;
  }>;
}

const defaultSections = [
  {
    title: "Product",
    links: [
      { name: "Overview", href: "#" },
      { name: "Pricing", href: "#" },
      { name: "Marketplace", href: "#" },
      { name: "Features", href: "#" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About", href: "#" },
      { name: "Team", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Careers", href: "#" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Help", href: "#" },
      { name: "Sales", href: "#" },
      { name: "Advertise", href: "#" },
      { name: "Privacy", href: "#" },
    ],
  },
];

const defaultSocialLinks = [
  {
    icon: <FaInstagram className="size-5 text-[#344e41]" />,
    href: "#",
    label: "Instagram",
  },
  {
    icon: <FaFacebook className="size-5 text-[#344e41]" />,
    href: "#",
    label: "Facebook",
  },
  {
    icon: <FaTiktok className="size-5 text-[#344e41]" />,
    href: "#",
    label: "Tik-tok",
  },
];

const defaultLegalLinks = [
  { name: "Terms and Conditions", href: "#" },
  { name: "Privacy Policy", href: "#" },
];

export const Footer = ({
  logo = {
    url: "/",
    src: "/logos/test-logo-black.png",
    alt: "logo",
    title: "Venue de flowers",
  },
  sections = defaultSections,
  socialLinks = defaultSocialLinks,
  copyright = "© 2024 Venue de flowers. All rights reserved.",
  legalLinks = defaultLegalLinks,
}: Footer7Props) => {
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage(""); // Clear previous messages
    if (email && email.includes("@")) {
      // Simulate API call
      setTimeout(() => {
        setMessage("Thank you for subscribing!");
        setIsSubscribed(true);
        setEmail(""); // Clear input after successful subscription
      }, 1000);
    } else {
      setMessage("Please enter a valid email address.");
      setIsSubscribed(false);
    }
  };

  return (
    <section className="py-32 px-6 sm:px-6 md:px-6 lg:px-20 xl:px-10 2xl:px-20 bg-[#f2f2f2]">
      <div className="">
        <div className="flex w-full flex-col justify-between gap-10 lg:flex-row lg:items-start lg:text-left">
          <div className="flex w-full flex-col justify-between gap-6 lg:items-start">
            {/* Logo */}
            <div className="flex items-center gap-2 lg:justify-start">
              <Link href={logo.url}>
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  title={logo.title}
                  width={150}
                  height={100}
                  className="w-[150px] h-auto object-cover"
                />
              </Link>
            </div>
            <div>
              {/* Subscribe part */}
              <h3 className="mb-4 font-playfair text-xl font-medium tracking-wide text-[#344e41]">
                Subscribe to our Newsletter
              </h3>
              {!isSubscribed ? (
                <form
                  onSubmit={handleSubscribe}
                  className="flex flex-col sm:flex-row gap-2"
                >
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 min-w-[200px] border-2 border-[#344e41] bg-transparent placeholder:text-[#a3b18a] focus:ring-0 focus:border-[#a3b18a] rounded-sm px-4 py-2 text-[#344e41]"
                  />
                  <Button
                    type="submit"
                    className="bg-[#344e41] text-[#f2f2f2] hover:bg-[#a3b18a] hover:text-[#344e41] rounded-sm border-2 border-[#344e41] px-6 py-2 transition-colors duration-200"
                  >
                    Subscribe
                  </Button>
                </form>
              ) : (
                <div className="text-[#344e41] font-rosarivo text-base">
                  {message}
                </div>
              )}
              {message && !isSubscribed && (
                <p className="text-red-500 text-sm mt-2">{message}</p>
              )}
            </div>
            <ul className="flex items-center space-x-6 text-muted-foreground">
              {socialLinks.map((social, idx) => (
                <li key={idx} className="font-medium hover:text-primary">
                  <Link href={social.href} aria-label={social.label}>
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid w-full gap-6 md:grid-cols-3 lg:gap-20">
            {sections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4  font-playfair text-xl font-medium tracking-wide ">
                  {section.title}
                </h3>
                <ul className="space-y-3 text-sm text-muted-foreground">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-rosarivo text-sm text-muted-foreground hover:text-[#a3b18a]"
                    >
                      <Link href={link.href}>{link.name}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 flex flex-col justify-between gap-4 border-t py-8 border-[#344e41] text-xs font-medium text-muted-foreground md:flex-row md:items-center md:text-left">
          <p className="order-2 lg:order-1 font-rosarivo text-xs text-muted-foreground hover:text-[#a3b18a]">
            {copyright}
          </p>
          <ul className="order-1 flex flex-col gap-2 md:order-2 md:flex-row">
            {legalLinks.map((link, idx) => (
              <li
                key={idx}
                className="font-rosarivo text-xs text-muted-foreground hover:text-[#a3b18a]"
              >
                <Link href={link.href}> {link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
