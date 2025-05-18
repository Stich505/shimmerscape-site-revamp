
import React, { useContext, useState } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LanguageContext } from '@/pages/Index';
import OrderServiceDialog from './OrderServiceDialog';

interface Project {
  title: string;
  titleRu: string;
  description: string;
  descriptionRu: string;
  imageUrl: string;
  repoUrl: string;
  tags: string[];
  isOrderable?: boolean;
}

const ProjectsSection = () => {
  const { language } = useContext(LanguageContext);
  const [isOrderDialogOpen, setIsOrderDialogOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string>("");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  
  const strings = {
    en: {
      sectionTitle: "My Projects",
      sectionDescription: "Explore my latest work in system administration, DevOps, and infrastructure projects.",
      viewDetails: "View Details",
      viewAll: "View All Projects",
      order: "Order"
    },
    ru: {
      sectionTitle: "Мои Проекты",
      sectionDescription: "Изучите мои последние работы в области системного администрирования, DevOps и инфраструктурных проектов.",
      viewDetails: "Подробнее",
      viewAll: "Все Проекты",
      order: "Заказать"
    }
  };

  const currentContent = strings[language];
  
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
      repoUrl: "https://t.me/a1rvpn_bot",
      tags: ["VPN", "Networking", "Security", "Linux"]
    },
    {
      title: "Mail Service Configuration",
      titleRu: "Настройка почтового сервиса",
      description: "Setting up and optimizing mail server infrastructure with spam filtering, security features, and high deliverability.",
      descriptionRu: "Настройка и оптимизация инфраструктуры почтового сервера с фильтрацией спама, функциями безопасности и высокой доставляемостью.",
      imageUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      repoUrl: "#mail-service",
      tags: ["Postfix", "SMTP", "Security", "Linux"],
      isOrderable: true
    },
    {
      title: "Nextcloud Deployment",
      titleRu: "Развертывание Nextcloud",
      description: "Implementing Nextcloud solutions via Docker and Nginx, including configuration, optimization, and security hardening.",
      descriptionRu: "Внедрение решений Nextcloud через Docker и Nginx, включая настройку, оптимизацию и усиление безопасности.",
      imageUrl: "https://images.unsplash.com/photo-1544396821-4dd40b938ad3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&h=400&q=80",
      repoUrl: "https://nextcloud.stitch505.su",
      tags: ["Docker", "Nginx", "Cloud", "DevOps"]
    }
  ];

  const handleOpenOrderDialog = (serviceName: string) => {
    setSelectedService(serviceName);
    setIsOrderDialogOpen(true);
  };

  return (
    <section id="projects" className="py-20 relative overflow-hidden">
      {/* Add a subtle background effect specific to this section */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-purple-500/5 to-indigo-400/5 animate-shimmer-slow"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold shimmer-text mb-4">{currentContent.sectionTitle}</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {currentContent.sectionDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`overflow-hidden rounded-xl transform transition-all duration-500 hover:scale-[1.02] hover:shadow-xl bg-gradient-to-br ${
                index % 4 === 0 ? 'from-purple-500/20 via-indigo-500/30 to-blue-500/20' :
                index % 4 === 1 ? 'from-blue-500/20 via-cyan-500/30 to-teal-500/20' :
                index % 4 === 2 ? 'from-pink-500/20 via-rose-500/30 to-red-500/20' :
                'from-amber-500/20 via-orange-500/30 to-yellow-500/20'
              } border border-white/20 shadow-lg`}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className="relative h-48 overflow-hidden">
                {/* Glass overlay with gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Image */}
                <img 
                  src={project.imageUrl} 
                  alt={language === 'en' ? project.title : project.titleRu} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                
                {/* Tags positioned on the image */}
                <div className="absolute bottom-0 left-0 p-4 w-full flex flex-wrap gap-2">
                  {project.tags.map((tag, i) => (
                    <span 
                      key={i} 
                      className={`text-xs py-1 px-2 rounded-full text-white font-medium shadow-lg ${
                        i % 4 === 0 ? 'bg-purple-500/80' :
                        i % 4 === 1 ? 'bg-blue-500/80' :
                        i % 4 === 2 ? 'bg-pink-500/80' :
                        'bg-amber-500/80'
                      } animate-pulse-slow`}
                      style={{ animationDelay: `${i * 0.15}s` }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              
              <CardContent className={`p-6 ${
                index % 4 === 0 ? 'bg-gradient-to-br from-purple-500/10 via-indigo-500/15 to-blue-500/10' :
                index % 4 === 1 ? 'bg-gradient-to-br from-blue-500/10 via-cyan-500/15 to-teal-500/10' :
                index % 4 === 2 ? 'bg-gradient-to-br from-pink-500/10 via-rose-500/15 to-red-500/10' :
                'bg-gradient-to-br from-amber-500/10 via-orange-500/15 to-yellow-500/10'
              } h-[180px] flex flex-col`}>
                <h3 className="text-xl font-semibold mb-2 text-white text-shadow-sm">{language === 'en' ? project.title : project.titleRu}</h3>
                <p className="text-white/90 mb-4 flex-grow">
                  {language === 'en' ? project.description : project.descriptionRu}
                </p>
                
                {project.isOrderable ? (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className={`w-full border border-white/30 ${
                      index % 4 === 0 ? 'bg-gradient-to-r from-purple-500/40 to-indigo-500/40 hover:from-purple-500/60 hover:to-indigo-500/60' :
                      index % 4 === 1 ? 'bg-gradient-to-r from-blue-500/40 to-cyan-500/40 hover:from-blue-500/60 hover:to-cyan-500/60' :
                      index % 4 === 2 ? 'bg-gradient-to-r from-pink-500/40 to-rose-500/40 hover:from-pink-500/60 hover:to-rose-500/60' :
                      'bg-gradient-to-r from-amber-500/40 to-orange-500/40 hover:from-amber-500/60 hover:to-orange-500/60'
                    } text-white btn-shimmer font-medium`}
                    onClick={() => handleOpenOrderDialog(language === 'en' ? project.title : project.titleRu)}
                  >
                    {currentContent.order}
                  </Button>
                ) : (
                  <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className={`w-full border border-white/30 ${
                        index % 4 === 0 ? 'bg-gradient-to-r from-purple-500/40 to-indigo-500/40 hover:from-purple-500/60 hover:to-indigo-500/60' :
                        index % 4 === 1 ? 'bg-gradient-to-r from-blue-500/40 to-cyan-500/40 hover:from-blue-500/60 hover:to-cyan-500/60' :
                        index % 4 === 2 ? 'bg-gradient-to-r from-pink-500/40 to-rose-500/40 hover:from-pink-500/60 hover:to-rose-500/60' :
                        'bg-gradient-to-r from-amber-500/40 to-orange-500/40 hover:from-amber-500/60 hover:to-orange-500/60'
                      } text-white btn-shimmer font-medium`}
                    >
                      {currentContent.viewDetails}
                    </Button>
                  </a>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
      <OrderServiceDialog 
        open={isOrderDialogOpen} 
        onOpenChange={setIsOrderDialogOpen} 
        serviceName={selectedService}
      />
    </section>
  );
};

export default ProjectsSection;
