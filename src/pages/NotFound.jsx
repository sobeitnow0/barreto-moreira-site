import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center min-h-[60vh] px-4 sm:px-6 lg:px-8 text-center bg-[#F8FAFC]">
      
      {/* Número 404 monumental */}
      <div className="relative mb-8">
        <span className="text-[10rem] sm:text-[14rem] font-black text-[#E2E8F0] leading-none select-none">
          404
        </span>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-20 h-20 rounded-2xl bg-[#162235] flex items-center justify-center shadow-2xl">
            <span className="text-brand-gold text-2xl font-black">BM</span>
          </div>
        </div>
      </div>

      {/* Texto */}
      <h1 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#162235] mb-4">
        Página <span className="text-[#64748B]">Não Encontrada</span>
      </h1>
      <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-md mb-10 font-light">
        A página que você procura não existe ou foi movida. Retorne à página inicial para continuar navegando.
      </p>

      {/* Ações */}
      <div className="flex flex-col sm:flex-row items-center gap-4">
        <Link
          to="/"
          className="px-8 py-4 rounded-xl bg-[#162235] text-white font-semibold text-sm tracking-widest uppercase hover:bg-brand-hover transition-all flex items-center gap-3 shadow-xl shadow-[#162235]/20 group"
        >
          <Home size={18} className="text-brand-gold" />
          <span>Voltar ao Início</span>
          <ArrowRight size={16} className="text-brand-gold transition-transform group-hover:translate-x-1" />
        </Link>
        <Link
          to="/contato"
          className="px-8 py-4 rounded-xl bg-white text-[#162235] border border-[#E2E8F0] font-semibold text-sm tracking-widest uppercase hover:bg-black/[0.02] transition-all flex items-center justify-center"
        >
          Solicitar Avaliação
        </Link>
      </div>

      {/* Rodapé sutil */}
      <p className="mt-16 text-xs text-[#94A3B8] uppercase tracking-[0.2em]">
        OAB/SP 349457 • Barreto Moreira Advocacia Estratégica
      </p>
    </div>
  );
}
