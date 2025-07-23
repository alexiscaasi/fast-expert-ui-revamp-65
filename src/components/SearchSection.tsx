import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Filter, SlidersHorizontal, Zap } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const SearchSection = () => {
  const [searchFilters, setSearchFilters] = useState({
    location: "",
    specialty: "",
    experience: "",
    rating: "",
  });

  const specialties = [
    "First-time Buyers",
    "Luxury Homes", 
    "Investment Properties",
    "Condos & Townhomes",
    "Commercial Real Estate",
    "New Construction",
    "Senior Housing",
    "Foreclosures",
    "Relocation Specialist",
  ];

  return (
    <section className="py-16 bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-4">
            Professional Directory
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Find Real Estate Professionals
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Search by location, experience, specialties, and reviews to find the right professional for your needs
          </p>
        </div>

        {/* Professional Type Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-card rounded-lg p-2 border">
            <div className="flex gap-1">
              <Button variant="default" size="sm" className="bg-primary text-primary-foreground">
                Agents
              </Button>
              <Button variant="ghost" size="sm">
                Loan Officers
              </Button>
              <Button variant="ghost" size="sm">
                Vendors
              </Button>
            </div>
          </div>
        </div>

        {/* Advanced Search Card */}
        <Card className="p-8 shadow-lg bg-gradient-card">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {/* Location Search */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Location</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                <Input
                  placeholder="City, State or ZIP"
                  value={searchFilters.location}
                  onChange={(e) =>
                    setSearchFilters({ ...searchFilters, location: e.target.value })
                  }
                  className="pl-10"
                />
              </div>
            </div>

            {/* Specialty Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Specialty</label>
              <Select
                value={searchFilters.specialty}
                onValueChange={(value) =>
                  setSearchFilters({ ...searchFilters, specialty: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Choose specialty" />
                </SelectTrigger>
                <SelectContent>
                  {specialties.map((specialty) => (
                    <SelectItem key={specialty} value={specialty}>
                      {specialty}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Experience Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Experience</label>
              <Select
                value={searchFilters.experience}
                onValueChange={(value) =>
                  setSearchFilters({ ...searchFilters, experience: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Years of experience" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="0-2">0-2 years</SelectItem>
                  <SelectItem value="3-5">3-5 years</SelectItem>
                  <SelectItem value="6-10">6-10 years</SelectItem>
                  <SelectItem value="10+">10+ years</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Rating Filter */}
            <div className="space-y-2">
              <label className="text-sm font-medium text-foreground">Minimum Rating</label>
              <Select
                value={searchFilters.rating}
                onValueChange={(value) =>
                  setSearchFilters({ ...searchFilters, rating: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Rating" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="4.5">4.5+ Stars</SelectItem>
                  <SelectItem value="4.0">4.0+ Stars</SelectItem>
                  <SelectItem value="3.5">3.5+ Stars</SelectItem>
                  <SelectItem value="3.0">3.0+ Stars</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Quick Filters */}
          <div className="mb-6">
            <div className="flex items-center gap-2 mb-3">
              <SlidersHorizontal className="w-4 h-4 text-muted-foreground" />
              <span className="text-sm font-medium text-foreground">Quick Filters:</span>
            </div>
            <div className="flex flex-wrap gap-2">
              {[
                "Near Me",
                "Top Rated",
                "Most Reviews", 
                "Recently Active",
                "Trusted Pro Badge",
                "Fast Response",
                "Local Expert",
                "5+ Years Experience"
              ].map((filter) => (
                <Badge
                  key={filter}
                  variant="outline"
                  className="cursor-pointer hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  {filter}
                </Badge>
              ))}
            </div>
          </div>

          {/* Search Actions */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button className="btn-primary flex-1 h-12">
              <Search className="w-5 h-5 mr-2" />
              Search Professionals
            </Button>
            <Button variant="outline" className="h-12 px-6">
              <Filter className="w-5 h-5 mr-2" />
              More Filters
            </Button>
          </div>
        </Card>

        {/* Popular Searches */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">Popular searches:</p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "Los Angeles agents",
              "FHA loan specialists",
              "Miami luxury condos",
              "Austin contractors",
              "Denver investment pros",
              "VA loan experts"
            ].map((search) => (
              <Button
                key={search}
                variant="ghost"
                size="sm"
                className="text-primary hover:bg-primary/10"
              >
                {search}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};