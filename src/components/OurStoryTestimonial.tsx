
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useState } from 'react';

const testimonials = [
  {
    id: 1,
    quote: "Red Sun Capital closed one of my multifamily investments after it fell through with two other lenders, and they've been helping me ever since. They understand the market and are willing to provide solutions that make a real difference.",
    author: "John D., Real Estate Investor"
  },
  {
    id: 2,
    quote: "Working with Red Sun Capital has transformed my investment strategy. Their team is responsive, knowledgeable, and always ready to find solutions to complex financing challenges.",
    author: "Sarah M., Property Developer"
  },
  {
    id: 3,
    quote: "After being turned down by multiple banks, Red Sun Capital was able to fund my commercial project quickly and with terms that worked for my business plan. I couldn't be happier with their service.",
    author: "Michael R., Commercial Investor"
  }
];

const OurStoryTestimonial = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  
  const previousTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };
  
  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };
  
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-heritage-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="relative max-w-4xl mx-auto">
          <button 
            onClick={previousTestimonial} 
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-heritage-50"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} className="text-heritage-600" />
          </button>
          
          <div className="text-center px-10 md:px-16">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-6">
              "{testimonials[currentTestimonial].quote}"
            </blockquote>
            <cite className="text-heritage-600 font-semibold not-italic">
              {testimonials[currentTestimonial].author}
            </cite>
          </div>
          
          <button 
            onClick={nextTestimonial} 
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 bg-white p-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300 hover:bg-heritage-50"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} className="text-heritage-600" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurStoryTestimonial;
