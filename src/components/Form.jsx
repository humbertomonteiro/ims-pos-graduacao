import React, { useState } from 'react';
import './Form.css';

export default function Form({ onSubmit, title = 'Garanta a sua vaga!' }) {
  const [data, setData] = useState({
    nome: '', whatsapp: '', email: '', crm: '', cidade: '',
    atuacao: '', objetivo: '', horario: '', consent: false,
  });
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const set = (k, v) => {
    setData(d => ({ ...d, [k]: v }));
    if (errors[k]) setErrors(e => ({ ...e, [k]: false }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const required = ['nome', 'whatsapp', 'email', 'crm', 'cidade'];
    const e = {};
    required.forEach(k => { if (!data[k].trim()) e[k] = true; });
    if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) e.email = true;
    setErrors(e);
    if (Object.keys(e).length > 0) return;
    setSubmitting(true);
    setTimeout(() => { setSubmitting(false); onSubmit && onSubmit(data); }, 700);
  };

  const fc = k => `field ${errors[k] ? 'error' : ''}`;

  return (
    <form className="formcard" onSubmit={handleSubmit} noValidate>
      <h3>{title}</h3>

      <div className={fc('nome')}>
        <input type="text" placeholder="Nome completo"
          value={data.nome} onChange={e => set('nome', e.target.value)} />
        <div className="err">Campo obrigatório</div>
      </div>

      <div className={fc('email')}>
        <input type="email" placeholder="E-mail"
          value={data.email} onChange={e => set('email', e.target.value)} />
        <div className="err">E-mail inválido</div>
      </div>

      <div className="field-row">
        <div className={fc('whatsapp')}>
          <input type="tel" placeholder="(xx) xxxxx-xxxx"
            value={data.whatsapp} onChange={e => set('whatsapp', e.target.value)} />
          <div className="err">Obrigatório</div>
        </div>
        <div className={fc('crm')}>
          <input type="text" placeholder="CRM (UF · 000000)"
            value={data.crm} onChange={e => set('crm', e.target.value)} />
          <div className="err">Obrigatório</div>
        </div>
      </div>

      <div className={fc('cidade')}>
        <input type="text" placeholder="Cidade e estado"
          value={data.cidade} onChange={e => set('cidade', e.target.value)} />
        <div className="err">Obrigatório</div>
      </div>

      <div className="radios">
        {[
          'Sim, já atuo com estética médica',
          'Ainda não, quero começar',
          'Atuo em outra área médica e quero migrar',
        ].map(o => (
          <label key={o}>
            <input type="radio" name="atuacao" checked={data.atuacao === o}
              onChange={() => set('atuacao', o)} />
            <span>{o}</span>
          </label>
        ))}
      </div>

      <div className="field">
        <select value={data.objetivo} onChange={e => set('objetivo', e.target.value)}>
          <option value="">Qual seu principal objetivo?</option>
          <option>Entrar na estética médica com segurança</option>
          <option>Aprimorar minha prática em injetáveis</option>
          <option>Ganhar mais confiança para atender pacientes</option>
          <option>Ampliar procedimentos no consultório</option>
          <option>Entender valores, cronograma e condições da turma</option>
        </select>
      </div>

      <div className="field">
        <select value={data.horario} onChange={e => set('horario', e.target.value)}>
          <option value="">Melhor horário para contato</option>
          <option>Manhã</option>
          <option>Tarde</option>
          <option>Noite</option>
        </select>
      </div>

      <label className="consent">
        <input type="checkbox" checked={data.consent}
          onChange={e => set('consent', e.target.checked)} />
        <span>
          Eu concordo em receber as comunicações sobre a Pós-graduação em Estética Médica IMS.
          Ao informar meus dados, estou ciente das diretrizes da Política de Privacidade.
        </span>
      </label>

      <button type="submit" className="submit-btn" disabled={submitting}>
        {submitting ? 'Enviando…' : 'Inscreva-se'}
      </button>

      <div className="micro">*Curso exclusivo para médicos com CRM ativo</div>
    </form>
  );
}
