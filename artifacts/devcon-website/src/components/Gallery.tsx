import React from 'react';
import { motion } from 'framer-motion';
import { Wrench } from 'lucide-react';

const assemblies = [
  '15-Station Valve Manifold — Die Casting Machine',
  '10-Station Valve Manifold — Water Purification System',
  'Air Pressure Booster Assembly',
  'Jacketed Ball Valve with Pneumatic Actuator',
  'Dual Stroke Dual Rod Cylinder — Bobst Machine',
  'Valve Manifold — Komori Printing Machine',
  'Valve Manifold — Blow Moulding Machine',
  'Pneumatic Panel — Paint Booth Systems'
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-primary mb-4"
          >
            Custom Assemblies & Engineering Work
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70"
          >
            We design and build custom pneumatic assemblies for specialized industrial applications.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {assemblies.map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 4) * 0.1, duration: 0.4 }}
              className="group cursor-pointer"
            >
              <div className="aspect-[4/3] bg-primary rounded-xl overflow-hidden relative mb-4 flex items-center justify-center border-2 border-transparent group-hover:border-accent transition-colors">
                <div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%,#ffffff_100%),linear-gradient(45deg,#ffffff_25%,transparent_25%,transparent_75%,#ffffff_75%,#ffffff_100%)] [background-size:20px_20px] [background-position:0_0,10px_10px]"></div>
                
                <div className="flex flex-col items-center justify-center relative z-10 text-white/50 group-hover:text-white transition-colors">
                  <Wrench className="w-10 h-10 mb-2 opacity-50" />
                  <span className="text-xs font-semibold uppercase tracking-widest opacity-70">Assembly Photo</span>
                </div>
              </div>
              <h3 className="text-sm font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                {title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
