
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ShimmerBackground from '@/components/ShimmerBackground';

const Index = () => {
  return (
    <div className="min-h-screen relative">
      {/* Shimmering Background */}
      <ShimmerBackground />
      
      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main>
          <Hero 
            title="Transform Your Digital Presence"
            subtitle="Innovative design solutions that captivate users and elevate your brand with stunning visual effects"
          />
          <AboutSection />
          <ProjectsSection />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
