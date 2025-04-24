
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import LoanProducts from '@/components/LoanProducts';
import { Button } from '@/components/ui/button';
import EmbeddedForm from '@/components/EmbeddedForm';
import AnimatedGradient from '@/components/AnimatedGradient';

const LoanProductsHero = () => {
  return (
    <section className="relative h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')", 
          backgroundPosition: "center 30%",
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Subtle Red Overlay */}
      <div className="absolute inset-0 bg-heritage-500/10 z-1"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Explore Our Loan Product Suite
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl">
            Customized financing solutions designed for real estate investors and developers.
          </p>
          <Link 
            to="/get-funded" 
            className="inline-flex items-center btn-primary group"
          >
            <span>SUBMIT DEAL SCENARIO</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')", 
          filter: "brightness(0.7)"
        }}
      />
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-lg mx-auto bg-white/90 backdrop-blur-sm p-8 md:p-10 rounded-xl shadow-lg animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-heritage-600 text-center">Connect With Us</h2>
          <p className="text-gray-700 mb-8 text-center">
            Have questions about our loan products? We're here to help.
          </p>
          
          {/* Replace the form with the embedded form */}
          <EmbeddedForm />
        </div>
      </div>
    </section>
  );
};

const LoanProductsPage = () => {
  return (
    <MainLayout>
      {/* Add larger, more dynamic gradient in top-left */}
      <AnimatedGradient 
        size="2xl" 
        animation="flow" 
        intensity="medium" 
        className="top-0 left-0 -translate-x-1/4 -translate-y-1/4" 
      />
      <LoanProductsHero />
      <LoanProducts />
      <ContactSection />
    </MainLayout>
  );
};

export default LoanProductsPage;
