
import React, { useContext } from 'react';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { LanguageContext } from '@/pages/Index';
import { Mail } from "lucide-react";
import TelegramIcon from './icons/TelegramIcon';

interface OrderServiceDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  serviceName: string;
}

const OrderServiceDialog = ({ open, onOpenChange, serviceName }: OrderServiceDialogProps) => {
  const { language } = useContext(LanguageContext);
  
  const content = {
    en: {
      title: "Order Service",
      description: "Choose how you would like to request",
      emailBtn: "Send Email Request",
      telegramBtn: "Request via Telegram",
      servicePrefix: "Service: "
    },
    ru: {
      title: "Заказ Услуги",
      description: "Выберите, как вы хотели бы сделать запрос",
      emailBtn: "Отправить запрос по почте",
      telegramBtn: "Запросить через Telegram",
      servicePrefix: "Услуга: "
    }
  };

  const currentContent = content[language];
  const emailSubject = encodeURIComponent(`Order: ${serviceName}`);
  const emailBody = encodeURIComponent(`I would like to order the following service: ${serviceName}`);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="glass border-white/30">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold shimmer-text">{currentContent.title}</DialogTitle>
          <DialogDescription className="text-foreground/80">
            {currentContent.servicePrefix}<strong>{serviceName}</strong>
            <br />
            {currentContent.description}
          </DialogDescription>
        </DialogHeader>
        
        <div className="flex flex-col space-y-4 mt-4">
          <Button 
            className="bg-gradient-to-r from-blue-600 to-blue-800 hover:opacity-90"
            onClick={() => window.open(`mailto:aladingleb1997@gmail.com?subject=${emailSubject}&body=${emailBody}`)}
          >
            <Mail className="h-5 w-5 mr-2" />
            {currentContent.emailBtn}
          </Button>
          
          <Button 
            className="bg-gradient-to-r from-blue-400 to-blue-600 hover:opacity-90"
            onClick={() => window.open('https://t.me/stitch505', '_blank')}
          >
            <TelegramIcon size={20} className="mr-2" />
            {currentContent.telegramBtn}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrderServiceDialog;
