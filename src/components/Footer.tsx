import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';
const Footer = () => {
  return <footer className="bg-gradient-to-b from-heritage-800 to-heritage-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-full md:col-span-1">
            <div className="mb-4 px-[82px]">
              <img alt="Red Sun Capital, LLC" className="h-32 brightness-0 invert mb-6" src="/lovable-uploads/853816ae-fa88-43e7-af47-3bf08cd90a75.png" />
              <div className="flex items-center gap-4">
                <img alt="American Association of Private Lenders - Proud Member" className="h-24 w-40" src="/lovable-uploads/6ae7fd49-a292-43cc-bdc1-5a893ef2ad5a.png" />
                <img alt="Equal Housing Opportunity" className="h-24 w-24 brightness-0 invert" src="/lovable-uploads/4106635f-5aaa-4847-84bd-b9e38c82a339.png" />
              </div>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-heritage-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-300 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/loan-products" className="text-gray-300 hover:text-white transition-colors">
                  Loan Products
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-300 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-heritage-100">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://app.redsuncapital.com/login/agent" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Broker Login
                </a>
              </li>
              <li>
                <a href="https://app.redsuncapital.com/login/client" className="text-gray-300 hover:text-white transition-colors" target="_blank" rel="noopener noreferrer">
                  Borrower Login
                </a>
              </li>
              <li>
                <a href="https://redsuncapital.com/privacy-notice" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Notice
                </a>
              </li>
              <li>
                <a href="https://redsuncapital.com/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-heritage-100">Contact</h3>
            <div className="flex items-start mb-4">
              <Phone className="text-heritage-500 mt-1 mr-3" size={16} />
              <a href="tel:+16199276199" className="text-gray-300 hover:text-white transition-colors">
                +1-619-927-6199
              </a>
            </div>
            <div className="flex items-start mb-4">
              <Mail className="text-heritage-500 mt-1 mr-3" size={16} />
              <a href="mailto:info@redsuncapital.com" className="text-gray-300 hover:text-white transition-colors">info@redsuncapital.com</a>
            </div>
            <div className="flex items-start">
              <MapPin className="text-heritage-500 mt-1 mr-3" size={16} />
              <div className="text-gray-300">
                <div>118 Vintage Park Blvd #W317</div>
                <div>Houston, TX 77070</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-heritage-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © Copyright Red Sun Capital, LLC {new Date().getFullYear()}
            </p>
            <p className="text-white text-xs mb-6 md:mb-0 max-w-4xl leading-loose text-justify mx-[31px] px-[6px] my-0 py-0">
              © Red Sun Capital, LLC. 2025 All Rights Reserved. Red Sun Capital, LLC is a private lender and brokerage company. All loans are offered strictly for business or commercial purposes and are not intended for personal, family, or household use. Loan product availability may be limited in certain states and jurisdictions. This is not a commitment to lend. All loans are subject to borrower qualification, due diligence, underwriting, and credit approval at Red Sun Capital's sole and absolute discretion. Rates, terms, and fees are subject to change at any time without notice and may vary by borrower profile, property type, and state regulations.
            </p>
            <div className="flex space-x-6">
              <a href="https://redsuncapital.com/privacy-notice" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Notice
              </a>
              <a href="https://redsuncapital.com/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;