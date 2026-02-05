"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
export default function Access() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="access"
      ref={ref}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Motif E: Towada Lake & Mountains (Section E) */}
      <div className="absolute inset-x-0 bottom-0 top-1/2 opacity-[0.18] pointer-events-none z-0">
        <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 1000 300" fill="none" className="text-gray-500">
          {/* Mountain Skyline */}
          <path d="M0,200 Q150,100 300,180 Q450,80 600,160 Q750,120 1000,180" stroke="currentColor" strokeWidth="1" />
          {/* Lake Ripples */}
          <path d="M0,250 Q200,240 400,250 T800,250 T1200,250" stroke="currentColor" strokeWidth="0.5" />
          <path d="M100,270 Q300,260 500,270 T900,270" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50,290 Q250,280 450,290 T850,290" stroke="currentColor" strokeWidth="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-gray-800">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="inline-block relative">
            {/* Decoration: Organic Flow/Leaves */}
            <div className="absolute -inset-12 pointer-events-none opacity-40">
              <svg viewBox="0 0 200 200" className="w-full h-full text-[#5CA042] animate-pulse-slow">
                <path fill="none" stroke="currentColor" strokeWidth="1" d="M100,0 Q130,20 150,50 T180,100 T150,150 T100,180 T50,150 T20,100 T50,50 T100,0" strokeDasharray="4 4" />
                {/* Simulated Leaves/Water flow */}
                <path d="M40,40 Q60,10 90,30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M160,40 Q140,10 110,30" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M40,160 Q60,190 90,170" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M160,160 Q140,190 110,170" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <circle cx="20" cy="100" r="2" fill="currentColor" />
                <circle cx="180" cy="100" r="2" fill="currentColor" />
              </svg>
            </div>

            <div className="w-96 h-96 border border-[#5CA042] rounded-full flex items-center justify-center bg-white/40 backdrop-blur-[1px] relative z-10">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wider text-[#5CA042]">
                アクセス
              </h2>
            </div>
          </div>
        </motion.div>

        {/* Google Map */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-12 shadow-md rounded-sm bg-white p-2"
        >
          <div className="relative w-full aspect-video rounded-sm overflow-hidden border border-gray-200">
            <iframe
              src="https://maps.google.com/maps?q=とわだこ賑山亭&z=9&output=embed&hl=ja"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 transition-all hover:opacity-100"
            />
          </div>
        </motion.div>

        {/* Access Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-center bg-white/70 backdrop-blur-sm p-8 rounded-sm"
        >
          <div className="mb-8">
            <h3 className="text-3xl md:text-4xl font-serif font-light mb-6">賑山亭</h3>
            <p className="text-gray-700 mb-4 font-light text-lg md:text-xl">〒018-5511 秋田県鹿角郡小坂町十和田湖休平35</p>
            <p className="text-gray-600 text-base md:text-lg mb-4 font-light tracking-wider">TEL : 0176-75-2711 ／ FAX : 0176-75-2688</p>
          </div>



          <Link href="/access" className="inline-block mt-10 px-12 py-4 border border-[#5CA042] text-[#5CA042] text-lg tracking-widest hover:bg-[#5CA042] hover:text-white transition-all duration-300 rounded-sm font-light bg-white">
            詳細
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
