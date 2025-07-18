import { useEffect } from 'react';
import MainLayout from '@/layouts/MainLayout';

const GetApprovedPage = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);
    
    return () => {
      // Clean up script when component unmounts
      const existingScript = document.querySelector('script[src="https://link.msgsndr.com/js/form_embed.js"]');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <MainLayout>
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left side - Content */}
            <div className="lg:pr-8">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Get <span className="text-gradient">Approved.</span>
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Start your loan application process today.
                </p>
                <p className="text-sm text-gray-500">
                  Fast, secure, and designed for real estate investors.
                </p>
              </div>
              
              {/* Additional information section */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-heritage-600">Why Choose Red Sun Capital?</h3>
                <p className="text-gray-600 mb-4">
                  Our streamlined approval process is designed specifically for real estate investors. We understand your needs and work quickly to get you approved for:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Fix & Flip loans</li>
                  <li>Rental property financing (DSCR)</li>
                  <li>Ground-up construction loans</li>
                  <li>Cash-out refinancing</li>
                </ul>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6 bg-heritage-500">
                  <h2 className="text-2xl font-bold text-white text-center">Loan Application</h2>
                </div>
                <div className="p-6">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/tmYEtGbd3zERl77T0zhM"
                    style={{ width: '100%', height: '568px', border: 'none', borderRadius: '4px' }}
                    id="inline-tmYEtGbd3zERl77T0zhM" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="Get Approved Application"
                    data-height="568"
                    data-layout-iframe-id="inline-tmYEtGbd3zERl77T0zhM"
                    data-form-id="tmYEtGbd3zERl77T0zhM"
                    title="Get Approved Application"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default GetApprovedPage;