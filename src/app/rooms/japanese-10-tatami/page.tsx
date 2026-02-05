"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Japanese10TatamiPage() {
    return (
        <main className="bg-[#F9F7F2] min-h-screen pt-24 pb-24">
            <div className="container mx-auto px-6">
                {/* Breadcrumb / Back Link */}
                <div className="mb-12">
                    <Link href="/#rooms" className="text-gray-500 hover:text-brand-green transition-colors text-sm tracking-wider flex items-center gap-2">
                        ← お部屋一覧に戻る
                    </Link>
                </div>

                {/* Header Section */}
                <div className="text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-serif text-[#006400] mb-6 tracking-widest">
                        和室10畳
                    </h1>
                    <div className="w-16 h-0.5 bg-[#006400] mx-auto"></div>
                </div>

                {/* Hero Image */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="w-full max-w-5xl mx-auto aspect-[16/9] relative overflow-hidden rounded-sm shadow-md mb-16"
                >
                    <Image
                        src="/images/rooms/japanese_10_tatami.png"
                        alt="和室10畳"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 90vw, 1024px"
                        priority
                    />
                </motion.div>

                {/* Description & Specs */}
                <div className="max-w-4xl mx-auto mb-24">
                    <p className="text-gray-700 leading-loose font-light text-center mb-16 text-lg">
                        初対面でもどこか懐かしい...そんな居心地の良さが感じられる客室です。<br />
                        全室、和室でバス・洗浄機付きトイレ完備です。<br />
                        <span className="text-sm text-gray-500 block mt-4">※簡易ベッドの設置も可能です。事前にお問い合わせください。</span>
                    </p>

                    <div className="bg-white p-8 md:p-12 rounded-sm shadow-sm">
                        <h3 className="text-xl font-serif text-gray-800 mb-8 flex items-center gap-4">
                            <span className="w-1 h-6 bg-brand-green block"></span>
                            お部屋詳細
                        </h3>
                        <dl className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="border-b border-gray-100 pb-4">
                                <dt className="text-gray-500 text-sm mb-2">定員</dt>
                                <dd className="text-xl font-serif text-gray-800">5名</dd>
                            </div>
                            <div className="border-b border-gray-100 pb-4">
                                <dt className="text-gray-500 text-sm mb-2">広さ</dt>
                                <dd className="text-xl font-serif text-gray-800">10畳</dd>
                            </div>
                            <div className="border-b border-gray-100 pb-4">
                                <dt className="text-gray-500 text-sm mb-2">室数</dt>
                                <dd className="text-xl font-serif text-gray-800">23室</dd>
                            </div>
                        </dl>
                    </div>
                </div>

                {/* Facilities & Amenities */}
                <div className="max-w-4xl mx-auto">
                    <div className="text-center mb-12">
                        <h2 className="text-2xl md:text-3xl font-serif text-[#006400] mb-4">客室設備・アメニティ</h2>
                        <div className="w-12 h-0.5 bg-[#006400] mx-auto opacity-50"></div>
                    </div>

                    <div className="bg-white rounded-sm shadow-sm overflow-hidden border border-gray-100">
                        <table className="w-full text-left border-collapse">
                            <tbody className="divide-y divide-gray-100 text-gray-700">
                                <tr className="group">
                                    <th className="py-6 px-6 bg-[#f9f9f9] w-1/3 md:w-1/4 font-medium text-sm md:text-base">客室数</th>
                                    <td className="py-6 px-6 text-sm md:text-base">全27室</td>
                                </tr>
                                <tr className="group">
                                    <th className="py-6 px-6 bg-[#f9f9f9] w-1/3 md:w-1/4 font-medium text-sm md:text-base align-top">客室設備</th>
                                    <td className="py-6 px-6 text-sm md:text-base leading-relaxed">
                                        テレビ、電話、お茶セット、冷蔵庫、金庫、<br />
                                        バス（ユニットタイプ・温泉ではありません。）、洗浄機付きトイレ、全室個別冷暖房
                                    </td>
                                </tr>
                                <tr className="group">
                                    <th className="py-6 px-6 bg-[#f9f9f9] w-1/3 md:w-1/4 font-medium text-sm md:text-base align-top">備品・アメニティ</th>
                                    <td className="py-6 px-6 text-sm md:text-base leading-relaxed">
                                        フェイスタオル、バスタオル、浴衣、スリッパ、ハミガキセット、<br />
                                        ボディーソープ, リンスインシャンプー, ハンドソープ
                                    </td>
                                </tr>
                                <tr className="group">
                                    <th className="py-6 px-6 bg-[#f9f9f9] w-1/3 md:w-1/4 font-medium text-sm md:text-base align-top">※ドライヤーについて</th>
                                    <td className="py-6 px-6 text-sm md:text-base leading-relaxed text-gray-600">
                                        ドライヤーは大浴場に設置しております。お部屋でご利用いただく場合はフロントにお声がけください。
                                    </td>
                                </tr>
                                <tr className="group">
                                    <th className="py-6 px-6 bg-[#f9f9f9] w-1/3 md:w-1/4 font-medium text-sm md:text-base align-top">※髭剃り・シャワーキャップについて</th>
                                    <td className="py-6 px-6 text-sm md:text-base leading-relaxed text-gray-600">
                                        男性大浴場には髭剃りを、女性大浴場にはシャワーキャップを設置しております。
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* CTA / Booking Button (Optional but good) */}
                <div className="text-center mt-24">
                    <Link href="https://reserve.489ban.net/client/towadako-shinzantei/0/plan" target="_blank" className="inline-block bg-[#006400] text-white px-12 py-4 text-lg tracking-widest hover:bg-[#004d00] transition-colors rounded-sm shadow-md">
                        宿泊予約はこちら
                    </Link>
                </div>

            </div>
        </main>
    );
}
