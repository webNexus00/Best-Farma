import React from 'react';
import { GhostPillButton } from './ui/GhostPillButton';
import { Sparkles, Shield, HeartPulse, Sun, Droplets, Check, Smile, Feather, Apple } from 'lucide-react';

interface CategoryCardData {
  number: string;
  category: string;
  tagline: string;
  whatsappMsg: string;
  items: string[];
  col1Top: {
    title: string;
    subtitle: string;
    badge: string;
    icon: React.ReactNode;
    colorGradient: string;
    borderColor: string;
  };
  col1Bottom: {
    title: string;
    subtitle: string;
    badge: string;
    icon: React.ReactNode;
    colorGradient: string;
    borderColor: string;
  };
  col2Main: {
    title: string;
    subtitle: string;
    highlights: string[];
    accentColor: string;
    badgeText: string;
    icon: React.ReactNode;
  };
}

const categoriesData: CategoryCardData[] = [
  {
    number: '01',
    category: 'HIGIENE & CUIDADOS DIÁRIOS',
    tagline: 'Essenciais para o bem-estar e a rotina da casa',
    whatsappMsg: 'Olá! Gostaria de consultar itens de Higiene e Cuidados Diários na Best Farma.',
    items: ['Higiene Bucal Completa', 'Sabonetes Especiais', 'Cuidados Corporais', 'Linha Banho Suave'],
    col1Top: {
      title: 'Higiene Bucal',
      subtitle: 'Escovas ultra-macias, cremes dentais especializados e enxaguantes sem álcool.',
      badge: 'Proteção Diária',
      icon: <Smile className="w-5 h-5 text-[#FFB703]" />,
      colorGradient: 'from-yellow-50 to-white',
      borderColor: 'border-yellow-200',
    },
    col1Bottom: {
      title: 'Banho & Corpo',
      subtitle: 'Sabonetes dermatológicos, óleos hidratantes e desodorantes de alta proteção.',
      badge: 'Equilíbrio da Pele',
      icon: <Droplets className="w-5 h-5 text-[#E31C19]" />,
      colorGradient: 'from-red-50 to-white',
      borderColor: 'border-red-200',
    },
    col2Main: {
      title: 'Rotina de Higiene Completa',
      subtitle: 'Tranquilidade e saúde para toda a sua família com marcas líderes do mercado.',
      highlights: [
        'Curadoria de marcas reconhecidas e fórmulas hipoalergênicas',
        'Embalagens econômicas e refis para praticidade',
        'Orientação para cuidados diários e sensibilidades',
      ],
      accentColor: '#E31C19',
      badgeText: 'Linha Família Essencial',
      icon: <Shield className="w-8 h-8 text-[#E31C19]" />,
    },
  },
  {
    number: '02',
    category: 'DERMOCOSMÉTICOS & PROTEÇÃO SOLAR',
    tagline: 'Fórmulas avançadas para saúde e estética cutânea',
    whatsappMsg: 'Olá! Gostaria de consultar opções de Dermocosméticos e Protetores Solares na Best Farma.',
    items: ['Séruns de Vitamina C e Ácido Hialurônico', 'Protetores Toque Seco e com Cor', 'Águas Termais', 'Hidratantes Faciais'],
    col1Top: {
      title: 'Antioxidantes & Séruns',
      subtitle: 'Tratamentos de alta concentração para luminosidade, textura e prevenção.',
      badge: 'Alta Concentração',
      icon: <Sparkles className="w-5 h-5 text-[#E31C19]" />,
      colorGradient: 'from-red-50 to-white',
      borderColor: 'border-red-200',
    },
    col1Bottom: {
      title: 'Foto-Proteção Solar',
      subtitle: 'FPS 30 a 99 com controle de oleosidade e proteção contra luz azul e UVA/UVB.',
      badge: 'Defesa Diária',
      icon: <Sun className="w-5 h-5 text-[#FFB703]" />,
      colorGradient: 'from-yellow-50 to-white',
      borderColor: 'border-yellow-200',
    },
    col2Main: {
      title: 'Ciência Dermatológica ao Seu Alcance',
      subtitle: 'Tecnologia em cuidados com a pele recomendada pelos melhores dermatologistas.',
      highlights: [
        'Produtos com toque aveludado e rápida absorção',
        'Linha para peles acneicas, oleosas, mistas e sensíveis',
        'Combinações ideais para o clima de Sorocaba e região',
      ],
      accentColor: '#E31C19',
      badgeText: 'Cuidados Clínicos',
      icon: <Droplets className="w-8 h-8 text-[#E31C19]" />,
    },
  },
  {
    number: '03',
    category: 'NUTRIÇÃO, VITAMINAS & LINHA INFANTIL',
    tagline: 'Vitalidade para todas as idades, do primeiro passo ao envelhecimento ativo',
    whatsappMsg: 'Olá! Gostaria de saber mais sobre Vitaminas, Suplementos e Produtos Infantis.',
    items: ['Complexo B e Vitamina D3', 'Ômega 3 Puro', 'Fórmulas e Fraldas Infantis', 'Colágeno e Minerais'],
    col1Top: {
      title: 'Suplementos & Vitaminas',
      subtitle: 'Reforço para a imunidade, energia diária e suporte nutricional completo.',
      badge: 'Vitalidade',
      icon: <HeartPulse className="w-5 h-5 text-[#E31C19]" />,
      colorGradient: 'from-red-50 to-white',
      borderColor: 'border-red-200',
    },
    col1Bottom: {
      title: 'Primeiros Cuidados Infantis',
      subtitle: 'Fraldas de alta absorção, pomadas com calêndula e fórmulas aprovadas.',
      badge: 'Cuidado Materno',
      icon: <Feather className="w-5 h-5 text-[#FFB703]" />,
      colorGradient: 'from-yellow-50 to-white',
      borderColor: 'border-yellow-200',
    },
    col2Main: {
      title: 'Nutrição Inteligente e Amor Familiar',
      subtitle: 'Desde as primeiras fases da infância até o suporte aos adultos e idosos da casa.',
      highlights: [
        'Suplementação segura com dosagens regulamentadas',
        'Linha mamãe e bebê com máximo carinho e segurança',
        'Apoio ao desenvolvimento saudável e imunidade forte',
      ],
      accentColor: '#FFB703',
      badgeText: 'Saúde Integral',
      icon: <Apple className="w-8 h-8 text-[#E31C19]" />,
    },
  },
];

export const CategoriesSection: React.FC = () => {
  return (
    <section
      id="categorias"
      className="relative z-20 bg-white pt-24 pb-32 text-neutral-900 border-t border-neutral-100 scroll-mt-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="text-center mb-16 sm:mb-20">
          <span className="text-xs uppercase tracking-[0.25em] font-extrabold text-[#E31C19] block mb-2">
            Seleção Especializada
          </span>
          <h2 className="pharmacy-heading-red font-heading font-black uppercase text-4xl sm:text-6xl md:text-7xl tracking-tight">
            LINHAS DE CUIDADO
          </h2>
          <p className="mt-4 text-base sm:text-lg text-neutral-600 max-w-2xl mx-auto font-normal">
            Conheça nossos setores pensados para atender as necessidades de prevenção, beleza e saúde da sua família.
          </p>
        </div>

        {/* Sticky Stacking Cards Container */}
        <div className="relative space-y-12 sm:space-y-16">
          {categoriesData.map((cat, index) => {
            const topOffsetClass =
              index === 0 ? 'top-20 md:top-24' : index === 1 ? 'top-24 md:top-28' : 'top-28 md:top-32';

            return (
              <div
                key={cat.number}
                className={`sticky ${topOffsetClass} w-full transition-transform duration-300`}
                style={{
                  zIndex: index + 10,
                }}
              >
                <div className="rounded-[36px] sm:rounded-[48px] border-2 border-red-100 bg-[#FFFFFF] p-6 sm:p-8 md:p-10 shadow-[0_20px_50px_rgba(227,28,25,0.08)] backdrop-blur-xl transition-all">
                  {/* Top Bar of the Card */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 sm:pb-8 border-b border-neutral-100">
                    <div className="flex items-center gap-4">
                      <span className="font-heading font-black text-4xl sm:text-5xl text-[#E31C19] font-mono tabular-nums">
                        {cat.number}
                      </span>
                      <div>
                        <h3 className="font-heading font-black text-xl sm:text-2xl md:text-3xl text-neutral-900 uppercase tracking-tight">
                          {cat.category}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-600 mt-0.5 font-normal">
                          {cat.tagline}
                        </p>
                      </div>
                    </div>

                    <div className="shrink-0 self-start sm:self-auto">
                      <GhostPillButton
                        label="Consultar Disponibilidade"
                        message={cat.whatsappMsg}
                        onDark={false}
                      />
                    </div>
                  </div>

                  {/* Asymmetric Visual Grid: Col 1 (40%) + Col 2 (60%) */}
                  <div className="mt-6 sm:mt-8 grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
                    {/* Left Column (40% / 5 cols): 2 Stacked Cards */}
                    <div className="lg:col-span-5 flex flex-col gap-6">
                      {/* Top Stacked Card */}
                      <div
                        className={`rounded-2xl sm:rounded-3xl bg-gradient-to-br ${cat.col1Top.colorGradient} border-2 ${cat.col1Top.borderColor} p-5 sm:p-6 flex flex-col justify-between shadow-sm`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#E31C19]">
                            {cat.col1Top.badge}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center">
                            {cat.col1Top.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-lg sm:text-xl text-neutral-900">
                            {cat.col1Top.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                            {cat.col1Top.subtitle}
                          </p>
                        </div>
                      </div>

                      {/* Bottom Stacked Card */}
                      <div
                        className={`rounded-2xl sm:rounded-3xl bg-gradient-to-br ${cat.col1Bottom.colorGradient} border-2 ${cat.col1Bottom.borderColor} p-5 sm:p-6 flex flex-col justify-between shadow-sm`}
                      >
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-[#E31C19]">
                            {cat.col1Bottom.badge}
                          </span>
                          <div className="w-8 h-8 rounded-full bg-white shadow-xs flex items-center justify-center">
                            {cat.col1Bottom.icon}
                          </div>
                        </div>
                        <div>
                          <h4 className="font-heading font-bold text-lg sm:text-xl text-neutral-900">
                            {cat.col1Bottom.title}
                          </h4>
                          <p className="text-xs sm:text-sm text-neutral-600 mt-1 leading-relaxed">
                            {cat.col1Bottom.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Right Column (60% / 7 cols): 1 Broad Feature Card */}
                    <div className="lg:col-span-7 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-neutral-50 via-white to-red-50/20 border-2 border-red-100 p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden shadow-sm">
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-extrabold uppercase tracking-widest px-3.5 py-1.5 rounded-full bg-red-100 text-[#E31C19]">
                            {cat.col2Main.badgeText}
                          </span>
                          {cat.col2Main.icon}
                        </div>

                        <h4 className="font-heading font-extrabold text-2xl sm:text-3xl text-neutral-900 mt-2 leading-tight">
                          {cat.col2Main.title}
                        </h4>
                        <p className="text-sm sm:text-base text-neutral-600 mt-2 font-normal">
                          {cat.col2Main.subtitle}
                        </p>

                        <div className="mt-6 space-y-3">
                          {cat.col2Main.highlights.map((h, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5 text-[#E31C19]" />
                              </div>
                              <span className="text-xs sm:text-sm text-neutral-700 font-medium">{h}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Items Pill Strip */}
                      <div className="mt-8 pt-6 border-t border-neutral-100 flex flex-wrap gap-2 text-xs text-neutral-600">
                        {cat.items.map((it, i) => (
                          <span key={i} className="inline-flex items-center gap-1.5 font-medium">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FFD100]" />
                            <span>{it}</span>
                            {i < cat.items.length - 1 && <span className="text-neutral-300 ml-1">·</span>}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
