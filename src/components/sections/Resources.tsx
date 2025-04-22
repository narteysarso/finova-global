import React from 'react';
import { content } from '../../constants/content';
import { FileText, BookOpen, Newspaper, ArrowRight } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Resources: React.FC = () => {
  const { resources } = content;
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const getIcon = (type: string) => {
    switch(type) {
      case 'Blog':
        return <FileText className="w-6 h-6 text-primary-500" />;
      case 'Case Study':
        return <BookOpen className="w-6 h-6 text-accent-500" />;
      case 'News':
        return <Newspaper className="w-6 h-6 text-secondary-500" />;
      default:
        return null;
    }
  };

  const getTypeColor = (type: string) => {
    switch(type) {
      case 'Blog':
        return 'bg-primary-100 text-primary-700';
      case 'Case Study':
        return 'bg-accent-100 text-accent-700';
      case 'News':
        return 'bg-secondary-100 text-secondary-700';
      default:
        return 'bg-neutral-100 text-neutral-700';
    }
  };

  return (
    <section id="resources" className="section bg-white" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            className={`section-title transition-all duration-700 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {resources.title}
          </h2>
          <p 
            className={`section-subtitle mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            Stay informed with our latest industry insights and company updates
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {resources.latestUpdates.map((update, index) => (
            <div 
              key={index}
              className={`bg-white rounded-xl shadow-md overflow-hidden h-full transition-all duration-500 hover:shadow-lg ${
                isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <div className="p-6 flex flex-col h-full">
                <div className="flex items-center mb-4">
                  {getIcon(update.type)}
                  <span className={`text-xs font-bold ml-2 px-2 py-1 rounded-full ${getTypeColor(update.type)}`}>
                    {update.type}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-3 text-secondary-600">{update.title}</h3>
                <p className="text-neutral-700 mb-4 flex-grow">{update.excerpt}</p>
                <a 
                  href={update.link} 
                  className="flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors"
                >
                  Read more
                  <ArrowRight className="w-4 h-4 ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resources;