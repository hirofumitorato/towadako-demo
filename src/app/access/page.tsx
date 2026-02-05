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
                    <h2 className="text-3xl md:text-4xl font-serif text-[#006400] mb-12 flex flex-col items-center">
                        <span>お車でお越しの方</span>
                        <span className="w-16 h-0.5 bg-[#006400] mt-6"></span>
                    </h2>

                    <div className="w-full overflow-hidden mb-12">
                        <Image
                            src="/images/access/car_diagram.png"
                            alt="お車でのアクセス図"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>

                    {/* Parking Info */}
                    <div className="max-w-5xl mx-auto border-t border-gray-300 pt-10 flex flex-col md:flex-row gap-8 md:gap-16 text-left">
                        <div className="flex-1">
                            <p className="text-gray-800 font-serif text-lg md:text-xl font-medium leading-loose">
                                当館正面駐車場、および当館に向かって右側の駐車スペースをご利用ください。
                            </p>
                        </div>
                        <div className="flex-1">
                            <dl className="grid grid-cols-[auto_1fr] gap-x-8 gap-y-6 font-serif">
                                <dt className="text-gray-800 font-bold text-lg md:text-xl">駐車場</dt>
                                <dd className="text-gray-800 text-lg md:text-xl">有り（無料）</dd>

                                <dt className="text-gray-800 font-bold text-lg md:text-xl whitespace-nowrap">ご注意</dt>
                                <dd className="text-gray-800 text-base md:text-lg leading-relaxed">
                                    ※普通車以外のお車を駐車ご希望の場合は予めご相談ください。
                                </dd>
                            </dl>
                        </div>
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
                    <h2 className="text-3xl md:text-4xl font-serif text-[#006400] mb-8 flex flex-col items-center">
                        <span>電車・バスでお越しの方</span>
                        <span className="w-16 h-0.5 bg-[#006400] mt-6"></span>
                    </h2>

                    <div className="w-full overflow-hidden mb-8">
                        <Image
                            src="/images/access/train_bus_diagram.png"
                            alt="電車・バスでのアクセス図"
                            width={0}
                            height={0}
                            sizes="100vw"
                            style={{ width: '100%', height: 'auto' }}
                        />
                    </div>

                    <div className="max-w-4xl mx-auto bg-[#E8E4D9] rounded-xl p-6 md:p-10 shadow-sm">
                        <p className="text-gray-800 font-serif text-lg md:text-xl leading-loose font-medium">
                            ◎バスは全便、ＪＲバス十和田湖駅（休屋）終点にて下車。徒歩４〜５分です。<br />
                            ご到着時、お電話いただければお迎えも致します。（１５：００〜１８：００の間）
                        </p>
                    </div>
                </motion.div>

            </section>
        </main>
    );
}
