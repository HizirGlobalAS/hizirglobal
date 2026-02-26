"use client";

import { useState } from "react";
import { UploadCloud, CheckCircle2 } from "lucide-react";

export default function CareerForm({ dict }: { dict: any }) {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrorMessage("");

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("/api/careers", {
                method: "POST",
                body: formData, // multipart/form-data olarok gidecek
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
            <div className="bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-12 rounded text-center shadow-sm dark:shadow-none transition-colors duration-300">
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Başvurunuz Alındı!</h3>
                <p className="text-gray-600 dark:text-gray-400">
                    Kariyer merkezimize iletmiş olduğunuz başvuru başarıyla kaydedildi. İnsan Kaynakları departmanımız en kısa sürede sizinle iletişime geçecektir.
                </p>
                <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-8 px-8 py-3 border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 text-gray-900 dark:text-white rounded transition-colors font-bold text-sm"
                >
                    Yeni Başvuru Yap
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8 bg-white dark:bg-white/[0.02] border border-black/5 dark:border-white/5 p-8 md:p-10 rounded shadow-sm dark:shadow-none transition-colors duration-300">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 border-b border-black/10 dark:border-white/10 pb-4">
                {dict.careers_page.form.personal_info}
            </h3>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 dark:text-gray-400">Ad</label>
                    <input
                        type="text"
                        name="firstName"
                        required
                        className="w-full bg-gray-50 dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 dark:text-gray-400">Soyad</label>
                    <input
                        type="text"
                        name="lastName"
                        required
                        className="w-full bg-gray-50 dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 dark:text-gray-400">E-posta</label>
                    <input
                        type="email"
                        name="email"
                        required
                        className="w-full bg-gray-50 dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 dark:text-gray-400">Telefon</label>
                    <input
                        type="tel"
                        name="phone"
                        required
                        className="w-full bg-gray-50 dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 dark:text-gray-400">{dict.careers_page.form.department}</label>
                    <select name="department" required className="w-full bg-gray-50 dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option value="">{dict.careers_page.form.department_placeholder}</option>
                        <option value="tech">{dict.careers_page.form.departments.tech}</option>
                        <option value="logistics">{dict.careers_page.form.departments.logistics}</option>
                        <option value="sales">{dict.careers_page.form.departments.sales}</option>
                        <option value="admin">{dict.careers_page.form.departments.admin}</option>
                    </select>
                </div>
                <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-600 dark:text-gray-400">{dict.careers_page.form.education}</label>
                    <select name="education" required className="w-full bg-gray-50 dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors appearance-none">
                        <option value="">{dict.careers_page.form.education_placeholder}</option>
                        <option value="hs">Lise</option>
                        <option value="assoc">Ön Lisans</option>
                        <option value="bach">Lisans</option>
                        <option value="master">Yüksek Lisans</option>
                    </select>
                </div>
            </div>

            <div className="space-y-2 pt-4">
                <label className="text-sm font-bold text-gray-600 dark:text-gray-400">{dict.careers_page.form.cover_letter}</label>
                <textarea
                    name="coverLetter"
                    rows={4}
                    placeholder={dict.careers_page.form.cover_letter_placeholder}
                    className="w-full bg-gray-50 dark:bg-[#0F0F0F] border border-black/10 dark:border-white/10 rounded px-4 py-3 text-gray-900 dark:text-white focus:outline-none focus:border-primary transition-colors resize-none"
                ></textarea>
            </div>

            <div className="pt-4">
                <label className="border-2 border-dashed border-black/10 dark:border-white/10 rounded-lg p-10 flex flex-col items-center justify-center text-center hover:border-primary/50 transition-colors cursor-pointer group bg-gray-50 dark:bg-[#0F0F0F]">
                    <div className="w-16 h-16 bg-black/5 dark:bg-white/5 rounded-full flex items-center justify-center mb-4 group-hover:bg-primary/10 transition-colors">
                        <UploadCloud className="w-8 h-8 text-gray-400 group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-gray-900 dark:text-white font-bold mb-1">{dict.careers_page.form.cv_upload.title}</p>
                    <p className="text-sm text-gray-500 mb-2">{dict.careers_page.form.cv_upload.subtitle}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-600">{dict.careers_page.form.cv_upload.hint}</p>
                    <input type="file" name="cv" required className="hidden" accept=".pdf,.doc,.docx" onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) {
                            const lbl = e.target.parentElement?.querySelector('p.font-bold');
                            if (lbl) lbl.textContent = file.name;
                        }
                    }} />
                </label>
            </div>

            <div className="pt-8 w-full flex flex-col">
                {errorMessage && (
                    <div className="mb-4 p-4 text-sm text-red-700 bg-red-100 rounded">
                        {errorMessage}
                    </div>
                )}
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-primary hover:bg-primary-hover text-white font-bold uppercase tracking-widest text-sm rounded transition-all flex items-center justify-center disabled:opacity-50"
                >
                    {isSubmitting ? dict.careers_page.form.submitting : dict.careers_page.form.submit_button}
                </button>
                <p className="text-xs text-gray-500 text-center mt-4">
                    Başvurunuz KVKK kapsamında işlenmekte ve saklanmaktadır.
                </p>
            </div>
        </form>
    );
}
