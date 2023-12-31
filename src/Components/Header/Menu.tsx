import { useEffect, useRef, useState } from "react";
import { ScrollToElement } from "./Header";
import { ReactComponent as MenuIcon } from "../../assets/svg/icons/menu.svg";

function Menu() {
  const [isOpen, setisOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setisOpen(!isOpen);
  };

  const closeMenu = () => {
    setisOpen(false);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        menuRef.current &&
        event.target instanceof Node &&
        !menuRef.current.contains(event.target as Node)
      ) {
        closeMenu();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="menu">
      <button onClick={toggleMenu}>
        <MenuIcon />
      </button>
      {isOpen && (
        <div className="menuOptions" ref={menuRef}>
          <ScrollToElement
            elementId="experiencia-profissional"
            elementText="Experiência"
            menuFunction={() => setisOpen(false)}
          />
          <ScrollToElement
            elementId="formacao"
            elementText="Formação"
            menuFunction={() => setisOpen(false)}
          />
          <ScrollToElement
            elementId="experiencia-na-area"
            elementText="Experiência na Área"
            menuFunction={() => setisOpen(false)}
          />
          <ScrollToElement
            elementId="contato"
            elementText="Contato"
            menuFunction={() => setisOpen(false)}
          />
        </div>
      )}
    </div>
  );
}

export default Menu;
