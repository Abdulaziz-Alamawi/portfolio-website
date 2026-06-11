import * as React from "react";
import { cn } from "@/lib/utils";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "secondary" | "outline" | "accent";
}

function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors",
        variant === "default" && "bg-blue-500/15 text-blue-300 border border-blue-500/20",
        variant === "secondary" && "bg-white/5 text-muted border border-white/10",
        variant === "outline" && "border border-white/15 text-foreground",
        variant === "accent" && "bg-cyan-500/15 text-cyan-300 border border-cyan-500/20",
        className
      )}
      {...props}
    />
  );
}

export { Badge };
