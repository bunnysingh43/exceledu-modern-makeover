import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Clock, Users } from 'lucide-react';
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
      className="group bg-background rounded-[2rem] overflow-hidden border border-border shadow-elegant flex flex-col h-full"
    >
      {/* Image Wrapper */}
      <div className="relative h-64 overflow-hidden">
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
      <div className="p-8 flex-1 flex flex-col">
        <h3 className="text-2xl font-serif font-black mb-4 group-hover:text-primary transition-colors leading-tight">
          {title}
        </h3>
        <p className="text-foreground/60 text-sm leading-relaxed mb-8 flex-1">
          {description}
        </p>

        {/* Stats */}
        {(duration || students) && (
          <div className="flex items-center gap-6 mb-8 py-4 border-y border-border">
            {duration && (
              <div className="flex items-center gap-2 text-foreground/40 text-xs font-bold uppercase tracking-wider">
                <Clock size={14} className="text-primary" />
                {duration}
              </div>
            )}
            {students && (
              <div className="flex items-center gap-2 text-foreground/40 text-xs font-bold uppercase tracking-wider">
                <Users size={14} className="text-primary" />
                {students}
              </div>
            )}
          </div>
        )}

        {/* Action */}
        <Link to={href} className="w-full">
          <Button className="w-full rounded-2xl h-14 font-bold flex items-center justify-between px-8 group-hover:shadow-glow transition-all">
            Explore Course
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </motion.div>
  );
}
