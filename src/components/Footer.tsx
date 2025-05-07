
import React, { useContext } from 'react';
import { LanguageContext } from '@/pages/Index';
import TelegramIcon from './icons/TelegramIcon';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      description: "Creating powerful digital solutions with cutting-edge technology and efficient system architecture.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      contactTitle: "Contact",
      address: "Development City",
      copyright: "© 2025 Stitch505. All rights reserved.",
      email: "Email"
    },
    ru: {
      description: "Создание мощных цифровых решений с использованием передовых технологий и эффективной системной архитектуры.",
      quickLinks: "Быстрые ссылки",
      home: "Главная",
      about: "Обо мне",
      projects: "Проекты",
      contact: "Контакты",
      contactTitle: "Контакты",
      address: "Город Разработки",
      copyright: "© 2025 Stitch505. Все права защищены.",
      email: "Электронная почта"
    }
  };

  const currentContent = content[language];

  return (
    <footer className="glass py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold shimmer-text mb-4">Stitch505</h3>
            <p className="text-foreground/80 mb-4 max-w-md">
              {currentContent.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/stitch505" target="_blank" rel="noopener noreferrer" className="text-foreground/70 hover:text-shimmer-accent transition-colors" aria-label="Telegram">
                <TelegramIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{currentContent.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-foreground/70 hover:text-shimmer-accent transition-colors">{currentContent.home}</a></li>
              <li><a href="#about" className="text-foreground/70 hover:text-shimmer-accent transition-colors">{currentContent.about}</a></li>
              <li><a href="#projects" className="text-foreground/70 hover:text-shimmer-accent transition-colors">{currentContent.projects}</a></li>
              <li><a href="#contact" className="text-foreground/70 hover:text-shimmer-accent transition-colors">{currentContent.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">{currentContent.contactTitle}</h4>
            <ul className="space-y-2">
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shimmer-accent mt-0.5">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <span className="text-foreground/70">{currentContent.address}</span>
              </li>
              <li className="flex items-start space-x-2">
                <TelegramIcon className="text-shimmer-accent mt-0.5" size={18} />
                <span className="text-foreground/70">@stitch505</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-shimmer-accent mt-0.5">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-foreground/70">aladingleb1997@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center text-foreground/60 text-sm">
          <p>{currentContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
