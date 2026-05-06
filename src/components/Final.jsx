import React, { useState } from 'react';
import Form from './Form.jsx';

const FAQ = [
  [
    'A pós-graduação é exclusiva para médicos?',
    'Sim. A formação é exclusiva para médicos.',
  ],
  [
    'A modalidade é presencial?',
    'Sim. A Pós-graduação em Estética Médica IMS é presencial.',
  ],
  ['Qual é a duração da pós?', 'A duração é de 12 meses.'],
  ['Quando começam as aulas?', 'A Turma I tem início em maio de 2026.'],
  [
    'A certificação é reconhecida pelo MEC?',
    'Sim. A certificação é reconhecida pelo MEC.',
  ],
  [
    'A formação tem prática supervisionada?',
    'Sim. A proposta da pós é integrar conhecimento científico, execução prática supervisionada e tomada de decisão clínica.',
  ],
  [
    'Como faço para receber valores e condições de matrícula?',
    'Preencha o formulário e fale com a coordenação.',
  ],
];

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {FAQ.map(([q, a], i) => (
        <div key={i} className={`qa ${open === i ? 'open' : ''}`}>
          <button
            className="qa-q"
            onClick={() => setOpen(open === i ? -1 : i)}
          >
            <span>
              <span
                className="mono"
                style={{
                  fontSize: 11,
                  color: 'var(--ink-mute)',
                  marginRight: 16,
                  letterSpacing: '0.16em',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </span>
              {q}
            </span>
            <span className="toggle"></span>
          </button>
          <div className="qa-a">{a}</div>
        </div>
      ))}
    </div>
  );
}

export function FinalForm({ onSubmit }) {
  return (
    <section className="block alt" id="inscricao-final">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="num">09</span>
          <span className="label"></span>
        </div>

        <div className="final-grid">
          <div>
            <h2 className="bigtitle reveal">
              Dê o próximo passo na sua{' '}
              <em>formação em estética médica.</em>
            </h2>
            <p className="lede reveal" style={{ marginTop: 28 }}>
              Preencha seus dados para falar com a coordenação do IMS e receber
              as informações completas da Turma I.
            </p>

            <div className="reveal" style={{ marginTop: 40 }}>
              <div className="label-mute" style={{ marginBottom: 16 }}>
                — Perguntas frequentes
              </div>
              <Faq />
            </div>
          </div>

          <div className="reveal">
            <Form variant="light" onSubmit={onSubmit} />
          </div>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="foot">
      <div className="wrap row">
        <div>
          <span
            style={{
              fontFamily: 'var(--serif)',
              fontSize: 18,
              fontStyle: 'italic',
              color: 'var(--ink)',
            }}
          >
            IMS
          </span>
          <span style={{ marginLeft: 16 }}>
            — Pós-graduação · Estética Médica · Turma I · 2026
          </span>
        </div>
        <div>Atendimento exclusivo para médicos · CRM exigido</div>
      </div>
    </footer>
  );
}

export function Thanks({ show, onClose }) {
  return (
    <div className={`thanks ${show ? 'show' : ''}`}>
      <div className="thanks-inner">
        <div className="check"></div>
        <div
          className="eyebrow"
          style={{
            color: 'color-mix(in oklab, var(--bg) 60%, transparent)',
            marginBottom: 16,
          }}
        >
          — Cadastro confirmado
        </div>
        <h2>Cadastro recebido com sucesso.</h2>
        <p>
          Recebemos suas informações. A coordenação do IMS entrará em contato
          pelo WhatsApp para apresentar os detalhes da Turma I da Pós-graduação
          em Estética Médica.
        </p>
        <a
          href="#"
          className="btn"
          onClick={(e) => {
            e.preventDefault();
            onClose();
          }}
        >
          <span>Falar com a coordenação</span>
          <span className="arrow">→</span>
        </a>
      </div>
    </div>
  );
}
