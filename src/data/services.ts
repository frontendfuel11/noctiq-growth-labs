import { Palette, Globe, Smartphone, Code2, Sparkles, TrendingUp, type LucideIcon } from "lucide-react";

export interface ServiceData {
  slug: string;
  icon: LucideIcon;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  tools: string[];
}

export const servicesData: ServiceData[] = [
  {
    slug: "ui-ux-design",
    icon: Palette,
    title: "UI/UX Design",
    description: "Human-centered product design backed by research and strategy.",
    longDescription:
      "We create intuitive, beautiful interfaces that delight users and drive business results. Our design process is rooted in deep user research, competitive analysis, and iterative prototyping to ensure every pixel serves a purpose.",
    features: [
      "User Research & Persona Development",
      "Wireframing & Prototyping",
      "Visual Design & Design Systems",
      "Usability Testing & Iteration",
      "Accessibility Compliance (WCAG)",
      "Motion Design & Micro-interactions",
    ],
    tools: ["Figma", "Framer", "Adobe XD", "Principle", "Maze"],
  },
  {
    slug: "web-development",
    icon: Globe,
    title: "Web Development",
    description: "Scalable, high-performance web platforms engineered for growth.",
    longDescription:
      "We build modern web applications using cutting-edge technologies that load fast, rank high, and scale effortlessly. From marketing sites to complex web apps, our code is clean, tested, and production-ready.",
    features: [
      "Custom Web Applications",
      "Progressive Web Apps (PWA)",
      "E-Commerce Platforms",
      "CMS Integration & Development",
      "API Design & Integration",
      "Performance Optimization",
    ],
    tools: ["React", "Next.js", "TypeScript", "Node.js", "Tailwind CSS"],
  },
  {
    slug: "app-development",
    icon: Smartphone,
    title: "App Development",
    description: "Cross-platform applications with seamless user experiences.",
    longDescription:
      "We develop native and cross-platform mobile applications that feel right at home on every device. Our apps are built for performance, security, and an exceptional user experience from the first tap.",
    features: [
      "iOS & Android Development",
      "Cross-Platform Solutions",
      "App Store Optimization",
      "Push Notifications & Analytics",
      "Offline-First Architecture",
      "Backend API Development",
    ],
    tools: ["React Native", "Flutter", "Swift", "Kotlin", "Firebase"],
  },
  {
    slug: "wordpress-engineering",
    icon: Code2,
    title: "WordPress Engineering",
    description: "Custom-built WordPress ecosystems optimized for performance.",
    longDescription:
      "We go beyond typical WordPress development. Our engineering approach delivers custom themes, plugins, and architectures that are fast, secure, and easy to manage — built for teams who need enterprise-grade reliability.",
    features: [
      "Custom Theme Development",
      "Plugin Engineering",
      "Headless WordPress (WP + React)",
      "WooCommerce Solutions",
      "Migration & Performance Tuning",
      "Security Hardening",
    ],
    tools: ["WordPress", "PHP", "ACF", "WooCommerce", "GraphQL"],
  },
  {
    slug: "branding-systems",
    icon: Sparkles,
    title: "Branding Systems",
    description: "Identity systems that create lasting impressions.",
    longDescription:
      "We craft comprehensive brand identities that tell your story and differentiate you in the market. From logo design to full brand guidelines, we build systems that ensure consistency across every touchpoint.",
    features: [
      "Brand Strategy & Positioning",
      "Logo & Visual Identity Design",
      "Brand Guidelines & Documentation",
      "Typography & Color Systems",
      "Marketing Collateral Design",
      "Brand Voice & Messaging",
    ],
    tools: ["Illustrator", "Photoshop", "Figma", "After Effects", "InDesign"],
  },
  {
    slug: "conversion-optimization",
    icon: TrendingUp,
    title: "Conversion Optimization",
    description: "Data-driven improvements that increase revenue.",
    longDescription:
      "We analyze user behavior, run strategic experiments, and implement changes that measurably improve your conversion rates. Every recommendation is backed by data, not guesswork.",
    features: [
      "Conversion Audit & Analysis",
      "A/B & Multivariate Testing",
      "Landing Page Optimization",
      "Funnel Analysis & Optimization",
      "Heatmap & Session Recording Analysis",
      "Growth Strategy Consulting",
    ],
    tools: ["Google Analytics", "Hotjar", "Optimizely", "Mixpanel", "Google Tag Manager"],
  },
];
