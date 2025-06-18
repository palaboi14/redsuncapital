
import { Label } from '@/components/ui/label';
import { Card, CardContent } from '@/components/ui/card';
import { LoanApplicationData } from '@/types/compass';

interface LoanTypeStepProps {
  data: LoanApplicationData;
  onUpdate: (data: Partial<LoanApplicationData>) => void;
}

const LoanTypeStep = ({ data, onUpdate }: LoanTypeStepProps) => {
  const loanTypes = [
    {
      id: 'Fix & Flip',
      title: 'Fix & Flip',
      description: 'Short-term loans for purchasing and renovating properties to sell',
      icon: '🏠'
    },
    {
      id: 'Rental/DSCR',
      title: 'Rental/DSCR',
      description: 'Investment property loans based on rental income',
      icon: '🏢'
    },
    {
      id: 'Ground-Up',
      title: 'Ground-Up Construction',
      description: 'Loans for new construction projects',
      icon: '🏗️'
    },
    {
      id: 'Refinance',
      title: 'Refinance',
      description: 'Refinance existing investment properties',
      icon: '💰'
    }
  ];

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2">Select Your Loan Type</h2>
        <p className="text-gray-600">Choose the loan product that best fits your needs</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {loanTypes.map((type) => (
          <Card 
            key={type.id}
            className={`cursor-pointer transition-all hover:shadow-md ${
              data.loanType === type.id ? 'ring-2 ring-heritage-500 bg-heritage-50' : ''
            }`}
            onClick={() => onUpdate({ loanType: type.id })}
          >
            <CardContent className="p-6 text-center">
              <div className="text-4xl mb-3">{type.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{type.title}</h3>
              <p className="text-sm text-gray-600">{type.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {data.loanType && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
          <p className="text-green-800 font-medium">
            ✓ Selected: {data.loanType}
          </p>
        </div>
      )}
    </div>
  );
};

export default LoanTypeStep;
