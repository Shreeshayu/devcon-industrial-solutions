import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[100dvh] flex flex-col items-center justify-center bg-primary overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-industrial-pattern opacity-30"></div>
      
      {/* Decorative gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/50 via-transparent to-primary"></div>

      <div className="container relative z-10 mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 text-accent text-sm font-semibold uppercase tracking-wider"
        >
          <Settings className="w-4 h-4 animate-spin-slow" />
          <span>Goa's Industrial Partner</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white uppercase tracking-tight max-w-4xl leading-tight mb-6"
        >
          Devcon Industrial <span className="text-accent">Solutions</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-xl md:text-2xl font-semibold text-gray-200 mb-6 max-w-3xl"
        >
          One-stop solution for industrial automation and instrumentation
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-base md:text-lg text-gray-300 max-w-2xl mb-10 leading-relaxed"
        >
          Trusted by manufacturers across Goa and beyond for pneumatic automation, valve solutions, and power transmission expertise. Over 20 years of proven technical authority.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-primary hover:bg-white transition-colors text-base font-bold h-14 px-8"
          >
            <a href="#brands">
              Explore Our Solutions
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary transition-colors text-base font-bold h-14 px-8"
          >
            <a href="#contact">Get in Touch</a>
          </Button>
        </motion.div>
      </div>

      {/* Partner Logos Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.8 }}
        className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-black/20 backdrop-blur-sm py-4"
      >
        <div className="container mx-auto px-4 flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70">
          {['SMC', 'Bray', 'L&T Valves', 'Pennant'].map((brand) => (
            <div key={brand} className="text-white text-lg font-bold tracking-widest uppercase">
              {brand}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
