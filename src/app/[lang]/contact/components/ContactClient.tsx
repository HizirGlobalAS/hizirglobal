"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Mail, Phone, Building2 } from "lucide-react";

// eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars
export function ContactClient({ dict, lang, sanityContact }: { dict: any, lang: string, sanityContact?: any }) {
    const defaultData = {
        title: "Genel Merkez",
        address: "Gülbahar Mahallesi Gayret Sokak No:8 Kat:2 MCG Binası 34349 Gayrettepe Şişli/İstanbul",
        email: "info@yetisplus.com",
        phone: "0501 321 66 63",
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12035.031580214691!2d29.0034357!3d41.0697122!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDHCsDA0JzExLjAiTiAyOcKwMDAnMTIuNCJF!5e0!3m2!1sen!2str!4v1708696800000!5m2!1sen!2str"
    };

    const activeData = sanityContact ? {
        id: sanityContact._id,
        icon: Building2,
        title: sanityContact.title || defaultData.title,
        address: sanityContact.address?.[lang] || sanityContact.address?.tr || defaultData.address,
        email: sanityContact.email || defaultData.email,
        phone: sanityContact.phone || defaultData.phone,
        map: sanityContact.mapUrl || defaultData.mapUrl
    } : { ...defaultData, id: 'merkez', icon: Building2, map: defaultData.mapUrl };

    return (
        <div className="flex flex-col gap-10">


            {/* İçerik ve Harita Düzeni (Katmanlı İfşa / Layered UI) */}
            <div className="grid lg:grid-cols-2 gap-12 items-start">
                <AnimatePresence mode="wait">
                    <motion.div
                        key="merkez"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 20 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 rounded-2xl shadow-sm dark:shadow-none"
                    >
                        <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-l-4 border-primary pl-4">{activeData.title} İletişim</h3>
                        <div className="space-y-8">
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <MapPin className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">Adres</p>
                                    <p className="text-gray-900 dark:text-white font-medium">{activeData.address}</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Mail className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">E-Posta</p>
                                    <a href={`mailto:${activeData.email}`} className="text-gray-900 dark:text-white font-medium hover:text-primary transition-colors">{activeData.email}</a>
                                </div>
                            </div>
                            <div className="flex gap-4 items-start group">
                                <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                                    <Phone className="w-6 h-6" />
                                </div>
                                <div>
                                    <p className="font-bold text-xs uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-1">Telefon</p>
                                    <a href={`tel:${activeData.phone.replace(/\s+/g, '')}`} className="text-gray-900 dark:text-white font-medium hover:text-primary transition-colors">{activeData.phone}</a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>

                {/* Dinamik Harita */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key="merkez-map"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 0.4 }}
                        className="bg-gray-100 dark:bg-white/[0.05] border border-black/10 dark:border-white/10 rounded-2xl min-h-[450px] h-full flex items-center justify-center relative overflow-hidden shadow-sm dark:shadow-none"
                    >
                        <iframe
                            src={activeData.map}
                            width="100%"
                            height="100%"
                            style={{ border: 0, position: 'absolute', top: 0, left: 0 }}
                            allowFullScreen={true}
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="grayscale hover:grayscale-0 transition-all duration-700"
                        ></iframe>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
