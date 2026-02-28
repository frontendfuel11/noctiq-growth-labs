import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, Send, CheckCircle } from "lucide-react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  company: z.string().trim().max(100, "Company name too long").optional(),
  budget: z.string().optional(),
  message: z.string().trim().min(1, "Tell us about your project").max(2000, "Message too long"),
});

type ContactForm = z.infer<typeof contactSchema>;

interface ProjectModalProps {
  open: boolean;
  onClose: () => void;
}

export default function ProjectModal({ open, onClose }: ProjectModalProps) {
  const [form, setForm] = useState<ContactForm>({
    name: "",
    email: "",
    company: "",
    budget: "",
    message: "",
  });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.issues.forEach((issue) => {
        const field = issue.path[0] as keyof ContactForm;
        fieldErrors[field] = issue.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setForm({ name: "", email: "", company: "", budget: "", message: "" });
      onClose();
    }, 2500);
  };

  const budgetOptions = ["< $5,000", "$5,000 – $15,000", "$15,000 – $50,000", "$50,000+"];

  return (
    <AnimatePresence>
      {open && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 z-50 bg-background/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="glass-card gradient-border w-full max-w-lg max-h-[90vh] overflow-y-auto p-8 relative" onClick={(e) => e.stopPropagation()}>
              <button
                onClick={onClose}
                className="absolute top-4 right-4 h-8 w-8 rounded-full bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="h-4 w-4" />
              </button>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="font-display font-semibold text-2xl text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <>
                  <div className="mb-6">
                    <h3 className="font-display font-semibold text-2xl text-foreground mb-2">Start a Project</h3>
                    <p className="text-muted-foreground text-sm">Tell us about your vision. We'll respond within 24 hours.</p>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Name *</label>
                      <input
                        value={form.name}
                        onChange={(e) => handleChange("name", e.target.value)}
                        className="w-full h-11 px-4 rounded-lg bg-muted/30 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                        placeholder="Your name"
                        maxLength={100}
                      />
                      {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Email *</label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => handleChange("email", e.target.value)}
                        className="w-full h-11 px-4 rounded-lg bg-muted/30 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                        placeholder="your@email.com"
                        maxLength={255}
                      />
                      {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Company</label>
                      <input
                        value={form.company}
                        onChange={(e) => handleChange("company", e.target.value)}
                        className="w-full h-11 px-4 rounded-lg bg-muted/30 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors"
                        placeholder="Your company"
                        maxLength={100}
                      />
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Budget Range</label>
                      <div className="grid grid-cols-2 gap-2">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => handleChange("budget", opt)}
                            className={`h-10 rounded-lg border text-xs font-medium transition-all ${
                              form.budget === opt
                                ? "border-primary bg-primary/10 text-foreground"
                                : "border-border/50 bg-muted/20 text-muted-foreground hover:border-primary/30"
                            }`}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-muted-foreground uppercase tracking-wider mb-1.5 block">Project Details *</label>
                      <textarea
                        value={form.message}
                        onChange={(e) => handleChange("message", e.target.value)}
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg bg-muted/30 border border-border/50 text-foreground text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/30 transition-colors resize-none"
                        placeholder="Tell us about your project, goals, and timeline..."
                        maxLength={2000}
                      />
                      {errors.message && <p className="text-destructive text-xs mt-1">{errors.message}</p>}
                    </div>

                    <Button variant="hero" size="lg" className="w-full" type="submit">
                      <Send className="h-4 w-4 mr-2" />
                      Send Message
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
