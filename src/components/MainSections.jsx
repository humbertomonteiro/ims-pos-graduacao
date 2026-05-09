import React, { useState, useEffect } from "react";
import "./MainSections.css";
import {
  FaStethoscope,
  FaCalendarAlt,
  FaStar,
  FaUsers,
  FaGraduationCap,
  FaHandshake,
  FaBook,
} from "react-icons/fa";
import imgModule1 from "../assets/imgs/facial.jpg";
import imgModule2 from "../assets/imgs/corpo.jpg";
import imgModule3 from "../assets/imgs/avancado.jpg";

export function Modulos({ goForm }) {
  return (
    <section className="block navy">
      <div className="wrap">
        <div className="modulos-intro">
          <h2 className="h2-center reveal">
            Uma grade completa. <em>Um mesmo padrão de excelência.</em>
          </h2>
          <p className="lede center reveal">
            A formação percorre procedimentos faciais, corporais, capilares,
            tecnologias, estética íntima, segurança clínica, direito médico e
            gestão de clínica.
          </p>
        </div>

        <div className="modules-grid">
          <div
            className="module-card reveal"
            style={{ "--card-bg": `url(${imgModule1})` }}
          >
            <div className="badge">Eixo Facial</div>
            <h3>
              Injetáveis & Volumetria<small>6 módulos</small>
            </h3>
            <ul>
              <li>
                <b>Toxina Botulínica</b>
              </li>
              <li>
                <b>Bioestimulador</b> de Colágeno e Consultoria
              </li>
              <li>
                <b>Preenchedores I, II e III</b>
              </li>
              <li>Renovação Celular & Direito Médico</li>
            </ul>
            <div className="cta-foot">
              <a
                href="#inscricao-final"
                className="btn btn-orange"
                onClick={goForm}
              >
                Quero saber mais
              </a>
            </div>
          </div>

          <div
            className="module-card reveal"
            style={{ "--card-bg": `url(${imgModule2})` }}
          >
            <div className="badge">Eixo Corporal & Capilar</div>
            <h3>
              Corpo, Pele & Cabelo<small>4 módulos</small>
            </h3>
            <ul>
              <li>
                <b>Corporal e Lipoenzimática</b>
              </li>
              <li>
                <b>Plataformas e Tecnologias</b>
              </li>
              <li>
                <b>Tricologia Médica</b>
              </li>
              <li>
                <b>Fios de PDO e Fios Aptos</b>
              </li>
            </ul>
            <div className="cta-foot">
              <a
                href="#inscricao-final"
                className="btn btn-orange"
                onClick={goForm}
              >
                Quero saber mais
              </a>
            </div>
          </div>

          <div
            className="module-card reveal"
            style={{ "--card-bg": `url(${imgModule3})` }}
          >
            <div className="badge">Eixo Avançado</div>
            <h3>
              Estética Íntima & Gestão<small>2 módulos</small>
            </h3>
            <ul>
              <li>
                <b>Estética Íntima</b>
              </li>
              <li>
                <b>Revisão de Injetáveis</b>, Gestão e Formatura
              </li>
              <li>Direito médico e atuação responsável</li>
              <li>Gestão de clínica de estética</li>
            </ul>
            <div className="cta-foot">
              <a
                href="#inscricao-final"
                className="btn btn-orange"
                onClick={goForm}
              >
                Quero saber mais
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function Diferenciais({ goForm }) {
  return (
    <section className="block">
      <div className="wrap">
        <div className="dif-eyebrow reveal">DIFERENCIAIS</div>
        <h2 className="dif-h2 reveal">Exclusivos</h2>

        <div className="dif-grid">
          <div className="dif-card navy reveal">
            <div className="ico">
              <FaStethoscope />
            </div>
            <p>
              <b>Prática supervisionada</b> com pacientes reais conforme a
              disciplina em estudo
            </p>
          </div>
          <div className="dif-card orange reveal">
            <div className="ico">
              <FaCalendarAlt />
            </div>
            <p>
              Calendário de aulas que se <b>encaixa na sua rotina médica</b>
            </p>
          </div>
          <div className="dif-card navy reveal">
            <div className="ico">
              <FaStar />
            </div>
            <p>
              Corpo docente altamente <b>qualificado</b>
            </p>
          </div>
          <div className="dif-card orange reveal">
            <div className="ico">
              <FaUsers />
            </div>
            <p>
              <b>Turmas reduzidas</b> para acompanhamento individualizado
            </p>
          </div>
        </div>

        <div
          className="dif-grid reveal"
          style={{
            gridTemplateColumns: "repeat(3, 1fr)",
            marginTop: 16,
            maxWidth: 900,
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          <div className="dif-card navy">
            <div className="ico">
              <FaGraduationCap />
            </div>
            <p>
              Conteúdo <b>teórico sólido</b> e atuação profissional{" "}
              <b>prática</b>
            </p>
          </div>
          <div className="dif-card orange">
            <div className="ico">
              <FaHandshake />
            </div>
            <p>
              <b>Mentorias e Networking</b> com profissionais das mais diversas
              experiências
            </p>
          </div>
          <div className="dif-card navy">
            <div className="ico">
              <FaBook />
            </div>
            <p>
              Material Didático <b>Exclusivo</b>
            </p>
          </div>
        </div>

        <div className="dif-cta">
          <a
            href="#inscricao-final"
            className="btn btn-outline-orange"
            onClick={goForm}
          >
            Cadastre-se agora
          </a>
        </div>
      </div>
    </section>
  );
}

const COORDS = [
  {
    name: 'Dra. Amanda Maciel',
    role: 'Coordenadora Acadêmica',
    photo: null,
    bio: <>A pós-graduação do IMS é coordenada por profissionais com <b>ampla experiência prática</b> e atuação consolidada na estética médica. A proposta é formar médicos com base científica, prática supervisionada e tomada de decisão clínica.</>,
    items: [
      'Coordenação acadêmica e clínica da formação',
      'Atuação consolidada em estética médica',
      'Acompanhamento direto da prática supervisionada',
    ],
  },
  {
    name: 'Dr. Edcarlos Dias',
    role: 'Coordenador Clínico',
    photo: null,
    bio: <>Médico com <b>vasta experiência clínica</b> em procedimentos estéticos e formação de profissionais. Atua diretamente na supervisão das práticas e no desenvolvimento do currículo clínico do IMS.</>,
    items: [
      'Supervisão das práticas clínicas',
      'Desenvolvimento do currículo clínico',
      'Mentoria direta aos alunos',
    ],
  },
];

export function Coordenacao({ goForm }) {
  const [current, setCurrent] = useState(0);
  const [fading, setFading] = useState(false);
  const coord = COORDS[current];

  const goTo = (i) => {
    setFading(true);
    setTimeout(() => {
      setCurrent(i);
      setFading(false);
    }, 280);
  };

  useEffect(() => {
    const id = setTimeout(() => {
      goTo((current + 1) % COORDS.length);
    }, 5000);
    return () => clearTimeout(id);
  }, [current]);

  return (
    <section className="coord-band">
      <div className="wrap">
        <div className={`coord-grid${fading ? ' coord-fading' : ''}`}>
          <div className="coord-carousel reveal">
            <div className="coord-photo">
              {coord.photo
                ? <img src={coord.photo} alt={coord.name} />
                : <span>retrato</span>}
            </div>
            <div className="coord-dots">
              {COORDS.map((c, i) => (
                <button
                  key={i}
                  className={`coord-dot${i === current ? ' active' : ''}`}
                  onClick={() => goTo(i)}
                  aria-label={c.name}
                />
              ))}
            </div>
          </div>
          <div className="coord-content reveal">
            <p className="coord-eyebrow">Coordenação</p>
            <h3>{coord.name}</h3>
            <div className="role">{coord.role}</div>
            <p>{coord.bio}</p>
            <ul>
              {coord.items.map(item => <li key={item}>{item}</li>)}
            </ul>
            <a href="#inscricao-final" className="btn" onClick={goForm}>
              Quero aprender com especialistas
            </a>
          </div>
        </div>

        <div className="coord-roster">
          <div className="prof reveal">
            <div className="av"></div>
            <div className="nm">Dr. João Henrique Barros</div>
            <div className="ar">Preenchedores e Bioestimuladores Corporais</div>
          </div>
          <div className="prof reveal">
            <div className="av"></div>
            <div className="nm">Dra. Soely Maria</div>
            <div className="ar">Estética Íntima e Rejuvenescimento</div>
          </div>
          <div className="prof reveal">
            <div className="av"></div>
            <div className="nm">Dra. Luiza Alonso</div>
            <div className="ar">Tricologia e Procedimentos Capilares</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const SCHEDULE = [
  ["Maio", "15", "16", true],
  ["Junho", "12", "13"],
  ["Julho", "03", "04"],
  ["Agosto", "07", "08"],
  ["Setembro", "11", "12"],
  ["Outubro", "09", "10"],
  ["Novembro", "06", "07"],
  ["Dezembro", "11", "12"],
  ["Janeiro", "22", "23"],
  ["Fevereiro", "19", "20"],
  ["Março", "05", "06"],
  ["Abril", "02", "03"],
];

export function Cronograma({ goForm }) {
  return (
    <section className="block cream">
      <div className="wrap">
        <div className="dif-eyebrow reveal">CRONOGRAMA · TURMA I</div>
        <h2 className="h2-center reveal">
          Encontros mensais ao longo de <em>12 meses.</em>
        </h2>
        <p className="lede center reveal">
          A organização mensal permite que o médico programe sua rotina e evolua
          de forma progressiva ao longo da formação.
        </p>

        <div className="crono-grid">
          {SCHEDULE.map(([m, d1, d2, first]) => (
            <div
              key={m}
              className={`crono-card reveal ${first ? "first" : ""}`}
            >
              <div className="month">{first ? "Início · " + m : m}</div>
              <div className="days">
                {d1}
                <span className="sep">·</span>
                {d2}
              </div>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: 48 }}>
          <a
            href="#inscricao-final"
            className="btn btn-orange"
            onClick={goForm}
          >
            Garanta sua vaga
          </a>
        </div>
      </div>
    </section>
  );
}
