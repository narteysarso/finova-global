import React from 'react';
import { content } from '../../constants/content';
import Button from '../ui/Button';
import { Shield, CheckCircle2 } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const WhatWeOffer: React.FC = () => {
  const { whatWeOffer } = content.homepage;
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section className="section bg-white" ref={ref}>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 
              className={`section-title mb-8 transition-all duration-700 ${
                isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
              }`}
            >
              {whatWeOffer.title}
            </h2>
            <div className="space-y-6 mb-8">
              {whatWeOffer.services.map((service, index) => (
                <div 
                  key={index} 
                  className={`flex items-start gap-4 transition-all duration-700 ${
                    isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
                  }`}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <CheckCircle2 className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
                  <p className="text-lg text-neutral-700">{service}</p>
                </div>
              ))}
            </div>
            <div 
              className={`flex flex-col sm:flex-row gap-4 transition-all duration-700 delay-700 ${
                isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
              }`}
            >
              {whatWeOffer.buttons.map((button, index) => (
                <Button 
                  key={index}
                  href={button.link}
                  variant={button.variant as 'primary' | 'outline' || 'primary'}
                >
                  {button.text}
                </Button>
              ))}
            </div>
          </div>
          
          <div 
            className={`bg-neutral-50 p-8 rounded-2xl relative transition-all duration-1000 ${
              isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-20'
            }`}
          >
            <div className="absolute -top-8 -left-8 bg-accent-500 p-4 rounded-xl text-white">
              <Shield className="w-12 h-12" />
            </div>
            <h3 className="text-2xl font-bold mb-6 mt-4">Secure & Scalable Technologies</h3>
            <p className="text-neutral-700 mb-6">
              Our solutions are built with security and scalability as core principles, 
              ensuring your business can grow without compromising safety or performance.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-2 text-primary-600">End-to-End Encryption</h4>
                <p className="text-sm text-neutral-600">Protecting your data at every step</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-2 text-primary-600">Cloud Infrastructure</h4>
                <p className="text-sm text-neutral-600">Scale up or down based on demand</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-2 text-primary-600">Regular Updates</h4>
                <p className="text-sm text-neutral-600">Continuous improvement and security patches</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow-sm">
                <h4 className="font-bold text-lg mb-2 text-primary-600">Expert Support</h4>
                <p className="text-sm text-neutral-600">Dedicated team to assist you</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeOffer;