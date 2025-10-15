import { Zap, Settings, Wrench, Sparkles, Hammer, Paintbrush, Lightbulb, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const Services = () => {
  const services = [
    {
      icon: Zap,
      title: "Corte a laser de chapas",
      description:
        "Corte de chapas metálicas com alta precisão e excelente acabamento. Capacidade para diferentes espessuras e dimensões. Ideal para protótipos, séries pequenas e grandes produções.",
    },
    {
      icon: Settings,
      title: "Dobra CNC e CN",
      description:
        "Dobragem de chapas com precisão garantida por comando numérico computadorizado. Capacidade de até 3/8\" de espessura e 3.000 mm de comprimento. Execução de peças complexas com repetibilidade e acabamento superior.",
    },
    {
      icon: Wrench,
      title: "Dobra de tubos",
      description:
        "Dobragem de tubos metálicos até 1\"1/2 de diâmetro e 2,00 mm de espessura. Produção de peças tubulares para estruturas, suportes e componentes industriais.",
    },
    {
      icon: Sparkles,
      title: "Soldagem MIG e montagem",
      description:
        "Soldagem com alta resistência e acabamento técnico. Montagem de conjuntos metálicos conforme desenho ou especificação técnica. Solda limpa, uniforme e com controle de deformações.",
    },
    {
      icon: Hammer,
      title: "Acabamento e tratamento superficial",
      description:
        "Processos de lixamento, rebarbação e limpeza industrial. Preparação das superfícies para pintura ou revestimento.",
    },
    {
      icon: Paintbrush,
      title: "Pintura eletrostática a pó",
      description:
        "Aplicação com cabine própria e estufa de cura. Alta durabilidade, resistência à corrosão e acabamento estético premium. Disponibilidade em diversas cores e texturas.",
    },
    {
      icon: Lightbulb,
      title: "Projetos e desenvolvimento técnico",
      description:
        "Elaboração de projetos industriais sob medida, de acordo com a necessidade do cliente. Desenvolvimento de peças, conjuntos e protótipos com suporte técnico de engenharia. Adaptação e otimização de desenhos para corte, dobra e solda.",
    },
    {
      icon: Users,
      title: "Consultoria técnica e parcerias",
      description:
        "Apoio técnico na viabilidade e melhoria de processos produtivos. Parcerias de longo prazo com foco em eficiência, redução de custos e qualidade final.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nossos serviços</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Soluções completas em metalmecânica com tecnologia de ponta e equipe especializada
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={index}
              className="border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg"
            >
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
