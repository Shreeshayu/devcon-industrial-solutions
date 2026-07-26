import React from 'react';
import { Linkedin, Facebook, MessageCircle } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8 border-t-4 border-accent">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Logo & Tagline */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent text-primary font-bold text-xl">
                D
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-xl leading-tight tracking-tight uppercase">
                  Devcon
                </span>
                <span className="text-[10px] font-semibold text-white/70 uppercase tracking-wider">
                  Industrial Solutions
                </span>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed mb-6 max-w-sm">
              One-stop solution for industrial automation and instrumentation. Trusted by manufacturers across Goa since 20+ years.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="https://wa.me/917738383322" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-primary transition-colors">
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { name: 'About Us', href: '#about' },
                { name: 'Our Strengths', href: '#strengths' },
                { name: 'Brands & Products', href: '#brands' },
                { name: 'Custom Assemblies', href: '#gallery' },
                { name: 'Contact Us', href: '#contact' }
              ].map((link) => (
                <li key={link.name}>
                  <a href={link.href} className="text-white/80 hover:text-accent transition-colors text-sm font-medium flex items-center gap-2 before:content-['›'] before:text-accent">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-accent mb-6">Contact Us</h4>
            <ul className="space-y-4 text-sm text-white/80">
              <li>
                <strong className="block text-white mb-1">Address:</strong>
                GF-1, Plot No. 135,406/243, PDA Colony,<br />
                Alto Porvorim, North Goa,<br />
                Goa - 403521
              </li>
              <li>
                <strong className="block text-white mb-1">Phone:</strong>
                <a href="tel:+917738383322" className="hover:text-accent transition-colors">+91 7738383322</a>
              </li>
              <li>
                <strong className="block text-white mb-1">Email:</strong>
                <a href="mailto:devconsalesgoa@gmail.com" className="hover:text-accent transition-colors">devconsalesgoa@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/60">
          <p>© {new Date().getFullYear()} Devcon Industrial Solutions. All rights reserved.</p>
          <p>GST: <span className="font-mono">30AHLPR3428B1ZQ</span></p>
        </div>
      </div>
    </footer>
  );
}
