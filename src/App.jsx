import { useState } from "react";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Agendamento from "./pages/Agendamento";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";

import Header from "./components/Header";

function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <>
      <Header setPagina={setPagina} />
      {pagina === "home" && <Home />}
      {pagina === "perfil" && <Perfil />}
      {pagina === "agendamento" && <Agendamento />}
      {pagina === "produtos" && <Produtos />}
      {pagina === "carrinho" && <Carrinho />}
    </>
  );
}

export default App;