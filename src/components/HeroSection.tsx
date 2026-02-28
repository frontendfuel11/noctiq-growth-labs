import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useState } from "react";
import ProjectModal from "./ProjectModal";
import { ArrowRight, Sparkles } from "lucide-react";

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      {/* Decorative grid */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'linear-gradient(hsl(var(--primary)/0.3) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--primary)/0.3) 1px, transparent 1px)', backgroundSize: '60px 60px' }} />

      <div className="container mx-auto px-6 flex flex-col items-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 mb-8 px-5 py-2.5 rounded-full border border-border/50 bg-card/40 backdrop-blur-sm"
          >
            <Sparkles className="h-3.5 w-3.5 text-primary" />
            <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
              Engineering Digital Excellence
            </span>
          </motion.div>

          <h1 className="text-hero-sm lg:text-hero text-foreground mb-8 text-balance leading-[1.1]">
            Engineering High-Impact{" "}
            <span className="glow-text">Digital Experiences</span>{" "}
            for Growth-Focused Brands
          </h1>

          <p className="text-lg lg:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            We design and develop performance-driven digital products that
            elevate brands and accelerate measurable growth — from strategy to launch and beyond.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <Button variant="hero" size="lg" onClick={() => setModalOpen(true)} className="group">
              Start a Project
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
              View Case Studies
            </Button>
          </div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-12 border-t border-border/30"
          >
            {[
              { value: "50+", label: "Projects Delivered" },
              { value: "98%", label: "Client Satisfaction" },
              { value: "3x", label: "Average ROI" },
              { value: "24/7", label: "Ongoing Support" },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col items-center gap-1">
                <span className="text-3xl lg:text-4xl font-bold glow-text">{stat.value}</span>
                <span className="text-xs text-muted-foreground tracking-wider uppercase">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
