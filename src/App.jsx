import { useState } from "react";

import Home from "./pages/Home";
import Perfil from "./pages/Perfil";
import Agendamento from "./pages/Agendamento";

import Header from "./components/Header";

function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <>
      <Header setPagina={setPagina} />

      {pagina === "home" && <Home />}

      {pagina === "agendamento" && <Agendamento />}

      {pagina === "perfil" && <Perfil />}
    </>
  );
}

export default App;