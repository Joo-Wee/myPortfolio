import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-[var(--radius-sm)] px-3 py-1 text-xs font-semibold transition-colors",
  {
    variants: {
      variant: {
        default:     "badge badge-primary",
        secondary:   "badge badge-secondary",
        success:     "badge badge-success",
        warning:     "badge badge-warning",
        destructive: "badge badge-danger",
        outline:     "border border-border text-foreground",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
