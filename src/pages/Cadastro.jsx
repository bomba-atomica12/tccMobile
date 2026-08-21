import "./Autenticacao.css";

function Cadastro({ setPagina }) {

  const voltarHome = () => {
    setPagina("home");
  };

  const irParaLogin = () => {
    setPagina("login");
  };

  return (
    <main className="auth-page">

      <section className="auth-container">

        <div className="auth-card">

          {/* LOGO */}

          <button
            className="auth-brand"
            onClick={voltarHome}
          >
            Bella<span>.</span>
          </button>


          {/* TÍTULO */}

          <span className="section-label">
            SEJA BEM-VINDO
          </span>

          <h1 className="heading">
            Crie sua <span>conta</span>
          </h1>

          <p className="section-description">
            Cadastre-se para ter acesso aos nossos serviços e agendamentos.
          </p>


          {/* FORMULÁRIO */}

          <form
            className="auth-form"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* USUÁRIO */}

            <div className="auth-group">

              <label
                className="auth-label"
                htmlFor="username"
              >
                Usuário
              </label>

              <input
                className="auth-input"
                id="username"
                name="username"
                type="text"
                placeholder="Digite seu nome de usuário"
                autoComplete="username"
                required
              />

            </div>


            {/* TELEFONE */}

            <div className="auth-group">

              <label
                className="auth-label"
                htmlFor="phone"
              >
                Telefone
              </label>

              <input
                className="auth-input"
                id="phone"
                name="phone"
                type="tel"
                placeholder="(11) 99999-9999"
                autoComplete="tel"
                required
              />

            </div>


            {/* E-MAIL */}

            <div className="auth-group">

              <label
                className="auth-label"
                htmlFor="email"
              >
                E-mail
              </label>

              <input
                className="auth-input"
                id="email"
                name="email"
                type="email"
                placeholder="exemplo@gmail.com"
                autoComplete="email"
                required
              />

            </div>


            {/* SENHA */}

            <div className="auth-group">

              <label
                className="auth-label"
                htmlFor="password"
              >
                Senha
              </label>

              <input
                className="auth-input"
                id="password"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                autoComplete="new-password"
                required
              />

            </div>


            {/* BOTÃO */}

            <button
              className="auth-submit"
              type="submit"
            >
              Criar minha conta
            </button>

          </form>


          {/* DIVISOR */}

          <div className="auth-divider">
            <span>ou</span>
          </div>


          {/* LOGIN */}

          <p className="auth-link">

            Já tem uma conta?

            <button
              type="button"
              onClick={irParaLogin}
            >
              Entrar
            </button>

          </p>


          {/* VOLTAR */}

          <button
            className="auth-back"
            onClick={voltarHome}
          >
            ← Voltar para a página inicial
          </button>

        </div>

      </section>

    </main>
  );
}

export default Cadastro;