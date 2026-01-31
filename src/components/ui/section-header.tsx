import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export function SectionHeader({ 
  title, 
  subtitle, 
  description, 
  centered = true, 
  light = false,
  className 
}: SectionHeaderProps) {
  return (
    <div className={cn(
      "max-w-3xl mb-16",
      centered ? "mx-auto text-center" : "text-left",
      className
    )}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={cn(
            "inline-block px-4 py-1 rounded-full text-[10px] font-sans font-black tracking-[0.2em] uppercase mb-4",
            light ? "bg-white/10 text-white" : "bg-primary/10 text-primary"
          )}
        >
          {subtitle}
        </motion.span>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={cn(
          "text-4xl lg:text-5xl font-serif font-black mb-6 leading-[1.1]",
          light ? "text-white" : "text-foreground"
        )}
      >
        {title}
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-lg leading-relaxed",
            light ? "text-white/60" : "text-foreground/60"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
