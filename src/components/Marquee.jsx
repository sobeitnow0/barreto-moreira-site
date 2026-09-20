import React from 'react';

export default function Marquee() {
  const items = [
    "BARRETO MOREIRA",
    "ADVOCACIA ESTRATÉGICA",
    "OAB/SP 349457",
    "AVALIAÇÃO ESTRATÉGICA DE CASOS",
    "DIREITO DIGITAL & PLATAFORMAS",
    "DIREITO AUTORAL & PROPRIEDADE INTELECTUAL",
    "CONSUMIDOR & CONTRATOS SOB MEDIDA",
  ];

  return (
    <div className="w-full bg-[#0E1726] border-y border-[#162235]/40 py-4 overflow-hidden select-none">
      <div className="animate-marquee flex items-center gap-10 text-xs sm:text-sm tracking-[0.25em] font-semibold uppercase text-white/90">
        {[...items, ...items].map((text, idx) => (
          <React.Fragment key={idx}>
            <div className="flex items-center gap-4 shrink-0">
              <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
              <span className={idx % 2 === 0 ? "text-brand-gold" : "text-white/90"}>
                {text}
              </span>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
