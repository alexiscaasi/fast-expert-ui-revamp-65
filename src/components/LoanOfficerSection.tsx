import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Star, MapPin, MessageCircle, Shield, Calculator, Home } from "lucide-react";

export const LoanOfficerSection = () => {
  const loanOfficers = [
    {
      id: 1,
      name: "Sarah Johnson",
      title: "Senior Loan Officer",
      company: "Premier Home Lending",
      location: "Austin, TX",
      yearsExp: 8,
      rating: 4.9,
      reviewCount: 127,
      specialties: ["FHA", "VA", "Jumbo", "First-time Buyers"],
      licenseId: "MLO-12345",
      recentLoans: 45,
      avatar: "/placeholder.svg"
    },
    {
      id: 2,
      name: "Michael Chen",
      title: "Mortgage Specialist",
      company: "Metro Financial Group",
      location: "Denver, CO",
      yearsExp: 12,
      rating: 4.8,
      reviewCount: 203,
      specialties: ["Renovation", "Bridge", "Investment", "USDA"],
      licenseId: "MLO-67890",
      recentLoans: 62,
      avatar: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Jennifer Martinez",
      title: "Loan Advisor",
      company: "Coastal Mortgage Solutions",
      location: "Miami, FL",
      yearsExp: 6,
      rating: 4.9,
      reviewCount: 89,
      specialties: ["Luxury", "Jumbo", "Foreign National", "Self-Employed"],
      licenseId: "MLO-11223",
      recentLoans: 38,
      avatar: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-secondary/10 text-secondary border-secondary/20 mb-4">
            Trusted Lenders
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Top Loan Officers in Your Area
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with experienced loan officers who specialize in your loan type and location
          </p>
        </div>

        {/* Loan Officer Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {loanOfficers.map((officer) => (
            <Card key={officer.id} className="p-6 hover:shadow-lg transition-shadow bg-gradient-card">
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={officer.avatar} alt={officer.name} />
                    <AvatarFallback>{officer.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold text-foreground">{officer.name}</h3>
                    <p className="text-sm text-muted-foreground">{officer.title}</p>
                    <p className="text-sm font-medium text-primary">{officer.company}</p>
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
                    {officer.location}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{officer.rating}</span>
                    <span className="text-muted-foreground text-sm">({officer.reviewCount})</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <span className="text-muted-foreground">Experience:</span>
                    <span className="font-medium ml-1">{officer.yearsExp} years</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Recent Loans:</span>
                    <span className="font-medium ml-1">{officer.recentLoans}</span>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-2">License: {officer.licenseId}</p>
                  <div className="flex flex-wrap gap-1">
                    {officer.specialties.map((specialty) => (
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
                  Message
                </Button>
                <Button variant="outline" size="sm">
                  <Calculator className="w-4 h-4 mr-1" />
                  Calculate
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Loan Type Filters */}
        <div className="text-center">
          <p className="text-muted-foreground mb-4">Browse by loan type:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "FHA Loans",
              "VA Loans", 
              "Jumbo Loans",
              "First-time Buyers",
              "Renovation Loans",
              "Bridge Loans",
              "USDA Rural",
              "Self-Employed"
            ].map((loanType) => (
              <Button
                key={loanType}
                variant="ghost"
                size="sm"
                className="text-primary hover:bg-primary/10"
              >
                {loanType}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};