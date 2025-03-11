
import React from 'react';
import { cn } from '@/lib/utils';

interface BlurredCircleProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  color?: 'primary' | 'secondary' | 'accent';
}

const BlurredCircle: React.FC<BlurredCircleProps> = ({ 
  className,
  size = 'md',
  color = 'primary'
}) => {
  const sizeClasses = {
    sm: 'w-32 h-32',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]',
  };

  const colorClasses = {
    primary: 'bg-heritage-500/20',
    secondary: 'bg-heritage-300/20',
    accent: 'bg-heritage-700/20',
  };

  return (
    <div 
      className={cn(
        'rounded-full blur-[100px] absolute -z-10',
        sizeClasses[size],
        colorClasses[color],
        className
      )}
    />
  );
};

export default BlurredCircle;
