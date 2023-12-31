import { ReactComponent as LanguageIcon } from "../../assets/svg/icons/language.svg";
import { ReactComponent as BookIcon } from "../../assets/svg/icons/book.svg";
import { ReactComponent as SchoolIcon } from "../../assets/svg/icons/school.svg";

type ICurso = {
  data: string;
  instituicao: string;
  cursos: string[];
};

function Curso({ data, instituicao, cursos }: ICurso) {
  return (
    <div className="curso">
      <div className="container-data">
        <p className=" data-curso">{data}</p>
      </div>
      <div className="nome-descricao-curso">
        <p className="nome-instituicao">{instituicao}</p>
        {cursos.map((curso, id) => (
          <p key={id.toString()} className="nome-curso">
            <strong>{curso}</strong>
          </p>
        ))}
      </div>
    </div>
  );
}

function Formacao() {
  return (
    <div id="formacao" className="secao formacao background">
      <div className="subsecao">
        <div className="icone-e-texto  ">
          <SchoolIcon />
          <h2>Formação</h2>
        </div>
        <div className="lista-cursos">
          <Curso
            data="Prev. 2024"
            instituicao="Uninter"
            cursos={["Análise e Desenvolvimento de Sistemas"]}
          />
          <div className="divider-container">
            <hr />
          </div>
          <Curso
            data="2016"
            instituicao="Senai"
            cursos={["Técnico em Eletroeletrônica"]}
          />
        </div>
      </div>
      <div className="subsecao">
        <div className="icone-e-texto ">
          <BookIcon />
          <h2>Cursos</h2>
        </div>
        <div className="lista-cursos">
          <Curso
            data="2023"
            instituicao="Origamid"
            cursos={[
              "UI Design para Iniciantes - 34h",
              "Typescript para Iniciantes - 22h",
              "React com Typescript - 10h",
            ]}
          />
          <div className="divider-container">
            <hr />
          </div>
          <Curso
            data="2021"
            instituicao="Danki Code"
            cursos={["Desenvolvimento de Jogos - 87h"]}
          />
        </div>
      </div>
      <div className="subsecao">
        <div className="icone-e-texto ">
          <LanguageIcon />
          <h2>Idiomas</h2>
        </div>
        <div className="lista-idiomas">
          <p className="nome-curso">
            <strong>Português - Fluente</strong>
          </p>
          <p className="nome-curso">
            <strong>Inglês - Avançado</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Formacao;
