import React, { useEffect, useState } from 'react';
import { content } from '../../constants/content';
import Button from '../ui/Button';

const Hero: React.FC = () => {
  const { hero } = content.homepage;
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Add a small delay for better visual effect
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <section 
      className="relative min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.6)), url(${hero.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="container text-center text-white py-16">
        <h1 
          className={`text-white mb-6 max-w-4xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'
          }`}
        >
          {hero.headline}
        </h1>
        <p 
          className={`text-xl md:text-2xl mb-10 max-w-3xl mx-auto transition-all duration-700 delay-300 ${
            isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'
          }`}
        >
          {hero.subheadline}
        </p>
        <div 
          className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-700 delay-500 ${
            isVisible ? 'opacity-100' : 'opacity-0 transform translate-y-8'
          }`}
        >
          {hero.buttons.map((button, index) => (
            <Button 
              key={index}
              href={button.link}
              variant={button.variant as 'primary' | 'outline' || 'primary'}
              className={button.variant === 'outline' ? 'border-white text-white hover:bg-white/10' : ''}
            >
              {button.text}
            </Button>
          ))}
        </div>
      </div>
      
      <div className="absolute bottom-8 left-0 right-0 flex justify-center animate-bounce">
        <a href="#who-we-are" aria-label="Scroll down">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-8 w-8 text-white"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 9l-7 7-7-7" 
            />
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;