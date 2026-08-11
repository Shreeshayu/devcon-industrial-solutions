export interface Intent {
  name: string;
  keywords: string[];
}

export const INTENTS: Intent[] = [
  {
    name: "GREETING",
    keywords: [
      "hello",
      "hi",
      "hey",
      "good morning",
      "good afternoon",
      "good evening",
      "greetings",
    ],
  },
  {
    name: "THANKS",
    keywords: [
      "thanks",
      "thank you",
      "thankyou",
      "thanks a lot",
      "appreciate it",
      "great",
      "awesome",
    ],
  },
  {
    name: "GOODBYE",
    keywords: [
      "bye",
      "goodbye",
      "see you",
      "see you later",
      "talk later",
      "take care",
      "have a nice day",
    ],
  },
  {
    name: "COMPANY",
    keywords: [
      "devcon",
      "company",
      "about",
      "about devcon",
      "who are you",
      "what is devcon",
      "tell me about your company",
      "company profile",
      "business",
    ],
  },
  {
    name: "CYLINDER",
    keywords: [
      "cylinder",
      "cylinders",
      "air cylinder",
      "compact cylinder",
      "guided cylinder",
      "rodless cylinder",
    ],
  },

  {
    name: "VALVE",
    keywords: [
      "valve",
      "valves",
      "solenoid valve",
      "process valve",
      "directional valve",
    ],
  },

  {
    name: "SENSORS",
    keywords: ["sensor", "sensors", "pressure sensor", "flow sensor", "switch"],
  },

  {
    name: "FRL",
    keywords: ["frl", "filter", "regulator", "lubricator", "air preparation"],
  },

  {
    name: "VACUUM",
    keywords: ["vacuum", "vacuum equipment", "vacuum generator", "vacuum pad"],
  },

  {
    name: "FITTINGS",
    keywords: ["fittings", "tubing", "tube", "connector", "coupling"],
  },
  {
    name: "SMC",
    keywords: [
      "smc",
      "smc products",
      "smc pneumatic",
      "smc corporation",
      "smc valves",
      "smc cylinders",
    ],
  },

  {
    name: "BRAY",
    keywords: [
      "bray",
      "bray controls",
      "bray valves",
      "butterfly valve",
      "ball valve",
    ],
  },

  {
    name: "LT",
    keywords: ["l&t", "lt", "l&t valves", "lt valves"],
  },

  {
    name: "DARSHANA",
    keywords: [
      "darshana",
      "darshana industries",
      "handles",
      "hinges",
      "panel locks",
    ],
  },
  {
    name: "SERVICES",
    keywords: [
      "service",
      "services",
      "support",
      "maintenance",
      "installation",
      "commissioning",
      "repair",
      "technical support",
    ],
  },

  {
    name: "DELIVERY",
    keywords: [
      "delivery",
      "shipping",
      "dispatch",
      "courier",
      "deliver",
      "lead time",
    ],
  },

  {
    name: "WARRANTY",
    keywords: ["warranty", "guarantee", "replacement"],
  },
  {
    name: "INDUSTRIES",
    keywords: [
      "industry",
      "industries",
      "manufacturing",
      "factory",
      "plant",
      "automation",
    ],
  },

  {
    name: "FOOD",
    keywords: ["food", "food processing", "beverage", "dairy"],
  },

  {
    name: "PHARMA",
    keywords: ["pharma", "pharmaceutical", "medicine", "clean room"],
  },

  {
    name: "PACKAGING",
    keywords: ["packaging", "packing", "packaging machine"],
  },
  {
    name: "REQUEST_QUOTE",
    keywords: [
      "request quote",
      "request quotation",
      "get quote",
      "need quote",
      "send quotation",
      "quotation request",
    ],
  },

  {
    name: "CALL",
    keywords: ["call", "phone", "telephone", "mobile number", "contact number"],
  },

  {
    name: "EMAIL",
    keywords: ["email", "mail", "email address", "send email"],
  },
  {
    name: "PRODUCTS",
    keywords: [
      "product",
      "products",
      "catalog",
      "catalogue",
      "catalogs",
      "show products",
      "show your products",
      "product list",
      "available products",
      "what do you sell",
      "automation products",
      "industrial products",
      "solutions",
      "items",
      "portfolio",
    ],
  },

  {
    name: "CONTACT",
    keywords: [
      "contact",
      "phone",
      "call",
      "mobile",
      "email",
      "address",
      "location",
      "reach",
    ],
  },

  {
    name: "QUOTE",
    keywords: [
      "quote",
      "quotation",
      "pricing",
      "price",
      "cost",
      "estimate",
      "buy",
      "purchase",
    ],
  },
];
