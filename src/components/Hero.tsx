import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-background to-secondary pt-20"
    >
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <img
              src="/logo.png"
              alt="Logo Oliveira Camargo Metal"
              className="h-32 w-auto animate-fade-in"
            />
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
            Oliveira Camargo Metal
          </h1>

          <h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto animate-fade-in">
            Soluções metalmecânicas de alta qualidade com mais de 20 anos de experiência.
            Corte a laser, dobra CNC, soldagem MIG e pintura eletrostática.
          </h2>

          <p className="text-2xl md:text-3xl font-semibold text-primary mb-12 animate-fade-in">
            "Não prospectamos clientes, formamos parceiros."
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              onClick={scrollToContact}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Solicite um orçamento
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground"
            >
              <a href="https://wa.me/5541995764646" target="_blank" rel="noopener noreferrer">
                Fale no WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
