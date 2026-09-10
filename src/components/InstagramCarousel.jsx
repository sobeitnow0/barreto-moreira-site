import React, { useEffect } from 'react';
import { InstagramIcon } from './Icons';

export default function InstagramCarousel() {
  useEffect(() => {
    if (window.__bhldScript) return;
    window.__bhldScript = true;
    const d = document;
    const s = d.createElement("script");
    s.type = "module";
    s.src = "https://w.behold.so/widget.js";
    d.head.append(s);
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-white border-y border-[#E2E8F0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold uppercase tracking-normal text-[#162235]">
              Novidades do <span className="text-[#64748B]">Escritório</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/amilcarmoreira.juridico/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-bold uppercase tracking-wider text-[#162235] hover:border-brand-gold transition-colors ml-2"
            >
              <InstagramIcon size={16} className="text-brand-gold" />
              <span>Siga no Instagram</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Behold.so Instagram Widget */}
        <behold-widget feed-id="1fyYQI63uf75FyEvYWUw"></behold-widget>
      </div>
    </section>
  );
}
