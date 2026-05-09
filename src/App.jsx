import React, { useEffect, useState } from 'react';
import Hero from './components/Hero.jsx';
import { PorqueIMS, MercadoStats } from './components/MidSections.jsx';
import { Modulos, Diferenciais, Coordenacao, Cronograma } from './components/MainSections.jsx';
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
  };

  const goForm = (e) => {
    if (e) e.preventDefault();
    document.getElementById('inscricao-final')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Hero onSubmit={onSubmit} goForm={goForm} />
      <div className="top-strip">EXCLUSIVO PARA MÉDICOS</div>
      <PorqueIMS goForm={goForm} />
      <MercadoStats goForm={goForm} />
      <Modulos goForm={goForm} />
      <Diferenciais goForm={goForm} />
      <Coordenacao goForm={goForm} />
      <Cronograma goForm={goForm} />
      <FinalForm onSubmit={onSubmit} />
      <Footer />
      <a href="https://wa.me/" target="_blank" rel="noreferrer" className="wa-fab" aria-label="WhatsApp">
        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M17.6 6.3A7.85 7.85 0 0 0 12 4a7.94 7.94 0 0 0-6.8 12L4 20l4.1-1.1a7.93 7.93 0 0 0 3.9 1h.01c4.38 0 7.94-3.56 7.94-7.94a7.9 7.9 0 0 0-2.35-5.66M12 18.55h-.01a6.6 6.6 0 0 1-3.36-.92l-.24-.14-2.43.64.65-2.37-.16-.25a6.59 6.59 0 0 1-1.01-3.51c0-3.64 2.97-6.6 6.61-6.6a6.6 6.6 0 0 1 6.6 6.6c0 3.65-2.96 6.55-6.65 6.55m3.62-4.92c-.2-.1-1.17-.58-1.35-.64-.18-.07-.32-.1-.45.1-.13.2-.51.64-.62.77-.12.13-.23.15-.42.05a5.4 5.4 0 0 1-2.7-2.36c-.2-.35.2-.32.59-1.08.06-.13.03-.24-.02-.34s-.45-1.08-.62-1.48c-.16-.39-.33-.34-.45-.34l-.38-.01c-.13 0-.34.05-.52.24s-.69.67-.69 1.64c0 .97.71 1.9.81 2.04.1.13 1.4 2.13 3.39 2.99.47.21.84.33 1.13.42.47.15.91.13 1.25.08.38-.06 1.17-.48 1.34-.94s.17-.86.12-.94c-.05-.09-.18-.14-.38-.24" />
        </svg>
      </a>
      <Thanks show={showThanks} onClose={closeThanks} />
    </>
  );
}
