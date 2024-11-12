interface ExperienciaProfissional {
  dataInicio: Date;
  dataFim?: Date;
  funcao: string;
  empresa: string;
  descricao: string;
  desenvolvedor: boolean;
  tecnologias?: string[];
}

export default ExperienciaProfissional;
