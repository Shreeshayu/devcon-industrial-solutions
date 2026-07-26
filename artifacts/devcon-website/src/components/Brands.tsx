import React from 'react';
import { motion } from 'framer-motion';

const brands = [
  {
    name: 'SMC Corporation (India) Pvt Ltd',
    tagline: 'Pneumatic Automation Solutions',
    tags: ['Directional Control Valves', 'Air Cylinders', 'Actuators', 'Vacuum Equipment', 'Fittings', 'Sensors', 'Process Valves', 'Pumps', 'Temperature Control'],
  },
  {
    name: 'Darshana Industries Pvt Ltd',
    tagline: 'Machine Tool Accessories',
    tags: ['Handles', 'Locks', 'Hinges', 'Gaskets', 'Conveyor Accessories', 'Aluminium Section Accessories', 'Cable Management'],
  },
  {
    name: 'Bray Controls',
    tagline: 'Advanced Valve Solutions',
    tags: ['Angle Valves', 'Butterfly Valves', 'Ball Valves', 'Check Valves', 'Knife-edge Gate Valves'],
  },
  {
    name: 'L&T Valves',
    tagline: 'Flow Control for Critical Industry',
    tags: ['Oil & Gas', 'Power', 'Petrochemicals', 'Defence', 'Aerospace'],
  },
  {
    name: 'Pennant Engineering Pvt Ltd',
    tagline: 'Pipeline Solutions',
    tags: ['Steam Traps', 'Pipeline Accessories', 'Flow Control Valves'],
  },
  {
    name: 'Industrial Power Transmission',
    tagline: 'Belts & Power Transmission',
    tags: ['Vee Belts', 'Timing Belts', 'Flat Belts', 'Conveyor Belts', 'PU Belts/Discs', 'Brands: Mitsuboshi, Hutchinson, Megadyne, Nitta, Volta'],
  },
];

export default function Brands() {
  return (
    <section id="brands" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-primary mb-4"
          >
            Our Brands & Products
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70"
          >
            We are the authorised dealer for industry-leading manufacturers, bringing global quality to Goa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brands.map((brand, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl shadow-sm border border-border overflow-hidden flex flex-col group hover:shadow-md transition-shadow"
            >
              <div className="h-2 bg-primary w-full group-hover:bg-accent transition-colors"></div>
              
              {/* Image Placeholder */}
              <div className="h-48 bg-muted/50 flex items-center justify-center border-b border-border border-dashed m-4 rounded-lg relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#1a3a6b_1px,transparent_1px)] [background-size:16px_16px]"></div>
                <span className="text-sm font-medium text-muted-foreground bg-white/80 px-4 py-2 rounded-full shadow-sm relative z-10">
                  Product images coming soon
                </span>
              </div>

              <div className="p-6 pt-2 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-primary mb-1">{brand.name}</h3>
                <p className="text-accent font-semibold italic text-sm mb-4">{brand.tagline}</p>
                
                <div className="flex flex-wrap gap-2 mt-auto">
                  {brand.tags.map((tag, j) => (
                    <span
                      key={j}
                      className="inline-block px-2.5 py-1 bg-muted text-foreground/70 text-xs font-medium rounded border border-border"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
