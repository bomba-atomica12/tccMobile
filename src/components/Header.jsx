import { useState } from "react";
import "./Header.css";
import MenuMobile from "./MenuMobile";

import homeIcon from "../assets/icones/home.png";
import procedimentosIcon from "../assets/icones/procedimentos.png";
import lojaIcon from "../assets/icones/loja.png";
import sobreIcon from "../assets/icones/sobre_nos.png";
import contatoIcon from "../assets/icones/contato.png";
import carrinhoIcon from "../assets/icones/carrinho.png";
import perfilIcon from "../assets/icones/perfil_vaziu.png";


function Header({ setPagina }) {
  const [menuAberto, setMenuAberto] = useState(false);

  // =====================================================
  // IR PARA UMA SEÇÃO DA HOME
  // =====================================================

  const irParaSecao = (secao) => {
    setPagina("home");

    setTimeout(() => {
      const elemento = document.getElementById(secao);

      if (elemento) {
        elemento.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 300);
  };


  return (
    <header className="topo">

      {/* =====================================================
          LOGO
      ===================================================== */}

      <a
        href="#"
        className="logo"
        onClick={(e) => {
          e.preventDefault();
          setPagina("home");
        }}
      >
        <span className="logo-texto">Bella</span>
        <span className="logo-ponto">.</span>
      </a>


      {/* =====================================================
          MENU PRINCIPAL
      ===================================================== */}

      <nav className="menu">

        {/* HOME */}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setPagina("home");
          }}
        >
          <img src={homeIcon} alt="" />
          <span>Home</span>
        </a>


        {/* PROCEDIMENTOS */}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setPagina("procedimentos");
          }}
        >
          <img src={procedimentosIcon} alt="" />
          <span>Procedimentos</span>
        </a>


        {/* AGENDAMENTOS */}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setPagina("agendamento");
          }}
        >
          <img src={lojaIcon} alt="" />
          <span>Agendamentos</span>
        </a>


        {/* LOJA */}

        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            setPagina("produtos");
          }}
        >
          <img src={lojaIcon} alt="" />
          <span>Loja</span>
        </a>


        {/* SOBRE */}

        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            irParaSecao("about");
          }}
        >
          <img src={sobreIcon} alt="" />
          <span>Sobre Nós</span>
        </a>


        {/* CONTATO */}

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            irParaSecao("contact");
          }}
        >
          <img src={contatoIcon} alt="" />
          <span>Contato</span>
        </a>

      </nav>


      {/* =====================================================
          ÍCONES DO LADO DIREITO
      ===================================================== */}

      <div className="header-icons">

        <a
          href="#"
          title="Carrinho"
          onClick={(e) => {
            e.preventDefault();
            setPagina("carrinho");
          }}
        >
          <img src={carrinhoIcon} alt="Carrinho" />
        </a>


        <a
          href="#"
          title="Perfil"
          onClick={(e) => {
            e.preventDefault();
            setPagina("perfil");
          }}
        >
          <img src={perfilIcon} alt="Perfil" />
        </a>

      </div>


      {/* =====================================================
          BOTÃO MENU MOBILE
      ===================================================== */}

      <button
        className="botao-menu"
        type="button"
        onClick={() => setMenuAberto(!menuAberto)}
        aria-label="Abrir menu"
      >
        {menuAberto ? "✕" : "☰"}
      </button>


      {/* =====================================================
          MENU MOBILE
      ===================================================== */}

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