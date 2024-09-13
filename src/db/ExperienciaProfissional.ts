import ExperienciaProfissional from "../types/ExperienciaProfissional";

const ExperienciasProfissionais: ExperienciaProfissional[] = [
  {
    dataInicio: new Date("2024-09-13"),
    // dataFim: new Date("2025-01-09"),
    funcao: "Desenvolvedor Full Stack",
    empresa: "M1 Motors",
    descricao: "Desenvolvimento de sites",
    desenvolvedor: true,
  },
  {
    dataInicio: new Date("2024-02-09"),
    dataFim: new Date("2024-09-09"),
    funcao: "Desenvolvedor Full Stack",
    empresa:
      "Assembleia Legislativa do Paraná - Assessor Parlamentar de Deputado Estadual",
    descricao:
      "Desenvolvimento de sites utilizando Python, Flask e Jinja2 no back end, e HTML, CSS e Javascript no front end, e MongoDB como banco de dados, junto de uma equipe organizando tarefas com quadro Kanban",
    desenvolvedor: true,
  },
  {
    dataInicio: new Date("2022-07-05"),
    dataFim: new Date("2024-02-05"),
    funcao: "Assistente Técnico em Eletrônica",
    empresa: "Mastercorp do Brasil",
    descricao:
      "Suporte remoto ao cliente, análise e conserto de impressoras térmicas",
    desenvolvedor: false,
  },
  {
    dataInicio: new Date("2017-07-01"),
    dataFim: new Date("2020-03-01"),
    funcao: "Assistente Técnico em Eletrônica",
    empresa: "Cel Expresso Equipamentos de Comunicação",
    descricao:
      "Análise de defeito de aparelho celular, reparo por solda SMD e BGA e testes após reparo",
    desenvolvedor: false,
  },
];

export default ExperienciasProfissionais;
