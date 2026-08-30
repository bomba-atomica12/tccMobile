import { useState, useEffect } from "react";
import { supabase } from "../supabase";
import "./EditarPerfil.css";

function EditarPerfil({ setPagina }) {

  const [nome, setNome] = useState("");
  const [fotoPreview, setFotoPreview] = useState("perfil.png");
  
  const [modalAberto, setModalAberto] = useState(false);
  const [fotosDisponiveis, setFotosDisponiveis] = useState([]);
  const [carregandoFotos, setCarregandoFotos] = useState(false);

  useEffect(() => {
    async function carregarDadosUsuario() {
      try {
        const { data: { user }, error } = await supabase.auth.getUser();

        if (error) {
          console.error("Erro ao buscar usuário:", error.message);
          return;
        }

        if (user) {
          // Tenta buscar da tabela "perfis" primeiro, senão pega do metadata
          const { data: perfilData } = await supabase
            .from("perfis")
            .select("nome, foto_url")
            .eq("id", user.id)
            .single();

          setNome(perfilData?.nome || user.user_metadata?.username || "");
          if (perfilData?.foto_url) {
            setFotoPreview(perfilData.foto_url);
          } else if (user.user_metadata?.avatar_url) {
            setFotoPreview(user.user_metadata.avatar_url);
          }
        }
      } catch (erro) {
        console.warn("Erro ao carregar perfil:", erro);
      }
    }

    carregarDadosUsuario();
  }, []);

const abrirGaleriaSupabase = async () => {
    setCarregandoFotos(true);
    setModalAberto(true);

    try {
      const { data, error } = await supabase.storage
        .from("fotos_perfil")
        .list("", { limit: 50, sortBy: { column: "created_at", order: "desc" } });

      if (error) {
        console.error("Erro ao listar fotos do storage:", error.message);
        setFotosDisponiveis([]);
        setCarregandoFotos(false);
        return;
      }

      let urls = data
        .filter((file) => file.name !== ".emptyFolderPlaceholder")
        .map((file) => {
          const { data: publicUrlData } = supabase.storage
            .from("fotos_perfil")
            .getPublicUrl(file.name);
          return publicUrlData.publicUrl;
        });

      // Pega o usuário logado e verifica propriedades comuns de foto externa/Google
      const { data: { user } } = await supabase.auth.getUser();
      const googleAvatar = user?.user_metadata?.avatar_url || user?.user_metadata?.picture;

      if (googleAvatar && !urls.includes(googleAvatar)) {
        urls = [googleAvatar, ...urls];
      }

      // Busca também na tabela "perfis" para garantir que qualquer foto salva no banco apareça
      if (user?.id) {
        const { data: perfilData } = await supabase
          .from("perfis")
          .select("foto_url")
          .eq("id", user.id)
          .single();

        if (perfilData?.foto_url && !urls.includes(perfilData.foto_url)) {
          urls = [perfilData.foto_url, ...urls];
        }
      }

      setFotosDisponiveis(urls);
    } catch (err) {
      console.error("Erro ao carregar galeria:", err);
      setFotosDisponiveis([]);
    } finally {
      setCarregandoFotos(false);
    }
  };

  const selecionarFotoDaGaleria = (url) => {
    setFotoPreview(url);
    setModalAberto(false);
  };

  const salvarAlteracoes = async (event) => {
    event.preventDefault();

    const nomeLimpo = nome.trim();
    if (!nomeLimpo) {
      alert("Por favor, informe seu nome.");
      return;
    }

    try {
      const { data: { user }, error: userError } = await supabase.auth.getUser();
      if (userError || !user) {
        alert("Usuário não autenticado.");
        return;
      }

      // 1. Atualizar metadados no Auth
      const { error: updateError } = await supabase.auth.updateUser({
        data: {
          username: nomeLimpo,
          avatar_url: fotoPreview,
        },
      });

      if (updateError) {
        alert("Erro ao atualizar alterações: " + updateError.message);
        return;
      }

      // 2. Atualizar explicitamente a tabela "perfis" no banco de dados
      const { error: perfilError } = await supabase
        .from("perfis")
        .update({
          nome: nomeLimpo,
          foto_url: fotoPreview,
        })
        .eq("id", user.id);

      if (perfilError) {
        console.error("Erro ao atualizar tabela perfis:", perfilError.message);
      }

      localStorage.setItem("nomeUsuario", nomeLimpo);
      localStorage.setItem("fotoPerfil", fotoPreview);

      alert("Perfil atualizado com sucesso!");
      setPagina("perfil");

    } catch (erro) {
      console.error("Erro inesperado ao salvar perfil:", erro);
      alert("Ocorreu um erro ao salvar as alterações.");
    }
  };

  return (
    <main className="edit-profile-content">

      <button
        className="back-link"
        type="button"
        onClick={() => setPagina("perfil")}
      >
        <i className="fa-solid fa-arrow-left"></i>
        Voltar para o perfil
      </button>

      <form
        className="edit-profile-card"
        onSubmit={salvarAlteracoes}
      >

        <h1>Editar Perfil</h1>

        <p className="subtitle">
          Escolha uma foto do storage e atualize suas informações.
        </p>

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
              aria-label="Escolher foto do Storage"
              type="button"
              onClick={abrirGaleriaSupabase}
            >
              <i className="fa-solid fa-pen"></i>
            </button>
          </div>

          <p className="photo-hint">
            Clique no lápis para escolher uma foto do servidor
          </p>

        </div>

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
            onChange={(event) => setNome(event.target.value)}
            required
          />
        </div>

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

      {modalAberto && (
        <div style={modalOverlayStyle}>
          <div style={modalContentStyle}>
            <h2>Selecione uma imagem do Storage</h2>
            
            {carregandoFotos ? (
              <p style={{ textAlign: "center", margin: "2rem 0" }}>Carregando imagens do servidor...</p>
            ) : fotosDisponiveis.length === 0 ? (
              <p style={{ textAlign: "center", margin: "2rem 0" }}>Nenhuma imagem encontrada no bucket fotos_perfil.</p>
            ) : (
              <div style={gridStyle}>
                {fotosDisponiveis.map((url, index) => (
                  <img
                    key={index}
                    src={url}
                    alt={`Opção ${index}`}
                    style={imgThumbnailStyle}
                    onClick={() => selecionarFotoDaGaleria(url)}
                  />
                ))}
              </div>
            )}

            <button
              type="button"
              style={closeButtonStyle}
              onClick={() => setModalAberto(false)}
            >
              Fechar
            </button>
          </div>
        </div>
      )}

    </main>
  );
}

const modalOverlayStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.6)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

const modalContentStyle = {
  backgroundColor: "#fff",
  padding: "2rem",
  borderRadius: "12px",
  maxWidth: "500px",
  width: "90%",
  maxHeight: "80vh",
  overflowY: "auto",
};

const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fill, minmax(100px, 1fr))",
  gap: "10px",
  margin: "1.5rem 0",
};

const imgThumbnailStyle = {
  width: "100%",
  height: "100px",
  objectFit: "cover",
  borderRadius: "8px",
  cursor: "pointer",
  border: "2px solid transparent",
  transition: "border 0.2s",
};

const closeButtonStyle = {
  width: "100%",
  padding: "10px",
  backgroundColor: "#b94b65",
  color: "#fff",
  border: "none",
  borderRadius: "6px",
  cursor: "pointer",
  fontWeight: "bold",
};

export default EditarPerfil;