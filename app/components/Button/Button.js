"use client";
import { useState } from "react";
import { cva } from "cva";
import cn from "@/app/utils/cn";
export default function Button({
  children,
  className,
  variant,
  size,
  ...props
}) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    >
      {children}
    </button>
  );
}

const buttonVariants = cva("rounded-md", {
  variants: {
    variant: {
      primary: "bg-black text-white hover:bg-stone-800",
      secondary: "bg-slate-300 text-black hover:bg-slate-400",
      outline: "border-2 border-black text-black hover:bg-slate-200",
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
