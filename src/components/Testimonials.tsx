
import { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role?: string;
}

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const testimonials: Testimonial[] = [
    {
      id: 1,
      quote: "Super fast and efficient! They made the entire loan process quick and smooth—couldn't be happier with their service!",
      author: "K.S.",
      role: "Real Estate Investor"
    },
    {
      id: 2,
      quote: "Heritage Wealth Holdings delivered when other lenders couldn't. Their team understood exactly what our project needed.",
      author: "M.J.",
      role: "Property Developer"
    },
    {
      id: 3,
      quote: "The transparency and expertise from their team made all the difference for our investment strategy. Highly recommended!",
      author: "T.R.",
      role: "Investment Firm"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              Experienced team. <span className="text-heritage-600">Reliable lending partner.</span>
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Leveraging our wealth of experience and commitment to tailored client support, we address the financing requirements of new and seasoned investors alike.
            </p>
          </div>
          
          <div className="relative h-64 mb-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={cn(
                  "absolute inset-0 transition-all duration-1000 ease-in-out",
                  index === activeIndex 
                    ? "opacity-100 translate-x-0 z-10" 
                    : "opacity-0 translate-x-8 -z-10"
                )}
              >
                <div className="bg-white shadow-md rounded-xl p-8 border border-gray-100 h-full flex flex-col justify-center">
                  <p className="text-xl text-gray-700 italic mb-6">"{testimonial.quote}"</p>
                  <div>
                    <span className="font-semibold text-heritage-600">{testimonial.author}</span>
                    {testimonial.role && (
                      <span className="text-gray-500 text-sm ml-2">— {testimonial.role}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === activeIndex 
                    ? "bg-heritage-500 w-6" 
                    : "bg-gray-300 hover:bg-gray-400"
                )}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
