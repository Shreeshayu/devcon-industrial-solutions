import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface Brand {
  name: string;
  tagline: string;
  tags: string[];
  images: { src: string; label: string }[];
}

const brands: Brand[] = [
  {
    name: 'SMC Corporation (India) Pvt Ltd',
    tagline: 'Pneumatic Automation Solutions',
    tags: ['Directional Control Valves', 'Air Cylinders', 'Actuators', 'Vacuum Equipment', 'Fittings', 'Sensors', 'Process Valves', 'Pumps', 'Temperature Control'],
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
    name: 'Darshana Industries Pvt Ltd',
    tagline: 'Machine Tool Accessories',
    tags: ['Handles', 'Locks', 'Hinges', 'Gaskets', 'Conveyor Accessories', 'Aluminium Section Accessories', 'Cable Management'],
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
    name: 'Bray Controls',
    tagline: 'Advanced Valve Solutions',
    tags: ['Angle Valves', 'Butterfly Valves', 'Ball Valves', 'Check Valves', 'Knife-edge Gate Valves'],
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
    name: 'L&T Valves',
    tagline: 'Flow Control for Critical Industry',
    tags: ['Oil & Gas', 'Power', 'Petrochemicals', 'Defence', 'Aerospace'],
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
  {
    name: 'Pennant Engineering Pvt Ltd',
    tagline: 'Steam Traps & Pipeline Solutions',
    tags: ['Steam Traps', 'Pipeline Accessories', 'Flow Control Valves', 'Pressure Reducing Valves'],
    images: [
      { src: '/images/pennant/thermodynamic-steam-trap.jpeg', label: 'Thermodynamic Steam Trap' },
      { src: '/images/pennant/inverted-bucket-steam-trap.jpeg', label: 'Inverted Bucket Steam Trap' },
      { src: '/images/pennant/ball-float-steam-trap.jpeg', label: 'Ball Float Steam Trap' },
      { src: '/images/pennant/thermostatic-steam-trap.jpeg', label: 'Thermostatic Steam Trap' },
      { src: '/images/pennant/liquid-drain-trap.jpeg', label: 'Liquid Drain Trap' },
      { src: '/images/pennant/air-vent.jpeg', label: 'Air Vent' },
      { src: '/images/pennant/air-eliminator.jpeg', label: 'Float Type Air Eliminator' },
      { src: '/images/pennant/strainer.jpeg', label: 'Strainer' },
      { src: '/images/pennant/piston-valve.jpeg', label: 'Piston Valve' },
      { src: '/images/pennant/pressure-reducing-valve.jpeg', label: 'Pressure Reducing Valve' },
      { src: '/images/pennant/eccentric-rotary-valve.jpeg', label: 'Eccentric Rotary Control Valve' },
    ],
  },
  {
    name: 'Industrial Power Transmission',
    tagline: 'Belts & Power Transmission',
    tags: ['Vee Belts', 'Timing Belts', 'Flat Belts', 'Conveyor Belts', 'PU Belts / Discs'],
    images: [
      { src: '/images/belts/mitsuboshi.jpeg', label: 'Mitsuboshi — Japan' },
      { src: '/images/belts/hutchinson.jpeg', label: 'Hutchinson — France' },
      { src: '/images/belts/megadyne.jpeg', label: 'Megadyne — Italy' },
      { src: '/images/belts/nitta.jpeg', label: 'Nitta Corporation — Japan' },
      { src: '/images/belts/volta.jpeg', label: 'Volta Belting — Israel' },
      { src: '/images/belts/steigentech.jpeg', label: 'Steigentech — France' },
    ],
  },
];

function ImageCarousel({ images }: { images: { src: string; label: string }[] }) {
  const [index, setIndex] = useState(0);
  const [imgError, setImgError] = useState<Record<number, boolean>>({});

  const prev = () => setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  const current = images[index];

  return (
    <div className="relative h-52 bg-gray-100 overflow-hidden">
      {imgError[index] ? (
        <div className="w-full h-full flex items-center justify-center text-sm text-gray-400 bg-gray-100">
          {current.label}
        </div>
      ) : (
        <img
          key={index}
          src={current.src}
          alt={current.label}
          onError={() => setImgError((e) => ({ ...e, [index]: true }))}
          className="w-full h-full object-cover transition-opacity duration-300"
        />
      )}

      {/* Label overlay */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent px-3 py-2">
        <p className="text-white text-xs font-medium truncate">{current.label}</p>
      </div>

      {/* Navigation */}
      {images.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
          <button
            onClick={next}
            className="absolute right-1 top-1/2 -translate-y-1/2 bg-black/40 hover:bg-black/60 text-white rounded-full p-1 transition-colors"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          {/* Dot indicators */}
          <div className="absolute top-2 right-2 flex gap-1">
            {images.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className={`w-1.5 h-1.5 rounded-full transition-colors ${i === index ? 'bg-white' : 'bg-white/40'}`}
                aria-label={`Go to image ${i + 1}`}
              />
            ))}
          </div>

          <div className="absolute top-2 left-2 bg-black/40 text-white text-xs px-1.5 py-0.5 rounded">
            {index + 1}/{images.length}
          </div>
        </>
      )}
    </div>
  );
}

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
              <div className="h-2 bg-primary w-full group-hover:bg-accent transition-colors" />

              {/* Product image carousel */}
              <ImageCarousel images={brand.images} />

              <div className="p-6 pt-4 flex flex-col flex-grow">
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
