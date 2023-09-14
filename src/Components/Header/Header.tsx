import "./Header.modules.css";
import Menu from "./Menu";

export function ScrollToElement({
  elementId,
  elementText,
  menuFunction,
}: {
  elementId: string;
  elementText: string;
  menuFunction?: () => void | null;
}) {
  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault(); // Evita o redirecionamento padrão
    const element = document.getElementById(elementId);
    element?.scrollIntoView({ behavior: "smooth" });
    if (menuFunction) {
      menuFunction();
    }
  };

  return (
    <a href="#" onClick={scrollTo}>
      {elementText}
    </a>
  );
}

export function Header() {
  return (
    <header>
      <div className="conteudo">
        <div>
          <h2 className="nome">Bruno Colaço Ferreira</h2>
        </div>
        <div className="links">
          <ScrollToElement
            elementId="experiencia-profissional"
            elementText="Experiência"
          />
          <ScrollToElement elementId="formacao" elementText="Formação" />
          <ScrollToElement elementId="contato" elementText="Contato" />
        </div>
        <Menu />
      </div>
    </header>
  );
}
