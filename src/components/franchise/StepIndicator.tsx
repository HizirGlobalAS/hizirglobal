import { Check } from "lucide-react";

interface StepIndicatorProps {
    currentStep: number;
    totalSteps: number;
}

export default function StepIndicator({ currentStep, totalSteps }: StepIndicatorProps) {
    return (
        <div className="flex justify-center mb-12">
            <div className="flex items-center">
                {Array.from({ length: totalSteps }).map((_, index) => {
                    const stepNumber = index + 1;
                    const isCompleted = stepNumber < currentStep;
                    const isCurrent = stepNumber === currentStep;

                    return (
                        <div key={index} className="flex items-center">
                            <div
                                className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all duration-300 ${isCompleted
                                    ? "bg-primary text-white"
                                    : isCurrent
                                        ? "bg-primary text-white shadow-[0_0_15px_rgba(30,171,127,0.5)]"
                                        : "bg-gray-100 dark:bg-[#1A1A1A] text-gray-500 border border-black/10 dark:border-white/10"
                                    }`}
                            >
                                {isCompleted ? <Check size={16} /> : stepNumber}
                            </div>
                            {index < totalSteps - 1 && (
                                <div
                                    className={`w-12 h-0.5 mx-2 transition-all duration-300 ${isCompleted ? "bg-primary" : "bg-black/10 dark:bg-white/10"
                                        }`}
                                />
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
