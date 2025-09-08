"use client";
import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

export function HoverBorderGradient({
  children,
  containerClassName,
  className,
  as: Tag = "button",
  duration = 1,
  clockwise = true,
  ...props
}) {
  const [direction, setDirection] = useState("TOP");

  const rotateDirection = (currentDirection) => {
    const directions = ["TOP", "LEFT", "BOTTOM", "RIGHT"];
    const currentIndex = directions.indexOf(currentDirection);
    const nextIndex = clockwise
      ? (currentIndex - 1 + directions.length) % directions.length
      : (currentIndex + 1) % directions.length;
    return directions[nextIndex];
  };

  // 🌟 Stronger multi-layer glow
  const movingMap = {
    TOP: `
      radial-gradient(35% 70% at 50% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 100%),
      radial-gradient(60% 100% at 50% 0%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)
    `,
    LEFT: `
      radial-gradient(30% 60% at 0% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 100%),
      radial-gradient(50% 90% at 0% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)
    `,
    BOTTOM: `
      radial-gradient(35% 70% at 50% 100%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 100%),
      radial-gradient(60% 100% at 50% 100%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)
    `,
    RIGHT: `
      radial-gradient(30% 60% at 100% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0.6) 40%, rgba(255,255,255,0) 100%),
      radial-gradient(50% 90% at 100% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,0) 100%)
    `,
  };

  const highlight = `
    radial-gradient(100% 250% at 50% 50%, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 60%, rgba(255,255,255,0) 100%)
  `;

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection((prevState) => rotateDirection(prevState));
    }, duration * 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Tag
      className={cn(
        "cursor-pointer relative flex rounded-xs border border-[#272727] content-center bg-black/20 hover:bg-black/10 transition duration-300 dark:bg-black/20 items-center justify-center overflow-visible p-px w-fit",
        containerClassName
      )}
      {...props}
    >
      <div
        className={cn(
          "w-auto text-white z-10 bg-black px-16 py-3 rounded-[inherit]",
          className
        )}
      >
        {children}
      </div>
      <motion.div
        className="absolute inset-0 z-0 rounded-[inherit]"
        style={{
          filter: "blur(3px)", // 🌟 much stronger spread
        }}
        initial={{ background: movingMap[direction] }}
        animate={{
          background: movingMap[direction],
        }}
        transition={{ ease: "easeInOut", duration: duration ?? 1 }}
      />
      <div className="bg-black absolute z-1 inset-[2px] rounded-[100px]" />
    </Tag>
  );
}
