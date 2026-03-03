"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowRight, Globe } from "lucide-react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";

export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: dict.nav.about, href: `/${lang}/about` },
        { name: dict.nav.brands, href: `/${lang}/brands` },
        { name: dict.nav.investor_relations, href: `/${lang}/investor-relations` },
        { name: dict.nav.careers, href: `/${lang}/careers` },
        { name: dict.nav.contact, href: `/${lang}/contact` },
    ];

    const switchLanguage = (newLang: string) => {
        if (!pathname) return `/${newLang}`;
        const segments = pathname.split("/");
        segments[1] = newLang;
        return segments.join("/");
    };

    return (
        <nav
            className={`w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 glass-nav shadow-lg py-4" : "absolute bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                <Link href={`/${lang}`} className="flex items-center gap-2 group">
                    <div className="h-10 overflow-hidden flex items-center relative w-40">
                        <Image
                            src="/hizir-global.png"
                            alt={dict.common.company_name}
                            fill
                            className="object-contain dark:invert dark:brightness-0 dark:filter dark:contrast-200 transition-all duration-300"
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-xs font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-primary transition-colors font-body"
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* Language Switcher Dropdown */}
                    <div className="relative group flex items-center justify-center min-w-[50px] py-1 h-full">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300 cursor-pointer hover:text-primary transition-colors">
                            <Globe size={14} />
                            <span>{lang.toUpperCase()}</span>
                        </div>

                        <div className="absolute top-[80%] right-0 mt-2 w-32 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md border border-black/10 dark:border-white/10 rounded overflow-hidden shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            <Link
                                href={switchLanguage("tr")}
                                className={`block px-4 py-3 text-xs font-bold transition-colors ${lang === "tr" ? "text-primary bg-primary/10" : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"}`}
                            >
                                Türkçe (TR)
                            </Link>
                            <Link
                                href={switchLanguage("en")}
                                className={`block px-4 py-3 text-xs font-bold transition-colors border-t border-black/5 dark:border-white/5 ${lang === "en" ? "text-primary bg-primary/10" : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"}`}
                            >
                                English (EN)
                            </Link>
                            <Link
                                href={switchLanguage("ru")}
                                className={`block px-4 py-3 text-xs font-bold transition-colors border-t border-black/5 dark:border-white/5 ${lang === "ru" ? "text-primary bg-primary/10" : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"}`}
                            >
                                Русский (RU)
                            </Link>
                            <Link
                                href={switchLanguage("az")}
                                className={`block px-4 py-3 text-xs font-bold transition-colors border-t border-black/5 dark:border-white/5 ${lang === "az" ? "text-primary bg-primary/10" : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"}`}
                            >
                                Azərbaycanca (AZ)
                            </Link>
                        </div>
                    </div>

                    <ThemeSwitcher />

                    <Link
                        href={`/${lang}/franchise`}
                        className="inline-flex items-center justify-center px-6 py-3 text-xs font-bold text-white uppercase tracking-widest bg-primary hover:bg-primary-hover rounded shadow-[0_0_15px_rgba(30,171,127,0.3)] hover:shadow-[0_0_25px_rgba(30,171,127,0.5)] transition-all duration-300 font-body"
                    >
                        {dict.nav.franchise_apply}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-gray-900 dark:text-white focus:outline-none"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={32} /> : <Menu size={32} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            {isMobileMenuOpen && (
                <div className="lg:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#0F0F0F]/95 backdrop-blur-xl border-t border-black/5 dark:border-white/5 p-6 flex flex-col space-y-4 shadow-2xl">
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-gray-300 hover:text-primary transition-colors block"
                            onClick={() => setIsMobileMenuOpen(false)}
                        >
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex flex-wrap items-center gap-4 py-2 border-t border-black/5 dark:border-white/10 mt-2 pt-4">
                        <Link
                            href={switchLanguage("tr")}
                            className={`text-sm font-bold ${lang === "tr" ? "text-primary" : "text-gray-900 dark:text-white"}`}
                        >
                            Türkçe
                        </Link>
                        <Link
                            href={switchLanguage("en")}
                            className={`text-sm font-bold ${lang === "en" ? "text-primary" : "text-gray-900 dark:text-white"}`}
                        >
                            English
                        </Link>
                        <Link
                            href={switchLanguage("ru")}
                            className={`text-sm font-bold ${lang === "ru" ? "text-primary" : "text-gray-900 dark:text-white"}`}
                        >
                            Русский
                        </Link>
                        <Link
                            href={switchLanguage("az")}
                            className={`text-sm font-bold ${lang === "az" ? "text-primary" : "text-gray-900 dark:text-white"}`}
                        >
                            Azərbaycanca
                        </Link>
                    </div>

                    <Link
                        href={`/${lang}/franchise`}
                        className="inline-flex items-center justify-center px-6 py-4 text-xs font-bold text-white uppercase tracking-widest bg-primary hover:bg-primary-hover rounded w-full"
                        onClick={() => setIsMobileMenuOpen(false)}
                    >
                        {dict.nav.franchise_apply}
                        <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                </div>
            )}
        </nav>
    );
}
