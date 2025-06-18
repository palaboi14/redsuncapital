
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { LoanApplicationData } from '@/types/compass';

interface PropertyDetailsStepProps {
  data: LoanApplicationData;
  onUpdate: (data: Partial<LoanApplicationData>) => void;
}

const PropertyDetailsStep = ({ data, onUpdate }: PropertyDetailsStepProps) => {
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
        <h2 className="text-2xl font-bold mb-2">Property Details</h2>
        <p className="text-gray-600">Provide additional property information</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="arv">ARV (After Repair Value)</Label>
          <Input
            id="arv"
            type="number"
            placeholder="600000"
            value={data.arv || ''}
            onChange={(e) => onUpdate({ arv: Number(e.target.value) })}
            className="text-lg"
          />
          {data.arv > 0 && (
            <p className="text-sm text-gray-500">{formatCurrency(data.arv)}</p>
          )}
          <p className="text-xs text-gray-400">
            Expected value after renovations/construction
          </p>
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="exitStrategy">Exit Strategy</Label>
          <Select value={data.exitStrategy} onValueChange={(value) => onUpdate({ exitStrategy: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select exit strategy" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Sell">Sell (Flip)</SelectItem>
              <SelectItem value="Hold">Hold (Rental)</SelectItem>
              <SelectItem value="Refinance">Refinance</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      
      {data.arv > 0 && data.purchasePrice > 0 && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <h3 className="font-semibold text-green-900 mb-2">Property Analysis</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div>
              <span className="text-green-700">Purchase Price:</span>
              <span className="font-medium ml-2">{formatCurrency(data.purchasePrice)}</span>
            </div>
            <div>
              <span className="text-green-700">ARV:</span>
              <span className="font-medium ml-2">{formatCurrency(data.arv)}</span>
            </div>
            {data.rehabBudget > 0 && (
              <div>
                <span className="text-green-700">Total Cost:</span>
                <span className="font-medium ml-2">
                  {formatCurrency(data.purchasePrice + data.rehabBudget)}
                </span>
              </div>
            )}
            <div>
              <span className="text-green-700">Potential Profit:</span>
              <span className="font-medium ml-2">
                {formatCurrency(data.arv - data.purchasePrice - (data.rehabBudget || 0))}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PropertyDetailsStep;
