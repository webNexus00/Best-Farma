import React from 'react';
import { MessageCircle } from 'lucide-react';

interface WhatsAppPillButtonProps {
  label?: string;
  message?: string;
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showIcon?: boolean;
  variant?: 'red' | 'yellow' | 'white';
  onClick?: () => void;
}

export const WhatsAppPillButton: React.FC<WhatsAppPillButtonProps> = ({
  label = 'FALAR COM A FARMÁCIA',
  message = 'Olá! Encontrei a Best Farma pelo site e gostaria de tirar uma dúvida.',
  className = '',
  size = 'md',
  showIcon = true,
  variant = 'yellow',
  onClick,
}) => {
  const defaultHref = `https://wa.me/5515997376460?text=${encodeURIComponent(message)}`;

  const sizeClasses = {
    sm: 'px-5 py-2.5 text-xs',
    md: 'px-7 py-3.5 text-xs sm:text-sm',
    lg: 'px-8 py-4 text-sm sm:text-base',
  };

  const getVariantStyles = () => {
    switch (variant) {
      case 'yellow':
        return {
          style: {
            background: 'linear-gradient(135deg, #FFD100 0%, #FFA800 100%)',
            boxShadow: '0px 6px 20px rgba(255, 209, 0, 0.45)',
          },
          textClass: 'text-[#9A100D] font-extrabold',
          ringClass: 'ring-2 ring-white/90 ring-offset-2 ring-offset-[#E31C19]',
          iconClass: 'text-[#9A100D]',
        };
      case 'white':
        return {
          style: {
            background: '#FFFFFF',
            boxShadow: '0px 6px 20px rgba(0, 0, 0, 0.15)',
          },
          textClass: 'text-[#E31C19] font-black',
          ringClass: 'ring-2 ring-[#FFD100] ring-offset-2 ring-offset-white',
          iconClass: 'text-[#E31C19]',
        };
      case 'red':
      default:
        return {
          style: {
            background: 'linear-gradient(135deg, #E31C19 0%, #C71411 100%)',
            boxShadow: '0px 6px 20px rgba(227, 28, 25, 0.4)',
          },
          textClass: 'text-white font-extrabold',
          ringClass: 'ring-2 ring-[#FFD100] ring-offset-2 ring-offset-white',
          iconClass: 'text-[#FFD100]',
        };
    }
  };

  const currentVariant = getVariantStyles();

  const content = (
    <span className={`relative z-10 flex items-center justify-center gap-2.5 uppercase tracking-wider whitespace-nowrap ${currentVariant.textClass}`}>
      {showIcon && <MessageCircle className={`w-4 h-4 shrink-0 fill-current ${currentVariant.iconClass}`} />}
      <span>{label}</span>
    </span>
  );

  return (
    <a
      href={defaultHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      style={currentVariant.style}
      className={`group relative inline-flex items-center justify-center rounded-full font-heading transition-all duration-300 hover:scale-[1.03] active:scale-[0.98] cursor-pointer outline-none ${currentVariant.ringClass} ${sizeClasses[size]} ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-white/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      {content}
    </a>
  );
};
