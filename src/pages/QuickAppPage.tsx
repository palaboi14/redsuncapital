
import MainLayout from '@/layouts/MainLayout';

const QuickAppPage = () => {
  return (
    <MainLayout>
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
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
            
            {/* Centered Form */}
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
    </MainLayout>
  );
};

export default QuickAppPage;
