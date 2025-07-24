import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Star, Play, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

export const Hero = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState("agents");

  return (
    <section className="relative pt-32 pb-12 md:pb-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-hero" />
      <div className="absolute inset-0 opacity-20">
        <div
          className="w-full h-full bg-repeat"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"m36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
          }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="w-full flex justify-start">
            <div className="w-[1216px] text-left">
              <Badge className="bg-white/20 text-white border-white/30 mb-4 inline-flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                AI-Powered Agent Matching
              </Badge>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight whitespace-nowrap">
                Connect with Top Real Estate{" "}
                <span
                  className="inline bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(to right, #FEE100, #FDB128)",
                  }}
                >
                  Professionals
                </span>
              </h1>

              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover 75,000+ trusted agents across the U.S., and instantly connect with the right expert for your needs.
              </p>

              {/* Search Section */}
              <Card className="p-6 glass-card mb-8 w-full max-w-[800px]">
                <div className="flex space-x-1 mb-4 bg-muted/50 rounded-lg p-1">
                  {["agents", "companies"].map((tab) => (
                    <button
                      key={tab}
                      onClick={() => setActiveTab(tab)}
                      className={`flex-1 px-4 py-2 text-sm font-medium rounded-md transition-all ${
                        activeTab === tab
                          ? "bg-white text-primary shadow-sm"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab === "agents" ? "Agents" : "Companies"}
                    </button>
                  ))}
                </div>

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
              <div className="flex items-center gap-6 text-white/80 text-base font-medium">
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <span className="text-white text-[16px] font-semibold">4.8 / 5</span>
                </div>

                <div className="h-5 w-px bg-white/50" />

                <div className="text-white text-[16px] font-medium">
                  10,561 Verified Reviews
                </div>

                <div className="h-5 w-px bg-white/50" />

                <Button
                  variant="ghost"
                  className="text-white text-[16px] font-medium hover:bg-white/20 px-0 h-auto"
                >
                  Watch Video
                  <Play className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
