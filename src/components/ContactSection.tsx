
import React, { useContext } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { LanguageContext } from '@/pages/Index';
import TelegramIcon from './icons/TelegramIcon';

const ContactSection = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const { language } = useContext(LanguageContext);

  const content = {
    en: {
      title: "Get in Touch",
      description: "Have a project in mind? I'd love to hear from you. Send me a message and I'll respond as soon as possible.",
      name: "Name",
      email: "Email",
      subject: "Subject",
      message: "Message",
      namePlaceholder: "Your name",
      emailPlaceholder: "Your email",
      subjectPlaceholder: "Subject of your message",
      messagePlaceholder: "Your message",
      sending: "Sending...",
      send: "Send Message",
      telegram: "Contact me on Telegram",
      toastTitle: "Message sent!",
      toastDesc: "I'll get back to you as soon as possible."
    },
    ru: {
      title: "Связаться со мной",
      description: "Есть проект на примете? Я буду рад услышать от вас. Отправьте мне сообщение, и я отвечу как можно скорее.",
      name: "Имя",
      email: "Электронная почта",
      subject: "Тема",
      message: "Сообщение",
      namePlaceholder: "Ваше имя",
      emailPlaceholder: "Ваша электронная почта",
      subjectPlaceholder: "Тема вашего сообщения",
      messagePlaceholder: "Ваше сообщение",
      sending: "Отправка...",
      send: "Отправить сообщение",
      telegram: "Свяжитесь со мной в Telegram",
      toastTitle: "Сообщение отправлено!",
      toastDesc: "Я свяжусь с вами как можно скорее."
    }
  };

  const currentContent = content[language];

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: currentContent.toastTitle,
        description: currentContent.toastDesc,
      });
      
      // Reset form
      (e.target as HTMLFormElement).reset();
    }, 1000);
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold shimmer-text mb-4">{currentContent.title}</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            {currentContent.description}
          </p>
          
          <div className="flex justify-center mt-6">
            <a 
              href="https://t.me/stitch505" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 py-2 px-4 bg-shimmer-accent/20 rounded-full hover:bg-shimmer-accent/30 transition-colors"
            >
              <TelegramIcon size={20} className="text-shimmer-accent" />
              <span>{currentContent.telegram}: @stitch505</span>
            </a>
          </div>
        </div>

        <div className="max-w-3xl mx-auto">
          <Card className="glass overflow-hidden">
            <div className="p-6 md:p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      {currentContent.name}
                    </label>
                    <Input
                      id="name"
                      placeholder={currentContent.namePlaceholder}
                      required
                      className="glass border-white/30 bg-transparent"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {currentContent.email}
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder={currentContent.emailPlaceholder}
                      required
                      className="glass border-white/30 bg-transparent"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium">
                    {currentContent.subject}
                  </label>
                  <Input
                    id="subject"
                    placeholder={currentContent.subjectPlaceholder}
                    className="glass border-white/30 bg-transparent"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    {currentContent.message}
                  </label>
                  <Textarea
                    id="message"
                    placeholder={currentContent.messagePlaceholder}
                    required
                    rows={5}
                    className="glass border-white/30 bg-transparent"
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-shimmer-dark to-shimmer-accent hover:opacity-90 transition-opacity"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? currentContent.sending : currentContent.send}
                </Button>
              </form>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
