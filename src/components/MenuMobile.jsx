import "./MenuMobile.css";

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

    // Primeiro vai para a Home
    setPagina("home");

    // Fecha o menu mobile
    fecharMenu();

    // Espera a Home aparecer
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
        <span className="menu-emoji">
          🏠
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
            src={carrinhoIcon}
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
          navegar("agendamento");
        }}
      >
        <span className="menu-emoji">
          📅
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
        <span className="menu-emoji">
          🛍️
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
        <span className="menu-emoji">
          ℹ️
        </span>

        <span>
          Sobre Nós
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
          CONTATO
      ===================================================== */}

      <a
        href="#contact"
        onClick={(e) => {
          e.preventDefault();
          irParaSecao("contact");
        }}
      >
        <span className="menu-emoji">
          ☎️
        </span>

        <span>
          Contato
        </span>
      </a>


    </nav>
  );
}


export default MenuMobile;