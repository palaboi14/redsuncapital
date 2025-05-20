import { Mail, MapPin, Phone } from 'lucide-react';
import EmbeddedForm from './EmbeddedForm';
const Contact = () => {
  return <section id="contact" className="py-20 relative overflow-hidden bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            CONNECT WITH US
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            To learn more about Red Sun Capital and our lending solutions, please complete the form below. 
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <EmbeddedForm formId="9m5t5VyR2hZDwq0NUnya" />
          </div>
          
          <div className="flex flex-col justify-center">
            <div className="mb-8">
              <h3 className="font-bold text-2xl mb-6 text-heritage-600">
                Red Sun Capital
              </h3>
              
              <div className="flex items-start mb-4">
                <Phone className="text-heritage-500 mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium">Phone:</p>
                  <a href="tel:+16199276199" className="text-gray-600 hover:text-heritage-500 transition-colors">
                    +1-619-927-6199
                  </a>
                </div>
              </div>
              
              <div className="flex items-start mb-4">
                <Mail className="text-heritage-500 mt-1 mr-3" size={20} />
                <div>
                  <p className="font-medium">Email:</p>
                  <a href="mailto:go@redsuncapital.com" className="text-gray-600 hover:text-heritage-500 transition-colors">
                    go@redsuncapital.com
                  </a>
                </div>
              </div>
              
              
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Contact;