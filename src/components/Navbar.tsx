
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
import { Globe } from 'lucide-react';
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
            <a href="#" className="text-2xl font-bold shimmer-text">Stitch505</a>
          </div>
          
          {isMobile ? (
            <div className="flex items-center">
              <Select defaultValue={language} onValueChange={handleLanguageChange} value={language}>
                <SelectTrigger className="w-[60px] mr-2 bg-transparent border-white/30">
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
                <div className="absolute top-full left-0 right-0 glass mt-1 py-2">
                  {navItems.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      className="block px-4 py-2 text-foreground hover:bg-accent/20"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  ))}
                  <Button 
                    className="w-full text-left px-4 py-2 bg-transparent hover:bg-accent/20 font-normal justify-start rounded-none h-auto"
                    onClick={() => {
                      setIsContactDialogOpen(true);
                      setIsMenuOpen(false);
                    }}
                  >
                    {strings.getStarted}
                  </Button>
                </div>
              )}
            </div>
          ) : (
            <div className="flex items-center space-x-6">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="font-medium text-foreground hover:text-primary transition-colors"
                >
                  {item.label}
                </a>
              ))}
              
              <Select defaultValue={language} onValueChange={handleLanguageChange} value={language}>
                <SelectTrigger className="w-[80px] bg-transparent border-white/30">
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
                className="bg-gradient-to-r from-shimmer-dark to-shimmer-accent hover:opacity-90 transition-opacity"
                onClick={() => setIsContactDialogOpen(true)}
              >
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
