"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

type InfoItem = {
  label: string;
  value?: string;
  description?: string;
  subDescription?: string;
  detail?: boolean;
};

const infoItems: InfoItem[] = [
  {
    label: "総客室数",
    value: "26室",
  },
  {
    label: "客室定員",
    value: "1~4名",
  },
  {
    label: "温泉",
    value: "1",
  },
  {
    label: "チェックイン/アウト",
    value: "15:00 / 10:00",
  },
  {
    label: "Wi-Fi",
    description: "全客室、共用エリア (無料)",
  },
  {
    label: "こども添い寝",
    description: "6歳まで、1室あたり定員人数まで可。",
  },
  {
    label: "ペット受け入れ",
    description: "可 → 2室限定",
  },
  {
    label: "送迎",
    value: "なし",
  },
  {
    label: "駐車場",
    description: "あり (予約不要・無料)",
  },
  {
    label: "現地払い",
    description: "現金、各種クレジットカード、交通系、QRコード決済",
  },
];

export default function BasicInfo() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="info"
      ref={ref}
      className="py-24 md:py-32 bg-background-beige"
    >
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block relative">
            <div className="w-96 h-96 border border-gray-300 rounded-full flex items-center justify-center">
              <h2 className="text-3xl md:text-4xl font-serif font-light tracking-wider">
                基本情報
              </h2>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {infoItems.map((item, index) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-white p-8 rounded-sm border-b border-gray-200 hover:border-brand-green transition-colors duration-300 h-full flex flex-col"
            >
              {/* Label */}
              <h3 className="text-sm font-light text-gray-600 mb-4 tracking-wider uppercase">
                {item.label}
              </h3>

              {/* Divider */}
              <div className="w-12 h-[1px] bg-gray-300 mb-6" />

              {/* Value or Description */}
              <div className="flex-grow">
                {item.value && (
                  <p className="text-xl font-serif font-light text-gray-800 mb-4">
                    {item.value}
                  </p>
                )}
                {item.description && (
                  <p className="text-xl font-serif font-light text-gray-800 mb-4 leading-relaxed">
                    {item.description}
                  </p>
                )}
                {item.subDescription && (
                  <p className="text-xs text-gray-500 font-light mt-2 leading-relaxed">
                    {item.subDescription}
                  </p>
                )}
              </div>

              {item.detail && (
                <div className="mt-auto pt-6">
                  <button className="text-xs text-brand-green border border-brand-green px-4 py-2 rounded-sm hover:bg-brand-green hover:text-white transition-colors duration-300 font-light tracking-wider">
                    詳細
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
