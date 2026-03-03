"use client";

import { useState, useEffect } from "react";
import { X, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar({ dict, lang }: { dict: any, lang: string }) {
    const [isVisible, setIsVisible] = useState(true);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        const dismissed = sessionStorage.getItem("announcement-dismissed");
        if (dismissed) {
            setIsVisible(false);
        }
    }, []);

    if (!isMounted || !isVisible || !dict.announcement) return null;

    const handleDismiss = () => {
        setIsVisible(false);
        sessionStorage.setItem("announcement-dismissed", "true");
    };

    return (
        <div className="bg-primary text-white relative z-50 overflow-hidden">
            <div className="absolute inset-0 bg-white/20 dark:bg-black/20 transform -skew-x-12 translate-x-full animate-[shimmer_3s_infinite]"></div>

            <div className="container mx-auto px-6 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-6 text-center sm:text-left">
                <div className="flex items-center gap-3">
                    <span className="bg-white text-primary text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded-sm whitespace-nowrap">
                        {dict.announcement.badge}
                    </span>
                    <p className="text-sm font-semibold text-white/90">
                        {dict.announcement.message}
                    </p>
                </div>

                <Link
                    href={`/${lang}/ib-bor`}
                    className="group inline-flex items-center text-xs font-bold uppercase tracking-widest text-white hover:text-white border-b border-white/30 pb-0.5 hover:border-white transition-colors"
                >
                    {dict.announcement.cta}
                    <ArrowRight className="ml-1 w-3 h-3 transform group-hover:translate-x-1 transition-transform" />
                </Link>

                <button
                    onClick={handleDismiss}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white p-2 transition-colors focus:outline-none"
                    aria-label="Close announcement"
                >
                    <X size={16} />
                </button>
            </div>
        </div>
    );
}
