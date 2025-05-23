
import React, { useContext } from 'react';
import { Card } from "@/components/ui/card";
import { LanguageContext } from '@/pages/Index';
import TelegramIcon from './icons/TelegramIcon';
import { Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ContactSection = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Get in Touch",
      description: "Have a project in mind? I'd love to hear from you. Feel free to contact me through the channels below.",
      telegram: "Contact me on Telegram",
      email: "Email",
      address: "Portfolio",
      viewPortfolio: "View My Portfolio"
    },
    ru: {
      title: "Связаться со мной",
      description: "Есть проект на примете? Я буду рад услышать от вас. Свяжитесь со мной через каналы ниже.",
      telegram: "Свяжитесь со мной в Telegram",
      email: "Электронная почта",
      address: "Портфолио",
      viewPortfolio: "Посмотреть моё портфолио"
    }
  };

  const currentContent = content[language];

  return (
    <section id="contact" className="py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold shimmer-text mb-4">
            {currentContent.title}
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-white font-medium max-w-2xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="bg-[#5773ef]/70 overflow-hidden border border-white/30">
            <div className="p-4 md:p-6 lg:p-8">
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <a 
                    href="https://t.me/stitch505" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors mb-4 text-shadow-sm text-white font-medium"
                  >
                    <TelegramIcon size={18} className="text-white" />
                    <span className="break-all">{currentContent.telegram}: @stitch505</span>
                  </a>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 w-full max-w-xl mt-6">
                    <div className="flex flex-col items-center space-y-2 p-4 bg-gradient-to-br from-blue-500/90 to-indigo-600/90 rounded-lg border border-white/30 shadow-lg shadow-blue-500/20">
                      <Mail className="text-white h-6 w-6 sm:h-8 sm:w-8 mb-2" />
                      <h3 className="font-medium text-sm sm:text-base text-white">{currentContent.email}</h3>
                      <a href="mailto:aladingleb1997@gmail.com" className="text-blue-100 hover:text-white transition-colors break-all text-center text-xs sm:text-sm font-medium underline underline-offset-2">
                        aladingleb1997@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex flex-col items-center justify-between space-y-2 p-4 bg-gradient-to-br from-blue-500/90 to-indigo-600/90 rounded-lg border border-white/30 shadow-lg shadow-blue-500/20">
                      <h3 className="font-medium text-sm sm:text-base text-white">{currentContent.address}</h3>
                      
                      <Button 
                        asChild
                        variant="default" 
                        className="bg-white hover:bg-blue-50 text-blue-700 hover:text-blue-800 mt-2 w-full shadow-md" 
                        size="sm"
                      >
                        <a 
                          href="https://ulyanovsk.hh.ru/resume/e29f707fff062c63640039ed1f387643383031" 
                          target="_blank" 
                          rel="noopener noreferrer"
                        >
                          {currentContent.viewPortfolio}
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
