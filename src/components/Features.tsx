"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    number: 1,
    title: "“本格”炉端焼き料理",
    description: "北東北の中心に位置する十和田湖だからこその、日本海、太平洋、津軽湾から仕入れた新鮮で美味しい海の幸を、旨さを引き出す炭火焼きでお楽しみください。",
    image: "/images/recommended/robatayaki.png",
    imagePosition: "right" as const,
    link: "#meal",
  },
  {
    number: 2,
    title: "十和田湖畔温泉",
    description: "十和田湖を望む露天風呂で、自然の恵みを感じながら心身をリラックス。日帰り入浴も可能です。",
    image: "/images/recommended/onsen.jpg",
    imagePosition: "left" as const,
    link: "#facilities",
  },
  {
    number: 3,
    title: "十和田湖・奥入瀬渓流",
    description: "四季折々の表情を見せる十和田湖と、躍動感あふれる奥入瀬渓流。大自然が織りなす絶景の中、心洗われるひとときを。",
    image: "/images/recommended/oirase.png",
    imagePosition: "right" as const,
    link: "#sightseeing",
  },
];

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="facilities"
      ref={ref}
      className="py-24 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Background Motif B: Rice & Sansai (Top Left) */}
      <div className="absolute top-0 left-0 opacity-[0.18] pointer-events-none z-0 transform -translate-x-1/4 -translate-y-1/4 md:translate-x-0 md:translate-y-0">
        <svg width="400" height="500" viewBox="0 0 400 500" fill="none" stroke="#556B2F" strokeWidth="1.5">
          {/* Rice Ear (Inaho) - Curved stalk dropping grains */}
          <path d="M200,500 Q180,300 250,150 Q280,100 320,80" />
          {/* Grains */}
          <ellipse cx="260" cy="140" rx="8" ry="4" transform="rotate(20 260 140)" fill="currentColor" />
          <ellipse cx="270" cy="120" rx="8" ry="4" transform="rotate(30 270 120)" fill="currentColor" />
          <ellipse cx="290" cy="100" rx="8" ry="4" transform="rotate(40 290 100)" fill="currentColor" />
          <ellipse cx="240" cy="160" rx="8" ry="4" transform="rotate(10 240 160)" fill="currentColor" />

          {/* Sansai (Fern-like) */}
          <path d="M100,500 Q120,400 80,300" strokeWidth="2" />
          <path d="M80,300 Q60,280 40,290" />
          <path d="M80,300 Q100,280 120,290" />
          <circle cx="80" cy="300" r="3" fill="currentColor" />
        </svg>
      </div>

      {/* Background Motif C: Charcoal (Bottom Right) */}
      <div className="absolute bottom-0 right-0 opacity-[0.15] pointer-events-none z-0 overflow-hidden">
        <svg width="500" height="400" viewBox="0 0 500 400" fill="none" stroke="#333" strokeWidth="1">
          {/* Charcoal Net Pattern (Grid) */}
          <path d="M100,400 L500,0" />
          <path d="M200,400 L500,100" />
          <path d="M300,400 L500,200" />
          <path d="M400,400 L500,300" />
          <path d="M0,300 L300,0" />
          <path d="M0,200 L200,0" />
          <path d="M0,100 L100,0" />
          {/* Flames/Heat lines (Organic) */}
          <path d="M250,350 Q280,250 240,150" strokeWidth="2" strokeOpacity="0.5" />
          <path d="M300,380 Q320,280 290,180" strokeWidth="2" strokeOpacity="0.5" />
        </svg>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {features.map((feature, index) => (
          <motion.div
            key={feature.number}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col ${feature.imagePosition === "right" ? "md:flex-row" : "md:flex-row-reverse"
              } items-center gap-12 md:gap-16 mb-24 last:mb-0`}
          >
            {/* Text Section */}
            <div className={`flex-1 flex flex-col items-center justify-center p-6 md:p-10 rounded-sm ${index % 2 === 1 ? "bg-white/80 backdrop-blur-[1px]" : ""
              }`}>
              <div className="flex items-center gap-8 mb-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-brand-green text-white flex items-center justify-center text-2xl font-serif mb-4 shadow-sm">
                    {feature.number}
                  </div>
                  <div className="writing-vertical-rl text-2xl md:text-3xl font-serif font-light tracking-wider text-gray-800">
                    {feature.title}
                  </div>
                </div>
              </div>

              {/* Description & Button */}
              <div className="mt-8 max-w-sm">
                <p className="text-gray-600 leading-relaxed font-light text-sm mb-6 text-center md:text-left">
                  {feature.description}
                </p>
                <div className="text-center md:text-left">
                  <a
                    href={feature.link}
                    className="inline-block px-8 py-2 border border-brand-green text-brand-green font-light tracking-widest hover:bg-brand-green hover:text-white transition-all duration-300 text-sm bg-white/50"
                  >
                    詳しく見る
                  </a>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 w-full flex flex-col items-center">
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-md">
                <div
                  className="absolute inset-0 bg-cover bg-center transition-transform duration-700 hover:scale-105"
                  style={{ backgroundImage: `url('${feature.image}')` }}
                />
              </div>

            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
