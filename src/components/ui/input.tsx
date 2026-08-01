import * as React from "react";
import { cn } from "@/lib/utils";

/* ── Input ─────────────────────────────────────────────────── */
export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, error, ...props }, ref) => (
    <input
      type={type}
      className={cn("input", error && "input-error", className)}
      ref={ref}
      {...props}
    />
  )
);
Input.displayName = "Input";

/* ── Textarea ──────────────────────────────────────────────── */
export interface TextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  error?: boolean;
}

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, error, ...props }, ref) => (
    <textarea
      className={cn("textarea", error && "input-error", className)}
      ref={ref}
      {...props}
    />
  )
);
Textarea.displayName = "Textarea";

/* ── Label ─────────────────────────────────────────────────── */
export interface LabelProps
  extends React.LabelHTMLAttributes<HTMLLabelElement> {}

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(
  ({ className, ...props }, ref) => (
    <label ref={ref} className={cn("form-label", className)} {...props} />
  )
);
Label.displayName = "Label";

export { Input, Textarea, Label };
