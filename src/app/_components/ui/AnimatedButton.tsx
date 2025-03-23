import React from "react";
import { cn } from "@/app/_lib/utils";
import { Button, ButtonProps } from "@/app/_components/ui/button";

interface AnimatedButtonProps extends ButtonProps {
  withArrow?: boolean;
}

export const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  children,
  className,
  withArrow = false,
  ...props
}) => {
  return (
    <Button
      className={cn(
        "group relative overflow-hidden transition-all duration-300 ease-out hover:shadow-md",
        className,
      )}
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">
        {children}
        {withArrow && (
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
            className="transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        )}
      </span>
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary/80 to-accent/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </Button>
  );
};
