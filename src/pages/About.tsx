import React from 'react';
import { motion } from 'framer-motion';
import { Target, Eye, Award, Users, BookOpen, GraduationCap, ArrowRight, Star, History, Milestone } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';

const DIRECTORS = [
  {
    name: 'CA. B. L. Agrawal',
    role: 'Director & Co-Founder',
    image: 'https://www.exceledu.co.in/Content/home/images/TM-1.jpg',
    description: 'A visionary educationist with over two decades of experience in shaping professional careers.'
  },
  {
    name: 'CA. Praveen Golchha',
    role: 'Director & Co-Founder',
    image: 'https://www.exceledu.co.in/Content/home/images/TM-2.jpg',
    description: 'Expert in corporate taxation and accounting, dedicated to student success and academic excellence.'
  },
  {
    name: 'CA. Sanjay Kumar Goyal',
    role: 'Director & Co-Founder',
    image: 'https://www.exceledu.co.in/Content/home/images/TM-3.jpg',
    description: 'Strategic thinker and mentor, focusing on holistic development and professional ethics.'
  }
];

const TIMELINE = [
  { year: '2007', event: 'Founded with a single classroom and a vision for professional excellence.' },
  { year: '2012', event: 'Reached milestone of 5,000 successful students.' },
  { year: '2015', event: 'Inaugurated state-of-the-art Excel Bhawan campus.' },
  { year: '2018', event: 'Awarded Best Commerce Institute in Central India.' },
  { year: '2021', event: 'Launched hybrid learning model with live online classes.' },
  { year: '2024', event: 'Celebrated 172+ All India Rankers across CA, CS, and CMA.' },
];

const VALUES = [
  {
    title: 'Excellence',
    description: 'We strive for the highest standards in everything we do, from teaching to student support.',
    icon: <Award className="text-primary" />
  },
  {
    title: 'Integrity',
    description: 'Nurturing ethical values and professional honesty is at the core of our educational philosophy.',
    icon: <Target className="text-accent" />
  },
  {
    title: 'Innovation',
    description: 'Leveraging modern teaching methodologies and technology for meaningful learning.',
    icon: <BookOpen className="text-primary" />
  },
  {
    title: 'Empowerment',
    description: 'Transforming potential into performance and education into lifelong empowerment.',
    icon: <GraduationCap className="text-accent" />
  }
];

export default function About() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden bg-secondary">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-black tracking-[0.2em] uppercase mb-6">
                OUR STORY
              </span>
              <h1 className="text-6xl font-serif font-black mb-8 leading-tight text-white">
                Legacy of <span className="text-primary italic">Excellence</span> <br /> 
                <span className="text-accent">Empowering</span> Professionals.
              </h1>
              <p className="text-xl text-white/60 leading-relaxed max-w-lg">
                Founded in 2007, Excel Educational Institute has grown from a single classroom into Central India's premier educational network.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="relative"
            >
              <div className="aspect-[4/3] rounded-[3rem] overflow-hidden shadow-2xl">
                <img 
                  src="https://www.exceledu.co.in/Content/home/images/EXCEL%20BLD.jpg" 
                  alt="Excel Building" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-10 -left-10 glass p-8 rounded-[2rem] shadow-elegant max-w-xs">
                <div className="flex items-center gap-4 mb-2">
                  <Star className="text-accent" fill="currentColor" />
                  <span className="text-2xl font-serif font-black">17+ Years</span>
                </div>
                <p className="text-xs font-bold text-foreground/60 uppercase tracking-widest">Of Shaping Future Leaders</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <motion.div
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3rem] bg-primary/5 border border-primary/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center text-white mb-8">
                <Target size={32} />
              </div>
              <h3 className="text-3xl font-serif font-black mb-6">Our Mission</h3>
              <p className="text-lg text-foreground/60 leading-relaxed">
                To make learning meaningful, engaging, and empowering. We deliver quality education through modern and student-centered teaching, fostering a supportive environment that builds confidence and curiosity.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ y: -10 }}
              className="p-12 rounded-[3rem] bg-accent/5 border border-accent/10"
            >
              <div className="w-16 h-16 rounded-2xl bg-accent flex items-center justify-center text-white mb-8">
                <Eye size={32} />
              </div>
              <h3 className="text-3xl font-serif font-black mb-6">Our Vision</h3>
              <p className="text-lg text-foreground/60 leading-relaxed">
                To redefine professional education by nurturing intellectual excellence, personal growth, and ethical values — empowering every student to become a confident, competent, and compassionate professional.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Directors Section */}
      <section className="section-padding bg-secondary/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            subtitle="Leadership"
            title="Meet Our Visionary Directors"
            description="The driving force behind Excel's commitment to quality education and student success."
          />
          <div className="grid md:grid-cols-3 gap-8">
            {DIRECTORS.map((director, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group glass p-10 rounded-[3rem] shadow-elegant hover:shadow-glow transition-all noise"
              >
                <div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden mb-8 border-4 border-white shadow-xl relative">
                  <img 
                    src={director.image} 
                    alt={director.name} 
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <h4 className="text-3xl font-serif font-black mb-1 text-primary">{director.name}</h4>
                <div className="text-accent font-bold text-xs tracking-widest uppercase mb-6">{director.role}</div>
                <p className="text-foreground/60 text-base leading-relaxed">{director.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="section-padding bg-secondary relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            light
            subtitle="Our History"
            title="A Journey of Milestones"
            description="Since our inception, we have been committed to raising the bar of professional commerce education."
          />
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-white/10" />
              <div className="space-y-12">
                {TIMELINE.map((t, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="relative pl-20"
                  >
                    <div className="absolute left-[26px] top-0 w-3 h-3 rounded-full bg-accent shadow-accent" />
                    <div className="text-4xl font-serif font-black text-accent mb-2">{t.year}</div>
                    <p className="text-white/60 text-lg">{t.event}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-[4rem] overflow-hidden shadow-2xl noise">
                <img 
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1000" 
                  alt="Students Learning" 
                  className="w-full h-full object-cover opacity-80"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 glass p-10 rounded-[3rem] shadow-elegant max-w-xs">
                <div className="text-5xl font-serif font-black text-primary mb-2">17+</div>
                <div className="text-sm font-bold uppercase tracking-[0.2em] text-foreground/40 leading-none">Years of Legacy</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            subtitle="Our Values"
            title="The Principles That Guide Us"
            description="We believe in more than just academic success; we believe in building character and professional ethics."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {VALUES.map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] border border-border hover:border-primary/20 hover:bg-primary/5 transition-all group"
              >
                <div className="mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-transform">
                  {React.cloneElement(value.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-xl font-serif font-black mb-4">{value.title}</h4>
                <p className="text-foreground/60 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Numbers Section */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-serif font-black mb-8 leading-tight">
                Our Journey in <span className="text-accent">Numbers</span>.
              </h2>
              <div className="grid grid-cols-2 gap-8">
                {[
                  { label: 'Successful Students', value: '17,000+' },
                  { label: 'All India Rankers', value: '172+' },
                  { label: 'Elite Faculty Members', value: '15+' },
                  { label: 'Success Story Archives', value: '16,500+' },
                ].map((stat, i) => (
                  <div key={i} className="space-y-1">
                    <div className="text-4xl font-serif font-black text-accent">{stat.value}</div>
                    <div className="text-[10px] font-sans font-black tracking-widest uppercase text-white/40">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-dark p-12 rounded-[3rem] border-white/10">
              <h3 className="text-3xl font-serif font-black mb-6">Transforming Lives</h3>
              <p className="text-white/60 text-lg leading-relaxed mb-8 italic">
                "From a single classroom to a powerful educational network, our mission remains the same: to transform potential into performance and education into empowerment."
              </p>
              <Button size="lg" className="rounded-full h-16 px-10 text-lg font-bold shadow-2xl group bg-white text-primary hover:bg-white/90">
                Join Our Legacy
                <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}