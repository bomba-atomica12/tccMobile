import "./Perfil.css";

function Perfil({ setPagina }) {
  return (
    <main className="pagina-perfil">

      {/* =========================================
          CABEÇALHO DO PERFIL
      ========================================== */}

      <section className="perfil-header">

        {/* FOTO */}

        <div className="foto-container">

          <img
            src="perfil.png"
            alt="Foto de perfil"
            className="foto-perfil"
          />

        </div>


        {/* INFORMAÇÕES */}

        <div className="informacoes-perfil">

          <h1>
            Nome do Usuário
          </h1>

          <p className="email-perfil">
            usuario@email.com
          </p>

          <p className="membro-desde">

            <i className="fa-regular fa-calendar"></i>

            Membro desde abril de 2025

          </p>

        </div>


        {/* EDITAR PERFIL */}

      <button
        className="botao-editar-perfil"
        onClick={() => setPagina("editarPerfil")}
      >
        <i className="fa-solid fa-pen"></i>
          Editar perfil
      </button>

      </section>


      {/* =========================================
          ACESSO RÁPIDO
      ========================================== */}

      <section className="acesso-rapido">

        <div className="cards-rapidos">

          {/* FAVORITOS */}

          <button className="card-rapido">

            <div className="icone-rapido">

              <i className="fa-regular fa-heart"></i>

            </div>

            <div>

              <h3>
                Favoritos
              </h3>

              <p>
                Seus procedimentos favoritos salvos
              </p>

            </div>

          </button>


          {/* AGENDAMENTOS */}

          <button className="card-rapido">

            <div className="icone-rapido">

              <i className="fa-regular fa-calendar"></i>

            </div>

            <div>

              <h3>
                Agendamentos
              </h3>

              <p>
                Veja e gerencie seus agendamentos
              </p>

            </div>

          </button>

        </div>

      </section>


      {/* =========================================
          OPÇÕES DO PERFIL
      ========================================== */}

      <section className="opcoes-perfil">


        {/* NOTIFICAÇÕES */}

        <button
          className="opcao-perfil"
          onClick={() => setPagina("trocarSenha")}
        >

          <div className="icone-opcao">

            <i className="fa-regular fa-bell"></i>

          </div>


          <div className="texto-opcao">

            <h3>
              Notificações
            </h3>

            <p>
              Gerencie lembretes de agendamentos
              e novidades
            </p>

          </div>


          <i className="fa-solid fa-chevron-right seta"></i>

        </button>


        {/* PRIVACIDADE */}

      <button
  className="opcao-perfil"
  onClick={() => setPagina("trocarSenha")}
>

  <div className="icone-opcao">

    <i className="fa-solid fa-lock"></i>

  </div>

  <div className="texto-opcao">

    <h3>
      Privacidade e segurança
    </h3>

    <p>
      Gerencie suas informações
      e segurança da conta
    </p>

  </div>

  <i className="fa-solid fa-chevron-right seta"></i>

</button>


        {/* FORMAS DE PAGAMENTO */}

        <button className="opcao-perfil">

          <div className="icone-opcao">

            <i className="fa-regular fa-credit-card"></i>

          </div>


          <div className="texto-opcao">

            <h3>
              Formas de pagamento
            </h3>

            <p>
              Cartões cadastrados e histórico
              de pagamentos
            </p>

          </div>


          <i className="fa-solid fa-chevron-right seta"></i>

        </button>


        {/* AJUDA */}

        <button className="opcao-perfil">

          <div className="icone-opcao">

            <i className="fa-regular fa-circle-question"></i>

          </div>


          <div className="texto-opcao">

            <h3>
              Ajuda e suporte
            </h3>

            <p>
              Perguntas frequentes e atendimento
            </p>

          </div>


          <i className="fa-solid fa-chevron-right seta"></i>

        </button>

      </section>


      {/* =========================================
          CONTA
      ========================================== */}

      <section className="conta">

        <h2>
          Conta
        </h2>


        <div className="opcoes-conta">

          {/* SAIR */}

          <button className="item-conta sair">

            <i className="fa-solid fa-arrow-right-from-bracket"></i>

            <span>
              Sair da conta
            </span>

            <i className="fa-solid fa-chevron-right"></i>

          </button>

        </div>

      </section>

    </main>
  );
}

export default Perfil;