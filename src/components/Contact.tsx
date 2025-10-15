import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Telefone",
      content: "(41) 99576-4646",
      link: "https://wa.me/5541995764646",
    },
    {
      icon: Mail,
      title: "E-mail",
      content: "vendas@oliveiracamargometal.com.br",
      link: "mailto:vendas@oliveiracamargometal.com.br",
    },
    {
      icon: MapPin,
      title: "Endereço",
      content: "R. Padre Antonio Darius 635, São José dos Pinhais",
      link: null,
    },
    {
      icon: Clock,
      title: "Horário",
      content: "Segunda a quinta: 7h30 - 12h / 13h - 17h30 | Sexta: 7h30 - 12h / 13h - 16h30",
      link: null,
    },
  ];

  const socialMedia = [
    {
      icon: Instagram,
      name: "Instagram",
      link: "https://www.instagram.com/oliveiracamargometal",
    },
    {
      icon: Facebook,
      name: "Facebook",
      link: "https://www.facebook.com/metalurgicaoliveiracamargo",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Entre em contato</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Estamos prontos para atender você e transformar seu projeto em realidade
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <info.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{info.title}</h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-muted-foreground hover:text-primary transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-muted-foreground">{info.content}</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-8">
            <h3 className="text-xl font-semibold text-foreground mb-6">Siga-nos nas redes sociais</h3>
            <div className="flex justify-center gap-4">
              {socialMedia.map((social, index) => (
                <Button
                  key={index}
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <a href={social.link} target="_blank" rel="noopener noreferrer">
                    <social.icon className="mr-2 h-5 w-5" />
                    {social.name}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="text-center">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              asChild
            >
              <a href="https://wa.me/5541995764646" target="_blank" rel="noopener noreferrer">
                <Phone className="mr-2 h-5 w-5" />
                Fale conosco no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
