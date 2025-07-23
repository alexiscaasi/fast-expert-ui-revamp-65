import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Play, ArrowRight, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("agents");

  return (
    <section className="relative pt-16 pb-12 md:pb-20 overflow-hidden">
      {/* Background with modern gradient */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full bg-repeat" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')" }}></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <Badge className="bg-white/20 text-white border-white/30 mb-4 inline-flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              AI-Powered Agent Matching
            </Badge>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Connect with Top Real Estate
              <span className="block text-gradient bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                Professionals
              </span>
            </h1>
            
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Find trusted agents, loan officers, and vendors in your area. Browse profiles, read reviews, and connect instantly with the right professionals for your needs.
            </p>

            {/* Search Section */}
            <Card className="p-6 glass-card mb-8">
              {/* Tab Navigation */}
              <div className="flex space-x-1 mb-4 bg-muted/50 rounded-lg p-1">
                <button
                  onClick={() => setActiveTab("agents")}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeTab === "agents"
                      ? "bg-white text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Agents
                </button>
                <button
                  onClick={() => setActiveTab("lenders")}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeTab === "lenders"
                      ? "bg-white text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Loan Officers
                </button>
                <button
                  onClick={() => setActiveTab("vendors")}
                  className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                    activeTab === "vendors"
                      ? "bg-white text-primary shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  Vendors
                </button>
              </div>

              {/* Search Input */}
              <div className="flex gap-3">
                <div className="relative flex-1">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                  <Input
                    type="text"
                    placeholder="Enter City or Zip Code"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 h-12 text-lg"
                  />
                </div>
                <Button size="lg" className="btn-primary h-12 px-8">
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </Card>

            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <span className="font-semibold text-white">4.8/5</span>
              </div>
              <div className="text-sm">10,526 Verified Reviews</div>
              <Button
                variant="ghost"
                className="text-white hover:bg-white/20 p-0 h-auto"
              >
                <Play className="w-4 h-4 mr-2" />
                Watch Video
              </Button>
            </div>
          </div>

          {/* Right Content - Modern House Image */}
          <div className="relative lg:ml-8">
            <div className="relative">
              <img
                src="/src/assets/hero-house.jpg"
                alt="Modern house showcasing FastExpert's premium service"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
              {/* Floating Stats Cards */}
              <Card className="absolute top-4 right-4 p-4 glass-card animate-in slide-in-from-top-2">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">75K+</div>
                  <div className="text-xs text-muted-foreground">Trusted Agents</div>
                </div>
              </Card>
              
              <Card className="absolute bottom-4 left-4 p-4 glass-card animate-in slide-in-from-bottom-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-success/20 rounded-full flex items-center justify-center">
                    <Star className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <div className="font-semibold text-sm">Top Rated</div>
                    <div className="text-xs text-muted-foreground">AI Matched</div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};