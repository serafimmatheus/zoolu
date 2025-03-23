import React from "react";
import { cn } from "@/app/_lib/utils";

interface ChipProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary" | "outline";
  size?: "sm" | "md";
}

export const Chip: React.FC<ChipProps> = ({
  children,
  className,
  variant = "default",
  size = "md",
  ...props
}) => {
  const variantStyles = {
    default: "bg-secondary text-secondary-foreground",
    primary: "bg-primary/10 text-primary",
    secondary: "bg-accent/10 text-accent",
    outline: "bg-transparent border border-border text-muted-foreground",
  };

  const sizeStyles = {
    sm: "text-xs px-2 py-0.5",
    md: "text-sm px-3 py-1",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full font-medium",
        variantStyles[variant],
        sizeStyles[size],
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
