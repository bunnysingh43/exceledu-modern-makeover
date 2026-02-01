import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, Trophy, Star, Users, ArrowRight, Medal, Filter, Search } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const RANKERS = [
  { name: 'Aditya Jain', rank: 'AIR 1', year: '2024', course: 'CA Final', image: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Sneha Sharma', rank: 'AIR 5', year: '2024', course: 'CA Inter', image: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Rahul Verma', rank: 'AIR 12', year: '2023', course: 'CS Executive', image: 'https://i.pravatar.cc/150?u=3' },
  { name: 'Priya Gupta', rank: 'AIR 3', year: '2023', course: 'CMA Foundation', image: 'https://i.pravatar.cc/150?u=4' },
  { name: 'Amit Singh', rank: 'AIR 18', year: '2024', course: 'CA Foundation', image: 'https://i.pravatar.cc/150?u=5' },
  { name: 'Kriti Malhotra', rank: 'AIR 9', year: '2023', course: 'CA Inter', image: 'https://i.pravatar.cc/150?u=6' },
];

const YEARS = ['All', '2024', '2023', '2022'];

export default function Achievements() {
  const [activeYear, setActiveYear] = useState('All');
  
  const filteredRankers = activeYear === 'All' 
    ? RANKERS 
    : RANKERS.filter(r => r.year === activeYear);

  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="pt-40 pb-20 bg-secondary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
          <SectionHeader 
            light
            subtitle="Our Excellence"
            title="The Hall of Fame"
            description="Celebrating the remarkable achievements of our students who have consistently secured All India Ranks and redefined success."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { label: 'Total AIRs', value: '172+' },
              { label: 'State Toppers', value: '500+' },
              { label: 'Success Rate', value: '85%' },
              { label: 'Years Legacy', value: '17+' },
            ].map((stat, i) => (
              <div key={i} className="glass-dark p-6 rounded-2xl border-white/10">
                <div className="text-3xl font-serif font-black text-accent mb-1">{stat.value}</div>
                <div className="text-[10px] font-sans font-black tracking-widest text-white/40 uppercase">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Rankers Highlight */}
      <section className="section-padding overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            subtitle="Top Performers"
            title="Meet Our All India Rankers"
            description="Consistency is our middle name. Here are some of our brightest stars from the recent examination cycles."
          />
          
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {YEARS.map((year) => (
              <button
                key={year}
                onClick={() => setActiveYear(year)}
                className={cn(
                  "px-8 py-3 rounded-full text-xs font-black tracking-widest uppercase transition-all border-2",
                  activeYear === year 
                    ? "bg-primary border-primary text-white shadow-glow translate-y-[-2px]" 
                    : "bg-white border-border text-foreground/40 hover:border-primary/20"
                )}
              >
                {year === 'All' ? 'All Sessions' : `Session ${year}`}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredRankers.map((ranker, i) => (
                <motion.div
                  layout
                  key={ranker.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                  className="group relative"
                >
                  <div className="glass p-10 rounded-[4rem] shadow-elegant group-hover:shadow-glow transition-all flex flex-col items-center text-center relative overflow-hidden noise">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative mb-10">
                      <div className="w-40 h-40 rounded-full overflow-hidden border-8 border-white shadow-2xl relative z-10">
                        <img src={ranker.image} alt={ranker.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                      </div>
                      <motion.div 
                        animate={{ y: [0, -5, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-accent text-secondary px-6 py-2 rounded-full font-serif font-black shadow-xl z-20 whitespace-nowrap"
                      >
                        {ranker.rank}
                      </motion.div>
                    </div>
                    <h4 className="text-3xl font-serif font-black mb-2 group-hover:text-primary transition-colors">{ranker.name}</h4>
                    <div className="flex items-center gap-4 py-4 px-8 rounded-[2rem] bg-primary/5 text-[10px] font-sans font-black tracking-widest uppercase text-primary/60">
                      <span>{ranker.course}</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{ranker.year}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Awards & Honors */}
      <section className="section-padding bg-secondary/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative z-10 rounded-[3rem] overflow-hidden shadow-2xl"
              >
                <img 
                  src="https://www.exceledu.co.in/Content/home/images/Award/Award.jpeg" 
                  className="w-full h-full object-cover"
                  alt="Award Ceremony"
                />
              </motion.div>
              {/* Decorative Circle */}
              <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-accent/20 rounded-full blur-[80px]" />
            </div>

            <div className="space-y-8">
              <SectionHeader 
                centered={false}
                subtitle="Recognition"
                title="Awarded as Best Institute in Central India"
                description="Our commitment to excellence has been recognized by prestigious institutions and industry leaders across the nation."
              />
              <div className="grid gap-6">
                {[
                  { icon: <Trophy />, title: 'Excellence in Commerce Education', org: 'National Education Awards' },
                  { icon: <Medal />, title: 'Best Professional Training Hub', org: 'Educational Summit 2024' },
                  { icon: <Star />, title: 'Outstanding Success Record', org: 'State Educational Council' },
                ].map((award, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex gap-6 p-6 glass rounded-2xl border border-border group hover:bg-primary hover:text-white transition-all"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-white group-hover:text-primary transition-all">
                      {React.cloneElement(award.icon as React.ReactElement, { size: 28 })}
                    </div>
                    <div>
                      <h4 className="text-xl font-serif font-black mb-1 leading-tight">{award.title}</h4>
                      <p className="text-sm font-sans font-bold tracking-widest uppercase opacity-40">{award.org}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <SectionHeader 
            subtitle="Results"
            title="Consistently Exceptional Results"
            description="Our results speak louder than words. Year after year, Excel Educational Institute sets new benchmarks in commerce education."
          />
          <div className="relative rounded-[3rem] overflow-hidden group">
            <img 
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&q=80&w=2000" 
              alt="Celebration" 
              className="w-full h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-primary/60 backdrop-blur-sm flex items-center justify-center">
              <div className="max-w-2xl px-6">
                <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-white mx-auto mb-8 shadow-glow animate-bounce">
                  <Trophy size={48} />
                </div>
                <h3 className="text-4xl lg:text-6xl font-serif font-black text-white mb-8">Ready to be our next Success Story?</h3>
                <Button size="lg" className="rounded-full h-16 px-12 text-lg font-black shadow-glow bg-white text-primary hover:bg-white/90">
                  Join The Hall of Fame
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}