import "./MenuMobile.css";

function MenuMobile({ setPagina, fecharMenu }) {
  return (
    <nav className="menu-mobile">

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setPagina("home");
          fecharMenu();
        }}
      >
        🏠 Home
      </a>


      <a href="#">
        ✨ Procedimentos
      </a>


      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          setPagina("agendamento");
          fecharMenu();
        }}
      >
        📅 Agendamentos
      </a>

      <a href="#">
        🛍 Loja
      </a>

      <a href="#">
        ℹ️ Sobre Nós
      </a>

      <a href="#">
        ☎️ Contato
      </a>
    </nav>
  );
}

export default MenuMobile;