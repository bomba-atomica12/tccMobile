import { useEffect, useState } from "react";
import "./Agenda.css";

function Agenda({ setPagina }) {

  const [abaAtual, setAbaAtual] = useState("proximos");
  const [agendamentos, setAgendamentos] = useState([]);

  const MESES = [
    "JAN", "FEV", "MAR", "ABR", "MAI", "JUN",
    "JUL", "AGO", "SET", "OUT", "NOV", "DEZ"
  ];

  const DIAS_SEMANA = [
    "DOM", "SEG", "TER", "QUA", "QUI", "SEX", "SAB"
  ];


  // =========================================================
  // CARREGAR AGENDAMENTOS
  // =========================================================

  useEffect(() => {

    try {

      const dados = JSON.parse(
        localStorage.getItem("agendamentos")
      ) || [];

      setAgendamentos(dados);

    } catch (erro) {

      console.warn(
        "Erro ao ler agendamentos:",
        erro
      );

      setAgendamentos([]);

    }

  }, []);


  // =========================================================
  // FORMATAR DATA
  // =========================================================

  const formatarData = (dataISO) => {

    if (!dataISO) {

      return {
        mes: "",
        dia: "",
        diaSemana: "",
        dataFormatada: "",
        dataObj: null
      };

    }


    const [ano, mes, dia] = dataISO
      .split("-")
      .map(Number);


    const dataObj = new Date(
      ano,
      mes - 1,
      dia
    );


    return {

      mes: MESES[dataObj.getMonth()],

      dia: String(
        dataObj.getDate()
      ).padStart(2, "0"),

      diaSemana:
        DIAS_SEMANA[dataObj.getDay()],

      dataFormatada:
        `${String(dia).padStart(2, "0")}/${
          String(mes).padStart(2, "0")
        }/${ano}`,

      dataObj

    };

  };


  // =========================================================
  // CANCELAR AGENDAMENTO
  // =========================================================

  const cancelarAgendamento = (id) => {

    const confirmou = window.confirm(
      "Deseja realmente cancelar este agendamento?"
    );

    if (!confirmou) {
      return;
    }


    const listaAtualizada =
      agendamentos.filter(
        (item) =>
          String(item.id) !== String(id)
      );


    localStorage.setItem(
      "agendamentos",
      JSON.stringify(listaAtualizada)
    );


    setAgendamentos(
      listaAtualizada
    );

  };


  // =========================================================
  // VER DETALHES
  // =========================================================

  const verDetalhes = (agendamento) => {

    const {
      dataFormatada
    } = formatarData(
      agendamento.data
    );


    window.alert(

      `Procedimento: ${agendamento.procedimento}\n` +

      `Data: ${dataFormatada}\n` +

      `Horário: ${agendamento.horario}\n` +

      `Duração: ${agendamento.duracao}\n` +

      `Valor: ${agendamento.valor}\n` +

      `Profissional: ${agendamento.profissional}\n\n` +

      `Cliente: ${agendamento.nome}\n` +

      `Email: ${agendamento.email}\n` +

      `Telefone: ${agendamento.phone}`

    );

  };


  // =========================================================
  // DATA E HORA ATUAIS
  // =========================================================

  const agora = new Date();


  // =========================================================
  // FILTRAR AGENDAMENTOS
  //
  // AQUI ESTÁ A CORREÇÃO:
  //
  // Agora comparamos:
  //
  // DATA + HORÁRIO
  //
  // Assim:
  //
  // Hoje às 20:00 → Próximos
  // Hoje às 18:00 → Anteriores
  // Amanhã → Próximos
  // Ontem → Anteriores
  // =========================================================

  const agendamentosOrdenados =
    [...agendamentos].sort(
      (a, b) => {

        const dataHoraA =
          `${a.data} ${a.horario || "00:00"}`;

        const dataHoraB =
          `${b.data} ${b.horario || "00:00"}`;


        return dataHoraA.localeCompare(
          dataHoraB
        );

      }
    );


  const agendamentosVisiveis =
    agendamentosOrdenados.filter(
      (agendamento) => {

        if (!agendamento.data) {
          return false;
        }


        // ===================================================
        // CRIAR DATA/HORA DO AGENDAMENTO
        // ===================================================

        const [ano, mes, dia] =
          agendamento.data
            .split("-")
            .map(Number);


        let hora = 0;
        let minuto = 0;


        if (agendamento.horario) {

          const partesHorario =
            agendamento.horario
              .split(":")
              .map(Number);


          hora =
            partesHorario[0] || 0;

          minuto =
            partesHorario[1] || 0;

        }


        const dataHoraAgendamento =
          new Date(
            ano,
            mes - 1,
            dia,
            hora,
            minuto,
            0,
            0
          );


        // ===================================================
        // PRÓXIMOS
        // ===================================================

        if (abaAtual === "proximos") {

          return (
            dataHoraAgendamento >= agora
          );

        }


        // ===================================================
        // ANTERIORES
        // ===================================================

        return (
          dataHoraAgendamento < agora
        );

      }
    );


  // =========================================================
  // RENDER
  // =========================================================

  return (

    <main className="agenda-content">


      {/* ==================================================
          TÍTULO
      ================================================== */}

      <section className="agenda-title">

        <span className="title-decoration">

          <i className="fa-regular fa-calendar"></i>

        </span>


        <div>

          <h1>
            Meus Agendamentos
          </h1>


          <p>
            Confira seus próximos procedimentos
            e acompanhe seus horários.
          </p>

        </div>

      </section>


      {/* ==================================================
          ABAS
      ================================================== */}

      <div className="agenda-tabs">

        <button

          className={
            `tab ${
              abaAtual === "proximos"
                ? "active"
                : ""
            }`
          }

          onClick={() =>
            setAbaAtual("proximos")
          }

        >

          Próximos

        </button>


        <button

          className={
            `tab ${
              abaAtual === "anteriores"
                ? "active"
                : ""
            }`
          }

          onClick={() =>
            setAbaAtual("anteriores")
          }

        >

          Anteriores

        </button>

      </div>


      {/* ==================================================
          LISTA
      ================================================== */}

      {agendamentosVisiveis.length > 0 ? (

        <section className="appointments">

          {agendamentosVisiveis.map(
            (agendamento) => {

              const {
                mes,
                dia,
                diaSemana
              } = formatarData(
                agendamento.data
              );


              const statusClasse =
                agendamento.status === "pending"
                  ? "pending"
                  : "confirmed";


              const statusTexto =
                agendamento.status === "pending"
                  ? "Pendente"
                  : "Confirmado";


              return (

                <article

                  className="appointment-card"

                  key={
                    agendamento.id
                  }

                >


                  {/* ==================================================
                      DATA
                  ================================================== */}

                  <div className="appointment-date">

                    <span className="month">

                      {mes}

                    </span>


                    <strong>

                      {dia}

                    </strong>


                    <span className="day">

                      {diaSemana}

                    </span>

                  </div>


                  {/* ==================================================
                      INFORMAÇÕES
                  ================================================== */}

                  <div className="appointment-info">

                    <div className="appointment-top">

                      <div>

                        <span className="appointment-category">

                          {agendamento.categoria ||
                            "Procedimento"}

                        </span>


                        <h2>

                          {agendamento.procedimento}

                        </h2>

                      </div>


                      <span
                        className={`status ${statusClasse}`}
                      >

                        {statusTexto}

                      </span>

                    </div>


                    {/* ==================================================
                        DETALHES
                    ================================================== */}

                    <div className="appointment-details">

                      <span>

                        <i className="fa-regular fa-clock"></i>

                        {agendamento.horario}

                      </span>


                      <span>

                        <i className="fa-regular fa-hourglass"></i>

                        {agendamento.duracao}

                      </span>


                      <span>

                        <i className="fa-regular fa-user"></i>

                        {agendamento.profissional}

                      </span>

                    </div>


                    {/* ==================================================
                        AÇÕES
                    ================================================== */}

                    <div className="appointment-actions">

                      <button

                        className="details-button"

                        type="button"

                        onClick={() =>
                          verDetalhes(
                            agendamento
                          )
                        }

                      >

                        <i className="fa-regular fa-eye"></i>

                        Ver detalhes

                      </button>


                      <button

                        className="cancel-button"

                        type="button"

                        onClick={() =>
                          cancelarAgendamento(
                            agendamento.id
                          )
                        }

                      >

                        Cancelar

                      </button>

                    </div>

                  </div>

                </article>

              );

            }

          )}

        </section>

      ) : (

        /* ==================================================
           ESTADO VAZIO
        ================================================== */

        <section className="empty-agenda">

          <div className="empty-icon">

            <i className="fa-regular fa-calendar-xmark"></i>

          </div>


          <h2>

            Nenhum agendamento encontrado

          </h2>


          <p>

            Quando você marcar um procedimento,
            ele aparecerá aqui.

          </p>


          <button

            className="schedule-button"

            onClick={() =>
              setPagina("procedimentos")
            }

          >

            <i className="fa-solid fa-plus"></i>

            Agendar procedimento

          </button>

        </section>

      )}

    </main>

  );

}

export default Agenda;