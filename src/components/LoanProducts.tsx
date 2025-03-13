
import { Home, Building, LineChart, Briefcase, ChevronDown, ChevronUp } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface LoanProductProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  expanded: boolean;
  onClick: () => void;
  details: string;
}

const LoanProduct = ({ icon, title, description, expanded, onClick, details }: LoanProductProps) => {
  return (
    <div className="transition-all duration-300 border rounded-xl overflow-hidden">
      <div 
        onClick={onClick}
        className={cn(
          "cursor-pointer p-6 transition-all duration-300 border-b",
          expanded 
            ? "bg-white shadow-md border-heritage-500" 
            : "bg-white/50 hover:bg-white hover:shadow-sm border-transparent"
        )}
      >
        <div className="flex items-start justify-between gap-5">
          <div className="flex items-start gap-5">
            <div className={cn(
              "p-3 rounded-full",
              expanded ? "bg-heritage-500 text-white" : "bg-gray-100 text-gray-600"
            )}>
              {icon}
            </div>
            <div>
              <h3 className={cn(
                "text-xl font-bold mb-2",
                expanded ? "text-heritage-600" : "text-gray-800"
              )}>
                {title}
              </h3>
              <p className={cn(
                "text-sm",
                expanded ? "text-gray-700" : "text-gray-600"
              )}>
                {description}
              </p>
            </div>
          </div>
          <div className="text-gray-500">
            {expanded ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
          </div>
        </div>
      </div>
      
      {expanded && (
        <div className="bg-white p-6 text-gray-700 animate-accordion-down">
          <p>{details}</p>
        </div>
      )}
    </div>
  );
};

const LoanProducts = () => {
  const [expandedProductIndex, setExpandedProductIndex] = useState<number | null>(null);
  
  const toggleProduct = (index: number) => {
    setExpandedProductIndex(expandedProductIndex === index ? null : index);
  };
  
  const products = [
    {
      icon: <Home size={24} />,
      title: "FIX AND FLIP",
      description: "Perfect for investors looking to renovate and sell properties for profit.",
      details: "Our Fix and Flip loans provide short-term financing solutions designed specifically for real estate investors who purchase properties, renovate them, and sell them for profit. With competitive rates, flexible terms, and up to 90% LTV and 100% of rehab costs, our program is ideal for both experienced and new investors. We offer streamlined underwriting and fast closings, typically within 5-10 business days."
    },
    {
      icon: <Building size={24} />,
      title: "GROUND UP CONSTRUCTION",
      description: "Finance new construction projects with flexible terms and competitive rates.",
      details: "Our Ground Up Construction loans cater to developers and builders looking to finance new construction projects from the ground up. We offer loans for residential and multifamily properties with flexible terms and competitive rates. With loan amounts up to $5 million and up to 80% LTC (Loan-to-Cost), we provide the capital you need to bring your vision to life. Our experienced team understands the unique challenges of construction financing."
    },
    {
      icon: <Briefcase size={24} />,
      title: "INVESTOR LOANS BRIDGE",
      description: "Short-term financing to bridge the gap between property purchases.",
      details: "Our Bridge Loans provide temporary financing that helps investors 'bridge the gap' between transactions. These short-term loans are perfect for time-sensitive opportunities or when traditional financing isn't available yet. With terms ranging from 12-24 months, loan amounts up to $10 million, and up to 80% LTV, our bridge loans give you the flexibility you need to act quickly on investment opportunities."
    },
    {
      icon: <LineChart size={24} />,
      title: "DSCR",
      description: "Debt Service Coverage Ratio loans for investment property acquisitions.",
      details: "Our DSCR (Debt Service Coverage Ratio) loans are specifically designed for investment property acquisitions and refinances. Unlike traditional loans that focus on the borrower's income, DSCR loans qualify based on the property's ability to generate rental income sufficient to cover the loan payments. With no personal income verification required, interest rates starting at 6.99%, and loan amounts up to $5 million, our DSCR loans offer a simplified path to growing your investment portfolio."
    },
  ];

  return (
    <section id="loan-products" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <div className="space-y-4 max-w-lg">
              {products.map((product, index) => (
                <LoanProduct
                  key={index}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  details={product.details}
                  expanded={expandedProductIndex === index}
                  onClick={() => toggleProduct(index)}
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
