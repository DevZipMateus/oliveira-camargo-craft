import { Target, Eye, Heart } from "lucide-react";

const Mission = () => {
  const values = [
    {
      icon: Target,
      title: "Missão",
      content:
        "Entregar soluções metalmecânicas com agilidade, qualidade e confiança, fortalecendo parcerias e oferecendo produtos e serviços que agregam valor real aos negócios de nossos clientes.",
    },
    {
      icon: Eye,
      title: "Visão",
      content:
        "Ser reconhecida no mercado como uma indústria parceira e confiável, que combina tecnologia, experiência e compromisso para transformar projetos em resultados de alto desempenho.",
    },
    {
      icon: Heart,
      title: "Valores",
      content: [
        "Ética e transparência: Construímos relações sólidas baseadas na confiança e no respeito.",
        "Qualidade: Cada produto reflete o nosso compromisso com a excelência.",
        "Agilidade: Respondemos rápido, sem abrir mão da precisão e do padrão de entrega.",
        "Parceria: Crescemos junto com nossos clientes, compartilhando objetivos e conquistas.",
        "Flexibilidade: Desenvolvemos soluções sob medida, sem limitações de tamanho ou complexidade.",
        "Comprometimento: Cumprimos o que prometemos, sempre.",
        "Inovação: Buscamos constantemente novas formas de aprimorar processos e resultados.",
      ],
    },
  ];

  return (
    <section id="mission" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Missão, visão e valores
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {values.map((item, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 hover:shadow-lg transition-all duration-300 hover:border-primary/50"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6 mx-auto">
                <item.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-center text-foreground mb-4">
                {item.title}
              </h3>
              {Array.isArray(item.content) ? (
                <ul className="space-y-3">
                  {item.content.map((value, idx) => (
                    <li key={idx} className="text-muted-foreground leading-relaxed">
                      <span className="font-semibold text-foreground">
                        {value.split(":")[0]}:
                      </span>
                      {value.split(":")[1]}
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-muted-foreground text-center leading-relaxed">{item.content}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Mission;
