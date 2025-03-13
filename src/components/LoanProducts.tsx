
import { Home, Building, LineChart, Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Slider } from "@/components/ui/slider";
import { Form, FormControl, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { useForm } from "react-hook-form";

interface LoanProductProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
  expanded: boolean;
  onToggleExpand: () => void;
  longDescription: string;
}

const LoanProduct = ({
  icon,
  title,
  description,
  active,
  onClick,
  expanded,
  onToggleExpand,
  longDescription
}: LoanProductProps) => {
  return (
    <div className="mb-4">
      <div 
        onClick={onClick}
        className={cn(
          "cursor-pointer p-6 rounded-xl transition-all duration-300 border",
          active 
            ? "bg-white shadow-md border-heritage-500" 
            : "bg-white/50 hover:bg-white hover:shadow-sm border-gray-100"
        )}
      >
        <div className="flex items-start justify-between gap-5">
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
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpand();
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <ChevronDown className={cn(
              "h-5 w-5 transition-transform duration-200",
              expanded ? "transform rotate-180" : ""
            )} />
          </button>
        </div>
      </div>
      
      {expanded && (
        <div className="mt-2 p-6 bg-white/80 rounded-xl border border-gray-100 text-gray-700">
          {longDescription}
        </div>
      )}
    </div>
  );
};

// Loan Calculator Component
const LoanCalculator = ({ productType }: { productType: string }) => {
  const form = useForm({
    defaultValues: {
      loanAmount: 250000,
      loanTerm: 12,
      interestRate: 8,
      loanType: "interestOnly"
    },
  });

  // Default values for the various loan types
  const loanDefaults = {
    "FIX AND FLIP": {
      minAmount: 100000,
      maxAmount: 2000000,
      minTerm: 6,
      maxTerm: 24,
      defaultRate: 8,
      loanTypes: ["interestOnly"],
    },
    "GROUND UP CONSTRUCTION": {
      minAmount: 200000,
      maxAmount: 5000000,
      minTerm: 12,
      maxTerm: 36,
      defaultRate: 9.5,
      loanTypes: ["construction", "interestOnly"],
    },
    "INVESTOR LOANS BRIDGE": {
      minAmount: 150000,
      maxAmount: 3000000,
      minTerm: 6,
      maxTerm: 24,
      defaultRate: 7.5,
      loanTypes: ["interestOnly", "amortized"],
    },
    "DSCR": {
      minAmount: 100000,
      maxAmount: 2500000,
      minTerm: 12,
      maxTerm: 360,
      defaultRate: 6.5,
      loanTypes: ["amortized", "interestOnly"],
    },
  };

  // Get current loan type defaults
  const currentDefaults = loanDefaults[productType as keyof typeof loanDefaults] || loanDefaults["FIX AND FLIP"];

  // Calculate monthly payment
  const calculatePayment = () => {
    const loanAmount = form.watch("loanAmount");
    const loanTerm = form.watch("loanTerm");
    const interestRate = form.watch("interestRate");
    const loanType = form.watch("loanType");
    
    const monthlyRate = interestRate / 100 / 12;
    
    if (loanType === "interestOnly") {
      return loanAmount * monthlyRate;
    } else if (loanType === "amortized") {
      // Use amortization formula
      return loanAmount * monthlyRate * Math.pow(1 + monthlyRate, loanTerm) / (Math.pow(1 + monthlyRate, loanTerm) - 1);
    } else if (loanType === "construction") {
      // For construction loans, typically interest only during construction
      // Usually the draw schedule would affect this, but we'll simplify
      return (loanAmount / 2) * monthlyRate; // Assume average 50% drawn
    }
    
    return 0;
  };

  const monthlyPayment = calculatePayment();
  const totalPayment = form.watch("loanTerm") * monthlyPayment;
  const totalInterest = totalPayment - form.watch("loanAmount");

  return (
    <div className="p-6 bg-white rounded-xl shadow-lg border border-gray-100">
      <h2 className="text-3xl font-bold mb-6 text-heritage-600">Loan Calculator</h2>
      <p className="text-gray-700 mb-6">
        Estimate your {productType.toLowerCase()} loan payments based on your specific requirements.
      </p>

      <Form {...form}>
        <div className="space-y-6">
          <FormField
            control={form.control}
            name="loanAmount"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel>Loan Amount: ${field.value.toLocaleString()}</FormLabel>
                </div>
                <FormControl>
                  <Slider
                    min={currentDefaults.minAmount}
                    max={currentDefaults.maxAmount}
                    step={10000}
                    value={[field.value]}
                    onValueChange={(vals) => field.onChange(vals[0])}
                    className="mt-2"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="loanTerm"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel>Loan Term: {field.value} {field.value === 1 ? 'month' : 'months'}</FormLabel>
                </div>
                <FormControl>
                  <Slider
                    min={currentDefaults.minTerm}
                    max={currentDefaults.maxTerm}
                    step={1}
                    value={[field.value]}
                    onValueChange={(vals) => field.onChange(vals[0])}
                    className="mt-2"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="interestRate"
            render={({ field }) => (
              <FormItem>
                <div className="flex justify-between">
                  <FormLabel>Interest Rate: {field.value}%</FormLabel>
                </div>
                <FormControl>
                  <Slider
                    min={4}
                    max={15}
                    step={0.25}
                    value={[field.value]}
                    onValueChange={(vals) => field.onChange(vals[0])}
                    className="mt-2"
                  />
                </FormControl>
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="loanType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Loan Type</FormLabel>
                <Select 
                  onValueChange={field.onChange} 
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select loan type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {currentDefaults.loanTypes.includes("interestOnly") && (
                      <SelectItem value="interestOnly">Interest Only</SelectItem>
                    )}
                    {currentDefaults.loanTypes.includes("amortized") && (
                      <SelectItem value="amortized">Amortized</SelectItem>
                    )}
                    {currentDefaults.loanTypes.includes("construction") && (
                      <SelectItem value="construction">Construction</SelectItem>
                    )}
                  </SelectContent>
                </Select>
              </FormItem>
            )}
          />
        </div>
      </Form>

      <div className="mt-8 bg-gray-50 p-6 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-heritage-600">Payment Summary</h3>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600">Monthly Payment</p>
            <p className="text-2xl font-bold">${Math.round(monthlyPayment).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-600">Total Payments</p>
            <p className="text-2xl font-bold">${Math.round(totalPayment).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-600">Total Interest</p>
            <p className="text-2xl font-bold">${Math.round(totalInterest).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-600">Loan to Value</p>
            <p className="text-2xl font-bold">Up to 80%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

const LoanProducts = () => {
  const [activeProduct, setActiveProduct] = useState(0);
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  
  const products = [
    {
      icon: <Home size={24} />,
      title: "FIX AND FLIP",
      description: "Perfect for investors looking to renovate and sell properties for profit.",
      longDescription: "Our Fix and Flip loans are designed for real estate investors who purchase properties to renovate and resell them quickly for profit. These short-term loans typically range from 6-24 months and offer competitive rates with up to 90% LTV and 100% of rehab costs. Our streamlined process ensures quick closings, allowing you to move fast on opportunities. Interest-only payments during the renovation period help maximize your cash flow."
    },
    {
      icon: <Building size={24} />,
      title: "GROUND UP CONSTRUCTION",
      description: "Finance new construction projects with flexible terms and competitive rates.",
      longDescription: "Ground Up Construction loans provide financing for new construction projects from the ground up. These loans cover land acquisition, development, and building construction costs. We offer flexible draw schedules aligned with construction milestones, with terms typically ranging from 12-36 months. Our construction loans feature interest-only payments during the building phase on funds drawn and can transition to permanent financing if needed. We understand construction timelines and provide the flexibility needed for successful project completion."
    },
    {
      icon: <Briefcase size={24} />,
      title: "INVESTOR LOANS BRIDGE",
      description: "Short-term financing to bridge the gap between property purchases.",
      longDescription: "Bridge loans provide short-term financing to 'bridge the gap' between transactions, such as purchasing a new property before selling an existing one. These loans typically range from 6-24 months with competitive rates and quick closings (as fast as 10 days). They're ideal for time-sensitive opportunities, auction purchases, or securing properties while arranging long-term financing. Our bridge loans offer flexible exit strategies and minimal documentation requirements compared to traditional loans."
    },
    {
      icon: <LineChart size={24} />,
      title: "DSCR",
      description: "Debt Service Coverage Ratio loans for investment property acquisitions.",
      longDescription: "DSCR (Debt Service Coverage Ratio) loans are based on the property's income rather than the borrower's personal income. This makes them ideal for real estate investors with multiple properties or self-employed individuals. These loans qualify based on whether the property's income covers debt payments. We offer DSCR loans with competitive rates, longer terms (up to 30 years), no personal income verification, and availability for both individual investors and LLCs. They're perfect for building a portfolio of cash-flowing rental properties."
    },
  ];

  const toggleExpandProduct = (index: number) => {
    if (expandedProduct === index) {
      setExpandedProduct(null);
    } else {
      setExpandedProduct(index);
    }
  };

  return (
    <section id="loan-products" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          <div>
            <div className="space-y-2 max-w-lg">
              {products.map((product, index) => (
                <LoanProduct
                  key={index}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  longDescription={product.longDescription}
                  active={activeProduct === index}
                  onClick={() => setActiveProduct(index)}
                  expanded={expandedProduct === index}
                  onToggleExpand={() => toggleExpandProduct(index)}
                />
              ))}
            </div>
          </div>
          
          <div className="sticky top-24">
            <LoanCalculator productType={products[activeProduct].title} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoanProducts;
