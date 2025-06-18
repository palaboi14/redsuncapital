
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { LoanApplicationData } from '@/types/compass';

interface BorrowerProfileStepProps {
  data: LoanApplicationData;
  onUpdate: (data: Partial<LoanApplicationData>) => void;
}

const BorrowerProfileStep = ({ data, onUpdate }: BorrowerProfileStepProps) => {
  const states = [
    'AL', 'AK', 'AZ', 'AR', 'CA', 'CO', 'CT', 'DE', 'FL', 'GA',
    'HI', 'ID', 'IL', 'IN', 'IA', 'KS', 'KY', 'LA', 'ME', 'MD',
    'MA', 'MI', 'MN', 'MS', 'MO', 'MT', 'NE', 'NV', 'NH', 'NJ',
    'NM', 'NY', 'NC', 'ND', 'OH', 'OK', 'OR', 'PA', 'RI', 'SC',
    'SD', 'TN', 'TX', 'UT', 'VT', 'VA', 'WA', 'WV', 'WI', 'WY'
  ];

  const getCreditScoreCategory = (score: number) => {
    if (score >= 740) return { category: 'Excellent', color: 'text-green-600' };
    if (score >= 680) return { category: 'Good', color: 'text-blue-600' };
    if (score >= 620) return { category: 'Fair', color: 'text-yellow-600' };
    if (score >= 580) return { category: 'Poor', color: 'text-orange-600' };
    return { category: 'Very Poor', color: 'text-red-600' };
  };

  const creditInfo = data.creditScore > 0 ? getCreditScoreCategory(data.creditScore) : null;

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Borrower Profile</h2>
        <p className="text-gray-600">Tell us about your experience and creditworthiness</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="creditScore">FICO Credit Score</Label>
          <Input
            id="creditScore"
            type="number"
            placeholder="720"
            min="300"
            max="850"
            value={data.creditScore || ''}
            onChange={(e) => onUpdate({ creditScore: Number(e.target.value) })}
            className="text-lg"
          />
          {creditInfo && (
            <p className={`text-sm font-medium ${creditInfo.color}`}>
              {creditInfo.category} Credit
            </p>
          )}
        </div>
        
        <div className="space-y-2">
          <Label htmlFor="state">Property State</Label>
          <Select value={data.state} onValueChange={(value) => onUpdate({ state: value })}>
            <SelectTrigger>
              <SelectValue placeholder="Select state" />
            </SelectTrigger>
            <SelectContent className="max-h-60">
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Switch
              id="hasExperience"
              checked={data.hasExperience}
              onCheckedChange={(checked) => onUpdate({ hasExperience: checked })}
            />
            <Label htmlFor="hasExperience">I have real estate investment experience</Label>
          </div>
          
          {data.hasExperience && (
            <div className="space-y-2">
              <Label htmlFor="dealCount">Number of Previous Deals</Label>
              <Input
                id="dealCount"
                type="number"
                placeholder="5"
                min="0"
                value={data.dealCount || ''}
                onChange={(e) => onUpdate({ dealCount: Number(e.target.value) })}
              />
            </div>
          )}
        </div>
      </div>
      
      {data.creditScore > 0 && data.state && (
        <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
          <h3 className="font-semibold text-blue-900 mb-2">Borrower Summary</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
            <div>
              <span className="text-blue-700">Credit Score:</span>
              <span className="font-medium ml-2">{data.creditScore}</span>
            </div>
            <div>
              <span className="text-blue-700">State:</span>
              <span className="font-medium ml-2">{data.state}</span>
            </div>
            <div>
              <span className="text-blue-700">Experience:</span>
              <span className="font-medium ml-2">
                {data.hasExperience ? `${data.dealCount || 0} deals` : 'First-time investor'}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BorrowerProfileStep;
