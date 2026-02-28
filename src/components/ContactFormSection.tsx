import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const formSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email").max(255),
  subject: z.string().trim().min(1, "Subject is required").max(200),
  message: z.string().trim().min(1, "Message is required").max(2000),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactFormSection() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof FormData, value: string) => {
    setForm((p) => ({ ...p, [field]: value }));
    if (errors[field]) setErrors((p) => ({ ...p, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = formSchema.safeParse(form);
    if (!result.success) {
      const fe: Partial<Record<keyof FormData, string>> = {};
      result.error.issues.forEach((i) => { fe[i.path[0] as keyof FormData] = i.message; });
      setErrors(fe);
      return;
    }
    setSubmitted(true);
  };

  const inputClass = "w-full h-11 px-4 rounded-lg bg-muted/30 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors";

  return (
    <section id="contact" className="section-spacing">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">Get In Touch</p>
            <h2 className="text-section-sm md:text-section text-foreground mb-6">
              What Do You Have in <span className="glow-text">Mind?</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Whether you have a clear vision or just a spark of an idea, we'd love to hear about it. 
              Share your thoughts and we'll help shape them into reality.
            </p>
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>📧 hello@noctiq.com</p>
              <p>📍 San Francisco, CA</p>
              <p>⏰ Response within 24 hours</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {submitted ? (
              <div className="glass-card gradient-border p-12 text-center">
                <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                <h3 className="font-display font-semibold text-2xl text-foreground mb-2">Thank You!</h3>
                <p className="text-muted-foreground">We've received your message and will respond shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="glass-card gradient-border p-8 space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Name *</label>
                  <input value={form.name} onChange={(e) => handleChange("name", e.target.value)} className={inputClass} placeholder="Your name" maxLength={100} />
                  {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Email *</label>
                  <input type="email" value={form.email} onChange={(e) => handleChange("email", e.target.value)} className={inputClass} placeholder="your@email.com" maxLength={255} />
                  {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Subject *</label>
                  <input value={form.subject} onChange={(e) => handleChange("subject", e.target.value)} className={inputClass} placeholder="How can we help?" maxLength={200} />
                  {errors.subject && <p className="text-destructive text-xs mt-1">{errors.subject}</p>}
                </div>
                <div>
                  <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Message *</label>
                  <textarea value={form.message} onChange={(e) => handleChange("message", e.target.value)} rows={4} className={`${inputClass} h-auto py-3 resize-none`} placeholder="Tell us about your project..." maxLength={2000} />
                  {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                </div>
                <Button variant="hero" size="lg" className="w-full" type="submit">
                  <Send className="h-4 w-4 mr-2" /> Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
