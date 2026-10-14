const fluxoCompraAtivacaoStreamings = {

  slug: "fluxo-compra-ativacao-streamings",

  title: "Fluxo de compra e ativação de streamings",

  image: "/images/fluxo-compra-ativacao.png",

  tags: [
    "Fluxo de usuário",
    "Claro TV+",
    "Experiência digital",
    "UX/UI Design",
  ],

  sections: [

    {
      title: "Contexto",

      content:
        "A Claro TV+ criou uma nova estratégia para aproveitar a base de clientes da Claro e oferecer pacotes com diferentes serviços de streaming. A contratação do pacote acontecia pelo aplicativo Claro Internet Móvel e, após a confirmação do pagamento, o novo assinante continuava sua jornada de ativação dos serviços contratados.",
    },

    {
      title: "Problema",

      content: [
        "O desafio era criar jornadas entre produtos diferentes. Após contratar o pacote, o usuário precisava ativar entre quatro e cinco serviços de streaming, cada um em sua respectiva plataforma. Como era um novo assinante da Claro tv+, havia a preocupação de que ele se perdesse durante esse processo ou não soubesse quais serviços ainda precisava ativar.",
        "Minha responsabilidade era estruturar a experiência dentro da Claro tv+ e entender como as etapas realizadas no aplicativo Claro Internet Móvel impactavam essa jornada.",
        ],
    },

    {
      title: "Investigação",

      content:
        "Para entender a jornada de ponta a ponta, fiz reuniões com a equipe da Claro Móvel para conhecer o fluxo de aquisição do produto e obter os fluxos existentes no aplicativo. Em paralelo, analisei os fluxos de ativação de diferentes serviços de streaming, identificando quais etapas eram comuns a todos os assinantes e quais eram específicas para usuários que haviam contratado a assinatura por meio da Claro.",
    },

    {
      title: "Insights",

      content: [
        "A análise mostrou que alguns serviços apresentavam baixa taxa de ativação e que a ativação não era uma única etapa, mas um conjunto de jornadas independentes. Cada serviço poderia ter seu próprio fluxo e, em alguns casos, regras específicas para assinaturas adquiridas pela Claro.",
        "Isso evidenciou a necessidade de dar ao usuário maior clareza sobre quais serviços estavam disponíveis, quais já haviam sido ativados e quais ainda estavam pendentes."
      ],
    },

    {
      title: "Ação",

      content:[
        "A partir dessas informações, criei e evoluí os fluxos da jornada na Claro tv+, utilizando-os para orientar as discussões com as equipes e validar as decisões ao longo do projeto.",
        "Também adaptei o sistema de alertas existente para informar aos usuários sobre os serviços pendentes de ativação, com opções de ativar ou ser lembrado depois. Além disso, criei um novo acesso no gerenciamento da assinatura da Claro tv+, direcionando o usuário para o aplicativo Claro Internet Móvel, onde o gerenciamento da assinatura era realizado."
      ],
    },

    {
      title: "Decisão",

      content: [
        "Optei por estruturar os fluxos visualmente desde o início para dar clareza a uma jornada que envolvia diferentes produtos e equipes. Conforme novas informações surgiam, os fluxos eram atualizados, permitindo identificar necessidades e alinhar as decisões durante as reuniões.",
        "Para a solução, priorizei o uso e a adaptação de estruturas já existentes, mantendo a consistência da experiência e evitando criar componentes desnecessariamente."
      ],
    },

    {
      title: "Resultado",

      content: [
        "Os fluxos foram implementados e a jornada passou a oferecer diferentes caminhos para ativação dos serviços, incluindo alertas na plataforma, acesso ao gerenciamento da assinatura e links enviados por e-mail.",
        "Também foi contemplado o cenário de usuários que já possuíam uma assinatura de algum streaming, com uma regra para conversão da assinatura existente para o novo pacote."
      ],
    },

    {
      title: "Aprendizados",

      content:
        "O projeto reforçou a importância de compreender o ecossistema além da interface pela qual sou responsável. Como Product Designer, acompanhar decisões de diferentes equipes me permite antecipar cenários, colaborar melhor e criar experiências mais coerentes entre produtos.",
    },

  ],

};
export default fluxoCompraAtivacaoStreamings;