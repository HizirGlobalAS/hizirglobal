"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { Menu, X, ArrowRight, Globe, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import ThemeSwitcher from "@/components/layout/ThemeSwitcher";
import { motion, AnimatePresence } from "framer-motion";

type NavItem = {
    name: string;
    href: string;
    children?: { name: string; href: string }[];
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Navbar({ dict, lang }: { dict: any, lang: string }) {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
    const [openMobileAccordion, setOpenMobileAccordion] = useState<string | null>(null);
    const pathname = usePathname();

    const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // 1. Kurumsal Mimari Planına Göre Linkler
    // Çevirilerin dict objesinden güvenle çekilmesi veya fallback yapılması
    const t = {
        corporate: dict?.nav?.about || (lang === 'en' ? 'Corporate' : lang === 'ru' ? 'Корпоративный' : lang === 'az' ? 'Korporativ' : 'Kurumsal'),
        about: dict?.nav?.about || 'Hakkımızda',
        management: dict?.nav?.management || (lang === 'en' ? 'Management' : lang === 'ru' ? 'Управление' : lang === 'az' ? 'Rəhbərlik' : 'Yönetim'),
        brands: dict?.nav?.brands || 'Markalarımız',
        careers: dict?.nav?.careers || 'Kariyer',
        media: dict?.nav?.media || (lang === 'en' ? 'Media Center' : lang === 'ru' ? 'Медиа-центр' : lang === 'az' ? 'Media Mərkəzi' : 'Medya Merkezi'),
        gallery: dict?.nav?.gallery || 'Galeri',
        news: dict?.nav?.news || (lang === 'en' ? 'Announcements' : lang === 'ru' ? 'Объявления' : lang === 'az' ? 'Xəbərlər' : 'Duyurular'),
        contact: dict?.nav?.contact || 'İletişim',
        franchise: dict?.nav?.franchise_apply || 'Franchise/Başvuru'
    };

    const navLinks: NavItem[] = [
        { 
            name: t.corporate, 
            href: `/${lang}/about`
        },
        { name: t.brands, href: `/${lang}/brands` },
        { name: t.careers, href: `/${lang}/careers` },
        { 
            name: t.media, 
            href: `/${lang}/media-center`,
            children: [
                { name: t.media, href: `/${lang}/media-center` },
                { name: t.gallery, href: `/${lang}/gallery` }
            ]
        },
        { name: t.contact, href: `/${lang}/contact` },
    ];

    const switchLanguage = (newLang: string) => {
        if (!pathname) return `/${newLang}`;
        const segments = pathname.split("/");
        segments[1] = newLang;
        return segments.join("/");
    };

    const handleMouseEnter = (name: string) => {
        if (hoverTimeoutRef.current) clearTimeout(hoverTimeoutRef.current);
        setActiveDropdown(name);
    };

    const handleMouseLeave = () => {
        hoverTimeoutRef.current = setTimeout(() => {
            setActiveDropdown(null);
        }, 150); // 150ms delay for smoother UX (Hover intent)
    };

    const toggleMobileAccordion = (name: string) => {
        setOpenMobileAccordion(prev => prev === name ? null : name);
    };

    return (
        <nav
            className={`w-full z-50 transition-all duration-300 ${isScrolled ? "fixed top-0 glass-nav shadow-lg py-3" : "absolute bg-transparent py-5 lg:py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex justify-between items-center">
                
                {/* Logo */}
                <Link href={`/${lang}`} className="flex items-center gap-2 group">
                    <div className="h-10 overflow-hidden flex items-center relative w-36 lg:w-40 transition-transform duration-300 group-hover:scale-105">
                        <Image
                            src="/hizir-global.png"
                            alt={dict?.common?.company_name || "Hızır Global"}
                            fill
                            className="object-contain dark:invert dark:brightness-0 dark:filter dark:contrast-200 transition-all duration-300"
                        />
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden xl:flex items-center gap-4 xl:gap-5 2xl:gap-8">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || pathname?.startsWith(link.href + '/');
                        return (
                            <div 
                                key={link.name} 
                                className="relative group"
                                onMouseEnter={() => link.children && handleMouseEnter(link.name)}
                                onMouseLeave={() => link.children && handleMouseLeave()}
                            >
                                <Link
                                    href={link.href}
                                    className={`flex items-center gap-1 text-[11px] xl:text-xs font-bold uppercase tracking-wider transition-colors font-body py-4 relative whitespace-nowrap ${
                                        isActive ? "text-primary" : "text-gray-700 dark:text-gray-300 hover:text-primary"
                                    }`}
                                >
                                    <span>{link.name}</span>
                                    {link.children && <ChevronDown className={`w-3 h-3 flex-shrink-0 transition-transform duration-200 ${activeDropdown === link.name ? "rotate-180" : ""}`} />}
                                    
                                    {/* Active State Indicator */}
                                    {isActive && (
                                        <motion.div 
                                            layoutId="nav-indicator"
                                            className="absolute bottom-2 left-0 right-0 h-[2px] bg-primary rounded-full"
                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                        />
                                    )}
                                </Link>

                                {/* Desktop Dropdown with Framer Motion */}
                                {link.children && (
                                    <AnimatePresence>
                                        {activeDropdown === link.name && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 mt-[-8px] w-56 bg-white dark:bg-[#1A1A1A] border border-black/5 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl z-50 p-2"
                                            >
                                                {link.children.map(child => (
                                                    <Link
                                                        key={child.href}
                                                        href={child.href}
                                                        onClick={() => {
                                                            // Explicitly clear dropdown on click
                                                            setActiveDropdown(null);
                                                        }}
                                                        className="block px-4 py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                                                    >
                                                        {child.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
                        );
                    })}

                    {/* Language Switcher Dropdown */}
                    <div className="relative group flex items-center justify-center min-w-[50px] py-1 h-full ml-2 border-l border-gray-200 dark:border-white/10 pl-6">
                        <div className="flex items-center gap-1.5 text-xs font-bold text-gray-700 dark:text-gray-300 cursor-pointer hover:text-primary transition-colors">
                            <Globe size={14} />
                            <span>{lang.toUpperCase()}</span>
                        </div>

                        <div className="absolute top-[80%] right-0 mt-2 w-32 bg-white/95 dark:bg-[#121212]/95 backdrop-blur-md border border-black/10 dark:border-white/10 rounded-xl overflow-hidden shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                            {[
                                { code: 'tr', label: 'Türkçe' },
                                { code: 'en', label: 'English' },
                                { code: 'ru', label: 'Русский' },
                                { code: 'az', label: 'Azərbaycanca' }
                            ].map(locale => (
                                <Link
                                    key={locale.code}
                                    href={switchLanguage(locale.code)}
                                    className={`block px-4 py-3 text-xs font-bold transition-colors ${
                                        lang === locale.code 
                                            ? "text-primary bg-primary/10" 
                                            : "text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5"
                                    } ${locale.code !== 'tr' ? "border-t border-black/5 dark:border-white/5" : ""}`}
                                >
                                    {locale.label}
                                </Link>
                            ))}
                        </div>
                    </div>

                    <ThemeSwitcher />

                    <Link
                        href={`/${lang}/franchise`}
                        className="inline-flex items-center justify-center px-4 xl:px-6 py-2.5 text-[11px] xl:text-xs font-bold text-white uppercase tracking-widest bg-primary hover:bg-primary-hover rounded-lg shadow-[0_0_15px_rgba(30,171,127,0.3)] hover:shadow-[0_0_25px_rgba(30,171,127,0.5)] hover:-translate-y-0.5 transition-all duration-300 font-body ml-2 whitespace-nowrap"
                    >
                        <span>{t.franchise}</span>
                        <ArrowRight className="ml-2 w-4 h-4 flex-shrink-0" />
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="xl:hidden text-gray-900 dark:text-white focus:outline-none p-2"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="xl:hidden absolute top-full left-0 w-full bg-white/95 dark:bg-[#0F0F0F]/95 backdrop-blur-xl border-t border-black/5 dark:border-white/5 overflow-hidden shadow-2xl"
                    >
                        <div className="p-6 flex flex-col space-y-1 max-h-[80vh] overflow-y-auto">
                            {navLinks.map((link) => (
                                <div key={link.name} className="flex flex-col">
                                    {/* Mobile Main Link or Accordion Trigger */}
                                    <div className="flex items-center justify-between">
                                        <Link
                                            href={link.children ? "#" : link.href}
                                            className={`text-sm font-bold uppercase tracking-widest py-3 flex-1 transition-colors ${
                                                pathname === link.href || pathname?.startsWith(link.href + '/') ? "text-primary" : "text-gray-700 dark:text-gray-300"
                                            }`}
                                            onClick={(e) => {
                                                if (link.children) {
                                                    e.preventDefault();
                                                    toggleMobileAccordion(link.name);
                                                } else {
                                                    setIsMobileMenuOpen(false);
                                                }
                                            }}
                                        >
                                            {link.name}
                                        </Link>
                                        
                                        {link.children && (
                                            <button 
                                                className="p-3 text-gray-500"
                                                onClick={() => toggleMobileAccordion(link.name)}
                                            >
                                                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${openMobileAccordion === link.name ? "rotate-180 text-primary" : ""}`} />
                                            </button>
                                        )}
                                    </div>
                                    
                                    {/* Mobile Accordion Content */}
                                    {link.children && (
                                        <AnimatePresence>
                                            {openMobileAccordion === link.name && (
                                                <motion.div 
                                                    initial={{ height: 0, opacity: 0 }}
                                                    animate={{ height: "auto", opacity: 1 }}
                                                    exit={{ height: 0, opacity: 0 }}
                                                    className="overflow-hidden border-l-2 border-primary/20 ml-2 pl-4 flex flex-col gap-2 mb-2"
                                                >
                                                    {link.children.map(child => (
                                                        <Link
                                                            key={child.href}
                                                            href={child.href}
                                                            className="text-sm font-medium text-gray-600 dark:text-gray-400 py-2 hover:text-primary transition-colors"
                                                            onClick={() => setIsMobileMenuOpen(false)}
                                                        >
                                                            {child.name}
                                                        </Link>
                                                    ))}
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
                            ))}

                            <div className="flex flex-wrap items-center gap-4 py-2 border-t border-black/5 dark:border-white/10 mt-4 pt-6">
                                {[
                                    { code: 'tr', label: 'Türkçe' },
                                    { code: 'en', label: 'English' },
                                    { code: 'ru', label: 'Русский' },
                                    { code: 'az', label: 'Azərbaycanca' }
                                ].map(locale => (
                                    <Link
                                        key={locale.code}
                                        href={switchLanguage(locale.code)}
                                        className={`text-sm font-bold ${lang === locale.code ? "text-primary" : "text-gray-900 dark:text-white"}`}
                                        onClick={() => setIsMobileMenuOpen(false)}
                                    >
                                        {locale.label}
                                    </Link>
                                ))}
                            </div>

                            <Link
                                href={`/${lang}/franchise`}
                                className="mt-6 flex items-center justify-center px-6 py-4 text-xs font-bold text-white uppercase tracking-widest bg-primary hover:bg-primary-hover rounded-lg w-full shadow-lg"
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                {t.franchise}
                                <ArrowRight className="ml-2 w-4 h-4" />
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
