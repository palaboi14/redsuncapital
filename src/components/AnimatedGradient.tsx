
import React from 'react';
import { cn } from '@/lib/utils';

interface AnimatedGradientProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl';
  intensity?: 'light' | 'medium' | 'strong';
  animation?: 'pulse' | 'flow' | 'breathe';
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  className,
  size = 'xl',
  intensity = 'medium',
  animation = 'flow'
}) => {
  const sizeClasses = {
    sm: 'w-48 h-48',
    md: 'w-64 h-64',
    lg: 'w-96 h-96',
    xl: 'w-[32rem] h-[32rem]',
    '2xl': 'w-[48rem] h-[48rem]'
  };

  const intensityClasses = {
    light: 'bg-heritage-500/10',
    medium: 'bg-heritage-500/20',
    strong: 'bg-heritage-500/30'
  };

  const animationClasses = {
    pulse: 'animate-pulse-soft',
    flow: 'animate-gradient-flow',
    breathe: 'animate-breathe'
  };

  return (
    <div
      className={cn(
        'rounded-full blur-[100px] absolute -z-10',
        sizeClasses[size],
        intensityClasses[intensity],
        animationClasses[animation],
        className
      )}
    />
  );
};

export default AnimatedGradient;
