import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { servicesData } from "@/data/services";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactFormSection from "@/components/ContactFormSection";
import { useState } from "react";
import ProjectModal from "@/components/ProjectModal";

export default function ServiceDetail() {
  const { slug } = useParams<{ slug: string }>();
  const service = servicesData.find((s) => s.slug === slug);
  const [modalOpen, setModalOpen] = useState(false);

  if (!service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-4xl text-foreground mb-4">Service Not Found</h1>
          <Link to="/" className="text-primary hover:underline">Go back home</Link>
        </div>
      </div>
    );
  }

  const Icon = service.icon;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="hero-glow absolute inset-0 pointer-events-none" />
        <div className="container mx-auto px-6 relative z-10">
          <Link to="/#services" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Services
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
              <Icon className="h-8 w-8 text-primary" />
            </div>
            <h1 className="text-hero-sm lg:text-hero text-foreground mb-6">{service.title}</h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
              {service.longDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features & Tools */}
      <section className="section-spacing">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* What's Included */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-semibold text-2xl text-foreground mb-8">What's Included</h2>
              <div className="space-y-4">
                {service.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3 glass-card p-4">
                    <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="h-3.5 w-3.5 text-primary" />
                    </div>
                    <span className="text-secondary-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Tools + CTA */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display font-semibold text-2xl text-foreground mb-8">Tools & Technologies</h2>
              <div className="flex flex-wrap gap-3 mb-12">
                {service.tools.map((tool) => (
                  <span key={tool} className="px-4 py-2 rounded-full border border-border/50 bg-card/40 text-sm text-muted-foreground font-medium">
                    {tool}
                  </span>
                ))}
              </div>

              <div className="glass-card gradient-border p-8">
                <h3 className="font-display font-semibold text-xl text-foreground mb-3">Ready to get started?</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Let's discuss how {service.title.toLowerCase()} can transform your business.
                </p>
                <Button variant="hero" size="lg" onClick={() => setModalOpen(true)}>
                  Start a Project
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <ContactFormSection />
      <Footer />
      <ProjectModal open={modalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
