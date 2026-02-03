"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Rooms() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="rooms"
      ref={ref}
      className="py-24 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Left: Text with Circle */}
          <div className="flex-1 flex items-center justify-end">
            <div className="relative">
              <div className="w-96 h-96 border border-gray-300 rounded-full flex items-center justify-center">
                <div className="writing-vertical-rl text-3xl md:text-4xl font-serif font-light tracking-wider text-center">
                  お部屋の<br />ご紹介
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex-1">
            <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light mb-8">
              十和田湖の美しい自然に囲まれた静かな環境で、伝統的な和の心と現代的な快適さを融合させた特別な滞在体験をお届けします。
              四季折々の風景と共に、心身ともにリフレッシュできる時間をお過ごしください。
            </p>
          </div>
        </motion.div>

        {/* Room Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-[1.02]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1920&q=80')",
              }}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
