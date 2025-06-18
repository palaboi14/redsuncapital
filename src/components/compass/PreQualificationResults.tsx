
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, XCircle, Download, RotateCcw } from 'lucide-react';
import { LoanApplicationData, PreQualificationResult } from '@/types/compass';

interface PreQualificationResultsProps {
  data: LoanApplicationData;
  results: PreQualificationResult | null;
  onRestart: () => void;
}

const PreQualificationResults = ({ data, results, onRestart }: PreQualificationResultsProps) => {
  if (!results) return null;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatPercentage = (value: number) => {
    return `${value.toFixed(2)}%`;
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <div className="flex items-center justify-center mb-4">
          {results.isQualified ? (
            <CheckCircle className="h-16 w-16 text-green-500" />
          ) : (
            <XCircle className="h-16 w-16 text-red-500" />
          )}
        </div>
        <h2 className="text-3xl font-bold mb-2">
          {results.isQualified ? 'Congratulations!' : 'Not Qualified'}
        </h2>
        <p className="text-lg text-gray-600">
          {results.isQualified 
            ? 'You are pre-qualified for this loan program.' 
            : 'Unfortunately, you do not meet the current qualification requirements.'
          }
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Loan Summary</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Loan Type:</span>
              <Badge variant="outline">{data.loanType}</Badge>
            </div>
            <div className="flex justify-between">
              <span>Requested Amount:</span>
              <span className="font-medium">{formatCurrency(data.loanAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>Max Qualified Amount:</span>
              <span className="font-medium">{formatCurrency(results.maxLoanAmount)}</span>
            </div>
            <div className="flex justify-between">
              <span>Down Payment Required:</span>
              <span className="font-medium">{formatCurrency(results.downPayment)}</span>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Loan Ratios</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>LTV (Loan-to-Value):</span>
              <span className="font-medium">{formatPercentage(results.ltv)}</span>
            </div>
            <div className="flex justify-between">
              <span>LTC (Loan-to-Cost):</span>
              <span className="font-medium">{formatPercentage(results.ltc)}</span>
            </div>
            <div className="flex justify-between">
              <span>ARV Ratio:</span>
              <span className="font-medium">{formatPercentage(results.arvRatio)}</span>
            </div>
            {results.dscr && (
              <div className="flex justify-between">
                <span>DSCR:</span>
                <span className="font-medium">{results.dscr.toFixed(2)}</span>
              </div>
            )}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Loan Terms</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span>Interest Rate:</span>
              <span className="font-medium">{formatPercentage(results.loanDetails.interestRate)}</span>
            </div>
            <div className="flex justify-between">
              <span>Term:</span>
              <span className="font-medium">{results.loanDetails.term} months</span>
            </div>
            <div className="flex justify-between">
              <span>Points:</span>
              <span className="font-medium">{results.loanDetails.points} points</span>
            </div>
          </CardContent>
        </Card>

        {!results.isQualified && results.rejectionReasons.length > 0 && (
          <Card>
            <CardHeader>
              <CardTitle className="text-lg text-red-600">Rejection Reasons</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-2">
                {results.rejectionReasons.map((reason, index) => (
                  <li key={index} className="flex items-center text-red-600">
                    <XCircle className="h-4 w-4 mr-2 flex-shrink-0" />
                    <span className="text-sm">{reason}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <Button 
          onClick={onRestart}
          variant="outline"
          className="flex items-center gap-2"
        >
          <RotateCcw className="h-4 w-4" />
          Start New Pre-Qualification
        </Button>
        
        {results.isQualified && (
          <Button className="bg-heritage-500 hover:bg-heritage-600 flex items-center gap-2">
            <Download className="h-4 w-4" />
            Download Pre-Qualification Letter
          </Button>
        )}
      </div>

      <div className="text-center text-sm text-gray-500 border-t pt-4">
        <p>
          This pre-qualification is based on the information provided and is subject to full underwriting review. 
          Final loan approval may require additional documentation and verification.
        </p>
      </div>
    </div>
  );
};

export default PreQualificationResults;
