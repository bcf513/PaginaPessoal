import Foto from "../../assets/images/Minha_Foto.png";
import "./Introducao.modules.css";

function Tag({ ferramenta }: { ferramenta: string }) {
  return <p className="tag-ferramenta">{ferramenta}</p>;
}

function Introducao() {
  return (
    <div className="introducao">
      <div className="introducao-conteudo">
        <img src={Foto} alt="" />
        <div className="texto-introducao">
          <h2>Desenvolvedor Front End</h2>
          <p className="descricao-introducao">
            Vivência de mais de <strong>4 anos</strong> em assistência técnica,
            busco <strong>primeira oportunidade</strong> no mercado de
            desenvolvimento de software.
          </p>
          <div className="ferramentas">
            <Tag ferramenta="Typescript" />
            <Tag ferramenta="React" />
            <Tag ferramenta="Python" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introducao;
