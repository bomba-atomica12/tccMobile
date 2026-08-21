import "./TrocarSenha.css";

function TrocarSenha({ setPagina }) {

  const handleSubmit = (event) => {
    event.preventDefault();

    const senhaAtual = event.target.senhaAtual.value.trim();
    const novaSenha = event.target.novaSenha.value.trim();
    const confirmarSenha = event.target.confirmarSenha.value.trim();

    // Senha atual
    if (!senhaAtual) {
      alert("Por favor, informe sua senha atual.");
      return;
    }

    // Nova senha
    if (novaSenha.length < 6) {
      alert("A nova senha deve ter pelo menos 6 caracteres.");
      return;
    }

    // Confirmação
    if (novaSenha !== confirmarSenha) {
      alert("A confirmação não corresponde à nova senha.");
      return;
    }

    alert("Senha validada!");

    event.target.reset();

    setPagina("perfil");
  };

  return (
    <main className="trocar-senha-content">

      {/* VOLTAR */}

      <button
        type="button"
        className="back-link"
        onClick={() => setPagina("perfil")}
      >
        <i className="fa-solid fa-arrow-left"></i>

        Voltar para o perfil
      </button>


      {/* CARD */}

      <form
        className="trocar-senha-card"
        onSubmit={handleSubmit}
      >

        <h1>Privacidade e Segurança</h1>

        <p className="subtitle">
          Altere a senha usada para entrar na sua conta.
        </p>


        {/* SENHA ATUAL */}

        <div className="field-group">

          <label htmlFor="senhaAtual">
            Senha atual
          </label>

          <input
            type="password"
            id="senhaAtual"
            name="senhaAtual"
            placeholder="Digite sua senha atual"
            autoComplete="current-password"
            required
          />

        </div>


        {/* NOVA SENHA */}

        <div className="field-group">

          <label htmlFor="novaSenha">
            Nova senha
          </label>

          <input
            type="password"
            id="novaSenha"
            name="novaSenha"
            placeholder="Digite sua nova senha"
            autoComplete="new-password"
            minLength="6"
            required
          />

        </div>


        {/* CONFIRMAR SENHA */}

        <div className="field-group">

          <label htmlFor="confirmarSenha">
            Confirmar nova senha
          </label>

          <input
            type="password"
            id="confirmarSenha"
            name="confirmarSenha"
            placeholder="Digite a nova senha novamente"
            autoComplete="new-password"
            minLength="6"
            required
          />

        </div>


        {/* BOTÕES */}

        <div className="edit-actions">

          <button
            type="button"
            className="cancel-button"
            onClick={() => setPagina("perfil")}
          >
            Cancelar
          </button>


          <button
            type="submit"
            className="save-button"
          >
            Salvar nova senha
          </button>

        </div>

      </form>

    </main>
  );
}

export default TrocarSenha;