
import { ArrowRight, Target, Users, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const OurStoryContent = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-heritage-600">
                Our Mission
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Red Sun Capital, we are dedicated to empowering real estate investors with the financing solutions they need to succeed. We understand that traditional lending often falls short of meeting the unique needs of real estate investors.
              </p>
              <p className="text-gray-600 leading-relaxed">
                That's why we've created a lending platform that prioritizes speed, flexibility, and transparency, allowing our clients to capitalize on opportunities quickly and efficiently.
              </p>
            </div>
            
            <div className="bg-heritage-50 p-8 rounded-xl">
              <Target className="text-heritage-500 mb-4" size={48} />
              <h3 className="text-xl font-bold mb-4 text-heritage-600">
                Our Vision
              </h3>
              <p className="text-gray-600 leading-relaxed">
                To be the premier private lending partner for real estate investors nationwide, providing innovative financing solutions that drive growth and success in the real estate market.
              </p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-heritage-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-heritage-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-heritage-600">Client-Focused</h3>
              <p className="text-gray-600">
                We put our clients first, understanding their unique needs and providing personalized solutions.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-heritage-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="text-heritage-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-heritage-600">Innovation</h3>
              <p className="text-gray-600">
                We continuously evolve our lending processes and technology to serve our clients better.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-heritage-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="text-heritage-600" size={32} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-heritage-600">Results-Driven</h3>
              <p className="text-gray-600">
                We measure our success by the success of our clients and their real estate investments.
              </p>
            </div>
          </div>
          
          <div className="bg-gray-50 p-8 rounded-xl">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-heritage-600">
              Why Choose Red Sun Capital?
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold mb-3 text-heritage-600">Speed & Efficiency</h3>
                <p className="text-gray-600 mb-4">
                  Our streamlined processes and experienced team enable us to close loans quickly, often in as little as 10 days.
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-heritage-600">Flexible Terms</h3>
                <p className="text-gray-600">
                  We offer customizable loan structures that adapt to your specific project needs and investment strategy.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-bold mb-3 text-heritage-600">Experienced Team</h3>
                <p className="text-gray-600 mb-4">
                  Our team brings decades of combined experience in real estate investing and private lending.
                </p>
                
                <h3 className="text-xl font-bold mb-3 text-heritage-600">Transparent Process</h3>
                <p className="text-gray-600">
                  No hidden fees or surprises. We believe in clear communication and transparent lending practices.
                </p>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/contact" 
              className="inline-flex items-center btn-primary group"
            >
              <span>Get Started Today</span>
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStoryContent;
