import { motion } from "framer-motion";
import { ArrowUpRight, BarChart3, Clock, Zap } from "lucide-react";

const caseStudies = [
  {
    tag: "Fintech",
    title: "FinFlow Dashboard Redesign",
    subtitle: "Redesigning a Fintech Platform for Scale",
    problem: "Legacy interface causing high churn and low engagement across enterprise users with 50K+ daily active accounts.",
    solution: "Complete UX overhaul with a new design system, real-time data visualization, and performance-first architecture.",
    results: [
      { icon: BarChart3, value: "+43%", label: "Engagement" },
      { icon: ArrowUpRight, value: "+28%", label: "Conversions" },
      { icon: Zap, value: "2×", label: "Page Speed" },
    ],
    technologies: ["React", "TypeScript", "D3.js", "Tailwind CSS"],
    timeline: "12 weeks",
  },
  {
    tag: "E-Commerce",
    title: "ShopNova Mobile App",
    subtitle: "Building a Premium Shopping Experience",
    problem: "Outdated mobile experience with 72% cart abandonment rate and poor performance on low-end devices.",
    solution: "Native-quality cross-platform app with offline support, personalized recommendations, and seamless checkout flow.",
    results: [
      { icon: BarChart3, value: "+67%", label: "Revenue" },
      { icon: ArrowUpRight, value: "-45%", label: "Cart Abandonment" },
      { icon: Zap, value: "4.9★", label: "App Rating" },
    ],
    technologies: ["React Native", "Node.js", "Stripe", "Firebase"],
    timeline: "16 weeks",
  },
  {
    tag: "SaaS",
    title: "CloudMetrics Platform",
    subtitle: "Enterprise Analytics from Zero to Launch",
    problem: "Startup needed a full-stack analytics platform to compete with established players, with zero existing infrastructure.",
    solution: "End-to-end product design and development: real-time dashboards, team collaboration, custom reporting engine.",
    results: [
      { icon: BarChart3, value: "10K+", label: "Users in 6mo" },
      { icon: ArrowUpRight, value: "$2.4M", label: "ARR" },
      { icon: Zap, value: "99.9%", label: "Uptime" },
    ],
    technologies: ["Next.js", "PostgreSQL", "GraphQL", "AWS"],
    timeline: "20 weeks",
  },
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
            Case <span className="glow-text">Studies</span>
          </h2>
          <p className="text-muted-foreground mt-4 max-w-lg mx-auto">
            Real results from real projects. Here's how we've helped brands transform their digital presence.
          </p>
        </motion.div>

        <div className="space-y-8">
          {caseStudies.map((study, i) => (
            <motion.div
              key={study.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass-card gradient-border overflow-hidden"
            >
              <div className="grid lg:grid-cols-5 gap-0">
                {/* Left panel - info */}
                <div className="lg:col-span-3 p-8 md:p-10">
                  <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium tracking-wider uppercase mb-4">
                    {study.tag}
                  </span>
                  <h3 className="font-display font-semibold text-2xl text-foreground mb-2">{study.title}</h3>
                  <p className="text-muted-foreground text-sm mb-6">{study.subtitle}</p>

                  <div className="grid md:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 rounded-xl bg-muted/20">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">Challenge</p>
                      <p className="text-secondary-foreground text-sm leading-relaxed">{study.problem}</p>
                    </div>
                    <div className="p-4 rounded-xl bg-muted/20">
                      <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2 font-medium">Solution</p>
                      <p className="text-secondary-foreground text-sm leading-relaxed">{study.solution}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full border border-border/40 text-xs text-muted-foreground">
                        {tech}
                      </span>
                    ))}
                    <span className="px-3 py-1 rounded-full border border-border/40 text-xs text-muted-foreground flex items-center gap-1">
                      <Clock className="h-3 w-3" /> {study.timeline}
                    </span>
                  </div>
                </div>

                {/* Right panel - results */}
                <div className="lg:col-span-2 bg-muted/10 p-8 md:p-10 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border/30">
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mb-6 font-medium">Key Results</p>
                  <div className="space-y-6">
                    {study.results.map((r) => (
                      <div key={r.label} className="flex items-center gap-4">
                        <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <r.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <p className="glow-text font-display font-bold text-2xl">{r.value}</p>
                          <p className="text-xs text-muted-foreground">{r.label}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
