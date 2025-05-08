
import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { LanguageContext } from '@/pages/Index';

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Transform Your Digital Presence",
      subtitle: "Innovative design solutions that captivate users and elevate your brand with stunning visual effects",
      ctaText: "Explore",
      contactUs: "Contact Us"
    },
    ru: {
      title: "Преобразуйте Свое Цифровое Присутствие",
      subtitle: "Инновационные дизайнерские решения, которые захватывают пользователей и поднимают ваш бренд с потрясающими визуальными эффектами",
      ctaText: "Исследовать",
      contactUs: "Связаться"
    }
  };

  return (
    <section id="home" className="relative pt-24 pb-16 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold shimmer-text mb-4 md:mb-6 text-shadow-lg">
            {content[language].title}
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white mb-6 md:mb-8 lg:mb-10 font-medium text-shadow-sm leading-relaxed">
            {content[language].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto sm:justify-center">
            <Button
              className="bg-gradient-to-r from-shimmer-dark to-shimmer-accent hover:opacity-90 transition-opacity w-full sm:w-auto"
              size="lg"
              asChild
            >
              <a href="#about">{content[language].ctaText}</a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="backdrop-blur-sm border-white/30 text-white hover:bg-white/10 w-full sm:w-auto"
              asChild
            >
              <a href="#contact">{content[language].contactUs}</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-48 md:w-72 h-48 md:h-72 bg-shimmer-accent/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 -right-10 w-40 md:w-60 h-40 md:h-60 bg-shimmer-dark/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
