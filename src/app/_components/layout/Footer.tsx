
import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer className="bg-secondary pt-16 pb-8 px-4 md:px-0">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <h3 className="text-lg font-bold">PawsPlanner</h3>
            <p className="text-sm text-muted-foreground">
              Connecting pet owners with the best pet service providers. Book grooming, boarding, and more with ease.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">For Pet Owners</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/explore"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Find Pet Services
                </a>
              </li>
              <li>
                <a
                  href="/account"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Manage Your Pets
                </a>
              </li>
              <li>
                <a
                  href="/bookings"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  My Bookings
                </a>
              </li>
              <li>
                <a
                  href="/help"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Help Center
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">For Businesses</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/business/signup"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  List Your Business
                </a>
              </li>
              <li>
                <a
                  href="/business/resources"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Business Resources
                </a>
              </li>
              <li>
                <a
                  href="/business/pricing"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Pricing Plans
                </a>
              </li>
              <li>
                <a
                  href="/business/support"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Business Support
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-sm font-semibold">Company</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/careers"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/press"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Press
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} PawsPlanner. All rights reserved.
            </p>
          </div>

          <div className="flex space-x-6">
            <a
              href="/terms"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Terms of Service
            </a>
            <a
              href="/privacy"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="/cookies"
              className="text-xs text-muted-foreground hover:text-foreground transition-colors"
            >
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
