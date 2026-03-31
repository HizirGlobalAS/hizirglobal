import type { Metadata } from "next";
import { Oswald, Inter } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import "../globals.css";
import { getDictionary } from "@/get-dictionary";
import { client } from "@/sanity/lib/client";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

import { ThemeProvider } from "@/components/layout/ThemeProvider";
import { AudioProvider } from "@/context/AudioContext";
import AudioPlayerWidget from "@/components/ui/AudioPlayerWidget";

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

async function getRadioTracks() {
  try {
    const tracks = await client.fetch(`*[_type == "radio" && isActive == true] | order(_createdAt asc) {
      "id": _id,
      title,
      youtubeId
    }`);
    return tracks;
  } catch (error) {
    console.error("Failed to fetch radio tracks:", error);
    return [];
  }
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
  const initialRadioTracks = await getRadioTracks();

  return (
    <html lang={validLang} suppressHydrationWarning>
      <body
        className={`${oswald.variable} ${inter.variable} antialiased bg-white dark:bg-[#0F0F0F] text-gray-900 dark:text-white transition-colors duration-300`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false}>
          <AudioProvider initialTracks={initialRadioTracks}>
            <AnnouncementBar dict={dict} lang={validLang} />
            <Navbar dict={dict} lang={validLang} />
            {children}
            <Footer dict={dict} lang={validLang} />
            <AudioPlayerWidget />
          </AudioProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
