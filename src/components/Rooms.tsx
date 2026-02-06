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
            <div className="w-96 h-96 border border-gray-300 rounded-full flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wider">
                お部屋
              </h2>
            </div>
          </div>
          <p className="mt-12 max-w-4xl mx-auto text-lg md:text-[22px] leading-loose text-gray-800 font-light font-serif">
            十和田湖の美しい自然に囲まれた静かな環境で、特別な滞在体験をお届けします。<br />
            四季折々の風景と共に、心身ともにリフレッシュできる時間をお過ごしください。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-6xl mx-auto"
        >
          <div className="flex flex-col items-center">
            <motion.div
              className="group relative bg-white rounded-sm shadow-md overflow-hidden max-w-6xl w-full mb-12"
              whileHover={{ scale: 1.01 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/rooms/japanese-10-tatami">
                <div className="relative aspect-[16/9] w-full overflow-hidden">
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{ backgroundImage: "url('/images/rooms/exterior_cropped.png')" }}
                  />
                  <div className="absolute inset-0 bg-black/5 transition-opacity duration-300 group-hover:opacity-0" />
                </div>
              </Link>
            </motion.div>

            <Link href="/rooms/japanese-10-tatami">
              <span className="inline-block px-12 py-4 border border-brand-green text-brand-green font-light tracking-widest text-lg hover:bg-brand-green hover:text-white transition-all duration-300 bg-transparent">
                詳しく見る
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
