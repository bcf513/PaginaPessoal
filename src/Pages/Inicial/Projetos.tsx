import { Fragment } from "react";
import { ReactComponent as CodeIcon } from "../../assets/svg/icons/code.svg";
import TypeProjeto from "../../types/Projeto";
import projetos from "../../db/Projeto";

function Projeto({ projeto }: { projeto: TypeProjeto }) {
  const { dataInicio, dataFim, habilidades, descricao, link } = projeto;
  return (
    <div className="curso">
      <div className="container-data">
        {dataInicio && dataFim && (
          <>
            <p className="data-curso">{dataInicio}</p>
            <p className="data-curso data-curso-separator"> - </p>
            <p className="data-curso">{dataFim}</p>
          </>
        )}
      </div>
      <div className="nome-descricao-curso">
        <strong className="nome-instituicao">{projeto.projeto}</strong>
        <div className="ferramentas">
          {habilidades.map((habilidade, index) => (
            <Fragment key={"formacao-fragment-" + index.toString()}>
              <p className="tag-ferramenta">{habilidade}</p>
            </Fragment>
          ))}
        </div>
        <p className="descricao">{descricao}</p>
        <a className="link" href={link}>
          {link}
        </a>
      </div>
    </div>
  );
}

function Projetos() {
  return (
    <div
      id="experiencia-na-area"
      className="secao experiencia-na-area background"
    >
      <div className="subsecao">
        <div className="icone-e-texto">
          <CodeIcon />
          <h2>Projetos</h2>
        </div>
        <div className="lista-cursos">
          {projetos.map((projeto, index) => (
            <Fragment key={"projeto-fragment-" + index.toString()}>
              <Projeto projeto={projeto} />
              {projetos.length - 1 !== index && (
                <div className="divider-container">
                  <hr />
                </div>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Projetos;
