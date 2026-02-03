"use client";

import { useState, useEffect } from "react";

const navItems = [
  { href: "#concept", label: "コンセプト" },
  { href: "#facilities", label: "施設" },
  { href: "#gallery", label: "ギャラリー" },
  { href: "#access", label: "アクセス" },
  { href: "#info", label: "基本情報" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 100;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b border-gray-100 ${
        isScrolled ? "shadow-sm" : ""
      }`}
    >
      <div className="container mx-auto px-6">
        {/* Logo - Center */}
        <div className="flex items-center justify-center py-4">
          <a href="#home" onClick={(e) => handleClick(e, "#home")} className="cursor-pointer">
            <div className="text-center">
              <div className="text-xs md:text-sm text-brand-green tracking-wider mb-1 font-light">
                とわだこ
              </div>
              <h1 className="text-2xl md:text-3xl font-serif text-brand-green font-normal tracking-wider">
                賑山亭
              </h1>
              <div className="text-xs md:text-sm text-gray-500 tracking-wider mt-1 font-light">
                Towadako Shinzantei
              </div>
            </div>
          </a>
        </div>

        {/* Navigation - Center */}
        <nav className="flex items-center justify-center gap-6 md:gap-10 pb-4">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className="text-gray-800 text-sm md:text-base font-light tracking-wider relative group transition-opacity cursor-pointer"
            >
              {item.label}
              <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-brand-green transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
