import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import "../globals.css";
import { getDictionary } from "@/get-dictionary";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/layout/ThemeProvider";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
  const dict = await getDictionary(validLang);

  return {
    title: dict.meta.home.title,
    description: dict.meta.home.desc,
  };
}

export async function generateStaticParams() {
  return [{ lang: 'en' }, { lang: 'tr' }, { lang: 'ru' }, { lang: 'az' }]
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const validLang = ["en", "tr", "ru", "az"].includes(lang) ? lang as "en" | "tr" | "ru" | "az" : "tr";
  const dict = await getDictionary(validLang);

  return (
    <html lang={validLang} suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AnnouncementBar dict={dict} lang={validLang} />
          <Navbar dict={dict} lang={validLang} />
          {children}
          <Footer dict={dict} lang={validLang} />
        </ThemeProvider>
      </body>
    </html>
  );
}
