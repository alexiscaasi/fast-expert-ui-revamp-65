import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { 
  MapPin, 
  TrendingUp, 
  Shield, 
  GraduationCap, 
  Car, 
  Coffee, 
  DollarSign,
  Users,
  Clock,
  Search
} from "lucide-react";
import { Progress } from "@/components/ui/progress";

export const NeighborhoodInsights = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedNeighborhood, setSelectedNeighborhood] = useState("downtown");

  const neighborhoods = {
    downtown: {
      name: "Downtown District",
      city: "Los Angeles, CA",
      priceRange: "$800K - $1.2M",
      trend: "+12%",
      trendDirection: "up",
      walkScore: 95,
      transitScore: 88,
      bikeScore: 75,
      crimeRating: 7,
      schoolRating: 8,
      lifestyle: "Urban Professional",
      demographics: {
        averageAge: 32,
        families: 25,
        professionals: 65,
        students: 10
      },
      amenities: [
        { icon: Coffee, name: "Coffee Shops", count: 24, distance: "0.2 mi" },
        { icon: Car, name: "Parking", count: 12, distance: "0.1 mi" },
        { icon: GraduationCap, name: "Schools", count: 8, distance: "0.5 mi" }
      ],
      insights: [
        "Property values have increased 12% in the last year",
        "High concentration of tech professionals",
        "Excellent public transportation access",
        "Growing arts and dining scene"
      ]
    },
    suburbs: {
      name: "Westside Suburbs", 
      city: "Los Angeles, CA",
      priceRange: "$1.2M - $2.5M",
      trend: "+8%",
      trendDirection: "up",
      walkScore: 65,
      transitScore: 45,
      bikeScore: 60,
      crimeRating: 9,
      schoolRating: 9,
      lifestyle: "Family Oriented",
      demographics: {
        averageAge: 42,
        families: 75,
        professionals: 20,
        students: 5
      },
      amenities: [
        { icon: GraduationCap, name: "Top Schools", count: 15, distance: "0.8 mi" },
        { icon: Coffee, name: "Family Cafes", count: 8, distance: "0.5 mi" },
        { icon: Car, name: "Shopping Centers", count: 6, distance: "1.2 mi" }
      ],
      insights: [
        "Top-rated school district with 95% graduation rate",
        "Family-friendly community with parks and recreation",
        "Low crime rates and safe neighborhoods",
        "Rising property values due to school quality"
      ]
    }
  };

  const currentData = neighborhoods[selectedNeighborhood];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            <MapPin className="w-4 h-4 mr-2" />
            AI-Powered Insights
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Neighborhood Intelligence
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get real-time data and AI-powered insights about neighborhoods to make informed decisions
          </p>
        </div>

        {/* Search Bar */}
        <Card className="p-6 mb-8">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
              <Input
                type="text"
                placeholder="Search neighborhoods, cities, or ZIP codes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12"
              />
            </div>
            <Button size="lg" className="btn-primary h-12">
              <Search className="w-5 h-5 mr-2" />
              Analyze
            </Button>
          </div>
        </Card>

        {/* Neighborhood Tabs */}
        <div className="flex gap-2 mb-8 justify-center">
          <Button
            variant={selectedNeighborhood === "downtown" ? "default" : "outline"}
            onClick={() => setSelectedNeighborhood("downtown")}
            className="btn-primary"
          >
            Downtown District
          </Button>
          <Button
            variant={selectedNeighborhood === "suburbs" ? "default" : "outline"}
            onClick={() => setSelectedNeighborhood("suburbs")}
            className="btn-primary"
          >
            Westside Suburbs
          </Button>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Overview Card */}
            <Card className="p-8 bg-gradient-card">
              <div className="flex items-start justify-between mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">{currentData.name}</h3>
                  <p className="text-muted-foreground flex items-center gap-2">
                    <MapPin className="w-4 h-4" />
                    {currentData.city}
                  </p>
                </div>
                <div className="text-right">
                  <div className="text-2xl font-bold text-foreground">{currentData.priceRange}</div>
                  <div className={`flex items-center gap-1 ${
                    currentData.trendDirection === 'up' ? 'text-success' : 'text-destructive'
                  }`}>
                    <TrendingUp className="w-4 h-4" />
                    <span className="font-semibold">{currentData.trend} this year</span>
                  </div>
                </div>
              </div>

              <Badge className="bg-primary-soft text-primary mb-4">
                {currentData.lifestyle} Neighborhood
              </Badge>
            </Card>

            {/* Scores Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-6 h-6 text-primary" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{currentData.walkScore}</div>
                <div className="text-sm text-muted-foreground mb-3">Walk Score</div>
                <Progress value={currentData.walkScore} className="h-2" />
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Car className="w-6 h-6 text-success" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{currentData.transitScore}</div>
                <div className="text-sm text-muted-foreground mb-3">Transit Score</div>
                <Progress value={currentData.transitScore} className="h-2" />
              </Card>

              <Card className="p-6 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div className="text-2xl font-bold text-foreground mb-1">{currentData.bikeScore}</div>
                <div className="text-sm text-muted-foreground mb-3">Bike Score</div>
                <Progress value={currentData.bikeScore} className="h-2" />
              </Card>
            </div>

            {/* Safety & Education */}
            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-success/10 rounded-full flex items-center justify-center">
                    <Shield className="w-5 h-5 text-success" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Safety Rating</h4>
                    <p className="text-sm text-muted-foreground">Crime & Safety Index</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{currentData.crimeRating}/10</div>
                <Progress value={currentData.crimeRating * 10} className="h-3" />
              </Card>

              <Card className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">School Rating</h4>
                    <p className="text-sm text-muted-foreground">Education Quality</p>
                  </div>
                </div>
                <div className="text-3xl font-bold text-foreground mb-2">{currentData.schoolRating}/10</div>
                <Progress value={currentData.schoolRating * 10} className="h-3" />
              </Card>
            </div>

            {/* AI Insights */}
            <Card className="p-6 bg-primary-soft">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <TrendingUp className="w-5 h-5" />
                AI Market Insights
              </h4>
              <div className="space-y-3">
                {currentData.insights.map((insight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2"></div>
                    <p className="text-sm text-muted-foreground">{insight}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Demographics */}
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-5 h-5" />
                Demographics
              </h4>
              
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Average Age</span>
                    <span className="font-medium text-foreground">{currentData.demographics.averageAge}</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Families</span>
                    <span className="font-medium text-foreground">{currentData.demographics.families}%</span>
                  </div>
                  <Progress value={currentData.demographics.families} className="h-2" />
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-muted-foreground">Professionals</span>
                    <span className="font-medium text-foreground">{currentData.demographics.professionals}%</span>
                  </div>
                  <Progress value={currentData.demographics.professionals} className="h-2" />
                </div>
              </div>
            </Card>

            {/* Nearby Amenities */}
            <Card className="p-6">
              <h4 className="font-semibold text-foreground mb-4">Nearby Amenities</h4>
              <div className="space-y-4">
                {currentData.amenities.map((amenity, index) => {
                  const Icon = amenity.icon;
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="font-medium text-sm text-foreground">{amenity.name}</div>
                        <div className="text-xs text-muted-foreground">{amenity.count} within {amenity.distance}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Card>

            {/* CTA */}
            <Card className="p-6 bg-gradient-primary text-white text-center">
              <h4 className="font-semibold mb-2">Find Agents in This Area</h4>
              <p className="text-white/90 text-sm mb-4">
                Connect with local experts who know this neighborhood
              </p>
              <Button className="w-full bg-white text-primary hover:bg-white/90">
                <MapPin className="w-4 h-4 mr-2" />
                View Local Agents
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};