import React, { useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Project {
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  imageUrl: string;
  repoUrl: string;
  tags: string[];
}

interface Strings {
  sectionTitle: string;
  sectionDescription: string;
  viewDetails: string;
  viewAll: string;
}

const languageStrings = {
  en: {
    sectionTitle: "My Projects",
    sectionDescription: "Explore my latest work in system administration, DevOps, and infrastructure projects.",
    viewDetails: "View Details",
    viewAll: "View All Projects"
  },
  ru: {
    sectionTitle: "Мои Проекты",
    sectionDescription: "Изучите мои последние работы в области системного администрирования, DevOps и инфраструктурных проектов.",
    viewDetails: "Подробнее",
    viewAll: "Все Проекты"
  }
};

const ProjectsSection = () => {
  const [language, setLanguage] = useState<'en' | 'ru'>('en');
  
  // Use the current language from Navbar (in a real app, this would be managed with context or state management)
  // For now, we'll keep it as a local state to demonstrate
  
  const strings: Strings = languageStrings[language];
  
  const projects: Project[] = [
    {
      title: "Marzban Backup Bot",
      titleRu: "Бот резервного копирования Marzban",
      description: "A Telegram bot for automated backups of Marzban VPN service configurations and databases.",
      descriptionRu: "Телеграм-бот для автоматизированного резервного копирования конфигураций и баз данных сервиса Marzban VPN.",
      imageUrl: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      repoUrl: "https://github.com/Stich505/marzban-backup-bots",
      tags: ["Python", "Telegram API", "VPN", "BackupOps"]
    },
    {
      title: "VPN Infrastructure Setup",
      titleRu: "Настройка VPN инфраструктуры",
      description: "Building and configuring VPN services from scratch, including server setup, security hardening, and user management.",
      descriptionRu: "Создание и настройка VPN-сервисов с нуля, включая настройку сервера, усиление безопасности и управление пользователями.",
      imageUrl: "https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      repoUrl: "#vpn-setup",
      tags: ["VPN", "Networking", "Security", "Linux"]
    },
    {
      title: "Mail Service Configuration",
      titleRu: "Настройка почтового сервиса",
      description: "Setting up and optimizing mail server infrastructure with spam filtering, security features, and high deliverability.",
      descriptionRu: "Настройка и оптимизация инфраструктуры почтового сервера с фильтрацией спама, функциями безопасности и высокой доставляемостью.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      repoUrl: "#mail-service",
      tags: ["Postfix", "SMTP", "Security", "Linux"]
    },
    {
      title: "Nextcloud Deployment",
      titleRu: "Развертывание Nextcloud",
      description: "Implementing Nextcloud solutions via Docker and Nginx, including configuration, optimization, and security hardening.",
      descriptionRu: "Внедрение решений Nextcloud через Docker и Nginx, включая настройку, оптимизацию и усиление безопасности.",
      imageUrl: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      repoUrl: "#nextcloud",
      tags: ["Docker", "Nginx", "Cloud", "DevOps"]
    }
  ];

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'ru' : 'en');
  };

  return (
    <section id="projects" className="py-20 bg-foreground/5">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold shimmer-text mb-4">{strings.sectionTitle}</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {strings.sectionDescription}
          </p>
          <Button 
            onClick={toggleLanguage} 
            variant="outline" 
            size="sm" 
            className="mt-4 backdrop-blur-sm border-white/30"
          >
            {language === 'en' ? 'Switch to Russian' : 'Переключиться на английский'}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass overflow-hidden group hover:shadow-lg transition-all duration-300">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.imageUrl} 
                  alt={language === 'en' ? project.title : project.titleRu} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-2">{language === 'en' ? project.title : project.titleRu}</h3>
                <p className="text-foreground/80 mb-4">
                  {language === 'en' ? project.description : project.descriptionRu}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-xs py-1 px-2 rounded-full bg-shimmer-accent/10 text-shimmer-accent">
                      {tag}
                    </span>
                  ))}
                </div>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" size="sm" className="w-full backdrop-blur-sm border-white/30 group-hover:bg-shimmer-accent/20 transition-colors">
                    {strings.viewDetails}
                  </Button>
                </a>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button className="bg-gradient-to-r from-shimmer-dark to-shimmer-accent hover:opacity-90 transition-opacity">
            {strings.viewAll}
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
