
import { Home, Building, LineChart, Briefcase, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  isActive?: boolean;
  isExpanded?: boolean;
  onClick?: () => void;
  onToggleExpand?: () => void;
  description?: string;
}

const ServiceCard = ({ 
  icon, 
  title, 
  isActive = false,
  isExpanded = false,
  onClick,
  onToggleExpand,
  description
}: ServiceCardProps) => {
  return (
    <div className="space-y-2">
      <div 
        onClick={onClick}
        className={`
          relative overflow-hidden transition-all duration-300 card-hover cursor-pointer
          p-6 rounded-xl shadow-sm 
          ${isActive ? 'bg-white border-l-4 border-heritage-500' : 'bg-white/60 backdrop-blur-sm border border-gray-100'}
        `}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className={`
              p-3 rounded-full 
              ${isActive ? 'bg-heritage-500 text-white' : 'bg-gray-100 text-gray-600'}
            `}>
              {icon}
            </div>
            <h3 className="font-bold text-xl">{title}</h3>
          </div>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleExpand?.();
            }}
            className="text-gray-500 hover:text-gray-700"
          >
            <ChevronDown className={`h-5 w-5 transition-transform duration-200 ${isExpanded ? 'transform rotate-180' : ''}`} />
          </button>
        </div>
      </div>
      
      {isExpanded && description && (
        <div className="p-4 bg-white/80 rounded-lg border border-gray-100">
          <p className="text-gray-700">{description}</p>
        </div>
      )}
    </div>
  );
};

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [expandedService, setExpandedService] = useState<number | null>(null);
  
  const services = [
    {
      icon: <Home size={24} />,
      title: "FIX AND FLIP",
      description: "Our Fix and Flip loans are designed for real estate investors who purchase properties to renovate and resell them quickly for profit. These short-term loans typically range from 6-24 months and offer competitive rates."
    },
    {
      icon: <Building size={24} />,
      title: "GROUND UP CONSTRUCTION",
      description: "Ground Up Construction loans provide financing for new construction projects from the ground up. These loans cover land acquisition, development, and building construction costs with flexible draw schedules."
    },
    {
      icon: <Briefcase size={24} />,
      title: "INVESTOR LOANS BRIDGE",
      description: "Bridge loans provide short-term financing to 'bridge the gap' between transactions, such as purchasing a new property before selling an existing one. These loans typically range from 6-24 months with competitive rates."
    },
    {
      icon: <LineChart size={24} />,
      title: "DSCR",
      description: "DSCR (Debt Service Coverage Ratio) loans are based on the property's income rather than the borrower's personal income. This makes them ideal for real estate investors with multiple properties or self-employed individuals."
    },
  ];

  const toggleExpandService = (index: number) => {
    if (expandedService === index) {
      setExpandedService(null);
    } else {
      setExpandedService(index);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <ServiceCard 
                key={index}
                icon={service.icon} 
                title={service.title}
                description={service.description}
                isActive={activeService === index}
                isExpanded={expandedService === index}
                onClick={() => setActiveService(index)}
                onToggleExpand={() => toggleExpandService(index)}
              />
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Property investment strategies
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Experienced team. Reliable lending partner. Leveraging our wealth of experience and commitment to tailored client support, we address the financing requirements of new and seasoned investors alike.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
