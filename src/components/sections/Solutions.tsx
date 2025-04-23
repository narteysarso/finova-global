import React from 'react';
import { content } from '../../constants/content';
import Card from '../ui/Card';
import { Wallet, Building2, Building, Network } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Solutions: React.FC = () => {
  const { solutions } = content;
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Wallet':
        return <Wallet className="w-10 h-10 text-primary-500" />;
      case 'Building2':
        return <Building2 className="w-10 h-10 text-primary-500" />;
      case 'Building':
        return <Building className="w-10 h-10 text-primary-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="solutions" className="section bg-white" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            className={`section-title transition-all duration-700 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {solutions.title}
          </h2>
          <p 
            className={`section-subtitle mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            Tailored digital solutions for every stage of your business journey
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {solutions.categories.map((category, index) => (
            <Card 
              key={index}
              className={`h-full transition-all duration-700 ${
                isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="mb-6">{getIcon(category.icon)}</div>
              <h3 className="text-xl font-bold mb-4 text-secondary-600">{category.title}</h3>
              <ul className="space-y-3 text-neutral-700">
                {category.items.map((item, i) => (
                  <li key={i} className="flex items-start">
                    <span className="text-accent-500 mr-2">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;