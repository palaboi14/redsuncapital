
import MainLayout from '@/layouts/MainLayout';

const QuickAppPage = () => {
  return (
    <MainLayout>
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-7xl mx-auto">
            {/* Left side - Content */}
            <div className="lg:pr-8">
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
                  Quick Loan <span className="text-gradient">Application.</span>
                </h1>
                <p className="text-lg text-gray-600 mb-4">
                  Get started with your hard money loan application in minutes.
                </p>
                <p className="text-sm text-gray-500">
                  Complete the form below and we'll process your application quickly.
                </p>
              </div>
              
              {/* Additional information section */}
              <div className="bg-white/70 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-xl font-semibold mb-4 text-heritage-600">Fast & Secure Application</h3>
                <p className="text-gray-600 mb-4">
                  Our streamlined application process is designed to get you the funding you need quickly. Benefits include:
                </p>
                <ul className="list-disc pl-6 text-gray-600 space-y-2">
                  <li>Quick approval process</li>
                  <li>Competitive rates and terms</li>
                  <li>Experienced lending team</li>
                  <li>Secure data transmission</li>
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
                    src="https://app.redsuncapital.com/HMLOWebForm.php?bRc=ffa1d31537889496&fOpt=8e614f58c0d670e4&op=aa4465703ef4b17e"
                    style={{ width: '100%', height: '600px', border: 'none', borderRadius: '4px' }}
                    title="Quick Loan Application Form"
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

export default QuickAppPage;
