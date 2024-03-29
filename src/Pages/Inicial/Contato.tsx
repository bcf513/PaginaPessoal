import { ReactComponent as WhatsappIcon } from "../../assets/svg/icons/whatsapp.svg";
import { ReactComponent as LinkedinIcon } from "../../assets/svg/icons/linkedin.svg";
import { ReactComponent as GithubIcon } from "../../assets/svg/icons/github.svg";
import { ReactComponent as EmailIcon } from "../../assets/svg/icons/email.svg";
import { ReactComponent as PhoneIcon } from "../../assets/svg/icons/telefone.svg";
import { ReactComponent as HomeIcon } from "../../assets/svg/icons/home.svg";
import { FC, SVGProps } from "react";

function IconeComTexto({
  Icone,
  texto,
  href,
}: {
  Icone: FC<SVGProps<SVGSVGElement>>;
  texto: string;
  href?: string;
}) {
  return (
    <div className="icone-e-texto">
      <Icone />
      <a className={href ? "link-contato" : ""} href={href}>
        {texto}
      </a>
    </div>
  );
}

function Contato() {
  return (
    <div id="contato" className="secao contato background">
      <div className="subsecao">
        <div className="icone-e-texto">
          <PhoneIcon />
          <h2>Contato</h2>
        </div>
        <div className="lista-contato">
          <IconeComTexto
            Icone={LinkedinIcon}
            texto="linkedin.com/in/bcf513/"
            href={"https://www.linkedin.com/in/bcf513/"}
          />
          <IconeComTexto
            Icone={WhatsappIcon}
            texto="+55 41 99808-3550"
            href={"https://wa.me/+55041998083550"}
          />
          <IconeComTexto Icone={EmailIcon} texto="bcf513@gmail.com" />
          <IconeComTexto
            Icone={GithubIcon}
            texto="github.com/bcf513"
            href="https://github.com/bcf513"
          />
          <IconeComTexto Icone={HomeIcon} texto="Curitiba, Paraná, Brasil" />
        </div>
      </div>
    </div>
  );
}

export default Contato;
