import { getDictionary } from "@/get-dictionary";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return {
        title: `${dict.common.terms_of_use} | ${dict.common.company_name}`,
        description: "Hızır Global Kullanım Koşulları",
    };
}

export default async function TermsOfUsePage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0F0F0F] pt-32 pb-20 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 font-body text-gray-800 dark:text-gray-300">
                <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-8 border-b border-black/10 dark:border-white/10 pb-4">
                    {dict.common.terms_of_use}
                </h1>
                <div className="prose dark:prose-invert max-w-none">
                    {lang === "tr" ? (
                        <>
                            <p className="mb-6 font-semibold">Son Güncelleme Tarihi: Ekim 2026</p>
                            <p className="mb-4">
                                Bu internet sitesine girmeniz, sitedeki herhangi bir bilgiyi kullanmanız veya sitemize erişim sağlamanız, aşağıdaki koşulları kabul ettiğiniz anlamına gelir. <strong>Hızır Global A.Ş.</strong> ("Şirket") bu kullanım koşullarını, site içeriğini ve hizmetlerini dilediği zaman, önceden bildirimde bulunmaksızın değiştirme hakkını saklı tutar.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Taraflar ve Kapsam</h2>
                            <p className="mb-4">
                                İşbu Kullanım Koşulları, Hızır Global A.Ş. tarafından yönetilen web sitesini ("Site") ziyaret eden veya kullanan tüm gerçek ve tüzel kişiler ("Kullanıcı") için geçerlidir. Sitenin kullanılması, bu koşulların tamamının okunmuş ve kabul edilmiş olduğu anlamına gelir.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Fikri Mülkiyet Hakları</h2>
                            <p className="mb-4">
                                Bu Sitede yer alan ünvan, işletme adı, marka, patent, logo, tasarım, bilgi ve yöntem gibi tescilli veya tescilsiz tüm fikri mülkiyet hakları Hızır Global A.Ş. veya belirtilen ilgilisine aittir ve ulusal, uluslararası hukukun koruması altındadır. Sitenin ziyaret edilmesi veya bu Sitedeki hizmetlerden yararlanılması söz konusu fikri mülkiyet hakları konusunda Kullanıcı'ya hiçbir hak vermez. Sitede yer alan bilgiler çoğaltılamaz, yayınlanamaz, kopyalanamaz, sunulamaz veya aktarılamaz.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Sorumluluğun Sınırlandırılması</h2>
                            <p className="mb-4">
                                Hızır Global A.Ş., Sitenin kullanımı süresince yaşanabilecek kesinti, hata, ihmal, silinme, kayıp, işlemin veya iletişimin gecikmesi, bilgisayar virüsü, iletişim hatası, hırsızlık, imha veya izinsiz olarak kayıtlara girilmesi, değiştirilmesi veya kullanılması hususunda herhangi bir hukuki veya cezai sorumluluk kabul etmez.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. İletişim</h2>
                            <p className="mb-4">
                                Kullanım koşulları ve diğer kurumsal politikalarla ilgili her türlü görüş, öneri ve talepleriniz için bizimle iletişime geçebilirsiniz.
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
                                By accessing, browsing, or using this website, you acknowledge that you have read, understood, and agree to be bound by these terms. <strong>Hızır Global A.Ş.</strong> ("Company") reserves the right to modify these terms of use, site content, and services at any time without prior notice.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Parties and Scope</h2>
                            <p className="mb-4">
                                These Terms of Use apply to all real and legal persons ("User") visiting or using the website ("Site") managed by Hızır Global A.Ş. Use of the Site implies full acceptance of these terms.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Intellectual Property Rights</h2>
                            <p className="mb-4">
                                All intellectual property rights, whether registered or unregistered, such as titles, business names, trademarks, patents, logos, designs, information, and methods on this Site belong to Hızır Global A.Ş. or its specified owner and are under the protection of national and international law. Visiting the Site does not grant the User any right to these intellectual property rights. The information on the Site cannot be reproduced, published, copied, presented, or transferred.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Limitation of Liability</h2>
                            <p className="mb-4">
                                Hızır Global A.Ş. does not accept any legal or criminal liability for interruptions, errors, omissions, deletions, losses, delay of transactions or communication, computer viruses, communication errors, theft, destruction, or unauthorized access, modification or use of records during the use of the Site.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Contact Information</h2>
                            <p className="mb-4">
                                For any opinions, suggestions, and requests regarding terms of use and other corporate policies, you can contact us:
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
