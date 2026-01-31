import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { CheckCircle2, ArrowRight, BookOpen, Clock, Users, GraduationCap, Award } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { CourseCard } from '@/components/ui/course-card';
import { cn } from '@/lib/utils';

const ALL_COURSES = [
  {
    id: 'ca',
    title: 'Chartered Accountancy (CA)',
    category: 'Professional',
    description: 'The most prestigious certification in accountancy. We provide end-to-end coaching from Foundation to Final.',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
    levels: ['CA Foundation', 'CA Intermediate', 'CA Final'],
    highlights: ['Expert CA Faculties', 'Updated ICAI Pattern Material', 'Intensive Test Series']
  },
  {
    id: 'cs',
    title: 'Company Secretary (CS)',
    category: 'Corporate Law',
    description: 'Become a key governance professional. Specialized coaching for ICSI exams with focus on law and management.',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80',
    levels: ['CSEET', 'CS Executive', 'CS Professional'],
    highlights: ['Law Focused Methodology', 'Case Study Training', 'Regular Mock Exams']
  },
  {
    id: 'cma',
    title: 'Cost Management (CMA)',
    category: 'Costing',
    description: 'Expertise in strategic management and cost accounting. Focused preparation for ICMAI certifications.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    levels: ['CMA Foundation', 'CMA Intermediate', 'CMA Final'],
    highlights: ['Strategic Costing Insights', 'Practical Problem Solving', 'Timely Syllabus Completion']
  },
  {
    id: 'school',
    title: 'Class XI & XII (Commerce)',
    category: 'School',
    description: 'Build a strong foundation for your professional career right from school. Holistic commerce education.',
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80',
    levels: ['Accounts', 'Economics', 'Business Studies', 'English'],
    highlights: ['Conceptual Clarity', 'Board Exam Preparation', 'Career Counseling']
  }
];

export default function Courses() {
  const { type } = useParams();
  const activeCourse = type ? ALL_COURSES.find(c => c.id === type) : null;

  if (activeCourse) {
    return (
      <div className="flex flex-col">
        {/* Course Detail Hero */}
        <section className="relative pt-40 pb-24 overflow-hidden bg-primary text-white">
          <div className="absolute inset-0 z-0">
            <img 
              src={activeCourse.image} 
              className="w-full h-full object-cover opacity-20"
              alt={activeCourse.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
          </div>
          
          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <Link to="/courses" className="inline-flex items-center gap-2 text-accent font-black tracking-widest text-[10px] uppercase mb-8 hover:translate-x-1 transition-transform">
                <ArrowRight size={14} className="rotate-180" />
                Back to All Courses
              </Link>
              <h1 className="text-6xl font-serif font-black mb-8 leading-[0.9] tracking-tighter">
                {activeCourse.title}
              </h1>
              <p className="text-xl text-white/60 leading-relaxed mb-10">
                {activeCourse.description}
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-white text-primary hover:bg-white/90 rounded-full h-16 px-10 text-lg font-bold shadow-2xl">
                  Enroll Now
                </Button>
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 rounded-full h-16 px-10 text-lg font-bold">
                  Download Brochure
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Levels & Highlights */}
        <section className="section-padding">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-20">
              {/* Course Levels */}
              <div>
                <h3 className="text-4xl font-serif font-black mb-10">Course Structure</h3>
                <div className="space-y-4">
                  {activeCourse.levels.map((level, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-8 glass rounded-[2rem] border border-border flex items-center justify-between group hover:bg-primary/5 hover:border-primary/20 transition-all"
                    >
                      <div className="flex items-center gap-6">
                        <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary font-serif font-black">
                          0{i + 1}
                        </div>
                        <span className="text-xl font-bold">{level}</span>
                      </div>
                      <ArrowRight className="text-primary opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Course Highlights */}
              <div>
                <h3 className="text-4xl font-serif font-black mb-10">Key Highlights</h3>
                <div className="grid gap-6">
                  {activeCourse.highlights.map((item, i) => (
                    <div key={i} className="flex gap-4 group">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 group-hover:bg-accent group-hover:text-white transition-all">
                        <CheckCircle2 size={20} />
                      </div>
                      <div>
                        <h4 className="text-xl font-serif font-black mb-1">{item}</h4>
                        <p className="text-sm text-foreground/60 leading-relaxed">
                          Expertly crafted learning path designed to ensure maximum retention and understanding of complex topics.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="section-padding bg-secondary text-white text-center">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-4xl lg:text-5xl font-serif font-black mb-8">Ready to Elevate Your Professional Career?</h2>
            <p className="text-xl text-white/60 mb-12">Join Excel Educational Institute and experience the center of excellence.</p>
            <Button size="lg" className="rounded-full h-16 px-12 text-lg font-black shadow-glow">
              Register for Next Batch
            </Button>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-40 pb-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            subtitle="Academic Excellence"
            title="Our Professional Programs"
            description="Explore our specialized coaching programs designed for the modern commerce professional. We provide end-to-end guidance for CA, CS, CMA, and high school commerce."
          />
        </div>
      </section>

      {/* Course Grid */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-8">
            {ALL_COURSES.map((course, i) => (
              <CourseCard 
                key={i}
                title={course.title}
                category={course.category}
                description={course.description}
                image={course.image}
                href={`/courses/${course.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="section-padding bg-secondary text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12 text-center">
            {[
              { icon: <BookOpen />, title: 'Modern Material', text: 'Exhaustive colored study material updated as per latest exam patterns.' },
              { icon: <Clock />, title: 'Timely Completion', text: 'Rigorous schedule ensuring syllabus completion well before exams.' },
              { icon: <Users />, title: 'Expert Faculty', text: 'Learn from industry professionals and experienced academicians.' },
            ].map((f, i) => (
              <div key={i} className="space-y-4">
                <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto text-white shadow-glow">
                  {React.cloneElement(f.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-2xl font-serif font-black">{f.title}</h4>
                <p className="text-white/60 leading-relaxed text-sm">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
