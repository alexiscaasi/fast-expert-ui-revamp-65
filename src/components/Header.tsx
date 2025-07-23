import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, User, MapPin, Star, Phone } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-border shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">FE</span>
            </div>
            <span className="text-xl font-bold text-foreground">FastExpert</span>
            <Badge variant="secondary" className="bg-accent/20 text-accent-foreground text-xs">
              AI-Powered
            </Badge>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
              <User className="w-4 h-4" />
              <span>Find Agents</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
              <MapPin className="w-4 h-4" />
              <span>Loan Officers</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
              <Star className="w-4 h-4" />
              <span>Vendors</span>
            </div>
            <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
              <Phone className="w-4 h-4" />
              <span>Market Stats</span>
            </div>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground">
              Sign In
            </Button>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                Join as Agent
              </Button>
              <Button variant="outline" size="sm">
                Join as Lender
              </Button>
              <Button size="sm" className="btn-primary">
                Join as Vendor
              </Button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-md hover:bg-muted transition-colors"
          >
            {isMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-in slide-in-from-top-2">
            <div className="flex flex-col space-y-3">
              <div className="flex items-center space-x-2 text-sm text-muted-foreground py-2">
                <User className="w-4 h-4" />
                <span>Find Agents</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground py-2">
                <MapPin className="w-4 h-4" />
                <span>Neighborhoods</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground py-2">
                <Star className="w-4 h-4" />
                <span>Reviews</span>
              </div>
              <div className="flex items-center space-x-2 text-sm text-muted-foreground py-2">
                <Phone className="w-4 h-4" />
                <span>Support</span>
              </div>
              <div className="flex flex-col space-y-2 pt-4 border-t border-border">
                <Button variant="ghost" size="sm">
                  Sign In
                </Button>
                <Button size="sm" className="btn-primary">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};