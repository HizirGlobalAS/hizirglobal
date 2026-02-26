export interface FranchiseFormData {
    brands: string[];
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    tc: string;
    city: string;
    district: string;
    investment: string;
    message: string;
    files: File[];
    kvkk: boolean;
}

export type StepProps = {
    formData: FranchiseFormData;
    updateFormData: (data: Partial<FranchiseFormData>) => void;
    nextStep: () => void;
    prevStep: () => void;
    dict?: any;
};
