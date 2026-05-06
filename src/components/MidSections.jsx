import React from 'react';

export function Dor() {
  return (
    <section className="block" id="dor">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="num"></span>
          <span className="label"></span>
        </div>

        <div className="two-col">
          <h2 className="bigtitle reveal">
            A estética médica cresce.{' '}
            <em>Mas o mercado não perdoa</em> atuação insegura.
          </h2>

          <div className="reveal">
            <p className="lede" style={{ marginBottom: 24 }}>
              Muitos médicos querem entrar ou evoluir na estética médica, mas
              ainda sentem insegurança prática, medo de intercorrências e falta
              de estrutura para conduzir procedimentos com previsibilidade.
            </p>
            <p
              style={{
                fontSize: 17,
                lineHeight: 1.6,
                color: 'var(--ink)',
                marginBottom: 32,
              }}
            >
              A proposta do IMS é formar médicos com base científica, prática
              supervisionada e tomada de decisão clínica, para uma atuação mais
              segura e responsável.
            </p>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: 0,
                borderTop: '1px solid var(--rule)',
              }}
            >
              {[
                {
                  k: 'Insegurança prática',
                  v: 'Procedimentos sem repetição supervisionada.',
                },
                {
                  k: 'Medo de intercorrência',
                  v: 'Falta de protocolo de avaliação e manejo.',
                },
                {
                  k: 'Conduta sem método',
                  v: 'Decisão clínica baseada em achismo.',
                },
                {
                  k: 'Atuação fragmentada',
                  v: 'Sem visão integrada da estética médica.',
                },
              ].map(({ k, v }, i) => (
                <div
                  key={k}
                  style={{
                    padding: '20px 16px 20px 0',
                    borderBottom: '1px solid var(--rule)',
                    borderRight:
                      i % 2 === 0 ? '1px solid var(--rule)' : 'none',
                    paddingLeft: i % 2 === 1 ? 16 : 0,
                  }}
                >
                  <div className="label-mute" style={{ marginBottom: 8 }}>
                    — Hoje
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--serif)',
                      fontSize: 18,
                      lineHeight: 1.25,
                      marginBottom: 6,
                    }}
                  >
                    {k}
                  </div>
                  <div
                    style={{
                      fontSize: 13,
                      color: 'var(--ink-soft)',
                      lineHeight: 1.5,
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>

            <a href="#inscricao" className="btn" style={{ marginTop: 32 }}>
              <span>Falar com a coordenação</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Manifesto() {
  return (
    <section className="block dark" id="manifesto">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="num"></span>
          <span className="label"></span>
        </div>

        <div className="manifesto" style={{ textAlign: 'left' }}>
          <div className="left">
            <h2 className="bigtitle reveal" style={{ textAlign: 'left' }}>
              A formação exige <em>mais do que técnica.</em>
            </h2>
            <p
              className="reveal"
              style={{
                fontFamily: 'var(--mono)',
                fontSize: 11,
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: 'color-mix(in oklab, var(--bg) 55%, transparent)',
                marginTop: 32,
              }}
            >
              — Princípio fundador
            </p>
          </div>

          <div className="body reveal">
            <p>
              Exige base, prática real e segurança clínica. No IMS, o aprendizado
              não é passivo.
            </p>
            <p>O aluno aprende, executa, ajusta e evolui com supervisão.</p>
            <div className="pull-rule">
              <p>
                A formação integra conhecimento científico, execução prática
                supervisionada e tomada de decisão clínica, preparando o médico
                para atuar com mais segurança, previsibilidade e autonomia
                profissional.
              </p>
            </div>
            <a
              href="#inscricao"
              className="btn btn-accent"
              style={{ marginTop: 24 }}
            >
              <span>Falar com a coordenação</span>
              <span className="arrow">→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Dados() {
  return (
    <section className="block tight" id="dados">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="num"></span>
          <span className="label"></span>
        </div>

        <h2
          className="bigtitle reveal"
          style={{ maxWidth: '20ch', marginBottom: 48 }}
        >
          Turma I · <em>Pós-graduação Lato Sensu</em> em Estética Médica.
        </h2>

        <div className="dados reveal">
          <div className="dado">
            <div className="lab">— Modalidade</div>
            <div className="val">Presencial</div>
          </div>
          <div className="dado">
            <div className="lab">— Certificação</div>
            <div className="val">
              Reconhecida <em>pelo MEC</em>
            </div>
          </div>
          <div className="dado">
            <div className="lab">— Duração</div>
            <div className="val">12 meses</div>
          </div>
          <div className="dado">
            <div className="lab">— Público</div>
            <div className="val">
              Exclusivo
              <br />
              para médicos
            </div>
          </div>
          <div className="dado">
            <div className="lab">— Início das aulas</div>
            <div className="val">
              <em>Maio</em>
              <br />
              de 2026
            </div>
          </div>
        </div>

        <a href="#inscricao" className="btn" style={{ marginTop: 40 }}>
          <span>Falar com a coordenação</span>
          <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
