import React from "react";
import { BlurContainer } from "../ui/BlurContainer";
import { AnimatedButton } from "../ui/AnimatedButton";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      number: "01",
      title: "Create a free account",
      description:
        "Sign up in seconds with your email or social accounts. No credit card required to get started.",
      delay: "0.1s",
    },
    {
      number: "02",
      title: "Add your pets",
      description:
        "Create profiles for each of your pets with their details, preferences, and health requirements.",
      delay: "0.2s",
    },
    {
      number: "03",
      title: "Browse services",
      description:
        "Search for pet services near you, filter by type, read reviews, and compare options.",
      delay: "0.3s",
    },
    {
      number: "04",
      title: "Book and pay",
      description:
        "Select a time slot, book your appointment, and pay securely—all in one seamless flow.",
      delay: "0.4s",
    },
  ];

  return (
    <section className="px-4 py-20 md:px-6" id="how-it-works">
      <div className="container mx-auto">
        <div className="animate-fade-in mx-auto mb-16 max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">How it works</h2>
          <p className="text-lg text-muted-foreground">
            Book pet services in just a few simple steps, with no hassle or
            phone calls needed.
          </p>
        </div>

        <div className="relative">
          {/* Connection line */}
          <div className="absolute bottom-0 left-1/2 top-0 z-0 hidden w-px -translate-x-1/2 bg-primary/20 md:block" />

          <div className="relative z-10 space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in items-center gap-8`}
                style={{ animationDelay: step.delay }}
              >
                <div className="text-center md:w-1/2 md:text-left">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 font-bold text-primary">
                    {step.number}
                  </div>
                  <h3 className="mb-3 text-2xl font-semibold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>

                <div className="md:w-1/2">
                  <BlurContainer className="flex aspect-[4/3] items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br from-primary/5 to-accent/5">
                    <div className="font-medium text-muted-foreground">
                      Step {step.number} Illustration
                    </div>
                  </BlurContainer>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div
          className="animate-fade-in mt-20 text-center"
          style={{ animationDelay: "0.5s" }}
        >
          <h3 className="mb-4 text-2xl font-semibold">Ready to get started?</h3>
          <p className="mx-auto mb-8 max-w-md text-muted-foreground">
            Join thousands of pet owners whove simplified pet care with
            PawsPlanner.
          </p>
          <AnimatedButton size="lg" withArrow>
            Create your free account
          </AnimatedButton>
        </div>
      </div>
    </section>
  );
};
