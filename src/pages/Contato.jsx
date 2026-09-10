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
      <section className="pt-16 sm:pt-24 pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.25em] text-brand-gold mb-4">
          <span>05 // CANAL OFICIAL</span>
        </div>
        <div className="border-b border-[#E2E8F0] pb-8 mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-normal text-[#162235]">
            SOLICITE SUA <span className="text-[#64748B]">AVALIAÇÃO</span>
          </h1>
        </div>
        <p className="text-base sm:text-lg text-[#334155] max-w-2xl leading-relaxed">
          Prezando pela análise aprofundada de cada demanda, nossos contatos ocorrem com discrição, método e atenção integral dos fundadores.
        </p>
      </section>

      {/* Card Central de Contato */}
      <section className="pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="bg-[#0E1726] text-white rounded-3xl p-8 sm:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-2xl bg-white/10 border border-brand-gold/40 flex items-center justify-center text-brand-gold mb-8 shadow-sm">
              <Mail size={28} />
            </div>

            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-gold mb-2">
              Avaliação Preliminar do Caso
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase mb-4 tracking-normal">
              Fale Diretamente Conosco
            </h2>
            <p className="text-white/70 text-sm sm:text-base leading-relaxed max-w-lg mb-10">
              Envie uma síntese da sua demanda jurídica para análise preliminar. Todos os atendimentos são realizados por videoconferência, com discrição e atenção integral dos fundadores.
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
                    100% Digital & Videoconferência
                  </span>
                </div>
              </div>
            </div>

            <p className="mt-8 text-xs text-white/40 italic">
              * O retorno da avaliação preliminar ocorre de forma criteriosa em até 2 dias úteis.
            </p>
          </div>
        </div>
      </section>
      {/* FAQ — Perguntas Frequentes */}
      <section className="py-14 sm:py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <div className="flex items-center gap-3 text-xs uppercase font-bold tracking-[0.25em] text-brand-gold mb-6">
          <span>Perguntas Frequentes</span>
        </div>
        <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#162235] mb-12">
          COMO <span className="text-[#64748B]">FUNCIONA</span>
        </h2>

        <div className="space-y-4">
          {[
            {
              q: "Como funciona a avaliação preliminar do caso?",
              a: "Ao nos contatar por e-mail, enviamos um breve questionário para compreender o cenário fático e jurídico da demanda. Após análise interna dos fundadores, retornamos em até 2 dias úteis com o diagnóstico e a proposta de atuação."
            },
            {
              q: "Qual é o formato de atendimento?",
              a: "Todos os atendimentos são realizados por videoconferência, o que permite atender clientes em todo o território nacional com a mesma qualidade e proximidade de uma reunião presencial."
            },
            {
              q: "O escritório atua em quais áreas?",
              a: "Nossas especialidades centrais são: Direito Digital & Plataformas, Propriedade Intelectual & Marcas, Direito Autoral, Direito do Consumidor (Consumidor e Fornecedor), Contratos Estratégicos e Direito Animal. Para matérias complementares, operamos em rede com bancas parceiras sob nossa coordenação."
            },
            {
              q: "Vocês atendem empresas e pessoas físicas?",
              a: "Sim. Atuamos tanto para pessoas físicas quanto para pessoas jurídicas, sempre com o mesmo padrão de profundidade analítica e atenção dedicada dos sócios fundadores."
            },
            {
              q: "Como são definidos os honorários?",
              a: "Os honorários são apresentados de forma transparente após a avaliação preliminar do caso, podendo ser fixos, por êxito ou mistos, conforme a natureza e complexidade da demanda, sempre em conformidade com a tabela da OAB/SP."
            },
          ].map((faq, idx) => (
            <details
              key={idx}
              className="group bg-white border border-[#E2E8F0] rounded-2xl shadow-sm hover:shadow-md transition-all overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-6 cursor-pointer list-none select-none">
                <span className="text-sm sm:text-base font-bold text-[#162235] leading-snug">
                  {faq.q}
                </span>
                <span className="w-8 h-8 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center shrink-0 text-brand-gold transition-transform group-open:rotate-45">
                  <span className="text-lg font-bold leading-none">+</span>
                </span>
              </summary>
              <div className="px-6 pb-6 pt-0 text-sm text-[#475569] leading-relaxed border-t border-[#E2E8F0] mt-0 pt-4">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </section>

      {/* Marquee Ticker */}
      <Marquee />
    </div>
  );
}
