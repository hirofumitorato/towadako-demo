"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function Concept() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="concept"
      ref={ref}
      className="py-24 md:py-32 bg-background-beige relative overflow-hidden"
    >
      {/* Background Motif: Himemasu & Ripples (Section A) */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* Ripples (Top Left) */}
        <svg
          className="absolute -top-10 -left-10 w-64 h-64 md:w-96 md:h-96 text-gray-400/30"
          viewBox="0 0 400 400"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path d="M50,350 Q200,50 350,350" strokeOpacity="0.6" />
          <path d="M0,350 Q200,0 400,350" strokeOpacity="0.4" />
          <path d="M-50,350 Q200,-50 450,350" strokeOpacity="0.2" />
        </svg>

        {/* Himemasu (Bottom Right) */}
        <div className="absolute -bottom-12 -right-12 md:bottom-0 md:right-0 opacity-[0.25] transform rotate-[-15deg]">
          {/* Abstract Engraving-style Fish */}
          <svg width="400" height="250" viewBox="0 0 400 250" fill="none" stroke="#2F4F4F" strokeWidth="2">
            {/* Body */}
            <path d="M40,125 Q100,50 250,50 Q380,50 380,125 Q380,200 250,200 Q100,200 40,125 Z" />
            {/* Tail */}
            <path d="M40,125 Q10,80 0,50 M40,125 Q10,170 0,200" />
            {/* Fins */}
            <path d="M150,200 Q130,230 160,240" />
            <path d="M180,50 Q160,20 190,10" />
            {/* Scales/Texture (Lines) */}
            <path d="M120,80 Q140,100 120,120" strokeWidth="1" opacity="0.5" />
            <path d="M140,80 Q160,100 140,120" strokeWidth="1" opacity="0.5" />
            <path d="M160,80 Q180,100 160,120" strokeWidth="1" opacity="0.5" />
            <path d="M130,130 Q150,150 130,170" strokeWidth="1" opacity="0.5" />
            <path d="M150,130 Q170,150 150,170" strokeWidth="1" opacity="0.5" />
            {/* Eye */}
            <circle cx="330" cy="100" r="5" fill="currentColor" opacity="0.5" />
          </svg>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto text-center"
        >
          <div className="bg-white/60 backdrop-blur-[2px] p-8 md:p-12 rounded-sm shadow-sm border border-white/40">
            <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 tracking-wider text-gray-800">
              コンセプト
            </h2>
            <p className="text-brand-green text-sm md:text-base tracking-[0.2em] mb-10 uppercase">
              Concept
            </p>
            <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light">
              十和田湖の美しい自然に囲まれた静かな環境で、伝統的な和の心と現代的な快適さを融合させた特別な滞在体験をお届けします。
              四季折々の風景と共に、心身ともにリフレッシュできる時間をお過ごしください。
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
