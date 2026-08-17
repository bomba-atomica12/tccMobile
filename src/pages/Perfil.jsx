import "./Perfil.css";

function Perfil() {
  return (
    <main className="pagina-perfil">

      {/* ==========================
          CABEÇALHO
      =========================== */}

      <section className="perfil-header">

        {/* Foto do usuário */}

        <div className="foto-container">

          <img
            src="perfil.png"
            alt="Foto de perfil"
            className="foto-perfil"
          />

          <button
            className="botao-editar-foto"
            aria-label="Editar foto"
          >
            <i className="fa-solid fa-pen"></i>
          </button>

        </div>


        {/* Informações */}

        <div className="informacoes-perfil">

          <h1>Nome do Usuário</h1>

          <p className="email-perfil">
            usuario@email.com
          </p>

          <p className="membro-desde">
            <i className="fa-regular fa-calendar"></i>

            Membro desde abril de 2025
          </p>

        </div>


        {/* Editar perfil */}

        <button className="botao-editar-perfil">

          <i className="fa-solid fa-pen"></i>

          Editar perfil

        </button>

      </section>


      {/* ==========================
          ACESSO RÁPIDO
      =========================== */}

      <section className="acesso-rapido">

        <h2>Acesso rápido</h2>


        <div className="cards-rapidos">

          {/* Favoritos */}

          <button className="card-rapido">

            <i className="fa-regular fa-heart"></i>

            <div>
              <h3>Favoritos</h3>

              <p>
                Seus procedimentos
                favoritos salvos
              </p>
            </div>

          </button>


          {/* Agendamentos */}

          <button className="card-rapido">

            <i className="fa-regular fa-calendar"></i>

            <div>
              <h3>Agendamentos</h3>

              <p>
                Veja e gerencie seus
                agendamentos
              </p>
            </div>

          </button>


          {/* Configurações */}

          <button className="card-rapido selecionado">

            <i className="fa-solid fa-gear"></i>

            <div>
              <h3>Configurações</h3>

              <p>
                Gerencie as configurações
                da sua conta
              </p>
            </div>

          </button>

        </div>

      </section>


      {/* ==========================
          OPÇÕES DO PERFIL
      =========================== */}

      <section className="opcoes-perfil">

        <h2>Configurações</h2>


        {/* Dados pessoais */}

        <button className="opcao-perfil">

          <div className="icone-opcao">

            <i className="fa-regular fa-user"></i>

          </div>


          <div className="texto-opcao">

            <h3>Dados pessoais</h3>

            <p>
              Edite suas informações pessoais
              como nome, e-mail e telefone
            </p>

          </div>


          <i className="fa-solid fa-chevron-right seta"></i>

        </button>


        {/* Notificações */}

        <button className="opcao-perfil">

          <div className="icone-opcao">

            <i className="fa-regular fa-bell"></i>

          </div>


          <div className="texto-opcao">

            <h3>Notificações</h3>

            <p>
              Gerencie lembretes de
              agendamentos e novidades
            </p>

          </div>


          <i className="fa-solid fa-chevron-right seta"></i>

        </button>


        {/* Privacidade */}

        <button className="opcao-perfil">

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


        {/* Pagamentos */}

        <button className="opcao-perfil">

          <div className="icone-opcao">

            <i className="fa-regular fa-credit-card"></i>

          </div>


          <div className="texto-opcao">

            <h3>
              Formas de pagamento
            </h3>

            <p>
              Cartões cadastrados e
              histórico de pagamentos
            </p>

          </div>


          <i className="fa-solid fa-chevron-right seta"></i>

        </button>


        {/* Ajuda */}

        <button className="opcao-perfil">

          <div className="icone-opcao">

            <i className="fa-regular fa-circle-question"></i>

          </div>


          <div className="texto-opcao">

            <h3>
              Ajuda e suporte
            </h3>

            <p>
              Perguntas frequentes
              e atendimento
            </p>

          </div>


          <i className="fa-solid fa-chevron-right seta"></i>

        </button>

      </section>


      {/* ==========================
          CONTA
      =========================== */}

      <section className="conta">

        <h2>Conta</h2>


        {/* Alterar senha */}

        <button className="item-conta">

          <i className="fa-solid fa-key"></i>

          <span>
            Alterar senha
          </span>

          <i className="fa-solid fa-chevron-right"></i>

        </button>


        {/* Sair */}

        <button className="item-conta sair">

          <i className="fa-solid fa-arrow-right-from-bracket"></i>

          <span>
            Sair da conta
          </span>

          <i className="fa-solid fa-chevron-right"></i>

        </button>

      </section>

    </main>
  );
}

export default Perfil;