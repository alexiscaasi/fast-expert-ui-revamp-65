import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, MessageCircle, Award, TrendingUp, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Agent {
  id: string;
  name: string;
  title: string;
  company: string;
  location: string;
  rating: number;
  reviews: number;
  image: string;
  specialties: string[];
  closings: number;
  responseTime: string;
  isOnline: boolean;
  badges: string[];
  trustScore: number;
}

export const FeaturedAgents = () => {
  const [selectedAgent, setSelectedAgent] = useState<string | null>(null);

  const agents: Agent[] = [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "Senior Real Estate Agent",
      company: "Premier Properties",
      location: "Los Angeles, CA",
      rating: 4.9,
      reviews: 247,
      image: "/api/placeholder/150/150",
      specialties: ["Luxury Homes", "First-Time Buyers"],
      closings: 156,
      responseTime: "< 30 min",
      isOnline: true,
      badges: ["Top 1%", "AI Verified"],
      trustScore: 98
    },
    {
      id: "2", 
      name: "Michael Chen",
      title: "Investment Property Specialist",
      company: "Elite Realty Group",
      location: "San Francisco, CA",
      rating: 4.8,
      reviews: 189,
      image: "/api/placeholder/150/150",
      specialties: ["Investment Properties", "Commercial"],
      closings: 124,
      responseTime: "< 45 min",
      isOnline: true,
      badges: ["Expert Certified", "Quick Response"],
      trustScore: 95
    },
    {
      id: "3",
      name: "Jessica Rodriguez",
      title: "Luxury Home Consultant",
      company: "Platinum Estates",
      location: "Miami, FL",
      rating: 4.9,
      reviews: 312,
      image: "/api/placeholder/150/150",
      specialties: ["Luxury Homes", "Waterfront Properties"],
      closings: 201,
      responseTime: "< 20 min",
      isOnline: false,
      badges: ["Top Performer", "Luxury Certified"],
      trustScore: 97
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-accent/20 text-accent-foreground border-accent/30 mb-4">
            Featured Experts
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Meet Our Top-Rated Agents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with proven professionals who deliver exceptional results
          </p>
        </div>

        {/* Agents Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {agents.map((agent) => (
            <Card 
              key={agent.id} 
              className={`p-6 interactive-lift cursor-pointer transition-all duration-300 ${
                selectedAgent === agent.id ? 'ring-2 ring-primary shadow-glow' : ''
              }`}
              onClick={() => setSelectedAgent(selectedAgent === agent.id ? null : agent.id)}
            >
              {/* Agent Header */}
              <div className="flex items-start space-x-4 mb-4">
                <div className="relative">
                  <Avatar className="w-16 h-16">
                    <AvatarImage src={agent.image} alt={agent.name} />
                    <AvatarFallback className="bg-primary/10 text-primary text-lg font-semibold">
                      {agent.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  {agent.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-white"></div>
                  )}
                </div>
                
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-lg text-foreground mb-1">{agent.name}</h3>
                  <p className="text-sm text-muted-foreground mb-1">{agent.title}</p>
                  <p className="text-sm text-muted-foreground">{agent.company}</p>
                </div>
              </div>

              {/* Location & Rating */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4 mr-1" />
                  {agent.location}
                </div>
                <div className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-accent text-accent" />
                  <span className="font-semibold text-sm">{agent.rating}</span>
                  <span className="text-xs text-muted-foreground">({agent.reviews})</span>
                </div>
              </div>

              {/* Badges */}
              <div className="flex gap-2 mb-4">
                {agent.badges.map((badge) => (
                  <Badge key={badge} variant="outline" className="text-xs">
                    {badge}
                  </Badge>
                ))}
              </div>

              {/* Specialties */}
              <div className="mb-4">
                <div className="text-xs text-muted-foreground mb-2">Specialties:</div>
                <div className="flex flex-wrap gap-1">
                  {agent.specialties.map((specialty) => (
                    <Badge key={specialty} className="bg-primary-soft text-primary text-xs">
                      {specialty}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                <div>
                  <div className="font-bold text-sm text-foreground">{agent.closings}</div>
                  <div className="text-xs text-muted-foreground">Closings</div>
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">{agent.trustScore}%</div>
                  <div className="text-xs text-muted-foreground">Trust Score</div>
                </div>
                <div>
                  <div className="font-bold text-sm text-foreground">{agent.responseTime}</div>
                  <div className="text-xs text-muted-foreground">Response</div>
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-2">
                <Button size="sm" className="flex-1 btn-primary">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Contact
                </Button>
                <Button size="sm" variant="outline" className="flex-1">
                  <Phone className="w-4 h-4 mr-2" />
                  Call
                </Button>
              </div>

              {/* Expanded Details */}
              {selectedAgent === agent.id && (
                <div className="mt-4 pt-4 border-t border-border animate-in slide-in-from-top-2">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm">
                      <TrendingUp className="w-4 h-4 text-success" />
                      <span>Avg. sale price: $1.2M above asking</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Users className="w-4 h-4 text-primary" />
                      <span>Helped 89% of clients find homes in 30 days</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <Award className="w-4 h-4 text-accent" />
                      <span>NAR Certified Professional</span>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Button size="lg" className="btn-primary">
            View All Agents
          </Button>
        </div>
      </div>
    </section>
  );
};