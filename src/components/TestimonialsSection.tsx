import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    quote: "Noctiq Labs transformed our digital infrastructure. Their attention to detail and strategic insight exceeded expectations. The ROI we've seen is remarkable.",
    author: "Sarah Chen",
    role: "CTO, FinFlow",
    avatar: "SC",
  },
  {
    quote: "The team delivered a platform that not only looks exceptional but performs beyond our targets. A true partnership that we continue to this day.",
    author: "Marcus Rivera",
    role: "Founder, ScaleUp",
    avatar: "MR",
  },
  {
    quote: "Working with Noctiq was seamless. They understood our vision from day one and executed flawlessly. Our conversion rate doubled within 3 months.",
    author: "Emily Park",
    role: "VP Product, Nextera",
    avatar: "EP",
  },
  {
    quote: "Their strategic approach to branding completely repositioned us in the market. We went from unknown to industry leader in under a year.",
    author: "James Thornton",
    role: "CEO, Meridian Health",
    avatar: "JT",
  },
  {
    quote: "The WordPress platform they built handles 100K+ visitors daily without breaking a sweat. Best engineering decision we ever made.",
    author: "Priya Sharma",
    role: "Director of Digital, Pulse Media",
    avatar: "PS",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length);
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);

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

        {/* Carousel */}
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card gradient-border p-10 md:p-14 relative"
          >
            <Quote className="h-10 w-10 text-primary/20 absolute top-8 left-8" />

            <div className="relative overflow-hidden min-h-[200px]">
              {testimonials.map((t, i) => (
                <motion.div
                  key={t.author}
                  initial={false}
                  animate={{
                    opacity: i === current ? 1 : 0,
                    x: i === current ? 0 : i > current ? 60 : -60,
                  }}
                  transition={{ duration: 0.4, ease: "easeInOut" }}
                  className={`${i === current ? "relative" : "absolute inset-0"}`}
                  style={{ pointerEvents: i === current ? "auto" : "none" }}
                >
                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, s) => (
                      <Star key={s} className="h-4 w-4 fill-primary text-primary" />
                    ))}
                  </div>

                  <p className="text-foreground text-lg md:text-xl leading-relaxed mb-8 italic">
                    "{t.quote}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-primary/15 flex items-center justify-center">
                      <span className="glow-text font-display font-bold text-sm">{t.avatar}</span>
                    </div>
                    <div>
                      <p className="font-display font-semibold text-foreground">{t.author}</p>
                      <p className="text-sm text-muted-foreground">{t.role}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrent(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === current ? "w-8 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                  />
                ))}
              </div>

              <div className="flex gap-2">
                <button
                  onClick={prev}
                  className="h-10 w-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button
                  onClick={next}
                  className="h-10 w-10 rounded-full border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-primary/40 transition-colors"
                >
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
