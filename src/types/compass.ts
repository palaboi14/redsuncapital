
export interface LoanApplicationData {
  loanType: string;
  loanAmount: number;
  purchasePrice: number;
  rehabBudget: number;
  arv: number;
  creditScore: number;
  hasExperience: boolean;
  dealCount: number;
  state: string;
  monthlyRent: number;
  monthlyExpenses: number;
  exitStrategy: string;
  constructionBudget: number;
  landValue: number;
}

export interface PreQualificationResult {
  isQualified: boolean;
  maxLoanAmount: number;
  downPayment: number;
  ltv: number;
  ltc: number;
  arvRatio: number;
  dscr?: number;
  rejectionReasons: string[];
  loanDetails: {
    interestRate: number;
    term: number;
    points: number;
  };
}
