import React, { useEffect } from 'react';
import { InstagramIcon } from '../components/Icons';
import Marquee from '../components/Marquee';

export default function Escritorio() {
  useEffect(() => {
    document.title = 'O Escritório | Barreto Moreira Advocacia';
    const meta = document.querySelector('meta[name="description"]');
    if (meta) {
      meta.setAttribute(
        'content',
        'Conheça o Barreto Moreira: banca fundada por Amilcar Barreto de Barros Moreira, com atuação direta dos sócios em cada causa. OAB/SP 349457.'
      );
    }
  }, []);

  const credentials = [
    "Pós-Graduação em Direito Digital",
    "Especialista em Propriedade Intelectual (WIPO)",
    "CopyrightX – U.S. Copyright Law and EU Copyright Framework (Harvard Law School)",
    "Pós-Graduação em Direito Animal",
    "Pós-Graduaçao em Direito do Consumidor",
    "Litígio Internacional & Direito Energético (Univ. Heidelberg / ESDC)",
    "Direitos Autorais, Patentes & Bases Legais (FGV)",
    "Ex-Diretor Jurídico de E-commerce (Grão de Gente)",
    "Desenvolvedor do Buscador DJEn (Plataforma & Extensão)",
    "Faixa Marrom de Jiu-Jitsu (1º Grau) pela Kings Jiu Jitsu"
  ];

  return (
    <div className="flex-1 flex flex-col w-full bg-[#F8FAFC]">
      {/* Header Editorial */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider mb-2.5">
          <span>02 // Institucional &amp; fundador</span>
        </div>
        <div className="border-b border-[#E2E8F0] pb-4 mb-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#18293C]">
            Advocacia <span className="text-[#64748B]">sob medida</span>
          </h1>
        </div>
        <p className="text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed font-light">
          Somos uma banca estruturada para demandas complexas, com um número controlado de casos ativos. Isso nos permite atuação consultiva preventiva e condução direta pelos sócios em cada etapa da causa.
        </p>
      </section>

      {/* Marquee Ticker */}
      <Marquee />

      {/* Seção Pilares */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start mb-14">
          <div className="lg:col-span-5">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-2.5">
              Posicionamento
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18293C] mb-4 leading-tight">
              A arquitetura jurídica de alto impacto exige método e profundidade
            </h2>
            <p className="text-[#334155] text-sm sm:text-base leading-relaxed mb-3 font-light">
              Desafios regulatórios, digitais e patrimoniais exigem investigação fática rigorosa, acompanhamento jurisprudencial contínuo e construção de teses sólidas perante as instâncias julgadoras.
            </p>
            <p className="text-[#334155] text-sm sm:text-base leading-relaxed font-light">
              Mantemos controle intencional do fluxo de causas aceitas para assegurar dedicação exclusiva e imersão total dos fundadores nos objetivos de cada cliente.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl font-black text-brand-gold mb-2 block">01.</span>
              <h3 className="text-base font-bold text-[#18293C] mb-2">Condução direta pelos sócios</h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-light">
                Do diagnóstico inicial ao sustentáculo oral, a gestão técnica é assumida diretamente pelos sócios encarregados, garantindo responsabilidade integral e sigilo.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl font-black text-brand-gold mb-2 block">02.</span>
              <h3 className="text-base font-bold text-[#18293C] mb-2">Abordagem multidisciplinar</h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-light">
                Conectamos a precisão do Direito Tradicional às dinâmicas do ambiente digital e à visão executiva de operações corporativas de grande porte.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl font-black text-brand-gold mb-2 block">03.</span>
              <h3 className="text-base font-bold text-[#18293C] mb-2">Fundamentação técnica consistente</h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-light">
                Peças processuais e instrumentos contratuais construídos com base jurisprudencial sólida e argumentação voltada à segurança jurídica do cliente.
              </p>
            </div>

            <div className="p-7 rounded-2xl bg-white border border-[#E2E8F0] shadow-sm">
              <span className="text-xl font-black text-brand-gold mb-2 block">04.</span>
              <h3 className="text-base font-bold text-[#18293C] mb-2">Inteligência analítica aplicável</h3>
              <p className="text-xs sm:text-sm text-[#334155] leading-relaxed font-light">
                Uso de algoritmos e mineração de dados jurídicos para mapeamento de entendimentos dos tribunais e aumento da probabilidade de êxito nas demandas.
              </p>
            </div>
          </div>
        </div>

        {/* Perfis dos Fundadores */}
        <div className="pt-12 sm:pt-16 border-t border-[#E2E8F0]">
          <div className="mb-10 sm:mb-12">
            <span className="text-xs font-bold text-brand-gold uppercase tracking-wider block mb-2.5">
              Liderança
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold text-[#18293C]">
              Os fundadores
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Amilcar Barreto de Barros Moreira */}
            <div className="lg:col-span-7 bg-white p-8 sm:p-10 rounded-3xl border border-[#E2E8F0] shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-brand-gold/40 bg-[#F8FAFC] flex items-center justify-center shrink-0 shadow-sm relative group">
  <img
    src={`${import.meta.env.BASE_URL}amlk.png`}
    alt="Amilcar Barreto de Barros Moreira"
    className="w-full h-full object-cover"
  />
</div>

                    <div>
                      <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18293C]">
                        Amilcar Barreto de Barros Moreira
                      </h3>
                      <span className="text-xs font-bold text-brand-gold block mt-1">
                        Advogado fundador • OAB/SP 349457
                      </span>
                    </div>
                  </div>

                  <a
                    href="https://www.instagram.com/barretomoreira_adv/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-semibold text-[#18293C] hover:border-brand-gold transition-colors self-start sm:self-auto"
                  >
                    <InstagramIcon size={14} className="text-brand-gold" />
                    <span>@barretomoreira_adv</span>
                  </a>
                </div>

                <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-4 font-light">
  Graduado em <strong>Direito (UniSantos)</strong> e <strong>Comunicação Social (UniSanta)</strong>, é especialista pós-graduado em <strong>Direito Digital</strong>, <strong>Direito Animal</strong>, <strong>Direito do Consumidor</strong> e <strong>Cinema e Vídeo</strong>. Conta com extensões em <strong>Litígio Internacional e Direito Energético</strong> (Universität Heidelberg / UniSantos / ESDC), qualificações pela <strong>Fundação Getulio Vargas (FGV)</strong>, certificação da Organização Mundial da Propriedade Intelectual (<strong>WIPO</strong>) e o curso <strong>CopyrightX</strong> pela <strong>Harvard Law School</strong>.
</p>
<p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-4 font-light">
  Sua trajetória profissional inclui atuação no contencioso e consultivo cível/trabalhista na <strong>Clara E. T. Monforte Advogados</strong> e a Direção Jurídica do grupo LGF Comércio Eletrônico (Grão de Gente), onde liderou a governança de contratos e operações digitais de grande escala, mantendo também rotina ativa de acompanhamento em buscadores jurídicos como o <strong>DJEN</strong>.
</p>
<p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-8 font-light">
  Fora das atividades jurídicas, é praticante de <strong>Jiu-Jitsu</strong>, ostentando a faixa marrom (1º Grau) pela <strong>Kings Jiu Jitsu</strong>.
</p>
               

                <div className="pt-6 border-t border-[#E2E8F0]">
                  <span className="text-xs font-bold text-[#64748B] block mb-3">
                    Credenciais e extensões selecionadas:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {credentials.map((cred, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#18293C]"
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
                  <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border border-brand-gold/40 bg-[#F8FAFC] flex items-center justify-center shrink-0 shadow-sm relative group">
                    <div className="w-full h-full flex flex-col items-center justify-center font-black text-xl text-[#18293C] bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0]">
                      <span className="text-brand-gold text-lg">AM</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-[#18293C]">
                      Alan Miranda
                    </h3>
                    <span className="text-xs font-bold text-brand-gold block mt-1">
                      Bacharel • Gestão &amp; inteligência
                    </span>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-4 font-light">
                  Co-fundador à frente da pesquisa jurisprudencial da banca. Mapeia decisões de tribunais e entendimentos de magistrados relevantes para cada tese em construção, organizando esse levantamento em bases de consulta rápida para os sócios.
                </p>
                <p className="text-sm sm:text-base text-[#334155] leading-relaxed mb-8 font-light">
                  Esse trabalho permite identificar, antes do protocolo de uma ação, quais teses têm maior probabilidade de êxito em cada vara ou tribunal, orientando a condução processual desde o primeiro contato com o caso.
                </p>

                <div className="p-4 rounded-xl bg-[#F8FAFC] border border-[#E2E8F0] text-xs text-[#334155] leading-relaxed font-light">
                  <span className="font-bold text-[#18293C] block mb-1">Pesquisa jurisprudencial aplicada:</span>
                  Acompanhamento contínuo de decisões recentes e organização de precedentes por tema, tribunal e relator, para fundamentar as teses com o entendimento mais atual da jurisprudência.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
