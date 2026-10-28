import React from 'react';
import { ArrowUpRight } from 'lucide-react';

interface GhostPillButtonProps {
  label: string;
  href?: string;
  message?: string;
  onClick?: () => void;
  className?: string;
  showIcon?: boolean;
  onDark?: boolean;
}

export const GhostPillButton: React.FC<GhostPillButtonProps> = ({
  label,
  href,
  message,
  onClick,
  className = '',
  showIcon = true,
  onDark = false,
}) => {
  const targetHref =
    href ||
    (message
      ? `https://wa.me/5515997376460?text=${encodeURIComponent(message)}`
      : 'https://wa.me/5515997376460?text=Olá!%20Gostaria%20de%20consultar%20a%20disponibilidade%20de%20um%20produto.');

  const colorClasses = onDark
    ? 'border-white text-white hover:bg-white hover:text-[#E31C19]'
    : 'border-[#E31C19] text-[#E31C19] hover:bg-[#E31C19] hover:text-white';

  const content = (
    <span className="flex items-center justify-center gap-2 whitespace-nowrap text-xs font-bold uppercase tracking-wider">
      <span>{label}</span>
      {showIcon && (
        <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </span>
  );

  return (
    <a
      href={targetHref}
      target="_blank"
      rel="noopener noreferrer"
      onClick={onClick}
      className={`group inline-flex items-center justify-center rounded-full border-2 px-5 py-2.5 transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] ${colorClasses} ${className}`}
    >
      {content}
    </a>
  );
};
