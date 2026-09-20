import React from 'react';
import { Head } from 'vite-react-ssg';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Scale, FileText, Cpu, Award, PawPrint, HeartPulse } from 'lucide-react';
import Marquee from '../components/Marquee';

export default function Atuacao() {
  const practiceAreas = [
    {
      num: "01",
      slug: "direito-digital",
      icon: Cpu,
      title: "Direito Digital & Ilícitos Cibernéticos",
      subtitle: "Proteção contra abusos no ambiente virtual e responsabilidade civil de provedores",
      desc: "Atuação concentrada na remoção de conteúdos infringentes, desindexação de dados, combate a perfis falsos e responsabilização de plataformas digitais. Priorizamos respostas rápidas para conter danos à imagem antes que se agravem.",
      tags: ["Remoção de conteúdo", "Perfis falsos & fraudes", "Responsabilidade de plataformas"]
    },
    {
      num: "02",
      slug: "propriedade-intelectual",
      icon: Award,
      title: "Propriedade Intelectual & Marcas",
      subtitle: "Blindagem e gestão preventiva de ativos imateriais perante o INPI",
      desc: "Gestão completa da identidade imaterial de marcas, patentes e desenhos industriais. Atuamos em oposições, nulidades administrativas, recursos e ações de contrafação para proteger o valor comercial de cada ativo.",
      tags: ["Registro & atuação no INPI", "Oposições e recursos", "Combate à contrafação"]
    },
    {
      num: "03",
      slug: "direito-autoral",
      icon: FileText,
      title: "Direito Autoral & Licenciamento",
      subtitle: "Tutela jurídica de criações intelectuais, obras artísticas e softwares",
      desc: "Elaboração de arquitetura contratual para cessão e licenciamento de direitos autorais. Proteção de obras literárias, artísticas, audiovisuais e código-fonte, garantindo remuneração adequada e prevenção contra exploração não autorizada.",
      tags: ["Contratos de licenciamento", "Proteção de obras", "Direito audiovisual"]
    },
    {
      num: "04",
      slug: "direito-do-consumidor",
      icon: Scale,
      title: "Direito do Consumidor",
      subtitle: "Atuação bivalente: representamos consumidores e também empresas e fornecedores",
      desc: "Atuamos tanto na defesa de consumidores quanto na representação de empresas e fornecedores em litígios de consumo, elaboração de termos de uso e conformidade com o CDC. Conhecer a dinâmica dos dois lados da relação de consumo é o que torna essa atuação mais precisa.",
      tags: ["Defesa de consumidores", "Defesa de fornecedores", "Conformidade com o CDC"]
    },
    {
      num: "05",
      slug: "contratos",
      icon: ShieldCheck,
      title: "Contratos Sob Medida & Engenharia Jurídica",
      subtitle: "Mitigação preventiva de riscos operacionais e blindagem contratual",
      desc: "Desenvolvimento de instrumentos contratuais personalizados, a partir do mapeamento dos riscos específicos de cada operação. Cláusulas sob medida no lugar de modelos genéricos, com foco em segurança jurídica e previsibilidade.",
      tags: ["Elaboração contratual", "Mitigação de riscos", "Governança preventiva"]
    },
    {
      num: "06",
      slug: "direito-animal",
      icon: PawPrint,
      title: "Direito Animal & Responsabilidade Civil",
      subtitle: "Tutela jurídica especializada em litígios envolvendo animais de estimação",
      desc: "Atuação técnica em ações de guarda de animais, indenizações por erro médico-veterinário e responsabilização por maus-tratos, com base na jurisprudência mais recente sobre o tema.",
      tags: ["Guarda de animais", "Erro médico-veterinário", "Responsabilidade civil"]
    },
    {
      num: "07",
      slug: "plano-de-saude",
      icon: HeartPulse,
      title: "Ação Contra Plano de Saúde",
      subtitle: "Atuação bivalente: representamos beneficiários e também operadoras de saúde",
      desc: "Atuamos em ações por negativa de cobertura, reajuste abusivo, descredenciamento de rede e demais litígios envolvendo planos de saúde — tanto na defesa de beneficiários quanto na representação de operadoras. Essa atuação nos dois lados da relação permite antecipar argumentos e teses da parte contrária.",
      tags: ["Negativa de cobertura", "Reajuste abusivo", "Defesa de operadoras"]
    }
  ];

  return (
    <div className="flex-1 flex flex-col w-full bg-[#F8FAFC]">
      <Head>
        <title>Áreas de Atuação | Barreto Moreira Estratégia Jurídica</title>
        <meta
          name="description"
          content="Direito Digital, Propriedade Intelectual, Direito Autoral, Direito do Consumidor, Ação Contra Plano de Saúde, Contratos Sob Medida e Direito Animal. Barreto Moreira OAB/SP 349457."
        />
        <link rel="canonical" href="https://barretomoreira.com.br/atuacao" />
        <meta property="og:title" content="Áreas de Atuação | Barreto Moreira Estratégia Jurídica" />
        <meta property="og:description" content="Direito Digital, Propriedade Intelectual, Direito Autoral, Consumidor, Planos de Saúde e Direito Animal. Conheça as áreas de especialidade do Barreto Moreira." />
        <meta property="og:url" content="https://barretomoreira.com.br/atuacao" />
      </Head>

      {/* Header Editorial */}
      <section className="pt-12 sm:pt-16 lg:pt-20 pb-8 sm:pb-10 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-wider mb-3">
          <span>01 // Portfólio de atuação</span>
        </div>
        <div className="border-b border-[#E2E8F0] pb-6 mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-[#18293C]">
            Áreas de <span className="text-[#64748B]">especialidade</span>
          </h1>
        </div>
        <p className="text-base sm:text-lg text-[#334155] max-w-3xl leading-relaxed font-light">
          Atuamos em sete frentes de especialização. Em cada uma, investigamos os fatos do caso a fundo antes de propor qualquer caminho jurídico — não aplicamos soluções padronizadas.
        </p>
      </section>

      {/* Marquee Ticker */}
      <Marquee />

      {/* Lista de Áreas de Atuação */}
      <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="space-y-8">
          {practiceAreas.map((area, idx) => {
            const IconComponent = area.icon;
            return (
              <div
                key={idx}
                id={area.slug}
                className="scroll-mt-28 p-8 sm:p-12 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start group"
              >
                {/* Lado Esquerdo: Número e Ícone */}
                <div className="lg:col-span-4 flex flex-col justify-between h-full border-b lg:border-b-0 lg:border-r border-[#E2E8F0] pb-6 lg:pb-0 lg:pr-8">
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className="text-2xl sm:text-3xl font-black text-brand-gold">
                        {area.num}.
                      </span>
                      <div className="w-12 h-12 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex items-center justify-center text-[#18293C] group-hover:bg-[#18293C] group-hover:text-white transition-colors">
                        <IconComponent size={22} />
                      </div>
                    </div>
                    <h2 className="text-2xl sm:text-3xl font-extrabold text-[#18293C] mb-2 leading-tight">
                      {area.title}
                    </h2>
                    <p className="text-xs font-semibold text-brand-gold">
                      {area.subtitle}
                    </p>
                  </div>
                </div>

                {/* Lado Direito: Descrição e Tags */}
                <div className="lg:col-span-8 flex flex-col justify-between h-full pt-2 lg:pt-0">
                  <p className="text-base text-[#475569] leading-relaxed font-light mb-8">
                    {area.desc}
                  </p>

                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pt-6 border-t border-[#E2E8F0]">
                    <div className="flex flex-wrap gap-2">
                      {area.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#18293C]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <Link
                      to="/contato"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#18293C] hover:text-brand-gold transition-colors shrink-0"
                    >
                      <span>Consultar viabilidade</span>
                      <ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA de Encerramento */}
      <section className="py-14 sm:py-20 lg:py-24 bg-[#0E1726] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
          <span className="text-xs font-bold text-brand-gold mb-3">
            Análise criteriosa
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold mb-6 max-w-2xl">
            Sua demanda exige uma abordagem especializada?
          </h2>
          <p className="text-white/70 text-base max-w-xl mb-8 font-light leading-relaxed">
            Encaminhe os fatos centrais do seu caso para estudo de viabilidade técnica e orientação prévia com os sócios.
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

      {/* Marquee Ticker */}
      <Marquee />
    </div>
  );
}
