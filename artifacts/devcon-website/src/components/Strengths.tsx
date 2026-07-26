import React from 'react';
import { motion } from 'framer-motion';
import { Settings2, Wind, BadgeCheck, Zap, Globe, Scale, Truck } from 'lucide-react';

const strengths = [
  {
    title: 'Technical Support Excellence',
    desc: 'Deep domain knowledge to select the right components for your specific application, avoiding costly mismatches.',
    icon: Settings2,
  },
  {
    title: 'Compressed Air Management',
    desc: 'Specialized expertise in optimizing pneumatic systems for energy efficiency and reliable performance.',
    icon: Wind,
  },
  {
    title: 'Authorised Dealership',
    desc: 'Direct partnerships with global leaders like SMC, Bray, L&T, and Pennant guarantee genuine products.',
    icon: BadgeCheck,
  },
  {
    title: 'Right-Solution Focus',
    desc: 'We engineer solutions to solve problems, not just push catalog numbers.',
    icon: Zap,
  },
  {
    title: 'Wide Sourcing Capability',
    desc: 'Extensive network to source specialized industrial components when you need them most.',
    icon: Globe,
  },
  {
    title: 'Business Ethics & Integrity',
    desc: 'Transparent pricing, honest lead times, and a commitment to long-term partnerships.',
    icon: Scale,
  },
  {
    title: 'Quick Response & Delivery',
    desc: 'Local Goa presence means rapid support and minimized downtime for your plant.',
    icon: Truck,
  },
];

export default function Strengths() {
  return (
    <section id="strengths" className="py-24 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-extrabold text-primary mb-4"
          >
            Why Choose Us
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-foreground/70"
          >
            We bring engineering rigor and unshakeable reliability to every project.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {strengths.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`bg-muted/50 p-6 rounded-xl border border-border hover:border-accent hover:shadow-md transition-all duration-300 flex flex-col h-full ${
                i === 6 ? 'sm:col-span-2 md:col-span-3 lg:col-span-1 lg:col-start-4' : ''
              }`}
            >
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-primary mb-3">{item.title}</h3>
              <p className="text-foreground/70 text-sm leading-relaxed flex-grow">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
