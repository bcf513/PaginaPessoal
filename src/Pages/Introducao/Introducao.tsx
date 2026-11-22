import Foto from "../../assets/images/Minha_Foto.png";
import "./Introducao.modules.css";
import experienciasProfissionais from "../../db/ExperienciaProfissional";

function Tag({ ferramenta }: { readonly ferramenta: string }) {
  return <p className="tag-ferramenta">{ferramenta}</p>;
}

function Introducao() {
  function calcularTempoDeExperiencia() {
    const experienciasProfissionaisNaArea = experienciasProfissionais.filter(
      (experiencia) => experiencia.desenvolvedor,
    );

    const dataAtual = new Date();
    let mesesDeExperiencia = 0;

    experienciasProfissionaisNaArea.forEach((experiencia) => {
      const dataInicio = experiencia.dataInicio;
      const dataFim = experiencia.dataFim || dataAtual;

      const anoInicio = dataInicio.getFullYear();
      const anoFim = dataFim.getFullYear();

      const mesesDeExperienciaNaEmpresa =
        (anoFim - anoInicio) * 12 +
        (dataFim.getMonth() - dataInicio.getMonth());

      mesesDeExperiencia += mesesDeExperienciaNaEmpresa;
    });

    let textoExperiencia = "";

    const anosDeExperiencia = Math.floor(mesesDeExperiencia / 12);

    if (mesesDeExperiencia > 11) {
      textoExperiencia = `${anosDeExperiencia} ${
        anosDeExperiencia === 1 ? "ano" : "anos"
      }`;
      if (mesesDeExperiencia % 12 !== 0) {
        textoExperiencia += " e ";
      }
    }

    if (mesesDeExperiencia % 12 !== 0) {
      if (mesesDeExperiencia - anosDeExperiencia * 12 === 1) {
        textoExperiencia += `1 mês`;
      } else {
        textoExperiencia += `${
          mesesDeExperiencia - anosDeExperiencia * 12
        } meses`;
      }
    }

    return textoExperiencia;
  }

  return (
    <div className="introducao background">
      <div className="introducao-conteudo">
        <div className="container-foto">
          <img src={Foto} alt="" />
        </div>
        <div className="texto-introducao">
          <h2>Desenvolvedor Full Stack</h2>
          <p className="descricao-introducao">
            Cerca de <strong>{calcularTempoDeExperiencia()}</strong> de
            experiência profissional em desenvolvimento de software e mais de{" "}
            <strong>4 anos</strong> de experiência em assistência técnica em
            eletrônica. Experiência no desenvolvimento de aplicações web,
            sistemas de gerenciamento, integração com bancos de dados e trabalho
            em equipes utilizando metodologias ágeis. Busco{" "}
            <strong>novas oportunidades</strong> para ampliar minha experiência
            e contribuir com o desenvolvimento de soluções tecnológicas.
          </p>
          <div className="ferramentas">
            <Tag ferramenta="Typescript" />
            <Tag ferramenta="Next.js" />
            <Tag ferramenta="React" />
            <Tag ferramenta="Python" />
            <Tag ferramenta="Git" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introducao;
