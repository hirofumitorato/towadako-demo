"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";

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
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            {/* Decoration: Zen/Calm motif (Green-based, slightly different from Access) */}
            <div className="absolute -inset-8 pointer-events-none opacity-30">
              <svg viewBox="0 0 200 200" className="w-full h-full text-[#5CA042]">
                {/* Outer loose dashed ring */}
                <circle cx="100" cy="100" r="95" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="8 8" />
                {/* Inner accents (Cardinal marks) */}
                <path d="M100,5 L100,25" stroke="currentColor" strokeWidth="1" />
                <path d="M100,175 L100,195" stroke="currentColor" strokeWidth="1" />
                <path d="M5,100 L25,100" stroke="currentColor" strokeWidth="1" />
                <path d="M175,100 L195,100" stroke="currentColor" strokeWidth="1" />
              </svg>
            </div>

            <div className="w-96 h-96 border border-[#5CA042] rounded-full flex items-center justify-center bg-white/30 backdrop-blur-[1px] relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wider text-[#5CA042]">
                お部屋
              </h2>
            </div>
          </div>
          <p className="mt-8 max-w-2xl mx-auto text-gray-600 leading-relaxed font-light text-sm">
            十和田湖の美しい自然に囲まれた静かな環境で、特別な滞在体験をお届けします。<br />
            四季折々の風景と共に、心身ともにリフレッシュできる時間をお過ごしください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="group relative bg-white rounded-sm shadow-md overflow-hidden cursor-pointer">
            <Link href="/rooms/japanese-10-tatami">
              <div className="relative aspect-[16/9] overflow-hidden">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                  style={{ backgroundImage: "url('/images/rooms/exterior.png')" }}
                />
                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
              </div>
              <div className="p-8 text-center bg-white relative z-10 transition-colors duration-300 group-hover:bg-[#fcfaf7]">
                <h3 className="text-2xl font-serif font-light mb-4">和室10畳</h3>
                <p className="text-gray-600 font-light text-sm mb-6">
                  初対面でもどこか懐かしい...そんな居心地の良さが感じられる客室です。
                </p>
                <span className="inline-block px-8 py-2 border border-brand-green text-brand-green font-light tracking-widest group-hover:bg-brand-green group-hover:text-white transition-all duration-300 text-sm">
                  詳細
                </span>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
