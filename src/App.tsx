import { useEffect } from 'react';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import WhoWeAre from './components/sections/WhoWeAre';
import WhatWeOffer from './components/sections/WhatWeOffer';
import AboutUs from './components/sections/AboutUs';
import Solutions from './components/sections/Solutions';
import Industries from './components/sections/Industries';
import Resources from './components/sections/Resources';
import Contact from './components/sections/Contact';
import './styles/globals.css';
import Products from './components/sections/Products';

function App() {
  useEffect(() => {
    // Update page title
    document.title = 'Finova Global Technologies | Empowering Digital Services & Commerce';
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Hero />
        <WhoWeAre />
        <WhatWeOffer />
        <AboutUs />
        <Solutions />
        <Products />
        <Industries />
        <Resources />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
