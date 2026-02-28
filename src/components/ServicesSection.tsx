import { motion } from "framer-motion";
import { Palette, Globe, Smartphone, Code2, Sparkles, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered product design backed by research and strategy.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Scalable, high-performance web platforms engineered for growth.",
  },
  {
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform applications with seamless user experiences.",
  },
  {
    icon: Code2,
    title: "WordPress Engineering",
    description: "Custom-built WordPress ecosystems optimized for performance.",
  },
  {
    icon: Sparkles,
    title: "Branding Systems",
    description: "Identity systems that create lasting impressions.",
  },
  {
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Data-driven improvements that increase revenue.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="section-spacing">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm text-primary font-medium tracking-wider uppercase mb-4">What We Do</p>
          <h2 className="text-section-sm md:text-section text-foreground">
            Services Built for <span className="glow-text">Impact</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card gradient-border p-8 group hover:bg-card/80 transition-all duration-300"
            >
              <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
