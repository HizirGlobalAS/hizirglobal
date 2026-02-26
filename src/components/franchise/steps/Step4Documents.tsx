import { StepProps } from "@/types";
import { Upload, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function Step4Documents({ formData, updateFormData, prevStep, dict }: StepProps) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            updateFormData({ files: Array.from(e.target.files) });
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const payload = new FormData();
        payload.append("firstName", formData.firstName);
        payload.append("lastName", formData.lastName);
        payload.append("email", formData.email);
        payload.append("phone", formData.phone);
        payload.append("tc", formData.tc);
        payload.append("city", formData.city);
        payload.append("district", formData.district);
        payload.append("investment", formData.investment);
        payload.append("message", formData.message);
        payload.append("brands", formData.brands.join(", "));

        formData.files.forEach((file) => {
            payload.append("files", file);
        });

        try {
            const response = await fetch("/api/franchise", {
                method: "POST",
                body: payload,
            });

            const result = await response.json();

            if (response.ok) {
                setIsSuccess(true);
            } else {
                setErrorMessage(result.message || "Bir hata oluştu.");
            }
        } catch (error) {
            console.error("Submit error:", error);
            setErrorMessage("Sunucu ile bağlantı kurulamadı.");
        } finally {
            setIsSubmitting(false);
        }
    };

    if (isSuccess) {
        return (
            <div className="text-center py-20">
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 text-primary mb-6">
                    <CheckCircle size={40} />
                </div>
                <h2 className="text-3xl font-display font-bold text-gray-900 dark:text-white mb-4">{dict?.franchise_page.steps["4"].success.title}</h2>
                <p className="text-gray-600 dark:text-gray-400 max-w-md mx-auto">
                    {dict?.franchise_page.steps["4"].success.desc}
                </p>
            </div>
        );
    }

    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-display font-bold text-gray-900 dark:text-white mb-6">{dict?.franchise_page.steps["4"].title}</h2>

            <div className="border-2 border-black/10 dark:border-white/10 border-dashed rounded-lg bg-gray-50 dark:bg-[#1A1A1A] hover:border-primary/50 transition-colors p-8 text-center cursor-pointer relative group duration-300">
                <input
                    type="file"
                    multiple
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                <div className="space-y-3">
                    <div className="mx-auto w-12 h-12 rounded-full bg-black/5 dark:bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                        <Upload className="text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        <span className="text-primary font-medium">{dict?.franchise_page.steps["4"].upload_area.title}</span> {dict?.franchise_page.steps["4"].upload_area.subtitle}
                    </div>
                    <p className="text-xs text-gray-500">{dict?.franchise_page.steps["4"].upload_area.hint}</p>
                </div>
            </div>

            {formData.files.length > 0 && (
                <div className="space-y-2">
                    {formData.files.map((file, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-sm text-gray-700 dark:text-gray-300 bg-black/5 dark:bg-white/5 p-2 rounded transition-colors duration-300">
                            <CheckCircle size={14} className="text-primary" />
                            {file.name}
                        </div>
                    ))}
                </div>
            )}

            <div className="pt-4">
                <label className="flex items-start gap-3 cursor-pointer group">
                    <div className="relative flex items-center">
                        <input
                            type="checkbox"
                            checked={formData.kvkk}
                            onChange={(e) => updateFormData({ kvkk: e.target.checked })}
                            className="peer h-5 w-5 cursor-pointer appearance-none rounded border border-black/20 dark:border-white/20 bg-white dark:bg-[#1A1A1A] transition-all checked:border-primary checked:bg-primary"
                        />
                        <CheckCircle className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-white opacity-0 peer-checked:opacity-100 pointer-events-none" size={12} />
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                        {dict?.franchise_page.steps["4"].kvkk_consent}
                    </div>
                </label>
            </div>

            {errorMessage && (
                <div className="mt-4 p-4 text-sm text-red-700 bg-red-100 rounded">
                    {errorMessage}
                </div>
            )}

            <div className="flex justify-between mt-8">
                <button
                    onClick={prevStep}
                    className="px-8 py-3 bg-transparent border border-black/20 dark:border-white/20 text-gray-900 dark:text-white font-bold rounded hover:bg-black/5 dark:hover:bg-white/10 transition-all font-body"
                >
                    {dict?.franchise_page.steps["4"].button_prev}
                </button>
                <button
                    onClick={handleSubmit}
                    disabled={!formData.kvkk || isSubmitting}
                    className="px-8 py-3 bg-primary text-white font-bold rounded hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-all font-body min-w-[140px]"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center gap-2">
                            <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>
                            {dict?.franchise_page.steps["4"].button_submitting}
                        </span>
                    ) : (
                        dict?.franchise_page.steps["4"].button_submit
                    )}
                </button>
            </div>
        </div>
    );
}
