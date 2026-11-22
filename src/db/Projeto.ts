import Projeto from "../types/Projeto";

const projetos: Projeto[] = [
  {
    dataInicio: "Setembro de 2026",
    projeto: "Gralharia - Cofundador e Desenvolvedor",
    habilidades: ["Next.js"],
    descricao: `Plataforma voltada a artistas visuais, oferecendo ferramentas para gerenciamento de negócios, incluindo CRM, agenda, controle de estoque, acompanhamento de negociações por etapas e catálogo de obras de arte.
- Um dos responsáveis pela arquitetura da aplicação e pelo desenvolvimento Full Stack.
- Modelagem e estruturação do banco de dados.
- Implementação de funcionalidades e regras de negócio da plataforma.
- Participação na concepção e evolução técnica do produto.`,
    link: "https://gralharia.com.br/",
  },
  {
    dataInicio: "Setembro de 2023",
    dataFim: "Novembro de 2023",
    projeto: "Renault Transformation Day - Desafio Supply Chain",
    habilidades: ["Unity3D", "C#"],
    descricao: `- Desenvolvimento de protótipo 3D utilizando Unity e C#.
- Responsável pela documentação e registro das reuniões.
- Participação na preparação e realização da apresentação final do projeto vencedor.`,
    link: "https://www.uninter.com/noticias/alunos-da-uninter-vencem-o-premio-transformation-day-renault",
  },
  {
    projeto: "Comparador de Tabelas Simples",
    // data: "Jun. 2022",
    habilidades: ["Python", "Tkinter"],
    descricao: `- Desenvolvimento de interface gráfica utilizando Tkinter.
- Implementação da lógica de comparação e filtragem de dados com Python.`,
    link: "https://github.com/bcf513/ComparadorTabelasSimples",
  },
  // {
  //   projeto: "CodeLeap - Teste de Front-End",
  //   // data: "Abril 2022",
  //   habilidades: ["React", "Redux"],
  //   descricao:
  //     "Como teste para uma vaga de frontend júnior, desenvolvi um pequeno site para postagem de mensagens, que exibe uma página de erro quando usada uma URL inválida, usa proteção de rotas (caso o usuário não esteja logado), e Redux para gerenciamento dos dados",
  //   link: "https://codeleap-engineering-test-five.vercel.app/",
  // },
];

export default projetos;
