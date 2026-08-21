import { useState } from "react";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import EditarPerfil from "./pages/EditarPerfil";
import TrocarSenha from "./pages/TrocarSenha";
import Agendamento from "./pages/Agendamento";
import Produtos from "./pages/Produtos";
import Carrinho from "./pages/Carrinho";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";

import Header from "./components/Header";

function App() {
  const [pagina, setPagina] = useState("perfil");

  return (
    <>
      {pagina !== "login" && pagina !== "cadastro" && (
        <Header setPagina={setPagina} />
      )}

      {pagina === "home" && (
        <Home setPagina={setPagina} />
      )}

      {pagina === "perfil" && (
        <Perfil setPagina={setPagina} />
      )}

      {pagina === "editarPerfil" && (
        <EditarPerfil setPagina={setPagina} />
      )}

      {pagina === "trocarSenha" && (
        <TrocarSenha setPagina={setPagina} />
      )}

      {pagina === "agendamento" && (
        <Agendamento setPagina={setPagina} />
      )}

      {pagina === "produtos" && (
        <Produtos setPagina={setPagina} />
      )}

      {pagina === "carrinho" && (
        <Carrinho setPagina={setPagina} />
      )}

      {pagina === "cadastro" && (
        <Cadastro setPagina={setPagina} />
      )}

      {pagina === "login" && (
        <Login setPagina={setPagina} />
      )}
    </>
  );
}

export default App;