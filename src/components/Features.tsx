"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    number: 1,
    title: "こんこんと湧く山の",
    description: "十和田湖を望む露天風呂で、自然の恵みを感じながら心身をリラックス。日帰り入浴も可能です。",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1200&q=80",
    imagePosition: "right" as const,
  },
  {
    number: 2,
    title: "山々と宿を繋ぐ中庭",
    description: "足湯に浸ったり、そぞろ歩いたりする中庭を設えました。山々が新緑に映え、紅葉に色づき、雪景色に抱かれる、山容の鮮やかな移り変わりを眺める絶好の場です。",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80",
    imagePosition: "left" as const,
  },
  {
    number: 3,
    title: "山々の恵みを",
    description: "地元の新鮮な食材を使用した季節の会席料理をお楽しみいただけます。十和田湖の恵みを活かした創作和食をお召し上がりください。",
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=1200&q=80",
    imagePosition: "right" as const,
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="facilities"
      ref={ref}
      className="py-24 md:py-32 bg-white"
    >
      <div className="container mx-auto px-6">
        {features.map((feature, index) => (
          <motion.div
            key={feature.number}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col ${
              feature.imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
            } items-center gap-12 md:gap-16 mb-24 last:mb-0`}
          >
            {/* Text Section */}
            <div className="flex-1 flex items-center justify-center">
              <div className="flex items-center gap-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center text-2xl font-serif mb-4 shadow-sm">
                    {feature.number}
                  </div>
                  <div className="writing-vertical-rl text-2xl md:text-3xl font-serif font-light tracking-wider text-gray-800">
                    {feature.title}
                  </div>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full">
              <div className="relative aspect-[4/3] overflow-hidden rounded-sm">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url('${feature.image}')` }}
                />
              </div>
              <p className="mt-8 text-gray-700 leading-relaxed font-light text-sm">
                {feature.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
