
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { Mail } from 'lucide-react';

const EmailForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      toast.error('Please enter a valid email address');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      toast.success('Thank you for joining our waiting list!');
      
      // Reset form after successful submission
      setEmail('');
      
      // Reset the submitted state after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto animate-fade-in animation-delay-300">
      <div className="relative flex items-center glassmorphism rounded-xl p-1 border border-white/10 transition-all duration-300">
        <Mail className="w-5 h-5 text-muted-foreground ml-2" />
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border-0 bg-transparent shadow-none focus-visible:ring-0 outline-none text-white w-full pl-2"
          disabled={isLoading || isSubmitted}
          style={{ WebkitAppearance: 'none', appearance: 'none' }}
        />
        <Button 
          type="submit" 
          className={`relative overflow-hidden rounded-lg transition-all ${isSubmitted ? 'bg-green-600 hover:bg-green-600' : 'bg-visua-accent hover:bg-visua-accent/90'}`}
          disabled={isLoading || isSubmitted}
        >
          {isLoading ? (
            <div className="h-5 w-5 border-t-2 border-white rounded-full animate-spin" />
          ) : isSubmitted ? (
            'Joined!'
          ) : (
            'Join Waitlist'
          )}
          
          {/* Animated background effect */}
          <div className="absolute inset-0 -z-10 bg-gradient-to-r from-visua-accent via-purple-500 to-visua-accent bg-[length:200%_100%] animate-gradient-shift opacity-80" />
        </Button>
      </div>
    </form>
  );
};

export default EmailForm;
