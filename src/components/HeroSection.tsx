import React, { useState } from 'react';
import { BestFarmaLogo, VolumetricHeroCross } from './BestFarmaLogo';
import { Magnet } from './ui/Magnet';
import { WhatsAppPillButton } from './ui/WhatsAppPillButton';
import { MessageCircle, Menu, X, Clock, MapPin, Sparkles } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Início', href: '#inicio' },
    { label: 'Sobre', href: '#sobre' },
    { label: 'Diferenciais', href: '#diferenciais' },
    { label: 'Categorias', href: '#categorias' },
    { label: 'Localização', href: '#localizacao' },
  ];

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-x-clip bg-gradient-to-b from-[#E31C19] via-[#D01815] to-[#B31310] text-white"
    >
      {/* Dynamic Ambient Glows: Yellow and White */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#FFD100]/25 via-white/15 to-transparent blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/20 to-transparent pointer-events-none -z-10" />

      {/* Top Bar Contract (1 row, 3 zones: Brand, Nav Links, 1 Primary Action) */}
      <header className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/95 border-b border-red-100 shadow-sm transition-all">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
          {/* Zone 1: Single text element wordmark + authentic brand logo */}
          <a href="#inicio" className="shrink-0 flex items-center group">
            <BestFarmaLogo size="sm" showText={true} lightText={false} />
          </a>

          {/* Zone 2: Concise single-line text navigation links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="whitespace-nowrap shrink-0 text-xs font-bold uppercase tracking-wider text-neutral-700 transition-colors duration-200 hover:text-[#E31C19] hover:underline underline-offset-8 decoration-[#E31C19] decoration-2"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Zone 3: 1 Primary Quick Action Button */}
          <div className="hidden sm:flex items-center gap-4 shrink-0">
            <a
              href="https://wa.me/5515998183108?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Best%20Farma."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 rounded-full border-2 border-[#E31C19] bg-[#E31C19] px-5 py-2 text-xs font-black tracking-wider text-white transition-all shadow-md hover:bg-[#C71411] hover:border-[#C71411]"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#FFD100] fill-current" />
              <span className="whitespace-nowrap font-mono tabular-nums">(15) 99818-3108</span>
            </a>
          </div>

          {/* Mobile Menu Trigger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex lg:hidden p-2 text-neutral-700 hover:text-[#E31C19]"
            aria-label="Abrir menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Dropdown */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-b border-neutral-200 bg-white px-6 py-4 flex flex-col gap-4 shadow-lg animate-in slide-in-from-top duration-200">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-bold uppercase tracking-wider text-neutral-800 hover:text-[#E31C19] py-1"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-neutral-200 flex flex-col gap-2">
              <a
                href="https://wa.me/5515998183108?text=Olá!%20Gostaria%20de%20falar%20com%20a%20Best%20Farma."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-full bg-[#E31C19] py-2.5 text-xs font-bold uppercase tracking-wider text-white"
              >
                <MessageCircle className="w-4 h-4 text-[#FFD100] fill-current" />
                <span>WhatsApp: (15) 99818-3108</span>
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Main Hero Body */}
      <div className="relative flex flex-1 flex-col items-center justify-center px-4 py-8 sm:py-12">
        {/* Giant Hero Title - Glowing White and Amber */}
        <div className="w-full text-center select-none overflow-hidden leading-none">
          <h1 className="pharmacy-heading font-heading font-black uppercase tracking-tight text-[12.5vw] sm:text-[14.5vw] md:text-[16vw] leading-none whitespace-nowrap drop-shadow-[0_12px_35px_rgba(0,0,0,0.35)]">
            BEST FARMA
          </h1>
        </div>

        {/* Subtitle / City Badge in Hero */}
        <div className="mt-3 flex items-center gap-2.5 rounded-full bg-white/15 backdrop-blur-sm border border-white/30 px-5 py-1.5 text-xs font-bold uppercase tracking-widest text-white shadow-sm">
          <MapPin className="w-3.5 h-3.5 text-[#FFD100]" />
          <span>Sorocaba · Villagio Ipanema I</span>
        </div>

        {/* Floating 3D Volumetric Central Magnetic Emblem */}
        <div className="relative my-4 sm:my-6 z-20 flex items-center justify-center">
          <Magnet sensitivity={3.5}>
            <VolumetricHeroCross />
          </Magnet>
        </div>

        {/* Subtle Decorative Rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[360px] sm:w-[500px] h-[360px] sm:h-[500px] rounded-full border border-white/20 pointer-events-none -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[540px] sm:w-[760px] h-[540px] sm:h-[760px] rounded-full border border-[#FFD100]/25 pointer-events-none -z-10" />
      </div>

      {/* Hero Bottom Bar */}
      <div className="relative z-20 w-full border-t border-white/20 bg-black/20 backdrop-blur-md py-6 sm:py-8">
        <div className="mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
          {/* Left Text */}
          <div className="text-center sm:text-left max-w-xs sm:max-w-sm">
            <p className="text-[11px] sm:text-xs font-medium uppercase tracking-wider text-white/95 leading-relaxed">
              SEU CUIDADO MERECE ESTAR SEMPRE POR PERTO. ATENDIMENTO HUMANO E CONVENIÊNCIA EM SOROCABA.
            </p>
          </div>

          {/* Quick Schedule Notice */}
          <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-white/90 bg-white/10 px-4 py-2 rounded-full border border-white/15">
            <Clock className="w-4 h-4 text-[#FFD100]" />
            <span>Seg a Sáb até às 20h</span>
          </div>

          {/* Right WhatsApp Pill Button in Yellow Variant */}
          <div className="shrink-0">
            <WhatsAppPillButton
              label="FALAR COM A FARMÁCIA"
              size="md"
              variant="yellow"
              message="Olá! Vim pelo site da Best Farma e gostaria de atendimento."
            />
          </div>
        </div>
      </div>
    </section>
  );
};
