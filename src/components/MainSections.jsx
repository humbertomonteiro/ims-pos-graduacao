import React from 'react';

export function Formacao() {
  const steps = [
    {
      n: '01',
      t: 'Base científica',
      d: 'Fundamentos, anatomia, farmacologia, indicações, contraindicações e segurança.',
    },
    {
      n: '02',
      t: 'Prática supervisionada',
      d: 'O aluno aprende, observa, executa, ajusta e evolui com acompanhamento.',
    },
    {
      n: '03',
      t: 'Decisão clínica',
      d: 'Avaliação, planejamento, conduta e manejo de intercorrências.',
    },
    {
      n: '04',
      t: 'Autonomia profissional',
      d: 'Formação progressiva para atuar com mais confiança na estética médica.',
    },
  ];

  return (
    <section className="block alt" id="formacao">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="num"></span>
          <span className="label"></span>
        </div>

        <div
          className="two-col"
          style={{ alignItems: 'end', marginBottom: 16 }}
        >
          <h2 className="bigtitle reveal">
            Uma jornada construída para desenvolver{' '}
            <em>prática, segurança e raciocínio clínico.</em>
          </h2>
          <p className="lede reveal">
            Quatro pilares conectados, presentes em cada módulo. A progressão é
            cumulativa: o que se aprende no início é exercitado e validado nas
            etapas seguintes.
          </p>
        </div>

        <div className="steps">
          {steps.map((s) => (
            <div key={s.n} className="step reveal">
              <span className="n">{s.n}</span>
              <h3>{s.t}</h3>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const MODULES = [
  'Toxina Botulínica',
  'Renovação Celular & Direito Médico',
  'Bioestimulador de Colágeno & Consultoria',
  'Preenchedores I',
  'Preenchedores II',
  'Corporal & Lipoenzimática',
  'Preenchedores III',
  'Plataformas & Tecnologias',
  'Tricologia Médica',
  'Fios de PDO & Fios Aptos',
  'Estética Íntima',
  'Revisão, Gestão & Formatura',
];

const MODULE_TAGS = [
  'Facial · injetável',
  'Pele · jurídico',
  'Volumetria · clínica',
  'Facial · injetável',
  'Facial · injetável',
  'Corporal',
  'Facial · injetável',
  'Tecnologia',
  'Capilar',
  'Facial · sustentação',
  'Íntima · funcional',
  'Gestão · encerramento',
];

export function Modulos() {
  return (
    <section className="block" id="modulos">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="num"></span>
          <span className="label"></span>
        </div>

        <div
          className="two-col"
          style={{ alignItems: 'end', marginBottom: 56 }}
        >
          <h2 className="bigtitle reveal">
            Uma grade completa para formar médicos{' '}
            <em>mais preparados para a prática estética.</em>
          </h2>
          <p className="lede reveal">
            A formação percorre procedimentos faciais, corporais, capilares,
            tecnologias, estética íntima, segurança clínica, direito médico e
            gestão de clínica.
          </p>
        </div>

        <div className="modules">
          {MODULES.map((m, i) => (
            <div key={m} className="module reveal">
              <div>
                <span className="num">M.{String(i + 1).padStart(2, '0')}</span>
                <h4>{m}</h4>
              </div>
              <div>
                <div className="tag">{MODULE_TAGS[i]}</div>
              </div>
              <span className="corner"></span>
            </div>
          ))}
        </div>

        <a href="#inscricao" className="btn" style={{ marginTop: 48 }}>
          <span>Falar com a coordenação</span>
          <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}

export function Docentes() {
  const coord = [
    {
      name: 'Dra. Amanda Maciel',
      role: 'Coordenação',
      area: 'Estética Médica · Coordenação acadêmica',
    },
    {
      name: 'Dr. Edcarlos Dias',
      role: 'Coordenação',
      area: 'Estética Médica · Coordenação clínica',
    },
  ];
  const conv = [
    {
      name: 'Dr. João Henrique Barros',
      role: 'Convidado',
      area: 'Preenchedores e Bioestimuladores Corporais',
    },
    {
      name: 'Dra. Soely Maria',
      role: 'Convidada',
      area: 'Estética Íntima e Rejuvenescimento',
    },
    {
      name: 'Dra. Luiza Alonso',
      role: 'Convidada',
      area: 'Tricologia e Procedimentos Capilares',
    },
  ];

  return (
    <section className="block alt" id="docentes">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="num"></span>
          <span className="label"></span>
        </div>

        <div className="two-col" style={{ alignItems: 'end' }}>
          <h2 className="bigtitle reveal">
            Aqui, você aprende <em>com quem faz.</em>
          </h2>
          <p className="lede reveal">
            A pós-graduação do IMS é coordenada por profissionais com ampla
            experiência prática e atuação consolidada na estética médica. Além
            da coordenação, o curso conta com professores convidados, médicos
            especialistas em suas áreas de atuação.
          </p>
        </div>

        <div style={{ marginTop: 48 }}>
          <div className="label-mute reveal" style={{ marginBottom: 24 }}>
            — Coordenação
          </div>
          <div className="faculty-grid" style={{ marginTop: 0 }}>
            {coord.map((p) => (
              <div key={p.name} className="prof reveal">
                <div className="portrait" data-cap="retrato"></div>
                <div className="role">{p.role}</div>
                <div className="name">{p.name}</div>
                <div className="area">{p.area}</div>
              </div>
            ))}
          </div>
        </div>

        <div style={{ marginTop: 64 }}>
          <div className="label-mute reveal" style={{ marginBottom: 24 }}>
            — Professores convidados
          </div>
          <div className="faculty-grid" style={{ marginTop: 0 }}>
            {conv.map((p) => (
              <div key={p.name} className="prof reveal">
                <div className="portrait" data-cap="retrato"></div>
                <div className="role">{p.role}</div>
                <div className="name">{p.name}</div>
                <div className="area">{p.area}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const SCHEDULE = [
  ['Maio', '15', '16', true],
  ['Junho', '12', '13'],
  ['Julho', '03', '04'],
  ['Agosto', '07', '08'],
  ['Setembro', '11', '12'],
  ['Outubro', '09', '10'],
  ['Novembro', '06', '07'],
  ['Dezembro', '11', '12'],
  ['Janeiro', '22', '23'],
  ['Fevereiro', '19', '20'],
  ['Março', '05', '06'],
  ['Abril', '02', '03'],
];

export function Cronograma() {
  return (
    <section className="block" id="cronograma">
      <div className="wrap">
        <div className="section-head reveal">
          <span className="num"></span>
          <span className="label"></span>
        </div>

        <div className="two-col" style={{ alignItems: 'end' }}>
          <h2 className="bigtitle reveal">
            Encontros mensais presenciais ao longo de <em>12 meses.</em>
          </h2>
          <p className="lede reveal">
            A organização mensal permite que o médico programe sua rotina e
            evolua de forma progressiva ao longo da formação. Datas confirmadas
            para a Turma I.
          </p>
        </div>

        <div className="schedule">
          {SCHEDULE.map(([month, d1, d2, first]) => (
            <div key={month} className={`sch reveal ${first ? 'first' : ''}`}>
              <div className="month">
                {first ? '— Início · ' + month : '— ' + month}
              </div>
              <div className="days">
                {d1}
                <span className="sep">·</span>
                {d2}
              </div>
            </div>
          ))}
        </div>

        <a href="#inscricao-final" className="btn" style={{ marginTop: 48 }}>
          <span>Falar com a coordenação</span>
          <span className="arrow">→</span>
        </a>
      </div>
    </section>
  );
}
