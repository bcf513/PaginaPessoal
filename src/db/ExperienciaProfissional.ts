import ExperienciaProfissional from "../types/ExperienciaProfissional";

const ExperienciasProfissionais: ExperienciaProfissional[] = [
  {
    dataInicio: "2024",
    dataFim: "2024",
    funcao: "Desenvolvedor Full Stack",
    empresa:
      "Assembleia Legislativa do Paraná - Assessor Parlamentar de Deputado Estadual",
    descricao:
      "Desenvolvimento de sites utilizando Python, Flask e Jinja2 no back end, e HTML, CSS e Javascript no front end, e MongoDB como banco de dados, junto de uma equipe organizando tarefas com quadro Kanban",
    desenvolvedor: true,
  },
  {
    dataInicio: "2022",
    dataFim: "2024",
    funcao: "Assistente Técnico em Eletrônica",
    empresa: "Mastercorp do Brasil",
    descricao:
      "Suporte remoto ao cliente, análise e conserto de impressoras térmicas",
    desenvolvedor: false,
  },
  {
    dataInicio: "2017",
    dataFim: "2020",
    funcao: "Assistente Técnico em Eletrônica",
    empresa: "Cel Expresso Equipamentos de Comunicação",
    descricao:
      "Análise de defeito de aparelho celular, reparo por solda SMD e BGA e testes após reparo",
    desenvolvedor: false,
  },
];

export default ExperienciasProfissionais;
