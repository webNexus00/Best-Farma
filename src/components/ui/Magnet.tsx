import React, { useRef, useState, useEffect } from 'react';

interface MagnetProps {
  children: React.ReactNode;
  sensitivity?: number;
  className?: string;
  disabled?: boolean;
}

export const Magnet: React.FC<MagnetProps> = ({
  children,
  sensitivity = 3.5,
  className = '',
  disabled = false,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    // Respect user's motion preferences
    const prefersReducedMotion =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (disabled || prefersReducedMotion) return;
    const node = containerRef.current;
    if (!node) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = node.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = e.clientX - centerX;
      const deltaY = e.clientY - centerY;

      // Only attract if within a reasonable distance
      const distance = Math.hypot(deltaX, deltaY);
      const maxDistance = Math.max(rect.width, rect.height) * 1.5;

      if (distance < maxDistance) {
        setIsHovered(true);
        setPosition({
          x: deltaX / sensitivity,
          y: deltaY / sensitivity,
        });
      } else {
        setIsHovered(false);
        setPosition({ x: 0, y: 0 });
      }
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      setPosition({ x: 0, y: 0 });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    node.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      node.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [disabled, sensitivity]);

  return (
    <div
      ref={containerRef}
      className={`inline-block ${className}`}
      style={{
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        transition: isHovered
          ? 'transform 0.3s cubic-bezier(0.25, 1, 0.5, 1)'
          : 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: 'transform',
      }}
    >
      {children}
    </div>
  );
};
