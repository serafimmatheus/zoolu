import React from "react";
import { Hero } from "@/app/_components/home/Hero";
import { Features } from "@/app/_components/home/FeatureCard";
import { FeaturedProviders } from "@/app/_components/home/ServiceProviderCard";
import { HowItWorks } from "@/app/_components/home/HowItWorks";

const Index = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <main className="flex-grow">
        <Hero />
        <Features />
        <FeaturedProviders />
        <HowItWorks />
      </main>
    </div>
  );
};

export default Index;
