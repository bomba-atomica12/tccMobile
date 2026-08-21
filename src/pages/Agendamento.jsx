import { useEffect, useState } from "react";
import "./Agendamento.css";

function Agendamento({ setPagina }) {

  // =========================================================
  // DADOS DO PROCEDIMENTO ESCOLHIDO
  // =========================================================

  const [agendamentoDetalhes, setAgendamentoDetalhes] =
    useState(null);


  // =========================================================
  // ESTADOS
  // =========================================================

  const [dataSelecionada, setDataSelecionada] =
    useState(null);

  const [horarioSelecionado, setHorarioSelecionado] =
    useState(null);

  const [nome, setNome] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [telefone, setTelefone] =
    useState("");

  const [mensagem, setMensagem] =
    useState("");

  const [erroEmail, setErroEmail] =
    useState("");

  const [erroTelefone, setErroTelefone] =
    useState("");


  // =========================================================
  // CARREGAR PROCEDIMENTO ESCOLHIDO
  // =========================================================

  useEffect(() => {

    try {

      const dados =
        JSON.parse(
          sessionStorage.getItem(
            "agendamentoDetalhes"
          )
        );

      if (dados) {

        setAgendamentoDetalhes(dados);

      }

    } catch (erro) {

      console.error(
        "Erro ao carregar procedimento:",
        erro
      );

    }

  }, []);


  // =========================================================
  // HORÁRIOS DISPONÍVEIS
  // =========================================================

  const horarios = {

    "Limpeza de pele": {
      3: ["08:00", "09:30", "14:00"],
      4: ["09:00", "10:00", "15:00"],
      5: ["08:30", "13:00", "16:00"],
      6: ["09:00", "10:30", "14:30"],
      7: ["08:00", "11:00", "15:00"],
      10: ["09:00", "13:00", "15:30"],
      11: ["08:30", "10:00", "14:00"],
      12: ["09:00", "11:00", "16:00"],
      13: ["08:00", "13:30", "15:00"],
      14: ["10:00", "14:00", "16:00"],
      17: ["08:30", "10:30", "14:30"],
      18: ["09:00", "13:00", "15:00"],
      19: ["08:00", "11:00", "16:00"],
      20: ["09:30", "13:30", "15:30"],
      21: ["08:00", "10:00", "14:00"],
      24: ["09:00", "11:00", "15:00"],
      25: ["08:30", "13:00", "16:00"],
      26: ["09:00", "10:30", "14:30"],
      27: ["08:00", "13:30", "15:30"],
      28: ["10:00", "14:00", "16:00"],
      31: ["08:30", "11:00", "15:00"],
    },

    "Design de sobrancelhas": {
      3: ["08:30", "10:00", "14:30"],
      4: ["09:30", "13:30", "15:30"],
      5: ["08:00", "11:00", "14:00"],
      6: ["09:00", "10:30", "16:00"],
      7: ["08:30", "13:00", "15:30"],
      10: ["08:00", "10:00", "14:00"],
      11: ["09:30", "13:30", "16:00"],
      12: ["08:30", "11:00", "15:00"],
      13: ["09:00", "14:00", "16:00"],
      14: ["08:00", "10:30", "15:30"],
      17: ["09:30", "13:00", "14:30"],
      18: ["08:00", "11:00", "16:00"],
      19: ["09:00", "13:30", "15:00"],
      20: ["08:30", "10:00", "14:30"],
      21: ["09:30", "13:00", "16:00"],
      24: ["08:00", "10:30", "15:00"],
      25: ["09:00", "13:30", "16:00"],
      26: ["08:30", "11:00", "14:30"],
      27: ["09:30", "14:00", "15:30"],
      28: ["08:00", "10:00", "16:00"],
      31: ["09:00", "13:00", "15:00"],
    },

    "Depilação": {
      3: ["09:00", "10:30", "15:00"],
      4: ["08:00", "11:00", "14:00"],
      5: ["09:30", "13:30", "16:00"],
      6: ["08:30", "10:00", "15:30"],
      7: ["09:00", "13:00", "14:30"],
      10: ["08:30", "11:00", "15:00"],
      11: ["09:00", "13:30", "16:00"],
      12: ["08:00", "10:30", "14:30"],
      13: ["09:30", "13:00", "15:30"],
      14: ["08:30", "11:00", "16:00"],
      17: ["09:00", "13:30", "15:00"],
      18: ["08:00", "10:30", "14:00"],
      19: ["09:30", "13:00", "16:00"],
      20: ["08:30", "11:00", "15:30"],
      21: ["09:00", "14:00", "16:00"],
      24: ["08:00", "10:30", "15:00"],
      25: ["09:30", "13:00", "16:00"],
      26: ["08:30", "11:00", "14:30"],
      27: ["09:00", "13:30", "15:30"],
      28: ["08:00", "10:00", "16:00"],
      31: ["09:30", "14:00", "15:00"],
    },

    "Metal Detox": {
      3: ["08:00", "13:00", "15:00"],
      4: ["10:00", "14:00"],
      5: ["09:00", "14:30"],
      6: ["08:30", "13:30"],
      7: ["10:00", "15:00"],
      10: ["09:00", "14:00"],
      11: ["08:30", "13:00"],
      12: ["10:00", "15:30"],
      13: ["09:30", "14:30"],
      14: ["08:00", "13:30"],
      17: ["09:00", "14:00"],
      18: ["10:00", "15:00"],
      19: ["08:30", "13:30"],
      20: ["09:30", "14:30"],
      21: ["08:00", "15:00"],
      24: ["09:00", "13:00"],
      25: ["10:00", "14:30"],
      26: ["08:30", "15:00"],
      27: ["09:30", "13:30"],
      28: ["08:00", "14:00"],
      31: ["10:00", "15:30"],
    },

    "Reconstrução": {
      3: ["09:00", "14:00"],
      4: ["08:30", "13:30", "16:00"],
      5: ["10:00", "15:00"],
      6: ["09:00", "14:30"],
      7: ["08:00", "13:00", "16:00"],
      10: ["09:30", "14:00"],
      11: ["08:00", "13:30", "15:30"],
      12: ["10:00", "14:30"],
      13: ["09:00", "15:00"],
      14: ["08:30", "13:00", "16:00"],
      17: ["09:30", "14:00"],
      18: ["08:00", "13:30", "15:00"],
      19: ["10:00", "14:30"],
      20: ["09:00", "13:00", "16:00"],
      21: ["08:30", "15:00"],
      24: ["09:00", "14:00"],
      25: ["08:30", "13:30", "16:00"],
      26: ["10:00", "15:00"],
      27: ["09:00", "14:30"],
      28: ["08:00", "13:00", "16:00"],
      31: ["09:30", "14:00"],
    },

    "Reparação": {
      3: ["10:00", "14:30"],
      4: ["09:00", "13:00", "15:30"],
      5: ["08:30", "14:00"],
      6: ["09:30", "13:30", "16:00"],
      7: ["08:00", "14:30"],
      10: ["09:00", "13:30", "15:00"],
      11: ["08:30", "14:00"],
      12: ["10:00", "13:00", "16:00"],
      13: ["09:00", "14:30"],
      14: ["08:30", "13:30", "15:30"],
      17: ["10:00", "14:00"],
      18: ["09:00", "13:00", "16:00"],
      19: ["08:30", "14:30"],
      20: ["09:30", "13:30", "15:00"],
      21: ["08:00", "14:00"],
      24: ["09:00", "13:00", "15:30"],
      25: ["08:30", "14:30"],
      26: ["10:00", "13:30", "16:00"],
      27: ["09:00", "14:00"],
      28: ["08:30", "13:00", "15:30"],
      31: ["09:30", "14:30"],
    },

  };


  // =========================================================
  // CALENDÁRIO - AGOSTO 2026
  // =========================================================

  const dias = Array.from(
    { length: 31 },
    (_, index) => index + 1
  );

  const primeiroDiaDaSemana = 6;

  const espacosVazios = Array.from(
    { length: primeiroDiaDaSemana },
    (_, index) => index
  );


  // =========================================================
  // VERIFICAR SE O DIA TEM HORÁRIO
  // =========================================================

  function diaTemHorario(dia) {

    if (!agendamentoDetalhes) {
      return false;
    }

    const procedimento =
      agendamentoDetalhes.variante ||
      agendamentoDetalhes.procedimento;

    return (
      horarios[procedimento]?.[dia]?.length > 0
    );
  }


  // =========================================================
  // HORÁRIOS DISPONÍVEIS
  // =========================================================

  const procedimentoParaHorario =
    agendamentoDetalhes?.variante ||
    agendamentoDetalhes?.procedimento;

  const horariosDisponiveis =
    procedimentoParaHorario &&
    dataSelecionada
      ? horarios[
          procedimentoParaHorario
        ]?.[dataSelecionada] || []
      : [];


  // =========================================================
  // VALIDAR EMAIL
  // =========================================================

  function validarEmail(valor) {

    const regex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!valor) {

      setErroEmail(
        "Digite seu e-mail."
      );

      return false;
    }

    if (!regex.test(valor)) {

      setErroEmail(
        "Digite um e-mail válido."
      );

      return false;
    }

    setErroEmail("");

    return true;
  }


  // =========================================================
  // ALTERAR EMAIL
  // =========================================================
  // TRAVA:
  // - Não permite espaços
  // - Não permite caracteres inválidos
  // - Permite somente caracteres comuns de e-mail
  // =========================================================

  function handleEmailChange(e) {

    let valor =
      e.target.value;

    // Remove espaços
    valor =
      valor.replace(/\s/g, "");

    // Permite somente caracteres válidos
    // para um endereço de e-mail
    valor =
      valor.replace(
        /[^a-zA-Z0-9@._%+-]/g,
        ""
      );

    // Permite somente UM @
    const partes =
      valor.split("@");

    if (partes.length > 2) {

      valor =
        partes[0] +
        "@" +
        partes.slice(1).join("");

    }

    // Limite de caracteres
    valor =
      valor.substring(0, 100);

    setEmail(valor);

    // Validação visual enquanto digita
    if (!valor) {

      setErroEmail("");

      return;
    }

    const regex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!regex.test(valor)) {

      setErroEmail(
        "Digite um e-mail válido."
      );

    } else {

      setErroEmail("");

    }

  }


  // =========================================================
  // ALTERAR TELEFONE
  // =========================================================
  // TRAVA:
  // - Somente números
  // - Máximo de 11 números
  // - Formatação automática
  // =========================================================

  function handleTelefoneChange(e) {

    // Pega somente os números
    let valor =
      e.target.value.replace(/\D/g, "");

    // TRAVA: máximo 11 números
    valor =
      valor.substring(0, 11);

    // Formatação
    if (valor.length <= 2) {

      valor =
        valor.replace(
          /(\d{0,2})/,
          "($1"
        );

    } else if (valor.length <= 7) {

      valor =
        valor.replace(
          /(\d{2})(\d{0,5})/,
          "($1) $2"
        );

    } else {

      valor =
        valor.replace(
          /(\d{2})(\d{5})(\d{0,4})/,
          "($1) $2-$3"
        );

    }

    setTelefone(valor);

    const numeros =
      valor.replace(/\D/g, "");

    if (
      numeros.length > 0 &&
      numeros.length < 11
    ) {

      setErroTelefone(
        "Digite um telefone válido."
      );

    } else {

      setErroTelefone("");

    }

  }


  // =========================================================
  // VALIDAR TELEFONE
  // =========================================================

  function validarTelefone() {

    const numeros =
      telefone.replace(/\D/g, "");

    if (!numeros) {

      setErroTelefone(
        "Digite seu telefone."
      );

      return false;
    }

    if (numeros.length !== 11) {

      setErroTelefone(
        "Digite um telefone válido."
      );

      return false;
    }

    setErroTelefone("");

    return true;
  }


  // =========================================================
  // CONFIRMAR AGENDAMENTO
  // =========================================================

  function confirmarAgendamento() {

    setMensagem("");


    // =======================================================
    // VERIFICAR PROCEDIMENTO
    // =======================================================

    if (!agendamentoDetalhes) {

      setMensagem(
        "Nenhum procedimento foi selecionado."
      );

      return;
    }


    // =======================================================
    // VERIFICAR NOME
    // =======================================================

    if (!nome.trim()) {

      setMensagem(
        "Digite seu nome."
      );

      return;
    }


    // =======================================================
    // VERIFICAR EMAIL
    // =======================================================

    if (!validarEmail(email)) {
      return;
    }


    // =======================================================
    // VERIFICAR TELEFONE
    // =======================================================

    if (!validarTelefone()) {
      return;
    }


    // =======================================================
    // VERIFICAR DATA
    // =======================================================

    if (!dataSelecionada) {

      setMensagem(
        "Selecione uma data."
      );

      return;
    }


    // =======================================================
    // VERIFICAR HORÁRIO
    // =======================================================

    if (!horarioSelecionado) {

      setMensagem(
        "Selecione um horário."
      );

      return;
    }


    // =======================================================
    // CRIAR DATA
    // =======================================================

    const data =
      `2026-08-${String(
        dataSelecionada
      ).padStart(2, "0")}`;


    // =======================================================
    // CRIAR AGENDAMENTO
    // =======================================================

    const novoAgendamento = {

      id: Date.now(),

      nome:
        nome.trim(),

      email:
        email.trim(),

      phone:
        telefone,

      procedimento:
        agendamentoDetalhes.procedimento,

      categoria:
        agendamentoDetalhes.categoria,

      variante:
        agendamentoDetalhes.variante,

      valor:
        agendamentoDetalhes.valor,

      duracao:
        agendamentoDetalhes.duracao,

      retoque:
        agendamentoDetalhes.retoque,

      profissional:
        agendamentoDetalhes.profissional,

      data:
        data,

      horario:
        horarioSelecionado,

      status:
        "pending"

    };


    // =======================================================
    // PEGAR AGENDAMENTOS EXISTENTES
    // =======================================================

    let agendamentosExistentes = [];

    try {

      agendamentosExistentes =
        JSON.parse(
          localStorage.getItem(
            "agendamentos"
          )
        ) || [];

    } catch (erro) {

      console.error(
        "Erro ao carregar agendamentos:",
        erro
      );

      agendamentosExistentes = [];

    }


    // =======================================================
    // ADICIONAR O NOVO AGENDAMENTO
    // =======================================================

    const listaAtualizada = [

      ...agendamentosExistentes,

      novoAgendamento

    ];


    // =======================================================
    // SALVAR NO LOCALSTORAGE
    // =======================================================

    localStorage.setItem(
      "agendamentos",
      JSON.stringify(
        listaAtualizada
      )
    );


    // =======================================================
    // CONFIRMAÇÃO
    // =======================================================

    setMensagem(
      "Agendamento realizado com sucesso!"
    );


    // =======================================================
    // LIMPAR PROCEDIMENTO TEMPORÁRIO
    // =======================================================

    sessionStorage.removeItem(
      "agendamentoDetalhes"
    );


    // =======================================================
    // IR PARA A AGENDA
    // =======================================================

    setTimeout(() => {

      if (setPagina) {

        // CORRIGIDO:
        // No seu App.jsx a página se chama "agenda"
        setPagina("agenda");

      }

    }, 1000);

  }


  // =========================================================
  // RENDER
  // =========================================================

  return (

    <main className="pagina-agendamento">


      {/* =====================================================
          TÍTULO
      ===================================================== */}

      <div className="titulo-agendamento">

        <h1>
          Novo Agendamento
        </h1>

      </div>


      <div className="conteudo-agendamento">


        {/* ===================================================
            COLUNA ESQUERDA
        =================================================== */}

        <aside className="coluna-informacoes">


          {/* =================================================
              INFORMAÇÕES
          ================================================= */}

          <section className="informacoes">

            <h2>
              Informações
            </h2>


            {/* NOME */}

            <div className="campo">

              <label>
                Nome Cliente:
              </label>

              <input
                type="text"
                placeholder="Digite seu nome"
                value={nome}
                onChange={(e) =>
                  setNome(e.target.value)
                }
              />

            </div>


            {/* EMAIL */}

            <div className="campo">

              <label>
                Email:
              </label>

              <input
                type="email"
                placeholder="ex: exemplo@gmail.com"
                value={email}
                onChange={handleEmailChange}
                onBlur={() =>
                  email &&
                  validarEmail(email)
                }
                maxLength={100}
                autoComplete="email"
              />

              {erroEmail && (

                <small
                  className="erro-campo"
                  style={{
                    color: "#b94b65",
                    display: "block",
                    marginTop: "5px"
                  }}
                >
                  {erroEmail}
                </small>

              )}

            </div>


            {/* TELEFONE */}

            <div className="campo">

              <label>
                Telefone:
              </label>

              <input
                type="tel"
                inputMode="numeric"
                placeholder="ex: (11) 99999-9999"
                value={telefone}
                onChange={
                  handleTelefoneChange
                }
                onBlur={() =>
                  telefone &&
                  validarTelefone()
                }
                maxLength={15}
                autoComplete="tel"
              />

              {erroTelefone && (

                <small
                  className="erro-campo"
                  style={{
                    color: "#b94b65",
                    display: "block",
                    marginTop: "5px"
                  }}
                >
                  {erroTelefone}
                </small>

              )}

            </div>

          </section>


          {/* =================================================
              DETALHES
          ================================================= */}

          <section className="detalhes-agendamento">

            <h2>
              Detalhes
            </h2>


            <p>

              <strong>
                Procedimento:
              </strong>{" "}

              {agendamentoDetalhes
                ?.procedimento || "—"}

            </p>


            {/* OPÇÃO */}

            {agendamentoDetalhes?.variante && (

              <p>

                <strong>
                  Opção:
                </strong>{" "}

                {agendamentoDetalhes.variante}

              </p>

            )}


            <p>

              <strong>
                Data:
              </strong>{" "}

              {dataSelecionada

                ? `${String(
                    dataSelecionada
                  ).padStart(2, "0")}/08/2026`

                : "—"}

            </p>


            <p>

              <strong>
                Horário:
              </strong>{" "}

              {horarioSelecionado || "—"}

            </p>


            <p>

              <strong>
                Duração:
              </strong>{" "}

              {agendamentoDetalhes
                ?.duracao || "—"}

            </p>


            <p>

              <strong>
                Valor:
              </strong>{" "}

              {agendamentoDetalhes
                ?.valor || "—"}

            </p>


            <p>

              <strong>
                Profissional:
              </strong>{" "}

              {agendamentoDetalhes
                ?.profissional || "—"}

            </p>

          </section>

        </aside>


        {/* ===================================================
            COLUNA DIREITA
        =================================================== */}

        <section className="area-agendamento">


          <h2>
            Selecione uma Data
          </h2>


          {/* =================================================
              CALENDÁRIO
          ================================================= */}

          <div className="calendario">


            <div className="mes">
              Agosto 2026
            </div>


            {/* DIAS DA SEMANA */}

            <div className="dias-semana">

              <span>Dom</span>
              <span>Seg</span>
              <span>Ter</span>
              <span>Qua</span>
              <span>Qui</span>
              <span>Sex</span>
              <span>Sáb</span>

            </div>


            {/* DIAS */}

            <div className="dias">


              {/* ESPAÇOS */}

              {espacosVazios.map(
                (espaco) => (

                  <span
                    key={`vazio-${espaco}`}
                  ></span>

                )
              )}


              {/* DIAS */}

              {dias.map((dia) => {

                const disponivel =
                  diaTemHorario(dia);


                return (

                  <button
                    key={dia}
                    type="button"
                    className={`
                      dia
                      ${
                        dataSelecionada === dia
                          ? "selecionado"
                          : ""
                      }
                      ${
                        !disponivel &&
                        agendamentoDetalhes
                          ? "indisponivel"
                          : ""
                      }
                    `}
                    disabled={
                      agendamentoDetalhes &&
                      !disponivel
                    }
                    onClick={() => {

                      setDataSelecionada(
                        dia
                      );

                      setHorarioSelecionado(
                        null
                      );

                      setMensagem("");

                    }}
                  >

                    {dia}

                  </button>

                );

              })}

            </div>

          </div>


          {/* =================================================
              HORÁRIOS
          ================================================= */}

          <div className="area-horarios">


            <h2>
              Horários Disponíveis
            </h2>


            {/* SEM PROCEDIMENTO */}

            {!agendamentoDetalhes ? (

              <p className="aviso-horario">

                Nenhum procedimento foi
                selecionado.

                <br />

                Volte para a tela de
                procedimentos e escolha um.

              </p>

            ) : !dataSelecionada ? (

              <p className="aviso-horario">

                Selecione uma data para
                ver os horários disponíveis.

              </p>

            ) : horariosDisponiveis.length === 0 ? (

              <p className="aviso-horario">

                Não há horários disponíveis
                para esta data.

              </p>

            ) : (

              <div className="horarios">

                {horariosDisponiveis.map(
                  (horario) => (

                    <button
                      key={horario}
                      type="button"
                      className={
                        horarioSelecionado ===
                        horario

                          ? "horario selecionado"

                          : "horario"
                      }
                      onClick={() => {

                        setHorarioSelecionado(
                          horario
                        );

                        setMensagem("");

                      }}
                    >

                      {horario}

                    </button>

                  )
                )}

              </div>

            )}

          </div>


          {/* =================================================
              MENSAGEM
          ================================================= */}

          {mensagem && (

            <p
              className="mensagem-agendamento"
              style={{
                color:
                  mensagem.includes(
                    "sucesso"
                  )
                    ? "#4f8a61"
                    : "#b94b65"
              }}
            >

              {mensagem}

            </p>

          )}


          {/* =================================================
              BOTÃO
          ================================================= */}

          <button
            type="button"
            className="botao-confirmar"
            onClick={
              confirmarAgendamento
            }
          >

            Confirmar Agendamento

          </button>

        </section>

      </div>

    </main>

  );

}

export default Agendamento;