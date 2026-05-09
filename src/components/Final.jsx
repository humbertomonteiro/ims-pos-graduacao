import React from "react";
import "./Final.css";
import Form from "./Form.jsx";

export function FinalForm({ onSubmit }) {
  return (
    <section className="final-band" id="inscricao-final">
      <div className="wrap">
        <div className="final-grid">
          <div className="left reveal">
            <h2>
              <span className="accent">Capacite-se</span> para um mercado em
              constante <span className="accent">expansão e demanda.</span>
            </h2>
            <p>
              Preencha seus dados para falar com a coordenação do IMS e receber
              as informações completas da Turma I da Pós-graduação em Estética
              Médica.
            </p>
            <a
              href="#"
              className="arrow-link"
              onClick={(e) => e.preventDefault()}
            >
              Cadastre-se para saber mais →
            </a>
          </div>
          <div className="reveal">
            <Form onSubmit={onSubmit} title="Garanta a sua vaga!" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap">
        <div className="grid">
          <div>
            <div className="ims">IMS</div>
            <p>Instituto · Pós-graduação em Estética Médica · Turma I · 2026</p>
          </div>
          <div>
            <h4>WhatsApp</h4>
            <ul>
              <li>
                <a href="#">(00) 00000-0000</a>
              </li>
              <li style={{ marginTop: 12 }}>
                <a href="mailto:contato@ims.edu.br">contato@ims.edu.br</a>
              </li>
            </ul>
          </div>
          <div>
            <h4>Eixos da pós</h4>
            <ul>
              <li>Injetáveis</li>
              <li>Corporal & Capilar</li>
              <li>Tecnologias</li>
              <li>Estética Íntima</li>
              <li>Gestão de Clínica</li>
            </ul>
          </div>
          {/* <div>
            <h4>Institucional</h4>
            <ul>
              <li><a href="#">Política de Privacidade</a></li>
              <li><a href="#">Política de Cookies</a></li>
              <li><a href="#">Reconhecimento MEC</a></li>
            </ul>
          </div> */}
        </div>
        <div className="copy">
          © 2026 IMS · Atendimento exclusivo para médicos · CRM exigido
        </div>
      </div>
    </footer>
  );
}

export function Thanks({ show, onClose }) {
  return (
    <div className={`thanks ${show ? "show" : ""}`}>
      <div className="thanks-inner">
        <div className="check">✓</div>
        <h2>Cadastro recebido com sucesso.</h2>
        <p>
          Recebemos suas informações. A coordenação do IMS entrará em contato
          pelo WhatsApp para apresentar os detalhes da Turma I da Pós-graduação
          em Estética Médica.
        </p>
        <button className="btn btn-orange" onClick={onClose}>
          Falar com a coordenação
        </button>
      </div>
    </div>
  );
}
