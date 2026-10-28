import React from 'react';
import { motion } from 'motion/react';

// 1. Superior Esquerdo: Cápsula 3D translúcida no Vermelho Oficial e Branco com bolinhas amarelas
export const FloatingCapsule: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      animate={{
        y: [-10, 10, -10],
        rotate: [15, 22, 15],
      }}
      transition={{
        duration: 7,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`pointer-events-none ${className}`}
    >
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_15px_30px_rgba(227,28,25,0.25)]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="capRedBrand" x1="0" y1="0" x2="60" y2="60" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF4A40" />
              <stop offset="50%" stopColor="#E31C19" />
              <stop offset="100%" stopColor="#A91B15" />
            </linearGradient>
            <linearGradient id="capWhiteBrand" x1="30" y1="30" x2="90" y2="90" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFFFFF" />
              <stop offset="70%" stopColor="#F1F5F9" />
              <stop offset="100%" stopColor="#E2E8F0" />
            </linearGradient>
          </defs>

          <g transform="rotate(45 50 50)">
            {/* Top Red Half */}
            <path
              d="M32 50V30C32 20.0589 40.0589 12 50 12C59.9411 12 68 20.0589 68 30V50H32Z"
              fill="url(#capRedBrand)"
            />
            {/* Bottom White Half */}
            <path
              d="M32 50V70C32 79.9411 40.0589 88 50 88C59.9411 88 68 79.9411 68 70V50H32Z"
              fill="url(#capWhiteBrand)"
              stroke="#E2E8F0"
              strokeWidth="1.5"
            />
            {/* Interior Yellow Heart Microbeads */}
            <circle cx="44" cy="62" r="3.2" fill="#FFD100" />
            <circle cx="56" cy="68" r="3.5" fill="#E31C19" />
            <circle cx="48" cy="74" r="2.8" fill="#FFD100" />
            {/* Separation line */}
            <line x1="31" y1="50" x2="69" y2="50" stroke="#FFD100" strokeWidth="2.5" />
            {/* Specular Glint */}
            <path d="M38 24C38 20 42 16 48 16" stroke="#FFFFFF" strokeWidth="3" strokeLinecap="round" strokeOpacity="0.8" />
          </g>
        </svg>
      </div>
    </motion.div>
  );
};

// 2. Superior Direito: Coração Oficial em Amarelo Ouro Vivo (#FFD100)
export const FloatingResinHeart: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      animate={{
        y: [8, -12, 8],
        rotate: [-12, -4, -12],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`pointer-events-none ${className}`}
    >
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_15px_30px_rgba(255,209,0,0.35)]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="heartGoldBrand" x1="20" y1="20" x2="80" y2="80" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FFF280" />
              <stop offset="35%" stopColor="#FFD100" />
              <stop offset="100%" stopColor="#FFA800" />
            </linearGradient>
          </defs>
          <path
            d="M50 82L47.1 79.36C36.8 70.02 30 63.88 30 56.3C30 50.1 34.84 45.26 41.04 45.26C44.54 45.26 47.9 46.89 50 49.44C52.1 46.89 55.46 45.26 58.96 45.26C65.16 45.26 70 50.1 70 56.3C70 63.88 63.2 70.02 52.9 79.38L50 82Z"
            fill="url(#heartGoldBrand)"
            stroke="#FFFFFF"
            strokeWidth="2.5"
          />
          {/* Specular spot */}
          <ellipse cx="42" cy="52" rx="4" ry="2" transform="rotate(-30 42 52)" fill="#FFFFFF" opacity="0.9" />
        </svg>
      </div>
    </motion.div>
  );
};

// 3. Inferior Esquerdo: Cruz Vermelha com contorno em traço Branco (estilo logo)
export const FloatingMedicalCross: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      animate={{
        y: [-12, 6, -12],
        rotate: [-8, 4, -8],
      }}
      transition={{
        duration: 9,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`pointer-events-none ${className}`}
    >
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_15px_30px_rgba(227,28,25,0.25)]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <defs>
            <linearGradient id="crossBrand" x1="15" y1="15" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#FF4A40" />
              <stop offset="50%" stopColor="#E31C19" />
              <stop offset="100%" stopColor="#C71411" />
            </linearGradient>
          </defs>
          <path
            d="M38 18C38 14.6863 40.6863 12 44 12H56C59.3137 12 62 14.6863 62 18V38H82C85.3137 38 88 40.6863 88 44V56C88 59.3137 85.3137 62 82 62H62V82C62 85.3137 59.3137 88 56 88H44C40.6863 88 38 85.3137 38 82V62H18C14.6863 62 12 59.3137 12 56V44C12 40.6863 14.6863 38 18 38H38V18Z"
            fill="url(#crossBrand)"
            stroke="#FFFFFF"
            strokeWidth="3"
          />
          {/* Yellow heart in center */}
          <circle cx="50" cy="50" r="10" fill="#FFD100" />
        </svg>
      </div>
    </motion.div>
  );
};

// 4. Inferior Direito: Frasco cosmético em vidro com líquido Vermelho e tampa Amarela
export const FloatingFrostedFlask: React.FC<{ className?: string }> = ({ className = '' }) => {
  return (
    <motion.div
      animate={{
        y: [10, -10, 10],
        rotate: [8, 16, 8],
      }}
      transition={{
        duration: 7.5,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      className={`pointer-events-none ${className}`}
    >
      <div className="relative w-24 h-24 sm:w-32 sm:h-32 drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Flask Cap in Yellow */}
          <rect x="42" y="8" width="16" height="8" rx="3" fill="#FFD100" />
          <rect x="38" y="16" width="24" height="8" rx="2" fill="#E31C19" />
          {/* Bottle Body */}
          <path
            d="M36 30C36 26.6863 38.6863 24 42 24H58C61.3137 24 64 26.6863 64 30L68 45C68 46 70 48 70 52V82C70 86.4183 66.4183 90 62 90H38C33.5817 90 30 86.4183 30 82V52C30 48 32 46 32 45L36 30Z"
            fill="#FFFFFF"
            stroke="#E31C19"
            strokeWidth="2"
          />
          {/* Inner Liquid Fill in Soft Red */}
          <path
            d="M33 60H67V82C67 84.7614 64.7614 87 62 87H38C35.2386 87 33 84.7614 33 82V60Z"
            fill="#E31C19"
            opacity="0.85"
          />
        </svg>
      </div>
    </motion.div>
  );
};
