import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const metrics = [
  { value: "+43%", label: "Increase in Engagement" },
  { value: "+28%", label: "Increase in Conversion Rate" },
  { value: "2×", label: "Faster Page Speed" },
];

export default function CaseStudySection() {
  return (
    <section id="work" className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">Featured Work</p>
          <h2 className="text-section-sm md:text-section text-foreground">
            Case <span className="glow-text">Study</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border overflow-hidden"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left: Image */}
            <div className="relative h-64 lg:h-auto overflow-hidden">
              <img
                src={heroBg}
                alt="Case study project showcase"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent to-card/80 hidden lg:block" />
            </div>

            {/* Right: Details */}
            <div className="p-10 lg:p-14">
              <p className="text-primary text-sm font-medium tracking-wider uppercase mb-2">FinFlow Dashboard</p>
              <h3 className="font-display font-semibold text-2xl text-foreground mb-6">
                Redesigning a Fintech Platform for Scale
              </h3>

              <div className="space-y-4 mb-8">
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Problem</p>
                  <p className="text-secondary-foreground text-sm">Legacy interface causing high churn and low engagement across enterprise users.</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Solution</p>
                  <p className="text-secondary-foreground text-sm">Complete redesign with performance optimization, new design system, and data-driven UX.</p>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                {metrics.map((m) => (
                  <div key={m.label} className="text-center p-4 rounded-xl bg-muted/30">
                    <p className="glow-text font-display font-bold text-2xl">{m.value}</p>
                    <p className="text-xs text-muted-foreground mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
