import React from 'react';
import { Award, Shield, Compass, BookOpen, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import Marquee from '../components/Marquee';

export default function Escritorio() {
  const credentials = [
    "Harvard Law School (CopyrightX)",
    "Pós-Graduação em Direito Digital",
    "Especialista em Propriedade Intelectual (WIPO)",
    "Pós em Direito Animal e Consumidor",
    "Ex-Diretor Jurídico de E-commerce (Grão de Gente)",
    "Faixa Marrom de Jiu-Jitsu (1º Grau)"
  ];

  return (
    <div className="flex-1 flex flex-col w-full bg-[#F8FAFC]">
      {/* Header Editorial */}
      <section className="pt-12 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs uppercase font-bold tracking-[0.25em] text-brand-gold mb-3">
          <span>02 // INSTITUCIONAL & FUNDADORES</span>
        </div>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-[#E2E8F0] pb-6 mb-8">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#162235]">
            O ESCRITÓRIO
          </h1>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold uppercase tracking-tight text-[#64748B]">
            ESTRATÉGICO
          </h1>
        </div>
        <p className="text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed">
          Nossa estrutura foi desenhada para romper com o modelo de advocacia industrial. Acreditamos no aprofundamento técnico, na relação direta entre clientes e sócios e em soluções exclusivas.
        </p>
      </section>

      {/* Marquee Ticker */}
      <Marquee />

      {/* Seção Pilares */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-16">
          <div className="lg:col-span-5">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-gold block mb-3">
              Posicionamento
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#162235] mb-6 leading-tight">
              A Defesa Criteriosa Não Admite Automatismos
            </h2>
            <p className="text-[#334155] text-sm sm:text-base leading-relaxed mb-4">
              O direito contemporâneo exige leitura profunda de conjuntura, criatividade jurídica e firmeza técnica perante os Tribunais.
            </p>
            <p className="text-[#334155] text-sm sm:text-base leading-relaxed">
              Limitamos intencionalmente o volume de casos para garantir a presença constante dos sócios em todas as fases da demanda.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl font-black text-brand-gold mb-2 block">01.</span>
              <h3 className="text-base font-bold uppercase text-[#162235] mb-2">Sem Terceirizações Ocultas</h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                A estratégia da sua causa é construída e executada diretamente por quem você contratou.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl font-black text-brand-gold mb-2 block">02.</span>
              <h3 className="text-base font-bold uppercase text-[#162235] mb-2">Visão Multidisciplinar</h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                Combinação entre o rigor do direito tradicional, inovação digital e experiência no mercado corporativo.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl font-black text-brand-gold mb-2 block">03.</span>
              <h3 className="text-base font-bold uppercase text-[#162235] mb-2">Rigor Documental</h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                Peças jurídicas e contratos lapidados com absoluta precisão doutrinária e argumentação persuasiva.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl font-black text-brand-gold mb-2 block">04.</span>
              <h3 className="text-base font-bold uppercase text-[#162235] mb-2">Inovação & Tecnologia Própria</h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed">
                Desenvolvimento contínuo de inteligência de dados para antecipação e precisão técnica em cada demanda.
              </p>
            </div>
          </div>
        </div>

        {/* Perfis dos Fundadores */}
        <div className="pt-16 border-t border-[#E2E8F0]">
          <div className="mb-12">
            <span className="text-xs uppercase font-bold tracking-[0.25em] text-brand-gold block mb-2">
              Liderança
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold uppercase tracking-tight text-[#162235]">
              Os Fundadores
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Amilcar Barreto de Barros Moreira */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-4">
                    {/* Foto exclusiva do Amilcar com fallback para monograma */}
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-brand-gold/40 bg-[#F8FAFC] flex items-center justify-center shrink-0 shadow-sm relative group">
                      <img 
                        src="/amilcar.jpg" 
                        alt="Amilcar Barreto de Barros Moreira"
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.nextElementSibling) {
                            e.currentTarget.nextElementSibling.style.display = 'flex';
                          }
                        }}
                      />
                      <div className="w-full h-full flex flex-col items-center justify-center font-black text-xl text-[#162235] bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]">
                        <span className="text-brand-gold text-lg">BM</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#162235]">
                        Amilcar Barreto de Barros Moreira
                      </h3>
                      <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mt-1">
                        Advogado Fundador • OAB/SP 34957
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://www.instagram.com/amilcarmoreira.juridico/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#162235] hover:border-brand-gold transition-colors self-start sm:self-auto"
                  >
                    <InstagramIcon size={14} className="text-brand-gold" />
                    <span>@amilcarmoreira.juridico</span>
                  </a>
                </div>

                <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-4">
                  Formação sólida em <strong>Direito (UniSantos)</strong> e <strong>Comunicação Social (UniSanta)</strong>. Pós-graduado em <strong>Direito Digital</strong>, <strong>Direito Animal / Defesa do Consumidor</strong> e <strong>Cinema e Vídeo (Belas Artes)</strong>.
                </p>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-8">
                  Especializações por <strong>Harvard Law School (CopyrightX)</strong>, Organização Mundial da Propriedade Intelectual (<strong>WIPO</strong>) e OAB/SP. Ex-Diretor Jurídico no grupo LGF Comércio Eletrônico (Grão de Gente). Faixa Marrom (1º Grau) de Jiu-Jitsu.
                </p>

                <div className="pt-6 border-t border-[#E2E8F0]">
                  <span className="text-xs uppercase font-bold tracking-wider text-[#64748B] block mb-3">
                    Credenciais Selecionadas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {credentials.map((cred, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#162235]"
                      >
                        {cred}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Alan Miranda */}
            <div className="lg:col-span-5 bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-6">
                  {/* Foto exclusiva do Alan com fallback para monograma */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-brand-gold/40 bg-[#F8FAFC] flex items-center justify-center shrink-0 shadow-sm relative group">
                    <img 
                      src="/alan.jpg" 
                      alt="Alan Miranda"
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                        if (e.currentTarget.nextElementSibling) {
                          e.currentTarget.nextElementSibling.style.display = 'flex';
                        }
                      }}
                    />
                    <div className="w-full h-full flex flex-col items-center justify-center font-black text-xl text-[#162235] bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]">
                      <span className="text-brand-gold text-lg">AM</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-tight text-[#162235]">
                      Alan Miranda
                    </h3>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-brand-gold block mt-1">
                      Bacharel Fundador • Gestão & Inteligência
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-4">
                  Co-fundador responsável pela infraestrutura de inteligência de dados, pesquisa jurisprudencial avançada e otimização dos fluxos operacionais do escritório.
                </p>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-8">
                  Sua atuação assegura que toda a pesquisa analítica e o suporte fático-jurídico sejam entregues com rapidez e consistência, liberando a equipe para dedicação integral a cada tese.
                </p>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#334155] leading-relaxed">
                  <span className="font-bold text-[#162235] block mb-1">Inovação e Pesquisa:</span>
                  Co-responsável pelo desenvolvimento da plataforma proprietária <strong>Buscador DJEN</strong>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
