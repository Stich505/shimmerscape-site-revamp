
import React, { useState, useContext } from 'react';
import { Button } from "@/components/ui/button";
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Globe, Sparkles } from 'lucide-react';
import { LanguageContext } from '@/pages/Index';
import ContactDialog from './ContactDialog';

interface NavItem {
  label: string;
  href: string;
}

interface LanguageStrings {
  [key: string]: {
    home: string;
    about: string;
    projects: string;
    contact: string;
    getStarted: string;
  }
}

const languages: LanguageStrings = {
  en: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    contact: 'Contact',
    getStarted: 'Get Started'
  },
  ru: {
    home: 'Главная',
    about: 'Обо мне',
    projects: 'Проекты',
    contact: 'Контакт',
    getStarted: 'Начать'
  }
};

const Navbar = () => {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactDialogOpen, setIsContactDialogOpen] = useState(false);
  const { language, setLanguage } = useContext(LanguageContext);

  const strings = languages[language];

  const navItems: NavItem[] = [
    { label: strings.home, href: '#home' },
    { label: strings.about, href: '#about' },
    { label: strings.projects, href: '#projects' },
    { label: strings.contact, href: '#contact' },
  ];

  const handleLanguageChange = (value: string) => {
    setLanguage(value as 'en' | 'ru');
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 glass">
      <div className="container mx-auto py-4 px-4 md:px-6">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <a href="#" className="text-2xl font-bold text-white text-shadow-lg group">
              <span className="bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent group-hover:from-pink-200 group-hover:to-blue-300 transition-all duration-500">
                Stitch505
              </span>
              <Sparkles className="inline-block ml-1 h-4 w-4 text-blue-200 opacity-0 group-hover:opacity-100 transition-opacity" />
            </a>
          </div>
          
          {isMobile ? (
            <div className="flex items-center">
              <Select defaultValue={language} onValueChange={handleLanguageChange} value={language}>
                <SelectTrigger className="w-[60px] mr-2 bg-transparent border-white/30 text-white">
                  <SelectValue>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {language.toUpperCase()}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">EN</SelectItem>
                  <SelectItem value="ru">RU</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
                className="text-white hover:bg-white/20 transition-colors"
              >
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 6L6 18M6 6l12 12"></path>
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="4" x2="20" y1="12" y2="12"></line>
                    <line x1="4" x2="20" y1="6" y2="6"></line>
                    <line x1="4" x2="20" y1="18" y2="18"></line>
                  </svg>
                )}
              </Button>
              
              {isMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white/90 backdrop-blur-3xl border-t border-b border-white/50 shadow-2xl mt-1">
                  <div className="px-4 py-6 bg-gradient-to-b from-white/90 via-blue-50/90 to-purple-50/90 rounded-md m-2">
                    {navItems.map((item) => (
                      <a
                        key={item.label}
                        href={item.href}
                        className="block px-4 py-3 text-gray-800 hover:bg-gradient-to-r hover:from-blue-100/70 hover:to-purple-100/70 transition-all duration-300 font-medium rounded-md mb-2 shadow-sm transform hover:scale-105"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </a>
                    ))}
                    <Button 
                      className="w-full text-left px-4 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all duration-300 text-white font-medium justify-start rounded-md h-auto mt-3 shadow-lg hover:shadow-pink-500/25 transform hover:scale-105"
                      onClick={() => {
                        setIsContactDialogOpen(true);
                        setIsMenuOpen(false);
                      }}
                    >
                      <Sparkles className="h-4 w-4 mr-2" />
                      {strings.getStarted}
                    </Button>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-medium text-white hover:text-blue-200 transition-colors text-shadow-sm relative group"
                >
                  {item.label}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
              
              <Select defaultValue={language} onValueChange={handleLanguageChange} value={language}>
                <SelectTrigger className="w-[80px] bg-transparent border-white/30 text-white hover:border-white/50 transition-colors">
                  <SelectValue>
                    <div className="flex items-center">
                      <Globe className="h-4 w-4 mr-1" />
                      {language.toUpperCase()}
                    </div>
                  </SelectValue>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">English</SelectItem>
                  <SelectItem value="ru">Русский</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                className="bg-gradient-to-r from-pink-500 to-purple-600 hover:from-purple-600 hover:to-pink-500 transition-all duration-300 text-white shadow-lg hover:shadow-pink-500/25 transform hover:scale-105 btn-shimmer"
                onClick={() => setIsContactDialogOpen(true)}
              >
                <Sparkles className="h-4 w-4 mr-2" />
                {strings.getStarted}
              </Button>
            </div>
          )}
        </nav>
      </div>
      <ContactDialog open={isContactDialogOpen} onOpenChange={setIsContactDialogOpen} />
    </header>
  );
};

export default Navbar;
