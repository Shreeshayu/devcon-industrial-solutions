import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Settings, Users, ShieldCheck, Box } from 'lucide-react';

function useCountUp(target, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    const startTime = performance.now();
    const ease = (t) => 1 - Math.pow(1 - t, 3);
    let frame;
    function tick(now) {
      const progress = Math.min((now - startTime) / duration, 1);
      setValue(Math.round(ease(progress) * target));
      if (progress < 1) frame = requestAnimationFrame(tick);
    }
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [target, duration]);
  return value;
}

function StatValue({ target }) {
  const value = useCountUp(target);
  return <span>{value.toLocaleString()}</span>;
}

export default function Hero() {
  const [hovering, setHovering] = useState(false);

  return (
    <section className="relative w-full bg-[#DCE3EC] overflow-hidden pt-28 pb-8">
      <style>{`
        .glow-hover {
          transition: box-shadow 0.3s ease;
        }
        .glow-hover:hover {
          box-shadow: 0 0 0 1px rgba(0,71,171,0.4), 0 0 18px rgba(0,71,171,0.35);
        }
        .stat-card-glow {
          transition: box-shadow 0.3s ease, border-color 0.3s ease;
          border: 1px solid transparent;
        }
        .stat-card-glow:hover {
          border-color: rgba(0,71,171,0.35);
          box-shadow: 0 0 0 1px rgba(0,71,171,0.25), 0 8px 24px rgba(0,71,171,0.2);
        }
      `}</style>

      <div className="container mx-auto px-4 md:px-6 w-full">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center min-h-[380px]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative z-10"
          >
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/5 border border-primary/20 text-primary text-xs font-semibold uppercase tracking-wider">
              <Settings className="w-4 h-4 text-accent" />
              <span>Your Partner for Industrial Solutions</span>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold text-primary leading-tight mb-5">
              One-stop solution for <span className="text-[#0047AB]">industrial automation,</span> instrumentation and fluid control.
            </h1>

            <p className="text-sm md:text-base font-medium text-foreground/80 max-w-xl mb-6 leading-relaxed">
              Trusted by customers in and around Goa for pneumatic automation, valve solutions, and power transmission expertise. Over 20 years of proven technical authority.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                asChild
                size="lg"
                className="glow-hover bg-primary text-white hover:bg-primary/90 transition-colors text-base font-bold h-12 px-6"
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
                className="glow-hover border-primary text-primary hover:bg-primary hover:text-white transition-colors text-base font-bold h-12 px-6"
              >
                <a href="#contact">
                  Get in Touch
                  <ArrowRight className="ml-2 w-5 h-5" />
                </a>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 5 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative h-[380px] lg:h-[600px] w-full lg:w-[calc(100%+15rem)] lg:-mr-800"
            style={{
              clipPath: 'polygon(15% 0%, 100% 0%, 100% 100%, 0% 100%)',
            }}
          >
            <div
              onMouseEnter={() => setHovering(true)}
              onMouseLeave={() => setHovering(false)}
              className="absolute inset-0 overflow-hidden"
            >
              <img
                src="/images/hero-factory.png"
                alt="Industrial plant"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out"
                style={{ transform: hovering ? 'scale(1.08)' : 'scale(1)' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
            </div>
          </motion.div>

          {/* Stat cards overlapping bottom-right of image */}
          <div className="hidden lg:flex absolute bottom-0 right-1 z-40 translate-y-0/3">
            <div className="grid grid-cols-3 gap-3">
              {[
                { icon: Users, value: 20, suffix: '+', label: 'Years of Experience' },
                { icon: ShieldCheck, value: 500, suffix: '+', label: 'Happy Clients' },
                { icon: Box, value: 500000, suffix: '+', label: 'Products' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="stat-card-glow bg-[#F0F8FF] text-white rounded-lg p-3 w-32 text-center shadow-xl hover:-translate-y-1 hover:shadow-2xl transition-all duration-300"
                >
                  <div className="flex justify-center mb-2.5">
                    <div className="w-8 h-8 rounded-full border border-[#000000] flex items-center justify-center">
                      <stat.icon className="w-3.5 h-3.5 text-[#000000]" />
                    </div>
                  </div>
                  <div className="text-xl font-extrabold text-[#000000]">
                    <StatValue target={stat.value} />
                    {stat.suffix}
                  </div>
                  <div className="text-[15px] text-accent/100 mt-1.5 leading-tight">{stat.label}</div>
                  <div className="w-5 h-0.5 bg-[#000000] mx-auto mt-1.5" />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile-only stat cards below image */}
        <div className="grid grid-cols-3 gap-3 lg:hidden mt-6">
          {[
            { icon: Users, value: 20, suffix: '+', label: 'Years of Experience' },
            { icon: ShieldCheck, value: 500, suffix: '+', label: 'Happy Clients' },
            { icon: Box, value: 1000, suffix: '+', label: 'Products' },
          ].map((stat) => (
            <div
              key={stat.label}
              className="stat-card-glow bg-primary text-white rounded-lg p-3 text-center shadow-lg"
            >
              <div className="flex justify-center mb-1.5">
                <div className="w-8 h-8 rounded-full border border-[#000000]/50 flex items-center justify-center">
                  <stat.icon className="w-3.5 h-3.5 text-accent" />
                </div>
              </div>
              <div className="text-xl font-extrabold text-accent">
                <StatValue target={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-[10px] text-white/80 mt-0.5 leading-tight">{stat.label}</div>
              <div className="w-5 h-0.5 bg-accent mx-auto mt-1.5" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}