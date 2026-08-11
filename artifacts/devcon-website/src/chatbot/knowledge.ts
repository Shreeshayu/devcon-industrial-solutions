export interface KnowledgeEntry {
  intent: string;
  keywords: string[];
  response: string;
}
export const knowledge: KnowledgeEntry[] = [
  {
    intent: "GREETING",
    keywords: [
      "hello",
      "hi",
      "hey",
      "greetings",
      "good morning",
      "good afternoon",
      "good evening",
      "start",
      "help",
    ],
    response:
      "Hello! 👋 Welcome to Devcon Industrial Solutions. I can help you with information about our products (SMC, Bray, L&T Valves, Darshana), custom assemblies, industries we serve, and how to get in touch. What would you like to know?",
  },
  {
    intent: "COMPANY",
    keywords: [
      "devcon",
      "company",
      "about",
      "who are you",
      "founded",
      "history",
      "experience",
    ],
    response:
      "Devcon Industrial Solutions is a Goa-based industrial automation dealer with 20+ years of experience, founded by Mr. Deviprasad. We are the authorised distributor for SMC Corporation, Bray Controls, L&T Valves, and Darshana Industries. We specialise in pneumatic automation, valve solutions, and machine tool accessories for manufacturers across Goa and beyond.",
  },
  {
    intent: "PRODUCTS",

    keywords: [
      "product",
      "products",
      "catalog",
      "catalogue",
      "catalogs",
      "what do you sell",
      "show products",
      "show your products",
      "product list",
      "available products",
      "automation products",
      "industrial products",
      "solutions",
      "items",
      "portfolio",
      "range",
    ],

    response: `We supply a complete range of industrial automation products.

  🔹 SMC Pneumatic Products
  • Air Cylinders
  • Solenoid Valves
  • FRL Units
  • Vacuum Equipment
  • Sensors
  • Tubing & Fittings
  • Electric Actuators

  🔹 Bray Controls
  • Butterfly Valves
  • Ball Valves
  • Check Valves
  • Pneumatic Actuators

  🔹 L&T Valves
  • Gate Valves
  • Globe Valves
  • Ball Valves
  • Plug Valves

  🔹 Darshana Industries
  • Handles
  • Hinges
  • Panel Locks
  • Machine Tool Accessories

  We also design custom pneumatic assemblies based on your application.

  👉 Which product are you looking for?`,
  },
  {
    intent: "SMC",
    keywords: ["smc", "pneumatic", "smccorporation"],
    response:
      "SMC Corporation is the world's No.1 pneumatic brand (~30% global market share). As their authorised distributor in Goa, we supply:\n• Directional Control Valves (SY, VQ, S series)\n• Air Cylinders (round, compact, guided, rodless)\n• Rotary Actuators & Air Grippers\n• Electric Actuators\n• Vacuum Equipment (ejectors, pads, cups)\n• Air Preparation / FRL units\n• Fittings & Tubing\n• Sensors & Controllers\n• Process Valves & Diaphragm Pumps\n\nNeed a specific SMC part? Share your requirement!",
  },
  {
    intent: "CYLINDERS",
    keywords: [
      "cylinder",
      "air cylinder",
      "pneumatic cylinder",
      "bore",
      "stroke",
      "rodless",
    ],
    response:
      "SMC Air Cylinders are available in a wide range:\n• Standard Bore Cylinders (CA2, C96, C85 series)\n• Compact Cylinders (CJ2, CQ2, CM2 series)\n• Guided & Non-rotating Cylinders\n• Rodless Cylinders (CY, MY series)\n• Dual Stroke & Special Purpose Cylinders\n• Micro Cylinders\n\nAvailable in bore sizes from 4mm to 320mm. What size/type do you need?",
  },
  {
    intent: "VALVE",
    keywords: [
      "directional",
      "control valve",
      "solenoid valve",
      "sy series",
      "vq series",
      "5/2",
      "5/3",
      "3/2",
      "manifold",
    ],
    response:
      "SMC Directional Control Valves we supply:\n• SY Series – High speed, low power, plug-in type\n• VQ Series – Large flow, space-saving\n• S070 Series – Ultra-compact\n• SV Series – Direct operated\n• VP, VF Series – General purpose\n• VQZ, VQD Series – Stainless steel\n\nAll available as individual valves or as multi-station manifold assemblies.",
  },
  {
    intent: "actuator",
    keywords: ["actuator", "rotary", "gripper", "electric actuator"],
    response:
      "SMC Actuators we supply:\n• Rotary Actuators (CRB, CRBU, MSQB series)\n• Air Grippers (MHZ, MH, MHC series)\n• Electric Actuators / Servo Cylinders (LEF, LEY, LEJ series)\n• Rack & Pinion Rotary Actuators\n\nElectric actuators are ideal for precise positioning without air supply.",
  },
  {
    intent: "vaccum",
    keywords: ["vacuum", "suction", "ejector", "cup", "pad", "pick and place"],
    response:
      "SMC Vacuum Equipment we supply:\n• Vacuum Ejectors (ZH, ZU, ZM, ZL series)\n• Vacuum Pads & Cups (ZP, ZPT series)\n• Multi-stage Ejectors for high flow\n• Vacuum Switches & Sensors\n• Vacuum Filters\n\nIdeal for pick-and-place, glass handling, cardboard, film, and semiconductor applications.",
  },
  {
    intent: "frl",
    keywords: [
      "frl",
      "filter",
      "regulator",
      "lubricator",
      "air preparation",
      "dryer",
      "moisture",
      "clean air",
    ],
    response:
      "SMC Air Preparation Equipment we supply:\n• Air Filters (AF, AMD, AME series – particulate & oil mist)\n• Pressure Regulators (AR, ARP, ARG series)\n• Lubricators (AL, ALF series)\n• Modular FRL combinations (AC, AW, AHM series)\n• Refrigerated & Membrane Air Dryers\n\nEssential for protecting pneumatic equipment and ensuring consistent performance.",
  },
  {
    intent: "fitting",
    keywords: [
      "fitting",
      "tube",
      "tubing",
      "push-in",
      "push in",
      "kq",
      "connector",
      "polyurethane",
      "nylon",
    ],
    response:
      "SMC Fittings & Tubing we supply:\n• One-touch Push-in Fittings (KQ2 series – most popular)\n• Stainless Steel Fittings (KQ2 SS)\n• Flame-Retardant Fittings\n• Miniature Fittings (M-series)\n• Polyurethane, Nylon & Anti-static Tubing\n• Sizes from 2mm to 16mm OD\n\nKQ2 fittings are the industry standard for quick, leak-free connections.",
  },
  {
    intent: "sensors",
    keywords: [
      "sensor",
      "switch",
      "auto switch",
      "pressure switch",
      "flow switch",
      "controller",
    ],
    response:
      "SMC Sensors & Controls we supply:\n• Auto-switches for Cylinders (D-A, D-F, D-M, D-H series)\n• Digital Pressure Switches (ZSE, ISE series)\n• Flow Switches (PF series)\n• Vacuum Sensors\n• Temperature Controllers\n• IO-Link compatible devices for Industry 4.0\n\nAuto-switches are available in reed, solid-state, and water-proof variants.",
  },
  {
    intent: "process",
    keywords: ["process valve", "diaphragm", "pump", "hydraulic"],
    response:
      "SMC Process & Specialty Products we supply:\n• Process Valves (VXB, VXD, VXZ series – 2-port/3-port)\n• Diaphragm Pumps (PA, PB series)\n• Hydraulic Cylinders & Components\n• Temperature Control Equipment (HRS, HRZ series chiller units)\n\nThese are widely used in food, pharma, semiconductor, and chemical processes.",
  },
  {
    intent: "bray",
    keywords: ["bray", "butterfly valve", "bray controls"],
    response:
      "Bray Controls manufactures precision flow control valves. As their authorised distributor, we supply:\n• Butterfly Valves (Series 30/31 wafer/lug, Series 40 double-flanged)\n• High-Performance Butterfly Valves (Series 20, Series 36)\n• Ball Valves\n• Check Valves\n• Angle Body Valves\n• Knife-Edge Gate Valves\n• Pneumatic & Electric Actuators\n\nBray valves are used in water treatment, chemical, HVAC, and food & beverage industries.",
  },
  {
    intent: "LT",
    keywords: [
      "l&t",
      "lt valves",
      "larsen",
      "gate valve",
      "globe valve",
      "plug valve",
      "oil gas",
    ],
    response:
      "L&T Valves (Larsen & Toubro) — high-integrity industrial valves for critical applications. We supply:\n• Gate Valves\n• Globe Valves\n• Ball Valves\n• Butterfly Valves\n• Check Valves (swing, nozzle, tilting disc)\n• Plug Valves\n• Pneumatically Actuated Valves\n\nUsed in Oil & Gas, Power Generation, Petrochemicals, Defence, and Aerospace sectors.",
  },
  {
    intent: "darshana",
    keywords: [
      "darshana",
      "handle",
      "hinge",
      "lock",
      "gasket",
      "panel hardware",
      "machine tool accessory",
      "aluminium",
      "conveyor",
    ],
    response:
      "Darshana Industries — machine tool accessories & panel hardware. We supply:\n• Handles & Grips (various styles)\n• Panel Locks & 3-Point Locks\n• Hinges (heavy-duty & standard)\n• Gaskets & Seals\n• Clamping Connectors\n• Flexible Mountings\n• Conveyor Accessories\n• Aluminium Section Hardware\n• Cable Management Systems\n• Console & Support Arm Systems",
  },
  {
    intent: "custom",
    keywords: [
      "custom",
      "assembly",
      "fabricat",
      "engineer",
      "panel",
      "special",
      "bespoke",
    ],
    response:
      "We design and build custom pneumatic assemblies! Our completed projects include:\n• Multi-station valve manifolds (5 to 20+ stations)\n• Pneumatic control panels for paint booths\n• Dual stroke dual rod cylinders for Bobst printing machines\n• Air pressure booster assemblies with reservoirs\n• Jacketed ball valves with pneumatic actuators\n• Valve manifolds for Komori printing and blow moulding machines\n\nShare your application requirements and we'll engineer the right solution.",
  },
  {
    keywords: ["industr", "sector", "serve", "application"],
    response:
      "Devcon serves 12+ industries across Goa:\n🍕 Food Processing\n💊 Pharmaceuticals\n🖨️ Printing (Komori, Bobst, etc.)\n📦 Packaging\n🧪 Plastics & Injection Moulding\n⛏️ Mining\n🔩 Metallurgy & Steel\n💻 Electronics Manufacturing\n🏥 Medical Equipment\n⚡ Power Generation\n🌱 Fertilizer\n🧬 Chemical & Petrochemical\n\nWhich industry are you from?",
  },
  {
    intent: "contact",
    keywords: [
      "contact",
      "phone",
      "call",
      "email",
      "address",
      "location",
      "where",
      "goa",
      "porvorim",
      "reach",
    ],
    response:
      "📍 GF-1, Plot No. 135,406/243, PDA Colony, Alto Porvorim, North Goa – 403521\n📞 +91 7738383322\n📧 devconsalesgoa@gmail.com\n🏢 GST: 30AHLPR3428B1ZQ\n\nWe're available Monday–Saturday. You can also use the Contact form at the bottom of this page to send your requirements directly.",
  },
  {
    intent: "quote",
    keywords: [
      "quote",
      "price",
      "cost",
      "how much",
      "enquir",
      "order",
      "buy",
      "purchase",
      "rate",
    ],
    response:
      "To get a quote:\n1️⃣ Scroll to the Contact section on this page\n2️⃣ Fill in the 'Request a Quote' form with your requirements\n3️⃣ We'll respond within 24 hours with competitive pricing\n\nOr call us directly: 📞 +91 7738383322\nOr email: 📧 devconsalesgoa@gmail.com",
  },
  {
    intent: "delivery",
    keywords: [
      "delivery",
      "lead time",
      "stock",
      "available",
      "in stock",
      "supply",
    ],
    response:
      "We maintain stock of fast-moving SMC items (popular valve series, fittings, cylinders) for quick delivery within Goa. For other items and special sizes, typical lead time is 3–7 working days from our Mumbai/Pune warehouse. For critical requirements, call us at +91 7738383322 and we'll check availability immediately.",
  },
  {
    intent: "authorised",
    keywords: [
      "authoris",
      "authoriz",
      "genuine",
      "original",
      "certified",
      "distributor",
      "dealer",
    ],
    response:
      "Yes, Devcon Industrial Solutions is the authorised distributor for all brands we represent:\n✅ SMC Corporation (India) Pvt Ltd\n✅ Bray Controls\n✅ L&T Valves\n✅ Darshana Industries\n\nThis means you receive 100% genuine products with full manufacturer warranty, official technical support, and proper documentation.",
  },
  {
    intent: "warranty",
    keywords: [
      "warranty",
      "guarantee",
      "service",
      "repair",
      "maintenance",
      "amc",
      "after sales",
    ],
    response:
      "All products sold by Devcon come with the manufacturer's warranty. We also offer:\n• Technical support & troubleshooting guidance\n• Site visits for pneumatic system audits\n• Assistance with product selection & application engineering\n• Coordination with manufacturer for warranty claims\n\nFor support, call +91 7738383322 or email devconsalesgoa@gmail.com.",
  },
  {
    intent: "thanks",
    keywords: [
      "thank",
      "thanks",
      "great",
      "perfect",
      "good",
      "helpful",
      "awesome",
      "bye",
      "goodbye",
    ],
    response:
      "You're welcome! 😊 If you have any more questions or need a quote, feel free to ask or use the Contact form. We're happy to help! — Team Devcon",
  },
];
