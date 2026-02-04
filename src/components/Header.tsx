"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Link from "next/link";

const navItems = [
  { href: "/bath", label: "お風呂・温泉", enLabel: "Bath" },
  { href: "/meal", label: "お食事", enLabel: "Meal" },
  { href: "#rooms", label: "客室", enLabel: "Guest Room" },
  { href: "#facility-guide", label: "館内案内", enLabel: "Facility" },
  { href: "/sightseeing", label: "観光案内", enLabel: "Sightseeing" },
  { href: "#access", label: "交通アクセス", enLabel: "Access" },
];

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show header only when scrolled down > 0
      setIsVisible(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        const headerHeight = 88; // Match the new header height
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.header
          initial={{ y: "-100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          className="fixed top-0 left-0 right-0 z-50 h-16 md:h-[88px] flex items-center bg-black/35 backdrop-blur-[6px] border-b border-white/10"
        >
          <div className="container mx-auto px-4 md:px-8 flex items-center justify-center h-full relative">
            {/* Logo - Absolute Left */}
            <Link href="/" className="absolute left-4 md:-left-20 top-1/2 -translate-y-1/2 z-20 hover:opacity-80 transition-opacity">
              <img src="/images/logo_header_final.png" alt="賑山亭" className="h-12 md:h-20 w-auto object-contain" />
            </Link>

            {/* Navigation - Center (PC) */}
            <nav className="hidden md:flex items-center gap-10 lg:gap-14">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                  className="group flex flex-col items-center cursor-pointer relative py-2"
                >
                  <span className="text-white font-serif font-medium text-[16px] lg:text-[17px] tracking-[0.1em] leading-none mb-2 drop-shadow-md">
                    {item.label}
                  </span>
                  <span className="text-white/70 font-serif text-[10px] lg:text-[11px] tracking-[0.05em] font-light leading-none uppercase group-hover:text-white transition-colors duration-300">
                    {item.enLabel}
                  </span>

                  {/* Underline Animation */}
                  <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-white/80 transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button - Absolute Right (SP) */}
            <div className="md:hidden absolute right-4">
              <button
                className="text-white p-2 focus:outline-none"
                aria-label="Menu"
              >
                <div className="w-6 h-[1px] bg-white mb-1.5 shadow-sm"></div>
                <div className="w-6 h-[1px] bg-white mb-1.5 shadow-sm"></div>
                <div className="w-6 h-[1px] bg-white shadow-sm"></div>
              </button>
            </div>
          </div>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
