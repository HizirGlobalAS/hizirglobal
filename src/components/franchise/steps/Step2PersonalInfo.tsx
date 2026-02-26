import { StepProps } from "@/types";

export default function Step2PersonalInfo({ formData, updateFormData, nextStep, prevStep, dict }: StepProps) {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        updateFormData({ [e.target.name]: e.target.value });
    };

    const isValid = formData.firstName && formData.lastName && formData.email && formData.phone && formData.tc;

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">{dict?.franchise_page.steps["2"].title}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{dict?.franchise_page.steps["2"].fields.firstname}</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className="w-full rounded-lg border-black/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-600 p-3 transition-colors duration-300"
                        placeholder={dict?.franchise_page.steps["2"].fields.firstname_placeholder}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{dict?.franchise_page.steps["2"].fields.lastname}</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className="w-full rounded-lg border-black/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-600 p-3 transition-colors duration-300"
                        placeholder={dict?.franchise_page.steps["2"].fields.lastname_placeholder}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{dict?.franchise_page.steps["2"].fields.email}</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border-black/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-600 p-3 transition-colors duration-300"
                        placeholder={dict?.franchise_page.steps["2"].fields.email_placeholder}
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{dict?.franchise_page.steps["2"].fields.phone}</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border-black/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-600 p-3 transition-colors duration-300"
                        placeholder={dict?.franchise_page.steps["2"].fields.phone_placeholder}
                    />
                </div>
                <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">{dict?.franchise_page.steps["2"].fields.tc}</label>
                    <input
                        type="text"
                        name="tc"
                        value={formData.tc}
                        onChange={handleChange}
                        maxLength={11}
                        className="w-full rounded-lg border-black/10 dark:border-white/10 bg-white dark:bg-[#1A1A1A] text-gray-900 dark:text-white focus:ring-primary focus:border-primary placeholder-gray-400 dark:placeholder-gray-600 p-3 transition-colors duration-300"
                        placeholder={dict?.franchise_page.steps["2"].fields.tc_placeholder}
                    />
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <button
                    onClick={prevStep}
                    className="px-8 py-3 bg-transparent border border-black/20 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded hover:bg-black/5 dark:hover:bg-white/10 transition-all"
                >
                    {dict?.franchise_page.steps["2"].button_prev}
                </button>
                <button
                    onClick={nextStep}
                    disabled={!isValid}
                    className="px-8 py-3 bg-primary text-white font-bold rounded hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {dict?.franchise_page.steps["2"].button_next}
                </button>
            </div>
        </div>
    );
}
