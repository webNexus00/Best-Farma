import React from 'react';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg' | 'hero';
  showText?: boolean;
  className?: string;
  lightText?: boolean;
}

export const BestFarmaLogo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  className = '',
  lightText = false,
}) => {
  const iconDimensions = {
    sm: 'w-8 h-8',
    md: 'w-11 h-11',
    lg: 'w-14 h-14',
    hero: 'w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72',
  };

  const textSizes = {
    sm: 'text-base',
    md: 'text-lg',
    lg: 'text-2xl',
    hero: 'text-4xl',
  };

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Official Best Farma Emblem from uploaded brand asset */}
      <div
        className={`relative ${iconDimensions[size]} shrink-0 rounded-2xl overflow-hidden shadow-md transition-transform duration-300 hover:scale-105 bg-[#E31C19] flex items-center justify-center p-0.5`}
      >
        <img
          src="/assets/aistudio/image_73e5144f.png"
          alt="Best Farma Farmácia Logo"
          className="w-full h-full object-contain rounded-xl"
        />
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col justify-center leading-none">
          <div className="flex items-center gap-1.5 leading-none">
            <span
              className={`font-heading font-black tracking-tighter uppercase ${textSizes[size]} ${
                lightText ? 'text-white' : 'text-[#E31C19]'
              }`}
            >
              BEST <span className={lightText ? 'text-[#FFD100]' : 'text-[#1E293B]'}>FARMA</span>
            </span>
          </div>
          <span
            className={`text-[9px] sm:text-[10px] tracking-[0.25em] uppercase font-bold mt-1 ${
              lightText ? 'text-white/80' : 'text-[#E31C19]'
            }`}
          >
            FARMÁCIA
          </span>
        </div>
      )}
    </div>
  );
};

export const VolumetricHeroCross: React.FC = () => {
  return (
    <div className="relative group cursor-grab active:cursor-grabbing p-4">
      {/* Dynamic Ambient Yellow/White Glow */}
      <div className="absolute inset-0 bg-radial from-[#FFD100]/30 via-white/20 to-transparent blur-3xl rounded-full scale-125 -z-10 animate-pulse duration-3000 pointer-events-none" />

      {/* 3D Acrylic Cross Container with Official Logo */}
      <div className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 transform-gpu transition-all duration-300 group-hover:scale-105 rounded-3xl p-3 bg-white/10 backdrop-blur-md border-2 border-white/40 shadow-[0_20px_50px_rgba(0,0,0,0.25)] flex items-center justify-center">
        {/* Subtle Bevel Ring */}
        <div className="absolute -inset-1 rounded-[28px] border-2 border-[#FFD100]/60 pointer-events-none opacity-80" />

        {/* The Exact Official Logo Image */}
        <img
          src="/assets/aistudio/image_73e5144f.png"
          alt="Emblema Oficial Best Farma Farmácia"
          className="w-full h-full object-contain rounded-2xl drop-shadow-[0_15px_30px_rgba(0,0,0,0.3)]"
        />

        {/* Floating Heart Amber Specular Flare */}
        <div className="absolute bottom-6 right-6 w-12 h-12 bg-[#FFD100]/25 rounded-full blur-md pointer-events-none" />
      </div>
    </div>
  );
};
