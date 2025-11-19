"use client";
import React from "react";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  className,
  as: Tag = "button",
  ...props
}) {
  return (
    <Tag
      className={cn(
        "relative inline-flex items-center justify-center px-16 py-3 border border-white hover:border-[#181818] rounded-xs " +
        "text-white transition overflow-hidden group",
        className
      )}
      {...props}
    >
      {/* Text */}
      <span className="font-bold relative z-10 transition-colors duration-[0.3s] group-hover:text-[#181818]">
        {children}
      </span>

      {/* Fluid Fill Animation */}
      <span
        className="
          absolute inset-x-0 bottom-0 h-0 bg-[#4167A6] 
          transition-all duration-[0.3s]
          ease
          group-hover:h-full
        "
      />
    </Tag>
  );
}
