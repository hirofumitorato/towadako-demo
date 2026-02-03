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
      className="py-24 md:py-32 bg-white"
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
          className="mb-12"
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
              className="absolute inset-0"
            />
          </div>
        </motion.div>

        {/* Access Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="max-w-2xl mx-auto text-center"
        >
          <div className="mb-8">
            <h3 className="text-2xl font-serif font-light mb-4 text-gray-800">賑山亭</h3>
            <p className="text-gray-700 mb-2 font-light">〒018-5501 青森県十和田市十和田湖畔</p>
            <p className="text-gray-500 text-sm mb-4 font-light">Mapcode: 620 681 652*23</p>
          </div>

          <div className="space-y-4 text-left max-w-md mx-auto">
            <p className="text-gray-700 font-light">十和田湖バスターミナルより徒歩3分</p>
            <p className="text-gray-700 font-light">十和田湖ICより車で約5分</p>
            <p className="text-gray-700 font-light">JR青森駅より車で約45分</p>
          </div>

          <button className="mt-10 px-8 py-2.5 border border-gray-300 rounded-sm text-sm hover:border-brand-green hover:text-brand-green transition-colors duration-300 font-light tracking-wider">
            詳細
          </button>
        </motion.div>
      </div>
    </section>
  );
}
