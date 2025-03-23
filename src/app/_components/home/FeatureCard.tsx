import React from "react";
import { cn } from "@/app/_lib/utils";
import { BlurContainer } from "../ui/BlurContainer";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  iconBg?: string;
  delay?: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  icon,
  iconBg = "bg-primary/10",
  delay = "0s",
}) => {
  return (
    <BlurContainer
      className="hover-scale animate-fade-in p-6"
      style={{ animationDelay: delay }}
    >
      <div
        className={cn(
          "mb-4 flex h-12 w-12 items-center justify-center rounded-full",
          iconBg,
        )}
      >
        {icon}
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </BlurContainer>
  );
};

export const Features: React.FC = () => {
  const features = [
    {
      title: "Find Nearby Services",
      description:
        "Discover top-rated pet services in your area with real reviews from pet owners.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
      iconBg: "bg-primary/10",
      delay: "0.1s",
    },
    {
      title: "Easy Scheduling",
      description:
        "Book appointments that work with your schedule and receive instant confirmations.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
          <line x1="16" y1="2" x2="16" y2="6" />
          <line x1="8" y1="2" x2="8" y2="6" />
          <line x1="3" y1="10" x2="21" y2="10" />
        </svg>
      ),
      iconBg: "bg-accent/10",
      delay: "0.2s",
    },
    {
      title: "Pet Profiles",
      description:
        "Create detailed profiles for your pets, including health records and preferences.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
      iconBg: "bg-primary/10",
      delay: "0.3s",
    },
    {
      title: "Secure Payments",
      description:
        "Pay securely online for all services with transparent pricing and no hidden fees.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2" />
          <line x1="1" y1="10" x2="23" y2="10" />
        </svg>
      ),
      iconBg: "bg-accent/10",
      delay: "0.4s",
    },
    {
      title: "Reliable Reviews",
      description:
        "Read and leave verified reviews to help you find the best care for your pets.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
        </svg>
      ),
      iconBg: "bg-primary/10",
      delay: "0.5s",
    },
    {
      title: "Appointment Reminders",
      description:
        "Never miss an appointment with automated reminders via email and SMS.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-accent"
        >
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      ),
      iconBg: "bg-accent/10",
      delay: "0.6s",
    },
  ];

  return (
    <section className="px-4 py-20 md:px-6" id="features">
      <div className="container mx-auto">
        <div className="animate-fade-in mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Everything you need for your pets care
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple, powerful tools to find, book, and manage pet services all in
            one place.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
              icon={feature.icon}
              iconBg={feature.iconBg}
              delay={feature.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
