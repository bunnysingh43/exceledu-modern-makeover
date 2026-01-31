import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Search, ImageIcon, Video, Camera, Compass } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

const CATEGORIES = ['All', 'Campus', 'Events', 'Classrooms', 'Awards'];

const GALLERY_IMAGES = [
  { id: 1, category: 'Campus', image: 'https://www.exceledu.co.in/Content/home/images/EXCEL%20BLD.jpg', title: 'Main Campus Building' },
  { id: 2, category: 'Classrooms', image: 'https://images.unsplash.com/photo-1758270704384-9df36d94a29d?auto=format&fit=crop&q=80', title: 'Interactive Lecture Hall' },
  { id: 3, category: 'Events', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80', title: 'Annual Success Celebration' },
  { id: 4, category: 'Campus', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80', title: 'Student Lounge' },
  { id: 5, category: 'Awards', image: 'https://www.exceledu.co.in/Content/home/images/Award/Award.jpeg', title: 'Best Institute Award 2024' },
  { id: 6, category: 'Classrooms', image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80', title: 'Modern Library' },
  { id: 7, category: 'Events', image: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&q=80', title: 'Guest Lecture Session' },
  { id: 8, category: 'Campus', image: 'https://images.unsplash.com/photo-1492538368677-f6e0afe31dcc?auto=format&fit=crop&q=80', title: 'Cafeteria Area' },
  { id: 9, category: 'Classrooms', image: 'https://images.unsplash.com/photo-1524178232457-3bb244994843?auto=format&fit=crop&q=80', title: 'Doubt Clearing Cell' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<typeof GALLERY_IMAGES[0] | null>(null);

  const filteredImages = activeCategory === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === activeCategory);

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-40 pb-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            subtitle="Campus Life"
            title="Life at the Center of Excellence"
            description="Explore our state-of-the-art facilities and catch a glimpse of the vibrant student life at Excel Educational Institute."
          />
          
          {/* Categories Filter */}
          <div className="flex flex-wrap justify-center gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase transition-all ${
                  activeCategory === cat 
                    ? 'bg-primary text-white shadow-glow translate-y-[-2px]' 
                    : 'bg-white border border-border text-foreground/60 hover:border-primary/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Masonry Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-8 space-y-8">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((item) => (
                <motion.div
                  layout
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -5 }}
                  className="relative group rounded-[2.5rem] overflow-hidden cursor-pointer shadow-elegant break-inside-avoid"
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col items-center justify-center p-8 text-center backdrop-blur-sm">
                    <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center text-white mb-6 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                      <Search size={32} />
                    </div>
                    <span className="text-[10px] font-sans font-black tracking-widest text-accent uppercase mb-2">
                      {item.category}
                    </span>
                    <h4 className="text-2xl font-serif font-black text-white leading-tight">
                      {item.title}
                    </h4>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-2xl flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button 
              className="absolute top-10 right-10 w-16 h-16 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X size={32} />
            </button>

            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-6xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="w-full h-auto max-h-[70vh] object-contain rounded-[3rem] shadow-2xl mb-10"
              />
              <div className="text-center">
                <span className="text-accent font-black tracking-widest text-xs uppercase mb-2 block">
                  {selectedImage.category}
                </span>
                <h3 className="text-4xl lg:text-5xl font-serif font-black text-white">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Campus Features */}
      <section className="section-padding bg-secondary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {[
              { icon: <Camera />, title: 'Modern Infrastructure', text: 'State-of-the-art facilities designed for comfort and focus.' },
              { icon: <Video />, title: 'Tech-Enabled', text: 'Hybrid learning capabilities with high-end audio/video equipment.' },
              { icon: <Compass />, title: 'Strategic Location', text: 'Conveniently located in the heart of the city for easy access.' },
              { icon: <ImageIcon />, title: 'Creative Spaces', text: 'Collaborative areas for students to discuss and innovate.' },
            ].map((feature, i) => (
              <div key={i} className="space-y-6 text-center lg:text-left">
                <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-accent mx-auto lg:mx-0">
                  {React.cloneElement(feature.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-2xl font-serif font-black">{feature.title}</h4>
                <p className="text-white/40 text-sm leading-relaxed">{feature.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
