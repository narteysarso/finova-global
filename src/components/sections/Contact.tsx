import React, { useState } from 'react';
import { content } from '../../constants/content';
import Button from '../ui/Button';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { useInView } from '../hooks/useInView';

const Contact: React.FC = () => {
  const { contact } = content;
  const [ref, isInView] = useInView({ threshold: 0.1, triggerOnce: true });
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
      
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          company: '',
          message: ''
        });
        setSubmitSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="section bg-neutral-50" ref={ref}>
      <div className="container">
        <div className="text-center mb-16">
          <h2 
            className={`section-title transition-all duration-700 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {contact.title}
          </h2>
          <p 
            className={`section-subtitle mx-auto transition-all duration-700 delay-200 ${
              isInView ? 'opacity-100' : 'opacity-0 transform translate-y-8'
            }`}
          >
            {contact.message} Let's explore how we can help you achieve your digital goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div 
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform -translate-x-20'
            }`}
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-secondary-600">Get in Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-primary-100 rounded-full">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Email</h4>
                    <a 
                      href={`mailto:${contact.details.email}`} 
                      className="text-primary-600 hover:underline"
                    >
                      {contact.details.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-accent-100 rounded-full">
                    <Phone className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Phone</h4>
                    <p>{contact.details.phone}</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-secondary-100 rounded-full">
                    <MapPin className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">Location</h4>
                    <p>{contact.details.location}</p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-4">
                {contact.buttons.map((button, index) => (
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
          </div>

          <div 
            id="contact-form"
            className={`transition-all duration-700 ${
              isInView ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-20'
            }`}
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              <h3 className="text-2xl font-bold mb-6 text-secondary-600">Send a Message</h3>
              
              {submitSuccess ? (
                <div className="bg-success-500 bg-opacity-10 border border-success-500 rounded-lg p-4 text-success-500 flex items-center mb-6">
                  <Send className="w-5 h-5 mr-2" />
                  Thank you for your message! We'll get back to you shortly.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {errorMessage && (
                    <div className="bg-error-500 bg-opacity-10 border border-error-500 rounded-lg p-4 text-error-500">
                      {errorMessage}
                    </div>
                  )}
                  
                  {contact.formFields.map((field, index) => (
                    <div key={index}>
                      <label 
                        htmlFor={field.name} 
                        className="block mb-2 font-medium text-neutral-700"
                      >
                        {field.label} {field.required !== false && <span className="text-error-500">*</span>}
                      </label>
                      
                      {field.type === 'textarea' ? (
                        <textarea
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required !== false}
                          rows={4}
                          className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                          value={formData[field.name as keyof typeof formData] || ''}
                          onChange={handleChange}
                        />
                      ) : (
                        <input
                          type={field.type}
                          id={field.name}
                          name={field.name}
                          placeholder={field.placeholder}
                          required={field.required !== false}
                          className="w-full p-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 outline-none transition-all"
                          value={formData[field.name as keyof typeof formData] || ''}
                          onChange={handleChange}
                        />
                      )}
                    </div>
                  ))}
                  
                  <Button 
                    type="submit"
                    variant="primary"
                    className="w-full flex justify-center items-center"
                  >
                    {isSubmitting ? (
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                    ) : (
                      <Send className="w-5 h-5 mr-2" />
                    )}
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;