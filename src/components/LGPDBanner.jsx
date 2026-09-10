import React, { useState, useEffect } from 'react';
import { Shield, X } from 'lucide-react';

export default function LGPDBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('lgpd-consent');
    if (!consent) {
      // Delay para não atrapalhar o carregamento inicial
      const timer = setTimeout(() => setVisible(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('lgpd-consent', 'accepted');
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] p-4 sm:p-6 animate-fadeIn">
      <div className="max-w-4xl mx-auto bg-[#0E1726]/95 backdrop-blur-2xl text-white rounded-2xl border border-white/10 shadow-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="flex items-start gap-3 flex-1">
          <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 mt-0.5">
            <Shield size={20} className="text-brand-gold" />
          </div>
          <div>
            <p className="text-sm font-semibold text-white mb-1">
              Privacidade & Proteção de Dados
            </p>
            <p className="text-xs text-white/60 leading-relaxed">
              Este site não utiliza cookies de rastreamento. Respeitamos sua privacidade em conformidade com a Lei Geral de Proteção de Dados (LGPD — Lei nº 13.709/2018).
            </p>
          </div>
        </div>
        <div className="flex items-center gap-3 self-end sm:self-auto">
          <button
            onClick={accept}
            className="px-6 py-2.5 rounded-xl bg-white text-[#0E1726] text-xs font-bold uppercase tracking-wider hover:bg-brand-goldLight transition-all shadow-lg whitespace-nowrap"
          >
            Entendido
          </button>
          <button
            onClick={accept}
            className="p-2 rounded-lg hover:bg-white/10 transition-colors text-white/40 hover:text-white"
            aria-label="Fechar"
          >
            <X size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
