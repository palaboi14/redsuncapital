
import { Home, Building, LineChart, Briefcase } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface LoanProductProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
}

const LoanProduct = ({ icon, title, description, active, onClick }: LoanProductProps) => {
  return (
    <div 
      onClick={onClick}
      className={cn(
        "cursor-pointer p-6 rounded-xl transition-all duration-300 border",
        active 
          ? "bg-white shadow-md border-heritage-500" 
          : "bg-white/50 hover:bg-white hover:shadow-sm border-gray-100"
      )}
    >
      <div className="flex items-start gap-5">
        <div className={cn(
          "p-3 rounded-full",
          active ? "bg-heritage-500 text-white" : "bg-gray-100 text-gray-600"
        )}>
          {icon}
        </div>
        <div>
          <h3 className={cn(
            "text-xl font-bold mb-2",
            active ? "text-heritage-600" : "text-gray-800"
          )}>
            {title}
          </h3>
          <p className={cn(
            "text-sm",
            active ? "text-gray-700" : "text-gray-600"
          )}>
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

const LoanProducts = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  
  const products = [
    {
      icon: <Home size={24} />,
      title: "FIX AND FLIP",
      description: "Perfect for investors looking to renovate and sell properties for profit."
    },
    {
      icon: <Building size={24} />,
      title: "GROUND UP CONSTRUCTION",
      description: "Finance new construction projects with flexible terms and competitive rates."
    },
    {
      icon: <Briefcase size={24} />,
      title: "INVESTOR LOANS BRIDGE",
      description: "Short-term financing to bridge the gap between property purchases."
    },
    {
      icon: <LineChart size={24} />,
      title: "DSCR",
      description: "Debt Service Coverage Ratio loans for investment property acquisitions."
    },
  ];

  return (
    <section id="loan-products" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-8 max-w-lg">
              {products.map((product, index) => (
                <LoanProduct
                  key={index}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  active={activeProduct === index}
                  onClick={() => setActiveProduct(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 opacity-0 animate-fade-in">
            <h2 className="text-3xl font-bold mb-6 text-heritage-600">We Provide Value</h2>
            <p className="text-gray-700 mb-6">
              Through our market insight, knowledge, and wide array of loan products. We empower investors with the confidence in knowing when they need a lender to perform, we are there for them.
            </p>
            <p className="text-gray-700 mb-8">
              If you're interested in seeing the loan products available, click here.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-heritage-600 mb-1">Fast Closing</h3>
                <div className="w-8 h-0.5 bg-heritage-500 mb-3"></div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-heritage-600 mb-1">High Leverage</h3>
                <div className="w-8 h-0.5 bg-heritage-500 mb-3"></div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-heritage-600 mb-1">Common Sense Underwriting</h3>
                <div className="w-8 h-0.5 bg-heritage-500 mb-3"></div>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h3 className="font-semibold text-heritage-600 mb-1">Less Paperwork</h3>
                <div className="w-8 h-0.5 bg-heritage-500 mb-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanProducts;
