import { Hero } from "@/components/Hero";
// import { SearchSection } from "@/components/SearchSection";
// import { TrustIndicators } from "@/components/TrustIndicators";
// import { FeaturedAgents } from "@/components/FeaturedAgents";
// import { LoanOfficerSection } from "@/components/LoanOfficerSection";
//import { VendorSection } from "@/components/VendorSection";
import { AIFeatures } from "@/components/AIFeatures";
import { AffordabilityTool } from "@/components/AffordabilityTool";
import { TestimonialsSection } from "@/components/TestimonialsSection";
//import { NeighborhoodInsights } from "@/components/NeighborhoodInsights";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { AIChatAssistant } from "@/components/AIChatAssistant";
import AIChatAssistant from "@/components/AIChatAssistant";
import { TopAgentsShowcase } from "@/components/TopAgentsShowcase";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <Hero />
      <TopAgentsShowcase />
      {/* <SearchSection /> */}
      {/* <TrustIndicators /> */}
      {/* <FeaturedAgents /> */}
      {/* <LoanOfficerSection /> */}
      {/* <VendorSection /> */}
      <AIFeatures />
      {/* <NeighborhoodInsights /> */}
      <AffordabilityTool />
      <TestimonialsSection />
      <Footer />
      <AIChatAssistant />
    </div>
  );
};

export default Index;
