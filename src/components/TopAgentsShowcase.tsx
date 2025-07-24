import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Award, MapPin, Trophy } from "lucide-react";

export const TopAgentsShowcase = () => {
  const achievements = [
    {
      id: 1,
      icon: Trophy,
      iconBg: "bg-primary/10",
      iconColor: "text-primary",
      badgeText: "2025 TOP AGENT",
      title: "Top 500 Agents in the U.S.",
      description: "Representing the top 1% of all real estate professionals nationwide",
      buttonText: "View Top 500 Agents",
      highlight: false
    },
    {
      id: 2,
      icon: Award,
      iconBg: "bg-accent/10", 
      iconColor: "text-accent",
      badgeText: "2025 CALIFORNIA",
      title: "Top 25 Agents in California",
      description: "Elite performers leading California's competitive market",
      buttonText: "View Top 25 Agents",
      highlight: false
    },
    {
      id: 3,
      icon: Star,
      iconBg: "bg-success/10",
      iconColor: "text-success", 
      badgeText: "2025 TOP AGENT SANTA CRUZ, CA",
      title: "Top 15 Agents in Santa Cruz, CA",
      description: "Local market leaders with proven track records",
      buttonText: "View Top 15 Agents",
      highlight: false
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4 inline-flex items-center gap-2">
            <Trophy className="w-4 h-4" />
            Award Winners
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find the Top Real Estate Agents
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Connect with award-winning agents who have proven excellence in their markets
          </p>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {achievements.map((achievement) => {
            const IconComponent = achievement.icon;
            return (
              <Card 
                key={achievement.id} 
                className={`group relative overflow-hidden bg-gradient-card hover:shadow-lg transition-all duration-300 h-full ${
                  achievement.highlight ? 'ring-2 ring-primary/20 shadow-glow' : ''
                }`}
              >
                <div className="p-8 text-center flex flex-col h-full">
                  {/* Award Badge */}
                  <div className="mb-6">
                    <div className={`w-16 h-16 mx-auto ${achievement.iconBg} rounded-2xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className={`w-8 h-8 ${achievement.iconColor}`} />
                    </div>
                    <Badge 
                      variant="outline" 
                      className="text-xs font-semibold px-3 py-1 bg-background/50 border-muted-foreground/20"
                    >
                      {achievement.badgeText}
                    </Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-tight">
                    {achievement.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                    {achievement.description}
                  </p>

                  {/* CTA Button */}
                  <div className="mt-auto">
                    <Button 
                      className={`w-full h-12 font-semibold transition-all duration-300 ${
                        achievement.highlight 
                          ? 'btn-primary shadow-lg hover:shadow-xl' 
                          : 'bg-primary/90 hover:bg-primary text-primary-foreground hover:shadow-md'
                      }`}
                      size="lg"
                    >
                      {achievement.buttonText}
                    </Button>
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-full" />
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/5 to-transparent rounded-tr-full" />
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
