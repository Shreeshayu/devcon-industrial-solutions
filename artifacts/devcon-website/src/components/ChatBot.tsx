import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User, ChevronDown } from 'lucide-react';

/* ─── Knowledge base ─────────────────────────────────────────── */
interface KnowledgeEntry {
  keywords: string[];
  response: string;
}

const knowledge: KnowledgeEntry[] = [
  {
    keywords: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening', 'start', 'help'],
    response: "Hello! 👋 Welcome to Devcon Industrial Solutions. I can help you with information about our products (SMC, Bray, L&T Valves, Darshana), custom assemblies, industries we serve, and how to get in touch. What would you like to know?",
  },
  {
    keywords: ['devcon', 'company', 'about', 'who are you', 'founded', 'history', 'experience'],
    response: "Devcon Industrial Solutions is a Goa-based industrial automation dealer with 20+ years of experience, founded by Mr. Deviprasad. We are the authorised distributor for SMC Corporation, Bray Controls, L&T Valves, and Darshana Industries. We specialise in pneumatic automation, valve solutions, and machine tool accessories for manufacturers across Goa and beyond.",
  },
  {
    keywords: ['smc', 'pneumatic', 'smccorporation'],
    response: "SMC Corporation is the world's No.1 pneumatic brand (~30% global market share). As their authorised distributor in Goa, we supply:\n• Directional Control Valves (SY, VQ, S series)\n• Air Cylinders (round, compact, guided, rodless)\n• Rotary Actuators & Air Grippers\n• Electric Actuators\n• Vacuum Equipment (ejectors, pads, cups)\n• Air Preparation / FRL units\n• Fittings & Tubing\n• Sensors & Controllers\n• Process Valves & Diaphragm Pumps\n\nNeed a specific SMC part? Share your requirement!",
  },
  {
    keywords: ['cylinder', 'air cylinder', 'pneumatic cylinder', 'bore', 'stroke', 'rodless'],
    response: "SMC Air Cylinders are available in a wide range:\n• Standard Bore Cylinders (CA2, C96, C85 series)\n• Compact Cylinders (CJ2, CQ2, CM2 series)\n• Guided & Non-rotating Cylinders\n• Rodless Cylinders (CY, MY series)\n• Dual Stroke & Special Purpose Cylinders\n• Micro Cylinders\n\nAvailable in bore sizes from 4mm to 320mm. What size/type do you need?",
  },
  {
    keywords: ['directional', 'control valve', 'solenoid valve', 'sy series', 'vq series', '5/2', '5/3', '3/2', 'manifold'],
    response: "SMC Directional Control Valves we supply:\n• SY Series – High speed, low power, plug-in type\n• VQ Series – Large flow, space-saving\n• S070 Series – Ultra-compact\n• SV Series – Direct operated\n• VP, VF Series – General purpose\n• VQZ, VQD Series – Stainless steel\n\nAll available as individual valves or as multi-station manifold assemblies.",
  },
  {
    keywords: ['actuator', 'rotary', 'gripper', 'electric actuator'],
    response: "SMC Actuators we supply:\n• Rotary Actuators (CRB, CRBU, MSQB series)\n• Air Grippers (MHZ, MH, MHC series)\n• Electric Actuators / Servo Cylinders (LEF, LEY, LEJ series)\n• Rack & Pinion Rotary Actuators\n\nElectric actuators are ideal for precise positioning without air supply.",
  },
  {
    keywords: ['vacuum', 'suction', 'ejector', 'cup', 'pad', 'pick and place'],
    response: "SMC Vacuum Equipment we supply:\n• Vacuum Ejectors (ZH, ZU, ZM, ZL series)\n• Vacuum Pads & Cups (ZP, ZPT series)\n• Multi-stage Ejectors for high flow\n• Vacuum Switches & Sensors\n• Vacuum Filters\n\nIdeal for pick-and-place, glass handling, cardboard, film, and semiconductor applications.",
  },
  {
    keywords: ['frl', 'filter', 'regulator', 'lubricator', 'air preparation', 'dryer', 'moisture', 'clean air'],
    response: "SMC Air Preparation Equipment we supply:\n• Air Filters (AF, AMD, AME series – particulate & oil mist)\n• Pressure Regulators (AR, ARP, ARG series)\n• Lubricators (AL, ALF series)\n• Modular FRL combinations (AC, AW, AHM series)\n• Refrigerated & Membrane Air Dryers\n\nEssential for protecting pneumatic equipment and ensuring consistent performance.",
  },
  {
    keywords: ['fitting', 'tube', 'tubing', 'push-in', 'push in', 'kq', 'connector', 'polyurethane', 'nylon'],
    response: "SMC Fittings & Tubing we supply:\n• One-touch Push-in Fittings (KQ2 series – most popular)\n• Stainless Steel Fittings (KQ2 SS)\n• Flame-Retardant Fittings\n• Miniature Fittings (M-series)\n• Polyurethane, Nylon & Anti-static Tubing\n• Sizes from 2mm to 16mm OD\n\nKQ2 fittings are the industry standard for quick, leak-free connections.",
  },
  {
    keywords: ['sensor', 'switch', 'auto switch', 'pressure switch', 'flow switch', 'controller'],
    response: "SMC Sensors & Controls we supply:\n• Auto-switches for Cylinders (D-A, D-F, D-M, D-H series)\n• Digital Pressure Switches (ZSE, ISE series)\n• Flow Switches (PF series)\n• Vacuum Sensors\n• Temperature Controllers\n• IO-Link compatible devices for Industry 4.0\n\nAuto-switches are available in reed, solid-state, and water-proof variants.",
  },
  {
    keywords: ['process valve', 'diaphragm', 'pump', 'hydraulic'],
    response: "SMC Process & Specialty Products we supply:\n• Process Valves (VXB, VXD, VXZ series – 2-port/3-port)\n• Diaphragm Pumps (PA, PB series)\n• Hydraulic Cylinders & Components\n• Temperature Control Equipment (HRS, HRZ series chiller units)\n\nThese are widely used in food, pharma, semiconductor, and chemical processes.",
  },
  {
    keywords: ['bray', 'butterfly valve', 'bray controls'],
    response: "Bray Controls manufactures precision flow control valves. As their authorised distributor, we supply:\n• Butterfly Valves (Series 30/31 wafer/lug, Series 40 double-flanged)\n• High-Performance Butterfly Valves (Series 20, Series 36)\n• Ball Valves\n• Check Valves\n• Angle Body Valves\n• Knife-Edge Gate Valves\n• Pneumatic & Electric Actuators\n\nBray valves are used in water treatment, chemical, HVAC, and food & beverage industries.",
  },
  {
    keywords: ['l&t', 'lt valves', 'larsen', 'gate valve', 'globe valve', 'plug valve', 'oil gas'],
    response: "L&T Valves (Larsen & Toubro) — high-integrity industrial valves for critical applications. We supply:\n• Gate Valves\n• Globe Valves\n• Ball Valves\n• Butterfly Valves\n• Check Valves (swing, nozzle, tilting disc)\n• Plug Valves\n• Pneumatically Actuated Valves\n\nUsed in Oil & Gas, Power Generation, Petrochemicals, Defence, and Aerospace sectors.",
  },
  {
    keywords: ['darshana', 'handle', 'hinge', 'lock', 'gasket', 'panel hardware', 'machine tool accessory', 'aluminium', 'conveyor'],
    response: "Darshana Industries — machine tool accessories & panel hardware. We supply:\n• Handles & Grips (various styles)\n• Panel Locks & 3-Point Locks\n• Hinges (heavy-duty & standard)\n• Gaskets & Seals\n• Clamping Connectors\n• Flexible Mountings\n• Conveyor Accessories\n• Aluminium Section Hardware\n• Cable Management Systems\n• Console & Support Arm Systems",
  },
  {
    keywords: ['custom', 'assembly', 'fabricat', 'engineer', 'panel', 'special', 'bespoke'],
    response: "We design and build custom pneumatic assemblies! Our completed projects include:\n• Multi-station valve manifolds (5 to 20+ stations)\n• Pneumatic control panels for paint booths\n• Dual stroke dual rod cylinders for Bobst printing machines\n• Air pressure booster assemblies with reservoirs\n• Jacketed ball valves with pneumatic actuators\n• Valve manifolds for Komori printing and blow moulding machines\n\nShare your application requirements and we'll engineer the right solution.",
  },
  {
    keywords: ['industr', 'sector', 'serve', 'application'],
    response: "Devcon serves 12+ industries across Goa:\n🍕 Food Processing\n💊 Pharmaceuticals\n🖨️ Printing (Komori, Bobst, etc.)\n📦 Packaging\n🧪 Plastics & Injection Moulding\n⛏️ Mining\n🔩 Metallurgy & Steel\n💻 Electronics Manufacturing\n🏥 Medical Equipment\n⚡ Power Generation\n🌱 Fertilizer\n🧬 Chemical & Petrochemical\n\nWhich industry are you from?",
  },
  {
    keywords: ['contact', 'phone', 'call', 'email', 'address', 'location', 'where', 'goa', 'porvorim', 'reach'],
    response: "📍 GF-1, Plot No. 135,406/243, PDA Colony, Alto Porvorim, North Goa – 403521\n📞 +91 7738383322\n📧 devconsalesgoa@gmail.com\n🏢 GST: 30AHLPR3428B1ZQ\n\nWe're available Monday–Saturday. You can also use the Contact form at the bottom of this page to send your requirements directly.",
  },
  {
    keywords: ['quote', 'price', 'cost', 'how much', 'enquir', 'order', 'buy', 'purchase', 'rate'],
    response: "To get a quote:\n1️⃣ Scroll to the Contact section on this page\n2️⃣ Fill in the 'Request a Quote' form with your requirements\n3️⃣ We'll respond within 24 hours with competitive pricing\n\nOr call us directly: 📞 +91 7738383322\nOr email: 📧 devconsalesgoa@gmail.com",
  },
  {
    keywords: ['delivery', 'lead time', 'stock', 'available', 'in stock', 'supply'],
    response: "We maintain stock of fast-moving SMC items (popular valve series, fittings, cylinders) for quick delivery within Goa. For other items and special sizes, typical lead time is 3–7 working days from our Mumbai/Pune warehouse. For critical requirements, call us at +91 7738383322 and we'll check availability immediately.",
  },
  {
    keywords: ['authoris', 'authoriz', 'genuine', 'original', 'certified', 'distributor', 'dealer'],
    response: "Yes, Devcon Industrial Solutions is the authorised distributor for all brands we represent:\n✅ SMC Corporation (India) Pvt Ltd\n✅ Bray Controls\n✅ L&T Valves\n✅ Darshana Industries\n\nThis means you receive 100% genuine products with full manufacturer warranty, official technical support, and proper documentation.",
  },
  {
    keywords: ['warranty', 'guarantee', 'service', 'repair', 'maintenance', 'amc', 'after sales'],
    response: "All products sold by Devcon come with the manufacturer's warranty. We also offer:\n• Technical support & troubleshooting guidance\n• Site visits for pneumatic system audits\n• Assistance with product selection & application engineering\n• Coordination with manufacturer for warranty claims\n\nFor support, call +91 7738383322 or email devconsalesgoa@gmail.com.",
  },
  {
    keywords: ['thank', 'thanks', 'great', 'perfect', 'good', 'helpful', 'awesome', 'bye', 'goodbye'],
    response: "You're welcome! 😊 If you have any more questions or need a quote, feel free to ask or use the Contact form. We're happy to help! — Team Devcon",
  },
];

const FALLBACK = "I'm not sure I have the answer to that specific question. For detailed technical queries, please:\n📞 Call: +91 7738383322\n📧 Email: devconsalesgoa@gmail.com\nOr use the Contact form to send your requirements and our team will get back to you within 24 hours.";

function getResponse(input: string): string {
  const lower = input.toLowerCase();
  for (const entry of knowledge) {
    if (entry.keywords.some((kw) => lower.includes(kw))) {
      return entry.response;
    }
  }
  return FALLBACK;
}

/* ─── Types ─────────────────────────────────────────────────────── */
interface Message {
  id: number;
  role: 'bot' | 'user';
  text: string;
  time: string;
}

const GREETING: Message = {
  id: 0,
  role: 'bot',
  text: "👋 Hi there! I'm the Devcon chat assistant. I can answer questions about our products (SMC, Bray, L&T Valves, Darshana), custom assemblies, and more.\n\nHow can I help you today?",
  time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
};

/* ─── Suggested quick questions ─────────────────────────────────── */
const SUGGESTIONS = [
  'What SMC products do you supply?',
  'Tell me about Bray valves',
  'How do I get a quote?',
  'What industries do you serve?',
  'Contact information',
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [input, setInput] = useState('');
  const [typing, setTyping] = useState(false);
  const [dismissed, setDismissed] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll to bottom on new messages
  useEffect(() => {
    if (listRef.current) {
      listRef.current.scrollTop = listRef.current.scrollHeight;
    }
  }, [messages, typing]);

  // Focus input when panel opens
  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;
    const now = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const userMsg: Message = { id: Date.now(), role: 'user', text: text.trim(), time: now };
    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setTyping(true);

    setTimeout(() => {
      const botReply: Message = {
        id: Date.now() + 1,
        role: 'bot',
        text: getResponse(text),
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, botReply]);
      setTyping(false);
    }, 700 + Math.random() * 400);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  return (
    <>
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
        {/* Nudge bubble — shown once before first open */}
        <AnimatePresence>
          {!open && !dismissed && (
            <motion.div
              initial={{ opacity: 0, y: 10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.85 }}
              transition={{ delay: 2, duration: 0.4 }}
              className="bg-white rounded-2xl shadow-lg border border-border px-4 py-2.5 text-sm font-medium text-foreground/80 flex items-center gap-2 max-w-[220px]"
            >
              <span>💬 Ask me anything!</span>
              <button onClick={() => setDismissed(true)} className="text-foreground/40 hover:text-foreground/70 ml-1">
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => { setOpen((v) => !v); setDismissed(true); }}
          className="w-14 h-14 rounded-full bg-primary hover:bg-accent text-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          aria-label="Chat assistant"
        >
          {open
            ? <ChevronDown className="w-6 h-6" />
            : <MessageCircle className="w-6 h-6" />}
        </button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col bg-white"
            style={{ maxHeight: 'calc(100dvh - 120px)' }}
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight">Devcon Assistant</p>
                <p className="text-white/60 text-[11px]">Typically replies instantly</p>
              </div>
              <button
                onClick={() => setOpen(false)}
                className="text-white/60 hover:text-white transition-colors p-1"
                aria-label="Close chat"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Message list */}
            <div ref={listRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 min-h-0">
              {messages.map((msg) => (
                <div key={msg.id} className={`flex gap-2 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                  {msg.role === 'bot' && (
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {msg.role === 'user' && (
                    <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div className={`max-w-[78%] ${msg.role === 'user' ? 'items-end' : 'items-start'} flex flex-col gap-0.5`}>
                    <div
                      className={`px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.role === 'user'
                          ? 'bg-primary text-white rounded-tr-sm'
                          : 'bg-white border border-border text-foreground rounded-tl-sm shadow-sm'
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-foreground/40 px-1">{msg.time}</span>
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {typing && (
                <div className="flex gap-2">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-border rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm">
                    <div className="flex gap-1 items-center">
                      {[0, 1, 2].map((i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 rounded-full bg-primary/40"
                          animate={{ y: [0, -4, 0] }}
                          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Suggestion chips — shown when only the greeting exists */}
            {messages.length === 1 && (
              <div className="px-4 py-2 flex gap-2 flex-wrap border-t border-border bg-white flex-shrink-0">
                {SUGGESTIONS.map((s) => (
                  <button
                    key={s}
                    onClick={() => sendMessage(s)}
                    className="text-[11px] font-medium px-2.5 py-1 rounded-full border border-primary/30 text-primary hover:bg-primary hover:text-white transition-colors"
                  >
                    {s}
                  </button>
                ))}
              </div>
            )}

            {/* Input */}
            <form onSubmit={handleSubmit} className="flex items-center gap-2 px-3 py-3 border-t border-border bg-white flex-shrink-0">
              <input
                ref={inputRef}
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question…"
                className="flex-1 text-sm bg-gray-50 border border-border rounded-full px-4 py-2 outline-none focus:border-primary transition-colors"
              />
              <button
                type="submit"
                disabled={!input.trim() || typing}
                className="w-9 h-9 rounded-full bg-primary hover:bg-accent hover:text-primary text-white flex items-center justify-center disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
