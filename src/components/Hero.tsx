
import React from 'react';
import { Button } from "@/components/ui/button";

interface HeroProps {
  title?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
}

const Hero: React.FC<HeroProps> = ({
  title = "Welcome to ShimmerScape",
  subtitle = "A beautiful design with shimmering effects, creating an immersive digital experience",
  ctaText = "Explore",
  ctaLink = "#about"
}) => {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold shimmer-text mb-4 md:mb-6">
            {title}
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/90 mb-8 md:mb-10">
            {subtitle}
          </p>
          
          <div className="flex gap-4">
            <Button
              className="bg-gradient-to-r from-shimmer-dark to-shimmer-accent hover:opacity-90 transition-opacity"
              size="lg"
              asChild
            >
              <a href={ctaLink}>{ctaText}</a>
            </Button>
            
            <Button
              variant="outline"
              size="lg"
              className="backdrop-blur-sm border-white/30"
              asChild
            >
              <a href="#contact">Contact Us</a>
            </Button>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute -top-10 -left-10 w-72 h-72 bg-shimmer-accent/10 rounded-full filter blur-3xl animate-pulse-slow"></div>
      <div className="absolute top-1/4 -right-10 w-60 h-60 bg-shimmer-dark/20 rounded-full filter blur-3xl animate-pulse-slow"></div>
    </section>
  );
};

export default Hero;
