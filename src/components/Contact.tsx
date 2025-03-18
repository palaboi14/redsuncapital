
import { useState } from 'react';
import { ArrowRight, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Form submitted successfully",
        description: "We'll get back to you as soon as possible.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
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
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-heritage-500 focus:border-heritage-500 transition-all duration-200"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-heritage-500 focus:border-heritage-500 transition-all duration-200"
                  placeholder="you@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-heritage-500 focus:border-heritage-500 transition-all duration-200"
                  placeholder="(555) 555-5555"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-heritage-500 focus:border-heritage-500 transition-all duration-200"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-heritage-500 hover:bg-heritage-600 text-white py-3 px-6 rounded-lg font-medium transition-all duration-300 flex items-center justify-center"
              >
                {isSubmitting ? (
                  <span>Sending...</span>
                ) : (
                  <>
                    <span>Send Message</span>
                    <ArrowRight className="ml-2" size={18} />
                  </>
                )}
              </button>
            </form>
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
