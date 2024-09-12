import { ReactComponent as WorkIcon } from "../../assets/svg/icons/work.svg";
import experienciasProfissionais from "../../db/ExperienciaProfissional";
import TypeExperienciaProfissional from "../../types/ExperienciaProfissional";

function Experiencia({
  experiencia,
}: Readonly<{ experiencia: TypeExperienciaProfissional }>) {
  const { dataInicio, dataFim, funcao, empresa, descricao } = experiencia;

  function capitalizeFirstLetter(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  function getDuracao(data: Date) {
    return capitalizeFirstLetter(
      data.toLocaleDateString("pt-BR", {
        month: "long",
        year: "numeric",
      })
    );
  }

  return (
    <div className="curso">
      <div className="container-data">
        <p className="data-curso">{getDuracao(dataInicio)}</p>
        {dataFim && <p className="data-curso"> - {getDuracao(dataFim)}</p>}
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
          {experienciasProfissionais.map((experiencia, index) => (
            <div key={index}>
              <Experiencia experiencia={experiencia} />
              {index !== experienciasProfissionais.length - 1 && (
                <div className="divider-container">
                  <hr />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ExperienciaProfissional;
//<img src={WorkIcon} alt="" className="svg" />
