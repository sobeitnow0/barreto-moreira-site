import React from 'react';
import { Link } from 'react-router-dom';
import { Head } from 'vite-react-ssg';
import { ArrowRight, Quote, Star, Users, ChevronDown } from 'lucide-react';
import Marquee from '../components/Marquee';
import InstagramCarousel from '../components/InstagramCarousel';
import { ScrollReveal } from '../components/ScrollReveal';
import heroImage from '../assets/hero-image.webp';

/* ------------------------------------------------------------------ */
/* CONFIGURAÇÕES RÁPIDAS                                               */
/* ------------------------------------------------------------------ */

const SITE_URL = 'https://barretomoreira.com.br';

// ⚠️ Troque para `true` quando as páginas /atuacao/<slug> estiverem no ar.
// Enquanto for `false`, todos os cards continuam apontando para /atuacao.
const AREA_PAGES_READY = false;

// ⚠️ Troque para `true` quando os depoimentos reais estiverem prontos
// (e depois de conferir o Provimento 205/2021 da OAB).
const SHOW_TESTIMONIALS = false;

// Dados de quem assina o conteúdo (E-E-A-T). Complete o que estiver faltando.
const AUTHOR = {
  name: 'Amilcar Barreto de Barros Moreira',
  role: 'Advogado e fundador do Barreto Moreira',
  oab: 'OAB/SP 349457',
  photo: '/amlk.png',
  bio: 'Graduado em Direito (UniSantos) e Comunicação Social (UniSanta), é especialista pós-graduado em Direito Digital, Direito Animal, Direito do Consumidor e Cinema e Vídeo. Conta com extensões em Litígio Internacional e Direito Energético (Univ. Heidelberg / UniSantos / ESDC), qualificações pela FGV, WIPO e curso CopyrightX pela Harvard Law School.',
};

/* ------------------------------------------------------------------ */
/* CONTEÚDO                                                            */
/* ------------------------------------------------------------------ */

const categories = [
  {
    num: '01',
    slug: 'direito-digital',
    name: 'Direito Digital',
    sub: 'Remoção de conteúdo, perfis falsos e responsabilidade civil de provedores',
    img: 'https://images.unsplash.com/photo-1596526131090-bcbe09e432d3?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    num: '02',
    slug: 'propriedade-intelectual',
    name: 'Propriedade Intelectual',
    sub: 'Proteção de ativos imateriais, oposições e recursos no INPI',
    img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '03',
    slug: 'direito-autoral',
    name: 'Direito Autoral',
    sub: 'Estruturação de licenciamentos, contratos de cessão e tutela de obras intelectuais',
    img: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '04',
    slug: 'direito-do-consumidor',
    name: 'Direito do Consumidor',
    sub: 'Defesa de consumidores e de fornecedores em litígios de consumo complexos',
    img: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '05',
    slug: 'contratos',
    name: 'Contratos Sob Medida',
    sub: 'Elaboração, mitigação de riscos operacionais e engenharia contratual',
    img: 'https://images.unsplash.com/photo-1648712898089-4435bc87b587?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    num: '06',
    slug: 'direito-animal',
    name: 'Direito Animal & Responsabilidade Civil',
    sub: 'Ações de guarda, erro médico-veterinário e responsabilidade civil por maus-tratos',
    img: 'https://images.unsplash.com/photo-1583512603805-3cc6b41f3edb?auto=format&fit=crop&w=800&q=80',
  },
  {
    num: '07',
    slug: 'plano-de-saude',
    name: 'Ação Contra Plano de Saúde',
    sub: 'Negativa de cobertura, reajuste abusivo e descredenciamento de rede',
    img: 'https://images.unsplash.com/photo-1512069511692-b82d787265cf?q=80&w=763&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

const features = [
  {
    num: '01',
    title: 'Diagnóstico Individual de Cada Caso',
    desc: 'Nenhuma causa entra em um fluxo padronizado. Cada processo passa por um diagnóstico próprio, no qual o plano de ação nasce das particularidades dos fatos e da jurisprudência mais recente aplicável.',
    tag: 'Investigação Detalhada',
  },
  {
    num: '02',
    title: 'Pesquisa Temática Aprofundada',
    desc: 'Teses sólidas exigem tempo de estudo. Investimos na pesquisa documental, jurisprudencial e doutrinária necessária para sustentar cada argumento com base consistente perante os tribunais.',
    tag: 'Rigor Técnico',
  },
];

// Respostas informativas, fundamentadas na legislação e jurisprudência, sem promessa de resultado (OAB).
// O mesmo array alimenta o FAQ visual e o schema FAQPage (JSON-LD).
const faqs = [
  {
    q: 'Como funciona a guarda e o custeio de despesas (alimentos) de animais de estimação após o divórcio ou dissolução de união estável?',
    a: 'Embora o art. 82 do Código Civil classifique os animais como semoventes, o Superior Tribunal de Justiça (STJ, REsp 1.718.274/SP, Rel. Min. Ricardo Villas Bôas Cueva) consolidou o entendimento de que os pets possuem natureza jurídica especial decorrente do vínculo afetivo (família multiespécie). É plenamente viável fixar em juízo a guarda (unilateral ou compartilhada), regime de convivência/visitas e a partilha proporcional das despesas de alimentação, saúde e cuidados veterinários, aplicando-se por analogia os princípios do Direito das Famílias (arts. 1.583 e 1.694 do Código Civil c/c art. 300 do CPC para tutela de urgência).',
  },
  {
    q: 'Houve suspeita de erro médico-veterinário ou falha em clínica/hospital pet. Cabe indenização?',
    a: 'Sim. A prestação de serviços médico-veterinários submete-se ao Código de Defesa do Consumidor (arts. 6º, VI, e 14 do CDC) e às regras gerais de responsabilidade civil (arts. 186 e 927 do Código Civil). Diante de erro no diagnóstico, em cirurgias ou negligência em internamento, é essencial reunir prontuário clínico integral, laudos e receituários. Demonstrado o nexo causal, cabe reparação por danos materiais (ressarcimento de valores e despesas com novos tratamentos) e compensação por danos morais pela dor suportada pelos tutores.',
  },
  {
    q: 'O plano de saúde negou atendimento médico de emergência ou internação alegando carência. Isso é legal?',
    a: 'Não. Os arts. 12, inciso V, alínea "c", e 35-C da Lei dos Planos de Saúde (Lei nº 9.656/1998) determinam que, em casos de urgência ou emergência médica (risco iminente de morte ou lesão irreparável), o prazo máximo de carência é de 24 horas a partir da contratação. Além disso, a Súmula 597 do STJ pacificou que é abusiva qualquer cláusula contratual que estipule carência superior a 24 horas para esses atendimentos. Havendo recusa indevida, cabe pedido de tutela de urgência (liminar, arts. 300 e 303 do CPC) para compelir a operadora a autorizar e cobrir imediatamente o procedimento.',
  },
  {
    q: 'O plano de saúde pode recusar cirurgia, prótese ou medicamento prescrito alegando que não está no Rol da ANS?',
    a: 'A escolha da melhor terapêutica cabe exclusivamente ao médico assistente, e não à operadora de saúde. O art. 10, §§ 12 e 13 da Lei nº 9.656/1998 (com redação dada pela Lei nº 14.454/2022) expressamente superou o caráter taxativo absoluto do Rol da ANS, garantindo a cobertura de tratamentos com eficácia científica comprovada. Ademais, a Súmula 102 do Tribunal de Justiça de São Paulo (TJSP) dispõe expressamente que, havendo indicação médica, é abusiva a negativa de cobertura sob alegação de procedimento não previsto no rol ou experimental.',
  },
  {
    q: 'Como identificar e questionar um reajuste abusivo no plano de saúde?',
    a: 'Nos planos individuais e familiares, o reajuste anual é regulado e limitado pelo índice fixado pela ANS. Nos planos coletivos (empresariais ou por adesão), o reajuste exige demonstração transparente de cálculos atuariais e sinistralidade, sendo passível de anulação caso imponha desvantagem exagerada ao consumidor (art. 51, IV e X, do CDC). Já nos reajustes por mudança de faixa etária (especialmente aos 59 anos), deve ser respeitada a proibição de discriminação do idoso (art. 15, § 3º da Lei nº 10.741/2003) e as teses firmadas pelo STJ no Tema Repetitivo 952.',
  },
  {
    q: 'Como remover um perfil falso ou um conteúdo ofensivo da internet?',
    a: 'O primeiro passo envolve a preservação técnica das provas (prints com URLs completas, data e hora, de preferência com ata notarial, conforme art. 384 do CPC) e a notificação pelos canais da plataforma. Se não houver resolução célere, ingressa-se com ação judicial com pedido de liminar (arts. 294 e 300 do CPC) para ordem de indisponibilização do conteúdo ou fornecimento de registros de IP e conexão, com amparo no Marco Civil da Internet (Lei nº 12.965/2014, arts. 10, 19 e 22), cumulada com reparação civil por danos morais e à imagem (art. 5º, V e X da CF/88 c/c art. 186 do Código Civil).',
  },
  {
    q: 'Como funciona o registro de uma marca no INPI e qual a sua importância?',
    a: 'No Brasil, a propriedade da marca e o direito de uso exclusivo em território nacional decorrem do registro regularmente concedido pelo Instituto Nacional da Propriedade Industrial (INPI), nos termos do art. 129 da Lei de Propriedade Industrial (Lei nº 9.279/1996). O procedimento compreende busca prévia de anterioridade, protocolo na classificação adequada, exame substantivo e acompanhamento de publicações na Revista da Propriedade Industrial (RPI) para responder a oposições de terceiros e evitar contrafação.',
  },
  {
    q: 'Preciso registrar minha obra intelectual para ter proteção de direitos autorais?',
    a: 'Não. Pelo art. 18 da Lei de Direitos Autorais (Lei nº 9.610/1998), a proteção dos direitos autorais independe de registro, nascendo com a própria criação da obra. Contudo, o registro na Biblioteca Nacional ou entidade competente é recomendado como prova pré-constituída de anterioridade e autoria. Para exploração comercial por terceiros, é imprescindível formalizar contrato de cessão ou licenciamento de direitos autorais (arts. 49 e 50 da LDA).',
  },
  {
    q: 'Por que não se deve utilizar modelos genéricos de contrato?',
    a: 'A liberdade contratual deve ser exercida em harmonia com a função social e os preceitos de boa-fé objetiva (arts. 421 e 422 do Código Civil). Modelos genéricos ignoram as particularidades da operação e frequentemente contêm cláusulas nulas ou desequilibradas quanto a responsabilidade, confidencialidade, propriedade intelectual, rescisão e penalidades. Um contrato sob medida mitiga litígios ao estruturar de forma precisa os riscos e obrigações de cada parte.',
  },
];

const testimonials = [
  {
    quote: '[Exemplo — substitua pelo depoimento real do cliente sobre o resultado obtido e a experiência com o escritório.]',
    name: '[Nome do cliente]',
    context: '[Tipo de causa, ex: Direito Digital]',
    rating: 5,
  },
  {
    quote: '[Exemplo — substitua pelo depoimento real do cliente sobre o resultado obtido e a experiência com o escritório.]',
    name: '[Nome do cliente]',
    context: '[Tipo de causa, ex: Propriedade Intelectual]',
    rating: 5,
  },
  {
    quote: '[Exemplo — substitua pelo depoimento real do cliente sobre o resultado obtido e a experiência com o escritório.]',
    name: '[Nome do cliente]',
    context: '[Tipo de causa, ex: Contratos Sob Medida]',
    rating: 5,
  },
];

/* ------------------------------------------------------------------ */
/* SEO                                                                 */
/* ------------------------------------------------------------------ */

const PAGE_TITLE =
  'Barreto Moreira | Estratégia Jurídica — Amilcar Barreto';
const PAGE_DESCRIPTION =
  'Escritório de advocacia em Santos/SP: Direito Digital, Propriedade Intelectual, Direito Autoral, Consumidor, Contratos e Planos de Saúde. OAB/SP 349457.';

// Dados estruturados (LegalService + Person + FAQPage).
// Só entram dados reais. Campos comentados: descomente quando tiver a informação.
const schemaMarkup = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': `${SITE_URL}/#organization`,
      name: 'Barreto Moreira | Estratégia Jurídica — Amilcar Barreto',
      alternateName: 'Barreto Moreira Estratégia Jurídica',
      url: `${SITE_URL}/`,
      description: PAGE_DESCRIPTION,
      logo: `${SITE_URL}/logo-cropped.png`,
      image: `${SITE_URL}/logo-cropped.png`,
      email: 'contato@barretomoreira.com.br',
      // telephone: '+55-13-XXXXX-XXXX',
      address: {
        '@type': 'PostalAddress',
        // streetAddress: 'Rua Exemplo, 123, sala 45',
        addressLocality: 'Santos',
        addressRegion: 'SP',
        postalCode: '11015-145',
        addressCountry: 'BR',
      },
      founder: { '@id': `${SITE_URL}/#founder` },
      knowsAbout: categories.map((c) => c.name),
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Áreas de atuação',
        itemListElement: categories.map((c) => ({
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: c.name,
            description: c.sub,
          },
        })),
      },
      sameAs: [
        'https://www.instagram.com/barretomoreira_adv',
        // 'https://www.linkedin.com/in/...',
        // 'https://g.page/...',  // Google Meu Negócio
      ],
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#founder`,
      name: AUTHOR.name,
      jobTitle: 'Advogado',
      identifier: {
        '@type': 'PropertyValue',
        propertyID: 'OAB/SP',
        value: '349457',
      },
      worksFor: { '@id': `${SITE_URL}/#organization` },
    },
    {
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    },
  ],
};

/* ------------------------------------------------------------------ */
/* COMPONENTE                                                          */
/* ------------------------------------------------------------------ */

export default function Home() {
  const areaLink = (slug) => `/atuacao#${slug}`;

  return (
    <div className="flex-1 flex flex-col w-full overflow-hidden bg-[#F8FAFC]">
      {/* Título, descrição e canonical são gerados no build (pré-renderização) */}
      <Head>
        <title>{PAGE_TITLE}</title>
        <meta name="description" content={PAGE_DESCRIPTION} />
        <link rel="canonical" href={`${SITE_URL}/`} />
        <meta property="og:title" content={PAGE_TITLE} />
        <meta property="og:description" content={PAGE_DESCRIPTION} />
        <meta property="og:url" content={`${SITE_URL}/`} />
      </Head>

      {/* Dados estruturados para Google e demais IAs */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />

      {/* 1. HERO */}
      <ScrollReveal>
        <section className="pt-12 sm:pt-16 lg:pt-20 pb-12 sm:pb-16 lg:pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Lado esquerdo */}
            <div className="lg:col-span-7 flex flex-col items-start text-left">
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 mb-4 sm:mb-5 rounded-full bg-white border border-[#E2E8F0] shadow-sm">
                <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                <span className="text-xs font-semibold text-[#18293C]">
                  Advocacia consultiva e litigiosa de alto impacto
                </span>
              </div>

              <h1 className="flex flex-col tracking-tight font-bold text-[#18293C] leading-[1.12] text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-[4rem] mb-4 sm:mb-5">
                <span>Rigor técnico e defesa</span>
                <span className="text-brand-gold">bem fundamentada.</span>
              </h1>

              {/* Frase descritiva literal */}
              <p className="text-base sm:text-xl text-[#18293C] leading-relaxed max-w-xl mb-3 font-medium">
                Escritório de advocacia em Santos/SP com atuação em Direito Digital,
                Propriedade Intelectual, Direito Autoral, Direito do Consumidor,
                Contratos, Direito Animal e ações contra planos de saúde.
              </p>

              <p className="text-base sm:text-lg text-[#475569] leading-relaxed max-w-xl mb-8 font-light">
                Cada caso passa por investigação aprofundada e por uma tese construída
                sob medida — sem modelos prontos, sem escala em massa. Mantemos um volume
                controlado de causas ativas para garantir dedicação real aos nossos clientes.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto">
                <Link
                  to="/contato"
                  className="px-8 py-4 rounded-xl bg-[#18293C] text-white font-semibold text-sm hover:bg-brand-hover transition-all flex items-center justify-center gap-3 shadow-xl shadow-[#18293C]/20 group"
                >
                  <span>Solicitar avaliação do caso</span>
                  <ArrowRight size={18} className="text-brand-gold transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>

            {/* Lado direito: imagem */}
            <div className="lg:col-span-5 relative mt-8 lg:mt-0">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-[#E2E8F0] max-h-[580px] w-full bg-white">
                <img
                  src={heroImage}
                  alt="Análise de petição e documentos jurídicos no escritório Barreto Moreira"
                  className="w-full h-full object-contain transition-transform duration-1000 hover:scale-105"
                />
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 2. ÁREAS DE ATUAÇÃO */}
      <ScrollReveal>
        <section id="areas" className="py-14 sm:py-20 lg:py-24 bg-white border-y border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between border-b border-[#E2E8F0] pb-6 mb-8 gap-6">
              <div>
                <div className="flex items-center gap-3 text-xs font-bold text-brand-gold uppercase tracking-wider mb-2.5">
                  <span>01 // Especialidades</span>
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18293C] leading-tight mb-3">
                  Áreas de <span className="text-[#64748B]">especialidade</span>
                </h2>
                <p className="text-base text-[#475569] font-light max-w-2xl leading-relaxed">
                  Atuamos em sete frentes do direito, com foco em causas que exigem pesquisa aprofundada e soluções sob medida.
                </p>
              </div>
              <Link
                to="/atuacao"
                className="text-xs font-bold text-[#18293C] hover:text-brand-gold flex items-center gap-2 transition-colors shrink-0"
              >
                <span>Ver portfólio de atuação</span>
                <ArrowRight size={14} />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-5">
              {categories.map((cat) => (
                <Link
                  key={cat.slug}
                  to={areaLink(cat.slug)}
                  className="group relative h-80 w-full sm:w-[calc(50%-10px)] lg:w-[calc(25%-15px)] rounded-2xl overflow-hidden border border-[#E2E8F0] shadow-sm flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl"
                >
                  <img
                    src={cat.img}
                    alt=""
                    role="presentation"
                    loading="lazy"
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E1726]/80 via-[#0E1726]/20 to-transparent transition-colors group-hover:from-[#0E1726]/95"></div>

                  <div className="relative z-10 flex justify-between items-center p-6">
                    <span className="text-xs font-bold text-brand-gold">{cat.num}.</span>
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:-rotate-45">
                      <ArrowRight size={16} className="text-white" />
                    </div>
                  </div>

                  <div className="relative z-10 p-6 pt-10">
                    <h3 className="text-lg font-bold text-white mb-2 leading-tight">{cat.name}</h3>
                    <p className="text-xs text-white/80 line-clamp-2 leading-relaxed">{cat.sub}</p>
                  </div>
                </Link>
              ))}
            </div>

            {/* Parcerias / outras demandas */}
            <div className="mt-10 p-6 sm:p-8 rounded-2xl bg-[#F8FAFC] border border-[#E2E8F0] flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 text-brand-gold flex items-center justify-center shrink-0 mt-1">
                  <Users size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#18293C] mb-1">
                    Demandas Adicionais e Atuação em Parceria
                  </h3>
                  <p className="text-sm text-[#475569] font-light max-w-3xl leading-relaxed">
                    Além das especialidades centrais, aceitamos e conduzimos demandas em outras áreas do direito (como criminal, trabalhista e previdenciário) por meio de parcerias técnicas e qualificadas, assegurando o mesmo padrão rigoroso de acompanhamento e supervisão do escritório.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 3. PILARES DE ATUAÇÃO */}
      <ScrollReveal>
        <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-3 text-xs font-bold text-brand-gold uppercase tracking-wider mb-2.5">
              <span>02 // Pilares de atuação</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#18293C] tracking-tight mb-4">
              Pilares <span className="font-light text-[#64748B]">de atuação</span>
            </h2>
            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-light max-w-3xl">
              O <strong>Barreto Moreira</strong> atua de forma seletiva por opção, não por porte. Mantemos um volume controlado de causas para assegurar atenção integral e pesquisa aprofundada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {features.map((feat) => (
              <div
                key={feat.num}
                className="p-6 sm:p-8 lg:p-10 rounded-3xl bg-white border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <span className="text-3xl font-black text-brand-gold block mb-5 transition-transform group-hover:-translate-y-1">
                    {feat.num}.
                  </span>
                  <h3 className="text-xl font-bold text-[#18293C] mb-3">{feat.title}</h3>
                  <p className="text-base text-[#475569] leading-relaxed font-light">{feat.desc}</p>
                </div>
                <div className="mt-8 pt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#18293C]">
                  <span>{feat.tag}</span>
                  <span className="w-2 h-2 rounded-full bg-brand-gold"></span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 4. QUEM ASSINA (autoria e credenciais) */}
      <ScrollReveal>
        <section className="py-14 sm:py-20 lg:py-24 bg-white border-y border-[#E2E8F0]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-10 sm:mb-12">
              <div className="flex items-center gap-3 text-xs font-bold text-brand-gold uppercase tracking-wider mb-2.5">
                <span>03 // Responsável técnico</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18293C] leading-tight">
                Quem conduz <span className="text-[#64748B]">o escritório</span>
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
              <div className="lg:col-span-4">
                <div className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
                  {AUTHOR.photo && (
                    <img
                      src={AUTHOR.photo}
                      alt={`Retrato de ${AUTHOR.name}, advogado`}
                      className="w-full aspect-[4/5] object-cover object-top rounded-2xl mb-6 shadow-sm"
                      loading="lazy"
                    />
                  )}
                  <p className="text-xl font-bold text-[#18293C] leading-tight mb-1.5">{AUTHOR.name}</p>
                  <p className="text-sm text-[#475569] font-light mb-3">{AUTHOR.role}</p>
                  <div className="pt-3 border-t border-[#E2E8F0] flex items-center justify-between">
                    <span className="text-xs font-bold text-brand-gold tracking-wide">{AUTHOR.oab}</span>
                    <span className="text-[11px] font-semibold text-[#64748B] bg-white px-2.5 py-1 rounded-md border border-[#E2E8F0]">
                      Santos/SP
                    </span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-8 flex flex-col justify-between">
                <div>
                  <div className="space-y-4 text-base sm:text-lg text-[#334155] leading-relaxed font-light mb-8">
                    <p>
                      Advogado fundador do Barreto Moreira, graduado em <strong>Direito (UniSantos)</strong> e <strong>Comunicação Social (UniSanta)</strong>. Especialista pós-graduado em <strong>Direito Digital</strong>, <strong>Direito Animal</strong> e <strong>Direito do Consumidor</strong>, conta com qualificações pela <strong>Harvard Law School (CopyrightX)</strong>, <strong>WIPO</strong>, <strong>FGV</strong> e <strong>Universität Heidelberg</strong>.
                    </p>

                    <p>
                      Sua trajetória une a prática em contencioso cível à vivência executiva como diretor jurídico em comércio eletrônico de grande escala e à inovação tecnológica (idealizador do buscador DJEN). No tatame, é faixa marrom (1º Grau) pela <strong>Kings Jiu Jitsu</strong>.
                    </p>
                  </div>

                  <div className="mb-6 flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#18293C]">
                      Direito Digital
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#18293C]">
                      Direito Animal
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#18293C]">
                      Propriedade Intelectual (WIPO)
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#18293C]">
                      CopyrightX (Harvard Law)
                    </span>
                    <span className="px-3 py-1.5 rounded-lg bg-[#F8FAFC] border border-[#E2E8F0] text-xs font-medium text-[#18293C]">
                      Direito do Consumidor
                    </span>
                  </div>
                </div>

                <div className="pt-6 border-t border-[#E2E8F0] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <p className="text-xs text-[#64748B] font-light leading-relaxed max-w-xl">
                    Os conteúdos deste site têm caráter estritamente informativo e não substituem a análise técnica individualizada de um caso concreto por um advogado.
                  </p>
                  <Link
                    to="/escritorio"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#18293C] hover:text-brand-gold transition-colors shrink-0"
                  >
                    <span>Conhecer a banca completa</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 5. PERGUNTAS FREQUENTES */}
      <ScrollReveal>
        <section id="faq" className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
          <div className="mb-10 sm:mb-12">
            <div className="flex items-center gap-3 text-xs font-bold text-brand-gold uppercase tracking-wider mb-2.5">
              <span>04 // Perguntas frequentes</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18293C] leading-tight mb-4">
              Dúvidas <span className="text-[#64748B]">comuns</span>
            </h2>
            <p className="text-base sm:text-lg text-[#475569] font-light max-w-3xl leading-relaxed">
              Respostas gerais com fundamentação jurídica e legal para as principais questões que recebemos. Cada caso possui especificidades que demandam análise individual prévia.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {faqs.map((f) => (
              <details
                key={f.q}
                className="group rounded-2xl bg-white border border-[#E2E8F0] shadow-sm open:shadow-lg open:border-brand-gold/40 transition-all"
              >
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 p-5 sm:p-6">
                  <h3 className="text-base sm:text-lg font-bold text-[#18293C] leading-snug">{f.q}</h3>
                  <ChevronDown
                    size={20}
                    className="shrink-0 text-brand-gold transition-transform duration-300 group-open:rotate-180"
                  />
                </summary>
                <div className="px-5 sm:px-6 pb-6 pt-1">
                  <p className="text-sm sm:text-base text-[#475569] leading-relaxed font-light">{f.a}</p>
                </div>
              </details>
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* 6. DEPOIMENTOS (desligado por padrão) */}
      {SHOW_TESTIMONIALS && (
        <ScrollReveal>
          <section className="py-14 sm:py-20 lg:py-24 bg-white border-y border-[#E2E8F0]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-4 mb-10">
                <span className="text-xs font-bold text-brand-gold uppercase tracking-wider">05 // Depoimentos</span>
                <span className="w-12 h-[1px] bg-[#E2E8F0]"></span>
              </div>

              <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#18293C] leading-tight">
                  O que dizem <span className="text-[#64748B]">nossos clientes</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="p-6 sm:p-8 rounded-3xl bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm hover:shadow-xl hover:border-brand-gold/40 transition-all duration-300 flex flex-col justify-between"
                  >
                    <div>
                      <Quote size={28} className="text-brand-gold mb-6" />
                      <p className="text-sm sm:text-base text-[#334155] leading-relaxed font-light italic mb-8">
                        "{t.quote}"
                      </p>
                    </div>
                    <div className="pt-6 border-t border-[#E2E8F0]">
                      <div className="flex items-center gap-1 mb-3">
                        {[...Array(t.rating)].map((_, starIdx) => (
                          <Star key={starIdx} size={14} className="text-brand-gold fill-brand-gold" />
                        ))}
                      </div>
                      <span className="text-sm font-bold text-[#18293C] block">{t.name}</span>
                      <span className="text-xs text-[#64748B] font-medium">{t.context}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </ScrollReveal>
      )}

      {/* 7. CTA FINAL */}
      <ScrollReveal>
        <section className="py-14 sm:py-20 lg:py-24 px-4 sm:px-6 lg:px-8 text-white relative overflow-hidden bg-[#0E1726]">
          <div
            className="absolute inset-0 w-full h-full bg-cover bg-center opacity-[0.12]"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1589829085413-56de8ae18c73?auto=format&fit=crop&w=1920&q=80')`,
            }}
          ></div>
          <div className="absolute inset-0 bg-gradient-to-br from-[#0E1726]/95 to-[#18293C]/95"></div>

          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-brand-gold/10 rounded-full blur-[160px] pointer-events-none z-0"></div>

          <div className="max-w-7xl mx-auto w-full relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-4 flex justify-center lg:justify-start">
              <div className="w-48 h-48 rounded-full border border-dashed border-brand-gold/50 flex flex-col items-center justify-center text-center p-6">
                <span className="text-[11px] font-bold text-brand-gold tracking-wider">OAB/SP</span>
                <span className="text-3xl font-black tracking-widest text-white my-1">349457</span>
                <span className="text-[10px] font-bold text-white/70 uppercase tracking-widest">Sob Medida</span>
              </div>
            </div>

            <div className="lg:col-span-8 flex flex-col items-start">
              <span className="text-xs font-bold text-brand-gold uppercase tracking-wider mb-2.5">
                Atendimento criterioso &amp; reservado
              </span>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
                Submeta seu caso a uma análise jurídica preliminar
              </h2>
              <p className="text-white/75 text-base sm:text-lg leading-relaxed max-w-3xl mb-8 font-light">
                Antes de assumirmos qualquer demanda, realizamos um estudo de viabilidade técnica para mapear riscos, probabilidades e os melhores caminhos para o seu caso. Envie os elementos do seu caso e receba um retorno criterioso em até 2 dias úteis.
              </p>

              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <Link
                  to="/contato"
                  className="px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-white text-[#0E1726] font-bold text-xs hover:bg-brand-goldLight transition-all flex items-center justify-center gap-3 shadow-2xl"
                >
                  <span>Solicitar avaliação</span>
                  <ArrowRight size={18} />
                </Link>
                <a
                  href="mailto:contato@barretomoreira.com.br"
                  className="px-8 sm:px-10 py-4 sm:py-5 rounded-xl bg-white/5 backdrop-blur-md text-white border border-white/20 font-medium text-xs hover:bg-white/10 transition-all flex items-center justify-center shadow-lg"
                >
                  contato@barretomoreira.com.br
                </a>
              </div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* 8. INSTAGRAM */}
      <ScrollReveal>
        <InstagramCarousel />
      </ScrollReveal>

      {/* 9. FAIXA INFINITA */}
      <Marquee />
    </div>
  );
}
