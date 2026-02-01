import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, MessageSquare, ChevronDown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { cn } from '@/lib/utils';

const CONTACT_INFO = [
  {
    icon: <MapPin />,
    title: 'Our Campus',
    value: 'Excel Bhawan, Shanti Nagar, Raipur (C.G.)',
    href: 'https://maps.google.com'
  },
  {
    icon: <Phone />,
    title: 'Call Us',
    value: '+91 99268 21000',
    href: 'tel:+919926821000'
  },
  {
    icon: <Mail />,
    title: 'Email Us',
    value: 'eeiraipur@gmail.com',
    href: 'mailto:eeiraipur@gmail.com'
  },
  {
    icon: <Clock />,
    title: 'Working Hours',
    value: 'Mon - Sat: 9:00 AM - 7:00 PM',
    href: '#'
  }
];

const FAQS = [
  {
    q: 'What is the eligibility for admission to CA courses?',
    a: 'Students who have cleared Class 12th from any recognized board are eligible for CA Foundation. Graduates have different entry requirements.'
  },
  {
    q: 'Do you offer both online and offline classes?',
    a: 'Yes, we provide both interactive face-to-face classroom coaching and live/recorded online sessions for all our courses.'
  },
  {
    q: 'How can I register for a demo class?',
    a: 'You can register for a demo class by filling out the enquiry form on our website or by visiting our campus directly.'
  },
  {
    q: 'Do you provide study material?',
    a: 'Absolutely. We provide exhaustive, colored, and updated study material designed specifically for professional exam patterns.'
  }
];

export default function Contact() {
  const [formState, setFormState] = useState({ name: '', email: '', phone: '', subject: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success('Message sent successfully! We will get back to you soon.');
      setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    }, 1500);
  };

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-40 pb-20 bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeader 
            subtitle="Contact Us"
            title="Let's Start a Conversation"
            description="Have questions about our courses or admission process? Our team is here to guide you every step of the way."
          />
        </div>
      </section>

      {/* Info Cards */}
      <section className="section-padding pt-0">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {CONTACT_INFO.map((info, i) => (
              <motion.a
                key={i}
                href={info.href}
                target={info.href.startsWith('http') ? '_blank' : undefined}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass p-8 rounded-[2.5rem] shadow-elegant hover:shadow-glow hover:-translate-y-2 transition-all group flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-all">
                  {React.cloneElement(info.icon as React.ReactElement, { size: 32 })}
                </div>
                <h4 className="text-xl font-serif font-black mb-2">{info.title}</h4>
                <p className="text-sm text-foreground/60 leading-relaxed font-medium">{info.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Form & Map Section */}
      <section className="section-padding bg-secondary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-stretch">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-background rounded-[4rem] p-12 lg:p-20 shadow-elegant border border-border relative overflow-hidden noise"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10">
                <h3 className="text-5xl font-serif font-black mb-12">Send Us a Message</h3>
                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black tracking-[0.2em] uppercase text-primary ml-6">Full Name</label>
                      <Input 
                        required
                        placeholder="John Doe"
                        value={formState.name}
                        onChange={(e) => setFormState({...formState, name: e.target.value})}
                        className="rounded-3xl h-16 bg-secondary/30 border-none focus-visible:ring-primary px-8 font-bold text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black tracking-[0.2em] uppercase text-primary ml-6">Email Address</label>
                      <Input 
                        required
                        type="email"
                        placeholder="john@example.com"
                        value={formState.email}
                        onChange={(e) => setFormState({...formState, email: e.target.value})}
                        className="rounded-3xl h-16 bg-secondary/30 border-none focus-visible:ring-primary px-8 font-bold text-lg"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black tracking-[0.2em] uppercase text-primary ml-6">Phone Number</label>
                      <Input 
                        required
                        placeholder="+91 98765 43210"
                        value={formState.phone}
                        onChange={(e) => setFormState({...formState, phone: e.target.value})}
                        className="rounded-3xl h-16 bg-secondary/30 border-none focus-visible:ring-primary px-8 font-bold text-lg"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black tracking-[0.2em] uppercase text-primary ml-6">Subject</label>
                      <Input 
                        required
                        placeholder="Admission Enquiry"
                        value={formState.subject}
                        onChange={(e) => setFormState({...formState, subject: e.target.value})}
                        className="rounded-3xl h-16 bg-secondary/30 border-none focus-visible:ring-primary px-8 font-bold text-lg"
                      />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black tracking-[0.2em] uppercase text-primary ml-6">Message</label>
                    <Textarea 
                      required
                      placeholder="Tell us how we can help..."
                      value={formState.message}
                      onChange={(e) => setFormState({...formState, message: e.target.value})}
                      className="rounded-[2.5rem] min-h-[200px] bg-secondary/30 border-none focus-visible:ring-primary p-8 font-bold text-lg"
                    />
                  </div>
                  <Button 
                    disabled={loading}
                    className="w-full rounded-[2rem] h-20 text-xl font-black shadow-glow group"
                  >
                    {loading ? 'Sending...' : 'Send Message'}
                    {!loading && <Send size={24} className="ml-3 group-hover:translate-x-1 transition-transform" />}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Map & Visual */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col gap-8"
            >
              <div className="rounded-[3rem] overflow-hidden shadow-2xl flex-1 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&q=80&w=1500" 
                  alt="Location" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 backdrop-blur-[2px] flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-primary mx-auto mb-6 shadow-2xl animate-bounce">
                      <MapPin size={40} />
                    </div>
                    <h4 className="text-3xl font-serif font-black text-white mb-2">Find Us in Raipur</h4>
                    <p className="text-white/80 font-medium">Excel Bhawan, Shanti Nagar, Raipur</p>
                  </div>
                </div>
              </div>
              
              <div className="p-10 glass rounded-[3rem] border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <MessageSquare className="text-primary" />
                  <h4 className="text-2xl font-serif font-black">Direct Assistance</h4>
                </div>
                <p className="text-foreground/60 mb-8 leading-relaxed">
                  Need immediate help? Connect with our counselors directly via WhatsApp or Phone.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <Button variant="outline" className="rounded-2xl h-14 font-bold border-2">WhatsApp</Button>
                  <Button className="rounded-2xl h-14 font-bold">Call Counselors</Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto px-6">
          <SectionHeader 
            subtitle="Support"
            title="Common Questions"
            description="Find quick answers to some of the most frequently asked questions about our institute and courses."
          />
          <div className="space-y-4">
            {FAQS.map((faq, i) => (
              <div 
                key={i} 
                className={cn(
                  "rounded-3xl border transition-all overflow-hidden",
                  activeFaq === i ? "border-primary bg-primary/5 shadow-elegant" : "border-border bg-white"
                )}
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full p-8 flex items-center justify-between text-left"
                >
                  <span className="text-xl font-serif font-black leading-tight">{faq.q}</span>
                  <ChevronDown className={cn("text-primary transition-transform duration-300", activeFaq === i && "rotate-180")} />
                </button>
                {activeFaq === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    className="px-8 pb-8"
                  >
                    <p className="text-foreground/60 leading-relaxed font-medium pt-4 border-t border-primary/10">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
