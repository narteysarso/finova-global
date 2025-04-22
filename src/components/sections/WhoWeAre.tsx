import React from 'react';
import { content } from '../../constants/content';
import { useInView } from '../hooks/useInView';

const WhoWeAre: React.FC = () => {
  const { whoWeAre } = content.homepage;
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="who-we-are" className="section bg-neutral-50" ref={ref}>
      <div className="container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 
            className={`section-title mb-6 transition-all duration-700 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {whoWeAre.title}
          </h2>
          <p 
            className={`text-xl font-medium text-primary-600 mb-6 transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {whoWeAre.introduction}
          </p>
          <p 
            className={`text-lg text-neutral-700 transition-all duration-700 delay-300 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {whoWeAre.description}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;