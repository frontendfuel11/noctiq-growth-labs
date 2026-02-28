import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function FinalCTA() {
  return (
    <section className="section-spacing relative overflow-hidden">
      <div className="hero-glow absolute inset-0 pointer-events-none rotate-180" />
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <h2 className="text-section-sm md:text-section text-foreground mb-6">
            Let's Build Something That{" "}
            <span className="glow-text">Matters.</span>
          </h2>
          <p className="text-muted-foreground mb-10 text-lg">
            Ready to transform your digital presence? Let's start a conversation.
          </p>
          <Button variant="hero" size="lg">
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
