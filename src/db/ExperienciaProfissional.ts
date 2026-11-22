import ExperienciaProfissional from "../types/ExperienciaProfissional";

const ExperienciasProfissionais: ExperienciaProfissional[] = [
  {
    dataInicio: new Date("2024-12-09"),
    dataFim: new Date("2025-10-03"),
    funcao: "Desenvolvedor Backend",
    empresa: "Iceberg Security",
    descricao: `- Adaptação e desenvolvimento da página principal da empresa.
- Migração da página de PHP para Django (Python).
- Desenvolvimento de plataforma para identificação de possíveis clonagens de sites, utilizando mecanismos de monitoramento e identificação por pixel de rastreamento, CSS e JavaScript.
- Integração com banco de dados PostgreSQL.
- Desenvolvimento em ambiente Kubuntu (Linux).`,
    desenvolvedor: true,
    tecnologias: ["Django (Python)", "PostgreSQL"],
  },
  {
    dataInicio: new Date("2024-09-13"),
    dataFim: new Date("2024-11-11"),
    funcao: "Desenvolvedor Backend",
    empresa: "M1 Motors",
    descricao: `- Desenvolvimento, em equipe, de sistema para compra e venda de veículos.
- Participação no desenvolvimento utilizando metodologia ágil (Kanban).
- Implementação do backend com Django (Python).
- Utilização de SQLite como banco de dados.`,
    desenvolvedor: true,
    tecnologias: ["Django (Python)", "Sqlite"],
  },
  {
    dataInicio: new Date("2024-02-09"),
    dataFim: new Date("2024-09-09"),
    funcao: "Desenvolvedor Full Stack",
    empresa:
      "Assembleia Legislativa do Paraná - Assessor Parlamentar de Deputado Estadual",
    descricao: `- Desenvolvimento, em equipe, de sistema para organização e gerenciamento de leads, contatos, agenda e eventos.
- Implementação do backend utilizando Flask (Python) e Jinja2.
- Desenvolvimento da interface com HTML, CSS e JavaScript.
- Integração com banco de dados MongoDB.
- Trabalho em equipe utilizando metodologia ágil (Kanban).`,
    desenvolvedor: true,
    tecnologias: ["Flask (Python)", "HTML", "CSS", "Javascript", "MongoDB"],
  },
  {
    dataInicio: new Date("2022-07-05"),
    dataFim: new Date("2024-02-05"),
    funcao: "Assistente Técnico em Eletrônica",
    empresa: "Mastercorp do Brasil",
    descricao: `- Atendimento e suporte remoto ao cliente.
- Análise, diagnóstico e manutenção de impressoras térmicas.
- Identificação e resolução de problemas técnicos em equipamentos eletrônicos.`,
    desenvolvedor: false,
  },
  {
    dataInicio: new Date("2017-07-01"),
    dataFim: new Date("2020-03-01"),
    funcao: "Assistente Técnico em Eletrônica",
    empresa: "Cel Expresso Equipamentos de Comunicação",
    descricao: `- Análise e diagnóstico de defeitos em aparelhos celulares.
- Realização de reparos eletrônicos utilizando técnicas de soldagem SMD e BGA.
- Execução de testes e verificações após os reparos.`,
    desenvolvedor: false,
  },
];

export default ExperienciasProfissionais;
