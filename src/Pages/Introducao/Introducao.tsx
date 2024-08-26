import Foto from "../../assets/images/Minha_Foto.png";
import "./Introducao.modules.css";

function Tag({ ferramenta }: { ferramenta: string }) {
  return <p className="tag-ferramenta">{ferramenta}</p>;
}

function Introducao() {
  return (
    <div className="introducao background">
      <div className="introducao-conteudo">
        <img src={Foto} alt="" />
        <div className="texto-introducao">
          <h2>Desenvolvedor Front End</h2>
          <p className="descricao-introducao">
            Tenho experiência de mais de <strong>4 anos</strong> em assistência técnica, 
            <strong>cerca de 7 meses</strong> como programador, 
            e estou em busca de <strong>novas experiências</strong> na minha carreira em desenvolvimento de software.
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
