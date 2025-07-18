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
                <h3 className="text-xl font-semibold mb-4 text-heritage-600">Why Get Pre-Approved Right Now?</h3>
                <p className="text-lg italic text-gray-700 mb-6">Skip the line, lock the deal.</p>
                
                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Know Your Buying Power</h4>
                    <p className="text-gray-600">See the exact cash-out amount you can command—before you ever tour a property.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Offer Like a Cash Buyer <span className="text-sm text-gray-500">(DSCR Purchase)</span></h4>
                    <p className="text-gray-600">Sellers won't wait on financing. A Red Sun pre-approval letter puts you at the top of the pile.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Close in as fast as 10 business days.</h4>
                    <p className="text-gray-600">Pre-underwriting is already done—documents are ready to sign the moment your offer is accepted.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Negotiate Harder <span className="text-sm text-gray-500">(DSCR Purchase)</span></h4>
                    <p className="text-gray-600">Leverage your pre-approval to shave thousands off the purchase price—sellers love certainty.</p>
                  </div>
                  
                  <div>
                    <h4 className="font-bold text-gray-900 mb-1">Zero Risk to You</h4>
                    <p className="text-gray-600">Soft-credit pull, no upfront fees, and valid for 90 days.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Right side - Form */}
            <div className="lg:pl-8">
              <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="p-6 bg-heritage-500">
                  <h2 className="text-2xl font-bold text-white text-center">Start Your Journey, Here!</h2>
                </div>
                <div className="p-6 min-h-[800px]">
                  <iframe
                    src="https://api.leadconnectorhq.com/widget/form/xfntqJrE5RQqFOk5tFXt"
                    style={{ width: '100%', height: '800px', border: 'none', borderRadius: '4px' }}
                    id="inline-xfntqJrE5RQqFOk5tFXt" 
                    data-layout="{'id':'INLINE'}"
                    data-trigger-type="alwaysShow"
                    data-trigger-value=""
                    data-activation-type="alwaysActivated"
                    data-activation-value=""
                    data-deactivation-type="neverDeactivate"
                    data-deactivation-value=""
                    data-form-name="META - POF - For Adrian Approval"
                    data-height="undefined"
                    data-layout-iframe-id="inline-xfntqJrE5RQqFOk5tFXt"
                    data-form-id="xfntqJrE5RQqFOk5tFXt"
                    title="META - POF - For Adrian Approval"
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