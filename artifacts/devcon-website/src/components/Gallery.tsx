import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight } from 'lucide-react';

const assemblies = [
  {
    title: '15-Station Valve Manifold',
    subtitle: 'Die Casting Machine',
    images: [
      '/images/gallery/valve-manifold-blow-moulding.jpeg',
      '/images/gallery/valve-manifold-die-casting.jpeg',
    ],
  },
  {
    title: '10-Station Valve Manifold',
    subtitle: 'Water Purification System',
    images: ['/images/gallery/valve-manifold-water-purification.jpeg'],
  },
  {
    title: 'Air Pressure Booster',
    subtitle: 'With Reservoir & Accessories',
    images: ['/images/gallery/pneumatic-panel-paint-booth.jpeg'],
  },
  {
    title: 'Jacketed Ball Valve',
    subtitle: 'With Pneumatic Actuator',
    images: [
      '/images/gallery/dual-stroke-cylinder-3.jpeg',
      '/images/gallery/valve-manifold-komori.jpeg',
    ],
  },
  {
    title: 'Dual Stroke Dual Rod Cylinder',
    subtitle: 'Bobst Machine',
    images: [
      '/images/gallery/custom-assembly-1.jpeg',
      '/images/gallery/custom-assembly-2.jpeg',
      '/images/gallery/solenoid-valves-komori.jpeg',
    ],
  },
  {
    title: 'Valve Manifold',
    subtitle: 'Komori Printing Machine',
    images: [
      '/images/gallery/dual-stroke-cylinder-1.jpeg',
      '/images/gallery/dual-stroke-cylinder-2.jpeg',
    ],
  },
  {
    title: 'Valve Manifold',
    subtitle: 'Blow Moulding Machine',
    images: ['/images/gallery/valve-manifold-die-casting.jpeg'],
  },
  {
    title: 'Pneumatic Panel',
    subtitle: 'Paint Booth System',
    images: [
      '/images/gallery/air-pressure-booster.jpeg',
      '/images/gallery/jacketed-ball-valve.jpeg',
    ],
  },
  {
    title: 'Solenoid Valves & Air Cylinders',
    subtitle: 'Komori Machine',
    images: [
      '/images/gallery/custom-assembly-3.jpeg',
      '/images/gallery/custom-assembly-4.jpeg',
      '/images/gallery/custom-assembly-5.jpeg',
    ],
  },
];

interface LightboxProps {
  item: (typeof assemblies)[0];
  onClose: () => void;
}

function Lightbox({ item, onClose }: LightboxProps) {
  const [imgIndex, setImgIndex] = useState(0);

  const prev = () => setImgIndex((i) => (i - 1 + item.images.length) % item.images.length);
  const next = () => setImgIndex((i) => (i + 1) % item.images.length);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/85 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.92, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.92, opacity: 0 }}
        className="relative max-w-3xl w-full bg-white rounded-xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-1.5 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Main image */}
        <div className="relative bg-gray-900">
          <img
            src={item.images[imgIndex]}
            alt={item.title}
            className="w-full max-h-[65vh] object-contain"
          />

          {/* Arrow nav for multiple images */}
          {item.images.length > 1 && (
            <>
              <button
                onClick={prev}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={next}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
              <div className="absolute bottom-2 right-2 bg-black/50 text-white text-xs px-2 py-1 rounded">
                {imgIndex + 1} / {item.images.length}
              </div>
            </>
          )}
        </div>

        {/* Thumbnail strip */}
        {item.images.length > 1 && (
          <div className="flex gap-2 p-3 justify-center bg-gray-100">
            {item.images.map((src, i) => (
              <button key={i} onClick={() => setImgIndex(i)}>
                <img
                  src={src}
                  alt=""
                  className={`w-16 h-12 object-cover rounded border-2 transition-colors ${
                    i === imgIndex ? 'border-primary' : 'border-transparent opacity-60 hover:opacity-100'
                  }`}
                />
              </button>
            ))}
          </div>
        )}

        <div className="px-6 py-4">
          <h3 className="text-xl font-bold text-primary">{item.title}</h3>
          <p className="text-sm text-foreground/60 mt-0.5">{item.subtitle}</p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<(typeof assemblies)[0] | null>(null);

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
            We design and build custom pneumatic assemblies for specialised industrial applications.
            Click any image to enlarge.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {assemblies.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.4 }}
              className="group cursor-pointer"
              onClick={() => setLightbox(item)}
            >
              <div className="aspect-[4/3] rounded-xl overflow-hidden relative mb-3 border border-border shadow-sm group-hover:shadow-md transition-shadow">
                <img
                  src={item.images[0]}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/50 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Multi-image badge */}
                {item.images.length > 1 && (
                  <div className="absolute top-2 right-2 bg-black/55 text-white text-xs px-2 py-0.5 rounded font-medium">
                    +{item.images.length - 1} more
                  </div>
                )}
              </div>

              <h3 className="text-sm font-bold text-primary leading-tight group-hover:text-accent transition-colors">
                {item.title}
              </h3>
              <p className="text-xs text-foreground/50 mt-0.5">{item.subtitle}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && <Lightbox item={lightbox} onClose={() => setLightbox(null)} />}
      </AnimatePresence>
    </section>
  );
}
