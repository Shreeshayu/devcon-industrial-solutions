import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, X, ChevronDown } from 'lucide-react';

interface Brand {
  id: string;
  name: string;
  tagline: string;
  description: string;
  website?: string;
  tags: string[];
  images: { src: string; label: string }[];
}

const brands: Brand[] = [
  {
    id: 'smc',
    name: 'SMC Corporation (India) Pvt Ltd',
    tagline: 'World\'s No.1 Pneumatic Automation Brand',
    description:
      'SMC Corporation is the global leader in pneumatic automation, holding approximately 30% of the world market share. Founded in Japan in 1959, SMC manufactures over 12,000 product series and 700,000+ product variations. As an authorised dealer in Goa, Devcon Industrial Solutions supplies and supports the complete SMC range — from basic fittings to complex multi-axis pneumatic systems — backed by expert technical support and genuine spare parts.',
    tags: [
      'Directional Control Valves',
      'Air Cylinders',
      'Rotary Actuators',
      'Electric Actuators',
      'Vacuum Equipment',
      'Air Preparation / FRL',
      'Pressure Control',
      'Fittings & Tubing',
      'Switches / Sensors',
      'Process Valves',
      'Diaphragm Pumps',
      'Hydraulic Equipment',
    ],
    images: [
      { src: '/images/smc/directional-control-valves.jpeg', label: 'Directional Control Valves' },
      { src: '/images/smc/air-cylinders.jpeg', label: 'Air Cylinders' },
      { src: '/images/smc/rotary-actuators.jpeg', label: 'Rotary Actuators / Air Grippers' },
      { src: '/images/smc/electric-actuators.jpeg', label: 'Electric Actuators / Cylinders' },
      { src: '/images/smc/vacuum-equipment.jpeg', label: 'Vacuum Equipment' },
      { src: '/images/smc/air-preparation.jpeg', label: 'Air Preparation Equipment' },
      { src: '/images/smc/pressure-control.jpeg', label: 'Modular F.R.L. / Pressure Control' },
      { src: '/images/smc/fittings-tubing.jpeg', label: 'Fittings & Tubing' },
      { src: '/images/smc/sensors.jpeg', label: 'Switches / Sensors / Controllers' },
      { src: '/images/smc/process-valves.jpeg', label: 'Process Valves' },
      { src: '/images/smc/process-pumps.jpeg', label: 'Process Pumps (Diaphragm)' },
      { src: '/images/smc/hydraulic.jpeg', label: 'Hydraulic Equipment' },
    ],
  },
  {
    id: 'darshana',
    name: 'Darshana Industries Pvt Ltd',
    tagline: 'Machine Tool Accessories & Hardware',
    description:
      'Darshana Industries is a leading Indian manufacturer of machine tool accessories, panel hardware, and industrial accessories. Their extensive catalogue covers everything from cabinet hinges and panel locks to conveyor components and aluminium profile accessories — all designed to meet demanding industrial standards.',
    tags: [
      'Handles & Grips',
      'Locks & Latches',
      'Hinges',
      'Gaskets & Seals',
      'Conveyor Accessories',
      'Aluminium Section Hardware',
      'Cable Management',
      'Console Accessories',
      'Support Arm Systems',
    ],
    images: [
      { src: '/images/darshana/handles.jpeg', label: 'Handles' },
      { src: '/images/darshana/locks.jpeg', label: 'Locks' },
      { src: '/images/darshana/three-point-locks.jpeg', label: '3-Point Locks' },
      { src: '/images/darshana/hinges.jpeg', label: 'Hinges' },
      { src: '/images/darshana/gaskets.jpeg', label: 'Gaskets' },
      { src: '/images/darshana/clamping-connectors.jpeg', label: 'Clamping Connectors' },
      { src: '/images/darshana/flexible-mountings.jpeg', label: 'Flexible Mountings' },
      { src: '/images/darshana/conveyor-accessories.jpeg', label: 'Conveyor Accessories' },
      { src: '/images/darshana/cable-management.jpeg', label: 'Cable Management Systems' },
      { src: '/images/darshana/aluminium-door-frame.jpeg', label: 'Aluminium Door Frame' },
      { src: '/images/darshana/console-accessories.jpeg', label: 'Console Accessories' },
      { src: '/images/darshana/support-arm-systems.jpeg', label: 'Support Arm Systems' },
      { src: '/images/darshana/aluminium-section-accessories.jpeg', label: 'Aluminium Section Accessories' },
    ],
  },
  {
    id: 'bray',
    name: 'Bray Controls',
    tagline: 'Advanced Valve & Actuator Solutions',
    description:
      'Bray International is a globally recognised manufacturer of flow control products — valves, actuators, and accessories. Known for precision engineering and durability in demanding industrial environments, Bray valves are deployed across water treatment, chemical, food & beverage, HVAC, and industrial process sectors.',
    tags: [
      'Butterfly Valves',
      'Ball Valves',
      'Check Valves',
      'Angle Valves',
      'Knife-edge Gate Valves',
      'Pneumatic Actuators',
      'Electric Actuators',
    ],
    images: [
      { src: '/images/bray/valve-1.jpeg', label: 'Butterfly Valve' },
      { src: '/images/bray/valve-2.jpeg', label: 'Butterfly Valve — Actuated' },
      { src: '/images/bray/valve-3.jpeg', label: 'Butterfly Valve — High Performance' },
      { src: '/images/bray/valve-4.jpeg', label: 'Angle / Check Valve' },
      { src: '/images/bray/valve-5.jpeg', label: 'Ball Valve with Actuator' },
      { src: '/images/bray/valve-6.jpeg', label: 'Ball / Check Valve' },
    ],
  },
  {
    id: 'lt',
    name: 'L&T Valves',
    tagline: 'Flow Control for Critical Industry',
    description:
      'L&T Valves, a division of Larsen & Toubro, manufactures high-integrity industrial valves for critical applications. Their products are certified to international standards and used in oil & gas, power generation, petrochemicals, defence, and aerospace projects. L&T Valves are trusted wherever safety and precision are non-negotiable.',
    tags: [
      'Gate Valves',
      'Globe Valves',
      'Ball Valves',
      'Butterfly Valves',
      'Check Valves',
      'Plug Valves',
      'Pneumatically Actuated Valves',
    ],
    images: [
      { src: '/images/lt/valve-1.jpeg', label: 'Ball Valve' },
      { src: '/images/lt/valve-2.jpeg', label: 'Gate Valve' },
      { src: '/images/lt/valve-3.jpeg', label: 'Butterfly Valve' },
      { src: '/images/lt/valve-4.jpeg', label: 'Butterfly Valve — Actuated' },
      { src: '/images/lt/valve-5.jpeg', label: 'Check Valve' },
      { src: '/images/lt/valve-6.jpeg', label: 'Globe Valve' },
      { src: '/images/lt/valve-7.jpeg', label: 'Plug Valve' },
      { src: '/images/lt/valve-8.jpeg', label: 'Pneumatically Actuated Valve' },
    ],
  },
];

/* ── Mini carousel used inside the expanded panel ── */
function ProductCarousel({ images }: { images: { src: string; label: string }[] }) {
  const [idx, setIdx] = useState(0);
  const [err, setErr] = useState<Record<number, boolean>>({});

  const prev = () => setIdx((i) => (i - 1 + images.length) % images.length);
  const next = () => setIdx((i) => (i + 1) % images.length);
  const cur = images[idx];

  return (
    <div className="relative h-44 bg-gray-100 rounded-lg overflow-hidden border border-border">
      {err[idx] ? (
        <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 px-2 text-center">
          {cur.label}
        </div>
      ) : (
        <img
          key={idx}
          src={cur.src}
          alt={cur.label}
          onError={() => setErr((e) => ({ ...e, [idx]: true }))}
          className="w-full h-full object-cover"
        />
      )}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent px-2 py-1.5">
        <p className="text-white text-[11px] font-medium leading-tight truncate">{cur.label}</p>
      </div>
      {images.length > 1 && (
        <>
          <button onClick={prev} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-0.5 transition-colors">
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button onClick={next} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-0.5 transition-colors">
            <ChevronRight className="w-4 h-4" />
          </button>
          <div className="absolute top-1.5 right-1.5 bg-black/50 text-white text-[10px] px-1.5 py-0.5 rounded">
            {idx + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

/* ── Full-screen brand detail modal ── */
function BrandModal({ brand, onClose }: { brand: Brand; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/70 flex items-start justify-center p-4 overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.93, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.93, opacity: 0, y: 20 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className="relative bg-white rounded-2xl shadow-2xl w-full max-w-5xl my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-primary text-white px-8 py-6 rounded-t-2xl flex items-start justify-between gap-4">
          <div>
            <p className="text-accent text-sm font-semibold uppercase tracking-wider mb-1">Authorised Dealer</p>
            <h2 className="text-2xl md:text-3xl font-extrabold leading-tight">{brand.name}</h2>
            <p className="text-white/70 mt-1 text-sm">{brand.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 bg-white/10 hover:bg-white/20 text-white rounded-full p-2 transition-colors mt-1"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-8">
          {/* Description */}
          <p className="text-foreground/80 text-base leading-relaxed mb-8">{brand.description}</p>

          {/* Product tags */}
          <h3 className="text-lg font-bold text-primary mb-3">Products We Supply</h3>
          <div className="flex flex-wrap gap-2 mb-10">
            {brand.tags.map((tag, i) => (
              <span key={i} className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/20">
                {tag}
              </span>
            ))}
          </div>

          {/* Product image grid */}
          <h3 className="text-lg font-bold text-primary mb-4">Product Gallery</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {brand.images.map((img, i) => {
              const [imgErr, setImgErr] = useState(false);
              return (
                <div key={i} className="rounded-lg overflow-hidden border border-border shadow-sm">
                  <div className="relative h-36 bg-gray-100">
                    {imgErr ? (
                      <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 px-2 text-center">
                        {img.label}
                      </div>
                    ) : (
                      <img
                        src={img.src}
                        alt={img.label}
                        onError={() => setImgErr(true)}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                  <div className="px-2 py-2 bg-white">
                    <p className="text-[11px] font-semibold text-foreground/70 leading-tight">{img.label}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-foreground/60 text-sm">Need a quote or technical advice on {brand.name.split(' ')[0]} products?</p>
            <a
              href="#contact"
              onClick={onClose}
              className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-2.5 rounded-lg hover:bg-accent hover:text-primary transition-colors text-sm"
            >
              Request a Quote
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ── Brand card (compact, clickable) ── */
function BrandCard({ brand, onClick }: { brand: Brand; onClick: () => void }) {
  const [imgIdx, setImgIdx] = useState(0);
  const [imgErr, setImgErr] = useState<Record<number, boolean>>({});

  const prev = (e: React.MouseEvent) => { e.stopPropagation(); setImgIdx((i) => (i - 1 + brand.images.length) % brand.images.length); };
  const next = (e: React.MouseEvent) => { e.stopPropagation(); setImgIdx((i) => (i + 1) % brand.images.length); };
  const cur = brand.images[imgIdx];

  return (
    <div
      className="bg-white rounded-xl shadow-sm border border-border overflow-hidden flex flex-col group hover:shadow-lg cursor-pointer transition-all duration-200 hover:-translate-y-0.5"
      onClick={onClick}
    >
      <div className="h-1.5 bg-primary w-full group-hover:bg-accent transition-colors" />

      {/* Carousel preview */}
      <div className="relative h-48 bg-gray-100 overflow-hidden">
        {imgErr[imgIdx] ? (
          <div className="w-full h-full flex items-center justify-center text-sm text-gray-400">{cur.label}</div>
        ) : (
          <img
            key={imgIdx}
            src={cur.src}
            alt={cur.label}
            onError={() => setImgErr((e) => ({ ...e, [imgIdx]: true }))}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        )}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
          <p className="text-white text-xs font-medium truncate">{cur.label}</p>
        </div>
        {brand.images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors">
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button onClick={next} className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors">
              <ChevronRight className="w-4 h-4" />
            </button>
            <div className="absolute top-2 left-2 bg-black/40 text-white text-xs px-1.5 py-0.5 rounded">
              {imgIdx + 1}/{brand.images.length}
            </div>
          </>
        )}
        {/* "Click to explore" hint on hover */}
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-primary text-xs font-bold px-3 py-1.5 rounded-full shadow">
            Click to explore →
          </span>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-primary mb-1 group-hover:text-accent transition-colors">{brand.name}</h3>
        <p className="text-accent font-semibold italic text-xs mb-4">{brand.tagline}</p>
        <div className="flex flex-wrap gap-1.5 mt-auto">
          {brand.tags.slice(0, 5).map((tag, j) => (
            <span key={j} className="inline-block px-2 py-0.5 bg-muted text-foreground/60 text-[11px] font-medium rounded border border-border">
              {tag}
            </span>
          ))}
          {brand.tags.length > 5 && (
            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 bg-primary/10 text-primary text-[11px] font-semibold rounded border border-primary/20">
              +{brand.tags.length - 5} more <ChevronDown className="w-3 h-3" />
            </span>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Brands() {
  const [activeBrand, setActiveBrand] = useState<Brand | null>(null);

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
            We are the authorised dealer for industry-leading manufacturers. Click any brand to explore their full product range.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <BrandCard brand={brand} onClick={() => setActiveBrand(brand)} />
            </motion.div>
          ))}
        </div>
      </div>

      {/* Brand detail modal */}
      <AnimatePresence>
        {activeBrand && (
          <BrandModal brand={activeBrand} onClose={() => setActiveBrand(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
