import React, { useState } from 'react';

const FORM_ATUACAO = [
  'Sim, já atuo',
  'Ainda não, quero começar',
  'Atuo em outra área médica',
];

const FORM_OBJETIVO = [
  'Entrar com segurança',
  'Aprimorar injetáveis',
  'Ganhar confiança',
  'Ampliar procedimentos',
  'Ver valores e cronograma',
];

const FORM_HORARIO = ['Manhã', 'Tarde', 'Noite'];

export default function Form({ variant = 'dark', onSubmit }) {
  const [data, setData] = useState({
    nome: '',
    whatsapp: '',
    email: '',
    crm: '',
    cidade: '',
    atuacao: '',
    objetivo: '',
    horario: '',
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const isDark = variant === 'dark';

  const set = (k, v) => {
    setData((d) => ({ ...d, [k]: v }));
    if (errors[k]) setErrors((e) => ({ ...e, [k]: false }));
  };

  const validate = () => {
    const required = ['nome', 'whatsapp', 'email', 'crm', 'cidade'];
    const e = {};
    required.forEach((k) => {
      if (!data[k].trim()) e[k] = true;
    });
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = true;
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSubmit && onSubmit(data);
    }, 700);
  };

  const fieldClass = (k) =>
    `field ${isDark ? '' : 'light'} ${errors[k] ? 'error' : ''}`;
  const chipsClass = isDark ? 'chipgroup' : 'chipgroup light';

  return (
    <form
      className={`formcard ${isDark ? '' : 'light'}`}
      onSubmit={handleSubmit}
      noValidate
    >
      <div className="eyebrow">— Formulário · acesso à coordenação</div>
      <h3>Falar com a coordenação</h3>
      <p className="desc">
        Atendimento exclusivo para médicos · resposta em até 24h úteis.
      </p>

      <div className={fieldClass('nome')}>
        <label>
          Nome completo<span className="req">*</span>
        </label>
        <input
          type="text"
          placeholder="Como devemos te chamar"
          value={data.nome}
          onChange={(e) => set('nome', e.target.value)}
        />
        <div className="err">Campo obrigatório</div>
      </div>

      <div className="field-row">
        <div className={fieldClass('whatsapp')}>
          <label>
            WhatsApp<span className="req">*</span>
          </label>
          <input
            type="tel"
            placeholder="(00) 00000-0000"
            value={data.whatsapp}
            onChange={(e) => set('whatsapp', e.target.value)}
          />
          <div className="err">Campo obrigatório</div>
        </div>
        <div className={fieldClass('crm')}>
          <label>
            CRM<span className="req">*</span>
          </label>
          <input
            type="text"
            placeholder="UF · 000000"
            value={data.crm}
            onChange={(e) => set('crm', e.target.value)}
          />
          <div className="err">Campo obrigatório</div>
        </div>
      </div>

      <div className={fieldClass('email')}>
        <label>
          E-mail<span className="req">*</span>
        </label>
        <input
          type="email"
          placeholder="seuemail@dominio.com"
          value={data.email}
          onChange={(e) => set('email', e.target.value)}
        />
        <div className="err">Informe um e-mail válido</div>
      </div>

      <div className={fieldClass('cidade')}>
        <label>
          Cidade e estado<span className="req">*</span>
        </label>
        <input
          type="text"
          placeholder="Cidade · UF"
          value={data.cidade}
          onChange={(e) => set('cidade', e.target.value)}
        />
        <div className="err">Campo obrigatório</div>
      </div>

      <div className="field" style={{ marginTop: 28 }}>
        <label>Você já atua com estética médica?</label>
        <div className={chipsClass}>
          {FORM_ATUACAO.map((o) => (
            <button
              key={o}
              type="button"
              className={`chip ${data.atuacao === o ? 'on' : ''}`}
              onClick={() => set('atuacao', o)}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Qual seu principal objetivo?</label>
        <div className={chipsClass}>
          {FORM_OBJETIVO.map((o) => (
            <button
              key={o}
              type="button"
              className={`chip ${data.objetivo === o ? 'on' : ''}`}
              onClick={() => set('objetivo', o)}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      <div className="field">
        <label>Melhor horário para contato</label>
        <div className={chipsClass}>
          {FORM_HORARIO.map((o) => (
            <button
              key={o}
              type="button"
              className={`chip ${data.horario === o ? 'on' : ''}`}
              onClick={() => set('horario', o)}
            >
              {o}
            </button>
          ))}
        </div>
      </div>

      <button type="submit" className="btn" disabled={submitting}>
        <span>{submitting ? 'Enviando…' : 'Falar com a coordenação'}</span>
        <span className="arrow">→</span>
      </button>

      <p className={`microcopy ${isDark ? '' : 'light'}`}>
        Atendimento exclusivo para médicos. Suas informações serão utilizadas
        apenas para contato sobre a Pós-graduação em Estética Médica IMS.
      </p>
    </form>
  );
}
