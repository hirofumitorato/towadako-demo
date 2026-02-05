"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function AccessPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop"
                        alt="Access Background"
                        fill
                        className="object-cover brightness-[0.7]"
                        priority
                    />
                </div>
                <div className="relative z-10 text-center text-white p-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h1 className="text-4xl md:text-6xl font-serif font-medium mb-4 tracking-widest">
                            交通アクセス
                        </h1>
                        <p className="text-sm md:text-base font-serif tracking-widest uppercase opacity-90">
                            ACCESS
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Breadcrumb */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4 text-center">
                    <p className="font-serif text-gray-500 tracking-wider">
                        <Link href="/" className="hover:text-[#5CA042] transition-colors">ホーム</Link>
                        <span className="mx-4">＞</span>
                        <span>交通アクセス</span>
                    </p>
                </div>
            </section>

            {/* Access Content */}
            <section className="py-16 px-4 md:px-8 max-w-7xl mx-auto space-y-24">

                {/* Google Map Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <h2 className="text-3xl md:text-4xl font-serif text-[#5CA042] mb-12 flex flex-col items-center">
                        <span>周辺地図</span>
                        <span className="w-16 h-0.5 bg-[#5CA042] mt-6"></span>
                    </h2>
                    <div className="w-full aspect-video overflow-hidden">
                        <iframe
                            src="https://maps.google.com/maps?q=とわだこ賑山亭&z=14&output=embed&hl=ja"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="w-full h-full"
                        />
                    </div>
                </motion.div>

                {/* Car Access */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="w-full overflow-hidden">
                        <Image
                            src="/images/access/car.png"
                            alt="お車でのアクセス図"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </motion.div>

                {/* Train/Bus Access */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="w-full overflow-hidden">
                        <Image
                            src="/images/access/train_bus.png"
                            alt="電車・バスでのアクセス図"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </motion.div>

                {/* Flight Access */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center"
                >
                    <div className="w-full overflow-hidden">
                        <Image
                            src="/images/access/flight.png"
                            alt="飛行機でのアクセス図"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>
                </motion.div>

            </section>
        </main>
    );
}
