
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const navLinks = [{
    name: 'Home',
    path: '/'
  }, {
    name: 'Our Story',
    path: '/our-story'
  }, {
    name: 'Loan Products',
    path: '/loan-products'
  }, {
    name: 'FAQs',
    path: '/faqs'
  }, {
    name: 'Contact',
    path: '/contact'
  }];

  return <header className={cn("fixed top-0 left-0 right-0 z-40 transition-all duration-300", 
    scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm py-3" : "bg-transparent py-5")}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between my-0 py-0">
          <Link to="/" className="flex items-center">
            <img src="/lovable-uploads/390801ef-25e9-4d8f-95ee-f145ed45a723.png" alt="Red Sun Capital, LLC" className="h-20 md:h-24" />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => <Link key={link.name} to={link.path} className={cn("nav-link", 
              !scrolled && "text-white hover:text-white/80 after:bg-white")}>
                {link.name}
              </Link>)}
            <Link to="/get-funded" className="btn-primary">
              Get My Funding
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button className={cn("md:hidden focus:outline-none", 
            scrolled ? "text-gray-700" : "text-white")} 
            onClick={toggleMenu} aria-label="Toggle menu">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className={cn("fixed inset-0 bg-white z-30 transition-transform duration-300 ease-in-out transform md:hidden pt-20", isMenuOpen ? "translate-x-0" : "translate-x-full")}>
        <div className="absolute top-5 right-5">
          <button className="p-2 text-gray-700 hover:text-heritage-600 focus:outline-none" onClick={toggleMenu} aria-label="Close menu">
            <X size={24} />
          </button>
        </div>
        <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
          {navLinks.map(link => <Link key={link.name} to={link.path} className="text-lg py-2 border-b border-gray-100 font-medium" onClick={() => setIsMenuOpen(false)}>
              {link.name}
            </Link>)}
          <Link to="/get-funded" className="btn-primary text-center mt-4" onClick={() => setIsMenuOpen(false)}>
            Get My Funding
          </Link>
        </nav>
      </div>
    </header>;
};

export default Header;
