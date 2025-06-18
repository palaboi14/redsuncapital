
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { LoanApplicationData } from '@/types/compass';

interface RentalDetailsStepProps {
  data: LoanApplicationData;
  onUpdate: (data: Partial<LoanApplicationData>) => void;
}

const RentalDetailsStep = ({ data, onUpdate }: RentalDetailsStepProps) => {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const calculateDSCR = () => {
    if (data.monthlyRent > 0 && data.monthlyExpenses > 0) {
      // Estimate mortgage payment based on loan amount
      const estimatedPayment = (data.loanAmount * 0.012); // Rough estimate at 12% annual rate
      const totalExpenses = data.monthlyExpenses + estimatedPayment;
      return data.monthlyRent / totalExpenses;
    }
    return 0;
  };

  const dscr = calculateDSCR();

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Rental Property Details</h2>
        <p className="text-gray-600">Provide rental income and expense information for DSCR calculation</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="monthlyRent">Monthly Rental Income</Label>
          <Input
            id="monthlyRent"
            type="number"
            placeholder="3500"
            value={data.monthlyRent || ''}
            onChange={(e) => onUpdate({ monthlyRent: Number(e.target.value) })}
            className="text-lg"
          />
          {data.monthlyRent > 0 && (
            <p className="text-sm text-gray-500">{formatCurrency(data.monthlyRent)}/month</p>
          )}
          <p className="text-xs text-gray-400">
            Expected monthly rental income
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="monthlyExpenses">Monthly Property Expenses</Label>
          <Input
            id="monthlyExpenses"
            type="number"
            placeholder="800"
            value={data.monthlyExpenses || ''}
            onChange={(e) => onUpdate({ monthlyExpenses: Number(e.target.value) })}
            className="text-lg"
          />
          {data.monthlyExpenses > 0 && (
            <p className="text-sm text-gray-500">{formatCurrency(data.monthlyExpenses)}/month</p>
          )}
          <p className="text-xs text-gray-400">
            Taxes, insurance, maintenance, property management, etc.
          </p>
        </div>
      </div>
      
      {dscr > 0 && (
        <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
          <h3 className="font-semibold text-purple-900 mb-2">DSCR Analysis</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-purple-700">Monthly Rent:</span>
              <span className="font-medium ml-2">{formatCurrency(data.monthlyRent)}</span>
            </div>
            <div>
              <span className="text-purple-700">Property Expenses:</span>
              <span className="font-medium ml-2">{formatCurrency(data.monthlyExpenses)}</span>
            </div>
            <div>
              <span className="text-purple-700">Est. Mortgage Payment:</span>
              <span className="font-medium ml-2">{formatCurrency(data.loanAmount * 0.012)}</span>
            </div>
            <div>
              <span className="text-purple-700">DSCR Ratio:</span>
              <span className={`font-medium ml-2 ${dscr >= 1.1 ? 'text-green-600' : 'text-red-600'}`}>
                {dscr.toFixed(2)}
              </span>
            </div>
          </div>
          <div className="mt-2">
            <p className={`text-xs ${dscr >= 1.1 ? 'text-green-600' : 'text-red-600'}`}>
              {dscr >= 1.1 
                ? '✓ DSCR meets minimum requirement (1.10+)' 
                : '⚠ DSCR below minimum requirement (1.10)'
              }
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default RentalDetailsStep;
