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
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Motif D: Pine Trees (Section D) */}
      <div className="absolute top-10 left-0 h-full opacity-[0.18] pointer-events-none z-0">
        <svg height="100%" viewBox="0 0 300 800" fill="none" stroke="#2F4F4F" strokeWidth="1.5">
          {/* Pine Branch 1 */}
          <path d="M0,100 Q150,150 250,120" />
          <path d="M50,120 L20,150 M70,125 L40,160 M90,130 L60,170" strokeWidth="1" />
          {/* Pine Branch 2 */}
          <path d="M-20,300 Q100,350 200,320" />
          <path d="M20,320 L0,350 M50,330 L30,360 M80,340 L60,370" strokeWidth="1" />
          {/* Pine Needles (Clusters) */}
          <path d="M150,150 L140,170 M150,150 L150,175 M150,150 L160,170" strokeWidth="1" />
          <path d="M200,320 L190,340 M200,320 L200,345 M200,320 L210,340" strokeWidth="1" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Left: Text with Circle */}
          <div className="flex-1 flex items-center justify-end">
            <div className="relative">
              {/* Decorative Circle Background */}
              <div className="absolute inset-0 rounded-full border border-brand-green/10 transform scale-125 pointer-events-none" />
              <div className="w-80 h-80 md:w-96 md:h-96 border border-gray-300 rounded-full flex items-center justify-center bg-white/50 backdrop-blur-[2px]">
                <div className="writing-vertical-rl text-3xl md:text-4xl font-serif font-light tracking-wider text-center text-gray-800">
                  お部屋の<br />ご紹介
                </div>
              </div>
            </div>
          </div>

          {/* Right: Description */}
          <div className="flex-1">
            <div className="bg-white/80 backdrop-blur-[4px] p-8 md:p-12 rounded-sm border-l-2 border-brand-green/20">
              <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light mb-0">
                十和田湖の美しい自然に囲まれた静かな環境で、伝統的な和の心と現代的な快適さを融合させた特別な滞在体験をお届けします。
                四季折々の風景と共に、心身ともにリフレッシュできる時間をお過ごしください。
              </p>
            </div>
          </div>
        </motion.div>

        {/* Room Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-sm shadow-sm group">
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.02]"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1578683010236-d716f9a3f461?w=1920&q=80')",
              }}
            />
            {/* Optional Overlay Text on Image */}
            <div className="absolute bottom-0 right-0 bg-white/90 px-6 py-2 m-4 text-xs tracking-widest text-gray-600 font-serif">
              LAKE VIEW SUITE
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
