
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import OurStory from "./pages/OurStory";
import LoanProductsPage from "./pages/LoanProductsPage";
import FAQPage from "./pages/FAQPage";
import ContactPage from "./pages/ContactPage";
import NotFound from "./pages/NotFound";
import PrivacyNotice from "./pages/PrivacyNotice";
import TermsOfService from "./pages/TermsOfService";
import POFPage from "./pages/POFPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/our-story" element={<OurStory />} />
          <Route path="/loan-products" element={<LoanProductsPage />} />
          <Route path="/faqs" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/privacy-notice" element={<PrivacyNotice />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/pof" element={<POFPage />} />
          <Route path="/get-funded" element={
            <main className="pt-20 min-h-screen bg-white">
              <div className="container mx-auto px-4 py-8">
                <iframe
                  src="https://api.leadconnectorhq.com/widget/form/qTav4QsjvlzpIr4u06OK"
                  style={{ width: '100%', minHeight: '90vh', border: 'none', borderRadius: '8px' }}
                  id="inline-qTav4QsjvlzpIr4u06OK"
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="Get My Funding"
                  data-height="100%"
                  data-layout-iframe-id="inline-qTav4QsjvlzpIr4u06OK"
                  data-form-id="qTav4QsjvlzpIr4u06OK"
                  title="Get My Funding"
                />
              </div>
            </main>
          } />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
