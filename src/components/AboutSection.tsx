import React from 'react';
import { AnimatedText } from './ui/AnimatedText';
import { WhatsAppPillButton } from './ui/WhatsAppPillButton';
import { FadeIn } from './ui/FadeIn';
import {
  FloatingCapsule,
  FloatingResinHeart,
  FloatingMedicalCross,
  FloatingFrostedFlask,
} from './Floating3DElements';

export const AboutSection: React.FC = () => {
  const statementText =
    'Localizada em Sorocaba, no Jardim Residencial Villagio Ipanema I, a Best Farma nasceu com o propósito de unir proximidade, atenção e praticidade. Acreditamos que a tecnologia aproxima, mas o verdadeiro cuidado continua sendo feito por pessoas. Conte com uma equipe pronta para acolher as suas necessidades cotidianas.';

  return (
    <section
      id="sobre"
      className="relative flex min-h-screen w-full flex-col items-center justify-center overflow-hidden bg-white px-6 py-28 sm:py-36 text-center text-neutral-900 border-t border-neutral-100"
    >
      {/* 4 Decorative Floating 3D Elements in the Corners in Brand Colors */}
      <FadeIn
        direction="down"
        delay={0.2}
        className="absolute top-12 left-6 sm:top-20 sm:left-16 z-10"
      >
        <FloatingCapsule />
      </FadeIn>

      <FadeIn
        direction="down"
        delay={0.3}
        className="absolute top-12 right-6 sm:top-20 sm:right-16 z-10"
      >
        <FloatingResinHeart />
      </FadeIn>

      <FadeIn
        direction="up"
        delay={0.4}
        className="absolute bottom-16 left-6 sm:bottom-24 sm:left-16 z-10"
      >
        <FloatingMedicalCross />
      </FadeIn>

      <FadeIn
        direction="up"
        delay={0.5}
        className="absolute bottom-16 right-6 sm:bottom-24 sm:right-16 z-10"
      >
        <FloatingFrostedFlask />
      </FadeIn>

      {/* Ambient Red & Yellow Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-red-100/50 via-yellow-100/40 to-transparent blur-3xl pointer-events-none -z-10" />

      {/* Content Container */}
      <div className="relative z-20 mx-auto max-w-4xl flex flex-col items-center">
        {/* Editorial Subtitle */}
        <FadeIn delay={0.1}>
          <span className="text-xs uppercase tracking-[0.3em] font-extrabold text-[#E31C19] block mb-3">
            Nossa Essência & Compromisso
          </span>
        </FadeIn>

        {/* Section Heading in Brand Red */}
        <FadeIn delay={0.2}>
          <h2 className="pharmacy-heading-red font-heading font-black uppercase tracking-tight text-[clamp(2.75rem,8vw,110px)] leading-none mb-10">
            SOBRE NÓS
          </h2>
        </FadeIn>

        {/* Scroll-Driven Reveal Character by Character */}
        <div className="mx-auto max-w-3xl px-2 sm:px-4">
          <AnimatedText
            text={statementText}
            className="text-lg sm:text-2xl md:text-3xl font-light leading-relaxed text-neutral-900 font-sans"
            isDark={false}
          />
        </div>

        {/* Adjacency Trust Badges (clean unboxed text per guidelines) */}
        <FadeIn delay={0.3} className="mt-10">
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-neutral-600 font-medium">
            <span>Sorocaba - SP</span>
            <span aria-hidden="true" className="text-[#FFD100]">·</span>
            <span>Jd. Residencial Villagio Ipanema I</span>
            <span aria-hidden="true" className="text-[#FFD100]">·</span>
            <span>Atendimento Farmacêutico Dedicado</span>
          </div>
        </FadeIn>

        {/* Harmonious CTA in Brand Red */}
        <FadeIn delay={0.4} className="mt-12">
          <WhatsAppPillButton
            label="CONHECER NOSSO ATENDIMENTO"
            size="lg"
            variant="red"
            message="Olá! Li sobre a Best Farma e gostaria de conhecer mais sobre os serviços e produtos."
          />
        </FadeIn>
      </div>
    </section>
  );
};
