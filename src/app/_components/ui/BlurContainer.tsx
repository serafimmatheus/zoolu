import React from "react";
import { cn } from "@/app/_lib/utils";

interface BlurContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export const BlurContainer: React.FC<BlurContainerProps> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={cn(
        "rounded-xl border border-white/20 bg-white/70 p-6 shadow-sm backdrop-blur-md",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
