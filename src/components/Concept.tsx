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
      className="py-24 md:py-32 bg-background-beige"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="max-w-[700px] mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-light mb-4 tracking-wider">
            コンセプト
          </h2>
          <p className="text-brand-green text-sm md:text-base tracking-[0.2em] mb-12 uppercase">
            Concept
          </p>
          <p className="text-base md:text-lg leading-relaxed text-gray-700 font-light">
            十和田湖の美しい自然に囲まれた静かな環境で、伝統的な和の心と現代的な快適さを融合させた特別な滞在体験をお届けします。
            四季折々の風景と共に、心身ともにリフレッシュできる時間をお過ごしください。
          </p>
        </motion.div>
      </div>
    </section>
  );
}
