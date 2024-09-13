import Contato from "./Contato";
import ExperienciaProfissional from "./ExperienciaProfissional";
import Projetos from "./Projetos";
import Formacao from "./Formacao";
import Introducao from "../Introducao/Introducao";

function Inicial() {
  return (
    <>
      <Introducao />
      <ExperienciaProfissional />
      <Formacao />
      <Projetos />
      <Contato />
    </>
  );
}

export default Inicial;
