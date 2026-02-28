import { motion } from "framer-motion";

const steps = [
  { number: "01", title: "Discovery & Research", description: "Deep dive into your business, audience, and competitive landscape." },
  { number: "02", title: "Strategic Architecture", description: "Blueprint the optimal structure, flows, and technical approach." },
  { number: "03", title: "Design & Development", description: "Craft pixel-perfect interfaces and production-ready code." },
  { number: "04", title: "Launch & Optimization", description: "Deploy, monitor, and continuously improve performance." },
];

export default function ProcessSection() {
  return (
    <section id="process" className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">Our Process</p>
          <h2 className="text-section-sm md:text-section text-foreground">
            How We <span className="glow-text">Deliver</span>
          </h2>
        </motion.div>

        <div className="relative max-w-3xl mx-auto">
          {/* Connector line */}
          <div className="absolute left-8 top-0 bottom-0 w-px connector-line opacity-20 hidden md:block" />

          <div className="space-y-12">
            {steps.map((step, i) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="flex gap-8 items-start"
              >
                <div className="relative z-10 h-16 w-16 rounded-2xl bg-card border border-border/50 flex items-center justify-center flex-shrink-0">
                  <span className="glow-text font-display font-bold text-lg">{step.number}</span>
                </div>
                <div className="pt-2">
                  <h3 className="font-display font-semibold text-xl text-foreground mb-2">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
