import Projeto from "../types/Projeto";

const projetos: Projeto[] = [
  {
    dataInicio: "Setembro de 2023",
    dataFim: "Novembro de 2023",
    projeto: "Renault Transformation Day - Desafio Supply Chain",
    habilidades: ["Unity3D", "C#"],
    descricao:
      "Fiz parte de um projeto que propôs uma solução para problemas na cadeia de suprimentos da Renault; fiquei responsável por fazer um protótipo 3D com Unity, além de tomar notas de cada reunião e fazer a apresentação final, em que nossa equipe venceu contra o projeto da Universidade Positivo",
    link: "https://www.uninter.com/noticias/alunos-da-uninter-vencem-o-premio-transformation-day-renault",
  },
  {
    projeto: "Comparador de Tabelas Simples",
    // data: "Jun. 2022",
    habilidades: ["Python", "Tkinter"],
    descricao:
      "Um simples programa que fiz para ajudar a empresa em que meu pai trabalhava, que compara dados em duas planilhas de Excel, e gera uma nova com dados filtrados, utilizando a ferramenta Tkinter para criar uma simples interface",
    link: "https://github.com/bcf513/ComparadorTabelasSimples",
  },
  {
    projeto: "CodeLeap - Teste de Front-End",
    // data: "Abril 2022",
    habilidades: ["React", "Redux"],
    descricao:
      "Como teste para uma vaga de frontend júnior, desenvolvi um pequeno site para postagem de mensagens, que exibe uma página de erro quando usada uma URL inválida, usa proteção de rotas (caso o usuário não esteja logado), e Redux para gerenciamento dos dados",
    link: "https://codeleap-engineering-test-five.vercel.app/",
  },
];

export default projetos;
