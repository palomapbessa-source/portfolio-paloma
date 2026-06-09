import ServiceItem from "./services/ServiceItem";
import ContactCTA from "./ContactCTA";


const services = [
  {
    title: "Estratégia e Descoberta",
    description:
      "Investigações que transformam contexto, comportamento e oportunidades em direcionamentos para priorização e tomada de decisão.",
    items: [
      "Pesquisa exploratória e desk research",
      "Benchmark e análise comparativa",
      "Mapeamento de jornada e pontos de atrito",
      "Construção e validação de hipóteses",
      "Workshops de alinhamento e definição de direcionamento",
    ],
  },

  {
    title: "UX/UI para Produtos Digitais",
    description:
      "Desenho jornadas e interfaces que equilibram usabilidade, objetivos estratégicos e consistência da experiência.",
    items: [
      "Arquitetura de informação e fluxos",
      "Wireframes e prototipação",
      "Design de interface (UI)",
      "Evolução e gestão de Design System",
      "Documentação para desenvolvimento",
    ],
  },

  {
    title: "Conversão e Crescimento",
    description:
      "Desenho experiências orientadas ao entendimento de valor, redução de esforço cognitivo e apoio à tomada de decisão.",
    items: [
      "Estratégia e estruturação de landing pages",
      "Revisão de experiência e oportunidades",
      "Comunicação de proposta de valor",
      "Priorização de hipóteses de melhoria",
      "Prototipação e validação de alternativas",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section
      id="servicos"
      className="
        py-16
        md:py-24
      "
      style={{background: "var(--gradient-soft)",}}
    >
      <div
        className="
          max-w-6xl
          mx-auto
          px-4
        "
      >
        <h2
          className="
            text-3xl
            md:text-4xl
            font-bold
            text-[var(--color-brand-primary-900)]
          "
        >
          Serviços
        </h2>

        <div className="mt-8 md:mt-16">
          {services.map((service, index) => (
            <div key={service.title}>
              <ServiceItem
                title={service.title}
                description={service.description}
                items={service.items}
              />

              {index < services.length - 1 && (
                <div
                  className="h-px bg-[var(--color-accent-500)]"
                />
              )}
            </div>
          ))}
        </div>
        <div className="mt-[60px]">
          <ContactCTA />
        </div>
      </div>
    </section>
  );
}