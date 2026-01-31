import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Instagram, Youtube, Send, Phone, Mail, MapPin, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-10 overflow-hidden relative">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white">
                <GraduationCap size={24} />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-serif font-black tracking-tight leading-none text-white">EXCEL</span>
                <span className="text-[10px] font-sans font-bold tracking-[0.2em] text-white/60 uppercase">Educational Institute</span>
              </div>
            </Link>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed max-w-xs">
              Redefining professional education by nurturing intellectual excellence, personal growth, and ethical values since 2007.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Instagram, Youtube, Send].map((Icon, i) => (
                <a 
                  key={i} 
                  href="#" 
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center transition-all hover:bg-primary hover:border-primary hover:-translate-y-1"
                >
                  <Icon size={18} className="text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Courses', 'Achievements', 'Gallery', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={`/${item.toLowerCase().replace(' ', '')}`} 
                    className="text-secondary-foreground/60 hover:text-primary transition-colors text-sm font-medium flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary scale-0 group-hover:scale-100 transition-transform" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-serif text-lg font-bold mb-6 text-white">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex gap-3">
                <MapPin className="text-primary shrink-0" size={18} />
                <span className="text-secondary-foreground/60 text-sm leading-relaxed">
                  Excel Bhawan, Near Shriram Convent School, Shanti Nagar, Raipur (C.G.)
                </span>
              </li>
              <li className="flex gap-3 items-center">
                <Phone className="text-primary shrink-0" size={18} />
                <a href="tel:+919926821000" className="text-secondary-foreground/60 hover:text-white transition-colors text-sm font-medium">
                  +91 99268 21000
                </a>
              </li>
              <li className="flex gap-3 items-center">
                <Mail className="text-primary shrink-0" size={18} />
                <a href="mailto:eeiraipur@gmail.com" className="text-secondary-foreground/60 hover:text-white transition-colors text-sm font-medium">
                  eeiraipur@gmail.com
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h4 className="font-serif text-lg font-bold text-white">Stay Updated</h4>
            <p className="text-secondary-foreground/60 text-sm leading-relaxed">
              Subscribe to our newsletter for the latest updates and educational insights.
            </p>
            <div className="flex gap-2">
              <Input 
                placeholder="Email address" 
                className="bg-white/5 border-white/10 text-white rounded-xl placeholder:text-white/30 focus-visible:ring-primary"
              />
              <Button className="rounded-xl px-4 shadow-glow">
                <Send size={18} />
              </Button>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-sans font-bold tracking-widest text-white/40 uppercase">
          <p>© 2026 EXCEL EDUCATIONAL INSTITUTE. ALL RIGHTS RESERVED.</p>
          <div className="flex items-center gap-8">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
