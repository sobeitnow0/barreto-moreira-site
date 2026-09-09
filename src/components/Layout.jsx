import React, { useState, useEffect } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, Mail } from 'lucide-react';
import { InstagramIcon } from './Icons';

const Logo = ({ onClick }) => (
  <NavLink to="/" onClick={onClick} className="flex items-center group py-1.5">
    <img 
      src="/logo-transparent.png" 
      alt="Barreto Moreira Advocacia Estratégica" 
      className="h-12 sm:h-14 md:h-16 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.02]"
    />
  </NavLink>
);

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { num: "01", name: "Início", path: "/" },
    { num: "02", name: "O Escritório", path: "/escritorio" },
    { num: "03", name: "Áreas de Atuação", path: "/atuacao" },
    { num: "04", name: "Contato", path: "/contato" },
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFC] font-sans text-[#162235] flex flex-col selection:bg-[#162235] selection:text-white">
      {/* Header Fixo Minimalista com Glassmorphism */}
      <header className="sticky top-0 z-50 bg-[#F8FAFC]/90 backdrop-blur-md border-b border-[#E2E8F0]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[5.5rem] sm:min-h-[6rem] py-3 flex items-center justify-between">
          <Logo onClick={() => setMobileMenuOpen(false)} />

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1.5 lg:gap-2">
            {navLinks.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `px-3.5 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-all flex items-center gap-1.5 ${
                    isActive
                      ? 'text-[#162235] bg-white shadow-sm border border-[#E2E8F0]'
                      : 'text-[#64748B] hover:text-[#162235] hover:bg-black/[0.02]'
                  }`
                }
              >
                <span className="text-[10px] text-brand-gold font-mono">{item.num}.</span>
                <span>{item.name}</span>
              </NavLink>
            ))}

            <div className="w-[1px] h-5 bg-[#E2E8F0] mx-2"></div>

            <a
              href="https://www.buscadordjen.com.br"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-bold tracking-wider uppercase bg-[#162235] text-white hover:bg-brand-hover transition-all shadow-sm group"
            >
              <span>Buscador DJEN</span>
              <ArrowUpRight size={13} className="text-brand-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </nav>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl text-[#162235] hover:bg-black/5 transition-colors focus:outline-none"
              aria-label={mobileMenuOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Drawer (Touch-friendly & Clean) */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-[#0E1726]/95 backdrop-blur-2xl z-50 flex flex-col justify-between p-6 sm:p-8 text-white animate-fadeIn">
            <div className="flex flex-col gap-5 pt-2">
              <img 
                src="/logo-white.png" 
                alt="Barreto Moreira Advocacia Estratégica" 
                className="h-10 sm:h-12 w-auto object-contain self-start opacity-95"
              />
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-gold font-bold">
                Navegação
              </span>
              
              {navLinks.map((item) => (
                <NavLink
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `flex items-baseline gap-4 py-3 border-b border-white/10 text-xl font-extrabold uppercase tracking-tight transition-all ${
                      isActive ? 'text-brand-gold pl-2' : 'text-white/80 hover:text-white'
                    }`
                  }
                >
                  <span className="text-xs font-mono text-brand-gold/70">{item.num}.</span>
                  <span>{item.name}</span>
                </NavLink>
              ))}

              <div className="pt-3">
                <a
                  href="https://www.buscadordjen.com.br"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/10 hover:border-brand-gold/50 transition-all text-sm font-semibold"
                >
                  <div className="flex flex-col">
                    <span className="text-white font-bold">Buscador DJEN</span>
                    <span className="text-xs text-white/60">Tecnologia de Pesquisa</span>
                  </div>
                  <ArrowUpRight size={18} className="text-brand-gold" />
                </a>
              </div>
            </div>

            {/* Mobile Footer Info */}
            <div className="pt-6 border-t border-white/10 flex flex-col gap-3 text-xs text-white/60">
              <div className="flex justify-between items-center">
                <span className="font-bold">OAB/SP 34957</span>
                <a 
                  href="https://www.instagram.com/amilcarmoreira.juridico/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 text-brand-gold hover:underline font-medium"
                >
                  <InstagramIcon size={14} />
                  <span>@amilcarmoreira.juridico</span>
                </a>
              </div>
              <a href="mailto:contato@barretomoreira.com.br" className="hover:text-white">
                contato@barretomoreira.com.br
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Content Area */}
      <main className="flex-1 flex flex-col">
        <Outlet />
      </main>

      {/* Footer Milano Luxury Style */}
      <footer className="mt-auto bg-[#0E1726] text-white pt-16 pb-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
            {/* Coluna 1: Identidade Oficial */}
            <div className="md:col-span-5 flex flex-col gap-5">
              <NavLink to="/" className="inline-block">
                <img 
                  src="/logo-white.png" 
                  alt="Barreto Moreira Advocacia Estratégica" 
                  className="h-11 sm:h-13 md:h-14 w-auto object-contain opacity-95 hover:opacity-100 transition-opacity"
                />
              </NavLink>
              <p className="text-white/70 text-sm leading-relaxed max-w-sm font-light">
                Estrutura dedicada a soluções jurídicas sob medida para causas complexas, com rigor técnico e proximidade real.
              </p>
              <div className="flex items-center gap-3 text-xs text-brand-gold font-mono tracking-wider font-semibold">
                <span>OAB/SP 34957</span>
                <span className="w-1 h-1 rounded-full bg-brand-gold/60"></span>
                <span>ATUAÇÃO SOB MEDIDA</span>
              </div>
            </div>

            {/* Coluna 2: Navegação */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-brand-gold font-bold">
                Navegação
              </h4>
              <ul className="flex flex-col gap-2.5 text-xs uppercase tracking-wider font-semibold text-white/70">
                {navLinks.map((item) => (
                  <li key={item.path}>
                    <NavLink to={item.path} className="hover:text-brand-gold transition-colors flex items-center gap-2">
                      <span className="text-[10px] font-mono text-brand-gold/70">{item.num}.</span>
                      <span>{item.name}</span>
                    </NavLink>
                  </li>
                ))}
                <li>
                  <a 
                    href="https://www.buscadordjen.com.br" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-brand-gold transition-colors flex items-center gap-1.5"
                  >
                    <span>Buscador DJEN</span>
                    <ArrowUpRight size={13} className="text-brand-gold" />
                  </a>
                </li>
              </ul>
            </div>

            {/* Coluna 3: Contato & Atendimento */}
            <div className="md:col-span-4 flex flex-col gap-4">
              <h4 className="text-xs uppercase font-mono tracking-[0.2em] text-brand-gold font-bold">
                Contato & Atendimento
              </h4>
              <div className="flex flex-col gap-3 text-sm text-white/70">
                <a 
                  href="mailto:contato@barretomoreira.com.br" 
                  className="hover:text-brand-gold transition-colors flex items-center gap-2.5"
                >
                  <Mail size={16} className="text-brand-gold shrink-0" />
                  <span className="break-all">contato@barretomoreira.com.br</span>
                </a>
                <a 
                  href="https://www.instagram.com/amilcarmoreira.juridico/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-brand-gold transition-colors flex items-center gap-2.5"
                >
                  <InstagramIcon size={16} className="text-brand-gold shrink-0" />
                  <span>@amilcarmoreira.juridico</span>
                </a>
              </div>
              <div className="mt-2 p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-white/70 leading-relaxed">
                <span className="text-brand-gold font-bold block mb-1">Atendimento Especializado:</span>
                Consultas jurídicas estratégicas com atendimento presencial e digital por videoconferência.
              </div>
            </div>
          </div>

          {/* Linha Inferior Legal */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50 text-center sm:text-left">
            <span>© {new Date().getFullYear()} Barreto Moreira Advocacia Estratégica. Todos os direitos reservados.</span>
            <p className="text-[11px] italic max-w-xl">
              Conteúdo informativo em conformidade com o Provimento nº 205/2021 da OAB.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
