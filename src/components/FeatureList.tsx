
import React from 'react';
import { Camera, User, List } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FeatureItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  className?: string;
}

const FeatureItem: React.FC<FeatureItemProps> = ({ icon, title, description, className }) => {
  return (
    <div className={cn("glassmorphism p-6 rounded-xl flex flex-col gap-4 animate-fade-in", className)}>
      <div className="w-10 h-10 rounded-lg bg-visua-accent/20 flex items-center justify-center text-visua-accent">
        {icon}
      </div>
      <h3 className="text-lg font-medium">{title}</h3>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
};

const FeatureList: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-full max-w-4xl mx-auto mt-12">
      <FeatureItem
        icon={<Camera className="w-5 h-5" />}
        title="Media Showcase"
        description="Share your photos, videos and digital content in a beautiful portfolio."
        className="animation-delay-300"
      />
      <FeatureItem
        icon={<User className="w-5 h-5" />}
        title="Professional Profile"
        description="Showcase your appearance, skills, brands and agency connections."
        className="animation-delay-600"
      />
      <FeatureItem
        icon={<List className="w-5 h-5" />}
        title="Centralized Links"
        description="One simple link to showcase all your professional modeling content."
        className="animation-delay-900"
      />
    </div>
  );
};

export default FeatureList;
