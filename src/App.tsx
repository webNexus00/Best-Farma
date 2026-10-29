import React from 'react';
import { CartProvider } from './context/CartContext';
import { HeroSection } from './components/HeroSection';
import { DigitalCatalog } from './components/catalog/DigitalCatalog';
import { MarqueeSection } from './components/MarqueeSection';
import { AboutSection } from './components/AboutSection';
import { DifferentialsSection } from './components/DifferentialsSection';
import { CategoriesSection } from './components/CategoriesSection';
import { LocationSection } from './components/LocationSection';
import { FinalCtaAndFooter } from './components/FinalCtaAndFooter';
import { CartDrawer } from './components/cart/CartDrawer';

export default function App() {
  return (
    <CartProvider>
      <main className="min-h-screen bg-white text-neutral-900 selection:bg-[#E31C19] selection:text-white">
        {/* 1. Hero Section (Vibrant Brand Red, White & Yellow with Cart trigger) */}
        <HeroSection />

        {/* 2. Catálogo Digital com Carrinho & Busca por Departamento */}
        <DigitalCatalog />

        {/* 3. Marquee Section (Painel de Cuidados em Movimento) */}
        <MarqueeSection />

        {/* 4. Categorias em Destaque (Cards com Efeito Sticky-Stacking) */}
        <CategoriesSection />

        {/* 5. Sobre a Best Farma (Editorial & 4 Elementos 3D Flutuantes) */}
        <AboutSection />

        {/* 6. Diferenciais (Lista em Bloco Claro) */}
        <DifferentialsSection />

        {/* 7. Localização, Atendimento & Mapa */}
        <LocationSection />

        {/* 8. Chamada Final & Rodapé Institucional */}
        <FinalCtaAndFooter />

        {/* 9. Interactive Shopping Cart Drawer */}
        <CartDrawer />
      </main>
    </CartProvider>
  );
}
