import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyUs from "@/components/home/WhyUs";
import BrandPreview from "@/components/home/BrandPreview";
import EcosystemCTA from "@/components/home/EcosystemCTA";
import { getDictionary } from "@/get-dictionary";

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
  const dict = await getDictionary(validLang);

  return (
    <main className="flex flex-col min-h-screen">
      <Hero dict={dict} lang={lang} />
      <Stats dict={dict} />
      <WhyUs dict={dict} />
      <BrandPreview dict={dict} lang={lang} />
      <EcosystemCTA dict={dict} lang={lang} />
    </main>
  );
}
