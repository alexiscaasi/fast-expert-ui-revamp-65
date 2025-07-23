import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin,
  ArrowUp,
  Star,
  Shield,
  Award
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* Newsletter Section */}
      <div className="border-b border-border/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Card className="p-8 bg-gradient-primary text-white">
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">
                Stay Ahead of the Market
              </h3>
              <p className="text-white/90 mb-6">
                Get exclusive market insights, new listing alerts, and expert tips delivered to your inbox
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <Input 
                  type="email" 
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60 focus:bg-white/20"
                />
                <Button className="bg-white text-primary hover:bg-white/90 whitespace-nowrap">
                  Subscribe
                </Button>
              </div>
              
              <p className="text-white/70 text-xs mt-3">
                Join 50,000+ real estate professionals and homeowners
              </p>
            </div>
          </Card>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FE</span>
              </div>
              <span className="text-xl font-bold">FastExpert</span>
              <Badge variant="secondary" className="bg-accent/20 text-accent-foreground text-xs">
                AI-Powered
              </Badge>
            </div>
            
            <p className="text-muted-foreground mb-6 leading-relaxed">
              The leading AI-powered platform connecting homebuyers and sellers with top-performing real estate agents nationwide.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="w-4 h-4 text-primary" />
                <span>75,000+ Trusted Agents Nationwide</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Star className="w-4 h-4 text-accent" />
                <span>4.8/5 Rating (10,526 Reviews)</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Shield className="w-4 h-4 text-success" />
                <span>100% Verified & Trusted</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-3">
              {[
                "Find Agents",
                "Search Neighborhoods", 
                "Market Insights",
                "Affordability Calculator",
                "AI Chat Assistant",
                "Agent Matching"
              ].map((link) => (
                <div key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-3">
              {[
                "Home Buying Guide",
                "Selling Your Home",
                "Market Reports",
                "Neighborhood Guides",
                "Investment Properties",
                "First-Time Buyers"
              ].map((link) => (
                <div key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Support & Contact */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <div>
                  <div className="font-medium text-sm">1-800-FASTEXPERT</div>
                  <div className="text-xs text-muted-foreground">Mon-Fri 8AM-8PM EST</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-primary" />
                <div>
                  <div className="font-medium text-sm">support@fastexpert.com</div>
                  <div className="text-xs text-muted-foreground">24/7 Response</div>
                </div>
              </div>

              <div className="pt-4">
                <h5 className="font-medium mb-3 text-sm">Follow Us</h5>
                <div className="flex gap-3">
                  {[
                    { icon: Facebook, label: "Facebook" },
                    { icon: Twitter, label: "Twitter" },
                    { icon: Instagram, label: "Instagram" },
                    { icon: Linkedin, label: "LinkedIn" }
                  ].map((social) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={social.label}
                        href="#"
                        className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                        aria-label={social.label}
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-12 pt-8 border-t border-border/20">
          <div className="flex flex-wrap items-center justify-center gap-8 mb-8">
            {[
              { name: "Better Business Bureau", rating: "A+" },
              { name: "NAR Certified", rating: "Verified" },
              { name: "Zillow Premier Partner", rating: "Gold" },
              { name: "Realtor.com Certified", rating: "Professional" }
            ].map((cert, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Award className="w-4 h-4 text-accent" />
                <span className="text-muted-foreground">{cert.name}</span>
                <Badge variant="outline" className="text-xs">
                  {cert.rating}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-sm text-muted-foreground text-center md:text-left">
              © 2024 FastExpert. All rights reserved. | 
              <a href="#" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> | 
              <a href="#" className="hover:text-primary transition-colors ml-1">Terms of Service</a> |
              <a href="#" className="hover:text-primary transition-colors ml-1">Accessibility</a>
            </div>
            
            <Button
              onClick={scrollToTop}
              variant="outline"
              size="sm"
              className="hover:bg-primary hover:text-primary-foreground"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};