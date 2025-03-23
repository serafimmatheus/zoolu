import React from "react";
import { Chip } from "../ui/Chip";
import { AnimatedButton } from "../ui/AnimatedButton";
import { BlurContainer } from "../ui/BlurContainer";

export const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-32 md:px-6">
      {/* Background Elements */}
      <div className="animate-pulse-subtle absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-primary/5 blur-3xl filter" />
      <div className="animate-pulse-subtle absolute right-1/4 top-40 h-[300px] w-[300px] rounded-full bg-accent/5 blur-3xl filter" />

      <div className="container relative z-10 mx-auto">
        <div className="mx-auto mb-12 max-w-4xl text-center">
          <Chip
            variant="primary"
            className="animate-fade-in mx-auto mb-6"
            style={{ animationDelay: "0.1s" }}
          >
            A better way to care for your pets
          </Chip>

          <h1
            className="animate-fade-in mb-6 text-4xl font-bold tracking-tight md:text-6xl"
            style={{ animationDelay: "0.2s" }}
          >
            Book pet services with just a few taps
          </h1>

          <p
            className="animate-fade-in mb-8 text-xl text-muted-foreground"
            style={{ animationDelay: "0.3s" }}
          >
            Connect with trusted pet groomers, sitters, and more in your area.
            Manage all your pet care needs in one simple platform.
          </p>

          <div
            className="animate-fade-in flex flex-col items-center justify-center gap-4 sm:flex-row"
            style={{ animationDelay: "0.4s" }}
          >
            <AnimatedButton size="lg" withArrow>
              Find services nearby
            </AnimatedButton>
            <AnimatedButton size="lg" variant="outline">
              List your business
            </AnimatedButton>
          </div>
        </div>

        <div
          className="animate-fade-in relative mt-16"
          style={{ animationDelay: "0.5s" }}
        >
          <BlurContainer className="overflow-hidden rounded-2xl shadow-xl">
            <div className="relative flex aspect-video items-center justify-center rounded-xl bg-gradient-to-br from-primary/5 to-accent/5">
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-lg font-medium text-muted-foreground">
                  App interface preview
                </p>
              </div>
              {/* This would be replaced with an actual app screenshot or mockup */}
            </div>
          </BlurContainer>

          {/* Floating feature highlights */}
          <div
            className="animate-float absolute -left-6 -top-6 md:left-6"
            style={{ animationDelay: "0.2s" }}
          >
            <BlurContainer className="p-3 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-accent/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-accent"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                  </svg>
                </div>
                <div className="text-sm font-medium">Health Tracking</div>
              </div>
            </BlurContainer>
          </div>

          <div
            className="animate-float absolute -bottom-6 -right-6 md:right-6"
            style={{ animationDelay: "0.4s" }}
          >
            <BlurContainer className="p-3 shadow-lg">
              <div className="flex items-center space-x-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary"
                  >
                    <path d="M3 11l19-9l-9 19l-2-8l-8-2z" />
                  </svg>
                </div>
                <div className="text-sm font-medium">Location Services</div>
              </div>
            </BlurContainer>
          </div>
        </div>

        <div className="mt-24 text-center">
          <p
            className="animate-fade-in mb-6 text-sm text-muted-foreground"
            style={{ animationDelay: "0.6s" }}
          >
            Trusted by pet owners and businesses across the country
          </p>

          <div
            className="animate-fade-in flex flex-wrap items-center justify-center gap-8 opacity-70 md:gap-12"
            style={{ animationDelay: "0.7s" }}
          >
            {/* These would be replaced with actual partner logos */}
            <div className="animate-pulse-subtle h-6 w-24 rounded bg-muted-foreground/30" />
            <div
              className="animate-pulse-subtle h-6 w-32 rounded bg-muted-foreground/30"
              style={{ animationDelay: "0.2s" }}
            />
            <div
              className="animate-pulse-subtle h-6 w-20 rounded bg-muted-foreground/30"
              style={{ animationDelay: "0.3s" }}
            />
            <div
              className="animate-pulse-subtle h-6 w-28 rounded bg-muted-foreground/30"
              style={{ animationDelay: "0.4s" }}
            />
            <div
              className="animate-pulse-subtle h-6 w-24 rounded bg-muted-foreground/30"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
