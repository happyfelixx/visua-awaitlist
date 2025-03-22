
import React from 'react';
import { cn } from '@/lib/utils';

interface LogoProps {
  className?: string;
}

const Logo: React.FC<LogoProps> = ({ className }) => {
  return (
    <div className={cn('flex items-center', className)}>
      <div className="relative">
        <span className="text-2xl md:text-3xl font-bold tracking-tight">
          <span className="gradient-text">visua</span>
        </span>
        <div className="absolute -top-1 -right-2 w-2 h-2 bg-visua-accent rounded-full animate-pulse-subtle" />
      </div>
    </div>
  );
};

export default Logo;
