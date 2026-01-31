import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, CheckCircle2, Award, Users, BookOpen, Laptop, Radio, Monitor, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { SectionHeader } from '@/components/ui/section-header';
import { CourseCard } from '@/components/ui/course-card';

const STATS = [
  { label: 'Years of Excellence', value: '17+', icon: <Star className="text-accent" /> },
  { label: 'Successful Students', value: '17,000+', icon: <Users className="text-primary" /> },
  { label: 'All India Rankers', value: '172+', icon: <Award className="text-accent" /> },
  { label: 'Expert Faculty', value: '15+', icon: <GraduationCap className="text-primary" /> },
];

const COURSES = [
  {
    title: 'Chartered Accountancy (CA)',
    category: 'Finance',
    description: 'Comprehensive coaching for Foundation, Intermediate, and Final levels with expert guidance.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
    href: '/courses/ca'
  },
  {
    title: 'Company Secretary (CS)',
    category: 'Legal',
    description: 'Specialized preparation for EET and Executive levels focusing on corporate laws.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
    href: '/courses/cs'
  },
  {
    title: 'Cost Management (CMA)',
    category: 'Management',
    description: 'Strategic coaching for Foundation and Intermediate levels in cost accounting.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    href: '/courses/cma'
  },
];

const MODES = [
  {
    title: 'Face to Face',
    description: 'Experience interactive learning in a classroom environment with direct guidance.',
    icon: <Users size={32} />,
    color: 'bg-primary'
  },
  {
    title: 'Live Online',
    description: 'Attend classes in real-time from anywhere, with the same interactive experience.',
    icon: <Radio size={32} />,
    color: 'bg-accent'
  },
  {
    title: 'Recorded',
    description: 'Revisit any lecture anytime - perfect for flexible learning and revision.',
    icon: <Laptop size={32} />,
    color: 'bg-secondary'
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1758270704384-9df36d94a29d?auto=format&fit=crop&q=80&w=2000" 
            className="w-full h-full object-cover"
            alt="Hero Background"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        </div>

        <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[10px] font-sans font-black tracking-[0.2em] uppercase mb-6">
                ESTABLISHED 2007
              </span>
              <h1 className="text-6xl lg:text-8xl font-serif font-black mb-8 leading-[0.9] tracking-tighter">
                Transform <span className="text-primary italic">Potential</span> Into <span className="text-accent underline decoration-4 underline-offset-8">Performance</span>.
              </h1>
              <p className="text-xl text-foreground/60 leading-relaxed mb-10 max-w-lg">
                The premier hub for professional commerce education in Central India. Join 17,000+ successful students on their journey to excellence.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full h-16 px-10 text-lg font-bold shadow-glow group">
                  Explore Courses
                  <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full h-16 px-10 text-lg font-bold border-2">
                  Meet Faculty
                </Button>
              </div>
            </motion.div>

            {/* Floating Glass Cards */}
            <div className="relative hidden lg:block h-[600px]">
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-0 w-64 glass p-6 rounded-3xl shadow-elegant z-20"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center text-primary">
                    <Award size={24} />
                  </div>
                  <div>
                    <div className="text-2xl font-serif font-black">172+</div>
                    <div className="text-[10px] font-sans font-bold tracking-widest uppercase text-foreground/60">AIR Holders</div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 20, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute bottom-20 left-10 w-72 glass-dark p-8 rounded-[2.5rem] shadow-elegant z-20 text-white"
              >
                <div className="text-4xl font-serif font-black mb-2 text-accent">17,000+</div>
                <div className="text-sm font-medium text-white/60 mb-6">Successful students have trusted Excel for their professional careers.</div>
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-secondary bg-muted overflow-hidden">
                      <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="avatar" />
                    </div>
                  ))}
                  <div className="w-10 h-10 rounded-full border-2 border-secondary bg-primary flex items-center justify-center text-[10px] font-bold">
                    +17K
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bento Grid */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {STATS.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-10 rounded-[2.5rem] flex flex-col items-center justify-center text-center group hover:shadow-glow transition-all"
              >
                <div className="mb-6 transform group-hover:scale-110 transition-transform">
                  {React.cloneElement(stat.icon as React.ReactElement, { size: 40 })}
                </div>
                <div className="text-5xl font-serif font-black mb-2 tracking-tighter text-primary">{stat.value}</div>
                <div className="text-xs font-sans font-black tracking-widest uppercase text-foreground/40">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section className="section-padding relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            subtitle="Our Expertise"
            title="Elite Courses for Future Professionals"
            description="We offer specialized coaching for premier professional certifications, ensuring a solid foundation for your career."
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {COURSES.map((course, i) => (
              <CourseCard key={i} {...course} />
            ))}
          </div>
        </div>
      </section>

      {/* Modes of Learning */}
      <section className="section-padding bg-secondary relative overflow-hidden text-white">
        <div className="absolute inset-0 bg-primary/10 mix-blend-overlay opacity-20" />
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <SectionHeader 
            light
            subtitle="Learning Modes"
            title="Education That Fits Your Lifestyle"
            description="Choose the mode that best suits your needs, from immersive physical classrooms to flexible recorded sessions."
          />
          <div className="grid lg:grid-cols-3 gap-8">
            {MODES.map((mode, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group p-10 rounded-[3rem] border border-white/10 hover:bg-white/5 transition-all"
              >
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mb-8 transform group-hover:rotate-12 transition-transform", mode.color)}>
                  {mode.icon}
                </div>
                <h3 className="text-2xl font-serif font-black mb-4">{mode.title}</h3>
                <p className="text-white/60 leading-relaxed text-sm">{mode.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Excel Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative rounded-[3rem] overflow-hidden shadow-2xl aspect-[4/5]"
              >
                <img 
                  src="https://images.unsplash.com/photo-1758270704080-e3556e6794a7?auto=format&fit=crop&q=80&w=1000" 
                  alt="Classroom" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                <div className="absolute bottom-10 left-10 right-10 p-10 glass-dark rounded-[2rem] text-white">
                  <div className="text-3xl font-serif font-black mb-2 italic">"Action is the great aim of education."</div>
                  <div className="text-accent font-bold tracking-widest text-[10px] uppercase">— TEAM EXCEL</div>
                </div>
              </motion.div>
              {/* Floating accent elements */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-accent rounded-full blur-3xl opacity-20" />
              <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-primary rounded-full blur-3xl opacity-20" />
            </div>

            <div>
              <SectionHeader 
                centered={false}
                subtitle="Why Choose Us"
                title="The Excel Advantage"
                description="We don't just teach subjects; we build careers through a holistic approach to professional education."
              />
              <div className="grid gap-6">
                {[
                  'Highly Experienced Expert Faculties',
                  'Exhaustive Colored Study Material',
                  'Multiple Revision Cycles',
                  'Weekly & Model Test Series',
                  '100% Doubt Clearance Guarantee',
                  'Progress Tracking for Parents'
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/5 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <CheckCircle2 size={20} />
                    </div>
                    <span className="text-lg font-bold text-foreground/80">{item}</span>
                  </motion.div>
                ))}
              </div>
              <Button size="lg" className="mt-12 rounded-full h-16 px-10 text-lg font-bold shadow-glow">
                Learn More About Us
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-white/5 rounded-full blur-[150px] translate-x-1/3 -translate-y-1/3" />
        <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl lg:text-7xl font-serif font-black text-white mb-8 leading-tight"
          >
            Ready to Start Your <br /> <span className="text-accent italic">Excellence</span> Journey?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-white/60 mb-12"
          >
            Take the first step towards a successful professional career with Central India's leading institute.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full h-16 px-12 text-lg font-black shadow-2xl">
              Apply For Admission
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full h-16 px-12 text-lg font-black">
              Request a Callback
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
