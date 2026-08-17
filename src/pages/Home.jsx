import "./Home.css";

import Header from "../components/Header";
import CardProcedimento from "../components/CardProcedimento";

import limpezaPele from "../assets/imagens/limpeza-de-pele.png";
import sobrancelha from "../assets/imagens/sobrancelhas.jpg";
import depilacao from "../assets/imagens/depilacao.avif";

import metalDetox from "../assets/imagens/metal-detox.jpeg";
import reconstrucao from "../assets/imagens/reconstrucao.jpeg";
import reparacao from "../assets/imagens/reparacao.jpeg";

function Home({ setPagina }) {
  return (
    <div className="home">
      <Header setPagina={setPagina} />

      <main className="conteudo-home">

        {/* Boas-vindas */}
        <section className="boas-vindas">
          <h1>Bem-vinda à Mah Estética</h1>

          <p>
            Cuide de você e realce sua beleza com nossos procedimentos.
          </p>
        </section>


        {/* Procedimentos */}
        <section className="procedimentos-home">

          <h2>Nossos procedimentos</h2>

          <div className="lista-procedimentos">

            <CardProcedimento
              imagem={limpezaPele}
              nome="Limpeza de pele"
              descricao="Cuide da sua pele e mantenha uma aparência saudável."
            />

            <CardProcedimento
              imagem={sobrancelha}
              nome="Design de sobrancelhas"
              descricao="Realce o formato das suas sobrancelhas."
            />

            <CardProcedimento
              imagem={depilacao}
              nome="Depilação"
              descricao="Cuidados para deixar sua pele macia e bem cuidada."
            />

          </div>

        </section>


        {/* Produtos */}
        <section className="produtos-home">

          <h2>Nossos produtos</h2>

          <div className="lista-produtos">

            <CardProcedimento
              imagem={metalDetox}
              nome="Metal Detox"
              descricao="Cuidados especiais para manter seus cabelos saudáveis."
            />

            <CardProcedimento
              imagem={reconstrucao}
              nome="Reconstrução"
              descricao="Tratamento para fortalecer e recuperar os fios."
            />

            <CardProcedimento
              imagem={reparacao}
              nome="Reparação"
              descricao="Cuide dos seus cabelos e recupere sua aparência."
            />

          </div>

        </section>

      </main>

    </div>
  );
}

export default Home;