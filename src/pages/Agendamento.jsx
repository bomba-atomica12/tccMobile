import { useState } from "react";
import "./Agendamento.css";

function Agendamento() {
  // ==============================
  // ESTADOS
  // ==============================

  const [dataSelecionada, setDataSelecionada] = useState(null);
  const [horarioSelecionado, setHorarioSelecionado] = useState(null);
  const [servicoSelecionado, setServicoSelecionado] = useState("");
  const [mensagem, setMensagem] = useState("");

  // ==============================
  // SERVIÇOS
  // ==============================

  const servicos = [
    "Limpeza de pele",
    "Design de sobrancelhas",
    "Depilação",
    "Metal Detox",
    "Reconstrução",
    "Reparação",
  ];

  // ==============================
  // HORÁRIOS
  // ==============================
  // Os horários são organizados por:
  //
  // procedimento
  //     ↓
  //   dia
  //     ↓
  // horários disponíveis
  //
  // Por enquanto são dados de teste.
  // Depois podemos buscar isso do Supabase.

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

  // ==============================
  // CALENDÁRIO
  // ==============================

  const dias = Array.from(
    { length: 31 },
    (_, index) => index + 1
  );

  // Agosto de 2026 começa em um sábado.
  // 0 = Domingo
  // 1 = Segunda
  // ...
  // 6 = Sábado
  const primeiroDiaDaSemana = 6;

  // Espaços vazios antes do dia 1
  const espacosVazios = Array.from(
    { length: primeiroDiaDaSemana },
    (_, index) => index
  );

  // ==============================
  // VERIFICA SE O DIA TEM HORÁRIO
  // ==============================

  function diaTemHorario(dia) {
    if (!servicoSelecionado) {
      return false;
    }

    return (
      horarios[servicoSelecionado]?.[dia]?.length > 0
    );
  }

  // ==============================
  // HORÁRIOS DISPONÍVEIS
  // ==============================

  const horariosDisponiveis =
    servicoSelecionado && dataSelecionada
      ? horarios[servicoSelecionado]?.[dataSelecionada] || []
      : [];

  // ==============================
  // CONFIRMAR AGENDAMENTO
  // ==============================

  function confirmarAgendamento() {
    if (!servicoSelecionado) {
      setMensagem("Selecione um procedimento.");
      return;
    }

    if (!dataSelecionada) {
      setMensagem("Selecione uma data.");
      return;
    }

    if (!horarioSelecionado) {
      setMensagem("Selecione um horário.");
      return;
    }

    setMensagem(
      `Agendamento selecionado: ${servicoSelecionado}, dia ${dataSelecionada}/08/2026 às ${horarioSelecionado}.`
    );
  }

  // ==============================
  // RETORNO DA TELA
  // ==============================

  return (
    <main className="pagina-agendamento">

      {/* CABEÇALHO */}

      <div className="titulo-agendamento">
        <h1>Novo Agendamento</h1>
      </div>


      <div className="conteudo-agendamento">

        {/* ==============================
            COLUNA ESQUERDA
        ============================== */}

        <aside className="coluna-informacoes">

          {/* INFORMAÇÕES */}

          <section className="informacoes">

            <h2>Informações</h2>

            {/* Nome */}

            <div className="campo">

              <label>Nome Cliente:</label>

              <input
                type="text"
                placeholder="Digite seu nome"
              />

            </div>


            {/* Email */}

            <div className="campo">

              <label>Email:</label>

              <input
                type="email"
                placeholder="ex: exemplo@gmail.com"
              />

            </div>


            {/* Telefone */}

            <div className="campo">

              <label>Telefone:</label>

              <input
                type="tel"
                placeholder="ex: (11) 99999-9999"
              />

            </div>


            {/* Serviço */}

            <div className="campo">

              <label>Escolha o Serviço:</label>

              <select
                value={servicoSelecionado}
                onChange={(e) => {

                  setServicoSelecionado(
                    e.target.value
                  );

                  // Limpa o horário anterior
                  setHorarioSelecionado(null);

                  // Limpa mensagens
                  setMensagem("");

                }}
              >

                <option value="">
                  Selecione um serviço
                </option>

                {servicos.map((servico) => (

                  <option
                    key={servico}
                    value={servico}
                  >
                    {servico}
                  </option>

                ))}

              </select>

            </div>

          </section>


          {/* ==============================
              DETALHES
          ============================== */}

          <section className="detalhes-agendamento">

            <h2>Detalhes</h2>

            <p>
              <strong>Procedimento:</strong>{" "}
              {servicoSelecionado || "—"}
            </p>

            <p>
              <strong>Data:</strong>{" "}
              {dataSelecionada
                ? `${dataSelecionada}/08/2026`
                : "—"}
            </p>

            <p>
              <strong>Horário:</strong>{" "}
              {horarioSelecionado || "—"}
            </p>

            <p>
              <strong>Duração:</strong> —
            </p>

            <p>
              <strong>Valor:</strong> —
            </p>

            <p>
              <strong>Profissional:</strong> —
            </p>

          </section>

        </aside>


        {/* ==============================
            COLUNA DIREITA
        ============================== */}

        <section className="area-agendamento">

          <h2>Selecione uma Data</h2>


          {/* ==============================
              CALENDÁRIO
          ============================== */}

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

              {/* Espaços antes do dia 1 */}

              {espacosVazios.map((espaco) => (

                <span
                  key={`vazio-${espaco}`}
                ></span>

              ))}


              {/* Dias do mês */}

              {dias.map((dia) => {

                const disponivel =
                  diaTemHorario(dia);

                return (

                  <button
                    key={dia}
                    className={`
                      dia
                      ${
                        dataSelecionada === dia
                          ? "selecionado"
                          : ""
                      }
                      ${
                        !disponivel &&
                        servicoSelecionado
                          ? "indisponivel"
                          : ""
                      }
                    `}
                    disabled={
                      servicoSelecionado &&
                      !disponivel
                    }
                    onClick={() => {

                      setDataSelecionada(dia);

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


          {/* ==============================
              HORÁRIOS
          ============================== */}

          <div className="area-horarios">

            <h2>Horários Disponíveis</h2>


            {/* Nenhum procedimento ou data */}

            {!servicoSelecionado ||
            !dataSelecionada ? (

              <p className="aviso-horario">

                Selecione um procedimento e uma
                data para ver os horários disponíveis.

              </p>

            ) : horariosDisponiveis.length === 0 ? (

              /* Sem horários */

              <p className="aviso-horario">

                Não há horários disponíveis para
                esta data e procedimento.

              </p>

            ) : (

              /* Horários */

              <div className="horarios">

                {horariosDisponiveis.map(
                  (horario) => (

                    <button
                      key={horario}
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


          {/* ==============================
              MENSAGEM
          ============================== */}

          {mensagem && (

            <p className="mensagem-agendamento">
              {mensagem}
            </p>

          )}


          {/* ==============================
              BOTÃO
          ============================== */}

          <button
            className="botao-confirmar"
            onClick={confirmarAgendamento}
          >
            Confirmar Agendamento
          </button>

        </section>

      </div>

    </main>
  );
}

export default Agendamento;