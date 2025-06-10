import { Mail, Phone, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import MainLayout from '@/layouts/MainLayout';
import EmbeddedForm from '@/components/EmbeddedForm';

const ContactHero = () => {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Contact Us
          </h1>
          <div className="space-y-4 text-gray-600">
            <p className="text-lg">
              For general questions, please visit our{' '}
              <Link to="/faqs" className="text-heritage-500 hover:text-heritage-600 font-medium underline underline-offset-4">
                FAQs section
              </Link>.
            </p>
            <p className="text-lg">
              For any other general queries, feel free to message our team using the form below.
            </p>
            
            <div className="flex items-center gap-2 text-lg py-1">
              <Phone className="text-heritage-500" size={20} />
              <span>For faster responses, give us a call (or TEXT) at </span>
              <a 
                href="tel:+16199276199" 
                className="text-heritage-500 hover:text-heritage-600 font-medium"
              >
                +1-619-927-6199
              </a>
            </div>
            
            <div className="flex items-center gap-2 text-lg py-1">
              <Mail className="text-heritage-500" size={20} />
              <span>Email us at </span>
              <a 
                href="mailto:go@redsuncapital.com"
                className="text-heritage-500 hover:text-heritage-600 font-medium"
              >
                go@redsuncapital.com
              </a>
            </div>
            
            <div className="flex items-start gap-2 text-lg py-1">
              <MapPin className="text-heritage-500 mt-1" size={20} />
              <div>
                <span>Visit us at </span>
                <div className="font-medium">
                  <div>118 Vintage Park Blvd #W317</div>
                  <div>Houston, TX 77070</div>
                </div>
              </div>
            </div>
            
            <p className="text-lg pt-2">
              For loan scenario inquiries - please fill out the form below.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactForm = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-xl mx-auto bg-white rounded-xl shadow-sm p-8 border border-gray-100">
          <h2 className="text-2xl font-bold mb-6 text-gray-900">
            Send Us a Message
          </h2>
          
          <EmbeddedForm />
          
          <div className="mt-8 text-center text-sm text-gray-500">
            <p>
              By submitting this form, you agree to our{" "}
              <Link to="/privacy-notice" className="text-heritage-500 hover:underline">
                Privacy Policy
              </Link>
              {" "}and{" "}
              <Link to="/terms-of-service" className="text-heritage-500 hover:underline">
                Terms of Service
              </Link>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

const ContactPage = () => {
  return (
    <MainLayout>
      <ContactHero />
      <ContactForm />
    </MainLayout>
  );
};

export default ContactPage;
