import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';

// Define the team member type
interface TeamMember {
  id: number;
  name: string;
  title: string;
  image: string;
  bio: string;
  experience: string;
  deals: string;
  expertise: string[];
  linkedin?: string;
}

// Sample team data - updated bios
const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: 'Aidan Wong',
    title: 'Managing Partner',
    image: '/lovable-uploads/c73ac345-fb90-40f8-8ccd-21523ddaca14.png',
    bio: 'Aidan Wong started as a real estate investor before moving into hard money lending in 2020. With over $250M funded, he\'s known for structuring complex deals and understanding investor goals. A former Marine, Aidan brings discipline and leadership to both financing and building Red Sun Capital.',
    experience: '15+ Years',
    deals: '$350M+ Closed',
    expertise: ['Fix & Flip', 'DSCR', 'Construction', 'Portfolio Loans'],
    linkedin: 'https://linkedin.com',
  },
  {
    id: 2,
    name: 'Adrian Posoz',
    title: 'Senior Loan Advisor',
    image: '/placeholder.svg',
    bio: 'Adrian Posoz previously led loan originations at a national hard money firm, where he built a reputation for high-volume deal execution and team leadership. A current home builder, himself, he brings investor insight and underwriting expertise to Red Sun Capital, helping clients scale with speed and confidence.',
    experience: '12+ Years',
    deals: '$275M+ Closed',
    expertise: ['Multi-Family', 'Mixed-Use', 'Office', 'Retail'],
    linkedin: 'https://linkedin.com',
  },
];

// Circle data point component
const CircleDataPoint = ({ 
  label, 
  value, 
  position 
}: { 
  label: string; 
  value: string | string[]; 
  position: 'top-left' | 'middle-left' | 'bottom-left' 
}) => {
  const positionClasses = {
    'top-left': 'top-0 -translate-y-1/4 -left-12',
    'middle-left': 'top-1/2 -translate-y-1/2 -left-12',
    'bottom-left': 'bottom-0 translate-y-1/4 -left-12',
  };

  return (
    <div className={`absolute ${positionClasses[position]} transition-all duration-300`}>
      <div className="w-24 h-24 bg-blue-500 text-white rounded-full flex flex-col items-center justify-center text-center shadow-md hover:shadow-lg transition-all duration-300 hover:bg-blue-600 hover:scale-110 cursor-pointer">
        <div className="font-bold text-sm">{label}</div>
        {typeof value === 'string' ? (
          <div className="text-xs">{value}</div>
        ) : (
          <div className="text-[9px] px-1">
            {value.join(' | ')}
          </div>
        )}
      </div>
    </div>
  );
};

const TeamSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentMember = teamMembers[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? teamMembers.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === teamMembers.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white" id="team">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            THE FOUNDERS
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Meet the dedicated professionals behind Red Sun Capital's success. Our experienced team is committed to providing exceptional service and innovative financing solutions.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            {/* Left side - Profile image and data points */}
            <div className="relative flex justify-center">
              {/* Main profile circle */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-heritage-100 shadow-lg transition-all duration-300 hover:shadow-xl">
                <Avatar className="w-full h-full">
                  <AvatarImage src={currentMember.image} alt={currentMember.name} className="object-cover" />
                  <AvatarFallback className="text-4xl bg-heritage-100 text-heritage-500">
                    {currentMember.name.split(' ').map(n => n[0]).join('')}
                  </AvatarFallback>
                </Avatar>
                
                {/* Hover overlay - blue tint like in reference image */}
                <div className="absolute inset-0 bg-blue-500/40 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Data points - all on the left side of the main circle */}
              <CircleDataPoint label="Experience" value={currentMember.experience} position="top-left" />
              <CircleDataPoint label="Total Deals" value={currentMember.deals} position="middle-left" />
              <CircleDataPoint label="Expertise" value={currentMember.expertise} position="bottom-left" />

              {/* Name and title - updated with smaller margin (20px) */}
              <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 text-center w-full">
                <h3 className="text-2xl font-bold text-gray-900">{currentMember.name}</h3>
                <p className="text-heritage-600">{currentMember.title}</p>
              </div>
            </div>

            {/* Right side - Bio */}
            <div className="mt-20 md:mt-0 animate-fade-in">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h4 className="text-xl font-semibold mb-4">About {currentMember.name.split(' ')[0]}</h4>
                <p className="text-gray-700 leading-relaxed mb-6">{currentMember.bio}</p>
                
                <Separator className="my-4" />
                
                {currentMember.linkedin && (
                  <div className="flex justify-end">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="gap-2 text-blue-500 border-blue-200 hover:bg-blue-50"
                      onClick={() => window.open(currentMember.linkedin, '_blank')}
                    >
                      <Linkedin size={16} />
                      Connect on LinkedIn
                    </Button>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center items-center mt-24 space-x-10">
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full border border-gray-200 hover:bg-blue-50 hover:text-blue-500"
              onClick={handlePrev}
            >
              <ChevronLeft size={24} />
              <span className="sr-only">Previous team member</span>
            </Button>
            
            <div className="text-sm text-gray-500">
              {currentIndex + 1} of {teamMembers.length}
            </div>
            
            <Button 
              variant="ghost" 
              size="icon" 
              className="h-12 w-12 rounded-full border border-gray-200 hover:bg-blue-50 hover:text-blue-500"
              onClick={handleNext}
            >
              <ChevronRight size={24} />
              <span className="sr-only">Next team member</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
