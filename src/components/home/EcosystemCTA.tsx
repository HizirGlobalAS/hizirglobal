import Link from "next/link";
import Image from "next/image";

export default function EcosystemCTA({ dict, lang }: { dict: any, lang: string }) {
    return (
        <section className="py-32 relative overflow-hidden bg-gray-50 dark:bg-[#121212] transition-colors duration-300" id="ekosistem">
            <div className="absolute inset-0">
                <Image
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-M9fTOPhzIUkiKpj6Dy3OIy295JPw2-a82-GXEbC26u7mhpuLx4K5FNEGfKBiKEsqZnDo0YV5LeRWyFsXTG1x7155xPoxFcKGeZvfgMqlxAzRKgenmmudF4MRgzcYmkX3F6IymwDi6TNLghky2MiHeJneZO67r5_topwRkmI4dvBNx3V4H6QGBwkm7AUjatCSBkyubqJ_EHZdi-lUVUfn9jrtJ_SgN7Ca_EReEfYbFwGqfQX6p1lTPvTwpap1NpP7KxL4mhnjPmg"
                    alt="Meeting"
                    fill
                    className="object-cover opacity-10 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-gray-50 via-gray-50/90 dark:from-[#121212] dark:via-[#121212]/90 to-transparent transition-colors duration-300"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10">
                <div className="max-w-2xl">
                    <h2 className="text-5xl md:text-6xl font-display font-bold text-gray-900 dark:text-white mb-6">
                        {dict.ecosystem.title_main} <span className="text-primary">{dict.ecosystem.title_highlight}</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed mb-10 font-light font-body">
                        {dict.ecosystem.description}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-5 font-body">
                        <Link
                            href={`/${lang}/franchise`}
                            className="px-8 py-4 bg-primary text-white font-bold uppercase tracking-widest text-sm rounded hover:bg-primary-hover transition-all shadow-[0_0_20px_rgba(30,171,127,0.3)] hover:shadow-[0_0_30px_rgba(30,171,127,0.5)] transform hover:-translate-y-1 text-center"
                        >
                            {dict.common.apply_now}
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
