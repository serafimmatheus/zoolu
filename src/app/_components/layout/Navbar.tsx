"use client";

import { useState, useEffect } from "react";
import { cn } from "@/app/_lib/utils";
import { AnimatedButton } from "../ui/AnimatedButton";

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <header
      className={cn(
        "fixed left-0 right-0 top-0 z-40 px-4 transition-all duration-300 md:px-6",
        scrolled
          ? "bg-white/80 py-2 shadow-sm backdrop-blur-lg"
          : "bg-transparent py-4",
      )}
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center">
            <span className="text-xl font-bold text-foreground">
              PawsPlanner
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            <a
              href="/#features"
              className="story-link text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="story-link text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              How It Works
            </a>
            <a
              href="/#pricing"
              className="story-link text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Pricing
            </a>
            <a
              href="/blog"
              className="story-link text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Blog
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden items-center space-x-4 md:flex">
            <a
              href="/login"
              className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
            >
              Log in
            </a>
            <AnimatedButton size="sm">Sign up</AnimatedButton>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={cn(
                "transition-transform duration-300",
                mobileMenuOpen ? "rotate-90" : "",
              )}
            >
              {mobileMenuOpen ? (
                <path
                  d="M6 18L18 6M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              ) : (
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "overflow-hidden transition-all duration-300 ease-in-out md:hidden",
            mobileMenuOpen
              ? "mt-4 max-h-[400px] opacity-100"
              : "max-h-0 opacity-0",
          )}
        >
          <div className="flex flex-col space-y-4 py-4">
            <a
              href="/#features"
              className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a
              href="/#how-it-works"
              className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a
              href="/#pricing"
              className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Pricing
            </a>
            <a
              href="/blog"
              className="px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              onClick={() => setMobileMenuOpen(false)}
            >
              Blog
            </a>
            <div className="flex flex-col space-y-4 border-t border-border px-4 pt-4">
              <a
                href="/login"
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                Log in
              </a>
              <AnimatedButton size="sm" className="w-full">
                Sign up
              </AnimatedButton>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
