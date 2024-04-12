"use client";
import { useState } from "react";
import { cva } from "cva";
import cn from "@/app/utils/cn";
export default function Button({
  children,
  className,
  variant,
  size,
  disabled,
  ...props
}) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }), {
        "opacity-50 cursor-not-allowed": disabled,
      })}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary: "bg-primary text-white hover:bg-primary-hover",
      secondary: "bg-secondary text-black hover:bg-secondary-hover",
      outline:
        "border-2 border-outline bg-outline text-black hover:bg-outline-hover",
    },
    size: {
      sm: "text-sm px-2 py-1",
      md: "text-base px-4 py-2",
      lg: "text-xl px-9 py-3",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
