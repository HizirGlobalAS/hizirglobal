import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Globe, Cpu, Handshake } from "lucide-react";

export default function WhyUs({ dict }: { dict: any }) {
    return (
        <section className="py-32 bg-gray-50 dark:bg-[#121212] transition-colors duration-300" id="hakkimizda">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center gap-20">
                    <div className="lg:w-1/2">
                        <div className="relative group">
                            <div className="absolute -top-10 -left-10 w-64 h-64 bg-primary/10 rounded-full blur-[100px] opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
                            <div className="relative aspect-[4/5] w-full rounded shadow-2xl overflow-hidden border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02]">
                                <Image
                                    src="/3.jpg"
                                    alt="Corporate Strategy"
                                    fill
                                    className="object-cover grayscale hover:grayscale-0 transition-all duration-700"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-primary/20 rounded z-0 group-hover:border-primary/50 transition-colors duration-500"></div>
                            <div className="absolute bottom-10 left-10 z-20 bg-white/90 dark:bg-[#0F0F0F]/90 backdrop-blur-md p-6 border-l-4 border-primary shadow-xl max-w-xs">
                                <p className="text-gray-900 dark:text-white font-display text-2xl font-bold">
                                    &quot;{dict.why_us.quote}&quot;
                                </p>
                                <p className="text-gray-500 dark:text-gray-400 text-xs mt-2 uppercase tracking-wider font-body">
                                    {dict.why_us.quote_author}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        <h4 className="text-primary font-bold uppercase tracking-[0.2em] mb-6 text-xs flex items-center gap-3 font-body">
                            <span className="w-8 h-[1px] bg-primary"></span>
                            {dict.why_us.badge}
                        </h4>
                        <h2 className="text-4xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-8 leading-tight">
                            {dict.why_us.title_main} <br />
                            <span className="text-gray-500">{dict.why_us.title_highlight}</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 mb-10 leading-relaxed text-lg font-light font-body">
                            {dict.why_us.description}
                        </p>
                        <div className="grid grid-cols-1 gap-6 mb-12">
                            <div className="flex items-start gap-4 p-4 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] rounded hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors">
                                <span className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary mt-1">
                                    <Globe />
                                </span>
                                <div>
                                    <h5 className="text-gray-900 dark:text-white font-bold mb-1 font-body">{dict.why_us.card_1_title}</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-500 font-body">
                                        {dict.why_us.card_1_desc}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] rounded hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors">
                                <span className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary mt-1">
                                    <Cpu />
                                </span>
                                <div>
                                    <h5 className="text-gray-900 dark:text-white font-bold mb-1 font-body">{dict.why_us.card_2_title}</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-500 font-body">
                                        {dict.why_us.card_2_desc}
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-4 p-4 border border-black/5 dark:border-white/5 bg-black/[0.02] dark:bg-white/[0.02] rounded hover:bg-black/[0.05] dark:hover:bg-white/[0.05] transition-colors">
                                <span className="w-10 h-10 rounded bg-primary/10 flex items-center justify-center text-primary mt-1">
                                    <Handshake />
                                </span>
                                <div>
                                    <h5 className="text-gray-900 dark:text-white font-bold mb-1 font-body">{dict.why_us.card_3_title}</h5>
                                    <p className="text-sm text-gray-600 dark:text-gray-500 font-body">
                                        {dict.why_us.card_3_desc}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <Link
                            href="#"
                            className="text-primary font-bold uppercase tracking-widest text-xs hover:text-white transition-colors group flex items-center gap-3 font-body"
                        >
                            {dict.why_us.corporate_structure}
                            <ArrowRight className="transform group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
