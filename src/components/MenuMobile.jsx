import "./MenuMobile.css";

import homeIcon from "../assets/icones/home.png";
import procedimentosIcon from "../assets/icones/procedimentos.png";
import lojaIcon from "../assets/icones/loja.png";
import sobreIcon from "../assets/icones/sobre_nos.png";
import contatoIcon from "../assets/icones/contato.png";
import carrinhoIcon from "../assets/icones/carrinho.png";
import perfilIcon from "../assets/icones/perfil_vaziu.png";


function MenuMobile({ setPagina, fecharMenu }) {


  // =====================================================
  // NAVEGAÇÃO NORMAL
  // =====================================================

  const navegar = (pagina) => {

    setPagina(pagina);

    fecharMenu();

  };


  // =====================================================
  // NAVEGAR PARA UMA SEÇÃO DA HOME
  // =====================================================

  const irParaSecao = (secao) => {

    setPagina("home");

    fecharMenu();


    setTimeout(() => {

      const elemento =
        document.getElementById(secao);


      if (elemento) {

        elemento.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });

      }

    }, 300);

  };


  return (

    <nav className="menu-mobile">


      {/* =====================================================
          HOME
      ===================================================== */}

      <a
        href="#"
        onClick={(e) => {

          e.preventDefault();

          navegar("home");

        }}
      >

        <span className="menu-icon-img">

          <img
            src={homeIcon}
            alt="Home"
          />

        </span>

        <span>
          Home
        </span>

      </a>


      {/* =====================================================
          PROCEDIMENTOS
      ===================================================== */}

      <a
        href="#"
        onClick={(e) => {

          e.preventDefault();

          navegar("procedimentos");

        }}
      >

        <span className="menu-icon-img">

          <img
            src={procedimentosIcon}
            alt="Procedimentos"
          />

        </span>

        <span>
          Procedimentos
        </span>

      </a>


      {/* =====================================================
          AGENDAMENTOS
      ===================================================== */}

      <a
        href="#"
        onClick={(e) => {

          e.preventDefault();

          navegar("agenda");

        }}
      >

        <span className="menu-icon-img">

          <img
            src={lojaIcon}
            alt="Agendamentos"
          />

        </span>

        <span>
          Agendamentos
        </span>

      </a>


      {/* =====================================================
          LOJA
      ===================================================== */}

      <a
        href="#"
        onClick={(e) => {

          e.preventDefault();

          navegar("produtos");

        }}
      >

        <span className="menu-icon-img">

          <img
            src={lojaIcon}
            alt="Loja"
          />

        </span>

        <span>
          Loja
        </span>

      </a>


      {/* =====================================================
          SOBRE NÓS
      ===================================================== */}

      <a
        href="#about"
        onClick={(e) => {

          e.preventDefault();

          irParaSecao("about");

        }}
      >

        <span className="menu-icon-img">

          <img
            src={sobreIcon}
            alt="Sobre Nós"
          />

        </span>

        <span>
          Sobre Nós
        </span>

      </a>


      {/* =====================================================
          CONTATO
      ===================================================== */}

      <a
        href="#contact"
        onClick={(e) => {

          e.preventDefault();

          irParaSecao("contact");

        }}
      >

        <span className="menu-icon-img">

          <img
            src={contatoIcon}
            alt="Contato"
          />

        </span>

        <span>
          Contato
        </span>

      </a>


      {/* =====================================================
          CARRINHO
      ===================================================== */}

      <a
        href="#"
        onClick={(e) => {

          e.preventDefault();

          navegar("carrinho");

        }}
      >

        <span className="menu-icon-img">

          <img
            src={carrinhoIcon}
            alt="Carrinho"
          />

        </span>

        <span>
          Carrinho
        </span>

      </a>


      {/* =====================================================
          PERFIL
      ===================================================== */}

      <a
        href="#"
        onClick={(e) => {

          e.preventDefault();

          navegar("perfil");

        }}
      >

        <span className="menu-icon-img">

          <img
            src={perfilIcon}
            alt="Perfil"
          />

        </span>

        <span>
          Perfil
        </span>

      </a>


      {/* =====================================================
          LOGIN
      ===================================================== */}

      <a
        href="#"
        onClick={(e) => {

          e.preventDefault();

          navegar("login");

        }}
      >

        <span className="menu-emoji">
          🔐
        </span>

        <span>
          Login
        </span>

      </a>


      {/* =====================================================
          CADASTRO
      ===================================================== */}

      <a
        href="#"
        onClick={(e) => {

          e.preventDefault();

          navegar("cadastro");

        }}
      >

        <span className="menu-emoji">
          📝
        </span>

        <span>
          Cadastro
        </span>

      </a>


    </nav>

  );

}


export default MenuMobile;