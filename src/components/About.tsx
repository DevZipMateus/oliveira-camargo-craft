const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
            Sobre nós
          </h2>

          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              Com mais de 20 anos de experiência no setor metalmecânico, nossa empresa nasceu da
              visão empreendedora do engenheiro mecânico Flávio, formado em 1972 em São Paulo, e de
              sua sócia Márcia, administradora dedicada à excelência em gestão e relacionamento com
              clientes.
            </p>

            <p>
              Desde sua fundação, a empresa vem se renovando de geração em geração, mantendo viva a
              essência que a consolidou no mercado: ética, qualidade e comprometimento. Nossa
              trajetória foi moldada por desafios e superações, mas sempre guiada por um propósito
              claro — entregar soluções industriais precisas, confiáveis e sob medida para cada
              necessidade.
            </p>

            <p>
              Instalada em sede própria em São José dos Pinhais desde 2002, investimos
              continuamente em tecnologia, capacitação e inovação. Contamos com modernos
              equipamentos de corte a laser para chapas, guilhotina, dobradeiras CNC e CN com
              capacidade de até 3/8" de espessura e 3000 mm de comprimento, além de dobras de tubos
              até 1"1/2 de diâmetro com espessura de até 2,00 mm.
            </p>

            <p>
              Oferecemos também soldagem MIG, acabamento técnico e pintura eletrostática a pó,
              garantindo agilidade, precisão e qualidade em cada etapa do processo produtivo.
            </p>

            <p className="text-primary font-semibold text-xl">
              Mais do que uma indústria, somos uma empresa movida por parcerias duradouras e
              confiança mútua.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
