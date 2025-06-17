
import MainLayout from '@/layouts/MainLayout';

const FullAppPage = () => {
  return (
    <MainLayout>
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-4">
              <h1 className="text-4xl md:text-5xl font-bold mb-2 text-gray-900">
                Full Loan <span className="text-gradient">Application.</span>
              </h1>
              <p className="text-lg text-gray-600 mb-1">
                Complete your comprehensive hard money loan application.
              </p>
              <p className="text-sm text-gray-500">
                Fill out the detailed form below for your loan application.
              </p>
            </div>
            
            {/* Full Page Form */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-4 bg-heritage-500">
                <h2 className="text-2xl font-bold text-white text-center">Full Loan Application</h2>
              </div>
              <div className="p-4">
                <iframe
                  src="https://app.redsuncapital.com/HMLOWebForm.php?bRc=ffa1d31537889496&fOpt=8e614f58c0d670e4&op=69ae9aa7bfc04392"
                  style={{ width: '100%', height: '85vh', border: 'none', borderRadius: '4px' }}
                  title="Full Loan Application Form"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default FullAppPage;
