import React from "react";
import { motion } from "framer-motion";
import {
  UtensilsCrossed,
  FlaskConical,
  Printer,
  Package2,
  Layers,
  Mountain,
  Flame,
  Cpu,
  HeartPulse,
  Zap,
  Leaf,
  TestTube2,
  TrainFront,
  Microchip,
  Truck,
  Radio,
  Car,
} from "lucide-react";

const industries = [
  {
    name: "Food Processing",
    icon: UtensilsCrossed,
    color: "bg-orange-50 text-orange-600 border-orange-200",
    img: "https://images.unsplash.com/photo-1663841365335-8acab127bf68?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Pharmaceuticals",
    icon: FlaskConical,
    color: "bg-blue-50 text-blue-600 border-blue-200",
    img: "https://images.unsplash.com/photo-1582719471384-894fbb16e074?w=400&h=240&fit=crop&auto=format",
  },
  {
    name: "Printing",
    icon: Printer,
    color: "bg-purple-50 text-purple-600 border-purple-200",
    img: "https://images.unsplash.com/photo-1503694978374-8a2fa686963a?q=80&w=2669&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Packaging",
    icon: Package2,
    color: "bg-yellow-50 text-yellow-700 border-yellow-200",
    img: "https://images.unsplash.com/photo-1553413077-190dd305871c?w=400&h=240&fit=crop&auto=format",
  },
  {
    name: "Plastics",
    icon: Layers,
    color: "bg-teal-50 text-teal-600 border-teal-200",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=240&fit=crop&auto=format",
  },
  {
    name: "Mining",
    icon: Mountain,
    color: "bg-stone-50 text-stone-600 border-stone-200",
    img: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&h=240&fit=crop&auto=format",
  },
  {
    name: "Metallurgy",
    icon: Flame,
    color: "bg-red-50 text-red-600 border-red-200",
    img: "https://images.unsplash.com/photo-1600684249816-38cdfcf95c17?q=80&w=1746&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Electronics",
    icon: Cpu,
    color: "bg-indigo-50 text-indigo-600 border-indigo-200",
    img: "https://images.unsplash.com/photo-1517420704952-d9f39e95b43e?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Medical",
    icon: HeartPulse,
    color: "bg-rose-50 text-rose-600 border-rose-200",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=400&h=240&fit=crop&auto=format",
  },
  {
    name: "Power Generation",
    icon: Zap,
    color: "bg-amber-50 text-amber-600 border-amber-200",
    img: "https://images.unsplash.com/photo-1668097613572-40b7c11c8727?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Fertilizer",
    icon: Leaf,
    color: "bg-green-50 text-green-600 border-green-200",
    img: "https://plus.unsplash.com/premium_photo-1664299647855-09045bcf5bf5?q=80&w=1852&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chemical",
    icon: TestTube2,
    color: "bg-cyan-50 text-cyan-600 border-cyan-200",
    img: "https://plus.unsplash.com/premium_photo-1661956660871-2cd646709c90?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Transportation - Railways",
    icon: TrainFront,
    color: "bg-slate-50 text-slate-600 border-slate-200",
    img: "https://images.unsplash.com/photo-1474487548417-781cb71495f3?w=400&h=240&fit=crop&auto=format",
  },
  {
    name: "Semiconductor",
    icon: Microchip,
    color: "bg-violet-50 text-violet-600 border-violet-200",
    img: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=240&fit=crop&auto=format",
  },
  {
    name: "Earth Moving",
    icon: Truck,
    color: "bg-orange-50 text-orange-700 border-orange-200",
    img: "https://images.unsplash.com/photo-1523882076-45ed041836fd?q=80&w=2060&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Telecom",
    icon: Radio,
    color: "bg-sky-50 text-sky-600 border-sky-200",
    img: "https://images.unsplash.com/photo-1582193607281-dafb7941640f?q=80&w=774&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Automobile",
    icon: Car,
    color: "bg-gray-50 text-gray-600 border-gray-200",
    img: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
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
              A Legacy of Engineering{" "}
              <span className="text-[#0047AB]">Excellence</span>
            </h2>
            <div className="space-y-6 text-lg text-foreground/80 leading-relaxed">
              <p>
                Founded by <strong>Mr. Deviprasad</strong>, Devcon Industrial
                Solutions is built on
                <strong> 20+ years of deep expertise</strong> in automation,
                fluid, and fluid power industries. We don't just sell
                components; we engineer solutions that keep plants running
                efficiently.
              </p>

              <div className="bg-white p-6 rounded-lg border-l-4 border-accent shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Our Mission
                </h3>
                <p className="text-base text-foreground/70">
                  To be the most trusted industrial automation partner by
                  providing technically superior, highly reliable, and
                  cost-effective engineering products.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border-l-4 border-primary shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300">
                <h3 className="text-xl font-bold text-primary mb-2">
                  Our Vision
                </h3>
                <p className="text-base text-foreground/70">
                  To empower manufacturers with the right engineering solutions,
                  ensuring minimal downtime and maximum operational efficiency.
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
                { label: "Experience", value: "20+ Years" },
                { label: "Authorised Brands", value: "3 Top Tier" },
                { label: "Industries Served", value: "24" },
                
              ].map((stat, i) => (
                <div
                  key={i}
                  className="bg-[#EEF1F5] text-primary p-6 rounded-lg text-center flex flex-col justify-center shadow-md border border-primary/10 hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
                >
                  <span className="text-3xl font-extrabold text-[#0047AB] mb-1">
                    {stat.value}
                  </span>
                  <span className="text-sm font-semibold uppercase tracking-wider">
                    {stat.label}
                  </span>
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
                      (e.currentTarget as HTMLImageElement).style.display =
                        "none";
                    }}
                  />
                  <div className="absolute inset-0 bg-primary/30 group-hover:bg-primary/10 transition-colors" />
                </div>
                {/* Label + icon */}
                <div
                  className={`flex flex-col items-center text-center px-2 py-3 gap-1.5 ${ind.color} border-t`}
                >
                  <ind.icon className="w-5 h-5" />
                  <span className="text-xs font-bold leading-tight">
                    {ind.name}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
