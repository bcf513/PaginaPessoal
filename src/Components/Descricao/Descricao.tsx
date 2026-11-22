interface Props {
  readonly texto: string;
}

interface ItemLista {
  texto: string;
  subItens: string[];
}

export function Descricao({ texto }: Props) {
  const linhas = texto.split("\n");
  const elementos: JSX.Element[] = [];

  let paragrafoAtual: string[] = [];
  let listaAtual: ItemLista[] = [];

  function descarregarParagrafo() {
    if (paragrafoAtual.length > 0) {
      elementos.push(
        <p key={`p-${elementos.length}`} className="descricao-paragrafo">
          {paragrafoAtual.join(" ")}
        </p>
      );
      paragrafoAtual = [];
    }
  }

  function descarregarLista() {
    if (listaAtual.length > 0) {
      elementos.push(
        <ul key={`ul-${elementos.length}`} className="descricao-lista">
          {listaAtual.map((item, i) => (
            <li key={i}>
              <span>{item.texto}</span>
              {item.subItens.length > 0 && (
                <ul className="descricao-sublista">
                  {item.subItens.map((sub, j) => (
                    <li key={j}>{sub}</li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      );
      listaAtual = [];
    }
  }

  linhas.forEach((linha) => {
    if (!linha.trim()) {
      return;
    }

    if (/^\s{2,}-\s+(.*)/.test(linha)) {
      descarregarParagrafo();
      const match = linha.match(/^\s{2,}-\s+(.*)/);
      const textoItem = match ? match[1] : linha.trim().replace(/^-\s*/, "");
      if (listaAtual.length > 0) {
        listaAtual[listaAtual.length - 1].subItens.push(textoItem);
      } else {
        listaAtual.push({ texto: textoItem, subItens: [] });
      }
    } else if (/^\s*-\s+(.*)/.test(linha)) {
      descarregarParagrafo();
      const match = linha.match(/^\s*-\s+(.*)/);
      const textoItem = match ? match[1] : linha.trim().replace(/^-\s*/, "");
      listaAtual.push({ texto: textoItem, subItens: [] });
    } else {
      descarregarLista();
      paragrafoAtual.push(linha.trim());
    }
  });

  descarregarParagrafo();
  descarregarLista();

  return <div className="descricao-container">{elementos}</div>;
}

export default Descricao;
