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
  "/galeria/videos/midia_185.mp4",
  "/galeria/videos/midia_186.mp4",
  "/galeria/videos/midia_187.mp4",
  "/galeria/videos/midia_188.mp4",
  "/galeria/videos/midia_189.mp4",
  "/galeria/videos/midia_190.mp4",
  "/galeria/videos/midia_191.mp4",
  "/galeria/videos/midia_192.mp4",
  "/galeria/videos/midia_193.mp4",
  "/galeria/videos/midia_194.mp4",
];

const VideoCarousel = () => {
  const [api, setApi] = useState<CarouselApi>();
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const handleVideoEnded = (index: number) => {
    if (api && index < videos.length - 1) {
      api.scrollNext();
    } else if (api && index === videos.length - 1) {
      api.scrollTo(0);
    }
  };

  return (
    <section id="videos" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nossos Trabalhos
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Confira alguns dos nossos projetos e serviços realizados
          </p>
        </div>

        <div className="flex items-center justify-center">
          <Carousel
            setApi={setApi}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-3xl"
          >
            <CarouselContent>
              {videos.map((videoSrc, index) => (
                <CarouselItem key={index}>
                  <div className="p-4">
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
    </section>
  );
};

export default VideoCarousel;
