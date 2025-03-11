
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface StatProps {
  value: number;
  label: string;
  duration?: number;
  prefix?: string;
  suffix?: string;
}

const StatCounter = ({ value, label, duration = 2000, prefix = '', suffix = '' }: StatProps) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);
  const countRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const step = Math.ceil(value / 50);
    const increment = 1000 / 60;
    const targetTime = Math.min(duration, 2000);
    
    const timer = setInterval(() => {
      start += step;
      if (start > value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, increment);

    return () => clearInterval(timer);
  }, [value, duration, inView]);

  return (
    <div ref={countRef} className="text-center p-8 transition-all duration-500">
      <div className="text-4xl md:text-5xl font-bold mb-2 text-heritage-600">
        {prefix}{count}{suffix}
      </div>
      <div className="text-gray-600 uppercase tracking-wider text-sm font-medium">{label}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatCounter 
            value={14} 
            label="AVERAGE CLOSING TIMELINE" 
            suffix=" Days"
          />
          <StatCounter 
            value={100} 
            label="FUNDED" 
            prefix="$" 
            suffix="M+"
          />
          <StatCounter 
            value={42} 
            label="STATES CURRENTLY LENDING IN"
          />
        </div>
      </div>
    </section>
  );
};

export default Stats;
