
import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { LanguageContext } from '@/pages/Index';
import { Sparkles } from 'lucide-react';

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
    <section id="home" className="relative pt-20 pb-12 sm:pt-24 md:pt-32 md:pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold shimmer-text mb-4 md:mb-6 text-shadow-lg animate-shimmer-slow leading-tight">
            {content[language].title}
          </h1>
          
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white mb-6 md:mb-8 lg:mb-10 font-medium text-shadow-sm leading-relaxed animate-fade-in px-2 sm:px-0">
            {content[language].subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto sm:justify-center">
            <Button
              className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all duration-300 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105 animate-shimmer-fast w-full sm:w-auto text-sm sm:text-base"
              size="lg"
              asChild
            >
              <a href="#about" className="flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                {content[language].ctaText}
              </a>
            </Button>
            
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-indigo-600 hover:to-blue-500 transition-all duration-300 shadow-lg hover:shadow-blue-500/25 transform hover:scale-105 animate-shimmer-fast w-full sm:w-auto text-sm sm:text-base"
              asChild
            >
              <a href="#contact" className="flex items-center justify-center gap-2">
                <Sparkles className="h-4 w-4 sm:h-5 sm:w-5" />
                {content[language].contactUs}
              </a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Animated Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-48 md:w-72 h-48 md:h-72 bg-pink-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 -right-10 w-40 md:w-60 h-40 md:h-60 bg-purple-500/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-0 left-1/4 w-60 md:w-80 h-60 md:h-80 bg-blue-500/20 rounded-full filter blur-3xl animate-float"></div>
      
      {/* Extra floating particles */}
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-yellow-300 rounded-full animate-float opacity-70 hidden sm:block"></div>
      <div className="absolute top-2/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full animate-float opacity-70 hidden sm:block" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 left-2/3 w-2 h-2 bg-blue-400 rounded-full animate-float opacity-70 hidden sm:block" style={{ animationDelay: '1.5s' }}></div>
      <div className="absolute bottom-1/4 right-1/4 w-5 h-5 bg-purple-300 rounded-full animate-float opacity-70 hidden sm:block" style={{ animationDelay: '2s' }}></div>
    </section>
  );
};

export default Hero;
