"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const attractions = [
  { name: "白川郷", position: "left" },
  { name: "新穂高ロープウェイ", position: "top-right" },
  { name: "上高地", position: "top-right" },
  { name: "奥飛騨温泉郷", position: "bottom-right" },
];

export default function SurroundingMap() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="surrounding"
      ref={ref}
      className="py-24 md:py-32 bg-background-beige"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block relative">
            <div className="w-96 h-96 border border-gray-300 rounded-full flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wider">
                周辺の 見どころ
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Map Illustration */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="relative max-w-4xl mx-auto aspect-square bg-white/50 rounded-lg p-12"
        >
          <div className="relative w-full h-full">
            {/* Center point */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-brand-green rounded-full" />

            {/* Attractions */}
            {attractions.map((attraction, index) => (
              <div
                key={attraction.name}
                className={`absolute ${
                  attraction.position === "left"
                    ? "left-0 top-1/2 -translate-y-1/2"
                    : attraction.position === "top-right"
                    ? "right-0 top-0"
                    : "right-0 bottom-0"
                }`}
              >
                <div className="flex flex-col items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <p className="text-sm font-light whitespace-nowrap">{attraction.name}</p>
                </div>
              </div>
            ))}

            {/* Dotted lines */}
            <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
              <line
                x1="50%"
                y1="50%"
                x2="10%"
                y2="50%"
                stroke="#5CA042"
                strokeWidth="1"
                strokeDasharray="4,4"
              />
              <line
                x1="50%"
                y1="50%"
                x2="90%"
                y2="10%"
                stroke="#5CA042"
                strokeWidth="1"
                strokeDasharray="4,4"
              />
              <line
                x1="50%"
                y1="50%"
                x2="90%"
                y2="90%"
                stroke="#5CA042"
                strokeWidth="1"
                strokeDasharray="4,4"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
