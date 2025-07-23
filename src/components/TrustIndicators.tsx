import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Shield, Users, Award, TrendingUp, CheckCircle } from "lucide-react";

export const TrustIndicators = () => {
  const stats = [
    {
      icon: Users,
      value: "75,000+",
      label: "Trusted Agents",
      description: "Vetted professionals nationwide"
    },
    {
      icon: Star,
      value: "4.8/5",
      label: "Average Rating",
      description: "From verified reviews"
    },
    {
      icon: CheckCircle,
      value: "10,526",
      label: "Verified Reviews",
      description: "Real client feedback"
    },
    {
      icon: TrendingUp,
      value: "98%",
      label: "Success Rate",
      description: "Successful matches made"
    }
  ];

  const certifications = [
    { name: "Better Business Bureau", rating: "A+", verified: true },
    { name: "NAR Certified", rating: "Verified", verified: true },
    { name: "Zillow Premier", rating: "Partner", verified: true },
    { name: "Realtor.com Certified", rating: "Professional", verified: true }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="p-6 text-center interactive-lift bg-gradient-card">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">{stat.value}</div>
                <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                <div className="text-xs text-muted-foreground">{stat.description}</div>
              </Card>
            );
          })}
        </div>

        {/* Trust Badges & Certifications */}
        <Card className="p-8 bg-gradient-surface">
          <div className="text-center mb-8">
            <Badge className="bg-success/10 text-success border-success/20 mb-4">
              <Shield className="w-4 h-4 mr-2" />
              Trusted & Verified
            </Badge>
            <h3 className="text-2xl font-bold text-foreground mb-2">
              Your Trust & Security Matter
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every agent on our platform is thoroughly vetted and certified by leading industry organizations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div key={index} className="flex items-center space-x-3 p-4 rounded-lg border border-border bg-surface-elevated">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                  <Award className="w-5 h-5 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="font-medium text-sm text-foreground">{cert.name}</div>
                  <div className="text-xs text-muted-foreground">{cert.rating}</div>
                </div>
                {cert.verified && (
                  <CheckCircle className="w-5 h-5 text-success" />
                )}
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
};