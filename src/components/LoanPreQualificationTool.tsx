
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import LoanTypeStep from './compass/LoanTypeStep';
import BasicInfoStep from './compass/BasicInfoStep';
import PropertyDetailsStep from './compass/PropertyDetailsStep';
import BorrowerProfileStep from './compass/BorrowerProfileStep';
import RentalDetailsStep from './compass/RentalDetailsStep';
import PreQualificationResults from './compass/PreQualificationResults';
import { LoanApplicationData, PreQualificationResult } from '@/types/compass';
import { calculatePreQualification } from '@/utils/loanCalculations';

const LoanPreQualificationTool = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<LoanApplicationData>({
    loanType: '',
    loanAmount: 0,
    purchasePrice: 0,
    rehabBudget: 0,
    arv: 0,
    creditScore: 0,
    hasExperience: false,
    dealCount: 0,
    state: '',
    monthlyRent: 0,
    monthlyExpenses: 0,
    exitStrategy: '',
    constructionBudget: 0,
    landValue: 0
  });
  const [results, setResults] = useState<PreQualificationResult | null>(null);

  const steps = [
    { title: 'Loan Type', component: LoanTypeStep },
    { title: 'Basic Info', component: BasicInfoStep },
    { title: 'Property Details', component: PropertyDetailsStep },
    { title: 'Borrower Profile', component: BorrowerProfileStep },
    { title: 'Rental Details', component: RentalDetailsStep },
    { title: 'Results', component: PreQualificationResults }
  ];

  const progress = ((currentStep + 1) / steps.length) * 100;

  const handleNext = () => {
    if (currentStep === steps.length - 2) {
      // Calculate pre-qualification before showing results
      const preQualResult = calculatePreQualification(formData);
      setResults(preQualResult);
    }
    setCurrentStep(Math.min(currentStep + 1, steps.length - 1));
  };

  const handlePrevious = () => {
    setCurrentStep(Math.max(currentStep - 1, 0));
  };

  const handleDataUpdate = (newData: Partial<LoanApplicationData>) => {
    setFormData(prev => ({ ...prev, ...newData }));
  };

  const handleRestart = () => {
    setCurrentStep(0);
    setFormData({
      loanType: '',
      loanAmount: 0,
      purchasePrice: 0,
      rehabBudget: 0,
      arv: 0,
      creditScore: 0,
      hasExperience: false,
      dealCount: 0,
      state: '',
      monthlyRent: 0,
      monthlyExpenses: 0,
      exitStrategy: '',
      constructionBudget: 0,
      landValue: 0
    });
    setResults(null);
  };

  const shouldShowRentalStep = formData.loanType === 'Rental/DSCR';
  const filteredSteps = shouldShowRentalStep ? steps : steps.filter(step => step.title !== 'Rental Details');
  const currentStepIndex = shouldShowRentalStep ? currentStep : (currentStep >= 4 ? currentStep : currentStep);
  const CurrentStepComponent = filteredSteps[currentStepIndex]?.component;

  const canProceed = () => {
    switch (currentStep) {
      case 0: return formData.loanType !== '';
      case 1: return formData.loanAmount > 0 && formData.purchasePrice > 0;
      case 2: return formData.arv > 0;
      case 3: return formData.creditScore > 0 && formData.state !== '';
      case 4: return !shouldShowRentalStep || (formData.monthlyRent > 0 && formData.monthlyExpenses > 0);
      default: return true;
    }
  };

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-center">Loan Pre-Qualification</CardTitle>
        <div className="space-y-2">
          <Progress value={progress} className="w-full" />
          <p className="text-sm text-gray-500 text-center">
            Step {currentStep + 1} of {filteredSteps.length}: {filteredSteps[currentStep]?.title}
          </p>
        </div>
      </CardHeader>
      <CardContent className="space-y-6">
        {CurrentStepComponent && (
          <CurrentStepComponent 
            data={formData} 
            onUpdate={handleDataUpdate}
            results={results}
            onRestart={handleRestart}
          />
        )}
        
        <div className="flex justify-between">
          <Button 
            variant="outline" 
            onClick={handlePrevious}
            disabled={currentStep === 0}
          >
            Previous
          </Button>
          
          {currentStep < filteredSteps.length - 1 ? (
            <Button 
              onClick={handleNext}
              disabled={!canProceed()}
              className="bg-heritage-500 hover:bg-heritage-600"
            >
              Next
            </Button>
          ) : null}
        </div>
      </CardContent>
    </Card>
  );
};

export default LoanPreQualificationTool;
