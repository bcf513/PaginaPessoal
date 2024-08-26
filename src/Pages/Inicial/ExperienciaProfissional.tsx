import { ReactComponent as WorkIcon } from "../../assets/svg/icons/work.svg";

type IExperienciaProfissional = {
  data: string;
  funcao: string;
  empresa: string;
  descricao: string;
};

function Experiencia({
  data,
  funcao,
  empresa,
  descricao,
}: IExperienciaProfissional) {
  return (
    <div className="curso">
      <div className="container-data">
        <p className="data-curso">{data}</p>
      </div>
      <div className="nome-descricao-curso">
        <p className="nome-instituicao">{empresa}</p>
        <p className="nome-curso">
          <strong>{funcao}</strong>
        </p>
        <p className="descricao">{descricao}</p>
      </div>
    </div>
  );
}

function ExperienciaProfissional() {
  return (
    <div
      id="experiencia-profissional"
      className="secao experiencia-profissional background"
    >
      <div className="subsecao">
        <div className="icone-e-texto">
          <WorkIcon />
          <h2>Experiência Profissional</h2>
        </div>
        <div className="lista-cursos">
          <Experiencia
            data="2024"
            funcao="Assessor Parlamentar (Programador)"
            empresa="Assembleia Legislativa do Paraná - Deputado Estadual"
            descricao="Desenvolvimento de sites utilizando Python, Flask e Jinja2 no backend, e HTML, CSS e Javascript no frontend, e MongoDB como banco de dados"
          />
          <div className="divider-container">
            <hr />
          </div>
          <Experiencia
            data="2022 - 2024"
            funcao="Assistente Técnico em Eletrônica"
            empresa="Mastercorp do Brasil"
            descricao="Suporte remoto ao cliente, análise e conserto de impressoras térmicas"
          />
          <div className="divider-container">
            <hr />
          </div>
          <Experiencia
            data="2017 - 2020"
            funcao="Assistente Técnico em Eletrônica"
            empresa="Cel Expresso Equipamentos de Comunicação"
            descricao="Análise de defeito de aparelho celular, reparo por solda SMD e BGA e testes após reparo"
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienciaProfissional;
//<img src={WorkIcon} alt="" className="svg" />
