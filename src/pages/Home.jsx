import "./Home.css";

// Imagens
import limpezaDePele from "../assets/imagens/limpeza-de-pele.png";
import depilacao from "../assets/imagens/depilacao.avif";
import sobrancelhas from "../assets/imagens/sobrancelhas.jpg";
import hidratacao from "../assets/imagens/hidratacao.jpeg";
import metalDetox from "../assets/imagens/metal-detox.jpeg";
import reconstrucao from "../assets/imagens/reconstrucao.jpeg";
import reparacao from "../assets/imagens/reparacao.jpeg";

function Home() {
  return (
    <main className="home-page">

      {/* =====================================================
          HOME / BANNER
      ====================================================== */}

      <section className="home-section">

        <div className="home-content">

          <span className="small-title">
            Beleza • Cuidado • Bem-estar
          </span>

          <h1>
            Sejam todos bem-vindos à
            <span>Mah Estética</span>
          </h1>

          <p>
            Nosso site foi criado para ser um meio rápido e confortável
            para encontrar aquilo que você busca na área da beleza e
            autoestima. Venha realçar sua beleza natural e renovar suas
            energias conosco!
          </p>

          <div className="home-buttons">

            <a href="#services" className="btn">
              Conheça nossos serviços
            </a>

            <a href="#" className="btn btn-outline">
              Agendar horário
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          SOBRE NÓS
      ====================================================== */}

      <section className="about" id="about">

        <h2 className="heading">
          Sobre a <span>Mah Estética</span>
        </h2>

        <div className="about-row">

          <div className="about-image">

            <img
              src={limpezaDePele}
              alt="Tratamento de estética facial"
            />

            <div className="experience">

              <strong>+5</strong>

              <span>
                anos cuidando
                <br />
                de você
              </span>

            </div>

          </div>


          <div className="about-content">

            <span className="section-label">
              QUEM SOMOS
            </span>

            <h3>
              Beleza que começa
              com o cuidado.
            </h3>

            <p>
              A Mah Estética nasceu com o propósito de oferecer
              momentos de cuidado, relaxamento e autoestima, em um
              espaço pensado para você se sentir bem em cada detalhe.
            </p>

            <p>
              Trabalhamos com procedimentos selecionados e
              atendimento personalizado para valorizar a beleza
              única de cada cliente.
            </p>


            <div className="about-list">

              <div>
                <span className="check">✓</span>
                Atendimento personalizado
              </div>

              <div>
                <span className="check">✓</span>
                Ambiente confortável
              </div>

              <div>
                <span className="check">✓</span>
                Profissionais especializados
              </div>

              <div>
                <span className="check">✓</span>
                Produtos selecionados
              </div>

            </div>


            <a href="#" className="btn">
              Agende seu horário
            </a>

          </div>

        </div>

      </section>


      {/* =====================================================
          BENEFÍCIOS
      ====================================================== */}

      <section className="icons-container">

        <div className="icons">

          <div className="benefit-icon">
            ✨
          </div>

          <div className="info">

            <h3>
              Atendimento personalizado
            </h3>

            <span>
              Cada cliente é única
            </span>

          </div>

        </div>


        <div className="icons">

          <div className="benefit-icon">
            ⭐
          </div>

          <div className="info">

            <h3>
              Qualidade
            </h3>

            <span>
              Produtos selecionados
            </span>

          </div>

        </div>


        <div className="icons">

          <div className="benefit-icon">
            ♡
          </div>

          <div className="info">

            <h3>
              Seu momento
            </h3>

            <span>
              Cuide de você
            </span>

          </div>

        </div>


        <div className="icons">

          <div className="benefit-icon">
            🕐
          </div>

          <div className="info">

            <h3>
              Agendamento
            </h3>

            <span>
              Horários flexíveis
            </span>

          </div>

        </div>

      </section>


      {/* =====================================================
          SERVIÇOS
      ====================================================== */}

      <section className="services" id="services">

        <h2 className="heading">
          Principais <span>Serviços</span>
        </h2>

        <p className="section-description">
          Veja alguns dos nossos serviços mais requisitados e escolha
          o cuidado ideal para você.
        </p>


        {/* =================================================
            PROCEDIMENTOS
        ================================================== */}

        <div className="service-group">

          <div className="service-group-title">

            <h3>
              Procedimentos
            </h3>

            <span>
              Cuidados feitos aqui, com a Mah
            </span>

          </div>


          <div className="service-grid">


            {/* PROCEDIMENTO 1 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src={depilacao}
                  alt="Depilação Feminina"
                />

              </div>


              <div className="service-info">

                <div className="service-icon">
                  ✂
                </div>

                <h3>
                  Depilação Feminina
                </h3>

                <p>
                  Pele lisa e macia com técnicas seguras
                  e cuidadosas para todos os tipos de pele.
                </p>

                <a href="#">
                  Saiba Mais →
                </a>

              </div>

            </div>


            {/* PROCEDIMENTO 2 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src={limpezaDePele}
                  alt="Estética Facial"
                />

              </div>


              <div className="service-info">

                <div className="service-icon">
                  😊
                </div>

                <h3>
                  Estética Facial
                </h3>

                <p>
                  Tratamentos especializados para manter
                  sua pele saudável e radiante.
                </p>

                <a href="#">
                  Saiba Mais →
                </a>

              </div>

            </div>


            {/* PROCEDIMENTO 3 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src={sobrancelhas}
                  alt="Sobrancelhas"
                />

              </div>


              <div className="service-info">

                <div className="service-icon">
                  ✨
                </div>

                <h3>
                  Sobrancelhas
                </h3>

                <p>
                  Resultado natural e duradouro para
                  realçar seus traços.
                </p>

                <a href="#">
                  Saiba Mais →
                </a>

              </div>

            </div>

          </div>

        </div>


        {/* =================================================
            PRODUTOS
        ================================================== */}

        <div className="service-group">

          <div className="service-group-title">

            <h3>
              Produtos
            </h3>

            <span>
              Para continuar o cuidado em casa
            </span>

          </div>


          <div className="service-grid">


            {/* PRODUTO 1 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src={hidratacao}
                  alt="Hidratação"
                />

              </div>


              <div className="service-info">

                <div className="service-icon">
                  💧
                </div>

                <h3>
                  Hidratação
                </h3>

                <p>
                  Nutrição profunda para devolver o brilho
                  e a maciez dos fios.
                </p>

                <a href="#">
                  Saiba Mais →
                </a>

              </div>

            </div>


            {/* PRODUTO 2 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src={metalDetox}
                  alt="Metal Detox"
                />

              </div>


              <div className="service-info">

                <div className="service-icon">
                  🍃
                </div>

                <h3>
                  Metal Detox
                </h3>

                <p>
                  Remove resíduos metálicos e devolve
                  a saúde e o equilíbrio dos fios.
                </p>

                <a href="#">
                  Saiba Mais →
                </a>

              </div>

            </div>


            {/* PRODUTO 3 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src={reconstrucao}
                  alt="Reconstrução"
                />

              </div>


              <div className="service-info">

                <div className="service-icon">
                  ✨
                </div>

                <h3>
                  Reconstrução
                </h3>

                <p>
                  Recupera a estrutura dos fios danificados,
                  trazendo força e vitalidade.
                </p>

                <a href="#">
                  Saiba Mais →
                </a>

              </div>

            </div>


            {/* PRODUTO 4 */}

            <div className="service-card">

              <div className="service-image">

                <img
                  src={reparacao}
                  alt="Reparação"
                />

              </div>


              <div className="service-info">

                <div className="service-icon">
                  💗
                </div>

                <h3>
                  Reparação
                </h3>

                <p>
                  Cuidado intensivo para selar as pontas
                  e prevenir novos danos.
                </p>

                <a href="#">
                  Saiba Mais →
                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          CONTATO
      ====================================================== */}

      <section className="contact" id="contact">

        <h2 className="heading">
          Fale <span>Conosco</span>
        </h2>

        <p className="section-description">
          Estamos à disposição para tirar dúvidas e confirmar
          seu horário. Entre em contato por qualquer um dos
          canais abaixo.
        </p>


        <div className="contact-info">


          <div>

            <div className="contact-icon">
              ☎
            </div>

            <div>

              <span>
                Telefone
              </span>

              <strong>
                (11) 99999-9999
              </strong>

            </div>

          </div>


          <div>

            <div className="contact-icon">
              ♡
            </div>

            <div>

              <span>
                WhatsApp
              </span>

              <strong>
                (11) 99999-9999
              </strong>

            </div>

          </div>


          <div>

            <div className="contact-icon">
              ✉
            </div>

            <div>

              <span>
                E-mail
              </span>

              <strong>
                contato.belagestao@gmail.com
              </strong>

            </div>

          </div>


          <div>

            <div className="contact-icon">
              📍
            </div>

            <div>

              <span>
                Endereço
              </span>

              <strong>
                São Paulo - SP
              </strong>

            </div>

          </div>


          <div>

            <div className="contact-icon">
              🕐
            </div>

            <div>

              <span>
                Horário
              </span>

              <strong>
                Seg a Sáb - 09h às 19h
              </strong>

            </div>

          </div>


        </div>

      </section>


      {/* =====================================================
          FOOTER
      ====================================================== */}

      <footer className="footer">

        <div className="footer-grid">


          {/* MARCA */}

          <div className="footer-box brand">

            <a href="#" className="logo">
              Mah<span>.</span>
            </a>

            <p>
              Beleza, cuidado e bem-estar em um só lugar.
              Um espaço pensado especialmente para você.
            </p>


            <div className="social">

              <a href="#">
                Instagram
              </a>

              <a href="#">
                WhatsApp
              </a>

              <a href="#">
                Facebook
              </a>

              <a href="#">
                TikTok
              </a>

            </div>

          </div>


          {/* MENU */}

          <div className="footer-box">

            <h3>
              Menu
            </h3>

            <a href="#home">
              Início
            </a>

            <a href="#about">
              Sobre nós
            </a>

            <a href="#services">
              Serviços
            </a>

            <a href="#contact">
              Contato
            </a>

          </div>


          {/* SERVIÇOS */}

          <div className="footer-box">

            <h3>
              Serviços
            </h3>

            <a href="#services">
              Limpeza de Pele
            </a>

            <a href="#services">
              Tratamento Facial
            </a>

            <a href="#services">
              Sobrancelhas
            </a>

            <a href="#services">
              Depilação
            </a>

            <a href="#services">
              Produtos
            </a>

          </div>


          {/* CONTATO */}

          <div className="footer-box">

            <h3>
              Contato
            </h3>

            <p>
              ☎ &nbsp; (11) 99999-9999
            </p>

            <p>
              ♡ &nbsp; (11) 99999-9999
            </p>

            <p>
              ✉ &nbsp; contato@maestetica.com
            </p>

            <p>
              📍 &nbsp; São Paulo - SP
            </p>

          </div>

        </div>


        <div className="credit">

          <p>
            © 2026 <span>Mah Estética</span>.
            Todos os direitos reservados.
          </p>

          <p>
            Feito com ♡
          </p>

        </div>

      </footer>

    </main>
  );
}

export default Home;