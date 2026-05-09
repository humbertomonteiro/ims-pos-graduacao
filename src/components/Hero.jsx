import React from "react";
import "./Hero.css";
import Form from "./Form.jsx";
import logo from "../assets/imgs/ims-logo-white.png";

export default function Hero({ onSubmit, goForm }) {
  return (
    <section className="hero" id="top">
      <div className="hero-inner">
        <div className="wrap">
          <div className="hero-grid">
            <div>
              <img
                src={logo}
                alt="Instituto IMS · Excelência em Pós-Graduação Médica"
                className="hero-logo-img"
              />
              <div className="hero-badge">
                Foco Clínico · Prática Supervisionada
              </div>
              <h1>
                Pós-Graduação em
                <span className="accent">Estética Médica</span>
              </h1>
              <ul className="checks">
                <li>
                  <span>
                    Formação de <b>excelência</b> com{" "}
                    <b>prática supervisionada</b>
                  </span>
                </li>
                <li>
                  <span>
                    Reconhecida pelo <b>MEC</b> · 12 meses · presencial
                  </span>
                </li>
                <li>
                  <span>
                    Corpo docente atuante na <b>estética médica</b>
                  </span>
                </li>
                <li>
                  <span>
                    Se encaixa na sua <b>rotina médica</b> · encontros mensais
                  </span>
                </li>
              </ul>
              <a
                href="#inscricao-final"
                className="btn btn-orange"
                onClick={goForm}
              >
                Quero saber mais
              </a>
            </div>
            <div className="hero-form-col">
              <Form onSubmit={onSubmit} title="Garanta a sua vaga!" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
