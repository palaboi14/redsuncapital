
import { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasConsent = localStorage.getItem('cookieConsent');
    if (!hasConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const handleManageCookies = () => {
    // In a real implementation, this would open a cookie preferences modal
    localStorage.setItem('cookieConsent', 'managed');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 animate-fade-in">
      <div className="bg-white border-t border-gray-200 shadow-lg px-4 py-4 sm:px-6">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex-1 text-sm text-gray-700">
            Select "Accept all" to agree to our use of cookies and similar technologies to enhance your browsing experience, security, analytics and customization. 
            Select "Manage cookies" to make more choices or opt out.
          </div>
          <div className="flex items-center gap-3">
            <Button 
              onClick={handleManageCookies}
              variant="outline"
              className="text-sm"
            >
              MANAGE COOKIES
            </Button>
            <Button 
              onClick={handleAcceptAll}
              className="bg-heritage-500 hover:bg-heritage-600 text-sm"
            >
              ACCEPT ALL
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
