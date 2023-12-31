import Contato from "./Contato";
import ExperienciaProfissional from "./ExperienciaProfissional";
import ExperienciaNaArea from "./ExperienciaNaArea";
import Formacao from "./Formacao";
import Introducao from "../Introducao/Introducao";

function Inicial() {
  return (
    <>
      <Introducao />
      <ExperienciaProfissional />
      <Formacao />
      <ExperienciaNaArea/ >
      <Contato />
    </>
  );
}

export default Inicial;
