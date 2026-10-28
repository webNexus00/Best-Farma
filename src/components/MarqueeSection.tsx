import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  Sparkles,
  Heart,
  ShieldCheck,
  MapPin,
  Star,
  UserCheck,
  CheckCircle2,
  PhoneCall,
  Activity,
  Layers,
  Baby,
} from 'lucide-react';

interface VisualCard {
  title: string;
  category: string;
  tag: string;
  description: string;
  accentColor: string;
  borderColor: string;
  accentIcon: React.ReactNode;
}

const row1Cards: VisualCard[] = [
  {
    title: 'Dermocosméticos & Skincare',
    category: 'Estética & Saúde da Pele',
    tag: 'Alta Performance',
    description: 'Séruns concentrados, protetores solares toque seco, hidratantes faciais e fórmulas dermatológicas.',
    accentColor: '#E31C19',
    borderColor: 'border-red-100 hover:border-[#E31C19]',
    accentIcon: <Sparkles className="w-5 h-5 text-[#E31C19]" />,
  },
  {
    title: 'Higiene & Cuidados Pessoais',
    category: 'Rotina Diária',
    tag: 'Essenciais do Lar',
    description: 'Higiene bucal completa, sabonetes botânicos suaves, banho relaxante e cuidado diário para a família.',
    accentColor: '#FFD100',
    borderColor: 'border-yellow-200 hover:border-[#FFD100]',
    accentIcon: <ShieldCheck className="w-5 h-5 text-[#FFB703]" />,
  },
  {
    title: 'Vitaminas & Imunidade',
    category: 'Nutrição & Suplementos',
    tag: 'Vitalidade',
    description: 'Complexos vitamínicos, vitamina C, vitamina D3, ômega 3 e minerais para fortalecer sua imunidade.',
    accentColor: '#E31C19',
    borderColor: 'border-red-100 hover:border-[#E31C19]',
    accentIcon: <Activity className="w-5 h-5 text-[#E31C19]" />,
  },
  {
    title: 'Mamãe, Bebê & Infantil',
    category: 'Linha Materna',
    tag: 'Cuidado Delicado',
    description: 'Fraldas premium, pomadas protetoras, fórmulas infantis e sabonetes hipoalergênicos testados.',
    accentColor: '#FFD100',
    borderColor: 'border-yellow-200 hover:border-[#FFD100]',
    accentIcon: <Baby className="w-5 h-5 text-[#FFB703]" />,
  },
  {
    title: 'Medicamentos & Prescrições',
    category: 'Farmácia de Referência',
    tag: 'Confiabilidade',
    description: 'Orientação técnica farmacêutica, controle rigoroso de temperatura e medicamentos sempre organizados.',
    accentColor: '#E31C19',
    borderColor: 'border-red-100 hover:border-[#E31C19]',
    accentIcon: <Layers className="w-5 h-5 text-[#E31C19]" />,
  },
];

interface PillarBadge {
  title: string;
  highlight: string;
  icon: React.ReactNode;
}

const row2Pillars: PillarBadge[] = [
  {
    title: 'Atendimento Humanizado',
    highlight: 'Escuta atenta e dedicação',
    icon: <Heart className="w-4 h-4 text-[#E31C19] fill-current" />,
  },
  {
    title: 'Proximidade no Bairro',
    highlight: 'Villagio Ipanema I',
    icon: <MapPin className="w-4 h-4 text-[#FFB703]" />,
  },
  {
    title: 'WhatsApp Ágil',
    highlight: '(15) 99818-3108',
    icon: <PhoneCall className="w-4 h-4 text-[#E31C19]" />,
  },
  {
    title: 'Avaliação 4.5 Estrelas',
    highlight: 'Reconhecimento da vizinhança',
    icon: <Star className="w-4 h-4 text-[#FFB703] fill-current" />,
  },
  {
    title: 'Farmacêutico Presente',
    highlight: 'Orientação e acolhimento',
    icon: <UserCheck className="w-4 h-4 text-[#E31C19]" />,
  },
  {
    title: 'Qualidade Garantida',
    highlight: 'Padrão sanitário e procedência',
    icon: <CheckCircle2 className="w-4 h-4 text-[#FFB703]" />,
  },
];

export const MarqueeSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start'],
  });

  const xRow1 = useTransform(scrollYProgress, [0, 1], [-120, 120]);
  const xRow2 = useTransform(scrollYProgress, [0, 1], [120, -120]);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden bg-[#FAFBFC] pt-24 sm:pt-32 pb-16 text-neutral-800"
    >
      {/* Subtle Top Red Accent Stripe */}
      <div className="absolute top-0 inset-x-0 h-1.5 bg-gradient-to-r from-[#E31C19] via-[#FFD100] to-[#E31C19]" />

      {/* Section Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center">
        <span className="text-xs uppercase tracking-[0.25em] text-[#E31C19] font-extrabold">
          Ecossistema de Saúde
        </span>
        <h2 className="pharmacy-heading-red font-heading font-black uppercase text-3xl sm:text-5xl md:text-6xl tracking-tight mt-2">
          PAINEL DE CUIDADOS EM MOVIMENTO
        </h2>
        <p className="mt-4 text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto font-normal">
          Uma seleção completa pensada para o dia a dia da sua família com a curadoria, carinho e confiança da Best Farma.
        </p>
      </div>

      {/* Row 1: Visual Product Category Cards (Shifting Right) */}
      <div className="relative mb-8 w-full overflow-hidden">
        <motion.div
          style={{ x: xRow1, willChange: 'transform' }}
          className="flex gap-6 w-max pl-4"
        >
          {[...row1Cards, ...row1Cards].map((card, idx) => (
            <div
              key={idx}
              className={`relative w-[340px] sm:w-[420px] h-[260px] rounded-2xl bg-white p-6 sm:p-7 border-2 ${card.borderColor} transition-all duration-300 hover:scale-[1.02] flex flex-col justify-between group shadow-sm hover:shadow-xl`}
            >
              {/* Top Accent Rim */}
              <div
                className="absolute top-0 inset-x-6 h-1 rounded-b-full"
                style={{ backgroundColor: card.accentColor }}
              />

              {/* Card Top: Category and Icon */}
              <div className="flex items-start justify-between">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#E31C19]">
                    {card.category}
                  </span>
                  <h3 className="font-heading font-bold text-xl sm:text-2xl text-neutral-900 mt-1 group-hover:text-[#E31C19] transition-colors">
                    {card.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-xl bg-red-50/80 border border-red-100 flex items-center justify-center shrink-0">
                  {card.accentIcon}
                </div>
              </div>

              {/* Card Bottom: Description & Tag */}
              <div>
                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed line-clamp-2 mb-4">
                  {card.description}
                </p>
                <div className="flex items-center justify-between pt-3 border-t border-neutral-100 text-xs text-neutral-500 font-medium">
                  <span className="tracking-wider uppercase font-semibold text-neutral-700">{card.tag}</span>
                  <a
                    href={`https://wa.me/5515998183108?text=Olá!%20Gostaria%20de%20consultar%20produtos%20da%20categoria%20${encodeURIComponent(card.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#E31C19] font-bold hover:underline inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform"
                  >
                    Consultar WhatsApp &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2: Institutional Seals & Pillars (Shifting Left) */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          style={{ x: xRow2, willChange: 'transform' }}
          className="flex gap-4 sm:gap-6 w-max pl-4"
        >
          {[...row2Pillars, ...row2Pillars, ...row2Pillars].map((pillar, idx) => (
            <div
              key={idx}
              className="inline-flex items-center gap-3.5 rounded-full bg-white border border-neutral-200/80 px-6 py-3.5 shadow-sm transition-all hover:border-[#E31C19] hover:shadow-md shrink-0"
            >
              <div className="w-8 h-8 rounded-full bg-red-50 flex items-center justify-center shrink-0">
                {pillar.icon}
              </div>
              <div className="flex flex-col">
                <span className="text-xs sm:text-sm font-bold text-neutral-900 uppercase tracking-wider">
                  {pillar.title}
                </span>
                <span className="text-[11px] text-neutral-500 font-medium">
                  {pillar.highlight}
                </span>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
