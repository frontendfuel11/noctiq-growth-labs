import { motion } from "framer-motion";
import { Shield, Lightbulb, MessageCircle, Handshake, BarChart3 } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Senior-Level Execution", description: "Every project is led by experienced professionals." },
  { icon: Lightbulb, title: "Strategy-First Approach", description: "We start with why before we build what." },
  { icon: MessageCircle, title: "Transparent Communication", description: "Clear updates, honest timelines, no surprises." },
  { icon: Handshake, title: "Long-Term Partnerships", description: "We invest in relationships, not transactions." },
  { icon: BarChart3, title: "Performance Analytics", description: "Data-driven decisions for continuous improvement." },
];

export default function WhyChooseSection() {
  return (
    <section className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">Why Us</p>
          <h2 className="text-section-sm md:text-section text-foreground">
            Why Choose <span className="glow-text">NOCTIQ</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6 max-w-5xl mx-auto">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <r.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-sm text-foreground mb-2">{r.title}</h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
