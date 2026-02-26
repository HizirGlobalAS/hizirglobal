export default function Stats({ dict }: { dict: any }) {
    const stats = [
        { value: dict.stats.cities.value, label: dict.stats.cities.label },
        { value: dict.stats.branches.value, label: dict.stats.branches.label },
        { value: dict.stats.couriers.value, label: dict.stats.couriers.label },
        { value: dict.stats.satisfaction.value, label: dict.stats.satisfaction.label },
    ];

    return (
        <section className="py-20 bg-white dark:bg-[#0F0F0F] relative border-b border-black/5 dark:border-white/5 transition-colors duration-300">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center divide-x divide-black/5 dark:divide-white/5">
                    {stats.map((stat, index) => {
                        const isTextValue = /[a-zA-ZğüşıöçĞÜŞİÖÇ]/.test(stat.value);

                        return (
                            <div key={index} className="p-6">
                                <h3 className={`${isTextValue ? 'text-3xl md:text-4xl' : 'text-5xl md:text-6xl'} font-display font-bold text-gray-900 dark:text-white mb-2 whitespace-pre-wrap leading-tight`}>
                                    {stat.value}
                                </h3>
                                <p className="text-xs uppercase tracking-[0.2em] text-primary font-bold font-body whitespace-pre-line leading-relaxed">
                                    {stat.label}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
