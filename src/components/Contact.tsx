import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import EmbeddedForm from './EmbeddedForm';

const Contact = () => {
  return (
    <section id="contact" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CONNECT WITH US
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To learn more about Red Sun Capital and our lending solutions, please complete the form below. 
            For loan inquiries, click Get Started.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <EmbeddedForm />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="font-bold text-2xl mb-6 text-heritage-600">
                Red Sun Capital
              </h3>
              
              <div className="flex items-start mb-4">
                <Mail className="text-heritage-500 mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium">Email:</p>
                  <a 
                    href="mailto:go@redsuncapital.com" 
                    className="text-gray-600 hover:text-heritage-500 transition-colors"
                  >
                    go@redsuncapital.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <MapPin className="text-heritage-500 mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium">Office:</p>
                  <p className="text-gray-600">
                    91-270 Hanua St Suite 1A, Kapolei, HI 96707
                  </p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <Link
                to="/get-funded"
                className="inline-flex items-center btn-primary text-center justify-center w-full md:w-auto"
              >
                <span>GET FUNDED</span>
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
