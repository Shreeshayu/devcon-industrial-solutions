import React from 'react';
import { motion } from 'framer-motion';
import { Factory, Zap, Target, Wrench, ShieldCheck, HeartHandshake } from 'lucide-react';

const industries = [
  { name: 'Food & Pharma', icon: HeartHandshake },
  { name: 'Printing & Packaging', icon: Factory },
  { name: 'Plastics & Mining', icon: Wrench },
  { name: 'Metallurgy & Electronics', icon: Zap },
  { name: 'Medical & Power', icon: ShieldCheck },
  { name: 'Fertilizer & Chemical', icon: Target },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column: History & Mission */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-6">
              A Legacy of Engineering <span className="text-accent">Excellence</span>
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Founded by <strong>Mr. Deviprasad</strong>, Devcon Industrial Solutions is built on 
                <strong> 20+ years of deep expertise</strong> in automation, fluid, and fluid power 
                industries. We don't just sell components; we engineer solutions that keep plants 
                running efficiently.
              </p>
              
              <div className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-2">Our Mission</h3>
                <p className="text-base text-foreground/70">
                  To be Goa's most trusted industrial automation partner by providing technically 
                  superior, highly reliable, and cost-effective engineering products.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-2">Our Vision</h3>
                <p className="text-base text-foreground/70">
                  To empower manufacturers with the right engineering solutions, ensuring minimal 
                  downtime and maximum operational efficiency.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Stats & Industries */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience', value: '20+ Years' },
                { label: 'Authorised Brands', value: '6 Top Tier' },
                { label: 'Industries Served', value: '15+' },
                { label: 'Support', value: 'Goa-Based' },
              ].map((stat, i) => (
                <div key={i} className="bg-primary text-white p-6 rounded-lg text-center flex flex-col justify-center shadow-md">
                  <span className="text-3xl font-extrabold text-accent mb-1">{stat.value}</span>
                  <span className="text-sm font-semibold uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>

            {/* Industries Grid */}
            <div>
              <h3 className="text-2xl font-bold text-primary mb-6">Industries We Serve</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {industries.map((ind, i) => (
                  <div key={i} className="bg-white p-4 rounded-lg shadow-sm border border-border flex flex-col items-center text-center hover:border-accent transition-colors group">
                    <ind.icon className="w-8 h-8 text-primary mb-3 group-hover:text-accent transition-colors" />
                    <span className="text-sm font-semibold text-foreground/80">{ind.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
