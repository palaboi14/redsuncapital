
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { LoanApplicationData } from '@/types/compass';

interface BasicInfoStepProps {
  data: LoanApplicationData;
  onUpdate: (data: Partial<LoanApplicationData>) => void;
}

const BasicInfoStep = ({ data, onUpdate }: BasicInfoStepProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Basic Loan Information</h2>
        <p className="text-gray-600">Enter your desired loan amount and property details</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="loanAmount">Requested Loan Amount</Label>
          <Input
            id="loanAmount"
            type="number"
            placeholder="500000"
            value={data.loanAmount || ''}
            onChange={(e) => onUpdate({ loanAmount: Number(e.target.value) })}
            className="text-lg"
          />
          {data.loanAmount > 0 && (
            <p className="text-sm text-gray-500">{formatCurrency(data.loanAmount)}</p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="purchasePrice">Purchase Price / Property Value</Label>
          <Input
            id="purchasePrice"
            type="number"
            placeholder="400000"
            value={data.purchasePrice || ''}
            onChange={(e) => onUpdate({ purchasePrice: Number(e.target.value) })}
            className="text-lg"
          />
          {data.purchasePrice > 0 && (
            <p className="text-sm text-gray-500">{formatCurrency(data.purchasePrice)}</p>
          )}
        </div>
        
        {(data.loanType === 'Fix & Flip' || data.loanType === 'Ground-Up') && (
          <>
            <div className="space-y-2">
              <Label htmlFor="rehabBudget">
                {data.loanType === 'Ground-Up' ? 'Construction Budget' : 'Estimated Rehab Budget'}
              </Label>
              <Input
                id="rehabBudget"
                type="number"
                placeholder="100000"
                value={data.rehabBudget || ''}
                onChange={(e) => onUpdate({ rehabBudget: Number(e.target.value) })}
                className="text-lg"
              />
              {data.rehabBudget > 0 && (
                <p className="text-sm text-gray-500">{formatCurrency(data.rehabBudget)}</p>
              )}
            </div>
            
            {data.loanType === 'Ground-Up' && (
              <div className="space-y-2">
                <Label htmlFor="landValue">Land Value</Label>
                <Input
                  id="landValue"
                  type="number"
                  placeholder="200000"
                  value={data.landValue || ''}
                  onChange={(e) => onUpdate({ landValue: Number(e.target.value) })}
                  className="text-lg"
                />
                {data.landValue > 0 && (
                  <p className="text-sm text-gray-500">{formatCurrency(data.landValue)}</p>
                )}
              </div>
            )}
          </>
        )}
      </div>
      
      {data.loanAmount > 0 && data.purchasePrice > 0 && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Quick Summary</h3>
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-blue-700">Loan Amount:</span>
              <span className="font-medium ml-2">{formatCurrency(data.loanAmount)}</span>
            </div>
            <div>
              <span className="text-blue-700">Purchase Price:</span>
              <span className="font-medium ml-2">{formatCurrency(data.purchasePrice)}</span>
            </div>
            {data.rehabBudget > 0 && (
              <div>
                <span className="text-blue-700">
                  {data.loanType === 'Ground-Up' ? 'Construction:' : 'Rehab:'}
                </span>
                <span className="font-medium ml-2">{formatCurrency(data.rehabBudget)}</span>
              </div>
            )}
            <div>
              <span className="text-blue-700">Initial LTV:</span>
              <span className="font-medium ml-2">
                {((data.loanAmount / data.purchasePrice) * 100).toFixed(1)}%
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasicInfoStep;
