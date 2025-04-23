import React from 'react';

const Products: React.FC = () => {
  const products = [
    {
      name: '🖨 XPrint',
      description: 'Uber for printing – for students, by students. Connect with campus print providers, place orders, and pay seamlessly.',
      features: [
        'Geo-location print discovery',
        'Order & upload documents',
        'In-app secure payment',
      ],
    },
    {
      name: '🌱 CarbonCorp',
      description: 'Carbon credit platform for smallholder farmers. Track, verify, and monetize sustainable farming practices.',
      features: [
        'Carbon tracking & verification',
        'Access carbon markets',
        'Farmer incentive programs',
      ],
    },
    {
      name: '🤝 HelpingHands',
      description: 'Crowdfunding for NGOs with recurring contributions and real-time impact tracking.',
      features: [
        'Verified NGO profiles',
        'Recurring donations',
        'Impact updates & campaigns',
      ],
    },
  ];

  return (
    <section className="py-16 px-6 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold text-center mb-12">Our Products</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
            <p className="mb-4">{product.description}</p>
            <ul className="list-disc pl-5 text-sm text-gray-700">
              {product.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
