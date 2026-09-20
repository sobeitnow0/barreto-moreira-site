import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight, Scale, Cpu, Award, PawPrint, Search, ExternalLink } from 'lucide-react';
import { InstagramIcon } from '../components/Icons';
import InstagramCarousel from '../components/InstagramCarousel';
import Marquee from '../components/Marquee';

export default function Atualizacoes() {
  const monitoringAxes = [
    {
      num: "01",
      icon: Scale,
      title: "Tribunais Superiores & TJSP",
      desc: "Acompanhamento rigoroso de teses repetitivas do Superior Tribunal de Justiça (STJ), repercussão geral no STF e súmulas recentes dos tribunais estaduais em matéria cível e contratual.",
      tag: "Jurisprudência Vinculante"
    },
    {
      num: "02",
      icon: Cpu,
      title: "Direito Digital & Plataformas",
      desc: "Monitoramento de precedentes sobre remoção de conteúdos, responsabilidade civil de provedores (Marco Civil da Internet), golpes eletrônicos, proteção de dados e inteligência artificial.",
      tag: "Ambiente Virtual"
    },
    {
      num: "03",
      icon: Award,
      title: "Propriedade Intelectual & INPI",
      desc: "Acompanhamento de diretrizes da Revista da Propriedade Industrial (RPI), disputas marcárias, concorrência desleal, imitação de trade dress e proteção de ativos intangíveis.",
      tag: "Ativos Imateriais"
    },
    {
      num: "04",
      icon: PawPrint,
      title: "Direito Animal & Saúde Suplementar",
      desc: "Evolução jurisprudencial sobre o regime jurídico dos animais de estimação (guarda e alimentos), erro médico-veterinário e teses contra negativas abusivas de planos de saúde.",
      tag: "Direito das Relações de Cuidado"
    }
  ];

  return (
    <div className="flex-1 flex flex-col w-full bg-[#F8FAFC]">
      <Head>
        <title>Atualizações & Jurisprudência | Barreto Moreira Estratégia Jurídica</title>
        <meta
          name="description"
          content="Acompanhe análises sobre decisões dos tribunais (STJ, STF, TJSP), teses regulatórias e inovações no direito pelo Barreto Moreira Estratégia Jurídica."
        />
        <link rel="canonical" href="https://barretomoreira.com.br/atualizacoes" />
        <meta property="og:title" content="Atualizações & Jurisprudência | Barreto Moreira Estratégia Jurídica" />
        <meta property="og:description" content="Acompanhe análises sobre decisões dos tribunais, mudanças regulatórias e inovações no direito pelo Barreto Moreira Estratégia Jurídica." />
        <meta property="og:url" content="https://barretomoreira.com.br/atualizacoes" />
      </Head>

      {/* Header Editorial */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">
          <span>04 // Atualizações &amp; jurisprudência</span>
        </div>
        <div className="border-b border-[#E2E8F0] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#18293C]">
            Acompanhe nossas <span className="text-[#64748B]">análises</span>
          </h1>
        </div>
        <p className="text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed font-light">
          Acompanhamos decisões recentes dos tribunais, mudanças legislativas e inovações do ambiente digital. Produzimos notas técnicas e análises voltadas à segurança jurídica e à antecipação de riscos operacionais e processuais.
        </p>
      </section>

      {/* Marquee Ticker */}
      <Marquee />

      {/* Eixos de Monitoramento Contínuo */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="mb-10 sm:mb-12">
          <div className="flex items-center gap-3 text-xs font-bold text-brand-gold uppercase tracking-wider mb-2.5">
            <span>Frentes de estudo permanente</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-[#18293C] tracking-tight mb-4">
            Eixos de <span className="font-light text-[#64748B]">pesquisa jurídica</span>
          </h2>
          <p className="text-base text-[#475569] font-light max-w-2xl leading-relaxed">
            Nossa atuação prática se apoia no monitoramento sistemático das principais fontes normativas e judiciais do país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {monitoringAxes.map((axis, idx) => {
            const IconComp = axis.icon;
            return (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-2xl sm:text-3xl font-black text-brand-gold">
                      {axis.num}.
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#18293C] group-hover:bg-[#18293C] group-hover:text-white transition-colors">
                      <IconComp size={18} />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-[#18293C] mb-3">
                    {axis.title}
                  </h3>
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light mb-6">
                    {axis.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-semibold text-[#18293C]">
                  <span>{axis.tag}</span>
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Card Destaque: DJEN & Tecnologia Aplicada */}
        <div className="mt-10 p-6 sm:p-8 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 mt-1">
              <Search size={22} />
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">Inovação Técnica</span>
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-[#18293C] mb-1.5">
                Pesquisa Ativa no Diário de Justiça Eletrônico Nacional (DJEN)
              </h3>
              <p className="text-sm text-[#475569] font-light max-w-3xl leading-relaxed">
                Desenvolvemos ferramentas proprietárias como o <strong>Buscador DJEN</strong> para garantir busca instantânea de publicações, intimações e atos judiciais em todos os tribunais do Brasil com zero defasagem.
              </p>
            </div>
          </div>

          <a
            href="https://www.buscadordjen.com.br"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#18293C] text-white hover:bg-brand-hover text-xs font-bold transition-all shrink-0 shadow-md group"
          >
            <span>Conhecer o Buscador DJEN</span>
            <ExternalLink size={14} className="text-brand-gold transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </section>

      {/* Feed Oficial do Instagram */}
      <div>
        <InstagramCarousel />
      </div>

      {/* CTA de Encerramento */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#0E1726] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-brand-gold mb-3">
            Atendimento seletivo
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 max-w-2xl">
            Precisa de uma avaliação jurídica especializada?
          </h2>
          <p className="text-white/70 text-base max-w-xl mb-8 font-light leading-relaxed">
            Consulte a viabilidade da sua demanda diretamente com a equipe do escritório.
          </p>
          <Link
            to="/contato"
            className="px-8 py-4 rounded-xl bg-white text-[#0E1726] font-bold text-xs hover:bg-brand-goldLight transition-all inline-flex items-center gap-3 shadow-xl"
          >
            <span>Solicitar avaliação preliminar</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <Marquee />
    </div>
  );
}
