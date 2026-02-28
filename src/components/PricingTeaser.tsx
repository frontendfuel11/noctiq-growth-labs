import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function PricingTeaser() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card gradient-border p-12 md:p-16 text-center max-w-3xl mx-auto"
        >
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">Investment</p>
          <h2 className="text-section-sm md:text-section text-foreground mb-4">
            Starting from <span className="glow-text">$1,200</span>
          </h2>
          <p className="text-muted-foreground mb-8 max-w-md mx-auto">
            Enterprise custom solutions available. Every project is scoped to deliver maximum ROI.
          </p>
          <Button variant="hero" size="lg">
            Get a Quote
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
