import Contato from "./Contato";
import ExperienciaProfissional from "./ExperienciaProfissional";
import Formacao from "./Formacao";
import Introducao from "../Introducao/Introducao";

function Inicial() {
  return (
    <div>
      <Introducao />
      <ExperienciaProfissional />
      <Formacao />
      <Contato />
    </div>
  );
}

export default Inicial;
