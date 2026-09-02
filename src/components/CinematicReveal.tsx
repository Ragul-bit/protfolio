import React from 'react';
import { motion } from 'motion/react';

interface CinematicRevealProps {
  children: React.ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  className?: string;
  glowColor?: 'blue' | 'purple' | 'cyan' | 'amber' | 'emerald';
  showGlow?: boolean;
}

export const CinematicReveal: React.FC<CinematicRevealProps> = ({
  children,
  delay = 0,
  direction = 'up',
  className = '',
  glowColor = 'blue',
  showGlow = false,
}) => {
  const getInitial = () => {
    switch (direction) {
      case 'up':
        return { opacity: 0, y: 45, scale: 0.97, filter: 'blur(8px)' };
      case 'down':
        return { opacity: 0, y: -45, scale: 0.97, filter: 'blur(8px)' };
      case 'left':
        return { opacity: 0, x: 45, scale: 0.97, filter: 'blur(8px)' };
      case 'right':
        return { opacity: 0, x: -45, scale: 0.97, filter: 'blur(8px)' };
      case 'none':
      default:
        return { opacity: 0, scale: 0.96, filter: 'blur(10px)' };
    }
  };

  const getGlowClass = () => {
    switch (glowColor) {
      case 'purple':
        return 'from-purple-500/10 via-indigo-500/5 to-transparent';
      case 'cyan':
        return 'from-cyan-500/10 via-blue-500/5 to-transparent';
      case 'amber':
        return 'from-amber-500/10 via-orange-500/5 to-transparent';
      case 'emerald':
        return 'from-emerald-500/10 via-teal-500/5 to-transparent';
      case 'blue':
      default:
        return 'from-blue-500/10 via-sky-500/5 to-transparent';
    }
  };

  return (
    <motion.div
      initial={getInitial()}
      whileInView={{
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.85,
        ease: [0.16, 1, 0.3, 1],
        delay,
      }}
      className={`relative ${className}`}
    >
      {showGlow && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl h-72 rounded-full bg-gradient-to-b ${getGlowClass()} blur-3xl -z-10`}
        />
      )}
      {children}
    </motion.div>
  );
};
