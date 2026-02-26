import { getDictionary } from "@/get-dictionary";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return {
        title: `${dict.common.privacy_policy} | ${dict.common.company_name} `,
        description: "Hızır Global Gizlilik Politikası",
    };
}

export default async function PrivacyPolicyPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0F0F0F] pt-32 pb-20 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 font-body text-gray-800 dark:text-gray-300">
                <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-8 border-b border-black/10 dark:border-white/10 pb-4">
                    {dict.common.privacy_policy}
                </h1>
                <div className="prose dark:prose-invert max-w-none">
                    {lang === "tr" ? (
                        <>
                            <p className="mb-6 font-semibold">Son Güncelleme Tarihi: Ekim 2026</p>
                            <p className="mb-4">
                                <strong>Hızır Global A.Ş.</strong> ("Şirket") olarak, web sitemizi ziyaret eden kullanıcılarımızın bilgi güvenliğine ve gizliliğine büyük önem veriyoruz. Bu Gizlilik Politikası, web sitemizi kullanırken toplanan kişisel ve teknik verilerin nasıl kullanıldığını, korunduğunu ve paylaşıldığını açıklamaktadır.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Toplanan Bilgiler</h2>
                            <p className="mb-4">
                                Şirketimiz, web sitemizi kullanımınız sırasında; IP adresiniz, tarayıcı türünüz, ziyaret süreniz, gezindiğiniz sayfalar gibi anonim istatistiksel verileri iletebilir; iletişim formları veya başvuru formları aracılığıyla kendi isteğinizle sağladığınız ad, soyad, e-posta adresi, telefon numarası gibi kişisel verileri toplayabilir.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Bilgilerin Kullanımı</h2>
                            <p className="mb-4">
                                Toplanan veriler; sizlere daha iyi bir kullanıcı deneyimi sunmak, web sitemizin performansını analiz etmek, taleplerinize ve sorularınıza yanıt vermek, ve yasal yükümlülüklerimizi yerine getirmek amacıyla kullanılır. Size özel pazarlama iletişimleri ancak açık rızanız doğrultusunda gerçekleştirilir.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Çerezler (Cookies)</h2>
                            <p className="mb-4">
                                Web sitemizin düzgün çalışabilmesi ve kullanıcı tercihlerinizi hatırlayabilmesi için çerezler (cookies) kullanmaktayız. Çerezler, cihazınıza geçici olarak yerleştirilen küçük metin dosyalarıdır. Tarayıcınızın ayarlarını değiştirerek çerezleri reddedebilir veya silebilirsiniz; ancak bu durum web sitemizin bazı özelliklerinin tam olarak çalışmasını engelleyebilir.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Veri Güvenliği ve İletişim</h2>
                            <p className="mb-4">
                                Şirketimiz, toplanan verilerin yetkisiz erişime, değişime veya imhaya karşı korunması için gerekli tüm teknik ve idari tedbirleri almaktadır. Gizlilik politikamızla ilgili sorularınız için aşağıdaki iletişim kanallarından bize ulaşabilirsiniz:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Adres:</strong> Gülbahar Mahallesi Gayret Sokak No:8 Kat:2 MCG Binası 34349 Gayrettepe Şişli/İstanbul</li>
                                <li><strong>Telefon:</strong> 0501 321 66 63</li>
                                <li><strong>E-Posta:</strong> info@yetisplus.com</li>
                            </ul>
                        </>
                    ) : (
                        <>
                            <p className="mb-6 font-semibold">Last Updated: October 2026</p>
                            <p className="mb-4">
                                As <strong>Hızır Global A.Ş.</strong> ("Company"), we attach great importance to the information security and privacy of users visiting our website. This Privacy Policy explains how personal and technical data collected during the use of our website is used, protected, and shared.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Information Collected</h2>
                            <p className="mb-4">
                                During your use of our website, our Company may transmit anonymous statistical data such as your IP address, browser type, duration of visit, and pages you navigate; and may collect personal data such as your name, surname, e-mail address, phone number that you voluntarily provide through contact or application forms.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Use of Information</h2>
                            <p className="mb-4">
                                The collected data is used to provide you with a better user experience, analyze the performance of our website, respond to your requests and inquiries, and fulfill our legal obligations. Personalized marketing communications are carried out only with your explicit consent.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Cookies</h2>
                            <p className="mb-4">
                                We use cookies for our website to function properly and to remember your user preferences. Cookies are small text files temporarily placed on your device. You can reject or delete cookies by changing your browser settings; however, this may prevent some features of our website from working fully.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Data Security and Contact Information</h2>
                            <p className="mb-4">
                                Our Company takes all necessary technical and administrative measures to protect the collected data against unauthorized access, modification, or destruction. You can contact us through the following communication channels for your questions about our privacy policy:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Address:</strong> Gülbahar Mahallesi Gayret Sokak No:8 Kat:2 MCG Binası 34349 Gayrettepe Şişli/İstanbul</li>
                                <li><strong>Phone:</strong> 0501 321 66 63</li>
                                <li><strong>Email:</strong> info@yetisplus.com</li>
                            </ul>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
