
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

  const baseSteps = [
    { title: 'Loan Type', component: LoanTypeStep },
    { title: 'Basic Info', component: BasicInfoStep },
    { title: 'Property Details', component: PropertyDetailsStep },
    { title: 'Borrower Profile', component: BorrowerProfileStep }
  ];

  const shouldShowRentalStep = formData.loanType === 'Rental/DSCR';
  
  // Build the complete steps array based on loan type
  const allSteps = [
    ...baseSteps,
    ...(shouldShowRentalStep ? [{ title: 'Rental Details', component: RentalDetailsStep }] : []),
    { title: 'Results', component: PreQualificationResults }
  ];

  const progress = ((currentStep + 1) / allSteps.length) * 100;

  const handleNext = () => {
    const nextStep = currentStep + 1;
    
    // Check if we're moving to the results step
    if (nextStep === allSteps.length - 1) {
      console.log('Calculating pre-qualification results...');
      const preQualResult = calculatePreQualification(formData);
      console.log('Pre-qualification result:', preQualResult);
      setResults(preQualResult);
    }
    
    setCurrentStep(nextStep);
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

  const CurrentStepComponent = allSteps[currentStep]?.component;

  const canProceed = () => {
    console.log('Checking if can proceed from step', currentStep, 'with data:', formData);
    
    switch (currentStep) {
      case 0: return formData.loanType !== '';
      case 1: return formData.loanAmount > 0 && formData.purchasePrice > 0;
      case 2: return formData.arv > 0;
      case 3: return formData.creditScore > 0 && formData.state !== '';
      case 4: 
        // This could be rental step OR results step depending on loan type
        if (shouldShowRentalStep && currentStep === 4) {
          return formData.monthlyRent > 0 && formData.monthlyExpenses > 0;
        }
        return true;
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
            Step {currentStep + 1} of {allSteps.length}: {allSteps[currentStep]?.title}
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
          
          {currentStep < allSteps.length - 1 ? (
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
