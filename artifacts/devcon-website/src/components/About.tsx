import React from 'react';
import { motion } from 'framer-motion';
import {
  UtensilsCrossed, FlaskConical, Printer, Package2, Layers, Mountain,
  Flame, Cpu, HeartPulse, Zap, Leaf, TestTube2,
} from 'lucide-react';

const industries = [
  { name: 'Food Processing', icon: UtensilsCrossed, color: 'bg-orange-50 text-orange-600 border-orange-200', img: 'https://images.unsplash.com/photo-1565118531796-763e5082d113?w=400&h=240&fit=crop&auto=format' },
  { name: 'Pharmaceuticals', icon: FlaskConical,    color: 'bg-blue-50 text-blue-600 border-blue-200',     img: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=240&fit=crop&auto=format' },
  { name: 'Printing',        icon: Printer,         color: 'bg-purple-50 text-purple-600 border-purple-200', img: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=400&h=240&fit=crop&auto=format' },
  { name: 'Packaging',       icon: Package2,        color: 'bg-yellow-50 text-yellow-700 border-yellow-200', img: 'https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=240&fit=crop&auto=format' },
  { name: 'Plastics',        icon: Layers,          color: 'bg-teal-50 text-teal-600 border-teal-200',       img: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=240&fit=crop&auto=format' },
  { name: 'Mining',          icon: Mountain,        color: 'bg-stone-50 text-stone-600 border-stone-200',    img: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=240&fit=crop&auto=format' },
  { name: 'Metallurgy',      icon: Flame,           color: 'bg-red-50 text-red-600 border-red-200',          img: 'https://images.unsplash.com/photo-1524522173746-f628baad3644?w=400&h=240&fit=crop&auto=format' },
  { name: 'Electronics',     icon: Cpu,             color: 'bg-indigo-50 text-indigo-600 border-indigo-200', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop&auto=format' },
  { name: 'Medical',         icon: HeartPulse,      color: 'bg-rose-50 text-rose-600 border-rose-200',       img: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=240&fit=crop&auto=format' },
  { name: 'Power Generation',icon: Zap,             color: 'bg-amber-50 text-amber-600 border-amber-200',    img: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=400&h=240&fit=crop&auto=format' },
  { name: 'Fertilizer',      icon: Leaf,            color: 'bg-green-50 text-green-600 border-green-200',    img: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=400&h=240&fit=crop&auto=format' },
  { name: 'Chemical',        icon: TestTube2,       color: 'bg-cyan-50 text-cyan-600 border-cyan-200',       img: 'https://images.unsplash.com/photo-1565008576549-57569a49371d?w=400&h=240&fit=crop&auto=format' },
];

export default function About() {
  return (
    <section id="about" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top: About + Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
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

          {/* Right Column: Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8"
          >
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Experience',       value: '20+ Years' },
                { label: 'Authorised Brands', value: '4 Top Tier' },
                { label: 'Industries Served', value: '12+' },
                { label: 'Support',           value: 'Goa-Based' },
              ].map((stat, i) => (
                <div key={i} className="bg-primary text-white p-6 rounded-lg text-center flex flex-col justify-center shadow-md">
                  <span className="text-3xl font-extrabold text-accent mb-1">{stat.value}</span>
                  <span className="text-sm font-semibold uppercase tracking-wider">{stat.label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Industries We Serve */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h3 className="text-2xl md:text-3xl font-extrabold text-primary text-center mb-10">
            Industries We Serve
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {industries.map((ind, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.04, duration: 0.35 }}
                className="group rounded-xl overflow-hidden border border-border shadow-sm hover:shadow-md transition-shadow bg-white flex flex-col"
              >
                {/* Industry photo */}
                <div className="relative h-28 overflow-hidden">
                  <img
                    src={ind.img}
                    alt={ind.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    onError={(e) => {
                      (e.currentTarget as HTMLImageElement).style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors" />
                </div>
                {/* Label + icon */}
                <div className={`flex flex-col items-center text-center px-2 py-3 gap-1.5 ${ind.color} border-t`}>
                  <ind.icon className="w-5 h-5" />
                  <span className="text-xs font-bold leading-tight">{ind.name}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
