
import React, { useContext } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { LanguageContext } from '@/pages/Index';

const AboutSection = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "About Me",
      description: "I create powerful digital solutions with cutting-edge technology and efficient system architecture. My mission is to build robust and reliable infrastructure for your digital needs.",
      features: [
        {
          title: "System Administration",
          description: "Expertly managing and optimizing server infrastructure for maximum performance and reliability.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shimmer-accent">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          ),
        },
        {
          title: "VPN Solutions",
          description: "Building secure and reliable VPN infrastructure from scratch, ensuring privacy and accessibility.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shimmer-accent">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          ),
        },
        {
          title: "Cloud Services",
          description: "Deploying and configuring cloud solutions that scale with your needs while maintaining security and performance.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shimmer-accent">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          ),
        }
      ]
    },
    ru: {
      title: "Обо мне",
      description: "Я создаю мощные цифровые решения с использованием передовых технологий и эффективной системной архитектуры. Моя миссия — построить надежную инфраструктуру для ваших цифровых потребностей.",
      features: [
        {
          title: "Системное администрирование",
          description: "Профессиональное управление и оптимизация серверной инфраструктуры для максимальной производительности и надежности.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shimmer-accent">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
          ),
        },
        {
          title: "VPN решения",
          description: "Создание безопасной и надежной VPN-инфраструктуры с нуля, обеспечивающей конфиденциальность и доступность.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shimmer-accent">
              <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
              <line x1="8" y1="21" x2="16" y2="21"></line>
              <line x1="12" y1="17" x2="12" y2="21"></line>
            </svg>
          ),
        },
        {
          title: "Облачные сервисы",
          description: "Развертывание и настройка облачных решений, которые масштабируются в соответствии с вашими потребностями, сохраняя безопасность и производительность.",
          icon: (
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shimmer-accent">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
          ),
        }
      ]
    }
  };

  const currentContent = content[language];

  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold shimmer-text mb-4">{currentContent.title}</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {currentContent.features.map((feature, index) => (
            <Card key={index} className="glass overflow-hidden group hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6">
                <div className="mb-4 relative">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center glass group-hover:bg-shimmer-accent/20 transition-all">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-foreground/80">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
