import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import BlurredCircle from './BlurredCircle';
import FundingDialog from './FundingDialog';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden">
      <BlurredCircle size="xl" color="primary" className="-top-64 -left-64" />
      <BlurredCircle size="lg" color="secondary" className="-bottom-64 -right-64" />
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-20">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight md:leading-tight lg:leading-tight mb-8 opacity-0 animate-fade-in">
              We Make<br />
              <span className="text-gradient">Hard Money,</span><br />
              <span className="text-gradient">Easy.</span>
            </h1>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 opacity-0 animate-fade-in-delay-1">
                <h3 className="text-xl font-bold mb-3">Quick, No-Nonsense Process</h3>
                <div className="w-12 h-1 bg-heritage-500 mx-auto mb-3"></div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 opacity-0 animate-fade-in-delay-2">
                <h3 className="text-xl font-bold mb-3">Timely Updates, everything online</h3>
                <div className="w-12 h-1 bg-heritage-500 mx-auto mb-3"></div>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 opacity-0 animate-fade-in-delay-3">
                <h3 className="text-xl font-bold mb-3">Guidance, every step of the way</h3>
                <div className="w-12 h-1 bg-heritage-500 mx-auto mb-3"></div>
              </div>
            </div>
            
            <div className="mt-12 opacity-0 animate-fade-in-delay-3">
              <FundingDialog className="btn-primary inline-flex items-center group" />
            </div>
          </div>
          
          <div className="bg-white/70 backdrop-blur-md p-6 md:p-8 rounded-xl shadow-md border border-gray-100 text-center opacity-0 animate-fade-in-delay-3">
            <p className="text-xl md:text-2xl italic text-gray-700 mb-3">
              "Super fast and efficient! They made the entire loan process quick and smooth—couldn't be happier with their service!"
            </p>
            <p className="text-heritage-600 font-semibold">— K.S.</p>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 mt-16">
        <div className="grid md:grid-cols-2 gap-4 max-w-md mx-auto">
          <a 
            href="https://app.redsuncapital.com/login/agent" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-sm hover:shadow-md border border-gray-200 rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1"
          >
            <span className="font-medium">Broker Login</span>
          </a>
          <a 
            href="https://app.redsuncapital.com/login/client" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white shadow-sm hover:shadow-md border border-gray-200 rounded-lg p-4 text-center transition-all duration-300 hover:-translate-y-1"
          >
            <span className="font-medium">Borrower Login</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
