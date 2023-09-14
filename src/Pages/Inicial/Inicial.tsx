import Contato from "./Contato";
import ExperienciaProfissional from "./ExperienciaProfissional";
import Formacao from "./Formacao";
import Introducao from "../Introducao/Introducao";

function Inicial() {
  return (
    <>
      <Introducao />
      <ExperienciaProfissional />
      <Formacao />
      <Contato />
    </>
  );
}

export default Inicial;
