import React, { useEffect, useState } from 'react';
import Topbar from './components/Topbar.jsx';
import Hero from './components/Hero.jsx';
import { Dor, Manifesto, Dados } from './components/MidSections.jsx';
import { Formacao, Modulos, Docentes, Cronograma } from './components/MainSections.jsx';
import { FinalForm, Footer, Thanks } from './components/Final.jsx';

export default function App() {
  const [showThanks, setShowThanks] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('in');
        });
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.05 }
    );
    document.querySelectorAll('.reveal').forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const onSubmit = () => {
    setShowThanks(true);
    document.body.style.overflow = 'hidden';
  };

  const closeThanks = () => {
    setShowThanks(false);
    document.body.style.overflow = '';
    // Em produção, redirecione para WhatsApp:
    // const msg = encodeURIComponent(
    //   'Olá, preenchi o formulário da Pós-graduação em Estética Médica do IMS e gostaria de falar com a coordenação sobre a Turma I.'
    // );
    // window.open(`https://wa.me/SEUNUMERO?text=${msg}`, '_blank');
  };

  const goToInscricao = (e) => {
    if (e) e.preventDefault();
    document.getElementById('inscricao')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <Topbar onCta={goToInscricao} />
      <Hero onSubmit={onSubmit} />
      <Dor />
      <Manifesto />
      <Dados />
      <Formacao />
      <Modulos />
      <Docentes />
      <Cronograma />
      <FinalForm onSubmit={onSubmit} />
      <Footer />
      <a href="#inscricao" className="mobile-cta" onClick={goToInscricao}>
        Falar com a coordenação →
      </a>
      <Thanks show={showThanks} onClose={closeThanks} />
    </>
  );
}
