
import React, { useContext } from 'react';
import { LanguageContext } from '@/pages/Index';
import TelegramIcon from './icons/TelegramIcon';

const Footer = () => {
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      description: "Creating powerful digital solutions with cutting-edge technology and efficient system architecture. My mission is to build robust and reliable infrastructure for your digital needs.",
      quickLinks: "Quick Links",
      home: "Home",
      about: "About",
      projects: "Projects",
      contact: "Contact",
      contactTitle: "Contact",
      copyright: "© 2025 Gleb Aladyin. All rights reserved.",
      email: "Email"
    },
    ru: {
      description: "Создание мощных цифровых решений с использованием передовых технологий и эффективной системной архитектуры. Моя миссия — создать надежную инфраструктуру для ваших цифровых потребностей.",
      quickLinks: "Быстрые ссылки",
      home: "Главная",
      about: "Обо мне",
      projects: "Проекты",
      contact: "Контакты",
      contactTitle: "Контакты",
      copyright: "© 2025 Глеб Аладьин. Все права защищены.",
      email: "Электронная почта"
    }
  };

  const currentContent = content[language];

  return (
    <footer className="bg-[#1a1f3a]/95 py-8 relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold shimmer-text mb-4">Gleb Aladyin</h3>
            <p className="text-white mb-4 max-w-md leading-relaxed">
              {currentContent.description}
            </p>
            <div className="flex space-x-4">
              <a href="https://t.me/stitch505" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-100 transition-colors" aria-label="Telegram">
                <TelegramIcon size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{currentContent.quickLinks}</h4>
            <ul className="space-y-2">
              <li><a href="#home" className="text-blue-200 hover:text-blue-100 transition-colors">{currentContent.home}</a></li>
              <li><a href="#about" className="text-blue-200 hover:text-blue-100 transition-colors">{currentContent.about}</a></li>
              <li><a href="#projects" className="text-blue-200 hover:text-blue-100 transition-colors">{currentContent.projects}</a></li>
              <li><a href="#contact" className="text-blue-200 hover:text-blue-100 transition-colors">{currentContent.contact}</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">{currentContent.contactTitle}</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <TelegramIcon className="text-blue-300 mt-0.5 flex-shrink-0" size={18} />
                <span className="text-white">@stitch505</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-300 mt-0.5 flex-shrink-0">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                <span className="text-white break-all">aladingleb1997@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-white text-sm">{currentContent.copyright}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
