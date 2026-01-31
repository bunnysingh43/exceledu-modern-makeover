import React from 'react';
import { motion } from 'framer-motion';
import { Award, Trophy, Star, Users, ArrowRight, Medal } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

const RANKERS = [
  { name: 'Aditya Jain', rank: 'AIR 1', year: '2024', course: 'CA Final', image: 'https://i.pravatar.cc/150?u=1' },
  { name: 'Sneha Sharma', rank: 'AIR 5', year: '2024', course: 'CA Inter', image: 'https://i.pravatar.cc/150?u=2' },
  { name: 'Rahul Verma', rank: 'AIR 12', year: '2023', course: 'CS Executive', image: 'https://i.pravatar.cc/150?u=3' },
  { name: 'Priya Gupta', rank: 'AIR 3', year: '2023', course: 'CMA Foundation', image: 'https://i.pravatar.cc/150?u=4' },
  { name: 'Amit Singh', rank: 'AIR 18', year: '2024', course: 'CA Foundation', image: 'https://i.pravatar.cc/150?u=5' },
  { name: 'Kriti Malhotra', rank: 'AIR 9', year: '2023', course: 'CA Inter', image: 'https://i.pravatar.cc/150?u=6' },
];

export default function Achievements() {
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
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            subtitle="Top Performers"
            title="Meet Our All India Rankers"
            description="Consistency is our middle name. Here are some of our brightest stars from the recent examination cycles."
          />
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
            {RANKERS.map((ranker, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative"
              >
                <div className="glass p-6 rounded-[2.5rem] shadow-elegant group-hover:shadow-glow transition-all flex flex-col items-center text-center">
                  <div className="relative mb-6">
                    <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-white shadow-lg relative z-10">
                      <img src={ranker.image} alt={ranker.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-accent rounded-full flex items-center justify-center text-white font-serif font-black shadow-lg z-20">
                      {ranker.rank.split(' ')[1]}
                    </div>
                  </div>
                  <h4 className="text-2xl font-serif font-black mb-1 group-hover:text-primary transition-colors">{ranker.name}</h4>
                  <div className="text-primary font-black text-xl mb-4 italic tracking-tighter">{ranker.rank}</div>
                  <div className="flex items-center gap-4 py-3 px-6 rounded-full bg-primary/5 text-[10px] font-sans font-black tracking-widest uppercase text-foreground/40">
                    <span>{ranker.course}</span>
                    <span className="w-1 h-1 rounded-full bg-primary" />
                    <span>Session {ranker.year}</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
