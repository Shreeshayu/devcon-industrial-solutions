import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, FileText, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';

export default function Contact() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formId = import.meta.env.VITE_FORMSPREE_ID;
    if (!formId) {
      toast({
        title: "Configuration Error",
        description: "Form endpoint not configured. Please contact us directly by email.",
        variant: "destructive",
        duration: 6000,
      });
      setIsSubmitting(false);
      return;
    }

    const form = e.target as HTMLFormElement;
    const data = Object.fromEntries(new FormData(form));

    try {
      const res = await fetch(`https://formspree.io/f/${formId}`, {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        form.reset();
        toast({
          title: "Message Sent!",
          description: "Thank you! We'll get back to you within 24 hours.",
          duration: 6000,
        });
      } else {
        const json = await res.json().catch(() => ({}));
        throw new Error((json as { error?: string }).error || 'Submission failed');
      }
    } catch (err) {
      toast({
        title: "Could not send message",
        description: "Please try emailing us directly at devconsalesgoa@gmail.com",
        variant: "destructive",
        duration: 8000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-muted">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
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
                Ready to optimize your plant's efficiency? Contact us for quotes, technical support, or site visits.
              </p>
              
              <div className="space-y-6">
                <a href="https://maps.google.com/?q=Alto+Porvorim+North+Goa" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary border border-border">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Office Address</h4>
                    <p className="text-foreground/70 leading-relaxed">
                      GF-1, Plot No. 135,406/243,<br />
                      PDA Colony, Alto Porvorim,<br />
                      North Goa, Goa-403521
                    </p>
                  </div>
                </a>

                <a href="tel:+917738383322" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary border border-border">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Phone</h4>
                    <p className="text-foreground/70">+91 7738383322</p>
                  </div>
                </a>

                <a href="mailto:devconsalesgoa@gmail.com" className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-colors text-primary border border-border">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">Email</h4>
                    <p className="text-foreground/70">devconsalesgoa@gmail.com</p>
                  </div>
                </a>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white shadow-sm flex items-center justify-center flex-shrink-0 text-primary border border-border">
                    <FileText className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-primary">GST Number</h4>
                    <p className="text-foreground/70 font-mono">30AHLPR3428B1ZQ</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Embed */}
            <div className="w-full h-64 rounded-xl overflow-hidden border border-border shadow-sm">
              <iframe
                src="https://maps.google.com/maps?q=Alto+Porvorim+North+Goa&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Devcon Office Location Map"
              ></iframe>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 rounded-2xl shadow-lg border border-border"
          >
            <h3 className="text-2xl font-bold text-primary mb-6">Request a Quote</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" name="name" placeholder="John Doe" required className="bg-muted/50 border-border" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" name="email" type="email" placeholder="john@company.com" required className="bg-muted/50 border-border" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" name="phone" type="tel" placeholder="+91 XXXXX XXXXX" required className="bg-muted/50 border-border" />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message / Requirements</Label>
                <Textarea 
                  id="message" 
                  name="message" 
                  placeholder="Tell us about the parts you need or the problem you're trying to solve..." 
                  rows={5} 
                  required 
                  className="bg-muted/50 border-border resize-none"
                />
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90 text-white font-bold h-12" disabled={isSubmitting}>
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-4 h-4 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
