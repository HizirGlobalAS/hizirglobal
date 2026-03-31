"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Target, Zap, ShieldCheck } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function AboutClient({ dict }: { dict: any }) {
    const [openTimeline, setOpenTimeline] = useState<number | null>(null);

    const timelineData = [
        { year: "2023", title: "Kuruluş ve İlk Adımlar", desc: "Hızır Global, operasyonel temellerini atarak Ankara'da faaliyetlerine başladı." },
        { year: "2024", title: "Merkezin İstanbul'a Taşınması ve Gübre Projesi", desc: "Ankara'daki pilot operasyonların ardından, daha güçlü bir kurumsal yapılanma hedefiyle merkezimiz İstanbul'a taşındı ve kapsamlı gübre projemizin faaliyetlerine start verildi." },
        { year: "2025", title: "Satış Hakları ve Küresel Hazırlık", desc: "Türkiye genelinde gübre satış hakları resmi olarak alınarak fiili satışlara başlandı. Eş zamanlı olarak, uluslararası açılım için stratejik ön hazırlık süreçleri devreye alındı." },
        { year: "2026", title: "Küresel Pazar ve Şirketleşme Adımları", desc: "Uluslararası büyüme stratejisi doğrultusunda; Azerbaycan, Kanada, Moldova, Sırbistan, Singapur, ABD (Kaliforniya), İngiltere ve Almanya gibi stratejik pazarlarda kurumsal çalışmalar ve şirketleşme adımları başlatıldı." }
    ];

    return (
        <div className="flex flex-col gap-12 mt-12 w-full">
            {/* Konsolide Edilmiş Misyon / Vizyon / Değerler */}
            <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded-xl shadow-sm dark:shadow-none hover:border-primary/50 transition-colors group">
                    <Target className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-body">{dict.why_us.card_1_title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-body leading-relaxed">{dict.why_us.card_1_desc}</p>
                </div>
                <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded-xl shadow-sm dark:shadow-none hover:border-primary/50 transition-colors group">
                    <Zap className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-body">{dict.why_us.card_2_title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-body leading-relaxed">{dict.why_us.card_2_desc}</p>
                </div>
                <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded-xl shadow-sm dark:shadow-none hover:border-primary/50 transition-colors group">
                    <ShieldCheck className="w-10 h-10 text-primary mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 font-body">{dict.why_us.card_3_title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 font-body leading-relaxed">{dict.why_us.card_3_desc}</p>
                </div>
            </div>

            {/* Tarihçe (Timeline) Katmanlı Yapı (Accordion) */}
            <div className="mt-16 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 md:p-12 rounded-xl shadow-sm dark:shadow-none">
                <h3 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-8 border-b border-gray-200 dark:border-white/10 pb-4">
                    Kurumsal Tarihçemiz
                </h3>
                <div className="space-y-4">
                    {timelineData.map((item, index) => (
                        <div key={index} className="border border-black/5 dark:border-white/5 rounded-lg overflow-hidden bg-gray-50 dark:bg-black/20">
                            <button
                                onClick={() => setOpenTimeline(openTimeline === index ? null : index)}
                                className="w-full flex items-center justify-between p-6 text-left hover:bg-black/5 dark:hover:bg-white/5 transition-colors"
                            >
                                <div className="flex items-center gap-6">
                                    <span className="text-2xl font-bold text-primary opacity-80">{item.year}</span>
                                    <span className="font-bold text-gray-900 dark:text-white text-lg">{item.title}</span>
                                </div>
                                <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openTimeline === index ? "rotate-180" : ""}`} />
                            </button>
                            <AnimatePresence>
                                {openTimeline === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden bg-white dark:bg-[#121212]"
                                    >
                                        <p className="p-6 pt-2 text-gray-600 dark:text-gray-400 text-sm border-t border-black/5 dark:border-white/5 mt-2 mx-6">
                                            {item.desc}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>

            {/* Quote Block Katmanlı Vurgu */}
            <div className="mt-12 mb-10 border-l-4 border-primary pl-8 py-4 bg-primary/5 dark:bg-transparent p-6 dark:p-0 rounded-r dark:rounded-none relative">
                <p className="text-3xl font-display font-bold mb-4 text-gray-900 dark:text-white leading-relaxed">
                    &quot;{dict.why_us.quote}&quot;
                </p>
                <p className="text-primary font-bold tracking-widest uppercase text-sm">
                    {dict.why_us.quote_author}
                </p>
            </div>
        </div>
    );
}
