import { useState } from "react";
import "./Header.css";
import MenuMobile from "./MenuMobile";

import logo from "../assets/imagens/mah_estetica.jpeg";

import homeIcon from "../assets/icones/home.png";
import procedimentosIcon from "../assets/icones/procedimentos.png";
import lojaIcon from "../assets/icones/loja.png";
import sobreIcon from "../assets/icones/sobre_nos.png";
import contatoIcon from "../assets/icones/contato.png";

function Header({ setPagina }) {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <header className="topo">

      <div className="logo">
        <img
          src={logo}
          alt="Logo da Mah Estética"
        />
      </div>

      <button
        className="botao-menu"
        onClick={() => setMenuAberto(!menuAberto)}
      >
        {menuAberto ? "✕" : "☰"}
      </button>

      <ul className="menu">

        {/* Home */}
        <li>
          <a href="#">
            <img src={homeIcon} alt="Home" />
            Home
          </a>
        </li>


        {/* Procedimentos */}
        <li>
          <a href="#">
            <img src={procedimentosIcon} alt="Procedimentos" />
            Procedimentos
          </a>
        </li>


        {/* Agendamentos */}
        <li>
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              setPagina("agendamento");
            }}
          >
            <img src={lojaIcon} alt="Agendamentos" />
            Agendamentos
          </a>
        </li>


        {/* Loja */}
        <li>
          <a href="#">
            <img src={lojaIcon} alt="Loja" />
            Loja
          </a>
        </li>


        {/* Sobre Nós */}
        <li>
          <a href="#">
            <img src={sobreIcon} alt="Sobre Nós" />
            Sobre Nós
          </a>
        </li>


        {/* Contato */}
        <li>
          <a href="#">
            <img src={contatoIcon} alt="Contato" />
            Contato
          </a>
        </li>

      </ul>


     {menuAberto && (
  <MenuMobile
    setPagina={setPagina}
    fecharMenu={() => setMenuAberto(false)}
  />
)}

    </header>
  );
}

export default Header;