"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";

const items = [
    {
        id: 1,
        title: "“本格”炉端焼き料理",
        description: "北東北の中心に位置する十和田湖だからこその、日本海、太平洋、津軽湾から仕入れた新鮮で美味しい海の幸を、旨さを引き出す炭火焼きでお楽しみください。",
        images: [
            "/images/recommended/robatayaki.png",
            "/images/recommended/robatayaki_2.jpg",
            "/images/recommended/robatayaki_3.jpg"
        ],
        link: "/meal",
    },
    {
        id: 2,
        title: "十和田湖畔温泉",
        description: "十和田湖を望む露天風呂で、自然の恵みを感じながら心身をリラックス。日帰り入浴も可能です。",
        images: ["/images/recommended/onsen.jpg"],
        link: "/bath",
    },
    {
        id: 3,
        title: "十和田湖・奥入瀬渓流",
        description: "四季折々の表情を見せる十和田湖と、躍動感あふれる奥入瀬渓流。大自然が織りなす絶景の中、心洗われるひとときを。",
        images: ["/images/recommended/oirase.png"],
        link: "/sightseeing",
    },
];

export default function Recommended() {
    const containerRef = useRef(null);
    const isInView = useInView(containerRef, { once: true, margin: "-100px" });

    return (
        <section id="recommended" ref={containerRef} className="py-24 md:py-32 bg-white overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-24 md:mb-32"
                >
                    <h2 className="text-3xl md:text-5xl font-serif font-medium tracking-wider mb-2">おすすめポイント</h2>
                    <p className="text-sm md:text-base font-serif text-gray-500 tracking-widest uppercase">Recommended</p>
                </motion.div>

                <div className="flex flex-col gap-24 md:gap-40">
                    {items.map((item, index) => (
                        <RecommendedItem key={item.id} item={item} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}

function RecommendedItem({ item, index }: { item: typeof items[0], index: number }) {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-15%" });
    const isEven = index % 2 === 0;

    return (
        <div ref={ref} className="flex flex-col md:flex-row gap-8 md:gap-16 items-center">
            {/* Text Column */}
            <motion.div
                className={`w-full md:w-5/12 flex flex-col items-center md:items-start text-center md:text-left ${isEven ? 'md:order-1' : 'md:order-2'}`}
                initial={{ x: isEven ? -50 : 50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: isEven ? -50 : 50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
            >
                <div className="p-4 md:p-0 flex flex-col justify-center w-full">
                    <h3 className="text-3xl md:text-[40px] font-serif font-medium mb-8 md:leading-tight">
                        {item.title}
                    </h3>
                    <p className="text-lg md:text-[22px] leading-loose text-gray-800 font-light mb-12 font-serif">
                        {item.description}
                    </p>
                    <div className="text-center md:text-left">
                        <Link
                            href={item.link}
                            className="inline-block px-12 py-4 border border-brand-green text-brand-green text-lg tracking-widest hover:bg-brand-green hover:text-white transition-all duration-300"
                        >
                            詳しく見る
                        </Link>
                    </div>
                </div>
            </motion.div>

            {/* Image Column */}
            <motion.div
                className={`w-full md:w-7/12 ${isEven ? 'md:order-2' : 'md:order-1'}`}
                initial={{ x: isEven ? 50 : -50, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: isEven ? 50 : -50, opacity: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
            >
                <div className="relative w-full aspect-[4/3] overflow-hidden rounded-sm shadow-lg bg-gray-50">
                    {item.images.length > 1 ? (
                        <CrossFadeImage images={item.images} />
                    ) : (
                        <div
                            className="absolute inset-0 w-full h-full bg-cover bg-center"
                            style={{ backgroundImage: `url('${item.images[0]}')` }}
                        />
                    )}
                </div>
            </motion.div>
        </div>
    );
}

// Cross Fade Component
function CrossFadeImage({ images }: { images: string[] }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (images.length <= 1) return;
        const timer = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % images.length);
        }, 6000);
        return () => clearInterval(timer);
    }, [images.length]);

    return (
        <div className="relative w-full h-full overflow-hidden bg-gray-50">
            <AnimatePresence initial={false}>
                <motion.div
                    key={currentIndex}
                    className="absolute inset-0 w-full h-full bg-cover bg-center"
                    style={{ backgroundImage: `url('${images[currentIndex]}')` }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1.5, ease: "easeInOut" }}
                />
            </AnimatePresence>
        </div>
    );
}
