import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle, ThumbsUp } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  review: string;
  avatar: string;
  agentName: string;
  propertyType: string;
  timeframe: string;
  verified: boolean;
}

export const TestimonialsSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "David & Lisa Martinez",
      location: "Austin, TX",
      rating: 5,
      review: "FastExpert's AI matching system connected us with Sarah, who understood exactly what we needed. She found us our dream home in just 3 weeks! The whole process was incredibly smooth and professional.",
      avatar: "/api/placeholder/60/60",
      agentName: "Sarah Johnson",
      propertyType: "Single Family Home",
      timeframe: "3 weeks",
      verified: true
    },
    {
      id: "2",
      name: "Michael Chen",
      location: "San Francisco, CA",
      rating: 5,
      review: "As a first-time homebuyer, I was overwhelmed by the process. The AI chat assistant guided me through every step, and my matched agent was incredibly patient and knowledgeable. Couldn't be happier!",
      avatar: "/api/placeholder/60/60",
      agentName: "Jennifer Kim",
      propertyType: "Condo",
      timeframe: "6 weeks",
      verified: true
    },
    {
      id: "3",
      name: "Jennifer Rodriguez",
      location: "Miami, FL",
      rating: 5,
      review: "The neighborhood insights feature helped us make an informed decision about our investment property. The real-time market data and AI predictions were spot-on. Excellent platform!",
      avatar: "/api/placeholder/60/60",
      agentName: "Carlos Mendez",
      propertyType: "Investment Property",
      timeframe: "4 weeks",
      verified: true
    },
    {
      id: "4",
      name: "Robert Thompson",
      location: "Denver, CO",
      rating: 5,
      review: "Sold our home 15% above asking price thanks to the market analytics and our agent's expertise. The AI-powered pricing recommendations were incredibly accurate. Highly recommend!",
      avatar: "/api/placeholder/60/60",
      agentName: "Amanda Wilson",
      propertyType: "Luxury Home",
      timeframe: "2 weeks",
      verified: true
    }
  ];

  const stats = [
    { value: "98%", label: "Client Satisfaction" },
    { value: "15%", label: "Above Market Results" },
    { value: "30 Days", label: "Average Sale Time" },
    { value: "10,526", label: "Happy Clients" }
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            <ThumbsUp className="w-4 h-4 mr-2" />
            Client Success Stories
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Real experiences from clients who found their perfect homes through our AI-powered platform
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {stats.filter(stat => stat.label !== "Above Market Results").map((stat, index) => (
            <Card key={index} className="p-6 text-center bg-gradient-card">
              <div className="text-3xl font-bold text-primary mb-2">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="p-8 interactive-lift bg-gradient-card">
              {/* Quote Icon */}
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star 
                    key={i} 
                    className={`w-5 h-5 ${
                      i < testimonial.rating 
                        ? 'fill-accent text-accent' 
                        : 'text-muted-foreground'
                    }`} 
                  />
                ))}
              </div>

              {/* Review Text */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.review}"
              </blockquote>

              {/* Client Info */}
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-3">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="flex items-center gap-2">
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      {testimonial.verified && (
                        <CheckCircle className="w-4 h-4 text-success" />
                      )}
                    </div>
                    <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                  </div>
                </div>
              </div>

              {/* Transaction Details */}
              <div className="mt-4 pt-4 border-t border-border">
                <div className="flex flex-wrap gap-x-8 gap-y-2 text-sm text-foreground">
                  <div>
                    <span className="text-muted-foreground">Agent: </span>
                    <span className="font-medium">{testimonial.agentName}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Timeframe: </span>
                    <span className="font-medium">{testimonial.timeframe}</span>
                  </div>
                  <div>
                    <span className="text-muted-foreground">Property: </span>
                    <span className="font-medium">{testimonial.propertyType}</span>
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Trust Indicators
        <Card className="p-8 bg-gradient-primary text-white text-center">
          <div className="max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-accent text-accent" />
              ))}
            </div>
            <div className="text-2xl font-bold mb-2">4.8 out of 5 stars</div>
            <div className="text-white/90 mb-6">Based on 10,526 verified reviews from real clients</div>
            <div className="text-white/80 text-sm">
              All reviews are verified through our secure platform and represent real client experiences
            </div>
          </div>
        </Card> */}
      </div>
    </section>
  );
};