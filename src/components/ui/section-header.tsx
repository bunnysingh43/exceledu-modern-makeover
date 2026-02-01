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
  // Extract the last word to apply italic styling
  const words = title.split(' ');
  const lastWord = words.pop();
  const titleStart = words.join(' ');

  return (
    <div className={cn(
      "max-w-4xl mb-20",
      centered ? "mx-auto text-center" : "text-left",
      className
    )}>
      {subtitle && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="flex items-center justify-center gap-3 mb-6"
        >
          <div className={cn("w-8 h-px", light ? "bg-white/20" : "bg-primary/20")} />
          <span className={cn(
            "text-[10px] font-sans font-black tracking-[0.3em] uppercase",
            light ? "text-accent" : "text-primary"
          )}>
            {subtitle}
          </span>
          <div className={cn("w-8 h-px", light ? "bg-white/20" : "bg-primary/20")} />
        </motion.div>
      )}
      
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1, duration: 0.6 }}
        className={cn(
          "text-5xl lg:text-7xl font-serif font-black mb-8 leading-[1.1] tracking-tighter",
          light ? "text-white" : "text-foreground"
        )}
      >
        {titleStart} <span className="text-primary italic">{lastWord}</span>
      </motion.h2>

      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className={cn(
            "text-xl leading-relaxed max-w-2xl",
            centered && "mx-auto",
            light ? "text-white/60" : "text-foreground/60"
          )}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
