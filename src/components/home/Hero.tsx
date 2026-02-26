"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Play, ArrowDown, X } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Hero({ dict, lang }: { dict: any, lang: string }) {
    const [isVideoOpen, setIsVideoOpen] = useState(false);

    return (
        <>
            <section className="relative h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop"
                        alt="Logistics Background"
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/60 z-10" />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white dark:via-[#0F0F0F]/60 dark:to-[#0F0F0F] z-20" />
                </div>

                <div className="container mx-auto px-6 relative z-30 text-center mt-24 md:mt-32">
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="inline-block py-1.5 px-4 rounded-full bg-primary/10 border border-primary/30 text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.2em] mb-8 backdrop-blur-sm"
                    >
                        {dict.hero.badge}
                    </motion.span>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold text-gray-900 dark:text-white mb-8 leading-none tracking-tight break-words"
                    >
                        {dict.hero.title_main} <br />
                        <span className="text-primary">{dict.hero.title_highlight}</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 font-light leading-relaxed font-body"
                    >
                        {dict.hero.description}
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        className="flex flex-col md:flex-row gap-4 justify-center items-center"
                    >
                        <Link
                            href={`/${lang}/#markalar`}
                            className="px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-black font-bold uppercase tracking-widest text-sm rounded hover:bg-gray-800 dark:hover:bg-gray-200 transition-colors w-full md:w-auto font-body"
                        >
                            {dict.hero.discover_brands}
                        </Link>
                        <button
                            onClick={() => setIsVideoOpen(true)}
                            className="group flex items-center justify-center gap-3 px-8 py-4 border border-gray-900/20 dark:border-white/20 hover:border-primary/50 text-gray-900 dark:text-white rounded hover:bg-black/5 dark:hover:bg-white/5 transition-all w-full md:w-auto font-body"
                        >
                            <span className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                <Play fill="currentColor" size={12} />
                            </span>
                            <span className="font-bold text-sm uppercase tracking-widest">
                                {dict.hero.promo_film}
                            </span>
                        </button>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 1,
                        delay: 1,
                        repeat: Infinity,
                        repeatType: "reverse",
                    }}
                    className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-30"
                >
                    <ArrowDown className="text-white/30" size={32} />
                </motion.div>
            </section>

            <AnimatePresence>
                {isVideoOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 md:p-10 backdrop-blur-md"
                        onClick={() => setIsVideoOpen(false)}
                    >
                        <button
                            className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
                            onClick={() => setIsVideoOpen(false)}
                        >
                            <X size={32} />
                        </button>

                        <motion.div
                            initial={{ scale: 0.95, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.95, opacity: 0 }}
                            transition={{ delay: 0.1 }}
                            className="relative w-full max-w-6xl aspect-video rounded-xl overflow-hidden shadow-2xl border border-white/10"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <iframe
                                className="w-full h-full"
                                src="https://www.youtube.com/embed/xkQPJ2RtTpA?autoplay=1"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
