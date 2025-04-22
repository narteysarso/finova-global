import React from 'react';
import { content } from '../../constants/content';
import { Facebook, Linkedin, Twitter, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const { footer } = content;
  
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'Facebook':
        return <Facebook className="w-5 h-5" />;
      case 'Twitter':
        return <Twitter className="w-5 h-5" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-secondary-900 text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-2">
            <a href="#" className="flex items-center text-2xl font-bold mb-4">
              <Zap className="w-8 h-8 text-accent-500 mr-2" />
              {content.siteInfo.logo}
            </a>
            <p className="text-neutral-300 mb-6 max-w-md">
              Empowering digital transformation for individuals, SMEs, and organizations 
              through innovative and distributed technologies.
            </p>
            <div className="flex space-x-4">
              {footer.socialMedia.map((social, index) => (
                <a 
                  key={index}
                  href={social.link}
                  className="bg-secondary-800 p-2 rounded-full hover:bg-accent-500 transition-colors duration-300"
                  aria-label={social.platform}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {getIcon(social.icon)}
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-white text-xl font-bold mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-neutral-300 hover:text-accent-500 transition-colors">Home</a></li>
              <li><a href="#about" className="text-neutral-300 hover:text-accent-500 transition-colors">About</a></li>
              <li><a href="#solutions" className="text-neutral-300 hover:text-accent-500 transition-colors">Solutions</a></li>
              <li><a href="#industries" className="text-neutral-300 hover:text-accent-500 transition-colors">Industries</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-white text-xl font-bold mb-4">Contact</h4>
            <ul className="space-y-3">
              <li className="text-neutral-300">{content.contact.details.location}</li>
              <li>
                <a href={`mailto:${content.contact.details.email}`} className="text-neutral-300 hover:text-accent-500 transition-colors">
                  {content.contact.details.email}
                </a>
              </li>
              <li className="text-neutral-300">{content.contact.details.phone}</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-secondary-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-400 text-sm mb-4 md:mb-0">{footer.copyright}</p>
          <div className="flex space-x-6">
            {footer.links.map((link, index) => (
              <a 
                key={index}
                href={link.link}
                className="text-neutral-400 hover:text-accent-500 transition-colors text-sm"
              >
                {link.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;