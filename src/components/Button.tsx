import React from 'react';
import { motion } from 'framer-motion';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  href?: string;
  onClick?: () => void;
  className?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  href,
  onClick,
  className = '',
}) => {
  const baseStyles = 'px-6 py-3 rounded-md font-bold uppercase text-sm tracking-wide transition-all duration-300';
  const variants = {
    primary: 'bg-red-600 text-white hover:bg-yellow-500 hover:text-slate-900 shadow-lg shadow-red-600/30',
    secondary: 'bg-yellow-500 text-slate-900 hover:bg-red-600 hover:text-white',
    outline: 'border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white',
  };

  const ButtonContent = (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {ButtonContent}
      </a>
    );
  }

  return ButtonContent;
};
