import { ReactComponent as CodeIcon } from "../../assets/svg/icons/code.svg";

type IExperiencia = {
  projeto: string,
  data: string;
  habilidades: string[];
  descricao: string;
  link: string
};

function Experiencia({
  projeto,
  data,
  habilidades,
  descricao,
  link
}: IExperiencia) {
  return (
    <div className="curso">
      <div className="container-data">
        <p className="data-curso">{data}</p>
      </div>
      <div className="nome-descricao-curso">
        <strong className="nome-instituicao">{projeto}</strong>
        <div className="ferramentas">
          {habilidades.map(habilidade => <>
            <p className="tag-ferramenta">{habilidade}</p>
          </>)}
        </div>
        {/* <p className="nome-curso">
          <strong>{funcao}</strong>
        </p> */}
        <p className="descricao">{descricao}</p>
        <a className="link" href={link}>{link}</a>
      </div>
    </div>
  );
}

function ExperienciaNaArea() {
  return (
    <div
      id="experiencia-na-area"
      className="secao experiencia-na-area background"
    >
      <div className="subsecao">
        <div className="icone-e-texto">
          <CodeIcon />
          <h2>Experiência na Área</h2>
        </div>
        <div className="lista-cursos">
          <Experiencia
            projeto="Renault Transformation Day - Desafio Supply Chain"
            data="Set. 2023 - Nov. 2023"
            habilidades={["Unity3D", "C#"]}
            descricao="Fiz parte de um projeto que propôs uma solução para problemas na cadeia de suprimentos da Renault; fiquei responsável por fazer um protótipo 3D com Unity, além de tomar notas de cada reunião e fazer a apresentação final, em que nossa equipe venceu contra o projeto da Universidade Positivo"
            link="www.uninter.com/noticias/alunos-da-uninter-vencem-o-premio-transformation-day-renault"
          />
          <div className="divider-container">
            <hr />
          </div>
          <Experiencia
            projeto="Comparador de Tabelas Simples"
            data="Junho 2022"
            habilidades={["Python", "Tkinter"]}
            descricao="Um simples programa que fiz para ajudar a empresa em que meu pai trabalhava, que compara dados em duas planilhas de Excel, e gera uma nova com dados filtrados, utilizando a ferramenta Tkinter para criar uma simples interface"
            link="https://github.com/bcf513/ComparadorTabelasSimples"
          />
          <div className="divider-container">
            <hr />
          </div>
          <Experiencia
            projeto="CodeLeap - Teste de Front-End"
            data="Abril 2022"
            habilidades={["React", "Redux"]}
            descricao="Como teste para uma vaga de frontend júnior, desenvolvi um pequeno site para postagem de mensagens, que exibe uma página de erro quando usada uma URL inválida, usa proteção de rotas (caso o usuário não esteja logado), e Redux para gerenciamento dos dados"
            link="codeleap-engineering-test-five.vercel.app/"
          />
        </div>
      </div>
    </div>
  );
}

export default ExperienciaNaArea;
