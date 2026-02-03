"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const circleNavs = [
  {
    title: "過ごしかた",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=800&q=80",
    href: "#stay",
  },
  {
    title: "滞在のお楽しみ",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&q=80",
    href: "#enjoy",
  },
];

export default function CircleNav() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="py-24 md:py-32 bg-background-beige"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
          {circleNavs.map((nav, index) => (
            <motion.div
              key={nav.title}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
            >
              <a href={nav.href}>
                <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden group cursor-pointer shadow-sm">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: `url('${nav.image}')` }}
                  />
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/25 transition-colors duration-500" />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-white z-10">
                    <h3 className="text-2xl md:text-3xl font-serif font-light mb-6 tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,0.3)]">
                      {nav.title}
                    </h3>
                    <div className="w-8 h-8 border border-white/80 rounded-full flex items-center justify-center group-hover:border-white transition-colors duration-300">
                      <svg
                        className="w-3.5 h-3.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
