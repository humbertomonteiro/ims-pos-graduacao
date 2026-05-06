import React from 'react';

export default function Topbar({ onCta }) {
  return (
    <div className="topbar">
      <div className="topbar-inner">
        <a
          href="#top"
          className="brand"
          style={{
            textDecoration: 'none',
            color: 'inherit',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <span className="mark">IMS</span>
          <span className="sub">Pós-graduação · Estética Médica</span>
        </a>
        <nav className="topnav">
          <a href="#manifesto">
            <span className="num"></span>Manifesto
          </a>
          <a href="#formacao">
            <span className="num"></span>Formação
          </a>
          <a href="#modulos">
            <span className="num"></span>Módulos
          </a>
          <a href="#docentes">
            <span className="num"></span>Docentes
          </a>
          <a href="#cronograma">
            <span className="num"></span>Cronograma
          </a>
        </nav>
        <button className="cta-mini" onClick={onCta}>
          Inscrição →
        </button>
      </div>
    </div>
  );
}
