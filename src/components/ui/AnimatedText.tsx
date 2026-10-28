import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface AnimatedTextProps {
  text: string;
  className?: string;
  isDark?: boolean;
}

interface CharProps {
  children: string;
  progress: MotionValue<number>;
  range: [number, number];
  isDark?: boolean;
}

const Char: React.FC<CharProps> = ({ children, progress, range, isDark = false }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);
  const color = useTransform(
    progress,
    range,
    isDark ? ['#4A5568', '#FFFFFF'] : ['#CBD5E1', '#0F172A']
  );

  return (
    <motion.span
      style={{ opacity, color }}
      className="inline-block transition-colors duration-75"
    >
      {children}
    </motion.span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
  isDark = false,
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.85', 'end 0.35'],
  });

  const words = text.split(' ');
  const totalChars = text.length;
  let charCounter = 0;

  return (
    <p
      ref={containerRef}
      className={`relative select-none text-balance ${className}`}
      aria-label={text}
    >
      {words.map((word, wordIdx) => {
        const wordChars = word.split('');
        const renderedWord = (
          <span key={wordIdx} className="inline-block whitespace-nowrap mr-[0.28em]">
            {wordChars.map((char, charIdx) => {
              const start = charCounter / totalChars;
              const end = (charCounter + 1) / totalChars;
              charCounter++;
              return (
                <Char
                  key={charIdx}
                  progress={scrollYProgress}
                  range={[start, end]}
                  isDark={isDark}
                >
                  {char}
                </Char>
              );
            })}
          </span>
        );
        charCounter++;
        return renderedWord;
      })}
    </p>
  );
};
