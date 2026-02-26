import { getDictionary } from "@/get-dictionary";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return {
        title: `${dict.common.kvkk} | ${dict.common.company_name}`,
        description: "Hızır Global Kişisel Verilerin Korunması ve İşlenmesi Politikası",
    };
}

export default async function KVKKPage({ params }: { params: Promise<{ lang: string }> }) {
    const { lang } = await params;
    const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
    const dict = await getDictionary(validLang);

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0F0F0F] pt-32 pb-20 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-6 font-body text-gray-800 dark:text-gray-300">
                <h1 className="text-4xl font-display font-bold text-gray-900 dark:text-white mb-8 border-b border-black/10 dark:border-white/10 pb-4">
                    {dict.common.kvkk}
                </h1>
                <div className="prose dark:prose-invert max-w-none">
                    {lang === "tr" ? (
                        <>
                            <p className="mb-6 font-semibold">Son Güncelleme Tarihi: Ekim 2026</p>
                            <p className="mb-4">
                                <strong>Hızır Global A.Ş.</strong> ("Şirket") olarak, tarafımıza iletmiş olduğunuz kişisel verilerinizin güvenliğine en üst düzeyde önem veriyoruz. Bu sorumluluk bilinciyle, 6698 sayılı Kişisel Verilerin Korunması Kanunu ("Kanun") uyarınca hazırladığımız bu Aydınlatma Metni ile kişisel verilerinizin işlenmesi konusunda sizleri bilgilendirmek istiyoruz.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Veri Sorumlusunun Kimliği</h2>
                            <p className="mb-4">
                                Kanun uyarınca, Hızır Global A.Ş. veri sorumlusu sıfatına sahiptir. İletişim bilgilerimiz aşağıdaki gibidir:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Adres:</strong> Gülbahar Mahallesi Gayret Sokak No:8 Kat:2 MCG Binası 34349 Gayrettepe Şişli/İstanbul</li>
                                <li><strong>Telefon:</strong> 0501 321 66 63</li>
                                <li><strong>E-Posta:</strong> info@yetisplus.com</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Kişisel Verilerin İşlenme Amacı</h2>
                            <p className="mb-4">
                                Kişisel verileriniz; hizmetlerimizin sunulabilmesi, müşteri ilişkilerimizin yönetimi, operasyonel süreçlerin yürütülmesi, hukuki yükümlülüklerimizin yerine getirilmesi, başvuru ve iletişim süreçlerinin değerlendirilmesi amacıyla hukuka ve dürüstlük kurallarına uygun olarak işlenmektedir.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. Kişisel Verilerin Kimlere ve Hangi Amaçlarla Aktarılabileceği</h2>
                            <p className="mb-4">
                                İşlenen kişisel verileriniz, yukarıda belirtilen amaçların gerçekleştirilebilmesi doğrultusunda; tedarikçilerimize, çözüm ortaklarımıza, kanunen yetkili kamu kurum ve kuruluşları ile yetkili özel kişilere Kanun’un 8. ve 9. maddelerinde belirtilen şartlara uygun olarak aktarılabilecektir.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Kişisel Veri Toplamanın Yöntemi ve Hukuki Sebebi</h2>
                            <p className="mb-4">
                                Kişisel verileriniz, internet sitemiz, çağrı merkezimiz, fiziki ve dijital formlar gibi yöntemlerle toplanmakta olup; Kanun’un 5. ve 6. maddelerinde belirtilen "bir sözleşmenin kurulması veya ifasıyla doğrudan doğruya ilgili olması", "veri sorumlusunun hukuki yükümlülüğünü yerine getirebilmesi için zorunlu olması" ve "ilgili kişinin temel hak ve özgürlüklerine zarar vermemek kaydıyla, veri sorumlusunun meşru menfaatleri için zorunlu olması" hukuki sebeplerine dayalı olarak işlenmektedir.
                            </p>
                        </>
                    ) : (
                        <>
                            <p className="mb-6 font-semibold">Last Updated: October 2026</p>
                            <p className="mb-4">
                                As <strong>Hızır Global A.Ş.</strong> ("Company"), we attach the utmost importance to the security of your personal data. Aware of this responsibility, we would like to inform you about the processing of your personal data with this Information Text prepared in accordance with the Law on the Protection of Personal Data No. 6698 ("Law").
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">1. Identity of the Data Controller</h2>
                            <p className="mb-4">
                                Pursuant to the Law, Hızır Global A.Ş. holds the title of data controller. Our contact details are as follows:
                            </p>
                            <ul className="list-disc pl-6 mb-4 space-y-2">
                                <li><strong>Address:</strong> Gülbahar Mahallesi Gayret Sokak No:8 Kat:2 MCG Binası 34349 Gayrettepe Şişli/İstanbul</li>
                                <li><strong>Phone:</strong> 0501 321 66 63</li>
                                <li><strong>Email:</strong> info@yetisplus.com</li>
                            </ul>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">2. Purposes of Processing Personal Data</h2>
                            <p className="mb-4">
                                Your personal data is processed in accordance with the law and good faith for the purposes of providing our services, managing our customer relations, executing operational processes, fulfilling our legal obligations, and evaluating applications and communication processes.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">3. To Whom and For What Purposes Personal Data Can Be Transferred</h2>
                            <p className="mb-4">
                                In order to realize the purposes stated above, your processed personal data may be transferred to our suppliers, business partners, legally authorized public institutions and organizations, and authorized private persons in accordance with the conditions specified in Articles 8 and 9 of the Law.
                            </p>

                            <h2 className="text-2xl font-bold mt-8 mb-4 text-gray-900 dark:text-white">4. Method and Legal Reason for Collecting Personal Data</h2>
                            <p className="mb-4">
                                Your personal data is collected continuously through our website, call center, physical and digital forms based on legal reasons such as "being directly related to the establishment or performance of a contract", "being mandatory for the data controller to fulfill its legal obligation" and "being mandatory for the legitimate interests of the data controller, provided that it does not harm the fundamental rights and freedoms" specified in Articles 5 and 6 of the Law.
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
