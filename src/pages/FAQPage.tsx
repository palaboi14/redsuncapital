
import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import MainLayout from '@/layouts/MainLayout';
import AnimatedGradient from '@/components/AnimatedGradient';

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
    answer: "It depends on the loan program. Some have no prepayment penalties, while others may require a small fee. This will also depend on your experience and credit."
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
    answer: "Our loan amounts range from $150,000 to $10,000,000, depending on the asset and location."
  },
  {
    question: "What documents do I need to secure funding for a residential transaction?",
    answer: "Typically, we require property details, a purchase agreement, an updated and detailed scope of work for rehab projects, proof of funds, and borrower information."
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
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-heritage-700">Do You Have Additional Questions?</h2>
          <p className="text-gray-600 mb-8">
            We're here to help. Fill out the form below and our team will get back to you as soon as possible.
          </p>
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <iframe
              src="https://api.leadconnectorhq.com/widget/form/iwN5fvztXH1ScqN2mx9h"
              style={{ width: '100%', height: '432px', border: 'none', borderRadius: '3px' }}
              id="inline-iwN5fvztXH1ScqN2mx9h" 
              data-layout="{'id':'INLINE'}"
              data-trigger-type="alwaysShow"
              data-trigger-value=""
              data-activation-type="alwaysActivated"
              data-activation-value=""
              data-deactivation-type="neverDeactivate"
              data-deactivation-value=""
              data-form-name="RSC Do you have a live deal?"
              data-height="432"
              data-layout-iframe-id="inline-iwN5fvztXH1ScqN2mx9h"
              data-form-id="iwN5fvztXH1ScqN2mx9h"
              title="RSC Do you have a live deal?"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQPage = () => {
  return (
    <MainLayout>
      <AnimatedGradient 
        size="2xl" 
        animation="flow" 
        intensity="medium" 
        className="top-0 left-0 -translate-x-1/4 -translate-y-1/4" 
      />
      <FAQHero />
      <FAQAccordion />
      <AdditionalQuestions />
    </MainLayout>
  );
};

export default FAQPage;
