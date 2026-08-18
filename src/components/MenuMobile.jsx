import "./MenuMobile.css";

import carrinhoIcon from "../assets/icones/carrinho.png";
import perfilIcon from "../assets/icones/perfil_vaziu.png";

function MenuMobile({ setPagina, fecharMenu }) {

  // Função para fechar o menu depois de clicar
  const navegar = (pagina) => {
    setPagina(pagina);
    fecharMenu();
  };

  return (
    <nav className="menu-mobile">

      {/* HOME */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navegar("home");
        }}
      >
        <span className="menu-emoji">🏠</span>
        <span>Home</span>
      </a>


      {/* PROCEDIMENTOS */}
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

        <span>Procedimentos</span>
      </a>


      {/* AGENDAMENTOS */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navegar("agendamento");
        }}
      >
        <span className="menu-emoji">📅</span>
        <span>Agendamentos</span>
      </a>


      {/* LOJA */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navegar("loja");
        }}
      >
        <span className="menu-emoji">🛍️</span>
        <span>Loja</span>
      </a>


      {/* SOBRE NÓS */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navegar("sobre");
        }}
      >
        <span className="menu-emoji">ℹ️</span>
        <span>Sobre Nós</span>
      </a>


      {/* PERFIL */}
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

        <span>Perfil</span>
      </a>


      {/* CONTATO */}
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navegar("contato");
        }}
      >
        <span className="menu-emoji">☎️</span>
        <span>Contato</span>
      </a>

    </nav>
  );
}

export default MenuMobile;