import React, { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, FileText, Send, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Turnstile } from "@marsidev/react-turnstile";
declare global {
  interface Window {
    turnstile: any;
  }
}

const FORMSPREE_ID = "mjybwgqo";

async function submitToFormspree(
  data: Record<string, unknown>,
  toast: ReturnType<typeof useToast>["toast"],
): Promise<boolean> {
  if (!FORMSPREE_ID) {
    toast({
      title: "Configuration Error",
      description:
        "Form endpoint not configured. Please contact us directly by email.",
      variant: "destructive",
      duration: 6000,
    });
    return false;
  }
  const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
    method: "POST",
    headers: { Accept: "application/json", "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) {
    const json = (await res.json().catch(() => ({}))) as { error?: string };

    throw new Error(json.error || "Submission failed");
  }
  return true;
}

/* ── Star Rating widget ── */
function StarRating({
  value,
  onChange,
}: {
  value: number;
  onChange: (v: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  const labels = ["", "Poor", "Fair", "Good", "Very Good", "Excellent"];
  return (
    <div className="flex flex-col gap-1">
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            onClick={() => onChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            className="p-0.5 transition-transform hover:scale-110 focus:outline-none"
            aria-label={`Rate ${star} star${star > 1 ? "s" : ""}`}
          >
            <Star
              className={`w-7 h-7 transition-colors ${
                star <= (hovered || value)
                  ? "fill-accent text-accent"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
        {(hovered || value) > 0 && (
          <span className="ml-2 text-sm font-semibold text-accent">
            {labels[hovered || value]}
          </span>
        )}
      </div>
    </div>
  );
}

export default function Contact() {
  const { toast } = useToast();
  /* Quote form */
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [quoteCaptcha, setQuoteCaptcha] = useState("");

  const handleQuoteSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!quoteCaptcha) {
      toast({
        title: "Verification Required",
        description: "Please verify that you're human.",
        variant: "destructive",
      });
      return;
    }
    setIsSubmitting(true);
    const form = e.target as HTMLFormElement;
    const data = {
      ...Object.fromEntries(new FormData(form)),
      _subject: "Quote Request — Devcon Industrial Solutions",
    };
    try {
      await submitToFormspree(data, toast);
      form.reset();
      toast({
        title: "Quotation Request Submitted",
        description:
          "Thank you! We've received your request. Our sales team will contact you within 24 business hours.",
        duration: 6000,
      });
    } catch {
      toast({
        title: "Could not send message",
        description: "Please email us directly at devconsalesgoa@gmail.com",
        variant: "destructive",
        duration: 8000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  /* Feedback form */
  const [rating, setRating] = useState(0);
  const [feedbackSubmitting, setFeedbackSubmitting] = useState(false);
  const [feedbackCaptcha, setFeedbackCaptcha] = useState("");

  const handleFeedbackSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!feedbackCaptcha) {
      toast({
        title: "Verification Required",
        description: "Please verify that you're human.",
        variant: "destructive",
      });
      return;
    }
    if (rating === 0) {
      toast({
        title: "Please select a star rating",
        variant: "destructive",
        duration: 3000,
      });
      return;
    }
    setFeedbackSubmitting(true);
    const form = e.target as HTMLFormElement;
    const fields = Object.fromEntries(new FormData(form));
    const data = {
      ...fields,
      rating: `${rating}/5`,
      _subject: `Customer Feedback (${rating}★) — Devcon Industrial Solutions`,
    };
    try {
      await submitToFormspree(data, toast);
      form.reset();
      setRating(0);
      toast({
        title: "Thank you for your feedback! 🙏",
        description: "Your response has been recorded.",
        duration: 6000,
      });
    } catch {
      toast({
        title: "Could not submit feedback",
        description: "Please email us directly at devconsalesgoa@gmail.com",
        variant: "destructive",
        duration: 8000,
      });
    } finally {
      setFeedbackSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        {/* ── Top row: info + map + quote form ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Info & Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-8"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-primary mb-4">
                Get in Touch
              </h2>
              <p className="text-lg text-foreground/70 mb-8">
                Ready to optimise your plant's efficiency? Contact us for
                quotes, technical support, or site visits.
              </p>

              <div className="space-y-6">
                <a
                  href="https://www.google.com/maps/place/Devcon+Industrial+Solutions/@15.5262231,73.8233511,17z/data=!3m1!4b1!4m6!3m5!1s0x3bbfc06cc5cf2f05:0xf9864e1dccfded63!8m2!3d15.5262179!4d73.825926!16s%2Fg%2F11tbz5b0p8?entry=ttu&g_ep=EgoyMDI2MDgxMi4wIKXMDSoASAFQAw%3D%3D"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary border border-border">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Office Address</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      GF-1, Plot No. 135,406/243,
                      <br />
                      PDA Colony, Alto Porvorim,
                      <br />
                      North Goa, Goa-403521
                    </p>
                  </div>
                </a>

                <a
                  href="tel:+917738383322"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary border border-border">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Phone</h4>
                    <p className="text-foreground/70">+91 7738383322</p>
                  </div>
                </a>

                <a
                  href="mailto:devconsalesgoa@gmail.com"
                  className="flex items-start gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary border border-border">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Email</h4>
                    <p className="text-foreground/70">
                      devconsalesgoa@gmail.com
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-border">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">GST Number</h4>
                    <p className="text-foreground/70 font-mono">
                      30AHLPR3428B1ZQ
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            {/* Map Embed */}
<div className="w-full h-64 rounded-xl overflow-hidden border border-border shadow-sm">
  <iframe
    src="https://www.google.com/maps?q=15.5262179,73.825926&z=17&output=embed"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
    title="Devcon Office Location Map"
  />
</div>
          </motion.div>

          {/* Quote Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-border"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">
              Request a Quote
            </h3>

            <form onSubmit={handleQuoteSubmit} className="space-y-5">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  name="name"
                  placeholder="John Doe"
                  required
                  className="bg-muted/50 border-border"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@company.com"
                    required
                    className="bg-muted/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+91 XXXXX XXXXX"
                    required
                    className="bg-muted/50 border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="company">Company / Plant Name</Label>
                <Input
                  id="company"
                  name="company"
                  placeholder="Acme Industries Pvt Ltd"
                  className="bg-muted/50 border-border"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message / Requirements</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about the parts you need or the problem you're trying to solve..."
                  rows={4}
                  required
                  className="bg-muted/50 border-border resize-none"
                />
                <Turnstile
                  siteKey="0x4AAAAAAEM0z5ZeH37-IbLQ"
                  onSuccess={(token) => setQuoteCaptcha(token)}
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12"
                disabled={isSubmitting || !quoteCaptcha}
              >
                {isSubmitting ? (
                  "Sending…"
                ) : (
                  <>
                    <Send className="w-4 h-4 mr-2" /> Send Message
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>

        {/* ── Feedback / Review section ── */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-border p-8">
            <div className="flex items-center gap-3 mb-2">
              <Star className="w-6 h-6 text-accent fill-accent" />
              <h3 className="text-2xl font-bold text-primary">
                Share Your Feedback
              </h3>
            </div>
            <p className="text-foreground/60 text-sm mb-6">
              Worked with us? We'd love to hear about your experience — your
              feedback helps us serve you better.
            </p>

            <form onSubmit={handleFeedbackSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="fb-name">Your Name</Label>
                  <Input
                    id="fb-name"
                    name="name"
                    placeholder="Ramesh Sharma"
                    required
                    className="bg-muted/50 border-border"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="fb-company">Company (optional)</Label>
                  <Input
                    id="fb-company"
                    name="company"
                    placeholder="ABC Industries"
                    className="bg-muted/50 border-border"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label>Overall Rating</Label>
                <StarRating value={rating} onChange={setRating} />
              </div>

              <div className="space-y-2">
                <Label htmlFor="fb-feedback">Your Feedback</Label>
                <Textarea
                  id="fb-feedback"
                  name="feedback"
                  placeholder="What did you like? What could we improve? Any specific experience you'd like to share..."
                  rows={4}
                  required
                  className="bg-muted/50 border-border resize-none"
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-accent text-primary hover:bg-accent/90 font-bold h-11"
                disabled={feedbackSubmitting}
              >
                {feedbackSubmitting ? (
                  "Submitting…"
                ) : (
                  <>
                    <Star className="w-4 h-4 mr-2" /> Submit Feedback
                  </>
                )}
              </Button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
