
import React, { useContext } from 'react';
import { Card } from "@/components/ui/card";
import { LanguageContext } from '@/pages/Index';
import TelegramIcon from './icons/TelegramIcon';
import { Mail, MapPin } from 'lucide-react';

const ContactSection = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Get in Touch",
      description: "Have a project in mind? I'd love to hear from you. Feel free to contact me through the channels below.",
      telegram: "Contact me on Telegram",
      email: "Email",
      address: "Address"
    },
    ru: {
      title: "Связаться со мной",
      description: "Есть проект на примете? Я буду рад услышать от вас. Свяжитесь со мной через каналы ниже.",
      telegram: "Свяжитесь со мной в Telegram",
      email: "Электронная почта",
      address: "Адрес"
    }
  };

  const currentContent = content[language];

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold shimmer-text mb-4">{currentContent.title}</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {currentContent.description}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="glass overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="space-y-6">
                <div className="flex flex-col items-center">
                  <a 
                    href="https://t.me/stitch505" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 py-2 px-4 bg-shimmer-accent/20 rounded-full hover:bg-shimmer-accent/30 transition-colors mb-4"
                  >
                    <TelegramIcon size={20} className="text-shimmer-accent" />
                    <span>{currentContent.telegram}: @stitch505</span>
                  </a>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl mt-6">
                    <div className="flex flex-col items-center space-y-2 p-4 glass rounded-lg">
                      <Mail className="text-shimmer-accent h-8 w-8 mb-2" />
                      <h3 className="font-medium">{currentContent.email}</h3>
                      <a href="mailto:aladingleb1997@gmail.com" className="text-foreground/70 hover:text-shimmer-accent transition-colors">
                        aladingleb1997@gmail.com
                      </a>
                    </div>
                    
                    <div className="flex flex-col items-center space-y-2 p-4 glass rounded-lg">
                      <MapPin className="text-shimmer-accent h-8 w-8 mb-2" />
                      <h3 className="font-medium">{currentContent.address}</h3>
                      <p className="text-foreground/70">Development City</p>
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
