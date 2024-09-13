import { ReactComponent as LanguageIcon } from "../../assets/svg/icons/language.svg";
import { ReactComponent as BookIcon } from "../../assets/svg/icons/book.svg";
import { ReactComponent as SchoolIcon } from "../../assets/svg/icons/school.svg";
import TypeCurso from "../../types/Curso";
import cursos from "../../db/Curso";
import { Fragment } from "react";

function Curso({ curso }: { curso: TypeCurso }) {
  const { data, instituicao, cursos } = curso;
  return (
    <div className="curso">
      <div className="container-data">
        {data && <p className=" data-curso">{data}</p>}
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
  const cursosFormacao = cursos.filter((curso) => curso.formacao);
  const cursosCursos = cursos.filter((curso) => !curso.formacao);

  return (
    <div id="formacao" className="secao formacao background">
      <div className="subsecao">
        <div className="icone-e-texto  ">
          <SchoolIcon />
          <h2>Formação</h2>
        </div>
        <div className="lista-cursos">
          {cursosFormacao.map((curso, index) => {
            if (curso.formacao)
              return (
                <Fragment key={"formacao-fragment-" + index.toString()}>
                  <Curso key={"formacao-" + index.toString()} curso={curso} />
                  {index !== cursosFormacao.length - 1 && (
                    <div className="divider-container">
                      <hr />
                    </div>
                  )}
                </Fragment>
              );
          })}
        </div>
      </div>
      <div className="subsecao">
        <div className="icone-e-texto ">
          <BookIcon />
          <h2>Cursos</h2>
        </div>
        <div className="lista-cursos">
          {cursosCursos.map((curso, index) => {
            if (!curso.formacao)
              return (
                <Fragment key={"formacao-fragment-" + index.toString()}>
                  <Curso key={index.toString()} curso={curso} />
                  {index !== cursosCursos.length - 1 && (
                    <div className="divider-container">
                      <hr />
                    </div>
                  )}
                </Fragment>
              );
          })}
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
