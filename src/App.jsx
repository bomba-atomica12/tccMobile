import { useState } from "react";

import Home from "./pages/Home";
import Agendamento from "./pages/Agendamento";

function App() {
  const [pagina, setPagina] = useState("home");

  return (
    <>
      {pagina === "home" && (
        <Home setPagina={setPagina} />
      )}

      {pagina === "agendamento" && (
        <Agendamento />
      )}
    </>
  );
}

export default App;