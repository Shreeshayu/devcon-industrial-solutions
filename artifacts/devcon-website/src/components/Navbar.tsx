import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Strengths', href: '#strengths' },
    { name: 'Brands', href: '#brands' },
    { name: 'Gallery', href: '#gallery' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${
        isScrolled ? 'shadow-md py-3' : 'py-5 shadow-sm'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <img
              src="/images/logo/devcon-logo.jpeg"
              alt="Devcon Industrial Solutions"
              className="w-14 h-14 rounded-full object-cover border-2 border-primary group-hover:border-accent transition-colors"
            />
            <div className="flex flex-col">
              <span className="font-bold text-lg leading-tight tracking-tight text-primary uppercase">
                Devcon
              </span>
              <span className="text-[10px] font-semibold text-muted-foreground uppercase tracking-wider">
                Industrial Solutions
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden xl:flex items-center gap-6 flex-shrink-0">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-base font-semibold text-foreground hover:text-accent transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="hidden xl:flex items-center gap-4 flex-shrink-0">
            <a
              href="tel:+917738383322"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 7738383322
            </a>
            <a
              href="mailto:devconsalesgoa@gmail.com"
              className="flex items-center gap-2 text-sm font-semibold text-primary hover:text-accent transition-colors"
            >
              <Mail className="w-4 h-4" />
              devconsalesgoa@gmail.com
            </a>
            <Button
              asChild
              className="bg-primary text-white border-2 border-accent hover:bg-accent hover:text-primary transition-all font-bold"
            >
              <a href="#contact">Get a Quote</a>
            </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="xl:hidden p-2 text-primary hover:text-accent transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Nav Dropdown */}
      {isMobileMenuOpen && (
        <div className="xl:hidden absolute top-full left-0 right-0 bg-white border-t border-border shadow-lg py-4 px-4 flex flex-col gap-4">
            <a
              key={link.name}
              href={link.href}
              className="text-lg font-semibold text-foreground py-2 border-b border-muted"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:+917738383322"
            className="flex items-center gap-2 text-lg font-semibold text-primary py-2"
          >
            <Phone className="w-5 h-5" />
            +91 7738383322
          </a>
          <Button asChild className="w-full bg-primary text-white font-bold mt-2">
            <a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>
              Get a Quote
            </a>
          </Button>
        </div>
      )}
    </header>
  );
}
