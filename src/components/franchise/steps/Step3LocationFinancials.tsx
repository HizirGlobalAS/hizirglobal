import { StepProps } from "@/types";

export default function Step3LocationFinancials({ formData, updateFormData, nextStep, prevStep, dict }: StepProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        updateFormData({ [e.target.name]: e.target.value });
    };

    const cities = ["İstanbul", "Ankara", "İzmir", "Bursa", "Antalya"];
    const investments = ["2.000.000 TL - 5.000.000 TL", "5.000.000 TL - 10.000.000 TL", "10.000.000 TL ve Üzeri"];

    const isValid = formData.city && formData.district && formData.investment;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">{dict?.franchise_page.steps["3"].title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{dict?.franchise_page.steps["3"].fields.city}</label>
                    <select
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        className="w-full rounded-lg border-black/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-primary focus:border-primary p-3 appearance-none transition-colors duration-300"
                    >
                        <option value="">{dict?.franchise_page.steps["3"].fields.city_placeholder}</option>
                        {cities.map((city) => (
                            <option key={city} value={city}>
                                {city}
                            </option>
                        ))}
                    </select>
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{dict?.franchise_page.steps["3"].fields.district}</label>
                    <input
                        type="text"
                        name="district"
                        value={formData.district}
                        onChange={handleChange}
                        className="w-full rounded-lg border-black/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-600 p-3 transition-colors duration-300"
                        placeholder={dict?.franchise_page.steps["3"].fields.district_placeholder}
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{dict?.franchise_page.steps["3"].fields.investment}</label>
                    <select
                        name="investment"
                        value={formData.investment}
                        onChange={handleChange}
                        className="w-full rounded-lg border-black/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-primary focus:border-primary p-3 appearance-none transition-colors duration-300"
                    >
                        <option value="">{dict?.franchise_page.steps["3"].fields.investment_placeholder}</option>
                        {investments.map((inv) => (
                            <option key={inv} value={inv}>
                                {inv}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{dict?.franchise_page.steps["3"].fields.message}</label>
                    <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={4}
                        className="w-full rounded-lg border-black/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-600 p-3 transition-colors duration-300"
                        placeholder={dict?.franchise_page.steps["3"].fields.message_placeholder}
                    />
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <button
                    onClick={prevStep}
                    className="px-8 py-3 bg-transparent border border-black/20 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded hover:bg-black/5 dark:hover:bg-white/10 transition-all font-body"
                >
                    {dict?.franchise_page.steps["3"].button_prev}
                </button>
                <button
                    onClick={nextStep}
                    disabled={!isValid}
                    className="px-8 py-3 bg-primary text-white font-bold rounded hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all font-body"
                >
                    {dict?.franchise_page.steps["3"].button_next}
                </button>
            </div>
        </div>
    );
}
