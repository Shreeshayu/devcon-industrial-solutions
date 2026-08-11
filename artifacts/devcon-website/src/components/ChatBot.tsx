import React, { useState, useRef, useEffect } from "react";
import { knowledge } from "../chatbot/knowledge";
import { getResponse } from "../chatbot/chatEngine";
import { motion, AnimatePresence } from "framer-motion";
import { ConversationContext, initialContext } from "../chatbot/context";
import { MessageCircle, X, Send, Bot, User, ChevronDown } from "lucide-react";

/* ─── Knowledge base ─────────────────────────────────────────── */
interface KnowledgeEntry {
  intent: string;
  keywords: string[];
  response: string;
}

const FALLBACK =
  "I'm not sure I have the answer to that specific question. For detailed technical queries, please:\n📞 Call: +91 7738383322\n📧 Email: devconsalesgoa@gmail.com\nOr use the Contact form to send your requirements and our team will get back to you within 24 hours.";

/* ─── Types ─────────────────────────────────────────────────────── */
interface Message {
  id: number;
  role: "bot" | "user";
  text: string;
  time: string;
}

const GREETING: Message = {
  id: 0,
  role: "bot",
  text: "👋 Hi there! I'm the Devcon chat assistant. I can answer questions about our products (SMC, Bray, L&T Valves, Darshana), custom assemblies, and more.\n\nHow can I help you today?",
  time: new Date().toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  }),
};

/* ─── Suggested quick questions ─────────────────────────────────── */
const SUGGESTIONS = [
  "What SMC products do you supply?",
  "Tell me about Bray valves",
  "How do I get a quote?",
  "What industries do you serve?",
  "Contact information",
];

export default function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([GREETING]);
  const [context, setContext] = useState<ConversationContext>(initialContext);
  const [input, setInput] = useState("");
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
    const now = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      text: text.trim(),
      time: now,
    };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setTyping(true);

    setTimeout(
      () => {
        const result = getResponse(text);

        const botReply: Message = {
          id: Date.now() + 1,
          role: "bot",
          text: result.response,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        };
        setContext((prev) => ({
          ...prev,
          lastIntent: result.intent,

          selectedBrand:
            result.intent === "SMC" ||
            result.intent === "BRAY" ||
            result.intent === "LT" ||
            result.intent === "DARSHANA"
              ? result.intent
              : prev.selectedBrand,

          selectedProduct:
            result.intent === "CYLINDER" ||
            result.intent === "VALVE" ||
            result.intent === "SENSORS" ||
            result.intent === "FRL" ||
            result.intent === "VACUUM" ||
            result.intent === "FITTINGS"
              ? result.intent
              : prev.selectedProduct,
          selectedIndustry:
            result.intent === "FOOD" ||
            result.intent === "PHARMA" ||
            result.intent === "PACKAGING" ||
            result.intent === "INDUSTRIES"
              ? result.intent
              : prev.selectedIndustry,
          awaitingResponse:
            context.awaitingResponse === "BORE_SIZE"
              ? "STROKE_LENGTH"
              : context.awaitingResponse === "VALVE_TYPE"
                ? "OPERATING_PRESSURE"
                : result.intent === "CYLINDER"
                  ? "BORE_SIZE"
                  : result.intent === "VALVE"
                    ? "VALVE_TYPE"
                    : null,
        }));
        setMessages((prev) => [...prev, botReply]);
        setTyping(false);
      },
      700 + Math.random() * 400,
    );
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
              <button
                onClick={() => setDismissed(true)}
                className="text-foreground/40 hover:text-foreground/70 ml-1"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        <button
          onClick={() => {
            setOpen((v) => !v);
            setDismissed(true);
          }}
          className="w-14 h-14 rounded-full bg-primary hover:bg-accent text-white hover:text-primary shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center"
          aria-label="Chat assistant"
        >
          {open ? (
            <ChevronDown className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 24, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 28 }}
            className="fixed bottom-24 right-6 z-50 w-[340px] sm:w-[380px] rounded-2xl shadow-2xl border border-border overflow-hidden flex flex-col bg-white"
            style={{ maxHeight: "calc(100dvh - 120px)" }}
          >
            {/* Header */}
            <div className="bg-primary px-4 py-3 flex items-center gap-3 flex-shrink-0">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-white font-bold text-sm leading-tight">
                  Devcon Assistant
                </p>
                <p className="text-white/60 text-[11px]">
                  Typically replies instantly
                </p>
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
            <div
              ref={listRef}
              className="flex-1 overflow-y-auto p-4 space-y-3 bg-gray-50 min-h-0"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex gap-2 ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}
                >
                  {msg.role === "bot" && (
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}
                  {msg.role === "user" && (
                    <div className="w-7 h-7 rounded-full bg-accent flex items-center justify-center flex-shrink-0 mt-0.5">
                      <User className="w-4 h-4 text-primary" />
                    </div>
                  )}
                  <div
                    className={`max-w-[78%] ${msg.role === "user" ? "items-end" : "items-start"} flex flex-col gap-0.5`}
                  >
                    <div
                      className={`px-3 py-2 rounded-2xl text-sm leading-relaxed whitespace-pre-line ${
                        msg.role === "user"
                          ? "bg-primary text-white rounded-tr-sm"
                          : "bg-white border border-border text-foreground rounded-tl-sm shadow-sm"
                      }`}
                    >
                      {msg.text}
                    </div>
                    <span className="text-[10px] text-foreground/40 px-1">
                      {msg.time}
                    </span>
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
                          transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.15,
                          }}
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
            <form
              onSubmit={handleSubmit}
              className="flex items-center gap-2 px-3 py-3 border-t border-border bg-white flex-shrink-0"
            >
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
