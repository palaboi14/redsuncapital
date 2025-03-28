import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
const OurStoryHero = () => {
  return <section className="relative h-[500px] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0" style={{
      backgroundImage: "url('https://images.unsplash.com/photo-1452378174528-3090a4bba7b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')",
      backgroundPosition: "center 30%",
      filter: "brightness(0.7)"
    }} />
      
      {/* Subtle Red Overlay */}
      <div className="absolute inset-0 bg-heritage-500/10 z-1"></div>
      
      {/* Content */}
      <div className="container mx-auto px-4 md:px-6 relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 py-[9px] lg:text-6xl my-[25px]">
            We've been at this for a while.<br />
            And make loans happen.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100 max-w-2xl">
            Serving real estate investors nationwide, Red Sun Capital sets itself apart 
            with excellent relationship-driven service.
          </p>
          <Link to="/get-funded" className="inline-flex items-center btn-primary group">
            <span>GET FUNDED</span>
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
          </Link>
        </div>
      </div>
    </section>;
};
export default OurStoryHero;