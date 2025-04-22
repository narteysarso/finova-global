import React from 'react';
import { content } from '../../constants/content';
import { BarChart4, Target, Award, Lightbulb } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const AboutUs: React.FC = () => {
  const { about } = content;
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  return (
    <section id="about" className="section bg-secondary-50" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            className={`section-title transition-all duration-700 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {about.title}
          </h2>
          <div className="w-20 h-1 bg-accent-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div 
            className={`bg-white rounded-xl p-8 shadow-md transition-all duration-700 ${
              isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-20'
            }`}
          >
            <div className="p-4 bg-primary-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <Target className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-secondary-600">{about.mission.title}</h3>
            <p className="text-neutral-700">{about.mission.text}</p>
          </div>

          <div 
            className={`bg-white rounded-xl p-8 shadow-md transition-all duration-700 ${
              isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-20'
            }`}
          >
            <div className="p-4 bg-accent-500 w-16 h-16 rounded-full flex items-center justify-center mb-6">
              <BarChart4 className="text-white w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold mb-4 text-secondary-600">{about.vision.title}</h3>
            <p className="text-neutral-700">{about.vision.text}</p>
          </div>
        </div>

        <div 
          className={`bg-white rounded-xl p-8 shadow-md max-w-4xl mx-auto transition-all duration-700 delay-300 ${
            isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
          }`}
        >
          <h3 className="text-2xl font-bold mb-6 text-center text-secondary-600">{about.whyChooseUs.title}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {about.whyChooseUs.reasons.map((reason, index) => {
              const icons = [
                <Award key="0" className="text-primary-500 w-5 h-5" />,
                <Lightbulb key="1" className="text-accent-500 w-5 h-5" />,
                <Target key="2" className="text-success-500 w-5 h-5" />,
                <BarChart4 key="3" className="text-warning-500 w-5 h-5" />
              ];
              
              return (
                <div 
                  key={index} 
                  className={`flex items-center gap-3 transition-all duration-700 ${
                    isInView ? 'opacity-100' : 'opacity-0'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  {icons[index]}
                  <p className="font-medium">{reason}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;