
import React, { useEffect, useState } from 'react';
import Logo from '@/components/Logo';
import EmailForm from '@/components/EmailForm';
import FeatureList from '@/components/FeatureList';
import GradientBackground from '@/components/GradientBackground';

const Index: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  // Used to prevent hydration issues with animations
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center px-4 py-16">
      <GradientBackground />
      
      <header className="absolute top-0 w-full max-w-7xl mx-auto py-6 px-4 flex justify-center">
        <Logo />
      </header>
      
      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-6xl mx-auto text-center gap-8 pt-10">
        <div className="space-y-2 animate-fade-in">
          <span className="px-3 py-1 text-xs font-medium bg-visua-accent/10 text-visua-accent rounded-full">
            Coming soon
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-4 max-w-3xl mx-auto text-balance leading-tight">
            The ultimate <span className="gradient-text">link in bio</span> tool for models
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-4 text-balance">
            Showcase your media, appearance, skills, and professional connections in one beautiful, customizable profile.
          </p>
        </div>
        
        <div className="w-full max-w-md mx-auto py-4">
          <EmailForm />
        </div>
        
        <FeatureList />
      </main>
      
      <footer className="absolute bottom-0 w-full max-w-7xl mx-auto py-6 px-4 text-center text-muted-foreground text-sm">
        <p>&copy; {new Date().getFullYear()} Visua. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Index;
