import React from 'react';
import Form from './Form.jsx';

export default function Hero({ onSubmit }) {
  return (
    <section className="hero" id="top">
      <div className="wrap hero-grid">
        <div>
          <div className="hero-meta reveal">
            <span className="dot"></span>
            <span className="text">
              Turma I · início maio de 2026 · vagas limitadas
            </span>
          </div>

          <h1 className="reveal" style={{ fontSize: '50px' }}>
            Pós-graduação em Estética Médica para médicos que querem atuar com
            mais <em>segurança, prática e autonomia</em> clínica.
          </h1>

          <p className="hero-lede reveal">
            Formação presencial, reconhecida pelo MEC, com prática supervisionada
            desde o primeiro módulo, corpo docente atuante e uma grade completa
            para evoluir na estética médica com técnica, ciência e
            responsabilidade.
          </p>

          <div className="seals reveal">
            {[
              'Presencial',
              'Reconhecida pelo MEC',
              '12 meses',
              'Exclusiva para médicos',
              'Início maio · 2026',
              'Prática supervisionada',
            ].map((s) => (
              <span key={s} className="seal">
                <span className="tick"></span>
                {s}
              </span>
            ))}
          </div>

          <div
            className="reveal"
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <a href="#inscricao" className="btn">
              <span>Falar com a coordenação</span>
              <span className="arrow">→</span>
            </a>
            <a href="#formacao" className="btn btn-ghost">
              <span>Ver a formação</span>
              <span className="arrow">↓</span>
            </a>
          </div>

          <div
            className="reveal"
            style={{
              marginTop: 64,
              display: 'grid',
              gridTemplateColumns: '1fr 1fr 1fr',
              gap: 0,
              borderTop: '1px solid var(--rule)',
              paddingTop: 24,
            }}
          >
            <div>
              <div className="label-mute">Carga horária</div>
              <div
                style={{ fontFamily: 'var(--serif)', fontSize: 26, marginTop: 8 }}
              >
                12 meses
              </div>
            </div>
            <div>
              <div className="label-mute">Modalidade</div>
              <div
                style={{ fontFamily: 'var(--serif)', fontSize: 26, marginTop: 8 }}
              >
                Presencial
              </div>
            </div>
            <div>
              <div className="label-mute">Encontros</div>
              <div
                style={{ fontFamily: 'var(--serif)', fontSize: 26, marginTop: 8 }}
              >
                Mensais
              </div>
            </div>
          </div>
        </div>

        <div id="inscricao" className="reveal">
          <Form variant="light" onSubmit={onSubmit} />
        </div>
      </div>
    </section>
  );
}
