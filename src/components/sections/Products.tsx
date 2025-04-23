import React from 'react';
import { useInView } from '../hooks/useInView';
import Card from '../ui/Card';

const Products: React.FC = () => {
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });

  const products = [
    {
      name: 'Xprint',
      description: 'Uber for printing',
    },
    {
      name: 'Carboncorp',
      description: 'Carbon credits for farmers',
    },
    {
      name: 'Helping Hand',
      description: 'NGO crowdfunding campaign platform',
    },
  ];

  return (
    <section id="products" className="section bg-neutral-50" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <h2
            className={`section-title transition-all duration-700 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            Our Products
          </h2>
          <p
            className={`section-subtitle mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            Explore our innovative solutions designed to empower businesses and individuals.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <Card
              key={index}
              className={`h-full transition-all duration-700 ${
                isInView ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-20'
              }`}
              style={{ transitionDelay: `${200 + index * 100}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-secondary-600">{product.name}</h3>
              <p className="text-neutral-700">{product.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;