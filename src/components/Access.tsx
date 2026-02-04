"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

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
            <div className="w-96 h-96 border border-gray-300 rounded-full flex items-center justify-center bg-white/40 backdrop-blur-[1px]">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wider">
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
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.1234567890123!2d140.85!3d40.45!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDI3JzAwLjAiTiAxNDDCsDUxJzAwLjAiRQ!5e0!3m2!1sja!2sjp!4v1234567890123!5m2!1sja!2sjp"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale contrast-[0.9] opacity-90 transition-all hover:grayscale-0 hover:opacity-100"
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
            <h3 className="text-2xl font-serif font-light mb-4">賑山亭</h3>
            <p className="text-gray-700 mb-2 font-light">〒018-5501 青森県十和田市十和田湖畔</p>
            <p className="text-gray-500 text-sm mb-4 font-light">Mapcode: 620 681 652*23</p>
          </div>

          <div className="space-y-4 text-left max-w-md mx-auto">
            <p className="text-gray-700 font-light border-b border-gray-100 pb-2">十和田湖バスターミナルより徒歩3分</p>
            <p className="text-gray-700 font-light border-b border-gray-100 pb-2">十和田湖ICより車で約5分</p>
            <p className="text-gray-700 font-light">JR青森駅より車で約45分</p>
          </div>

          <button className="mt-10 px-8 py-2.5 border border-gray-300 rounded-sm text-sm hover:border-brand-green hover:text-brand-green transition-colors duration-300 font-light tracking-wider bg-white">
            詳細
          </button>
        </motion.div>
      </div>
    </section>
  );
}
