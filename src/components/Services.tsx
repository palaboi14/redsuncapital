
import { Home, Building, LineChart, Briefcase } from 'lucide-react';

const ServiceCard = ({ icon, title, isActive = false }) => {
  return (
    <div className={`
      relative overflow-hidden transition-all duration-300 card-hover
      p-6 rounded-xl shadow-sm 
      ${isActive ? 'bg-white border-l-4 border-heritage-500' : 'bg-white/60 backdrop-blur-sm border border-gray-100'}
    `}>
      <div className="flex items-center space-x-4">
        <div className={`
          p-3 rounded-full 
          ${isActive ? 'bg-heritage-500 text-white' : 'bg-gray-100 text-gray-600'}
        `}>
          {icon}
        </div>
        <h3 className="font-bold text-xl">{title}</h3>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ServiceCard 
              icon={<Home size={24} />} 
              title="FIX AND FLIP" 
              isActive={true} 
            />
            <ServiceCard 
              icon={<Building size={24} />} 
              title="GROUND UP CONSTRUCTION" 
            />
            <ServiceCard 
              icon={<Briefcase size={24} />} 
              title="INVESTOR LOANS BRIDGE" 
            />
            <ServiceCard 
              icon={<LineChart size={24} />} 
              title="DSCR" 
            />
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
