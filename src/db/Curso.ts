import Curso from "../types/Curso";

const cursos: Curso[] = [
  {
    data: "Prev. 2024",
    instituicao: "Uninter",
    cursos: ["Análise e Desenvolvimento de Sistemas"],
    formacao: true,
  },
  {
    data: "2016",
    instituicao: "Senai",
    cursos: ["Técnico em Eletroeletrônica"],
    formacao: true,
  },
  {
    instituicao: "Origamid",
    cursos: [
      "UI Design para Iniciantes - 34h",
      "Typescript para Iniciantes - 22h",
      "React com Typescript - 10h",
    ],
    formacao: false,
  },
  {
    instituicao: "Danki Code",
    cursos: ["Desenvolvimento de Jogos - 87h"],
    formacao: false,
  },
];

export default cursos;
