import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useState, useRef } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

const videos = [
  "/galeria/videos/midia_174.mp4",
  "/galeria/videos/midia_175.mp4",
  "/galeria/videos/midia_176.mp4",
  "/galeria/videos/midia_177.mp4",
  "/galeria/videos/midia_178.mp4",
  "/galeria/videos/midia_179.mp4",
  "/galeria/videos/midia_180.mp4",
  "/galeria/videos/midia_181.mp4",
  "/galeria/videos/midia_182.mp4",
  "/galeria/videos/midia_183.mp4",
  "/galeria/videos/midia_184.mp4",
];

const Hero = () => {
  const [api, setApi] = useState<CarouselApi>();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const handleVideoEnded = (index: number) => {
    if (api && index < videos.length - 1) {
      api.scrollNext();
    } else if (api && index === videos.length - 1) {
      api.scrollTo(0);
    }
  };

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };
  return <section id="hero" className="min-h-screen flex items-center justify-center pt-20 relative bg-gradient-to-br from-background via-background to-secondary" style={{
    backgroundImage: "url('/hero-bg.jpg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat"
  }}>
      
      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
          {/* Texto à esquerda */}
          <div className="text-center lg:text-left backdrop-blur-sm p-8 rounded-lg shadow-lg bg-white/[0.37]">
            <div className="mb-8 flex justify-center lg:justify-start">
              <img src="/logo.png" alt="Logo Oliveira Camargo Metal" className="h-32 w-auto animate-fade-in" />
            </div>

            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 animate-fade-in">
              Oliveira Camargo Metal
            </h1>

            <h2 className="text-xl md:text-2xl mb-8 animate-fade-in text-slate-950">
              Soluções metalmecânicas de alta qualidade com mais de 20 anos de experiência.
              Corte a laser, dobra CNC, soldagem MIG e pintura eletrostática.
            </h2>

            <p className="text-2xl md:text-3xl font-semibold text-primary mb-12 animate-fade-in">
              "Não prospectamos clientes, formamos parceiros."
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-fade-in">
              <Button size="lg" onClick={scrollToContact} className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Solicite um orçamento
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button size="lg" variant="outline" asChild className="border-primary/60 text-primary hover:bg-primary hover:text-primary-foreground">
                <a href="https://wa.me/5541995764646" target="_blank" rel="noopener noreferrer">
                  Fale no WhatsApp
                </a>
              </Button>
            </div>
          </div>

          {/* Carrossel de vídeos à direita */}
          <div className="flex items-center justify-center">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full max-w-md"
            >
              <CarouselContent>
                {videos.map((videoSrc, index) => (
                  <CarouselItem key={index}>
                    <div className="backdrop-blur-sm p-4 rounded-lg shadow-lg bg-white/[0.37]">
                      <video
                        ref={(el) => (videoRefs.current[index] = el)}
                        autoPlay
                        muted
                        playsInline
                        className="w-full h-auto rounded-lg shadow-xl"
                        onEnded={() => handleVideoEnded(index)}
                      >
                        <source src={videoSrc} type="video/mp4" />
                        Seu navegador não suporta a tag de vídeo.
                      </video>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;