import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, MapPin, MessageCircle, Shield, Wrench, Paintbrush, Camera, Hammer } from "lucide-react";

export const VendorSection = () => {
  const vendors = [
    {
      id: 1,
      name: "Elite Home Staging",
      owner: "Jessica Williams",
      category: "Home Staging",
      location: "Los Angeles, CA",
      yearsExp: 7,
      rating: 4.9,
      reviewCount: 156,
      specialties: ["Luxury Staging", "Vacant Homes", "Occupied Staging"],
      recentJobs: 89,
      trustedByAgents: 23,
      avatar: "/placeholder.svg",
      icon: Camera
    },
    {
      id: 2,
      name: "Premier Home Inspections",
      owner: "Robert Thompson",
      category: "Home Inspection",
      location: "Austin, TX",
      yearsExp: 12,
      rating: 4.8,
      reviewCount: 289,
      specialties: ["Pre-listing", "Buyer Inspections", "New Construction"],
      recentJobs: 145,
      trustedByAgents: 45,
      avatar: "/placeholder.svg",
      icon: Shield
    },
    {
      id: 3,
      name: "Ace Renovation Contractors",
      owner: "Maria Rodriguez",
      category: "General Contractor",
      location: "Denver, CO",
      yearsExp: 15,
      rating: 4.9,
      reviewCount: 201,
      specialties: ["Kitchen Remodel", "Bathroom", "Flooring", "Painting"],
      recentJobs: 67,
      trustedByAgents: 31,
      avatar: "/placeholder.svg",
      icon: Hammer
    },
    {
      id: 4,
      name: "Precision Landscaping",
      owner: "David Park",
      category: "Landscaping",
      location: "Seattle, WA",
      yearsExp: 9,
      rating: 4.7,
      reviewCount: 124,
      specialties: ["Curb Appeal", "Maintenance", "Design", "Hardscaping"],
      recentJobs: 78,
      trustedByAgents: 18,
      avatar: "/placeholder.svg",
      icon: Paintbrush
    }
  ];

  const categories = [
    { name: "Home Staging", count: 45, icon: Camera },
    { name: "General Contractor", count: 67, icon: Hammer },
    { name: "Home Inspector", count: 34, icon: Shield },
    { name: "Landscaping", count: 29, icon: Paintbrush },
    { name: "Plumbing", count: 56, icon: Wrench },
    { name: "Electrical", count: 41, icon: Wrench }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-accent/10 text-accent border-accent/20 mb-4">
            Trusted Vendors
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Pre-Vetted Home Service Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with trusted contractors, stagers, inspectors, and service providers recommended by top agents
          </p>
        </div>

        {/* Category Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-12">
          {categories.map((category) => (
            <Card key={category.name} className="p-4 text-center hover:shadow-md transition-shadow cursor-pointer bg-gradient-card">
              <div className="flex flex-col items-center gap-2">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-medium text-sm">{category.name}</h3>
                <Badge variant="secondary" className="text-xs">
                  {category.count} vendors
                </Badge>
              </div>
            </Card>
          ))}
        </div>

        {/* Featured Vendors */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {vendors.map((vendor) => (
            <Card key={vendor.id} className="p-6 hover:shadow-lg transition-shadow bg-gradient-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={vendor.avatar} alt={vendor.owner} />
                    <AvatarFallback>{vendor.owner.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{vendor.name}</h3>
                    <p className="text-sm text-muted-foreground">Owner: {vendor.owner}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <vendor.icon className="w-4 h-4 text-primary" />
                      <span className="text-sm font-medium text-primary">{vendor.category}</span>
                    </div>
                  </div>
                </div>
                <Badge className="bg-primary/10 text-primary border-primary/20">
                  <Shield className="w-3 h-3 mr-1" />
                  Trusted Pro
                </Badge>
              </div>

              <div className="space-y-3 mb-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4" />
                    {vendor.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{vendor.rating}</span>
                    <span className="text-muted-foreground text-sm">({vendor.reviewCount})</span>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <span className="font-medium text-primary">{vendor.yearsExp}</span>
                    <p className="text-muted-foreground">Years Exp</p>
                  </div>
                  <div className="text-center">
                    <span className="font-medium text-primary">{vendor.recentJobs}</span>
                    <p className="text-muted-foreground">Recent Jobs</p>
                  </div>
                  <div className="text-center">
                    <span className="font-medium text-primary">{vendor.trustedByAgents}</span>
                    <p className="text-muted-foreground">Agent Partners</p>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">Specialties:</p>
                  <div className="flex flex-wrap gap-1">
                    {vendor.specialties.map((specialty) => (
                      <Badge key={specialty} variant="outline" className="text-xs">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              <div className="flex gap-2">
                <Button className="flex-1" size="sm">
                  <MessageCircle className="w-4 h-4 mr-1" />
                  Get Quote
                </Button>
                <Button variant="outline" size="sm">
                  View Portfolio
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <h3 className="text-xl font-semibold mb-4">Need a specific service?</h3>
          <p className="text-muted-foreground mb-6">
            Can't find what you're looking for? Tell us what you need and we'll connect you with the right professional.
          </p>
          <Button className="btn-primary">
            Request Custom Match
          </Button>
        </div>
      </div>
    </section>
  );
};