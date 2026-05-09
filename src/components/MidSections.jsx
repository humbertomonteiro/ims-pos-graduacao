import React from "react";
import "./MidSections.css";

export function PorqueIMS({ goForm }) {
  return (
    <section className="block cream">
      <div className="wrap">
        <div className="porq">
          <div className="imgblock reveal">
            <div>
              <h3>A gente forma.</h3>
              <span className="sub">Você transforma.</span>
            </div>
          </div>
          <div className="reveal">
            <h2>Por que o IMS?</h2>
            <ul>
              <li>
                <span className="check">✓</span>
                <span>
                  <b>Prática supervisionada</b> desde o primeiro módulo
                </span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>
                  Formação <b>presencial</b> e reconhecida pelo <b>MEC</b>
                </span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>
                  Corpo docente <b>atuante</b> na estética médica
                </span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>
                  Grade completa:{" "}
                  <b>injetáveis, corporal, capilar, tecnologias</b>
                </span>
              </li>
              <li>
                <span className="check">✓</span>
                <span>
                  Tomada de <b>decisão clínica</b> e manejo de intercorrências
                </span>
              </li>
            </ul>
            <a href="#inscricao-final" className="btn" onClick={goForm}>
              Seja um aluno IMS
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MercadoStats({ goForm }) {
  return (
    <section className="block">
      <div className="wrap">
        <h2 className="h2-center reveal">
          A estética médica <em>cresce.</em>
          <br />
          Mas o mercado não perdoa atuação <em>insegura.</em>
        </h2>

        <div className="stats-row reveal">
          <div className="stat-circle navy">
            <div className="top">A estética médica é uma das</div>
            <div className="big">áreas</div>
            <div className="bottom">que mais cresce na medicina brasileira</div>
            {/* <div className="src">(Fonte: ABCDE)</div> */}
          </div>
          <div className="stat-circle orange">
            <div className="top">Ao mesmo tempo, cresce a</div>
            <div className="big">exigência</div>
            <div className="bottom">por médicos preparados e seguros</div>
            {/* <div className="src">(Fonte: SBME)</div> */}
          </div>
        </div>

        <div className="invest reveal">
          <div className="left">
            <h2>
              Se você quer atuar com <em>segurança</em> na estética médica, essa
              formação é para <em>você!</em>
            </h2>
            <p>
              Muitos médicos querem entrar ou evoluir na estética médica, mas
              ainda sentem insegurança prática, medo de intercorrências e falta
              de estrutura para conduzir procedimentos com previsibilidade.
            </p>
            <p>
              A proposta do IMS é formar médicos com{" "}
              <b>
                base científica, prática supervisionada e tomada de decisão
                clínica
              </b>
              , para uma atuação mais segura e responsável.
            </p>
          </div>
          <div className="right">
            <ul>
              <li>
                <span className="check">✓</span>Base científica atualizada
              </li>
              <li>
                <span className="check">✓</span>Prática supervisionada desde o
                módulo 1
              </li>
              <li>
                <span className="check">✓</span>Decisão clínica e manejo de
                intercorrências
              </li>
              <li>
                <span className="check">✓</span>Grade completa de procedimentos
              </li>
            </ul>
            <a
              href="#inscricao-final"
              className="btn btn-orange"
              onClick={goForm}
            >
              Quero me inscrever
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
