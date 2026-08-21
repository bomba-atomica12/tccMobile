import { useState } from "react";
import "./EditarPerfil.css";

function EditarPerfil({ setPagina }) {

  // =========================================================
  // DADOS SALVOS
  // =========================================================

  const nomeSalvo =
    localStorage.getItem("nomeUsuario") || "Nome do Usuário";

  const emailSalvo =
    localStorage.getItem("emailUsuario") || "usuario@gmail.com";

  const fotoSalva =
    localStorage.getItem("fotoPerfil") || "perfil.png";


  // =========================================================
  // ESTADOS
  // =========================================================

  const [nome, setNome] = useState(nomeSalvo);

  const [email, setEmail] = useState(emailSalvo);

  const [fotoPreview, setFotoPreview] = useState(fotoSalva);

  const [fotoPendente, setFotoPendente] = useState(null);


  // =========================================================
  // ESCOLHER FOTO
  // =========================================================

  const selecionarFoto = (event) => {

    const arquivo = event.target.files[0];

    if (!arquivo) {
      return;
    }


    // Verifica se é imagem

    if (!arquivo.type.startsWith("image/")) {

      alert("Por favor, selecione um arquivo de imagem.");

      event.target.value = "";

      return;
    }


    // Limite de 5 MB

    const tamanhoMaximoMB = 5;

    if (arquivo.size > tamanhoMaximoMB * 1024 * 1024) {

      alert(
        `A imagem deve ter no máximo ${tamanhoMaximoMB}MB.`
      );

      event.target.value = "";

      return;
    }


    // Leitura da imagem

    const leitor = new FileReader();

    leitor.onload = () => {

      setFotoPendente(leitor.result);

      setFotoPreview(leitor.result);

    };


    leitor.onerror = () => {

      alert(
        "Não foi possível ler a imagem selecionada. Tente novamente."
      );

    };


    leitor.readAsDataURL(arquivo);
  };


  // =========================================================
  // SALVAR ALTERAÇÕES
  // =========================================================

  const salvarAlteracoes = (event) => {

    event.preventDefault();


    // Nome

    const nomeLimpo = nome.trim();

    if (!nomeLimpo) {

      alert("Por favor, informe seu nome.");

      return;
    }


    // E-mail

    const emailLimpo = email.trim();

    const emailValido =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailLimpo);


    if (!emailLimpo || !emailValido) {

      alert("Por favor, informe um e-mail válido.");

      return;
    }


    // Salva nome e e-mail

    localStorage.setItem(
      "nomeUsuario",
      nomeLimpo
    );

    localStorage.setItem(
      "emailUsuario",
      emailLimpo
    );


    // Salva foto somente se uma nova foi escolhida

    if (fotoPendente) {

      try {

        localStorage.setItem(
          "fotoPerfil",
          fotoPendente
        );

      } catch (erro) {

        console.warn(
          "Não foi possível salvar a foto localmente:",
          erro
        );

        alert(
          "Não foi possível salvar a foto. Tente uma imagem menor."
        );

        return;
      }
    }


    // Volta para o perfil

    setPagina("perfil");
  };


  // =========================================================
  // RENDERIZAÇÃO
  // =========================================================

  return (

    <main className="edit-profile-content">


      {/* =====================================================
          VOLTAR
      ====================================================== */}

      <button
        className="back-link"
        onClick={() => setPagina("perfil")}
      >

        <i className="fa-solid fa-arrow-left"></i>

        Voltar para o perfil

      </button>


      {/* =====================================================
          CARD
      ====================================================== */}

      <form
        className="edit-profile-card"
        onSubmit={salvarAlteracoes}
      >


        <h1>Editar Perfil</h1>


        <p className="subtitle">

          Atualize sua foto e suas informações pessoais.

        </p>


        {/* ===================================================
            FOTO
        ==================================================== */}

        <div className="edit-photo-wrapper">


          <div className="profile-photo">

            <img
              src={fotoPreview}
              alt="Foto de perfil"
              className="foto-edicao"
            />


            <button
              className="edit-photo"
              id="btnEditarFoto"
              aria-label="Trocar foto"
              type="button"
              onClick={() =>
                document
                  .getElementById("inputFoto")
                  .click()
              }
            >

              <i className="fa-solid fa-pen"></i>

            </button>


            <input
              type="file"
              id="inputFoto"
              accept="image/*"
              hidden
              onChange={selecionarFoto}
            />

          </div>


          <p className="photo-hint">

            Clique no lápis para trocar sua foto

          </p>

        </div>


        {/* ===================================================
            NOME
        ==================================================== */}

        <div className="field-group">

          <label htmlFor="nome">
            Nome de usuário
          </label>


          <input
            type="text"
            id="nome"
            name="nome"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(event) =>
              setNome(event.target.value)
            }
            required
          />

        </div>


        {/* ===================================================
            EMAIL
        ==================================================== */}

        <div className="field-group">

          <label htmlFor="email">
            Email
          </label>


          <input
            type="email"
            id="email"
            name="email"
            placeholder="ex: aaaaaa@gmail.com"
            value={email}
            onChange={(event) =>
              setEmail(event.target.value)
            }
            required
          />

        </div>


        {/* ===================================================
            BOTÕES
        ==================================================== */}

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

            Salvar alterações

          </button>


        </div>

      </form>

    </main>
  );
}

export default EditarPerfil;