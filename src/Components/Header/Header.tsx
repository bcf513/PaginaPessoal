import "./Header.modules.css";

function ScrollToElement({
  elementId,
  elementText,
}: {
  elementId: string;
  elementText: string;
}) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Evita o redirecionamento padrão
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <a href="#" onClick={scrollTo}>
      {elementText}
    </a>
  );
}

function Header() {
  return (
    <header>
      <div className="conteudo">
        <div>
          <p className="nome">Bruno Colaço Ferreira</p>
        </div>
        <div className="links">
          <ScrollToElement
            elementId="experiencia-profissional"
            elementText="Experiência"
          />
          <ScrollToElement elementId="formacao" elementText="Formação" />
          <ScrollToElement elementId="contato" elementText="Contato" />
        </div>
      </div>
    </header>
  );
}

export default Header;
