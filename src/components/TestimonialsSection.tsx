import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "Noctiq Labs transformed our digital infrastructure. Their attention to detail and strategic insight exceeded expectations.",
    author: "Sarah Chen",
    role: "CTO, FinFlow",
  },
  {
    quote: "The team delivered a platform that not only looks exceptional but performs beyond our targets. A true partnership.",
    author: "Marcus Rivera",
    role: "Founder, ScaleUp",
  },
  {
    quote: "Working with Noctiq was seamless. They understood our vision from day one and executed flawlessly.",
    author: "Emily Park",
    role: "VP Product, Nextera",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">Testimonials</p>
          <h2 className="text-section-sm md:text-section text-foreground">
            What Clients <span className="glow-text">Say</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card gradient-border p-8"
            >
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground text-sm leading-relaxed mb-6 italic">"{t.quote}"</p>
              <div>
                <p className="font-display font-semibold text-sm text-foreground">{t.author}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
