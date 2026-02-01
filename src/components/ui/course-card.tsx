import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Users, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

interface CourseCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
  href: string;
  duration?: string;
  students?: string;
}

export function CourseCard({ title, category, description, image, href, duration, students }: CourseCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-background rounded-[3.5rem] overflow-hidden border border-border shadow-elegant flex flex-col h-full noise relative"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      
      {/* Image Wrapper */}
      <div className="relative h-72 overflow-hidden m-4 rounded-[2.5rem]">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className="px-4 py-1.5 rounded-full bg-white/90 backdrop-blur-md text-primary text-[10px] font-sans font-black tracking-widest uppercase">
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-10 flex-1 flex flex-col">
        <h3 className="text-3xl font-serif font-black mb-4 group-hover:text-primary transition-colors leading-[1.1] tracking-tight">
          {title}
        </h3>
        <p className="text-foreground/60 text-base leading-relaxed mb-8 flex-1">
          {description}
        </p>

        {/* Stats */}
        <div className="flex items-center gap-6 mb-10 py-6 border-y border-primary/10">
          <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
            <BookOpen size={16} />
            Study Mode
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
          <div className="flex items-center gap-2 text-primary font-black text-[10px] uppercase tracking-widest">
            <GraduationCap size={16} />
            Expert Faculty
          </div>
        </div>

        {/* Action */}
        <Link to={href} className="w-full">
          <Button className="w-full rounded-[1.5rem] h-16 font-black text-lg flex items-center justify-center gap-3 group-hover:shadow-glow transition-all">
            Explore Program
            <ArrowRight size={22} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
