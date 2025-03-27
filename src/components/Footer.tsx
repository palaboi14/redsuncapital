import { Link } from 'react-router-dom';
const Footer = () => {
  return <footer className="bg-gradient-to-b from-heritage-800 to-heritage-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-full md:col-span-1">
            <div className="mb-4 px-[82px]">
              <img alt="Red Sun Capital, LLC" className="h-20" src="/lovable-uploads/853816ae-fa88-43e7-af47-3bf08cd90a75.png" />
            </div>
            <p className="text-gray-300 mb-6 font-thin text-xs text-justify">Red Sun Capital, LLC is a wholly-owned subsidiary of Heritage Wealth Holdings, LLC.</p>
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
                <Link to="/broker-login" className="text-gray-300 hover:text-white transition-colors">
                  Broker Login
                </Link>
              </li>
              <li>
                <Link to="/borrower-login" className="text-gray-300 hover:text-white transition-colors">
                  Borrower Login
                </Link>
              </li>
              <li>
                <Link to="/privacy-notice" className="text-gray-300 hover:text-white transition-colors">
                  Privacy Notice
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4 text-heritage-100">Contact</h3>
            <p className="text-gray-300 mb-2">
              91-270 Hanua St Suite 1A,<br />
              Kapolei, HI 96707
            </p>
            <a href="mailto:go@redsuncapital.com" className="text-gray-300 hover:text-white transition-colors">
              go@redsuncapital.com
            </a>
          </div>
        </div>
        
        <div className="border-t border-heritage-700/50 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © Copyright Red Sun Capital, LLC {new Date().getFullYear()}
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-notice" className="text-gray-400 hover:text-white text-sm transition-colors">
                Privacy Notice
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;