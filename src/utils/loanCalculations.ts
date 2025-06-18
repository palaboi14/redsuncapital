
import { LoanApplicationData, PreQualificationResult } from '@/types/compass';

export const calculatePreQualification = (data: LoanApplicationData): PreQualificationResult => {
  const rejectionReasons: string[] = [];
  let maxLoanAmount = 0;
  let interestRate = 12; // Base rate
  let term = 12; // months
  let points = 2;

  // Credit score adjustments
  if (data.creditScore < 580) {
    rejectionReasons.push('Credit score below minimum requirement (580)');
  } else if (data.creditScore < 620) {
    interestRate += 2;
    points += 1;
  } else if (data.creditScore < 680) {
    interestRate += 1;
    points += 0.5;
  }

  // Experience adjustments
  if (!data.hasExperience || data.dealCount === 0) {
    interestRate += 1;
    points += 0.5;
  }

  // Loan type specific calculations
  switch (data.loanType) {
    case 'Fix & Flip':
      maxLoanAmount = calculateFixFlipMax(data, rejectionReasons);
      term = 12;
      break;
    case 'Rental/DSCR':
      maxLoanAmount = calculateRentalMax(data, rejectionReasons);
      term = 360; // 30 years
      interestRate -= 1; // Lower rate for rentals
      break;
    case 'Ground-Up':
      maxLoanAmount = calculateGroundUpMax(data, rejectionReasons);
      term = 18;
      interestRate += 1; // Higher rate for construction
      break;
    case 'Refinance':
      maxLoanAmount = calculateRefinanceMax(data, rejectionReasons);
      term = 360;
      break;
    default:
      rejectionReasons.push('Invalid loan type selected');
  }

  // Final loan amount is the lower of requested or max allowed
  const finalLoanAmount = Math.min(data.loanAmount, maxLoanAmount);
  
  // Calculate ratios
  const ltv = (finalLoanAmount / data.purchasePrice) * 100;
  const totalCost = data.purchasePrice + (data.rehabBudget || 0);
  const ltc = (finalLoanAmount / totalCost) * 100;
  const arvRatio = data.arv > 0 ? (finalLoanAmount / data.arv) * 100 : 0;
  
  // Calculate down payment
  const downPayment = Math.max(0, data.purchasePrice - finalLoanAmount + (data.rehabBudget || 0));

  // DSCR calculation for rental properties
  let dscr: number | undefined;
  if (data.loanType === 'Rental/DSCR' && data.monthlyRent > 0 && data.monthlyExpenses > 0) {
    const monthlyPayment = calculateMonthlyPayment(finalLoanAmount, interestRate / 100, term);
    dscr = data.monthlyRent / (data.monthlyExpenses + monthlyPayment);
    
    if (dscr < 1.1) {
      rejectionReasons.push('DSCR below minimum requirement (1.10)');
    }
  }

  const isQualified = rejectionReasons.length === 0 && finalLoanAmount > 0;

  return {
    isQualified,
    maxLoanAmount: finalLoanAmount,
    downPayment,
    ltv,
    ltc,
    arvRatio,
    dscr,
    rejectionReasons,
    loanDetails: {
      interestRate,
      term,
      points
    }
  };
};

const calculateFixFlipMax = (data: LoanApplicationData, rejectionReasons: string[]): number => {
  // Max LTC: 85% of purchase price or 100% of rehab (whichever is less)
  const maxLTC = Math.min(data.purchasePrice * 0.85, data.rehabBudget);
  
  // Max ARV: 70% (varies based on experience and credit)
  let maxARVRatio = 0.70;
  
  if (data.hasExperience && data.dealCount >= 3) {
    maxARVRatio = 0.72;
  }
  
  if (data.creditScore >= 720) {
    maxARVRatio += 0.03;
  }
  
  const maxARV = data.arv * maxARVRatio;
  
  // Final max is the lower of the two
  const maxLoan = Math.min(maxLTC, maxARV);
  
  if (data.arv === 0) {
    rejectionReasons.push('ARV (After Repair Value) is required');
  }
  
  if (data.rehabBudget === 0) {
    rejectionReasons.push('Rehab budget is required for Fix & Flip loans');
  }
  
  return maxLoan;
};

const calculateRentalMax = (data: LoanApplicationData, rejectionReasons: string[]): number => {
  // Max LTV based on credit bands
  let maxLTV = 0.70; // Base 70%
  
  if (data.creditScore >= 740) {
    maxLTV = 0.80;
  } else if (data.creditScore >= 680) {
    maxLTV = 0.75;
  }
  
  // Experience bonus
  if (data.hasExperience && data.dealCount >= 5) {
    maxLTV += 0.05;
  }
  
  const maxLoan = data.purchasePrice * maxLTV;
  
  if (data.monthlyRent === 0) {
    rejectionReasons.push('Monthly rental income is required for DSCR loans');
  }
  
  if (data.monthlyExpenses === 0) {
    rejectionReasons.push('Monthly property expenses are required for DSCR loans');
  }
  
  return maxLoan;
};

const calculateGroundUpMax = (data: LoanApplicationData, rejectionReasons: string[]): number => {
  const totalCost = data.landValue + data.rehabBudget; // Construction budget
  
  // Max LTC: 75% of total cost
  let maxLTC = 0.75;
  
  if (data.hasExperience && data.dealCount >= 2) {
    maxLTC = 0.80;
  }
  
  if (data.creditScore >= 720) {
    maxLTC += 0.05;
  }
  
  const maxLoan = totalCost * maxLTC;
  
  if (data.landValue === 0) {
    rejectionReasons.push('Land value is required for Ground-Up construction');
  }
  
  if (data.rehabBudget === 0) {
    rejectionReasons.push('Construction budget is required for Ground-Up loans');
  }
  
  return maxLoan;
};

const calculateRefinanceMax = (data: LoanApplicationData, rejectionReasons: string[]): number => {
  // Max LTV: 75% of current value
  let maxLTV = 0.75;
  
  if (data.creditScore >= 720) {
    maxLTV = 0.80;
  }
  
  if (data.hasExperience && data.dealCount >= 3) {
    maxLTV += 0.05;
  }
  
  return data.purchasePrice * maxLTV; // Using purchase price as current value
};

const calculateMonthlyPayment = (principal: number, annualRate: number, termMonths: number): number => {
  if (termMonths <= 12) {
    // Interest-only for short term loans
    return (principal * annualRate) / 12;
  }
  
  // Amortizing payment for long term loans
  const monthlyRate = annualRate / 12;
  const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / 
                  (Math.pow(1 + monthlyRate, termMonths) - 1);
  
  return payment;
};
