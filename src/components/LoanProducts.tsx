import { Home, Building, LineChart, Briefcase, ChevronDown, HelpCircle, RefreshCw, FileText, ArrowRight } from 'lucide-react';
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
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog";

interface LoanProductProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  active: boolean;
  onClick: () => void;
  expanded: boolean;
  onToggleExpand: () => void;
  longDescription: string;
  documentRequirements: string[];
}

const ContactFormDialog = () => {
  return (
    <Dialog>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-heritage-600">Get Started</DialogTitle>
          <DialogDescription>
            Fill out the form below and we'll get back to you shortly.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-heritage-500 focus:border-heritage-500"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-heritage-500 focus:border-heritage-500"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                Phone
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-heritage-500 focus:border-heritage-500"
                placeholder="(555) 555-5555"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={3}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-heritage-500 focus:border-heritage-500"
                placeholder="Tell us about your project"
              ></textarea>
            </div>
            <div className="flex justify-end">
              <Button className="bg-heritage-500 hover:bg-heritage-600">
                Submit
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const DocumentRequirementsDialog = ({ 
  title, 
  requirements 
}: { 
  title: string; 
  requirements: string[] 
}) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <button 
          className="flex items-center gap-1 text-sm text-heritage-500 hover:text-heritage-600 mt-3"
        >
          <FileText className="h-4 w-4" />
          <span>Documents & Requirements</span>
        </button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-heritage-600">{title} - Required Documents</DialogTitle>
          <DialogDescription>
            Please prepare the following documents for your loan application.
          </DialogDescription>
        </DialogHeader>
        <div className="py-4">
          <ul className="list-disc pl-5 space-y-2">
            {requirements.map((requirement, index) => (
              <li key={index} className="text-gray-700">{requirement}</li>
            ))}
          </ul>
          <div className="mt-6 flex justify-end">
            <DialogClose asChild>
              <Button 
                variant="outline" 
                className="mr-2"
              >
                Close
              </Button>
            </DialogClose>
            <DialogTrigger asChild>
              <Button 
                className="bg-heritage-500 hover:bg-heritage-600 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                Get Started
                <ArrowRight className="ml-2" size={16} />
              </Button>
            </DialogTrigger>
          </div>
        </div>
      </DialogContent>
      <ContactFormDialog />
    </Dialog>
  );
};

const LoanProduct = ({
  icon,
  title,
  description,
  active,
  onClick,
  expanded,
  onToggleExpand,
  longDescription,
  documentRequirements
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
          <div className="mb-4">{longDescription}</div>
          <DocumentRequirementsDialog title={title} requirements={documentRequirements} />
        </div>
      )}
    </div>
  );
};

interface BaseLoanDefaults {
  minAmount: number;
  maxAmount: number;
  minTerm: number;
  maxTerm: number;
  defaultRate: number;
  loanTypes: string[];
  ltv: number;
}

interface FixAndFlipLoanDefaults extends BaseLoanDefaults {
  hasRehabBudget: boolean;
  minRehabBudget: number;
  maxRehabBudget: number;
  stepRehabBudget: number;
  defaultRehabBudget: number;
}

interface ConstructionLoanDefaults extends BaseLoanDefaults {
  hasConstructionBudget: boolean;
  minConstructionBudget: number;
  maxConstructionBudget: number;
  stepConstructionBudget: number;
  defaultConstructionBudget: number;
}

interface DSCRLoanDefaults extends BaseLoanDefaults {
  defaultLoanAmount: number;
  defaultLoanTerm: number;
  defaultInterestRate: number;
  defaultLoanType: string;
  validTerms: number[];
}

interface LoanDefaultsMap {
  "FIX AND FLIP": FixAndFlipLoanDefaults;
  "GROUND UP CONSTRUCTION": ConstructionLoanDefaults;
  "INVESTOR LOANS BRIDGE": BaseLoanDefaults;
  "DSCR": DSCRLoanDefaults;
}

const LoanCalculator = ({ productType }: { productType: string }) => {
  const loanDefaults: LoanDefaultsMap = {
    "FIX AND FLIP": {
      minAmount: 10000,
      maxAmount: 10000000,
      minTerm: 12,
      maxTerm: 360,
      defaultRate: 7.5,
      loanTypes: ["interestOnly"],
      hasRehabBudget: true,
      minRehabBudget: 0,
      maxRehabBudget: 1000000,
      stepRehabBudget: 1000,
      defaultRehabBudget: 50000,
      ltv: 80,
    },
    "GROUND UP CONSTRUCTION": {
      minAmount: 10000,
      maxAmount: 10000000,
      minTerm: 12,
      maxTerm: 360,
      defaultRate: 7.5,
      loanTypes: ["interestOnly", "amortized"],
      hasConstructionBudget: true,
      minConstructionBudget: 0,
      maxConstructionBudget: 2000000,
      stepConstructionBudget: 1000,
      defaultConstructionBudget: 200000,
      ltv: 90,
    },
    "INVESTOR LOANS BRIDGE": {
      minAmount: 10000,
      maxAmount: 10000000,
      minTerm: 12,
      maxTerm: 360,
      defaultRate: 7.5,
      loanTypes: ["interestOnly"],
      ltv: 80,
    },
    "DSCR": {
      minAmount: 10000,
      maxAmount: 10000000,
      minTerm: 120,
      maxTerm: 360,
      defaultRate: 7.5,
      loanTypes: ["interestOnly", "amortized"],
      defaultLoanAmount: 100000,
      defaultLoanTerm: 120,
      defaultInterestRate: 7.5,
      defaultLoanType: "interestOnly",
      validTerms: [120, 360],
      ltv: 80,
    },
  };

  const currentDefaults = loanDefaults[productType as keyof typeof loanDefaults] || loanDefaults["GROUND UP CONSTRUCTION"];
  
  const defaultLoanAmount = productType === "DSCR" && 'defaultLoanAmount' in currentDefaults 
    ? (currentDefaults as DSCRLoanDefaults).defaultLoanAmount 
    : 100000;
  
  const defaultLoanTerm = productType === "DSCR" && 'defaultLoanTerm' in currentDefaults 
    ? (currentDefaults as DSCRLoanDefaults).defaultLoanTerm 
    : 36;
  
  const defaultInterestRate = 7.5;
  const defaultLoanType = "interestOnly";
  
  const defaultRehabBudget = 'defaultRehabBudget' in currentDefaults 
    ? (currentDefaults as FixAndFlipLoanDefaults).defaultRehabBudget 
    : 0;
  
  const defaultConstructionBudget = 'defaultConstructionBudget' in currentDefaults 
    ? (currentDefaults as ConstructionLoanDefaults).defaultConstructionBudget 
    : 0;

  const form = useForm({
    defaultValues: {
      loanAmount: defaultLoanAmount,
      loanTerm: defaultLoanTerm,
      interestRate: defaultInterestRate,
      loanType: defaultLoanType,
      rehabBudget: defaultRehabBudget,
      constructionBudget: defaultConstructionBudget,
    },
  });

  const validateInputs = () => {
    const interestRate = form.getValues("interestRate");
    const loanTerm = form.getValues("loanTerm");
    
    if (interestRate < 7.5) {
      form.setValue("interestRate", 7.5);
      toast.error("Interest rate cannot be less than 7.5%");
    }
    
    if (productType === "DSCR") {
      const validTerms = (currentDefaults as DSCRLoanDefaults).validTerms;
      if (!validTerms.includes(loanTerm)) {
        const closestTerm = validTerms.reduce((prev, curr) => 
          Math.abs(curr - loanTerm) < Math.abs(prev - loanTerm) ? curr : prev
        );
        form.setValue("loanTerm", closestTerm);
        toast.info(`DSCR loans only support ${validTerms.join(" or ")} month terms`);
      }
    }
  };

  const resetForm = () => {
    form.reset({
      loanAmount: defaultLoanAmount,
      loanTerm: defaultLoanTerm,
      interestRate: defaultInterestRate,
      loanType: defaultLoanType,
      rehabBudget: defaultRehabBudget,
      constructionBudget: defaultConstructionBudget,
    });
    toast.success("Calculator reset to default values");
  };

  const calculateAmortization = (loanAmount: number, annualRate: number, termMonths: number) => {
    const monthlyRate = annualRate / 100 / 12;
    
    const monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, termMonths) / 
                          (Math.pow(1 + monthlyRate, termMonths) - 1);
    
    let remainingBalance = loanAmount;
    for (let i = 0; i < termMonths; i++) {
      const interestPayment = remainingBalance * monthlyRate;
      const principalPayment = monthlyPayment - interestPayment;
      remainingBalance -= principalPayment;
    }
    
    return {
      monthlyPayment,
      remainingBalance: Math.max(0, remainingBalance)
    };
  };

  const calculatePayment = () => {
    const baseLoanAmount = form.watch("loanAmount");
    const loanTerm = form.watch("loanTerm");
    const interestRate = form.watch("interestRate");
    const loanType = form.watch("loanType");
    const rehabBudget = form.watch("rehabBudget") || 0;
    const constructionBudget = form.watch("constructionBudget") || 0;
    
    const totalLoanAmount = baseLoanAmount + 
      (productType === "FIX AND FLIP" ? rehabBudget : 0) + 
      (productType === "GROUND UP CONSTRUCTION" ? constructionBudget : 0);
    
    const monthlyRate = interestRate / 100 / 12;
    
    if (loanType === "interestOnly") {
      return totalLoanAmount * monthlyRate;
    } else if (loanType === "amortized") {
      const amortization = calculateAmortization(totalLoanAmount, interestRate, loanTerm);
      return amortization.monthlyPayment;
    } else if (loanType === "construction") {
      return (totalLoanAmount / 2) * monthlyRate;
    }
    
    return 0;
  };

  const monthlyPayment = calculatePayment();
  const totalPayment = form.watch("loanTerm") * monthlyPayment;
  
  const rehabBudget = form.watch("rehabBudget") || 0;
  const constructionBudget = form.watch("constructionBudget") || 0;
  const totalLoanAmount = form.watch("loanAmount") + (productType === "FIX AND FLIP" ? rehabBudget : 0) + 
    (productType === "GROUND UP CONSTRUCTION" ? constructionBudget : 0);
  
  const ltv = currentDefaults.ltv;
  
  const balloonAmount = form.watch("loanType") === "amortized" 
    ? calculateAmortization(totalLoanAmount, form.watch("interestRate"), form.watch("loanTerm")).remainingBalance
    : totalLoanAmount;

  return (
    <Card className="shadow-lg border border-gray-100">
      <CardHeader className="bg-heritage-50 rounded-t-xl">
        <CardTitle className="text-3xl font-bold text-heritage-600">Loan Calculator</CardTitle>
        <CardDescription className="text-gray-700">
          Estimate your {productType.toLowerCase()} loan payments based on your specific requirements.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-6 space-y-6">
        <Form {...form}>
          <div className="space-y-6">
            <div className="flex justify-end">
              <Button 
                variant="outline" 
                size="sm" 
                onClick={resetForm}
                className="flex items-center gap-1"
              >
                <RefreshCw className="h-4 w-4" />
                Reset
              </Button>
            </div>
            
            <FormField
              control={form.control}
              name="loanAmount"
              render={({ field }) => (
                <FormItem>
                  <div className="flex justify-between">
                    <FormLabel className="flex items-center gap-1">
                      Base Loan Amount: ${field.value.toLocaleString()}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-56">The principal amount you wish to borrow ($10,000 - $10,000,000).</p>
                        </TooltipContent>
                      </Tooltip>
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Slider
                      min={currentDefaults.minAmount}
                      max={currentDefaults.maxAmount}
                      step={1000}
                      value={[field.value]}
                      onValueChange={(vals) => {
                        field.onChange(vals[0]);
                        validateInputs();
                      }}
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
                    <FormLabel className="flex items-center gap-1">
                      Loan Term: {field.value} {field.value === 1 ? 'month' : 'months'}
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-56">
                            {productType === "DSCR" 
                              ? "DSCR loans only support 120 or 360 month terms." 
                              : "The period over which the loan is to be repaid (12-360 months)."}
                          </p>
                        </TooltipContent>
                      </Tooltip>
                    </FormLabel>
                  </div>
                  <FormControl>
                    {productType === "DSCR" ? (
                      <Select
                        value={String(field.value)}
                        onValueChange={(value) => {
                          field.onChange(Number(value));
                        }}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select loan term" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="120">120 months (10 years)</SelectItem>
                          <SelectItem value="360">360 months (30 years)</SelectItem>
                        </SelectContent>
                      </Select>
                    ) : (
                      <Slider
                        min={currentDefaults.minTerm}
                        max={currentDefaults.maxTerm}
                        step={1}
                        value={[field.value]}
                        onValueChange={(vals) => {
                          field.onChange(vals[0]);
                          validateInputs();
                        }}
                        className="mt-2"
                      />
                    )}
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
                    <FormLabel className="flex items-center gap-1">
                      Interest Rate: {field.value}%
                      <Tooltip>
                        <TooltipTrigger asChild>
                          <HelpCircle className="h-4 w-4 text-gray-400" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p className="w-56">Annual interest rate applied to the loan (minimum 7.5%).</p>
                        </TooltipContent>
                      </Tooltip>
                    </FormLabel>
                  </div>
                  <FormControl>
                    <Slider
                      min={7.5}
                      max={15}
                      step={0.1}
                      value={[field.value]}
                      onValueChange={(vals) => {
                        field.onChange(vals[0]);
                        validateInputs();
                      }}
                      className="mt-2"
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            {productType === "FIX AND FLIP" && (
              <FormField
                control={form.control}
                name="rehabBudget"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="flex items-center gap-1">
                        Rehab Budget: ${field.value.toLocaleString()}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">Estimated budget for renovation costs.</p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Slider
                        min={0}
                        max={1000000}
                        step={1000}
                        value={[field.value]}
                        onValueChange={(vals) => field.onChange(vals[0])}
                        className="mt-2"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}

            {productType === "GROUND UP CONSTRUCTION" && (
              <FormField
                control={form.control}
                name="constructionBudget"
                render={({ field }) => (
                  <FormItem>
                    <div className="flex justify-between">
                      <FormLabel className="flex items-center gap-1">
                        Construction Budget: ${field.value.toLocaleString()}
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <HelpCircle className="h-4 w-4 text-gray-400" />
                          </TooltipTrigger>
                          <TooltipContent>
                            <p className="w-56">Estimated budget for construction costs.</p>
                          </TooltipContent>
                        </Tooltip>
                      </FormLabel>
                    </div>
                    <FormControl>
                      <Slider
                        min={0}
                        max={2000000}
                        step={1000}
                        value={[field.value]}
                        onValueChange={(vals) => field.onChange(vals[0])}
                        className="mt-2"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            )}

            <FormField
              control={form.control}
              name="loanType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="flex items-center gap-1">
                    Amortization Type
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <HelpCircle className="h-4 w-4 text-gray-400" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p className="w-56">
                          Interest Only: Pay only interest during the loan term.<br/>
                          {currentDefaults.loanTypes.includes("amortized") && "Amortized: Pay principal and interest based on a 30-year schedule."}
                          {currentDefaults.loanTypes.includes("construction") && "Construction: Interest-only payments on funds drawn during construction."}
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </FormLabel>
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
                        <SelectItem value="amortized">Amortized (30-year)</SelectItem>
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
      </CardContent>
      
      <div className="p-6 bg-gray-50 rounded-b-xl">
        <h3 className="text-xl font-bold mb-4 text-heritage-600">Payment Summary</h3>
        <div className="grid grid-cols-2 gap-6">
          <div>
            <p className="text-gray-600 mb-1">Monthly Payment</p>
            <p className="text-2xl font-bold">${Math.round(monthlyPayment).toLocaleString()}</p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Total Loan Amount</p>
            <p className="text-2xl font-bold">${Math.round(totalLoanAmount).toLocaleString()}</p>
            <p className="text-xs text-gray-500 mt-1">
              {productType === "FIX AND FLIP" && rehabBudget > 0 ? 
                `Base: $${form.watch("loanAmount").toLocaleString()} + Rehab: $${rehabBudget.toLocaleString()}` : 
                productType === "GROUND UP CONSTRUCTION" && constructionBudget > 0 ? 
                `Base: $${form.watch("loanAmount").toLocaleString()} + Construction: $${constructionBudget.toLocaleString()}` : 
                "Base loan amount only"}
            </p>
          </div>
          <div>
            <p className="text-gray-600 mb-1">Loan to Value</p>
            <p className="text-2xl font-bold">{ltv}%</p>
          </div>
          {balloonAmount !== null && (
            <div className="col-span-2">
              <p className="text-gray-600 mb-1 flex items-center gap-1">
                Balloon Amount
                <Tooltip>
                  <TooltipTrigger asChild>
                    <HelpCircle className="h-4 w-4 text-gray-400" />
                  </TooltipTrigger>
                  <TooltipContent>
                    <p className="w-56">The remaining principal balance due at the end of the loan term.</p>
                  </TooltipContent>
                </Tooltip>
              </p>
              <p className="text-2xl font-bold">${Math.round(balloonAmount).toLocaleString()}</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

const LoanProducts = () => {
  const [activeProduct, setActiveProduct] = useState(1); // Default to Ground Up Construction
  const [expandedProduct, setExpandedProduct] = useState<number | null>(null);
  
  const products = [
    {
      icon: <Home size={24} />,
      title: "FIX AND FLIP",
      description: "Perfect for investors looking to renovate and sell properties for profit.",
      longDescription: "Our Fix and Flip loans are designed for real estate investors who purchase properties to renovate and resell them quickly for profit. These short-term loans typically range from 6-24 months and offer competitive rates with up to 80% LTV and 100% of rehab costs. Our streamlined process ensures quick closings, allowing you to move fast on opportunities. Interest-only payments during the renovation period help maximize your cash flow.",
      documentRequirements: [
        "Property purchase agreement",
        "Proof of funds or pre-approval letter",
        "Detailed renovation budget and timeline",
        "Contractor bids and agreements",
        "Proof of insurance",
        "Personal and business tax returns (last 2 years)",
        "Recent bank statements (last 3 months)",
        "Property comparables for after-repair value",
        "Exit strategy documentation"
      ]
    },
    {
      icon: <Building size={24} />,
      title: "GROUND UP CONSTRUCTION",
      description: "Finance new construction projects with flexible terms and competitive rates.",
      longDescription: "Ground Up Construction loans provide financing for new construction projects from the ground up. These loans cover land acquisition, development, and building construction costs. We offer flexible draw schedules aligned with construction milestones, with terms typically ranging from 12-36 months. Our construction loans feature interest-only payments during the building phase on funds drawn and can transition to permanent financing if needed. We understand construction timelines and provide the flexibility needed for successful project completion.",
      documentRequirements: [
        "Architectural plans and specifications",
        "Construction budget and timeline",
        "Builder/contractor license and insurance",
        "Land ownership documentation",
        "Building permits and zoning approvals",
        "Environmental assessments",
        "Project feasibility study",
        "Personal and business financial statements",
        "Construction contract",
        "Builder's risk insurance policy"
      ]
    },
    {
      icon: <Briefcase size={24} />,
      title: "INVESTOR LOANS BRIDGE",
      description: "Short-term financing to bridge the gap between property purchases.",
      longDescription: "Bridge loans provide short-term financing to 'bridge the gap' between transactions, such as purchasing a new property before selling an existing one. These loans typically range from 6-24 months with competitive rates and quick closings (as fast as 10 days). They're ideal for time-sensitive opportunities, auction purchases, or securing properties while arranging long-term financing. Our bridge loans offer flexible exit strategies and minimal documentation requirements compared to traditional loans.",
      documentRequirements: [
        "Purchase agreement for new property",
        "Current property ownership documentation",
        "Proof of equity in existing property",
        "Exit strategy documentation",
        "Personal and business financial statements",
        "Credit report",
        "Property appraisal",
        "Proof of insurance",
        "Bank statements (last 3 months)"
      ]
    },
    {
      icon: <LineChart size={24} />,
      title: "DSCR",
      description: "Debt Service Coverage Ratio loans for investment property acquisitions.",
      longDescription: "DSCR (Debt Service Coverage Ratio) loans are based on the property's income rather than the borrower's personal income. This makes them ideal for real estate investors with multiple properties or self-employed individuals. These loans qualify based on whether the property's income covers debt payments. We offer DSCR loans with competitive rates, longer terms (10 or 30 years), no personal income verification, and availability for both individual investors and LLCs. They're perfect for building a portfolio of cash-flowing rental properties.",
      documentRequirements: [
        "Property rent roll and lease agreements",
        "Property expense documentation",
        "Purchase agreement",
        "Entity documentation (if applying as LLC/corporation)",
        "Property insurance proof",
        "Bank statements (last 2 months)",
        "Property management agreement (if applicable)",
        "Property appraisal",
        "Property tax statements"
      ]
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
            <div className="space-y-3 max-w-lg">
              {products.map((product, index) => (
                <LoanProduct
                  key={index}
                  icon={product.icon}
                  title={product.title}
                  description={product.description}
                  longDescription={product.longDescription}
                  documentRequirements={product.documentRequirements}
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
