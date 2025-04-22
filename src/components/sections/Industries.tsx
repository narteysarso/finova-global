import React from 'react';
import { content } from '../../constants/content';
import { 
  ShoppingCart, Banknote, Truck, Heart, GraduationCap
} from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Industries: React.FC = () => {
  const { industries } = content;
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'ShoppingCart':
        return <ShoppingCart className="w-12 h-12 text-accent-500" />;
      case 'Banknote':
        return <Banknote className="w-12 h-12 text-accent-500" />;
      case 'Truck':
        return <Truck className="w-12 h-12 text-accent-500" />;
      case 'Heart':
        return <Heart className="w-12 h-12 text-accent-500" />;
      case 'GraduationCap':
        return <GraduationCap className="w-12 h-12 text-accent-500" />;
      default:
        return null;
    }
  };

  return (
    <section id="industries" className="section bg-gradient-to-b from-neutral-50 to-white" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            className={`section-title transition-all duration-700 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {industries.title}
          </h2>
          <p 
            className={`section-subtitle mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            Specialized solutions to address unique challenges across various sectors
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industries.industries.map((industry, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 ${
                isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <div className="p-6 flex flex-col items-center text-center">
                <div className="mb-4">
                  {getIcon(industry.icon)}
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary-600">{industry.name}</h3>
                <p className="text-neutral-700">{industry.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;