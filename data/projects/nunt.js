const nunt = {

  slug: "nunt",

  title: "Nunt",

  image: "/images/nunt/capa.png",

  tags: [
    "UX Design",
    "UI Design",
    "Product Strategy",
    "MVP",
    "Low-code",
    "Health Tech",
    "B2B",
  ],

  sections: [

    {
      title: "Contexto",

      content:
        "Nunt foi um projeto desenvolvido em 2021 com o objetivo de criar uma solução B2B para monitoramento contínuo da saúde mental de colaboradores em ambiente corporativo. A proposta era ajudar empresas a acompanhar indicadores de bem-estar e oferecer recursos de apoio emocional por meio de uma experiência simples e acessível para os usuários finais. Atuei como UX/UI Designer na definição da estratégia do produto e no desenho da experiência, equilibrando valor para empresas, engajamento dos colaboradores e viabilidade de implementação.",
    },

    {
      title: "Problema",

      content:
        "O desafio era criar um produto capaz de gerar valor para dois públicos com necessidades diferentes: empresas e colaboradores. O objetivo era garantir que o produto fosse percebido como um benefício contínuo e não como mais uma tarefa dentro da rotina de trabalho.",

      list: [
        "Criar um MVP atrativo para demonstrar valor do investimento",
        "Desenvolver uma experiência simples para aumentar adesão",
        "Construir uma solução escalável dentro das restrições do contexto B2B",
      ],
    },

    {
      title: "Hipóteses",

      content:
        "Partimos da hipótese de que combinar acompanhamento contínuo com baixa fricção aumentaria adoção e engajamento ao longo do tempo. A primeira direção explorada considerava uma estrutura mais robusta para atender administradores e colaboradores.",

      list: [
        "Dashboard administrativo",
        "Gestão de equipes e usuários",
        "Métricas e indicadores",
        "Dashboard individual",
        "Autoavaliação e incentivo ao engajamento",
      ],
    },

    {
      title: "Processo",

      content:
        "Durante a descoberta conduzimos pesquisas qualitativas e quantitativas, desk research e benchmark para compreender barreiras de adoção, contexto corporativo e necessidades dos diferentes perfis. Na ideação utilizamos frameworks colaborativos e priorizamos decisões alinhadas entre negócio, experiência e viabilidade técnica.",

      list: [
        "Entrevistas qualitativas e quantitativas",
        "Desk research",
        "Benchmark",
        "Brainstorming",
        "Value Proposition Canvas",
        "Priorização com stakeholders",
      ],
    },

    {
      title: "Decisão estratégica",

      content:
        "Durante a validação do escopo identificamos que a solução completa exigiria mais de um ano de desenvolvimento, mesmo utilizando APIs para acelerar parte da implementação. Esse cenário levou o time a revisar prioridades e redefinir o MVP.",

      list: [
        "Redução do escopo",
        "Priorização das hipóteses centrais",
        "Busca por menor custo de implementação",
        "Preservação do valor percebido",
      ],

      galleries: [

        {
        
            images: [
                "/images/nunt/dashboard-adm-1-home.png",
                "/images/nunt/dashboard-adm-2-checkout.png",
                "/images/nunt/dashboard-adm-3-burnout.png",
                "/images/nunt/dashboard-adm-4-settings.png",
            ],

            caption:
                "Primeira proposta do dashboard administrativo explorando gestão, métricas e acompanhamento contínuo.",
        },

        {
            columns: 3,
            images: [
                "/images/nunt/formulario-colaborador-1.png",
                "/images/nunt/formulario-colaborador-2.png",
                "/images/nunt/formulario-colaborador-3.png",
            ],

            caption:
                "Fluxo inicial de acompanhamento dos colaboradores.",
        },

      ],

    },

    {
      title: "Solução",

      content:
        "Para reduzir complexidade e acelerar entrega, o produto evoluiu para uma abordagem low-code focada nas funcionalidades essenciais. A experiência foi simplificada para concentrar esforços em captura de dados, automação e geração de valor para as empresas.",

      list: [
        "Cadastro e ativação da empresa",
        "Convites automáticos por e-mail",
        "Formulário de feedback dos colaboradores",
        "Configuração da frequência dos relatórios",
        "Entrega de insights por e-mail",
      ],
    },

    {
      title: "Fluxo final",

      content:
        "A jornada final passou a conectar cadastro, ativação e acompanhamento contínuo com menor esforço operacional.",

      list: [
        "(1) Cadastro na landing page",
        "(2) Acesso administrativo",
        "(3) Convite aos colaboradores",
        "(4) Configuração dos relatórios",
      ],

      galleries: [

        {
          images: [
            "/images/nunt/fluxo-de-cadastro.png",
            "/images/nunt/pagina-relatorio.png",
          ],

          caption:
            "Fluxo administrativo final construído na estratégia low-code.",
        },

      ],

    },

    {
      title: "Resultados",

      content:
        "A redução estratégica do escopo permitiu transformar uma solução inicialmente complexa em um MVP viável para validação. Ao substituir funcionalidades de alta complexidade por uma abordagem low-code, foi possível manter o objetivo central do produto e reduzir tempo de implementação.",

      list: [
        "Menor tempo de entrega",
        "Redução da complexidade técnica",
        "Maior foco em validação",
        "Preservação da proposta de valor",
      ],
    },

    {
      title: "Aprendizados",

      content:
        "Esse projeto reforçou que construir um MVP não significa reduzir valor — significa identificar o menor conjunto de funcionalidades capaz de validar uma hipótese. Também evidenciou como decisões de arquitetura e escopo impactam diretamente adoção, velocidade de entrega e sustentabilidade do produto.",
    },

  ],

};

export default nunt;