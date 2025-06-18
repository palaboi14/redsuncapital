
import MainLayout from '@/layouts/MainLayout';
import LoanPreQualificationTool from '@/components/LoanPreQualificationTool';

const CompassPage = () => {
  return (
    <MainLayout>
      <div className="pt-20 min-h-screen bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-8">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">
                Red Sun Capital <span className="text-gradient">Compass</span>
              </h1>
              <p className="text-lg text-gray-600 mb-2">
                Online Loan Pre-Qualification Tool
              </p>
              <p className="text-sm text-gray-500">
                Get instant pre-qualification for Fix & Flip, Rental/DSCR, Ground-Up, and Refinance loans
              </p>
            </div>
            
            <LoanPreQualificationTool />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CompassPage;
