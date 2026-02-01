import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, ChevronDown, Phone, Mail, GraduationCap } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Courses', 
    href: '/courses',
    dropdown: [
      { name: 'Chartered Accountancy', href: '/courses/ca' },
      { name: 'Company Secretary', href: '/courses/cs' },
      { name: 'Cost Management', href: '/courses/cma' },
      { name: 'Class XI & XII', href: '/courses/school' },
    ]
  },
  { name: 'Achievements', href: '/achievements' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
  }, [location]);

  return (
    <nav 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled ? "py-4" : "py-6"
      )}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className={cn(
          "glass rounded-[2rem] px-8 py-4 flex items-center justify-between transition-all duration-500 shadow-elegant",
          isScrolled ? "bg-background/90" : "bg-background/60"
        )}>
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center text-white transition-transform group-hover:rotate-12 shadow-glow">
              <GraduationCap size={28} />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-serif font-black tracking-tight leading-none text-primary">EXCEL</span>
              <span className="text-[10px] font-sans font-black tracking-[0.3em] text-foreground/40 uppercase">Educational Institute</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.name}
                className="relative"
                onMouseEnter={() => setActiveDropdown(link.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  to={link.href}
                  className={cn(
                    "flex items-center gap-1.5 text-[13px] font-black tracking-widest uppercase transition-all hover:text-primary",
                    location.pathname === link.href ? "text-primary" : "text-foreground/80"
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={14} className={cn("transition-transform", activeDropdown === link.name && "rotate-180")} />}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-1/2 -translate-x-1/2 pt-6 w-64"
                      >
                        <div className="bg-background/95 backdrop-blur-3xl border border-border rounded-[2.5rem] shadow-2xl p-3 overflow-hidden noise">
                          {link.dropdown.map((sub) => (
                            <Link
                              key={sub.name}
                              to={sub.href}
                              className="block px-6 py-4 text-sm font-bold rounded-2xl hover:bg-primary hover:text-white transition-all hover:translate-x-1"
                            >
                              {sub.name}
                            </Link>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </div>

          {/* Action Button */}
          <div className="hidden lg:flex items-center gap-6">
            <Button variant="ghost" className="rounded-full font-black text-xs uppercase tracking-widest px-8">
              Enquiry
            </Button>
            <Button className="rounded-full font-black text-xs uppercase tracking-widest px-10 shadow-glow h-12">
              Admission
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button 
            className="lg:hidden w-10 h-10 flex items-center justify-center text-foreground"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background/95 backdrop-blur-2xl border-b border-border"
          >
            <div className="p-6 space-y-4">
              {NAV_LINKS.map((link) => (
                <div key={link.name} className="space-y-2">
                  <Link
                    to={link.href}
                    className="block text-xl font-serif font-bold hover:text-primary"
                  >
                    {link.name}
                  </Link>
                  {link.dropdown && (
                    <div className="pl-4 space-y-2 border-l border-primary/20">
                      {link.dropdown.map((sub) => (
                        <Link
                          key={sub.name}
                          to={sub.href}
                          className="block text-sm font-medium text-foreground/60 hover:text-primary"
                        >
                          {sub.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-6 grid grid-cols-2 gap-4">
                <Button variant="outline" className="rounded-xl font-bold">Enquiry</Button>
                <Button className="rounded-xl font-bold">Admission</Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
