import React from "react";
import { cn } from "@/app/_lib/utils";
import { BlurContainer } from "../ui/BlurContainer";
import { Chip } from "../ui/Chip";

interface ServiceProviderCardProps {
  name: string;
  image: string;
  rating: number;
  reviewCount: number;
  services: string[];
  location: string;
  distance: string;
  featured?: boolean;
  delay?: string;
}

export const ServiceProviderCard: React.FC<ServiceProviderCardProps> = ({
  name,
  rating,
  reviewCount,
  services,
  location,
  distance,
  featured = false,
  delay = "0s",
}) => {
  return (
    <BlurContainer
      className={cn(
        "hover-scale animate-fade-in overflow-hidden",
        featured ? "border-primary/20 bg-primary/5" : "",
      )}
      style={{ animationDelay: delay }}
    >
      <div className="relative">
        <div className="mb-4 aspect-[4/3] overflow-hidden rounded-lg bg-muted">
          <div className="animate-pulse-subtle h-full w-full bg-gradient-to-br from-gray-200 to-gray-300" />
        </div>

        {featured && (
          <div className="absolute left-3 top-3">
            <Chip variant="primary" size="sm">
              Featured
            </Chip>
          </div>
        )}

        <div className="absolute right-3 top-3">
          <div className="flex items-center rounded-full bg-white/90 px-2 py-1 shadow-sm backdrop-blur-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1 text-amber-400"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span className="text-xs font-medium">
              {rating} ({reviewCount})
            </span>
          </div>
        </div>
      </div>

      <h3 className="mb-1 text-lg font-semibold">{name}</h3>

      <div className="mb-3 flex items-center text-sm text-muted-foreground">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        {location} • {distance}
      </div>

      <div className="mb-4 flex flex-wrap gap-2">
        {services.map((service, index) => (
          <Chip key={index} variant="outline" size="sm">
            {service}
          </Chip>
        ))}
      </div>

      <a
        href="#"
        className="story-link inline-block text-sm font-medium text-primary transition-colors hover:text-primary/80"
      >
        View Profile
      </a>
    </BlurContainer>
  );
};

export const FeaturedProviders: React.FC = () => {
  const providers = [
    {
      name: "Happy Tails Grooming",
      image: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 156,
      services: ["Grooming", "Bathing", "Nail Trimming"],
      location: "San Francisco",
      distance: "0.8 miles",
      featured: true,
      delay: "0.1s",
    },
    {
      name: "Pawsome Pet Sitting",
      image: "/placeholder.svg",
      rating: 4.8,
      reviewCount: 89,
      services: ["Pet Sitting", "Dog Walking", "Overnight Care"],
      location: "San Francisco",
      distance: "1.2 miles",
      featured: false,
      delay: "0.2s",
    },
    {
      name: "Furry Friends Daycare",
      image: "/placeholder.svg",
      rating: 4.7,
      reviewCount: 124,
      services: ["Daycare", "Training", "Playtime"],
      location: "San Francisco",
      distance: "1.5 miles",
      featured: false,
      delay: "0.3s",
    },
    {
      name: "VetCare Clinic",
      image: "/placeholder.svg",
      rating: 4.9,
      reviewCount: 207,
      services: ["Checkups", "Vaccinations", "Emergency Care"],
      location: "San Francisco",
      distance: "2.0 miles",
      featured: true,
      delay: "0.4s",
    },
  ];

  return (
    <section className="bg-secondary/50 px-4 py-20 md:px-6">
      <div className="container mx-auto">
        <div className="animate-fade-in mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Top-rated service providers
          </h2>
          <p className="text-lg text-muted-foreground">
            Discover trusted professionals who provide exceptional care for your
            pets.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {providers.map((provider, index) => (
            <ServiceProviderCard
              key={index}
              name={provider.name}
              image={provider.image}
              rating={provider.rating}
              reviewCount={provider.reviewCount}
              services={provider.services}
              location={provider.location}
              distance={provider.distance}
              featured={provider.featured}
              delay={provider.delay}
            />
          ))}
        </div>

        <div
          className="animate-fade-in mt-12 text-center"
          style={{ animationDelay: "0.5s" }}
        >
          <a
            href="/explore"
            className="story-link inline-flex items-center font-medium text-primary transition-colors hover:text-primary/80"
          >
            <span>View all service providers</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="ml-1"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};
