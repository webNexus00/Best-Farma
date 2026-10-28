import React from 'react';
import { HeroSection } from './components/HeroSection';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { CategoriesSection } from './components/CategoriesSection';
import { LocationSection } from './components/LocationSection';
import { FinalCtaAndFooter } from './components/FinalCtaAndFooter';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-neutral-900 selection:bg-[#E31C19] selection:text-white">
      {/* 1. Hero Section (Vibrant Brand Red, White & Yellow) */}
      <HeroSection />

      {/* 2. Marquee Section (Painel de Cuidados em Movimento) */}
      <MarqueeSection />

      {/* 3. Sobre a Best Farma (Editorial & 4 Elementos 3D Flutuantes) */}
      <AboutSection />

      {/* 4. Diferenciais (Lista em Bloco Claro) */}
      <DifferentialsSection />

      {/* 5. Categorias em Destaque (Cards com Efeito Sticky-Stacking) */}
      <CategoriesSection />

      {/* 6. Localização, Atendimento & Mapa */}
      <LocationSection />

      {/* 7. Chamada Final & Rodapé Institucional */}
      <FinalCtaAndFooter />
    </main>
  );
}
