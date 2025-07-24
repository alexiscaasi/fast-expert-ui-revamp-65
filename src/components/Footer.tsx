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
  Star,
  Shield,
} from "lucide-react";

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-secondary text-secondary-foreground">
      {/* CTA Bar */}
      <div className="px-4 sm:px-6 lg:px-8 py-6" style={{ backgroundColor: "#506386" }}>
        <div className="max-w-7xl mx-auto flex justify-center items-center gap-2">
          <span className="text-white font-semibold text-lg sm:text-xl">
            Find a Top Real Estate Agent Today
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="text-white"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M1.646 5.646a.5.5 0 0 1 .708 0L8 11.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-4">
          {/* Column 1: Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">FE</span>
              </div>
              <span className="text-xl font-bold">FastExpert</span>
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

          {/* Column 2: Platform */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-3">
              {[
                "Learn More",
                "Homes Sold Near Me",
                "City Data Search",
                "Ask a Licensed Agent",
                "Home Buying Tips",
                "U.S. Market Trends",
              ].map((link) => (
                <div key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <div className="space-y-3">
              {[
                "Home Selling Tips",
                "Properties For Sale",
                "Community Questions",
                "Real Estate Blog",
                "Mortgage Calculator",
              ].map((link) => (
                <div key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 4: Agents */}
          <div>
            <h4 className="font-semibold mb-4">Agents</h4>
            <div className="space-y-3">
              {["Login", "Sign Up", "Learn More", "FastExpert App"].map((link) => (
                <div key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 5: Company (moved out of previous div) */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-3">
              {[
                "About Us",
                "Leadership",
                "Fact Sheet",
                "Client Reviews",
                "Authors",
                "Contact Us",
              ].map((link) => (
                <div key={link}>
                  <a href="#" className="text-muted-foreground hover:text-primary transition-colors text-sm">
                    {link}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Column 6: Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-primary" />
                <div>
                  <div className="font-medium text-sm">1-800-319-0511</div>
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
                <div className="flex gap-3 mb-4">
                  {[Facebook, Twitter, Instagram, Linkedin].map((Icon, idx) => (
                    <a
                      key={idx}
                      href="#"
                      className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                      aria-label="Social Media"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>

                <div className="flex gap-4 items-center mt-8">
                  <img src="/bbb.png" alt="BBB Certified" className="h-10 object-contain" />
                  <img src="/image 2.png" alt="Inc. 500 Award" className="h-10 object-contain" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/20 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-sm text-muted-foreground text-center">
            © 2024 FastExpert. All rights reserved. |
            <a href="#" className="hover:text-primary transition-colors ml-1">Privacy Policy</a> |
            <a href="#" className="hover:text-primary transition-colors ml-1">Terms of Service</a> |
            <a href="#" className="hover:text-primary transition-colors ml-1">Accessibility</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
