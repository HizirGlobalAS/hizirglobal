import { StepProps } from "@/types";
import { Store, Truck, Package } from "lucide-react";

const brands = [
    { id: "yetis", name: "Yetiş+ Çarşı", icon: Store },
    { id: "hizir", name: "Hızır+ Kurye", icon: Truck },
    { id: "edepo", name: "Yetiş E-Depo", icon: Package },
];

export default function Step1BrandSelection({ formData, updateFormData, nextStep, dict }: StepProps) {
    const toggleBrand = (id: string) => {
        const currentBrands = formData.brands;
        const newBrands = currentBrands.includes(id)
            ? currentBrands.filter((brand) => brand !== id)
            : [...currentBrands, id];
        updateFormData({ brands: newBrands });
    };

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">{dict?.franchise_page.steps["1"].title}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {brands.map((brand) => {
                    const isSelected = formData.brands.includes(brand.id);
                    return (
                        <div
                            key={brand.id}
                            onClick={() => toggleBrand(brand.id)}
                            className={`cursor-pointer p-6 rounded-xl border transition-all h-full flex flex-col items-center justify-center gap-4 ${isSelected
                                ? "border-primary bg-primary/10 text-gray-900 dark:text-white"
                                : "border-black/10 dark:border-white/10 bg-gray-50 dark:bg-[#1A1A1A] text-gray-600 dark:text-gray-400 hover:border-primary/50 hover:bg-[#1eab7f]/5"
                                }`}
                        >
                            <brand.icon size={48} className={isSelected ? "text-primary" : "text-gray-400 dark:text-gray-500"} />
                            <span className={`font-bold ${isSelected ? "text-gray-900 dark:text-white" : "text-gray-600 dark:text-gray-400"}`}>
                                {brand.name}
                            </span>
                        </div>
                    );
                })}
            </div>
            <div className="flex justify-end mt-8">
                <button
                    onClick={nextStep}
                    disabled={formData.brands.length === 0}
                    className="px-8 py-3 bg-primary text-white font-bold rounded hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                >
                    {dict?.franchise_page.steps["1"].button_next}
                </button>
            </div>
        </div>
    );
}
