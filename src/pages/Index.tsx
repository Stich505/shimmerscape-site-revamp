
import React, { createContext, useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ShimmerBackground from '@/components/ShimmerBackground';

// Create a language context
export const LanguageContext = createContext({
  language: 'en',
  setLanguage: (lang: 'en' | 'ru') => {}
});

const Index = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');
  
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      <div className="min-h-screen relative">
        {/* Shimmering Background */}
        <ShimmerBackground />
        
        {/* Content */}
        <div className="relative z-10">
          <Navbar />
          <main>
            <Hero />
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </main>
          <Footer />
        </div>
      </div>
    </LanguageContext.Provider>
  );
};

export default Index;
