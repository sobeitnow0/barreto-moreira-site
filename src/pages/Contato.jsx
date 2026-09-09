import React, { useState } from 'react';
import { Mail, ArrowRight, Shield, Check, Copy } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import Marquee from '../components/Marquee';

export default function Contato() {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText('contato@barretomoreira.com.br');
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex-1 flex flex-col w-full bg-[#F8FAFC]">
      {/* Header Editorial */}
      <section className="pt-12 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.25em] text-brand-gold mb-3">
          <span>03 // CANAL OFICIAL</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E2E8F0] pb-6 mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#162235]">
            INICIE SEU
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#64748B]">
            ATENDIMENTO
          </h1>
        </div>
        <p className="text-base sm:text-lg text-[#334155] max-w-2xl leading-relaxed">
          Prezando pela análise aprofundada de cada demanda, nossos contatos ocorrem com discrição, método e atenção integral dos fundadores.
        </p>
      </section>

      {/* Card Central de Contato (Milano Noir Style) */}
      <section className="pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="bg-[#0E1726] text-white rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-8 shadow-sm">
              <Mail size={28} />
            </div>

            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-gold mb-2">
              Agendamento & Consulta Inicial
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase mb-4 tracking-tight">
              Fale Diretamente Conosco
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg mb-10">
              Envie uma síntese da sua necessidade jurídica ou solicite o agendamento de uma reunião reservada (presencial ou por videoconferência).
            </p>

            {/* Ações de E-mail */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
              <a
                href="mailto:contato@barretomoreira.com.br"
                className="px-8 py-4 rounded-xl bg-white text-[#0E1726] font-bold text-xs uppercase tracking-wider hover:bg-brand-goldLight transition-all flex items-center justify-center gap-2.5 shadow-lg group"
              >
                <span>Enviar Mensagem</span>
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
              </a>

              <button
                onClick={copyEmail}
                className="px-6 py-4 rounded-xl bg-white/10 hover:bg-white/15 text-white border border-white/20 transition-all text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check size={16} className="text-brand-gold" />
                    <span className="text-brand-gold">E-mail Copiado!</span>
                  </>
                ) : (
                  <>
                    <Copy size={16} />
                    <span>Copiar E-mail</span>
                  </>
                )}
              </button>
            </div>

            {/* Cards de Apoio */}
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-4 text-left pt-8 border-t border-white/10">
              <a
                href="https://www.instagram.com/amilcarmoreira.juridico/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-brand-gold/40 transition-all flex items-center gap-4 group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <InstagramIcon size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-gold block">
                    Instagram Oficial
                  </span>
                  <span className="text-sm text-white font-semibold group-hover:text-brand-gold transition-colors">
                    @amilcarmoreira.juridico
                  </span>
                </div>
              </a>

              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-brand-gold shrink-0">
                  <Shield size={20} />
                </div>
                <div>
                  <span className="text-[11px] font-bold uppercase text-brand-gold block">
                    Formato de Atendimento
                  </span>
                  <span className="text-sm text-white font-semibold">
                    Presencial & Digital por Videoconferência
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-white/40 italic">
              * O retorno da análise prévia ocorre de forma criteriosa no prazo de até 24h úteis.
            </p>
          </div>
        </div>
      </section>

      {/* Marquee Ticker */}
      <Marquee />
    </div>
  );
}
