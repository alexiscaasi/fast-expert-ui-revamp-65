import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Brain, 
  MessageCircle, 
  MapPin, 
  Target, 
  Bell, 
  TrendingUp, 
  Zap, 
  Users,
  BarChart3,
  Compass
} from "lucide-react";

export const AIFeatures = () => {
  const features = [
    {
      icon: Brain,
      title: "Professional Matching",
      description: "AI-powered matching connects you with agents, loan officers, and vendors based on location, specialties, and reviews",
      benefits: ["Multi-professional search", "Compatibility scoring", "Experience matching"],
      color: "primary"
    },
    {
      icon: MessageCircle,
      title: "24/7 Smart Assistant",
      description: "Get instant answers about professionals, loan products, vendor services, market stats, and local Q&A",
      benefits: ["Professional directory access", "Market data insights", "Local expertise"],
      color: "accent"
    },
    {
      icon: MapPin,
      title: "Local Market Intelligence", 
      description: "Real-time market stats, pricing trends, days on market, and neighborhood insights for informed decisions",
      benefits: ["Local market data", "Pricing analytics", "Trend forecasting"],
      color: "success"
    },
    {
      icon: Target,
      title: "Trusted Pro Network",
      description: "Access verified professionals with Trusted Pro badges, endorsed by other agents and verified reviews",
      benefits: ["Verified professionals", "Trusted endorsements", "Quality assurance"],
      color: "primary"
    },
    {
      icon: Bell,
      title: "Smart Recommendations",
      description: "Personalized suggestions for professionals and services based on your location and transaction needs",
      benefits: ["Personalized matches", "Service recommendations", "Trust score analysis"],
      color: "warning"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "View professional stats including sales volume, recent transactions, client reviews, and success rates",
      benefits: ["Performance metrics", "Review analysis", "Success tracking"],
      color: "success"
    }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            <Zap className="w-4 h-4 mr-2" />
            AI-Powered Platform
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Revolutionizing Real Estate with AI
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Experience the future of real estate with our cutting-edge AI tools designed to make buying and selling faster, smarter, and more personalized than ever before.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card key={index} className="p-8 interactive-lift bg-gradient-card group hover:shadow-glow transition-all duration-500">
                <div className={`w-14 h-14 bg-${feature.color}/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <Icon className={`w-7 h-7 text-${feature.color}`} />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{feature.description}</p>
                
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center text-sm">
                      <div className={`w-2 h-2 bg-${feature.color} rounded-full mr-3`}></div>
                      <span className="text-muted-foreground">{benefit}</span>
                    </div>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        {/* AI Demo Section */}
        <Card className="p-8 bg-gradient-primary text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <Brain className="w-6 h-6" />
                </div>
                <Badge className="bg-white/20 text-white border-white/30">
                  Try It Now
                </Badge>
              </div>
              
              <h3 className="text-2xl font-bold mb-4">
                Experience AI Agent Matching
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Take our 2-minute AI questionnaire and get matched with your ideal real estate agent. Our system analyzes over 50 data points to find your perfect match.
              </p>
              
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3">
                  <Compass className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">Personalized matching algorithm</span>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">Access to 75,000+ verified agents</span>
                </div>
                <div className="flex items-center gap-3">
                  <TrendingUp className="w-5 h-5 text-white/80" />
                  <span className="text-white/90">Real-time performance data</span>
                </div>
              </div>
              
              <Button size="lg" className="bg-white text-primary hover:bg-white/90">
                Start AI Matching
              </Button>
            </div>
            
            <div className="relative">
              <Card className="p-6 bg-white/10 backdrop-blur-sm border-white/20">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                      <Brain className="w-4 h-4" />
                    </div>
                    <div className="text-white/90 text-sm">AI is analyzing your preferences...</div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-white/80 text-xs">Budget Range</div>
                      <div className="text-white font-semibold">$800K - $1.2M</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-white/80 text-xs">Preferred Areas</div>
                      <div className="text-white font-semibold">Downtown, Suburbs</div>
                    </div>
                    <div className="bg-white/10 rounded-lg p-3">
                      <div className="text-white/80 text-xs">Agent Match Score</div>
                      <div className="text-white font-semibold">98% Compatible</div>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};