"use client";

import { useState } from "react";
import StepIndicator from "@/components/franchise/StepIndicator";
import Step1BrandSelection from "@/components/franchise/steps/Step1BrandSelection";
import Step2PersonalInfo from "@/components/franchise/steps/Step2PersonalInfo";
import Step3LocationFinancials from "@/components/franchise/steps/Step3LocationFinancials";
import Step4Documents from "@/components/franchise/steps/Step4Documents";
import { FranchiseFormData } from "@/types";

const initialFormData: FranchiseFormData = {
    brands: [],
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    tc: "",
    city: "",
    district: "",
    investment: "",
    message: "",
    files: [],
    kvkk: false,
};

export default function FranchiseClient({ dict, lang }: { dict: any, lang: string }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [formData, setFormData] = useState<FranchiseFormData>(initialFormData);

    const totalSteps = 4;

    const updateFormData = (data: Partial<FranchiseFormData>) => {
        setFormData((prev) => ({ ...prev, ...data }));
    };

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep((prev) => prev + 1);
            window.scrollTo(0, 0);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep((prev) => prev - 1);
            window.scrollTo(0, 0);
        }
    };

    const renderStep = () => {
        const props = {
            formData,
            updateFormData,
            nextStep,
            prevStep,
            dict,
        };

        switch (currentStep) {
            case 1:
                return <Step1BrandSelection {...props} />;
            case 2:
                return <Step2PersonalInfo {...props} />;
            case 3:
                return <Step3LocationFinancials {...props} />;
            case 4:
                return <Step4Documents {...props} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#0F0F0F] pt-32 pb-20 transition-colors duration-300">
            <header className="relative bg-white dark:bg-[#1A1A1A] border-b border-black/5 dark:border-white/5 overflow-hidden -mt-12 mb-12 shadow-sm dark:shadow-none transition-colors duration-300">
                <div className="absolute inset-0 bg-primary/5 pattern-grid-lg opacity-20"></div>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10 text-center">
                    <h1 className="font-display text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6 tracking-wide">
                        {dict.franchise_page.header.title} <span className="text-primary">{dict.franchise_page.header.subtitle}</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-400 font-body">
                        {dict.franchise_page.header.description}
                    </p>
                </div>
            </header>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <StepIndicator currentStep={currentStep} totalSteps={totalSteps} />

                <div className="bg-white dark:bg-[#121212] p-8 md:p-12 rounded-2xl border border-black/5 dark:border-white/5 shadow-2xl transition-colors duration-300">
                    {renderStep()}
                </div>
            </div>
        </div>
    );
}
