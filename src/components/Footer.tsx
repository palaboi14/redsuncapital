import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-full md:col-span-1">
            <div className="mb-4">
              <div className="relative inline-block">
                <img alt="Red Sun Capital, LLC" className="h-16 brightness-0 invert" src="/lovable-uploads/b6a804fd-2671-42a2-9ba2-cda7da5214e8.png" />
                <div className="absolute top-0 left-0 w-10 h-10 bg-heritage-600 rounded-full" style={{
                mixBlendMode: 'screen'
              }}></div>
              </div>
            </div>
            <p className="text-gray-400 mb-6">
              Providing innovative funding solutions for real estate investors.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-heritage-100">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/our-story" className="text-gray-400 hover:text-white transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link to="/loan-products" className="text-gray-400 hover:text-white transition-colors">
                  Loan Products
                </Link>
              </li>
              <li>
                <Link to="/faqs" className="text-gray-400 hover:text-white transition-colors">
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-heritage-100">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/broker-login" className="text-gray-400 hover:text-white transition-colors">
                  Broker Login
                </Link>
              </li>
              <li>
                <Link to="/borrower-login" className="text-gray-400 hover:text-white transition-colors">
                  Borrower Login
                </Link>
              </li>
              <li>
                <Link to="/privacy-notice" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Notice
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-heritage-100">Contact</h3>
            <p className="text-gray-400 mb-2">
              91-270 Hanua St Suite 1A,<br />
              Kapolei, HI 96707
            </p>
            <a href="mailto:go@redsuncapital.com" className="text-gray-400 hover:text-white transition-colors">
              go@redsuncapital.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © Copyright Red Sun Capital, LLC {new Date().getFullYear()}
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-notice" className="text-gray-500 hover:text-white text-sm transition-colors">
                Privacy Notice
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;