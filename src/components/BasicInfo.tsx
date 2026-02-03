"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const infoItems = [
  {
    label: "総客室数",
    value: "49室",
  },
  {
    label: "客室定員",
    value: "1~4名",
  },
  {
    label: "レストラン",
    value: "1",
    detail: true,
  },
  {
    label: "カフェ/ラウンジ",
    value: "2",
    detail: true,
  },
  {
    label: "スパ/マッサージ",
    value: "1",
    detail: true,
  },
  {
    label: "温泉",
    value: "3",
    detail: true,
  },
  {
    label: "チェックイン/アウト",
    value: "3:00 PM / 12:00 PM",
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
    subDescription: "中型犬 (20kg以下) 2頭まで",
  },
  {
    label: "記念日・お祝い",
    description: "界のお祝い箱",
    subDescription: "(要予約・前日4:00PMまで)",
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
    label: "EV充電",
    value: "なし",
  },
  {
    label: "事前払い",
    description: "Visa、Mastercard、American Express、Diners Club、JCB、ペイディ、永久不滅ポイント、星野リゾート宿泊ギフト券",
    subDescription: "→分割、後払い (コンビニ/銀行)",
  },
  {
    label: "現地払い",
    description: "現金、クレジットカード",
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
              className="bg-white p-8 rounded-sm border-b border-gray-200 hover:border-brand-green transition-colors duration-300"
            >
              {/* Label */}
              <h3 className="text-sm font-light text-gray-600 mb-4 tracking-wider uppercase">
                {item.label}
              </h3>
              
              {/* Divider */}
              <div className="w-12 h-[1px] bg-gray-300 mb-6" />
              
              {/* Value or Description */}
              {item.value && (
                <p className="text-xl font-serif font-light text-gray-800 mb-4">
                  {item.value}
                </p>
              )}
              {item.description && (
                <p className="text-sm text-gray-700 font-light leading-relaxed mb-2">
                  {item.description}
                </p>
              )}
              {item.subDescription && (
                <p className="text-xs text-gray-500 font-light mt-2 leading-relaxed">
                  {item.subDescription}
                </p>
              )}
              {item.detail && (
                <button className="mt-6 text-xs text-brand-green border border-brand-green px-4 py-2 rounded-sm hover:bg-brand-green hover:text-white transition-colors duration-300 font-light tracking-wider">
                  詳細
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
