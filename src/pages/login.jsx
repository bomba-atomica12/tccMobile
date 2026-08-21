import "./Autenticacao.css";

function Login({ setPagina }) {

  const voltarHome = () => {
    setPagina("home");
  };

  const irParaCadastro = () => {
    setPagina("cadastro");
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
            SEJA BEM-VINDO DE VOLTA
          </span>

          <h1 className="heading">
            Entre na sua <span>conta</span>
          </h1>

          <p className="section-description">
            Entre para acessar seus agendamentos e serviços.
          </p>


          {/* FORMULÁRIO */}

          <form
            className="auth-form"
            onSubmit={(e) => e.preventDefault()}
          >

            {/* USUÁRIO / E-MAIL */}

            <div className="auth-group">

              <label
                className="auth-label"
                htmlFor="login"
              >
                Usuário ou E-mail
              </label>

              <input
                className="auth-input"
                id="login"
                name="login"
                type="text"
                placeholder="Digite seu usuário ou e-mail"
                autoComplete="username"
                required
              />

            </div>


            {/* SENHA */}

            <div className="auth-group">

              <label
                className="auth-label"
                htmlFor="login-password"
              >
                Senha
              </label>

              <input
                className="auth-input"
                id="login-password"
                name="password"
                type="password"
                placeholder="Digite sua senha"
                autoComplete="current-password"
                required
              />

            </div>


            {/* BOTÃO */}

            <button
              className="auth-submit"
              type="submit"
            >
              Entrar
            </button>

          </form>


          {/* DIVISOR */}

          <div className="auth-divider">
            <span>ou</span>
          </div>


          {/* CADASTRO */}

          <p className="auth-link">

            Ainda não tem uma conta?

            <button
              type="button"
              onClick={irParaCadastro}
            >
              Criar conta
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

export default Login;