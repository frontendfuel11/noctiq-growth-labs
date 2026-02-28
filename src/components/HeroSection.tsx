import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { lazy, Suspense, useState } from "react";
import ProjectModal from "./ProjectModal";

const FloatingSphere = lazy(() => import("./FloatingSphere"));

export default function HeroSection() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      <div className="hero-glow absolute inset-0 pointer-events-none" />

      <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-border/50 bg-card/40">
            <div className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            <span className="text-xs text-muted-foreground font-medium tracking-wider uppercase">
              Engineering Digital Excellence
            </span>
          </div>

          <h1 className="text-hero-sm lg:text-hero text-foreground mb-6 text-balance">
            Engineering High-Impact{" "}
            <span className="glow-text">Digital Experiences</span>{" "}
            for Growth-Focused Brands
          </h1>

          <p className="text-lg text-muted-foreground mb-10 max-w-lg leading-relaxed">
            We design and develop performance-driven digital products that
            elevate brands and accelerate measurable growth.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button variant="hero" size="lg" onClick={() => setModalOpen(true)}>
              Start a Project
            </Button>
            <Button variant="heroOutline" size="lg" onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}>
              View Case Studies
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="hidden lg:block h-[500px] relative"
        >
          <Suspense fallback={<div className="w-full h-full flex items-center justify-center text-muted-foreground">Loading...</div>}>
            <FloatingSphere />
          </Suspense>
        </motion.div>
      </div>

      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </section>
  );
}
