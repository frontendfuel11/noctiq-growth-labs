import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import CaseStudySection from "@/components/CaseStudySection";
import WhyChooseSection from "@/components/WhyChooseSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingTeaser from "@/components/PricingTeaser";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <SocialProof />
      <ServicesSection />
      <ProcessSection />
      <CaseStudySection />
      <WhyChooseSection />
      <TestimonialsSection />
      <PricingTeaser />
      <FinalCTA />
      <Footer />
    </div>
  );
};

export default Index;
