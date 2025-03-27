
import { useState } from 'react';
import { ArrowRight, ChevronDown } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MainLayout from '@/layouts/MainLayout';

// FAQ data
const faqItems = [
  {
    question: "What is a hard money loan?",
    answer: "A hard money loan is a short-term financing option secured by real estate, often used by real estate investors for quick funding."
  },
  {
    question: "Do I pay any costs upfront?",
    answer: "Some loan programs may require an appraisal or due diligence fee upfront, but other costs are typically included in closing."
  },
  {
    question: "Are there any pre-payment penalties?",
    answer: "It depends on the loan program. Some have no prepayment penalties, while others may require a small fee."
  },
  {
    question: "How long does it take to get a hard money loan?",
    answer: "The approval process is fast, often within 24-48 hours, with funding available in as little as 5-10 business days."
  },
  {
    question: "What types of assets do you lend on?",
    answer: "We lend on residential investment properties, commercial properties, and multi-family properties."
  },
  {
    question: "What is your minimum/maximum loan amount?",
    answer: "Our loan amounts range from $100,000 to $10,000,000, depending on the asset and location."
  },
  {
    question: "What documents do I need to secure funding for a residential transaction?",
    answer: "Typically, we require property details, a purchase agreement, proof of funds, and borrower information."
  },
  {
    question: "What states do you currently lend in?",
    answer: "We operate in multiple states across the U.S. Please contact us for specific state availability."
  },
  {
    question: "What are the advantages of getting a hard money loan?",
    answer: "Hard money loans offer fast funding, flexible approval criteria, and are ideal for real estate investors."
  }
];

const FAQHero = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-heritage-700">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Find answers to common questions about our loan products and services.
          </p>
        </div>
      </div>
    </section>
  );
};

const FAQAccordion = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200">
                <AccordionTrigger className="text-lg font-medium text-gray-900 py-5 hover:text-heritage-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 pb-6">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

const AdditionalQuestions = () => {
  const [dealStatus, setDealStatus] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log({ dealStatus, name, email });
    // Reset form
    setDealStatus('');
    setName('');
    setEmail('');
    // Show success message
    alert('Thank you for your inquiry. We will get back to you soon.');
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6 text-heritage-700">Do You Have Additional Questions?</h2>
          <p className="text-gray-600 mb-8">
            We're here to help. Fill out the form below and our team will get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6 text-left">
            <div className="space-y-2">
              <label htmlFor="dealStatus" className="block text-sm font-medium text-gray-700">
                Do you currently have a live deal?
              </label>
              <select 
                id="dealStatus" 
                value={dealStatus}
                onChange={(e) => setDealStatus(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-heritage-500 focus:border-heritage-500"
                required
              >
                <option value="">Please select</option>
                <option value="yes">Yes, I have a live deal</option>
                <option value="soon">Not yet, but I will soon</option>
                <option value="no">No, just exploring options</option>
              </select>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Your Name
              </label>
              <Input 
                type="text" 
                id="name" 
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="John Doe"
                required
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email Address
              </label>
              <Input 
                type="email" 
                id="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                required
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-heritage-500 hover:bg-heritage-600 text-white"
            >
              Submit Inquiry
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

const FAQPage = () => {
  return (
    <MainLayout>
      <FAQHero />
      <FAQAccordion />
      <AdditionalQuestions />
    </MainLayout>
  );
};

export default FAQPage;
