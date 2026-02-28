import { motion } from "framer-motion";

const logos = ["Fintech", "Ecommerce", "SaaS", "Startup", "Enterprise", "Agency"];

export default function SocialProof() {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="container mx-auto px-6">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-10 tracking-wider uppercase"
        >
          Trusted by 50+ global teams
        </motion.p>
        <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-muted-foreground/40 font-display font-semibold text-xl tracking-wider hover:text-muted-foreground/70 transition-colors cursor-default"
            >
              {name}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
