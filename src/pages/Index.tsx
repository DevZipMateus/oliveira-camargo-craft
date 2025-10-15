import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Mission from "@/components/Mission";
import VideoCarousel from "@/components/VideoCarousel";
import Gallery from "@/components/Gallery";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <Services />
      <Mission />
      <VideoCarousel />
      <Gallery />
      <Contact />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
