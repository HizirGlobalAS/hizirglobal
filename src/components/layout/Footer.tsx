import Link from "next/link";
import { Linkedin, Twitter, Instagram, MapPin, Phone, Mail } from "lucide-react";

export default function Footer({ dict, lang }: { dict: any, lang: string }) {
    return (
        <footer id="iletisim" className="bg-gray-50 dark:bg-[#0a0a0a] text-gray-900 dark:text-white pt-24 pb-12 border-t border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid md:grid-cols-4 gap-12 lg:gap-20 mb-20">
                    <div className="md:col-span-1">
                        <div className="h-10 mb-8 flex items-center">
                            <span className="text-3xl font-display font-bold tracking-tight text-gray-900 dark:text-white">
                                HIZIR<span className="font-light text-gray-500 dark:text-gray-400">GLOBAL</span>{" "}
                                <span className="text-xs align-top text-primary">A.Ş.</span>
                            </span>
                        </div>
                        <p className="text-gray-600 dark:text-gray-500 text-sm leading-relaxed mb-8 font-body">
                            {dict.footer.description}
                        </p>
                        <div className="flex gap-4">
                            {[
                                { Icon: Linkedin, href: "https://linkedin.com/company/yetispluscarsi/" },
                                { Icon: Twitter, href: "https://x.com/yetispluscarsi" },
                                { Icon: Instagram, href: "https://www.instagram.com/hzryetispluscarsi/" }
                            ].map((social, idx) => (
                                <a
                                    key={idx}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 rounded bg-black/5 dark:bg-[#1a1a1a] flex items-center justify-center hover:bg-primary dark:hover:bg-primary hover:text-white transition-all text-gray-500 dark:text-gray-400 border border-black/5 dark:border-white/5 hover:border-primary"
                                >
                                    <social.Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="md:col-span-3 grid sm:grid-cols-3 gap-12 font-body">
                        <div>
                            <h4 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest mb-8 text-xs border-b border-primary/30 pb-2 inline-block">
                                {dict.footer.corporate_title}
                            </h4>
                            <ul className="space-y-4 text-sm text-gray-500">
                                {[
                                    { name: dict.footer.links.about, href: `/${lang}/about` },
                                    { name: dict.footer.links.board, href: `/${lang}/about` },
                                    { name: dict.footer.links.sustainability, href: `/${lang}/about` },
                                    { name: dict.footer.links.careers, href: `/${lang}/careers` }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:text-primary transition-colors flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-gray-600 group-hover:bg-primary rounded-full transition-colors"></span>{" "}
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest mb-8 text-xs border-b border-primary/30 pb-2 inline-block">
                                {dict.footer.brands_title}
                            </h4>
                            <ul className="space-y-4 text-sm text-gray-600 dark:text-gray-500">
                                {[
                                    { name: "Yetiş+ Çarşı", href: `/${lang}/brands` },
                                    { name: "Yetiş+ Yemek", href: `/${lang}/brands` },
                                    { name: "Yetiş E-Depo", href: `/${lang}/brands` },
                                    { name: "Hızır+ Kurye", href: `/${lang}/brands` },
                                    { name: "YTE Express", href: `/${lang}/brands` }
                                ].map((item) => (
                                    <li key={item.name}>
                                        <Link href={item.href} className="hover:text-primary transition-colors flex items-center gap-2 group">
                                            <span className="w-1 h-1 bg-gray-600 group-hover:bg-primary rounded-full transition-colors"></span>{" "}
                                            {item.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-gray-900 dark:text-white font-bold uppercase tracking-widest mb-8 text-xs border-b border-primary/30 pb-2 inline-block">
                                {dict.footer.contact_title}
                            </h4>
                            <ul className="space-y-6 text-sm text-gray-600 dark:text-gray-500">
                                <li className="flex items-start gap-4">
                                    <MapPin className="text-primary mt-0.5" size={20} />
                                    <span>
                                        Gülbahar Mahallesi Gayret Sokak
                                        <br />
                                        No: 8 Kat: 2 MCG Binası
                                        <br />
                                        34349 Gayrettepe Şişli/İstanbul
                                    </span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Phone className="text-primary" size={20} />
                                    <span className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
                                        0501 321 66 63
                                    </span>
                                </li>
                                <li className="flex items-center gap-4">
                                    <Mail className="text-primary" size={20} />
                                    <span className="hover:text-gray-900 dark:hover:text-white transition-colors cursor-pointer">
                                        info@yetisplus.com
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-6 border-t border-black/5 dark:border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-6 font-body">
                <p className="text-gray-600 text-xs tracking-wide">
                    {dict.common.rights_reserved}
                </p>
                <div className="flex gap-8 text-gray-600 text-xs font-medium uppercase tracking-wider">
                    <Link href={`/${lang}/privacy-policy`} className="hover:text-primary transition-colors">
                        {dict.common.privacy_policy}
                    </Link>
                    <Link href={`/${lang}/kvkk`} className="hover:text-primary transition-colors">
                        {dict.common.kvkk}
                    </Link>
                    <Link href={`/${lang}/terms-of-use`} className="hover:text-primary transition-colors">
                        {dict.common.terms_of_use}
                    </Link>
                </div>
            </div>
        </footer>
    );
}
